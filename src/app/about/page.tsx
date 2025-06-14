'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules'; 
import ProfileCard from '../../../components/ProfileCard';
import GetInTouchPage from '../../../components/getintouch';
import Footer from '../../../components/Footer';
import Breadcrumb from '../../../components/Breadcrumb';

const logos = [
  '/samsung.png',
  '/swift.png',
  '/ncr.png',
  '/payback.png',
  '/phzer.png',
  '/tech5.png',
  '/adobe.png',
];

const leadershipData = [
  {
    name: 'Pankaj Goel',
    title: 'Co-Founder & CEO',
    description: "We do any services that a testing services firm should do. The difference is in intent to make the applications usable. Businesses invest in testing out of the fear of something going wrong with their applications. We work with them to transform that fear into the assurance of positive user experience. So far we have done this for 400+ customers. And we look forward to working with you.I am Pankaj, your friend and partner in making your great products possible.",
    image: '/profile.png',
    linkedin: '#',
    reversed: false
  },
  {
    name: 'Avinash Tiwari',
    title: 'VP - Technology',
    description: "Finding defects is our job. This is motivation enough to find innovative ways of doing the job. Every service is backed by our methodologies which are built and have evolved over years of experience, since our inception in 2005. Be it your customer-facing application, or your employee-facing applications, we treat them the same and believe that both need the right perception to be tested.Web, mobile, API are just interfaces to us, we know how end-users work on them and have the right tools to validate applications on any of them.I am Avinash, ensuring that technology is used to solve your problems at Crestech.",
    image: '/profile.png',
    linkedin: '#',
    reversed: true
  }
];

const AboutUs: React.FC = () => {
  return (
    <>
      <Breadcrumb />
      <section className=" md:px-8 w-full py-12 px-6 sm:px-10 lg:px-20 bg-white">

        {/* Intro */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-[#221763] font-normal text-[18px] sm:text-[20px] md:text-[24px] leading-relaxed font-ibm">
            Welcome to <strong>Crestech</strong>, Your Trusted Partner for Software Quality Assurance Testing Services.<br /><br />
          Since 2005, Crestech has been setting standards for quality assurance. We know you’ve got great products in mind, and we love making them possible. That’s why we break your developers’ hearts.
          You may not love us for what we find, but you will surely love us for what we do.<br /><br />
          As a quality assurance software testing company, you can rest assured that your software products will meet and exceed industry standards for quality. We are committed to delivering error-free, reliable, and high-performing products that delight your user experience and enhance your business reputation.
          </p>
        </div>

        {/* Our Values Section */}
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="flex-1 space-y-4 lg:space-y-6 text-center lg:text-left">
            <h2 className="font-inter text-[28px] md:text-[36px] text-[#062953]">
              Our Values
            </h2>
            <p className="font-inter font-medium text-[20px] md:text-[28px] text-[#062953]">
              Long-term collaboration and trust
            </p>
            <p className="font-inter font-bold text-[20px] md:text-[28px] text-[#833AB4]">
              Quick alignment with customer needs
            </p>
            <p className="font-inter font-medium text-[20px] md:text-[28px] text-[#062953]">
              Simple solutions to complex problems
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="w-[250px] sm:w-[300px] md:w-[397px] h-[250px] sm:h-[300px] md:h-[397px] rounded-full overflow-hidden shadow-lg">
              <Image src="/idea.png" alt="Values" width={397} height={397} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Client Logos */}
        <div className="mt-16 text-center">
          <h3 className="text-[24px] md:text-[32px] font-semibold text-[#062953] font-inter mb-8">
            Trusted by clients around the world
          </h3>
          <Swiper
            modules={[Autoplay]}
            slidesPerView={2}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
            }}
            spaceBetween={30}
            loop
            autoplay={{ delay: 1500, disableOnInteraction: false }}
            className="w-full max-w-6xl mx-auto"
          >
            {logos.map((logo, index) => (
              <SwiperSlide key={index} className="flex justify-center items-center">
                <Image src={logo} alt={`Client ${index}`} width={80} height={80} className="object-contain" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Buttons Section */}
        <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-6">
          <button className="bg-gradient-to-r from-[#247CC4] to-[#059FA2] text-white font-semibold px-6 py-3 rounded-full w-[220px] transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
            See success stories
          </button>
          <button className="border border-[#833AB4] text-[#833AB4] font-semibold px-6 py-3 rounded-full w-[190px] transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
            Partner with us
          </button>
        </div>

        {/* Join Us Section */}
        <h3 className="text-[28px] md:text-[42px] text-center font-semibold text-[#062953] mt-20">
          Join us on our journey
        </h3>
        <div className="mt-6 flex flex-col md:flex-row justify-center items-center gap-6">
          <button className="bg-gradient-to-r from-[#247CC4] to-[#059FA2] text-white font-semibold px-6 py-3 mb-10 rounded-full w-[220px] transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
            Join the team
          </button>
          
          <button className="border border-[#833AB4] text-[#833AB4] font-semibold px-6 py-3 rounded-full w-[190px]bg-gradient-to-r from-[#247CC4] to-[#059FA2]   transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
            Get in touch
          </button>
        </div>

        {/* Leadership Section */}
        <h2 className="text-[28px] md:text-[42px] text-center font-inter font-semibold text-[#062953] mt-20">
          A note from our leadership
        </h2>
        <div className="mt-12 space-y-16">
          {leadershipData.map((leader, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-10 px-4 ${
                leader.reversed ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] rounded-full overflow-hidden">
                <Image src={leader.image} alt={leader.name} width={300} height={300} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <h3 className="text-[#833AB4] font-semibold text-[20px] sm:text-[24px] mb-2">{leader.name}</h3>
                <p className="text-[#062953] text-[16px] sm:text-[18px] font-semibold">{leader.title}</p>
                <p className="text-[#4A4A4A] text-[14px] sm:text-[16px] whitespace-pre-line font-normal leading-6 max-w-3xl mt-2">
                  {leader.description}
                </p>
                <a href={leader.linkedin} target="_blank" rel="noopener noreferrer">
                  <Image src="/linkedin-svgrepo-com.svg" alt="LinkedIn" width={24} height={24} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact & Footer */}
      <ProfileCard />
      <GetInTouchPage />
      <Footer />
    </>
  );
};

export default AboutUs;
