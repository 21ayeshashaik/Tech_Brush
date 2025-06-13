'use client';

import React, { useState } from 'react';
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
  const [startIndex, setStartIndex] = useState(0);
  const testimonialsPerPage = 3;

  const handleNext = () => {
    setStartIndex((prev) =>
      (prev + testimonialsPerPage) % testimonials.length
    );
  };

  const currentTestimonials = testimonials.slice(
    startIndex,
    startIndex + testimonialsPerPage
  ).length < testimonialsPerPage
    ? [
        ...testimonials.slice(startIndex),
        ...testimonials.slice(0, testimonialsPerPage - testimonials.slice(startIndex).length),
      ]
    : testimonials.slice(startIndex, startIndex + testimonialsPerPage);

  return (
    <section
      className="relative w-full py-12 px-4 md:px-8"
      style={{ background: 'linear-gradient(0deg, #00A69C 0%, #2D71CE 100%)' }}
    >
      <h2 className="text-[30px] font-bold uppercase text-white font-montserrat text-center mb-10">
        Testimonials
      </h2>

      {/* Testimonials Cards */}
      <div className="max-w-[1140px] mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {currentTestimonials.map((testimonial, index) => (
          <div
            key={index}
            className="relative text-[#062953B2] bg-white rounded-md p-4 shadow-md"
            style={{ width: '380px', height: '280px' }}
          >
            {/* Top Decorative Image */}
            <div className="absolute top-[12.5px] left-[-2.5px] w-[358.33px] h-[24px]">
              <Image src="/star.png" alt="Banner" fill className="object-cover rounded-t-md" />
            </div>

            {/* Profile Section */}
            <div className="flex items-center mt-10 ml-4 gap-4">
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
                <div className="text-[16px] leading-[17.6px] font-bold font-montserrat">
                  {testimonial.name}
                </div>
                <div className="text-sm text-[#062953B2]/80 font-montserrat">
                  {testimonial.role}
                </div>
              </div>
            </div>

            {/* Message */}
            <p
              className="mt-4 text-[15px] leading-[20.7px] px-4 font-light font-montserrat"
              style={{ fontWeight: 100 }}
            >
              “{testimonial.message}”
            </p>

            {/* Bottom Right Image */}
            <div className="absolute bottom-[10px] right-[10px] w-[63.6px] h-[33.26px]">
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

      {/* ⏩ NEXT Button (Fixed Position) */}
      <div className="absolute top-[20px] right-[40px]">
        <button
          onClick={handleNext}
          className="w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition"
          title="Next"
        >
          <Image
            src="/Button.png"
            alt="Next"
            width={80}
            height={80}
            className="object-contain"
          />
        </button>
      </div>
    </section>
  );
};

export default TestimonialsSection;
