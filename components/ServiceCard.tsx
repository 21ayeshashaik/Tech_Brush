import React, { useState } from 'react';
import Image from 'next/image';

interface ServiceCardProps {
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  const defaultImage = '/services.png';
  const hoverImage = '/servicesh.png';

  return (
    <div
      className={`w-[247px] h-[280px] rounded-[3px] p-4 cursor-pointer 
      flex flex-col items-center text-center transition-all duration-700 ease-in-out
      transform hover:-translate-y-2 hover:scale-105 
      ${isHovered ? 'bg-gradient-to-b from-[#9747FF] to-[#45B795f0]' : 'bg-[#F8FAFC] shadow'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        boxShadow: isHovered
          ? '1.7px 9.8px 30px 0px #0302324D'
          : '0 1px 3px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.6s ease-in-out',
      }}
    >
      <Image
        src={isHovered ? hoverImage : defaultImage}
        alt="Service icon"
        width={48}
        height={48}
        className="mb-4 transition-transform duration-500 ease-in-out"
      />

      <h3
        className={`text-lg font-semibold mb-2 font-montserrat transition-colors duration-500 ${
          isHovered ? 'text-white' : 'text-[#062953]'
        }`}
      >
        {title}
      </h3>

      <p
        className={`text-sm font-montserrat transition-colors duration-500 ${
          isHovered ? 'text-white' : 'text-gray-600'
        }`}
      >
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
