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
    content: [
  {
    type: 'paragraph',
    text: 'Life gets overwhelming. We all experience emotional ups and downs, but how do you know when it might be time to seek professional help?',
  },
  {
    type: 'paragraph',
    text: 'Therapy can offer guidance, relief, and clarity — especially when your mental health starts to affect your daily life. If you’re unsure whether therapy is the right step, here are 10 common signs that might indicate it’s time to talk to a professional.',
  },
  {
    type: 'heading',
    level: 3,
    text: '1. You Feel Constantly Overwhelmed',
  },
  {
    type: 'paragraph',
    text: 'If stress feels like a daily battle and small tasks leave you drained, therapy can help you develop coping skills and better manage your responsibilities.',
  },
  {
    type: 'heading',
    level: 3,
    text: '2. You’re Struggling to Sleep or Eat Normally',
  },
  {
    type: 'paragraph',
    text: 'Changes in sleep and appetite can be physical signs of emotional distress. A therapist can help you uncover what’s behind these disruptions.',
  },
  {
    type: 'heading',
    level: 3,
    text: '3. You’re Withdrawing from Friends and Family',
  },
  {
    type: 'paragraph',
    text: 'Isolation can be a red flag. If you’ve lost interest in socializing or feel disconnected, therapy offers a safe space to process those feelings.',
  },
  {
    type: 'heading',
    level: 3,
    text: '4. You Can’t Seem to “Snap Out of It”',
  },
  {
    type: 'paragraph',
    text: 'When sadness or irritability lingers for weeks, it might be more than just a rough patch. A therapist can help you get to the root cause.',
  },
  {
    type: 'heading',
    level: 3,
    text: '5. You’re Using Unhealthy Coping Mechanisms',
  },
  {
    type: 'paragraph',
    text: 'Turning to substances, overeating, or avoiding problems can mask deeper issues. Therapy helps replace these habits with healthier tools.',
  },
  {
    type: 'heading',
    level: 3,
    text: '6. You’ve Experienced a Major Life Change',
  },
  {
    type: 'paragraph',
    text: 'Big transitions like divorce, job loss, or a move can trigger emotional distress. Therapy provides support while you navigate change.',
  },
  {
    type: 'heading',
    level: 3,
    text: '7. You’re Feeling Hopeless or Numb',
  },
  {
    type: 'paragraph',
    text: 'If you’re feeling like nothing matters or struggling to find joy, it’s important not to ignore these feelings. A therapist can help you reconnect with yourself.',
  },
  {
    type: 'heading',
    level: 3,
    text: '8. You’re Constantly Overthinking or Feeling Stuck',
  },
  {
    type: 'paragraph',
    text: 'When your thoughts become exhausting or repetitive, therapy helps you gain clarity and break mental cycles.',
  },
  {
    type: 'heading',
    level: 3,
    text: '9. Your Relationships Are Suffering',
  },
  {
    type: 'paragraph',
    text: 'Arguments, distance, or communication issues can be signs of emotional strain. Therapy can improve how you relate to others and yourself.',
  },
  {
    type: 'heading',
    level: 3,
    text: '10. You Just Don’t Feel Like Yourself',
  },
  {
    type: 'paragraph',
    text: 'Sometimes the biggest clue is a quiet inner voice saying, “Something’s off.” Trust that feeling. Therapy can help you explore and realign with who you are.',
  },
  {
    type: 'heading',
    level: 3,
    text: 'Taking the First Step',
  },
  {
    type: 'paragraph',
    text: 'Recognizing that you might need help is already a courageous act. Whether you relate to one or many of these signs, reaching out for therapy is a powerful move toward healing and self-understanding.',
  },
  {
    type: 'paragraph',
    text: 'You deserve support — and you don’t have to go through it alone.',
  },
],
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/pexels-cottonbro-4100638-min.jpg?alt=media&token=9af9e2cb-fa47-4041-ab95-34976bb15557',
  },
  {
    slug: 'benefits-of-family-counseling',
    category: 'Family Counseling',
    title: 'How Family Counseling Builds Stronger Connections at Home',
    date: 'February 6, 2025',
    content: [
  {
    type: 'paragraph',
    text: 'Every family goes through tough seasons. Whether it’s ongoing conflict, communication breakdowns, or adjusting to major life changes, these challenges can take a toll on relationships at home.',
  },
  {
    type: 'paragraph',
    text: 'Family counseling offers a space where everyone’s voice can be heard and where healing can begin — together.',
  },
  {
    type: 'heading',
    level: 3,
    text: 'What Is Family Counseling?',
  },
  {
    type: 'paragraph',
    text: 'Family counseling is a form of therapy that involves multiple family members working with a licensed therapist to address emotional, behavioral, or relational issues affecting the family system.',
  },
  {
    type: 'paragraph',
    text: 'The goal is to strengthen relationships, improve communication, and build healthier dynamics that support the well-being of everyone involved.',
  },
  {
    type: 'heading',
    level: 3,
    text: 'Common Reasons Families Seek Counseling',
  },
  {
    type: 'paragraph',
    text: 'Families come to therapy for many reasons, including:',
  },
  {
    type: 'paragraph',
    text: '• Frequent arguments or tension at home\n• Parent-child conflicts or behavioral concerns\n• Coping with divorce, separation, or blended family transitions\n• Grief or loss affecting the household\n• Mental health or substance use struggles within the family',
  },
  {
    type: 'heading',
    level: 3,
    text: 'How Family Therapy Helps',
  },
  {
    type: 'paragraph',
    text: 'In sessions, therapists guide families through conversations that may feel too difficult to have on their own. Counseling helps identify patterns, clarify expectations, and foster empathy among members.',
  },
  {
    type: 'paragraph',
    text: 'Over time, families often develop healthier communication habits, stronger emotional bonds, and more respectful ways of resolving conflict.',
  },
  {
    type: 'heading',
    level: 3,
    text: 'What to Expect in Family Counseling',
  },
  {
    type: 'paragraph',
    text: 'Therapy sessions might include all members of the household or just some, depending on the situation. The therapist creates a supportive space where each person can express themselves without fear of judgment or blame.',
  },
  {
    type: 'paragraph',
    text: 'You’ll work together to set goals and create strategies that bring more peace, understanding, and connection at home.',
  },
  {
    type: 'heading',
    level: 3,
    text: 'You’re Not Alone — Help Is Available',
  },
  {
    type: 'paragraph',
    text: 'Struggles within a family can feel isolating, but support is available. Seeking therapy is not a sign of failure — it’s a sign of care and a commitment to healthier relationships.',
  },
  {
    type: 'paragraph',
    text: 'If your family is feeling stuck or disconnected, consider counseling as a path toward healing and growth. You don’t have to navigate this alone.',
  },
],
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/pexels-polina-zimmerman-3958379-min.jpg?alt=media&token=e6ef61b9-ef00-46ea-a91f-8652d5e2d79d',
  },
  {
    slug: 'family-therapy-explained',
    category: 'Family Therapy',
    title: 'Understanding Family Therapy: Goals, Tools, and What to Expect',
    date: 'January 3, 2025',
    content: [
  {
    type: 'paragraph',
    text: 'Family life can be deeply fulfilling — but it’s also where many of our most complex challenges arise. When communication breaks down, conflicts escalate, or major transitions occur, families can benefit from guided support.',
  },
  {
    type: 'paragraph',
    text: 'Family therapy is designed to help loved ones reconnect, heal emotional wounds, and function more effectively as a unit.',
  },
  {
    type: 'heading',
    level: 3,
    text: 'What Is Family Therapy?',
  },
  {
    type: 'paragraph',
    text: 'Family therapy is a type of counseling that focuses on improving the relationships and interactions between family members. A licensed therapist works with the family to explore patterns, dynamics, and sources of conflict.',
  },
  {
    type: 'paragraph',
    text: 'It’s not about assigning blame — it’s about creating understanding and fostering healthier ways of relating to one another.',
  },
  {
    type: 'heading',
    level: 3,
    text: 'Goals of Family Therapy',
  },
  {
    type: 'paragraph',
    text: 'While each family is unique, common goals of therapy include:',
  },
  {
    type: 'paragraph',
    text: 'Improving communication skills, reducing tension and conflict, rebuilding trust and emotional safety, supporting major life transitions (e.g., divorce, relocation, illness). Helping children and parents feel more connected.',
  },
  {
    type: 'heading',
    level: 3,
    text: 'Tools and Techniques Used',
  },
  {
    type: 'paragraph',
    text: 'Therapists may use a variety of evidence-based approaches such as structural therapy, systems theory, cognitive-behavioral strategies, and emotion-focused techniques.',
  },
  {
    type: 'paragraph',
    text: 'Sessions often include open dialogue, communication exercises, problem-solving strategies, and role-play to help families practice healthier interactions in real time.',
  },
  {
    type: 'heading',
    level: 3,
    text: 'What to Expect in a Session',
  },
  {
    type: 'paragraph',
    text: 'Sessions typically last about 50 minutes to an hour and may involve all family members or just a few, depending on the issues being addressed.',
  },
  {
    type: 'paragraph',
    text: 'The therapist creates a neutral and safe environment where everyone can be heard, and helps guide the family toward mutual understanding and cooperation.',
  },
  {
    type: 'heading',
    level: 3,
    text: 'Healing Takes Time — and Commitment',
  },
  {
    type: 'paragraph',
    text: 'Change doesn’t happen overnight, but with commitment and willingness, families often experience deep emotional healing, stronger bonds, and more peaceful daily life.',
  },
  {
    type: 'paragraph',
    text: 'If your family is navigating stress, conflict, or major change, therapy can be a meaningful path toward restoration and reconnection.',
  },
],
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