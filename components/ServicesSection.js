'use client';

import { useEffect, useRef, useState } from 'react';

const allServices = [
  "ADHD",
  "Anxiety",
  "Anxiety and Panic",
  "Children of Divorce",
  "Community Outreach",
  "Couples Counseling",
  "EMDR",
  "Family Counseling",
  "Grief",
  "Group Therapy",
  "Individual Therapy",
  "LGBTQIA+",
  "Play Therapy",
  "Sadness & Depression",
  "Maternal Mental Health",
  "Preparing Relationships",
  "Spiritual Direction",
  "Telehealth",
  "Therapy for Teens",
  "Trauma Treatment",
  "Walk and Talk Therapy",
];

// Fade-in on scroll wrapper
function FadeInOnScroll({ children }) {
  const ref = useRef();
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ willChange: 'opacity, transform' }}
    >
      {children}
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section className="px-6 py-20 md:py-28 bg-[#f3f1ec]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-[var(--accent-dark)] mb-2">Tranquil Path Therapy</h2>
          <h3 className="text-xl font-semibold text-[#4b463d]">Our Services</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {allServices.map((service, index) => (
            <FadeInOnScroll key={index}>
              <div className="h-full bg-white/80 backdrop-blur-md border border-gray-200 rounded-xl p-6 shadow-md text-center hover:shadow-lg transition">
                <p className="text-[var(--accent-dark)] font-medium">{service}</p>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
