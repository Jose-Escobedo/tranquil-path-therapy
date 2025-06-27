'use client';

import Link from 'next/link';
import { Leaf } from 'lucide-react';

export default function ServicesPreview() {
  const services = [
    'ADHD',
    'Anxiety & Panic',
    'Children of Divorce',
    'Community Outreach',
    'Couples Counseling',
    'EMDR',
    'Family Counseling',
    'Grief & Loss',
    'Group Therapy',
    'Individual Therapy',
    'LGBTQIA+ Affirming',
    'Maternal Mental Health',
    'Play Therapy',
    'Self-Esteem',
    'Sadness & Depression',
  ];

  return (
    <section className="relative bg-[#fdfcf9] py-20 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[var(--accent-dark)] mb-4">
          Areas of Care
        </h2>
        <p className="text-[#4b463d] mb-12 max-w-2xl mx-auto text-lg">
          Therapy at Tranquil Path is tailored to support your emotional well-being across life&apos;s seasons.
          Whether individual, couples, or family-based, our care is warm, inclusive, and trauma-informed.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-[#eae7df] shadow-lg rounded-xl p-6 flex items-center space-x-3 hover:shadow-xl transition duration-300"
            >
              <Leaf className="text-[var(--accent-dark)] w-6 h-6 flex-shrink-0" />
              <span className="text-[#444] font-medium">{service}</span>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <Link href="/services">
            <button className="bg-[var(--accent-dark)] cursor-pointer text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#4b463d] transition shadow-md">
              Explore All Services
            </button>
          </Link>
        </div>
      </div>

      {/* Soft background flourishes */}
      <div className="absolute -top-10 -left-20 w-48 h-48 bg-[var(--accent-dark)] opacity-5 rounded-full blur-3xl" />
      <div className="absolute -bottom-12 -right-24 w-60 h-60 bg-[var(--accent-dark)] opacity-10 rounded-full blur-2xl" />
    </section>
  );
}
