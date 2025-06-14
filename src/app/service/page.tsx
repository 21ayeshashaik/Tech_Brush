'use client';

import React from 'react';
import OurServicesPage from '../../../components/Ourservice';
import Breadcrumb from '../../../components/Breadcrumb';
import Footer from '../../../components/Footer';

const ServicesPage: React.FC = () => {
  return (
    <>
      <Breadcrumb />

      <div className="min-h-screen bg-white px-4 sm:px-6 lg:px-16 py-10 flex flex-col items-start font-lato w-full">
        {/* Header */}
        <h1 className="text-[32px] md:text-[40px] font-normal mb-10 text-[#2F3045]">
          <span className="text-[#00A69C]">Our </span>
          <span className="text-[#833AB4]">Services</span>
        </h1>

        {/* Layout */}
        <div className="flex flex-col-reverse lg:flex-row justify-between w-full gap-10">
          {/* Left: Services List */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 text-[#2F3045] text-[18px] font-medium">
            {[
              'Mobile Application',
              'Full Stack Development',
              'UI UX Designing',
              'Digital Marketing',
            ].map((service, index) => (
              <div key={index} className="flex items-center gap-2">
                <img src="/service.png" alt="Service Icon" className="w-6 h-6 object-contain" />
                <span>{service}</span>
              </div>
            ))}
          </div>

          {/* Right: Discovery Card */}
          <div
            className="w-full lg:w-[365px] p-6 flex flex-col justify-between text-white rounded-lg"
            style={{
              background: 'linear-gradient(180deg, #2C73CC 0%, #079EA4 100%)',
            }}
          >
            <div className="flex flex-col items-center">
              <img src="/Vector.png" alt="Discovery Session" className="w-[100px] h-[100px] mb-8" />
              <h2 className="text-[22px] md:text-[24px] leading-[30px] text-center font-semibold">
                Schedule a Discovery Session <br /> with our Team
              </h2>

              <p className="text-[16px] mt-6 leading-[24px] text-center">
                Talk to our experts who have been running successful Digital Product Development
                (Apps, Web Apps), Offshore Team Operations, and Hardcore Software Development Campaigns.
              </p>
            </div>

            <div className="flex justify-center mt-8">
              <button className="flex items-center gap-2 rounded-2xl text-white bg-[#833AB4] px-6 py-3 font-bold text-[16px] capitalize hover:bg-[#6b2f93] transition duration-200">
                Book A Call
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19M12 5L19 12L12 19"
                    stroke="white"
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

      <OurServicesPage />
      <Footer />
    </>
  );
};

export default ServicesPage;
