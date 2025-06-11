'use client';

import { Phone } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="text-[#0A2540] px-6 py-15 md:px-12 max-w-5xl mx-auto">
      <h1 className="text-5xl font-bold mb-8">About Golden Scales Family Therapy</h1>
      <p className="text-lg leading-relaxed mb-6">
        At Golden Scales Family Therapy, we are dedicated to helping individuals, couples, and families navigate life&apos;s challenges with compassion and care.
      </p>
      <p className="text-lg leading-relaxed mb-6">
        Our approach is rooted in fostering growth, healing, and resilience through evidence-based therapeutic practices tailored to your unique needs.
      </p>
      <p className="text-lg leading-relaxed mb-10">
        Whether you&apos;re seeking support for personal struggles, relationship issues, or family dynamics, we strive to provide a safe and welcoming environment for your healing journey.
      </p>

      <a
        href="tel:+15551234567"
        className="block w-full bg-[var(--gold)] hover:bg-yellow-400 text-white font-semibold py-5 px-6 text-center text-lg md:text-xl rounded-lg shadow-md transition duration-200 flex items-center justify-center gap-3"
      >
        <Phone className="w-6 h-6" />
        Call today for your free 15 minute phone consultation!
      </a>
    </section>
  );
}
