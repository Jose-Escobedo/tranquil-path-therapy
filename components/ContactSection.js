'use client';

import { Mail, MapPin, Phone, Globe } from 'lucide-react';

export default function ContactSection() {
  return (
    <section className="bg-white/90 rounded-xl shadow-md p-8 text-gray-900">
      <h2 className="text-3xl font-bold mb-6 text-center">Get in Touch</h2>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="min-w-[1.75rem] scale-110 text-[var(--gold)]">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Phone</h3>
              <a href="tel:5551234567" className="hover:underline block">555-123-4567</a>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="min-w-[1.75rem] scale-110 text-[var(--gold)]">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Email</h3>
              <a href="mailto:support@therapysitestudio.com" className="hover:underline block">
                support@therapysitestudio.com
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="min-w-[1.75rem] scale-110 text-[var(--gold)]">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Location</h3>
              <p className="leading-tight">
                1532 Hillside Avenue, Suite 304<br />
                Willow Creek, CA 93561
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="min-w-[1.75rem] scale-110 text-[var(--gold)]">
              <Globe className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Service Areas</h3>
              <p className="leading-tight">
                In-person therapy for: Burbank, Downtown LA, Tujunga, Sunland,
                Lake View Terrace, Shadow Hills, Glendale, Pasadena, and more.
              </p>
              <p className="mt-2 leading-tight">
                Telehealth available throughout California.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full h-72 md:h-auto rounded-lg overflow-hidden shadow-inner">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3169.1458327364094!2d-122.08560818469062!3d37.42199977982562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb24c2e9f5d99%3A0xe3a99849ce180b6e!2sGoogleplex!5e0!3m2!1sen!2sus!4v1621049994949!5m2!1sen!2sus"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
