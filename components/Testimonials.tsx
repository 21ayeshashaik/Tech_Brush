'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Alice Johnson',
    role: 'CEO, TechSpark',
    message:
      'The team delivered high-quality results. Their attention to detail and communication were outstanding. Highly recommended!',
  },
  {
    name: 'David Kim',
    role: 'CTO, BuildRight',
    message:
      'Working with them was seamless. They understood our needs and delivered exactly what we needed ahead of schedule.',
  },
  {
    name: 'Sara Ahmed',
    role: 'Product Manager, Nova Labs',
    message:
      'Professional, dedicated, and innovative — this team exceeded expectations and brought real value to our business.',
  },
];

const TestimonialsSection: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  // Track window width
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // lg breakpoint
    };

    handleResize(); // initial
    window.addEventListener('resize', handleResize); // listen on resize
    return () => window.removeEventListener('resize', handleResize); // cleanup
  }, []);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    if (isLargeScreen) {
      return [
        testimonials[index % testimonials.length],
        testimonials[(index + 1) % testimonials.length],
        testimonials[(index + 2) % testimonials.length],
      ];
    } else {
      return [testimonials[index % testimonials.length]];
    }
  };

  const currentTestimonials = getVisibleTestimonials();

  return (
    <section
      className="relative w-full py-12 px-4 md:px-8"
      style={{ background: 'linear-gradient(0deg, #00A69C 0%, #2D71CE 100%)' }}
    >
      <h2 className="text-[24px] sm:text-[30px] font-bold uppercase text-white font-montserrat text-center mb-10">
        Testimonials
      </h2>

      {/* Testimonials */}
      <div className="max-w-[1140px] mx-auto flex flex-wrap justify-center gap-6">
        {currentTestimonials.map((testimonial, i) => (
          <div
            key={i}
            className="relative bg-white text-[#062953B2] rounded-md p-4 shadow-md w-full sm:w-[80%] lg:w-[360px] min-h-[280px] flex flex-col"
          >
            {/* Top Banner */}
            <div className="absolute top-3 left-2 w-[calc(100%-16px)] h-6">
              <Image
                src="/star.png"
                alt="Banner"
                fill
                className="object-cover rounded-t-md"
              />
            </div>

            {/* Profile Info */}
            <div className="flex items-center mt-10 gap-4 px-2">
              <div className="w-[60px] h-[60px] rounded-full overflow-hidden">
                <Image
                  src="/user.png"
                  alt="Profile"
                  width={60}
                  height={60}
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <div className="text-base font-bold font-montserrat">{testimonial.name}</div>
                <div className="text-sm text-[#062953B2]/80 font-montserrat">{testimonial.role}</div>
              </div>
            </div>

            {/* Message */}
            <p className="mt-4 text-[15px] leading-[20.7px] px-2 font-light font-montserrat">
              “{testimonial.message}”
            </p>

            {/* Bottom Right Decoration */}
            <div className="absolute bottom-[10px] right-[10px] w-[60px] h-[30px]">
              <Image
                src="/TESTIMONIAL.png"
                alt="Decoration"
                fill
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Next Button */}
      <div className="absolute top-[20px] right-[20px] sm:right-[40px]">
        <button
          onClick={handleNext}
          className="w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition"
          title="Next"
        >
          <Image
            src="/Button.png"
            alt="Next"
            width={40}
            height={40}
            className="object-contain"
          />
        </button>
      </div>
    </section>
  );
};

export default TestimonialsSection;
