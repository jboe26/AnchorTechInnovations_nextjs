const messages: Record<string, { heading: string; body: string }> = {
  invalid: {
    heading: "That download link isn't working",
    body:
      "It might be mistyped, or the purchase behind it hasn't gone through yet. If you just paid, give it a minute and check your email for the correct link -- otherwise, email me and I'll sort it out.",
  },
  limit: {
    heading: "You've reached the download limit for this purchase",
    body:
      "That's usually plenty for normal use, but if you genuinely need it again, email me and I'll get you sorted.",
  },
  rate: {
    heading: "Slow down a moment",
    body:
      "This link was just used. Wait a minute and try again -- if it keeps happening, email me.",
  },
};

export default async function DownloadIssuePage({
  searchParams,
}: {
  searchParams: Promise<{ reason?: string }>;
}) {
  const { reason } = await searchParams;
  const content = messages[reason ?? ""] ?? messages.invalid;

  return (
    <main className="bg-surface text-text">
      <div className="mx-auto max-w-xl px-6 py-24 text-center md:px-10 md:py-32">
        <p className="font-mono text-sm tracking-wide text-text/70">
          AnchorTech Innovations // download
        </p>
        <h1 className="mt-6 font-[family-name:var(--font-montserrat)] text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
          {content.heading}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-text/70">{content.body}</p>
        <a
          href="mailto:joshboepple@anchortech.org"
          className="mt-9 inline-block rounded-md bg-accent px-8 py-3.5 font-semibold text-white transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Email me
        </a>
      </div>
    </main>
  );
}
