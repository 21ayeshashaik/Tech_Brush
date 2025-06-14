import React, { useState } from 'react';
import Image from 'next/image';

interface ServiceCardProps {
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  const defaultImage = '/services.png';    // Place your image in /public
  const hoverImage = '/servicesh.png';        // Hover version of the image

  return (
    <div
      className="transition-transform hover:-translate-y-2 shadow-md duration-300 flex flex-col items-center text-center p-4 cursor-pointer"
      style={{
        width: '247px',
        height: '280px',
        borderRadius: '3px',
        background: isHovered
          ? 'linear-gradient(180.17deg, #9747FF 46.97%, rgba(69, 183, 149, 0.94) 99.85%)'
          : '#F8FAFC',
        boxShadow: isHovered
          ? '1.7px 9.8px 30px 0px #0302324D'
          : '0 1px 3px rgba(0, 0, 0, 0.1)',
        color: isHovered ? 'white' : '#062953',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={isHovered ? hoverImage : defaultImage}
        alt="Service icon"
        width={48}
        height={48}
        className="mb-4"
      />

      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm" style={{ color: isHovered ? 'white' : '#4B5563' }}>
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
