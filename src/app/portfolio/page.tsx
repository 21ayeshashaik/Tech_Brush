'use client';

import React from 'react';
import Image from 'next/image';
import GetInTouchPage from '@/components/getintouch';
import TestimonialsSection from '@/components/Testimonials';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';

const portfolioImages = [
  '/portifio1.png',
  '/portfolio2.png',
  '/portfolio3.png',
  '/portfolio4.png',
  '/portfolio5.jpg',
  '/portfolio6.png',
];

const PortfolioSection: React.FC = () => {
  return (
    <>
      <Breadcrumb />
      <section className="w-full py-16 px-4 sm:px-6 md:px-10 lg:px-16 bg-white">
        <h2 className="text-[24px] sm:text-[28px] md:text-[30px] leading-[36px] font-bold uppercase text-[#062953] text-center font-montserrat mb-4">
          Our Portfolio
        </h2>
        <div className="w-[120px] h-[3px] bg-[#45B795] mx-auto mb-10 rounded-full"></div>

        {/* Responsive Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioImages.map((src, index) => (
            <div
              key={index}
              className="rounded-[4px] overflow-hidden border border-[#00000020] shadow-sm hover:shadow-lg transform transition-transform duration-300 hover:scale-105 mx-auto
                         w-[260px] h-[180px] sm:w-[300px] sm:h-[200px] md:w-[350px] md:h-[240px]"
            >
              <Image
                src={src}
                alt={`Portfolio ${index + 1}`}
                width={350}
                height={240}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Button with Hover Effect */}
        <div className="mt-10 flex justify-center">
          <button className="text-white bg-[#833AB4] px-6 py-2 rounded-[4px] text-[16px] font-montserrat font-semibold w-[177.72px] h-[45.19px] transition-all duration-300 hover:scale-105 hover:shadow-lg">
            View All
          </button>
        </div>
      </section>

      <div className="h-10" />
      <GetInTouchPage />
      <div className="h-10" />
      <TestimonialsSection />
      <Footer />
    </>
  );
};

export default PortfolioSection;
