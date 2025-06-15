'use client';

import React from 'react';
import Image from 'next/image';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  return (
    <div
      className={`w-full bg-white rounded-md shadow-sm px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-2 md:gap-4 ${className}`}
    >
      {/* Left: Social Icons */}
      <div className="flex flex-wrap ml-10 items-center gap-3">
        <Image src="/facebook-svgrepo-com.svg" alt="Facebook" width={24} height={24} />
        <Image src="/twitter-svgrepo-com.svg" alt="Twitter" width={24} height={24} />
        <Image src="/linkedin-svgrepo-com.svg" alt="LinkedIn" width={24} height={24} />
        <Image src="/pinterest-1-svgrepo-com.svg" alt="Pinterest" width={24} height={24} />
        <Image src="/instagram-1-svgrepo-com.svg" alt="Instagram" width={24} height={24} />
      </div>

      {/* Right: Contact Info */}
      <div className="flex flex-wrap items-center gap-2 text-sm text-gray-800">
        <Image
          src="/ph.png"
          alt="Phone"
          width={24}
          height={24}
          className="rounded-full border border-gray-400"
        />
        <span className="whitespace-nowrap">+91 98765 43210</span>
        <span className="whitespace-nowrap truncate max-w-[180px] sm:max-w-[250px]">
          📧 example@email.com
        </span>
      </div>
    </div>
  );
};

export default Header;
