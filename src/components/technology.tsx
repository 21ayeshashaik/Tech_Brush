'use client';

import React from 'react';
import Image from 'next/image';

const technologies = [
  { name: 'Java', src: '/java-4-logo-svgrepo-com.svg' },
  { name: 'JavaScript', src: '/javascript-logo.png' },
  { name: 'Vue.js', src: '/vue.png' },
  { name: 'AngularJS', src: '/angular.png' },
  { name: 'React', src: '/react.png' },
  { name: 'Solidity', src: '/solidity.png' },
  { name: 'PHP', src: '/php.png' },
  { name: 'React Native', src: '/reactna.png' },
  { name: 'CSS', src: '/css.jpeg' },
  { name: 'Swift', src: '/swift.png' },
  { name: 'HTML', src: '/html.jpeg' },
  { name: 'Golang', src: '/golang.png' },
  { name: 'Kotlin', src: '/kotlin.png' },
  { name: 'Node.js', src: '/node.png' },
];

const TechnologySection: React.FC = () => {
  return (
    <section className="bg-white py-10 px-4 sm:px-6 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#0D0C51] uppercase tracking-wide">
          Technologies
        </h2>
        <div className="w-20 h-1 bg-green-400 mx-auto my-4 rounded-full" />

        {/* Technologies Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-x-6 gap-y-10 mt-10">
          {technologies.map((tech, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20">
                <Image
                  src={tech.src}
                  alt={tech.name}
                  fill
                  className="object-contain transition-transform duration-300 hover:scale-110"
                />
              </div>
  
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
