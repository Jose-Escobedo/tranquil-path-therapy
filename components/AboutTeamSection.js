'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function AboutTeamSection() {
  const teamMembers = [
    {
      name: 'Michael Cunningham',
      title: 'Owner and Licensed Marriage & Family Therapist',
      image: 'https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/A_casual_photo_of_therapist_ma.jpeg?alt=media&token=b94e5309-108c-4b81-9f19-c97837fc10e3',
    },
    {
      name: 'Robert Westin',
      title: 'Licensed Marriage and Family Therapist & Clinical Supervisor',
      image: 'https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/A_casual_photo_of_therapist_man.jpeg?alt=media&token=7abf50cb-c204-4e3e-8a95-c3b26f967ddf',
    },
    {
      name: 'Kristy Hicks',
      title: 'Administrative Coordinator',
      image: 'https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/A_casual_photo_of_therapist_wo.jpeg?alt=media&token=c10f765e-9068-465a-858d-56ef8730724a',
    },
    {
      name: 'Lauren Tominac, AMFT',
      title: 'Associate Marriage & Family Therapist',
      image: 'https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/A_casual_photo_of_therapist.jpeg?alt=media&token=239b0933-21bd-4747-8a7f-c33e0d3a3619',
    },
  ];

  return (
    <section className="bg-[#111827] text-white py-20 px-6">
     
      <div className="max-w-3xl mx-auto text-center mb-16 fade-in">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--gold)] mb-4">Golden Scales Family Therapy</h2>
        <h3 className="text-xl md:text-2xl font-semibold mb-6">Guidance Team</h3>
        <p className="text-lg md:text-xl leading-relaxed text-gray-300">
          Welcome to Golden Scales, a team of experienced Marriage and Family Therapists dedicated to supporting healthy relationships.
          We focus on modern family dynamics and offer compassionate, professional guidance to help individuals and families build stronger, more fulfilling connections. Learn more about each team member below and how we can support your journey toward resilience and growth.
        </p>
      </div>

   
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 fade-in">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105 hover:ring-4 hover:ring-[var(--gold)] hover:ring-opacity-50"
          >
    
            <Image
              src={member.image}
              alt={member.name}
              width={400}
              height={400}
              style={{
    objectPosition: 'center top',
  }}
              className="about-team-image w-full h-auto max-h-[400px] object-cover object-center transition-opacity duration-500 group-hover:opacity-20"
            />

   
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white bg-opacity-80 px-4">
              <h4 className="text-xl font-bold text-[#0A2540] mb-2">{member.name}</h4>
              <p className="text-md text-[#0A2540]">{member.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
