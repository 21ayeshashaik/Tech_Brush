import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const GetInTouchPage: React.FC = () => {
  return(
  <section className="w-full px-4 py-8 flex flex-col lg:flex-row items-center justify-center gap-10 bg-[#F3F3F3]">
      {/* Form Section */}
      <div className="w-[477px] h-[485px] bg-white rounded-[3px] shadow-lg p-6 space-y-4">
        <p className='text-center font-bold text-[#062953]'>Share your query and contact</p>
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

      {/* Heading and Image Section */}
      <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
       <h2 className="font-montserrat font-bold text-[30px] leading-[36px] uppercase text-[#062953] mb-6 pl-8 lg:pl-20">
  GET IN TOUCH
</h2>

         <div className="w-[120px] h-[3px] bg-[#45B795] mx-auto mb-8 rounded-full"></div>
        <Image
          src="/getintouch.png" // Replace with your image path
          alt="Properties"
          width={400}
          height={300}
          className=""
        />
      </div>
    </section> )
};

export default  GetInTouchPage;
