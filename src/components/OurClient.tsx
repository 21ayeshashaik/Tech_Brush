'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const clients = [
  '/britannia.png',
  '/kurupz.png',
  '/matrix.png',
  '/sc.png',
  '/gerald.png',
  '/carrer.png',
  '/kotlin.png',
  '/ncr.png',
];

const OurClients = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let animationFrame: number;

    const autoScroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += 1;
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollContainer.scrollLeft = 0; // Reset scroll
        }
      }
      animationFrame = requestAnimationFrame(autoScroll);
    };

    animationFrame = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationFrame);
  }, []);


  return (
    <>
    <div className="h-10"></div>
    <section className="w-full max-w-[1140px] mx-auto py-12 px-4">
      <h2 className="text-[30px] leading-[36px] font-bold uppercase text-[#062953] text-center font-montserrat mb-8">
        Our Clients
      </h2>
      <div className="w-[120px] h-[3px] bg-[#45B795] mx-auto mb-8 rounded-full"></div>

      <div
        ref={scrollRef}
        className="flex gap-7 overflow-hidden whitespace-nowrap "
      >
        {clients.concat(clients).map((src, i) => (
          <div
            key={i}
            className="min-w-[140px] h-[140px] bg-white rounded-md flex items-center justify-center shadow-lg"
          >
            <Image
              src={src}
              alt={`Client ${i + 1}`}
              width={100}
              height={100}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
    <div className="h-20"></div>
    </>
  );
};

export default OurClients;
