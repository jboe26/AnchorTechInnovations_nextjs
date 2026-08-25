import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-anchor-deep text-anchor-paper text-center py-8 mt-auto">
      <p className="text-sm">{currentYear} AnchorTech Innovations LLC</p>

      <a
        href="mailto:joshboepple@anchortech.org"
        className="text-sm text-anchor-paper/80 hover:text-white transition mt-2 inline-block"
      >
        joshboepple@anchortech.org
      </a>

      <div className="mt-3 flex justify-center gap-4">
        <Link
          href="/privacy"
          className="text-xs text-anchor-paper/60 hover:text-white transition"
        >
          Privacy Policy
        </Link>
        <Link
          href="/terms"
          className="text-xs text-anchor-paper/60 hover:text-white transition"
        >
          Terms of Use
        </Link>
      </div>
    </footer>
  );
}
