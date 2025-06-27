import { Phone } from 'lucide-react';

export default function CallToBook() {
  return (
    <section className="max-w-4xl mx-auto my-20 px-6">
      {/* Call Banner */}
      <div className="bg-[var(--accent-dark)] text-white rounded-2xl shadow-xl px-8 py-12 flex flex-col items-center md:flex-row md:justify-center md:gap-8 text-center md:text-left">
        {/* Phone Icon */}
        <div className="mb-6 md:mb-0">
          <Phone className="w-12 h-12 text-white" />
        </div>

        {/* Main Message */}
        <div>
          <p className="text-2xl md:text-3xl font-semibold">Ready to talk?</p>
          <p className="text-lg mt-2">
            We offer a free 15-minute consultation to help you get started.
          </p>
          <a
            href="tel:5551234567"
            className="inline-block mt-4 bg-white text-[var(--accent-dark)] font-semibold px-6 py-2 rounded-full shadow hover:bg-[var(--accent-light)] transition"
          >
            <span className="flex items-center justify-center gap-2">
              <Phone size={18} />
              (555) 123-4567
            </span>
          </a>
        </div>
      </div>

      {/* Secondary CTA */}
      <div className="text-center mt-10">
        <a
          href="tel:5551234567"
          className="inline-block bg-[var(--accent-dark)] text-white font-medium rounded-full px-6 py-3 shadow-md hover:bg-[var(--accent-light)] hover:text-[var(--accent-dark)] transition"
        >
          Get your free consultation now
        </a>
      </div>
    </section>
  );
}
