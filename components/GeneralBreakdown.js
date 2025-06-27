'use client';

import Link from 'next/link';
//bg-[#fdfcf9]

export default function GeneralBreakdown() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 md:py-24 w-full">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-2 text-[var(--accent-dark)]">
          Therapy That Meets You Where You Are
        </h2>
        <h3 className="text-xl font-semibold mb-4 text-[#4b463d]">
          Tranquil Path Therapy, Los Angeles
        </h3>
        <p className="text-[#444]">
          At Tranquil Path Therapy, we offer thoughtful and inclusive mental health care
          for individuals, couples, and families. Our mission is to support you through
          life&apos;s transitions—whether that means healing from loss, navigating change,
          or reconnecting with yourself and those around you.
        </p>
      </div>

      <div className="flex flex-col md:flex-row md:items-start md:space-x-16">
        <div className="md:flex-1 mb-12 md:mb-0">
          <h4 className="text-lg font-semibold mb-4 text-[#4b463d]">
            Areas We Specialize In:
          </h4>
          <ul className="list-disc list-inside text-[#444] space-y-2">
            <li>Life Transitions</li>
            <li>Grief & Loss</li>
            <li>Self-Esteem & Identity Exploration</li>
            <li>Anxiety & Overwhelm</li>
            <li>Depression & Burnout</li>
            <li>Couples & Relationship Counseling</li>
            <li>Family Therapy & Parenting Support</li>
            <li>Trauma & Emotional Regulation</li>
            <li>Young Adult Life & Career Stress</li>
          </ul>
        </div>

        <div className="md:flex-1 flex flex-col justify-between">
          <p className="mb-8 text-[#444]">
            We understand that no two journeys are the same. That&apos;s why our approach
            is rooted in warmth, authenticity, and a deep respect for your unique story.
            Whether you&apos;re seeking therapy for yourself or your family, we&apos;re here
            to walk beside you with care and intention.
          </p>
          <Link href="/about">
            <button className="cursor-pointer bg-[var(--accent-dark)] hover:bg-[#4b463d] text-white font-semibold py-3 px-8 rounded shadow-md transition self-start">
              Learn More About Our Approach
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
