import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import BreadcrumbBanner from '@/components/BreadcrumbBanner';

const blogPosts = [
  {
    slug: 'individual-therapy-first-session',
    category: 'Individual Therapy',
    title: 'Is Individual Therapy Right for You? What to Expect in Your First Sessions',
    date: 'March 27, 2025',
    content: [
      {
        type: 'paragraph',
        text: 'Feeling overwhelmed by stress, anxiety, or major life changes? Taking the step to seek therapy can be a powerful way to understand yourself better and find support through difficult times.',
      },
      {
        type: 'paragraph',
        textParts: [
          'Individual therapy, also known as one-on-one counseling, provides a private and safe space to explore your emotions, thoughts, and experiences.',
          '.',
        ],
      },
      {
        type: 'bold',
        text: 'At our practice, we specialize in helping individuals navigate challenges such as anxiety, depression, stress, and relationship struggles with compassion and personalized care.',
      },
      {
        type: 'paragraph',
        text: 'Each therapy journey is unique, and our goal is to meet you where you are and support your growth at your own pace.',
      },
      {
        type: 'paragraph',
        text: 'This guide will walk you through what individual therapy looks like and what you can expect in your first sessions.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'What Is Individual Therapy?',
      },
      {
        type: 'paragraph',
        text: 'Individual therapy is a confidential, one-on-one conversation between you and a licensed therapist. It creates a judgment-free environment where you can openly discuss your feelings, challenges, and goals.',
      },
      {
        type: 'paragraph',
        text: 'Therapists use various evidence-based techniques tailored to your needs to help you gain insight, develop coping skills, and improve your emotional well-being.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'What Happens in Your First Session?',
      },
      {
        type: 'paragraph',
        text: 'Your first session is an opportunity to get comfortable and start building a trusting relationship with your therapist. Expect to discuss your reasons for seeking therapy, your history, and your goals.',
      },
      {
        type: 'paragraph',
        text: 'You can ask questions about the therapy process, confidentiality, and what to expect moving forward. This session sets the foundation for your work together.',
      },
      {
        type: 'heading',
        level: 3,
        text: 'Benefits of Individual Therapy',
      },
      {
        type: 'paragraph',
        text: 'Therapy offers many benefits including increased self-awareness, healthier coping strategies, improved relationships, and relief from emotional distress.',
      },
      {
        type: 'paragraph',
        text: 'It’s a space to be heard and understood without judgment, helping you build resilience and move toward a more fulfilling life.',
      },
      {
        type: 'paragraph',
        text: 'If you’re considering therapy, taking that first step is a sign of strength and self-care.',
      },
    ],
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/pexels-alex-green-5699431-min.jpg?alt=media&token=1b683679-a061-4450-85c7-442c00dfbc1d',
  },
  {
    slug: '10-signs-you-might-need-therapy',
    category: 'Individual Therapy',
    title: 'When to Consider Therapy: 10 Signs You Shouldn’t Ignore',
    date: 'March 6, 2025',
    content: `Ever feel like you’re carrying the weight of the world but can’t explain why?...`,
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/pexels-cottonbro-4100638-min.jpg?alt=media&token=9af9e2cb-fa47-4041-ab95-34976bb15557',
  },
  {
    slug: 'benefits-of-family-counseling',
    category: 'Family Counseling',
    title: 'How Family Counseling Builds Stronger Connections at Home',
    date: 'February 6, 2025',
    content: `Families go through difficult seasons, and counseling can offer clarity and healing...`,
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/pexels-polina-zimmerman-3958379-min.jpg?alt=media&token=e6ef61b9-ef00-46ea-a91f-8652d5e2d79d',
  },
  {
    slug: 'family-therapy-explained',
    category: 'Family Therapy',
    title: 'Understanding Family Therapy: Goals, Tools, and What to Expect',
    date: 'January 3, 2025',
    content: `Family therapy is more than just talking—it’s a guided process of healing and communication...`,
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/pexels-shkrabaanthony-5217833.jpg?alt=media&token=010d94b0-2c87-4fc4-8acc-5ad281ceead4',
  },
];


function renderContent(content) {
  return content.map((block, i) => {
    switch (block.type) {
      case 'paragraph':
        if (block.textParts) {
          return (
            <p key={i}>
              {block.textParts.map((part, idx) =>
                typeof part === 'string' ? (
                  part
                ) : part.type === 'link' ? (
                  <Link key={idx} href={part.href} className="text-[var(--gold)] hover:underline">
                    {part.text}
                  </Link>
                ) : null
              )}
            </p>
          );
        }
        return <p key={i}>{block.text}</p>;

      case 'bold':
        return (
          <p key={i} className="font-bold">
            {block.text}
          </p>
        );

      case 'heading':
        if (block.level === 3) {
          return (
            <h3 key={i} className="font-bold mt-8 mb-2">
              {block.text}
            </h3>
          );
        }
        return <h2 key={i}>{block.text}</h2>;

      default:
        return null;
    }
  });
}




export default function BlogPost({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'Guidance', href: '/guidance' },
  { label: post.title }, 
];

  if (!post) return notFound();

  const moreGuidance = blogPosts.filter((p) => p.slug !== params.slug);

  return (
    <>
    <BreadcrumbBanner crumbs={crumbs} />
    <section className="max-w-6xl mx-auto px-6 py-16 text-gray-900 grid grid-cols-1 lg:grid-cols-3 gap-12">
      <article className="lg:col-span-2">
  <p className="text-sm text-[var(--gold)] font-semibold">{post.category}</p>
  <h1 className="text-4xl font-bold my-2">{post.title}</h1>
  <p className="text-sm text-gray-500 mb-6">Posted {post.date}</p>

  <div className="relative w-full h-64 mb-8 rounded-lg overflow-hidden">
    <Image
      src={post.imageUrl}
      alt={post.title}
      fill
      className="object-cover"
      sizes="(max-width: 768px) 100vw, 768px"
    />
  </div>

  <div className="bg-white/80 rounded-xl shadow-md p-8">
    <div className="prose prose-lg max-w-none [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:mt-10 [&_h3]:mb-4">
      {post.content.map((block, i) => {
        if (block.type === 'heading') {
          const HeadingTag = `h${block.level}`;
          return <HeadingTag key={i}>{block.text}</HeadingTag>;
        }
        if (block.type === 'bold') {
          return <p key={i}><strong>{block.text}</strong></p>;
        }
        if (block.type === 'paragraph') {
          if (block.text) return <p key={i}>{block.text}</p>;
          if (block.textParts) return <p key={i}>{block.textParts.join('')}</p>;
        }
        return null;
      })}
    </div>
  </div>
</article>



<aside className="lg:col-span-1">
  <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-6">
    <h3 className="text-2xl font-bold mb-4">More Guidance</h3>
    <ul className="space-y-3">
      {moreGuidance.map((item, i) => (
        <li key={i}>
          <Link href={`/guidance/${item.slug}`} className="text-[var(--gold)] hover:underline">
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  </div>

  <div className="bg-[var(--gold)] rounded-lg shadow-md py-6 px-6 text-center flex flex-col items-center">
    <Phone className="text-white w-8 h-8 mb-3" />
    <p className="text-white text-base font-semibold leading-tight">
      Call for a free 15-min consultation
    </p>
    <a
      href="tel:8184467488"
      className="text-white text-2xl font-bold hover:underline mt-1"
    >
      (818) 446-7488
    </a>
  </div>
</aside>


    </section>
    </>
  );
}