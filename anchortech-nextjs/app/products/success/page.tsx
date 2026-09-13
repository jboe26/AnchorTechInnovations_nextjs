import { stripe } from "@/lib/stripe";
import { supabaseAdmin } from "@/lib/supabase/admin";

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <main className="bg-surface text-text">
      <div className="mx-auto max-w-xl px-6 py-24 text-center md:px-10 md:py-32">
        <p className="font-mono text-sm tracking-wide text-text/70">
          AnchorTech Innovations // order
        </p>
        {children}
      </div>
    </main>
  );
}

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { session_id } = await searchParams;

  if (!session_id) {
    return (
      <Shell>
        <h1 className="mt-6 font-[family-name:var(--font-montserrat)] text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
          Something's missing
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-text/70">
          There's no order to look up here. If you just paid, check your email for the download
          link, or email me and I'll help.
        </p>
      </Shell>
    );
  }

  let session;
  try {
    session = await stripe.checkout.sessions.retrieve(session_id);
  } catch {
    return (
      <Shell>
        <h1 className="mt-6 font-[family-name:var(--font-montserrat)] text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
          We couldn't find that order
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-text/70">
          Email me and I'll sort it out.
        </p>
      </Shell>
    );
  }

  if (session.payment_status !== "paid") {
    return (
      <Shell>
        <h1 className="mt-6 font-[family-name:var(--font-montserrat)] text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
          Payment not completed
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-text/70">
          This order hasn't gone through yet. If you think this is a mistake, email me.
        </p>
      </Shell>
    );
  }

  const { data: purchase } = await supabaseAdmin
    .from("storefront_purchases")
    .select("*, storefront_products(name)")
    .eq("stripe_session_id", session_id)
    .maybeSingle();

  const product = purchase?.storefront_products as { name: string } | null;

  if (!purchase || purchase.status !== "paid" || !purchase.download_token) {
    // Stripe confirms payment succeeded, but the webhook hasn't caught up
    // yet. Auto-refresh instead of showing an error -- this resolves
    // itself within a few seconds in the normal case.
    return (
      <>
        <meta httpEquiv="refresh" content="3" />
        <Shell>
          <h1 className="mt-6 font-[family-name:var(--font-montserrat)] text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
            Finishing up your order
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-text/70">
            Payment went through. This page will refresh automatically in a few seconds with your
            download link.
          </p>
        </Shell>
      </>
    );
  }

  const downloadUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/api/download/${purchase.download_token}`;

  return (
    <Shell>
      <h1 className="mt-6 font-[family-name:var(--font-montserrat)] text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
        You're all set.
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-text/70">
        Thanks for picking up {product?.name ?? "your purchase"}. Your download is ready below.
      </p>
      <a
        href={downloadUrl}
        className="mt-9 inline-block rounded-md bg-accent px-8 py-3.5 font-semibold text-white transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        Download now
      </a>
      <p className="mt-6 text-sm leading-relaxed text-text/70">
        This link was also emailed to {purchase.email || "you"}, so closing this tab isn't losing
        it. Come back to that email whenever you need to redownload.
      </p>
    </Shell>
  );
}
