import Link from "next/link";

export const metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <main className="flex flex-1 items-center bg-surface text-text">
      <div className="mx-auto max-w-2xl px-6 py-24 text-center md:px-10">
        <p className="font-mono text-sm tracking-wide text-text/70">
          AnchorTech Innovations // 404
        </p>
        <h1 className="mt-6 font-[family-name:var(--font-montserrat)] text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
          Page not found.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-text/70">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <Link
          href="/"
          className="mt-9 inline-block rounded-md bg-accent px-6 py-3 font-semibold text-white transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-strong"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
