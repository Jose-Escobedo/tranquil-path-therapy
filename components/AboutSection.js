'use client';

import { Phone } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="text-[var(--foreground)] px-6 py-20 md:px-12 max-w-5xl mx-auto">
      <h1 className="text-5xl font-bold mb-8 text-center">About Tranquil Path Therapy</h1>
      
      <p className="text-lg leading-relaxed mb-6">
        At Tranquil Path Therapy, we guide individuals, couples, and families through life&apos;s challenges with warmth, clarity, and care.
      </p>
      
      <p className="text-lg leading-relaxed mb-6">
        Our approach blends evidence-based techniques with deep listening and collaboration—tailored to meet you where you are, and support where you&apos;d like to go.
      </p>
      
      <p className="text-lg leading-relaxed mb-10">
        Whether you&apos;re navigating anxiety, relationship dynamics, or family transitions, our space is built for healing, growth, and connection.
      </p>

      <a
        href="tel:+15551234567"
        className="block w-full bg-[var(--accent-dark)] hover:bg-black text-white font-semibold py-5 px-6 text-center text-lg md:text-xl rounded-lg shadow-md transition duration-200 flex flex-col items-center gap-2 md:flex-row md:justify-center md:gap-3"
      >
        <Phone className="w-10 h-10 md:w-6 md:h-6" />
        <span>Call today for your free 15-minute consultation!</span>
      </a>
    </section>
  );
}
