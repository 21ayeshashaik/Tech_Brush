'use client';
import Image from 'next/image';
import React from 'react';
import ServiceCard from './ServiceCard';
import { serviceData } from './ServiceData';
import { useEffect, useState } from 'react';
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
    <div className="min-h-screen bg-white px-6 py-12">
      <section className="text-center mb-16">
        <h2
          className="text-[30px] leading-[36px]  font-latofont-lato font-extrabold  tracking-[0] align-middle text-[#062953] px-4 py-2 rounded"
          style={{ width: '713px', margin: '0 auto' }}
        >
          OUR SERVICES
        </h2>
        <p
          className="text-[#062953] text-[30px] leading-[36px] font-medium font-lato mt-4 font-lato  align-middle tracking-[0]"
          style={{ width: '713px', margin: '0 auto' }}
        >
          Bridging the Gap Between Business and Technology
        </p>
      </section>
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
      {/* Step-style grid */}
      <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
        {serviceData.map((service, index) => (
          <div
            key={index}
            className="transition-all duration-300"
            style={{
               marginTop: isLargeScreen ? `${(index % 3) * 40}px` : '0px',
            }}
          >
            <ServiceCard
              title={service.title}
              description={service.description}
              Icon={service.icon}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServicesPage;
