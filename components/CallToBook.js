import { Phone } from 'lucide-react';

export default function CallToBook() {
  return (
    <section className="max-w-4xl mx-auto my-20 px-6">
      <div className="bg-[var(--gold)] rounded-xl shadow-lg text-center py-12 px-8 flex flex-col items-center md:flex-row md:items-center md:justify-center md:gap-8">
        {/* Phone icon */}
        <Phone className="w-12 h-12 mb-6 md:mb-0 md:mr-4" />

        {/* Text block */}
        <div className="text-white font-bold">
          <p className="text-3xl md:text-4xl">Call to book an appointment!</p>
          <a
            href="tel:5551234567"
            className="text-white text-4xl font-extrabold hover:underline block mt-2"
          >
            (555) 123-4567
          </a>
        </div>
      </div>

      <p className="text-center text-[var(--gold)] font-semibold uppercase tracking-wider mt-6 mb-4">
        GET A FREE 15 MINUTE PHONE CONSULTATION
      </p>

      <div className="text-center">
        <a
          href="tel:5551234567"
          className="inline-block bg-[var(--gold)] text-white font-semibold rounded-full px-6 py-3 shadow-md hover:bg-yellow-400 transition"
          aria-label="Get your free consultation now"
        >
          Get your free consultation now!
        </a>
      </div>
    </section>
  );
}
