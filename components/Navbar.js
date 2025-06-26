'use client';

import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  const handleMobileClick = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#4b463d] text-white px-6 py-4 z-50 shadow-md flex justify-between items-center">
      {/* Logo */}
      {isHome ? (
        <ScrollLink
          to="hero"
          smooth={true}
          duration={500}
          offset={-70}
          className="flex items-center cursor-pointer"
        >
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/tranq%20white%20lgoo.png?alt=media&token=9b7211ee-079b-4778-90a1-57cc00d25d61"
            alt="Tranquil Path Therapy Logo"
            width={210}
            height={70}
            priority
          />
        </ScrollLink>
      ) : (
        <Link href="/" className="flex items-center">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/tranq%20white%20lgoo.png?alt=media&token=9b7211ee-079b-4778-90a1-57cc00d25d61"
            alt="Tranquil Path Therapy Logo"
            width={210}
            height={70}
            priority
          />
        </Link>
      )}

      {/* Desktop Menu */}
<div className="hidden xl:flex items-center space-x-10 text-lg font-semibold">
  <Link href="/about" className="hover:text-[var(--accent-dark)] transition">About</Link>
  <Link href="/services" className="hover:text-[var(--accent-dark)] transition">Services</Link>
  <Link href="/blog" className="hover:text-[var(--accent-dark)] transition">Blog</Link>
  <Link href="/rates-insurance" className="hover:text-[var(--accent-dark)] transition">Rates & Insurance</Link>
  <Link href="/contact" className="hover:text-[var(--accent-dark)] transition">Contact</Link>
  <a
    href="tel:+15551234567"
    className="flex items-center space-x-2 bg-[var(--accent-dark)] text-white px-4 py-2 rounded-lg hover:bg-white hover:text-[var(--accent-dark)] transition"
  >
    <Phone size={18} />
    <span>Call Us</span>
  </a>
</div>


      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="xl:hidden focus:outline-none z-50"
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#fdfcf9]/95 backdrop-blur text-[#4b463d] flex flex-col items-center space-y-6 py-6 xl:hidden shadow-lg border-t border-[var(--border-muted)]">
          <Link href="/about" onClick={handleMobileClick}>About</Link>
          <Link href="/services" onClick={handleMobileClick}>Services</Link>
          <Link href="/blog" onClick={handleMobileClick}>Blog</Link>
          <Link href="/rates-insurance" onClick={handleMobileClick}>Rates & Insurance</Link>
          <Link href="/contact" onClick={handleMobileClick}>Contact</Link>
          <a
          href="tel:+15551234567"
          className="flex items-center space-x-2 bg-[var(--accent-dark)] text-white px-4 py-2 rounded-lg hover:bg-white hover:text-[var(--accent-dark)] transition"
        >
          <Phone size={18} />
          <span>Call Us</span>
        </a>
        </div>
      )}
    </nav>
  );
}
