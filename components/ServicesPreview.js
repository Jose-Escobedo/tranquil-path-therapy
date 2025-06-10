import Link from "next/link";

export default function ServicesPreview() {
  const services = [
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
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
     
      <div className="bg-white rounded-xl shadow-xl p-8 md:p-12">
    
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[var(--gold)] mb-2">Therapy</h2>
          <h3 className="text-xl font-semibold mb-4">Services</h3>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-gray-700 text-lg font-medium mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition text-center"
            >
              {service}
            </div>
          ))}
        </div>

       
        <div className="text-center">
          <Link href="/services">
            <button className="cursor-pointer bg-[var(--gold)] hover:bg-yellow-400 text-white font-semibold py-3 px-8 rounded shadow-md transition">
              View All Services
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
