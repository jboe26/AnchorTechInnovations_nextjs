"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#3b6a96] text-white w-full">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 mx-auto font-semibold">
          <Link href="/" className="hover:opacity-75 transition">
            Home
          </Link>
          <Link href="/about" className="hover:opacity-75 transition">
            About
          </Link>
          <Link href="/pricing" className="hover:opacity-75 transition">
            Pricing
          </Link>
          <Link href="/contact" className="hover:opacity-75 transition">
            Contact
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden ml-auto"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 pb-4 font-semibold">
          <Link href="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link href="/pricing" onClick={() => setIsOpen(false)}>
            Pricing
          </Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
