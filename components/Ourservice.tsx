'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import { serviceData } from './ServiceData';

const OurServicesPage: React.FC = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth > 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
  
    <div className="min-h-screen bg-white px-6 py-12 relative">
      {/* Decorative Image sticking to the left */}
      <Image
        src="/dots2.png" // replace with your actual image path in public/
        alt="Decorative"
        width={172.32}
        height={159.49}
        style={{
          position: 'absolute',
          top: '188.05px',
          left: '-39px',
          width: '172.32px',
          height: '159.49px',
          objectFit: 'contain',
          zIndex: 10,
        }}
      />

      {/* Header Section */}
      <section className="text-center mb-16">
        <h2 className="text-[20px] sm:text-[24px] md:text-[30px] leading-[28px] sm:leading-[32px] md:leading-[36px] font-lato font-extrabold tracking-[0] align-middle text-[#062953] px-2 sm:px-4 py-2 rounded mx-auto max-w-full md:max-w-[713px]">
          OUR SERVICES
        </h2>
        <div className="w-[120px] h-[3px] bg-[#45B795] mx-auto mb-8 rounded-full"></div>
        <p className="text-[#062953] text-[18px] sm:text-[22px] md:text-[30px] leading-[26px] sm:leading-[32px] md:leading-[36px] font-medium font-lato mt-4 align-middle tracking-[0] mx-auto max-w-full md:max-w-[713px]">
          Bridging the Gap Between Business and Technology
        </p>
      </section>

      {/* Services Grid */}
      <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
        {serviceData.map((service, index) => (
          <div
            key={index}
            className="transition-all duration-300 group rounded-xl bg-white hover:shadow-2xl hover:-translate-y-2 hover:scale-105 hover:bg-gradient-to-br hover:from-[#e0e7ff] hover:to-[#f3e8ff] cursor-pointer"
            style={{
              marginTop: isLargeScreen ? `${(index % 3) * 40}px` : '0px',
            }}
          >
            <ServiceCard
              title={service.title}
              description={service.description}
             
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServicesPage;
