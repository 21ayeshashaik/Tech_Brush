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
    <section className="bg-white py-12 px-4 sm:px-10">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl font-extrabold text-[#0D0C51] uppercase">Technologies</h2>
        <div className="w-24 h-1 bg-green-400 mx-auto my-4" />

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-10">
          {technologies.map((tech, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <div className="w-20 h-20 relative">
                <Image
                  src={tech.src}
                  alt={tech.name}
                  fill
                  className="object-contain"
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
