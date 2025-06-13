'use client';

import React from 'react';
import OurServicesPage from '../../../components/Ourservice';
import Breadcrumb from '../../../components/Breadcrumb';
import Footer from '../../../components/Footer';
const ServicesPage: React.FC = () => {
  return (
    <>
    <Breadcrumb />
    
    <div className="min-h-screen bg-white px-6 py-10 flex flex-col items-start font-lato">
      {/* Header */}
      <h1 className="text-[32px] md:text-[40px] font-normal  mb-10">
        <span className='text-[#00A69C]'>Our </span> 
        <span className='text-[#833AB4]'>Services</span> 
      </h1>

      {/* Layout: Left Service List & Right Side Card */}
      <div className="flex flex-col-reverse lg:flex-row justify-between w-full max-w-7xl gap-10">
        {/* Left Side: Service List */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-y-1 gap-x-3 text-[#212121] text-[18px] font-medium">
  <div className="flex items-center gap-2">
    <img src="/service.png" alt="Service Icon" className="w-6 h-6 object-contain" />
    <span className='font-lato text-[18px] text-[#2F3045]'>Mobile Application</span>
  </div>

  <div className="flex items-center gap-2">
    <img src="/service.png" alt="Service Icon" className="w-6 h-6 object-contain" />
    <span className='font-lato text-[18px] text-[#2F3045]'>Full Stack Development</span>
  </div>

  <div className="flex items-center gap-2">
    <img src="/service.png" alt="Service Icon" className="w-6 h-6 object-contain" />
    <span className='font-lato text-[18px] text-[#2F3045]'>UI UX Designing</span>
  </div>

  <div className="flex items-center gap-2">
    <img src="/service.png" alt="Service Icon" className="w-6 h-6 object-contain" />
    <span className='font-lato text-[18px] text-[#2F3045]'>Digital Marketing</span>
  </div>
</div>

        

        {/* Right Side: Discovery Session Card */}
        <div
          className="w-full lg:w-[365px] h-auto lg:h-[601px] rounded-[20px] p-6 flex flex-col justify-between text-white"
          style={{
            background: 'linear-gradient(180deg, #2C73CC 0%, #079EA4 100%)',
          }}
        >
          {/* Icon or illustration */}
          <div className="flex flex-col items-center mt-4">
            <img src="/Vector.png" alt="Discovery Session" className="w-[100px] h-[100px]" />
            <div className="h-10"></div>
            <h2 className="font-loto text-[24px] leading-[28px] text-center">
              Schedule a Discovery Session <br />
              with our Team
            </h2>
          
<div className="h-10"></div>
          {/* Description */}
          <p className="text-[18px] leading-[23px] text-center">
            Talk to our experts who have been running successful Digital Product
            Development (Apps, Web Apps), Offshore Team Operations, and Hardcore
            Software Development Campaigns.
          </p>
</div>
          {/* CTA Button */}
          <div className="flex justify-center mt-6">
            <button className="flex items-center gap-2 rounded-2xl text-white bg-[#833AB4] px-6 py-2 font-bold text-[16px] leading-[50px] capitalize hover:bg-gray-100 transition">
              Book A Call
              <svg
                width="23"
                height="23"
                viewBox="0 0 24 24"
                fill="#833AB4"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12H19M12 5L19 12L12 19"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    <OurServicesPage/>
    <Footer/>
    </>
  );
};

export default ServicesPage;
