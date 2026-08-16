"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass =
    "font-mono text-sm tracking-wide text-anchor-paper/80 transition hover:text-anchor-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-anchor-accent";

  return (
    <nav className="w-full border-b border-white/10 bg-[#4E769A] text-anchor-paper">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="font-[family-name:var(--font-montserrat)] font-bold tracking-tight text-anchor-paper hover:text-anchor-accent transition"
        >
          AnchorTech
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 font-semibold">
          <Link href="/" className={linkClass}>
            Home
          </Link>
          <Link href="/about" className={linkClass}>
            About
          </Link>
          <Link href="/pricing" className={linkClass}>
            Pricing
          </Link>
          <Link href="/contact" className={linkClass}>
            Contact
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span className="block w-6 h-0.5 bg-anchor-paper mb-1"></span>
          <span className="block w-6 h-0.5 bg-anchor-paper mb-1"></span>
          <span className="block w-6 h-0.5 bg-anchor-paper"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 pb-4">
          <Link href="/" className={linkClass} onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link href="/about" className={linkClass} onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link href="/pricing" className={linkClass} onClick={() => setIsOpen(false)}>
            Pricing
          </Link>
          <Link href="/contact" className={linkClass} onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
