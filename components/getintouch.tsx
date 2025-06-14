import React from 'react';
import Image from 'next/image';

const GetInTouchPage: React.FC = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-20 py-8 sm:py-12 lg:py-16 flex flex-col lg:flex-row items-center justify-center gap-10 bg-[#F3F3F3]">
      
      {/* Mobile-Only Heading */}
      <h2 className="block lg:hidden font-montserrat font-bold text-[28px] sm:text-[30px] leading-[36px] uppercase text-[#062953] text-center">
        GET IN TOUCH
      </h2>

      {/* Form Section */}
      <div className="w-full max-w-md bg-white rounded-[3px] shadow-lg p-6 sm:p-8 space-y-4">
        <p className="text-center font-bold text-[#062953] text-lg">Share your query and contact</p>
        <input
          type="text"
          placeholder="Name"
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#9102E0]"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#9102E0]"
        />
        <input
          type="tel"
          placeholder="Phone"
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#9102E0]"
        />
        <textarea
          placeholder="Message"
          className="w-full border border-gray-300 rounded px-4 py-2 h-[120px] resize-none focus:outline-none focus:ring-2 focus:ring-[#9102E0]"
        ></textarea>
        <button className="w-full bg-[#9102E0] text-white py-2 rounded font-semibold hover:bg-green-700 transition-all">
          Submit
        </button>
      </div>

      {/* Desktop-only Heading and Image */}
      <div className="hidden lg:flex flex-col items-start text-left">
        <h2 className="font-montserrat font-bold text-[28px] sm:text-[30px] leading-[36px] uppercase text-[#062953] mb-6 pl-8">
          GET IN TOUCH
        </h2>
        <div className="w-[120px] h-[3px] bg-[#45B795] mb-8 rounded-full ml-8"></div>
        <Image
          src="/getintouch.png"
          alt="Get In Touch"
          width={400}
          height={300}
          className="w-full max-w-sm ml-8"
        />
      </div>
    </section>
  );
};

export default GetInTouchPage;
