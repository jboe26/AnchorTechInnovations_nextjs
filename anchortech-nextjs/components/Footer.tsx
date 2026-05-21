export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#3b6a96] text-white text-center py-8 mt-auto">
      <p className="text-sm">{currentYear} AnchorTech Innovations LLC</p>

      <a
        href="mailto:joshboepple@anchortech.org"
        className="text-sm text-blue-100 hover:text-white transition mt-2 inline-block"
      >
        joshboepple@anchortech.org
      </a>
    </footer>
  );
}
