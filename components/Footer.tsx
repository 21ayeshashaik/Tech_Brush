'use client';

import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer
      className="relative w-full bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/footer.png')" }}
      aria-label="Site Footer"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#2F3045E5] z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-12 font-montserrat space-y-10">

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-white/80 text-center md:text-left">
          
          {/* About */}
          <div className="order-2 md:order-1 flex flex-col items-center md:items-start">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4">About</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              {[
                "Our Company",
                "Careers",
                "Client Referral Program",
                "Contact Us",
                "Blog",
                "Sitemap",
                "Fraud Alert"
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-white transition-colors duration-200">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="order-3 md:order-2 flex flex-col items-center md:items-start">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4">Services</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              {[
                "Mobile App Development",
                "iPhone App Development",
                "Android App Development",
                "React Native Development",
                "Web Development",
                "Technical SEO Services",
                "Staff Augmentation",
                "Hire Dev Team",
                "More +"
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-white transition-colors duration-200">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Logo + Contact */}
          <div className="order-1 md:order-3 flex flex-col items-center md:items-end text-center md:text-right gap-0">
            <Image
              src="/TechBrush(2).png"
              alt="TechBrush Logo"
              width={160}
              height={160}
              className="object-contain mb-0"
            />
            <div className="w-full md:w-auto mt-0">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 mt-2 md:mt-4">Connect with us</h3>
              <address className="not-italic space-y-3 text-sm sm:text-base text-white/80">
                <div className="flex justify-center md:justify-end items-center gap-2">
                  <Image
                    src="/message-tick-svgrepo-com.svg"
                    alt="Email icon"
                    width={18}
                    height={18}
                    className="invert"
                  />
                  <a href="mailto:sales@techbrush.com" className="hover:text-white">sales@techbrush.com</a>
                </div>
                <div className="flex justify-center md:justify-end items-center gap-2">
                  <Image
                    src="/call.svg"
                    alt="Phone icon"
                    width={18}
                    height={18}
                    className="invert"
                  />
                  <a href="tel:+13474671089" className="hover:text-white">+1 - 347-467-1089</a>
                </div>
              </address>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
