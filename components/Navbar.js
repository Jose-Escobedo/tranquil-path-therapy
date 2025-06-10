'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white text-[#0A2540] px-6 py-4 z-50 shadow-md flex justify-between items-center">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/gstlogo.png?alt=media&token=3be8e5b0-504e-4ea4-8375-a0b17ad22973"
          alt="Golden Scales Family Therapy Logo"
          width={210}  
          height={70}  
          priority
        />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-10 text-lg font-semibold">
        <Link href="#about" className="hover:text-[var(--gold)]">About</Link>
        <Link href="#services" className="hover:text-[var(--gold)]">Services</Link>
        <Link href="#guidance" className="hover:text-[var(--gold)]">Guidance</Link>
        <Link href="#rates" className="hover:text-[var(--gold)]">Rates & Insurance</Link>
        <Link href="#contact" className="hover:text-[var(--gold)]">Contact</Link>
        <Link href="tel:+1234567890" className="hover:text-[var(--gold)]">(555) 123-4567</Link>
      </div>

      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden focus:outline-none z-50"
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white text-[#0A2540] flex flex-col items-center space-y-6 py-6 md:hidden shadow-lg border-t border-gray-200">
          <Link href="#about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="#services" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link href="#guidance" onClick={() => setMenuOpen(false)}>Guidance</Link>
          <Link href="#rates" onClick={() => setMenuOpen(false)}>Rates & Insurance</Link>
          <Link href="#contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link href="tel:+1234567890" onClick={() => setMenuOpen(false)}>(555) 123-4567</Link>
        </div>
      )}
    </nav>
  );
}
