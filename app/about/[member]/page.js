
import BreadcrumbBanner from '@/components/BreadcrumbBanner';
import Image from 'next/image';

const profiles = {
  'john-smith': {
    name: 'John Smith',
    title: 'Owner and Licensed Marriage & Family Therapist',
    registration: 'LMFT #123456',
    supervisor: null,
    image: 'https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/A_casual_photo_of_man_therapis%20(1).jpeg?alt=media&token=350f60f9-1733-4d61-bc17-8cdedee84b0b',
    bio: `Therapy is a space for transformation. With over a decade of experience, I offer a safe environment to explore life’s challenges. I believe therapy works best through trust and honest collaboration. Whether you're facing family struggles, relationship issues, or personal growth challenges, I'm here to guide and support you.`,
    contact: '+15551234567',
    rates: [
      '$150 – per 45 minute session (individual)',
      '$180 – per 60 minute session (individual, couple, or family)',
      '$220 – per 75 minute session (individual, couple, or family)',
      '$260 – per 90 minute session (couple or family)',
    ],
  },
  'henry-zubac': {
    name: 'Henry Zubac',
    title: 'Licensed Marriage and Family Therapist & Clinical Supervisor',
    registration: 'LMFT #123456',
    supervisor: null,
    image: 'https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/A_casual_photo_of_man_therapis%20(2).jpeg?alt=media&token=a102abc7-7999-49db-a724-f4400bedc3a2',
    bio: `With years of experience in clinical supervision and therapy, I help therapists and clients thrive. My focus is helping families and couples navigate complex emotional landscapes using practical and empathetic approaches.`,
    contact: '+15551234567',
    rates: [
      '$160 – per 45 minute session (individual)',
      '$190 – per 60 minute session (individual, couple, or family)',
      '$230 – per 75 minute session (individual, couple, or family)',
      '$270 – per 90 minute session (couple or family)',
    ],
  },
  'rachel-stanford': {
    name: 'Rachel Stanford',
    title: 'Administrative Coordinator',
    registration: null,
    supervisor: null,
    image: 'https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/A_casual_photo_of_woman_therap%20(5).jpeg?alt=media&token=6c3047a0-cd99-4ee9-a429-fe4008a23497',
    bio: `As the Administrative Coordinator, I ensure that every client receives smooth, professional, and welcoming support when they reach out. I'm your point of contact for questions about scheduling, billing, and getting matched with the right therapist.`,
    contact: '+15551234567',
    rates: [],
  },
  'amber-cole': {
    name: 'Amber Cole, AMFT',
    title: 'Associate Marriage & Family Therapist',
    registration: 'AMFT #123456',
    supervisor: 'Supervised by John Smith, LMFT',
    image: 'https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/A_casual_photo_of_woman_therap%20(3).jpeg?alt=media&token=0f771ac8-d2ce-474b-bb23-ad59f570d6e0',
    bio: `Therapy is a place of growth, self-discovery, and support. I help individuals, couples, and families work through life transitions and emotional challenges by creating a space that feels safe and empowering.`,
    contact: '+15551234567',
    rates: [
      '$145 – per 45 minute session (individual)',
      '$175 – per 60 minute session (individual, couple, or family)',
      '$210 – per 75 minute session (individual, couple, or family)',
      '$250 – per 90 minute session (couple or family)',
    ],
  },
};

export default function MemberProfile({ params }) {
  const member = profiles[params.member];

  if (!member) {
    return <div className="text-center py-20 text-gray-500">Team member not found.</div>;
  }

  return (
    <>
    <BreadcrumbBanner
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Team", href: "/about"},
        { label: `Guidance Member: ${member.name}`}
      ]}
    />
    <section className="min-h-screen px-6 py-16 md:px-12 max-w-6xl mx-auto text-[#0A2540] grid md:grid-cols-2 gap-12">
    
      <div className="flex flex-col items-center md:items-start">
        <div className="rounded-xl overflow-hidden shadow-md mb-4">
          <Image
            src={member.image}
            alt={member.name}
            width={400}
            height={400}
            className="object-cover w-full h-auto max-h-[450px]"
            style={{ objectPosition: 'center top' }}
          />
        </div>

        <div className="bg-white shadow-lg rounded-lg px-6 py-4 text-center md:text-left w-full">
          <h2 className="text-xl font-bold text-[#0A2540] mb-1">{member.name}</h2>
          <p className="text-[var(--gold)] font-medium">{member.title}</p>
          {member.registration && <p className="text-sm mt-1 text-gray-600">{member.registration}</p>}
          {member.supervisor && <p className="text-sm mt-1 text-gray-600 italic">{member.supervisor}</p>}
        </div>
      </div>

      <div className="text-lg leading-relaxed space-y-6">
        <p>{member.bio}</p>

        <div>
          <h3 className="font-semibold text-xl mt-6 mb-2">Direct Line:</h3>
          <a
            href={`tel:${member.contact}`}
            className="text-[var(--gold)] underline hover:text-yellow-600"
          >
            {member.contact}
          </a>
        </div>

        {member.rates.length > 0 && (
          <div>
            <h3 className="font-semibold text-xl mt-6 mb-2">Session Rates:</h3>
            <ul className="list-disc list-inside space-y-1">
              {member.rates.map((rate, index) => (
                <li key={index}>{rate}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
    </>
  );
}

 