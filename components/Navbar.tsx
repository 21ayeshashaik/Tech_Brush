'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

interface NavbarProps {
  className?: string;
}

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/service' },
  { label: 'Blog', href: '/blog' },
  { label: 'Portfolio', href: '/portfolio' },
];

const Navbar: React.FC<NavbarProps> = ({ className = '' }) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className={`w-full bg-white shadow-md relative z-50 ${className}`}>
      <nav className="h-16 md:h-[104px] px-4 md:px-6 flex items-center justify-between">
        
        {/* Logo */}
        <div className="p-2 md:p-3">
          <img src="/TechBrush.png" alt="Logo" className="h-30 sm:h-20 md:h-47 w-auto" />
        </div>

        {/* Desktop Nav Links */}
       <div className="hidden md:flex gap-x-4 lg:gap-x-10 items-center">
  {navLinks.map(({ label, href }) => {
    const isActive = mounted && pathname === href;
    return (
      <Link
        key={href}
        href={href}
        className="relative group text-xs sm:text-sm md:text-[13px] uppercase font-semibold tracking-wide text-gray-700 hover:text-[#00A69C] transition-colors duration-300"
      >
        <span className={`transition-colors duration-300 ${isActive ? 'text-[#00A69C]' : ''}`}>
          {label}
        </span>
        {/* Animated Underline */}
        <span
  className={`
    absolute left-0 -bottom-1 h-[2px] w-full bg-[#9102E0] rounded-full
    transform transition-transform duration-300 scale-x-0 origin-left
    group-hover:scale-x-100
  `}
/>

      </Link>
    );
  })}
</div>


        {/* Desktop Contact Button */}
        <div className="hidden md:block">
          <button className="bg-[#9102E0] text-white px-4 md:px-5 py-2 rounded-md text-xs md:text-sm font-medium relative overflow-hidden group">
            <span className="relative z-10 flex items-center">
              Contact Us
              <div className="bg-white p-1 rounded-full w-5 h-5 md:w-6 md:h-6 flex items-center justify-center ml-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#9102E0" viewBox="0 0 128 128" className="w-3 h-3 md:w-4 md:h-4">
                  <path d="M33.84,50.25c4.13,7.45,8.89,14.6,15.07,21.12c6.2,6.56,13.91,12.53,23.89,17.63c0.74,0.36,1.44,0.36,2.07,0.11 c0.95-0.36,1.92-1.15,2.87-2.1c0.74-0.74,1.66-1.92,2.62-3.21c3.84-5.05,8.59-11.32,15.3-8.18c0.15,0.07,0.26,0.15,0.41,0.21 l22.38,12.87c0.07,0.04,0.15,0.11,0.21,0.15c2.95,2.03,4.17,5.16,4.2,8.71c0,3.61-1.33,7.67-3.28,11.1 c-2.58,4.53-6.38,7.53-10.76,9.51c-4.17,1.92-8.81,2.95-13.27,3.61c-7,1.03-13.56,0.37-20.27-1.69 c-6.56-2.03-13.17-5.38-20.39-9.84l-0.53-0.34c-3.31-2.07-6.89-4.28-10.4-6.89C31.12,93.32,18.03,79.31,9.5,63.89 C2.35,50.95-1.55,36.98,0.58,23.67c1.18-7.3,4.31-13.94,9.77-18.32c4.76-3.84,11.17-5.94,19.47-5.2c0.95,0.07,1.8,0.62,2.25,1.44 l14.35,24.26c2.1,2.72,2.36,5.42,1.21,8.12c-0.95,2.21-2.87,4.25-5.49,6.15c-0.77,0.66-1.69,1.33-2.66,2.03 c-3.21,2.33-6.86,5.02-5.61,8.18L33.84,50.25L33.84,50.25L33.84,50.25z" />
                </svg>
              </div>
            </span>
            <span className="absolute inset-0 bg-gradient-to-bl from-[#18CB96] to-[#9102E0] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          </button>
        </div>

        {/* Hamburger Icon - Mobile Only */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-7 h-7 text-gray-800" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown - Only for mobile */}
      {isOpen && (
  <>
    {/* Overlay */}
    <div
      className="fixed inset-0 bg-black bg-opacity-40 z-40"
      onClick={() => setIsOpen(false)}
    />

    {/* Mobile Menu Panel */}
    <div className="fixed top-0 right-0 w-3/4 h-full bg-white z-50 shadow-lg p-6 overflow-y-auto">
      <button
        className="mb-4 text-gray-800 font-bold text-lg"
        onClick={() => setIsOpen(false)}
      >
        ✕ Close
      </button>
      {navLinks.map(({ label, href }) => (
        <Link
          key={href}
          href={href}
          onClick={() => setIsOpen(false)}
          className={`block py-3 text-base font-semibold text-gray-800 hover:text-[#00A69C] ${
            mounted && pathname === href ? 'text-[#00A69C]' : ''
          }`}
        >
          {label}
        </Link>
      ))}
      <button
        className="mt-6 w-full bg-[#9102E0] text-white px-4 py-3 rounded-md text-base font-semibold"
        onClick={() => setIsOpen(false)}
      >
        Contact Us
      </button>
    </div>
  </>
)}


    </header>
  );
};

export default Navbar;
