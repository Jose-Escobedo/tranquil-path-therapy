import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-[#0A2540] py-8 px-6 mt-16">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/gstlogo.png?alt=media&token=3be8e5b0-504e-4ea4-8375-a0b17ad22973"
            alt="Golden Scales Family Therapy Logo"
            width={150}
            height={50}
            priority
          />
        </Link>

        {/* Copyright */}
        <p className="text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Golden Scales Family Therapy. All rights reserved.
        </p>

        {/* Links */}
        <div className="space-x-6 text-sm flex flex-wrap justify-center md:justify-end">
          <Link href="/practice-policies" className="hover:text-[var(--gold)]">
            Practice Policies
          </Link>
          <Link href="/accessibility" className="hover:text-[var(--gold)]">
            Accessibility
          </Link>
          <a href="tel:+1234567890" className="hover:text-[var(--gold)]">
            (555) 123-4567
          </a>
        </div>
      </div>
    </footer>
  );
}
