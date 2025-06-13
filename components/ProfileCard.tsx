import React from 'react';
import Image from 'next/image';

const ProfileCard = () => {
  return (
    <div className="max-w-9xl mx-auto bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-8">
      {/* Profile Image */}
      <div className="w-[180px] h-[180px] overflow-hidden rounded-xl flex-shrink-0">
        <Image
          src="/profile.png" 
          alt="Vinod Kumar Singh"
          width={180}
          height={180}
          className="object-cover w-full h-full "
        />
      </div>

      {/* Profile Content */}
      <div className="flex-1 ">
        <h3 className="text-[#833AB4] text-xl font-bold">
          Vinod Kumar Singh
        </h3>
        <p className="text-sm text-[#4A4A4A] mb-4">
          Champion of QA. 25+ years in IT. Digs software compliance
        </p>

        {/* Skills */}
        <div className="space-y-3">
          <SkillBar title="Dancing Machine" value={80} />
          <SkillBar title="Perfectionist" value={70} />
          <SkillBar title="Social Animal" value={50} />
        </div>

        {/* LinkedIn Icon */}
        <div className="mt-4">
          <a href="#" target="_blank">
            <Image src="/linkedin-svgrepo-com.svg" alt="LinkedIn" width={24} height={24} />
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
          className="bg-[#FFC107] h-2 rounded-full"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
};

export default ProfileCard;
