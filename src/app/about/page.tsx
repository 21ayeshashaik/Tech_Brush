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
    description: `“We do any services that a testing services firm should do. The difference is in intent to make the applications usable. Businesses invest in testing out of the fear of something going wrong with their applications. We work with them to transform that fear into the assurance of positive user experience. So far we have done this for 400+ customers. And we look forward to working with you.

I am Pankaj, your friend and partner in making your great products possible.”`,
    image: '/profile.png',
    linkedin: '#',
    reversed: false
  },
  {
    name: 'Avinash Tiwari',
    title: 'VP - Technology',
    description: `“Finding defects is our job. This is motivation enough to find innovative ways of doing the job. Every service is backed by our methodologies which are built and have evolved over years of experience, since our inception in 2005. 

Be it your customer-facing application, or your employee-facing applications, we treat them the same and believe that both need the right perception to be tested.

Web, mobile, API are just interfaces to us, we know how end-users work on them and have the right tools to validate applications on any of them.

I am Avinash, ensuring that technology is used to solve your problems at Crestech.”`,
    image: '/profile.png',
    linkedin: '#',
    reversed: true
  }
];

const AboutUs: React.FC = () => {
  return (
    <>
    <Breadcrumb/>
    <section className="w-full py-12 px-4 md:px-8 bg-white">
      {/* Intro Text */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <p className="text-[#221763] font-normal text-[24px] leading-[30.72px] font-ibm tracking-normal">
          Welcome to <strong>Crestech</strong>, Your Trusted Partner for Software Quality Assurance Testing Services.<br /><br />
          Since 2005, Crestech has been setting standards for quality assurance. We know you’ve got great products in mind, and we love making them possible. That’s why we break your developers’ hearts.
          You may not love us for what we find, but you will surely love us for what we do.<br /><br />
          As a quality assurance software testing company, you can rest assured that your software products will meet and exceed industry standards for quality. We are committed to delivering error-free, reliable, and high-performing products that delight your user experience and enhance your business reputation.
        </p>
      </div>

      {/* Our Values Section with Image */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left: Text Content */}
        <div className="flex-1 space-y-6 ml-20 max-w-3xl">
          <h2 className="font-inter font-normal md:text-[42px] sm:text-[24px] leading-[50.4px] text-[#062953]">
            Our Values
          </h2>

          <p className="font-inter font-medium  md:text-[32px] sm:text-[24px] leading-[38.4px] text-[#062953]">
            Long-term collaboration and trust
          </p>

          <p className="font-inter font-bold md:text-[31.88px] sm:text-[24px] leading-[38.4px] text-[#833AB4]">
            Quick alignment with customer needs
          </p>

          <p className="font-inter font-medium md:text-[32px] sm:text-[24px] leading-[38.4px] text-[#062953]">
            Simple solutions to complex problems
          </p>
        </div>

        {/* Right: Circular Image */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-[397px] h-[397px] rounded-full overflow-hidden shadow-lg">
            <Image
              src="/idea.png" // Replace with actual image path
              alt="Our Values Illustration"
              width={397}
              height={397}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
       {/* Trusted by Clients */}
       <div className="h-10"></div>
      <div className="mt-20 text-center">
        <h3 className="text-[28px] md:text-[32px] font-semibold text-[#062953] font-inter mb-6">
          Trusted by clients around the world
        </h3>
        <div className="h-10"></div>
       <Swiper
  modules={[Autoplay]}
  slidesPerView={5}
  spaceBetween={30}
  loop={true}
  autoplay={{
    delay: 1000,
    disableOnInteraction: false,
  }}
  className="w-full max-w-6xl mx-auto"
>
  {logos.map((logo, index) => (
    <SwiperSlide key={index} className="flex justify-center items-center">
      <Image
        src={logo}
        alt={`Client Logo ${index + 1}`}
        width={80}
        height={80}
        className="object-contain hover:grayscale-0 transition-all duration-300"
      />
    </SwiperSlide>
  ))}
</Swiper>

      </div>
      <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-6">
  {/* See Success Stories Button */}
  <button
    className="text-white text-[16px] font-semibold rounded-full px-6 py-3"
    style={{
      width: '220.13px',
      height: '46.39px',
      borderRadius: '90px',
      background: 'linear-gradient(90deg, #247CC4 0%, #059FA2 100%)',
    }}
  >
    See success stories
  </button>

  {/* Partner with Us Button */}
  <button
    className="text-[#833AB4] text-[16px] font-semibold border rounded-full px-6 py-3"
    style={{
      width: '190.81px',
      height: '48.39px',
      borderRadius: '90px',
      border: '1px solid #833AB4',
    }}
  >
    Partner with us
  </button>
  <div className="h-35"></div>
</div>
<h3 className="text-[42px] md:text-[42px] text-center font-semibold text-[#062953] font-inter mb-6">
          Join us on our journey
        </h3>
        <div className="h-20"></div>
<div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-6">
  {/* See Success Stories Button */}
  <button
    className="text-white text-[16px] font-semibold rounded-full px-6 py-3"
    style={{
      width: '220.13px',
      height: '46.39px',
      borderRadius: '90px',
      background: 'linear-gradient(90deg, #247CC4 0%, #059FA2 100%)',
    }}
  >
    Join the team 
  </button>

  {/* Partner with Us Button */}
  <button
    className="text-[#833AB4] text-[16px] font-semibold border rounded-full px-6 py-3"
    style={{
      width: '190.81px',
      height: '48.39px',
      borderRadius: '90px',
      border: '1px solid #833AB4',
    }}
  >
    Get in touch
  </button>
</div>
<div className="h-20"></div>
<h2 className="font-inter font-normal text-[42px] leading-[50.4px] text-center text-[#062953]">
  A note from our leadership
</h2>
<div className="h-10"></div>
 {leadershipData.map((leader, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row justify-between gap-10 mb-16 ml-20 ${
            leader.reversed ? 'md:flex-row-reverse' : ''
          }`}
        >
          <div className="w-[300px] h-[300px] rounded-full overflow-hidden">
            <Image
              src={leader.image}
              alt={leader.name}
              width={200}
              height={200}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="flex-1 ">
            <h3 className="text-[#833AB4] font-semibold text-[24px] mb-1">
              {leader.name}
            </h3>
            <p className="text-[#062953] text-[18px] font-semibold mb-4">
              {leader.title}
            </p>
            <p className="text-[#4A4A4A] text-[16px] whitespace-pre-line font-normal max-w-3xl leading-6 mb-4">
              {leader.description}
            </p>
            <a href={leader.linkedin} target="_blank" rel="noopener noreferrer">
              <Image
                src="/linkedin-svgrepo-com.svg" // Replace with actual LinkedIn icon path
                alt="LinkedIn"
                width={24}
                height={24}
              />
            </a>
          </div>
        </div>
      ))}
     
    </section>
    <div className="h-10"></div>
     <ProfileCard/>
     <div className="h-10"></div>
      <GetInTouchPage/>
      <div className="h-10"></div>
      <Footer/>
      </>
  );
};

export default AboutUs;
