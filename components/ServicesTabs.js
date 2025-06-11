'use client';

import { useState } from 'react';

const servicesDetails = {
  'Individual Counseling': {
    title: 'Individual Counseling',
    tabs: {
      'Individual Counseling': {
        description: `The focus of individual therapy varies based on each person’s unique journey, but generally aims to enhance emotional health, address unhelpful behaviors or thought patterns, build coping skills, strengthen interpersonal connections, and foster personal growth.`,
        keyFeatures: [
          'Privacy and Trust: Sessions are confidential, ensuring a safe space where clients can share openly, except in rare legal situations.',
          'Personalized Care: Therapy is tailored to each individual’s specific needs, experiences, and goals.',
          'Insight and Exploration: We work together to uncover patterns in thoughts, feelings, and behaviors that influence well-being.',
          'Evidence-Based Methods: Therapists utilize research-backed techniques such as cognitive-behavioral therapy, psychodynamic approaches, mindfulness, and others suited to the client’s preferences and challenges. You can learn more about our therapists’ specialties in their profiles.',
        ],
      },
      'Couples, Spouses, and Partners': {
        description: `Couples counseling supports romantic partners, spouses, or significant others to improve communication, resolve conflicts, and strengthen their relationships.

Therapists help couples explore patterns, rebuild trust, and develop healthy ways to navigate challenges together.`,
        keyFeatures: [
          'Focus on Relationship Dynamics',
          'Communication Improvement',
          'Conflict Resolution Techniques',
          'Building Emotional Intimacy and Trust',
        ],
      },
      'Children Ages 6-12': {
        description: `Therapy for children in this age group focuses on emotional development, coping skills, behavioral issues, and family dynamics.

Approaches are often playful and age-appropriate, including art therapy and play therapy techniques.`,
        keyFeatures: [
          'Age-Appropriate Therapeutic Techniques',
          'Parental Involvement',
          'Support for School and Social Challenges',
          'Safe Space for Expression',
        ],
      },
      'Adolescents 13-18': {
        description: `Therapy for teens addresses issues such as identity, peer relationships, academic stress, and emotional regulation.

Therapists provide a supportive environment tailored to adolescent development and challenges.`,
        keyFeatures: [
          'Focus on Identity and Independence',
          'Managing Stress and Anxiety',
          'Support for Academic and Social Pressures',
          'Collaborative Goal Setting',
        ],
      },
      'Groups': {
        description: `Group therapy offers a supportive space where individuals with similar experiences can share, learn, and grow together.

Groups may focus on specific issues such as grief, addiction recovery, or relationship skills.`,
        keyFeatures: [
          'Peer Support and Shared Experiences',
          'Building Social Skills',
          'Structured and Facilitated by Therapists',
          'Confidential and Respectful Environment',
        ],
      },
    },
  },
};

const mainService = servicesDetails['Individual Counseling'];
const tabNames = Object.keys(mainService.tabs);

export default function ServicesDetailTabs() {
  const [selectedTab, setSelectedTab] = useState(tabNames[0]);
  const tab = mainService.tabs[selectedTab];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16 md:py-24 text-gray-900">
      <h2 className="text-3xl font-bold text-[var(--gold)] mb-8">{selectedTab}</h2>
      <div className="flex flex-col md:flex-row gap-8">
        <nav className="md:w-1/3 bg-white rounded-lg shadow-lg overflow-hidden">
          <ul>
            {tabNames.map((name) => (
              <li
                key={name}
                onClick={() => setSelectedTab(name)}
                className={`cursor-pointer px-6 py-4 border-b border-gray-200 hover:bg-[var(--gold)] hover:text-white transition 
                  ${selectedTab === name ? 'bg-[var(--gold)] text-white font-semibold' : 'text-gray-700'}`}
              >
                {name}
              </li>
            ))}
          </ul>
        </nav>

        <article className="md:w-2/3 bg-white rounded-lg shadow-lg p-8 prose max-w-none">
          <p className="mb-6 whitespace-pre-line">{tab.description}</p>

          <h4 className="font-semibold mt-4 mb-2">Key features include:</h4>
          <ul className="list-disc list-inside">
            {tab.keyFeatures.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}

