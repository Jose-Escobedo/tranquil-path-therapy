import Link from "next/link";

export default function GeneralBreakdown() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">

      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-2 text-[var(--gold)]">
          Mental Health Services
        </h2>
        <h3 className="text-xl font-semibold mb-4">Golden Scales Family Therapy</h3>
        <p className="text-gray-700">
          Golden Scales Family Therapy is a thriving practice based in Los Angeles, CA,
          deeply committed to fostering community and healing. We provide talk therapy
          tailored to individual needs — whether that’s improving family communication,
          resolving differences between partners, or helping children develop emotional regulation.
        </p>
      </div>

      <div className="flex flex-col md:flex-row md:items-start md:space-x-16">
     
        <div className="md:flex-1 mb-12 md:mb-0">
          <h4 className="text-lg font-semibold mb-4">Our areas of specialty include:</h4>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Depression</li>
            <li>Anxiety</li>
            <li>Relationship issues (Couples Counseling)</li>
            <li>Post-Partum Anxiety & Depression</li>
            <li>Parenting (Family Counseling)</li>
            <li>ADHD</li>
            <li>Trauma</li>
            <li>Children of Separated or Divorced Parents</li>
            <li>Significant life transitions</li>
          </ul>
        </div>

        <div className="md:flex-1 flex flex-col justify-between">
          <p className="mb-8 text-gray-700">
            Finding mental health services for children can be challenging. At Golden Scales,
            we take pride in supporting children and families through various life stages.
            Many clients start with us as young children and continue through higher education.
            We often see siblings and entire families within one caring, supportive office.
          </p>
          <Link href="/about">
            <button className="cursor-pointer bg-[var(--gold)] hover:bg-yellow-400 text-white font-semibold py-3 px-8 rounded shadow-md transition self-start">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
