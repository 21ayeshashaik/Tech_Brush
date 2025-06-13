'use client';

import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="relative w-full h-[567px] bg-cover bg-center" style={{ backgroundImage: "url('/footer.png')" }}>
      {/* Overlay Color */}
      <div className="absolute inset-0 bg-[#2F3045E5] z-0" />

      {/* Footer Content */}
      <div className="relative z-10 max-w-[1323px] ml-30 mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-10 text-white font-montserrat">

        {/* About */}
        <div>
          <h3 className="text-xl font-bold mb-4">About</h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li>Our Company</li>
            <li>Careers</li>
            <li>Client Referral Partner Program</li>
            <li>Contact Us</li>
            <li>Blog</li>
            <li>Sitemap</li>
            <li>Fraud Alert</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-bold mb-4">Services</h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li>Mobile App Development</li>
            <li>iPhone App Development</li>
            <li>Android App Development</li>
            <li>React Native App Development</li>
            <li>Web Development</li>
            <li>Technical SEO Services</li>
            <li>Staff Augmentation</li>
            <li>Hire Dev Team</li>
            <li>More +</li>
          </ul>
        </div>

        {/* Connect With Us */}
        <div>
          <h3 className="text-xl font-bold mb-4">Connect with us</h3>
          <ul className="space-y-4 text-sm text-white/80">
            <li className="flex items-center gap-2">
              <Image src="/message-tick-svgrepo-com.svg" alt="Email" width={16} height={16} className="invert" />
              <span>sales@techbrush.com</span>
            </li>
            <li className="flex items-center gap-2">
              <Image src="/call.svg" alt="Phone" width={16} height={16} className="invert" />
              <span>+1 - 347-467-1089</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Logo at Bottom */}
      <div className="relative z-10 flex ml-30">
        <Image
          src="/TechBrush(2).png" // Your actual logo here
          alt="TechBrush Logo"
          width={180}
          height={40}
        />
      </div>
    </footer>
  );
};

export default Footer;
