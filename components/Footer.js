import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#4b463d] text-[#0A2540] py-8 px-6 ">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/tranq%20white%20lgoo.png?alt=media&token=9b7211ee-079b-4778-90a1-57cc00d25d61"
            alt="Tranquil Path Therapy Logo"
            width={150}
            height={50}
            priority
          />
        </Link>

        {/* Copyright */}
        <p className="text-sm text-center text-white md:text-left">
          &copy; {new Date().getFullYear()} Tranquil Path Therapy. All rights reserved.
        </p>

        {/* Links */}
        <div className="space-x-6 text-sm flex flex-wrap justify-center md:justify-end">
          <Link href="/practice-policies" className="text-white">
            Practice Policies
          </Link>
          <Link href="/accessibility" className="text-white">
            Accessibility
          </Link>
          <a href="tel:+5551234567" className="text-white">
            (555) 123-4567
          </a>
        </div>
      </div>
    </footer>
  );
}
