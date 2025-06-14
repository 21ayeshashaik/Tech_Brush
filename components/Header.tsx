'use client';

import React from 'react';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  return (
    <div
      className={`w-full bg-white rounded-md shadow-sm px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-2 md:gap-4 ${className}`}
    >
      {/* Left: Social Icons */}
      <div className="flex flex-wrap ml-15 items-center gap-3">
        <img src="/facebook-svgrepo-com.svg" alt="Facebook" className="w-5 h-5 sm:w-6 sm:h-6" />
        <img src="/twitter-svgrepo-com.svg" alt="Twitter" className="w-5 h-5 sm:w-6 sm:h-6" />
        <img src="/linkedin-svgrepo-com.svg" alt="LinkedIn" className="w-5 h-5 sm:w-6 sm:h-6" />
        <img src="/pinterest-1-svgrepo-com.svg" alt="Pinterest" className="w-5 h-5 sm:w-6 sm:h-6" />
        <img src="/instagram-1-svgrepo-com.svg" alt="Instagram" className="w-5 h-5 sm:w-6 sm:h-6" />
      </div>

      {/* Right: Contact Info */}
      <div className="flex flex-wrap items-center gap-2 text-sm text-gray-800">
        <img
          src="/ph.png"
          alt="Phone"
          className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border border-gray-400"
        />
        <span className="whitespace-nowrap">+91 98765 43210</span>
        <span className="whitespace-nowrap truncate max-w-[180px] sm:max-w-[250px]">📧 example@email.com</span>
      </div>
    </div>
  );
};

export default Header;
