'use client';

import React from 'react';
import Image from 'next/image';
import OurServicesPage from './Ourservice';
import IndustriesPage from './industries';
import TechnologyPage from './technology';
import OurClients from './OurClient';
import GetInTouchPage from './getintouch';
import TestimonialsSection from './Testimonials';
import MilestoneSection from './milestone';
import Footer from './Footer';
 
const HomeSection: React.FC = () => {
  return (
<>    
    <section
  className="relative w-full h-auto mx-auto overflow-hidden px-4 sm:px-6 md:px-8 py-8 md:py-12 flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8"
  style={{
    backgroundImage: `
      linear-gradient(246.4deg, rgba(24, 203, 150, 0.8) 37.86%, rgba(131, 58, 180, 0.472) 105.08%),
      url('/background_home.png')
    `,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
>

      {/* ✅ Decorative Dots */}
      <div
        className="absolute top-0 left-0 w-[172px] h-[160px] z-30"
        style={{
         
          borderRadius: '8px',
        }}
      >
        <Image
          src="/dots.png"
          alt="Overlay Decoration"
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>

      {/* ✅ Text Section */}
      <div className="w-full lg:max-w-[600px] space-y-4 md:space-y-6 text-center lg:text-left lg:ml-[98px] mb-8 lg:mb-0">
        <h1 className="font-extrabold text-[28px] sm:text-[32px] md:text-[35px] leading-tight md:leading-[50px] uppercase text-white font-sans">
          Application Development
        </h1>
        <p className="text-white text-[14px] sm:text-[16px] leading-6">
          We provide full-cycle software development service encompassing planning, requirements definition, 
          design and prototyping, software development, testing, deployment and application maintenance.
        </p>
        <button className="w-[141px] h-[35px] rounded-[3px] bg-white text-[#9102E0] font-bold text-[16px] leading-[21px] uppercase hover:bg-opacity-90 transition-all">
          Know More
        </button>
      </div>

      {/* ✅ Image Frame Section */}
      <div className="relative w-full max-w-full sm:max-w-[600px] lg:max-w-[840px] h-[400px] sm:h-[500px] md:h-[600px] lg:h-[674px] rounded-lg shadow-md overflow-hidden">
        {/* Background Frame Image */}
        <Image
          src="/35ba53e0fa15bd1ed75db22ffbb515616d3db6f8.png"
          alt="Background Frame"
          fill
          className="object-cover"
        />
        {/* Overlay Image */}
        <div className="relative z-10 w-full h-full flex justify-center pt-[80px] sm:pt-[100px] md:pt-[120px] lg:pt-[150px]">
          <div className="h-[200px] w-[310px] sm:h-[250px] sm:w-[388px] md:h-[300px] md:w-[465px] lg:h-[337px] lg:w-[522px] relative overflow-hidden rounded-[10px] shadow-lg">
            <Image
              src="/Premium Fashion Website Design Ideas for Men’s E-Commerce.png"
              alt="Overlay"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </div>
      </div>
      
    </section>
    <OurServicesPage/>
        <IndustriesPage/>
        <TechnologyPage/>
        <OurClients/>
        <GetInTouchPage/>
        <TestimonialsSection/>
        <MilestoneSection/>
        <Footer/>
        </>
  );
};

export default HomeSection;
