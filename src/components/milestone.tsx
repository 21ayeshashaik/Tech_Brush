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
    label: 'Service Locations',
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
   // <section className="w-full py-8 px-3 sm:px-6 lg:px-16 bg-white">
      <section className="w-full pt-10 pb-12 sm:pt-14 sm:pb-16 lg:pt-20 lg:pb-24 px-3 sm:px-6 lg:px-16 bg-white">

      {/* Title */}
      <h2 className="text-lg sm:text-2xl md:text-3xl font-bold uppercase text-[#062953] text-center font-montserrat mb-3 sm:mb-4">
        Milestones
      </h2>

      {/* Divider */}
      <div className="w-14 sm:w-24 h-[3px] bg-[#45B795] mx-auto mb-6 rounded-full"></div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
        {milestones.map((milestone, index) => (
          <div
            key={index}
            className="rounded-lg p-3 sm:p-5 bg-[#f9f9f9] hover:bg-white shadow transition duration-300 flex flex-col items-center text-center group"
          >
            {/* Icon */}
            <div className="mb-2 p-2 sm:p-3 w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full shadow-md flex items-center justify-center transition-transform group-hover:scale-105">
              <Image
                src={milestone.icon}
                alt={milestone.label}
                width={24}
                height={24}
                className="object-contain"
              />
            </div>

            {/* Number */}
            <div className="text-sm sm:text-lg font-bold text-purple-600 mb-1 font-montserrat">
              {milestone.number}
            </div>

            {/* Label */}
            <div className="text-[10px] sm:text-sm text-[#00A69C]/90 font-medium font-montserrat">
              {milestone.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MilestoneSection;
