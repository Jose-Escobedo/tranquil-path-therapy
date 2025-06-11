'use client';

import Link from 'next/link';
import Image from 'next/image';

const blogPosts = [
  {
    category: 'Individual Therapy',
    title: 'Is Individual Therapy Right for You? What to Expect in Your First Sessions',
    date: 'March 27, 2025',
    summary:
      'Feeling overwhelmed or stuck in a rut? One-on-one therapy creates a space where you can unpack emotions, build self-awareness, and work through personal struggles with guidance. Learn what individual therapy looks like and how it can support your growth.',
    href: '/guidance/individual-therapy-first-session',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/pexels-alex-green-5699431-min.jpg?alt=media&token=1b683679-a061-4450-85c7-442c00dfbc1d',
  },
  {
    category: 'Individual Therapy',
    title: 'When to Consider Therapy: 10 Signs You Shouldn’t Ignore',
    date: 'March 6, 2025',
    summary:
      'Not sure if therapy is right for you? From feeling constantly anxious to struggling with relationships or sleep, here are 10 common signs that it might be time to seek support from a licensed therapist.',
    href: '/guidance/10-signs-you-might-need-therapy',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/pexels-cottonbro-4100638-min.jpg?alt=media&token=9af9e2cb-fa47-4041-ab95-34976bb15557',
  },
  {
    category: 'Family Counseling',
    title: 'How Family Counseling Builds Stronger Connections at Home',
    date: 'February 6, 2025',
    summary:
      'Families go through difficult seasons, and counseling can offer clarity and healing. Explore how family therapy helps build communication, resolve tension, and create a more connected home environment.',
    href: '/guidance/benefits-of-family-counseling',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/pexels-polina-zimmerman-3958379-min.jpg?alt=media&token=e6ef61b9-ef00-46ea-a91f-8652d5e2d79d',
  },
  {
    category: 'Family Therapy',
    title: 'Understanding Family Therapy: Goals, Tools, and What to Expect',
    date: 'January 3, 2025',
    summary:
      'Family therapy is more than just group talk—it’s about learning how to navigate conflict and rebuild trust. Discover what happens in sessions and the different approaches therapists use to help families thrive.',
    href: '/guidance/family-therapy-explained',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/pexels-shkrabaanthony-5217833.jpg?alt=media&token=010d94b0-2c87-4fc4-8acc-5ad281ceead4',
  },
];

export default function GuidanceSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 md:py-24 text-gray-900">
      <h1 className="text-4xl font-bold text-center mb-4">Your Therapy Questions Answered</h1>
      <p className="text-center mb-12 text-lg text-gray-700">
        Explore our articles to learn more about therapy, what to expect, and how it can support your growth.
      </p>

      <div className="grid gap-8 md:grid-cols-2">
        {blogPosts.map((post, index) => (
          <Link
            href={post.href}
            key={index}
            className="block bg-white rounded-lg shadow-md hover:shadow-lg transition border border-gray-200 overflow-hidden"
          >
            <div className="relative w-full h-48">
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={index === 0}
              />
            </div>

            <div className="p-6">
              <p className="text-sm text-[var(--gold)] font-semibold mb-1">{post.category}</p>
              <h2 className="text-xl font-bold mb-2">{post.title}</h2>
              <p className="text-sm text-gray-500 mb-4">Posted {post.date}</p>
              <p className="text-gray-700 line-clamp-4">{post.summary}</p>
              <span className="mt-4 inline-block text-[var(--gold)] font-medium">Read more →</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
