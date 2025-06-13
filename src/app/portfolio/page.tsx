'use client';

import React from 'react';
import Image from 'next/image';
import GetInTouchPage from '../../../components/getintouch';
import TestimonialsSection from '../../../components/Testimonials';
import Footer from '../../../components/Footer';
import Breadcrumb from '../../../components/Breadcrumb';

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
<Breadcrumb/>
    <section className="w-full py-16 px-4 md:px-8 bg-white">
      <h2 className="text-[30px] leading-[36px] font-bold uppercase text-[#062953] text-center font-montserrat mb-10">
        Our Portfolio
      </h2>
 <div className="w-[120px] h-[3px] bg-[#45B795] mx-auto mb-8 rounded-full"></div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioImages.map((src, index) => (
          <div
            key={index}
            className="w-[350px] h-[267px] mx-auto rounded-[4px] border border-[#00000020] overflow-hidden"
          >
            <Image
              src={src}
              alt={`Portfolio ${index + 1}`}
              width={350}
              height={267}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="mt-10 flex justify-center">
        <button
          className="text-white bg-[#833AB4] px-6 py-2 rounded-[4px] text-[16px] font-montserrat font-semibold w-[177.72px] h-[45.19px]"
        >
          View All
        </button>
      </div>
     
    </section>
    <div className="h-10"></div>
     <GetInTouchPage/>
     <div className="h-10"></div>
      <TestimonialsSection/>
      <Footer/>
    </>
  );
};

export default PortfolioSection;
