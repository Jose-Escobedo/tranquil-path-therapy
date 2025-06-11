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
      className={`transition-opacity duration-700 ease-out ${
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
    <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      <div className="bg-white rounded-xl shadow-xl p-8 md:p-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[var(--gold)] mb-2">Therapy</h2>
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Services</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-gray-700 text-lg font-medium mb-12">
          {allServices.map((service, index) => (
            <FadeInOnScroll key={index}>
              <div className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition text-center cursor-default">
                {service}
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
