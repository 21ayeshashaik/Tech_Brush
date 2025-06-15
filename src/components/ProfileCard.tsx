'use client';

import React from 'react';
import Image from 'next/image';

const ProfileCard = () => {
  return (
    <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">
      {/* Profile Image */}
      <div className="w-[160px] h-[160px] sm:w-[180px] sm:h-[180px] overflow-hidden rounded-xl flex-shrink-0">
        <Image
          src="/profile.png"
          alt="Vinod Kumar Singh"
          width={180}
          height={180}
          className="object-cover w-full h-full"
          priority
        />
      </div>

      {/* Profile Content */}
      <div className="flex-1 text-center md:text-left">
        <h3 className="text-[#833AB4] text-xl sm:text-2xl font-bold mb-1">
          Vinod Kumar Singh
        </h3>
        <p className="text-sm sm:text-base text-[#4A4A4A] mb-4">
          Champion of QA. 25+ years in IT. Digs software compliance.
        </p>

        {/* Skills */}
        <div className="space-y-3">
          <SkillBar title="Problem Solver" value={80} />
          <SkillBar title="Perfectionist" value={70} />
          <SkillBar title="Social Animal" value={50} />
        </div>

        {/* LinkedIn Icon */}
        <div className="mt-4 flex justify-center md:justify-start">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Image
              src="/linkedin-svgrepo-com.svg"
              alt="LinkedIn"
              width={24}
              height={24}
              className="hover:scale-110 transition-transform duration-200"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

// SkillBar Subcomponent
const SkillBar = ({ title, value }: { title: string; value: number }) => {
  return (
    <div>
      <div className="text-sm font-medium text-[#062953] mb-1">{title}</div>
      <div className="w-full bg-[#F2F2F2] rounded-full h-2">
        <div
          className="bg-[#FFC107] h-2 rounded-full transition-all duration-300"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
};

export default ProfileCard;
