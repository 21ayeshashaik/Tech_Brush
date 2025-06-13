'use client';

import React from 'react';
import Image from 'next/image';

const milestones = [
  {
    icon: '/rating-svgrepo-com.svg',
    number: '6+',
    label: 'Years of Experience',
  },
  {
    icon: '/location-pin-svgrepo-com.svg',
    number: '15+',
    label: ' Service Locations',
  },
  {
    icon: '/globe.svg',
    number: '100+',
    label: 'Websites Built',
  },
  {
    icon: '/message-tick-svgrepo-com.svg',
    number: '1K+',
    label: 'Happy Customers',
  },
];

const MilestoneSection: React.FC = () => {
  return (
    <section className="w-full py-16 px-4 md:px-8 bg-white">
      <h2 className="text-[30px] leading-[36px] font-bold uppercase text-[#062953] text-center font-montserrat mb-8">
        Milestones
      </h2>
    <div className="w-[120px] h-[3px] bg-[#45B795] mx-auto mb-8 rounded-full"></div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {milestones.map((milestone, index) => (
          <div
            key={index}
            className="bg-white/10 rounded-lg p-6 flex flex-col items-center justify-center shadow-md hover:shadow-lg transition"
          >
           <div className="mb-4 text-[#4B92F3] bg-white/20 rounded-full p-4 w-[64px] h-[64px] flex items-center justify-center">
  <Image
    src={milestone.icon}
    alt={milestone.label}
    width={40}
    height={40}
    className="object-contain"
  />
</div>

            
            <div className="text-xl font-montserrat mb-1 text-purple-500">{milestone.number}</div>
            <div className="text-2xl text-[#00A69C]/80 text-center font-bold font-montserrat">{milestone.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MilestoneSection;
