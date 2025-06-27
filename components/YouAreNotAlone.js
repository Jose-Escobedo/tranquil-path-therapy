'use client';

import { useEffect, useRef, useState } from 'react';
import { HeartHandshake } from 'lucide-react';

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

export default function YouAreNotAlone() {
  return (
    <section className="px-6 py-20 md:py-28 bg-[#f3f1ec]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {[...Array(3)].map((_, index) => (
          <FadeInOnScroll key={index}>
            <div className="h-full flex flex-col justify-between bg-white/80 backdrop-blur-md rounded-xl shadow-lg p-6 text-center">
              {index === 0 && (
                <>
                  <div className="flex justify-center mb-4">
                    <HeartHandshake className="w-10 h-10 text-[var(--accent-dark)]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--accent-dark)] mb-3">
                    You Are Not Alone
                  </h3>
                  <p className="text-[#4b463d] text-base leading-relaxed">
                    Life can be overwhelming. Whether you&apos;re dealing with anxiety, grief, or just feeling stuck—support is within reach.
                  </p>
                </>
              )}
              {index === 1 && (
                <>
                <div className="flex justify-center mb-4">
                    <HeartHandshake className="w-10 h-10 text-[var(--accent-dark)]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--accent-dark)] mb-3">
                    Safe & Affirming Space
                  </h3>
                  <p className="text-[#4b463d] text-base leading-relaxed">
                    We offer a warm, nonjudgmental environment where you can slow down, unpack what you&apos;re carrying, and feel truly seen.
                  </p>
                </>
              )}
              {index === 2 && (
                <>
                <div className="flex justify-center mb-4">
                    <HeartHandshake className="w-10 h-10 text-[var(--accent-dark)]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--accent-dark)] mb-3">
                    Your Path to Healing
                  </h3>
                  <p className="text-[#4b463d] text-base leading-relaxed">
                    Therapy is a space to reconnect with your own clarity, strength, and voice—at your own pace, with support.
                  </p>
                </>
              )}
            </div>
          </FadeInOnScroll>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a
          href="/contact"
          className="inline-block bg-[var(--accent-dark)] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#4b463d] transition"
        >
          Schedule a Consultation
        </a>
      </div>
    </section>
  );
}
