import Link from "next/link";

export const metadata = {
  title: "You are registered — Technology Classes",
  robots: { index: false },
};

export default function ClassRegistered() {
  return (
    <section className="bg-surface text-text">
      <div className="mx-auto max-w-2xl px-6 pt-24 pb-24 text-center md:px-10 md:pt-32">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-3xl font-extrabold text-green-800">
          ✓
        </div>
        <h1 className="mt-6 font-[family-name:var(--font-montserrat)] text-4xl font-extrabold leading-tight tracking-tight">
          You are in.
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-text/70">
          Your payment went through and your seat is saved. A confirmation
          email is on its way with the class address, directions, and what to
          bring: your phone or tablet and your questions.
        </p>
        <p className="mt-8">
          <Link href="/classes" className="font-semibold text-primary underline">
            Back to the classes page
          </Link>
        </p>
      </div>
    </section>
  );
}
