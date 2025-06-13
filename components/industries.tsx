'use client';

import React from 'react';
import { Building2, ShoppingCart, Banknote, Truck, Hospital, PlaneTakeoff, BookOpen, Factory } from 'lucide-react';

const industries = [
  { icon: <Building2 size={20} />, label: 'TECHNOLOGY' },
  { icon: <ShoppingCart size={20} />, label: 'ECOMMERCE' },
  { icon: <Banknote size={20} />, label: 'BANKING' },
  { icon: <Truck size={20} />, label: 'LOGISTIC & SHIPPING' },
  { icon: <Hospital size={20} />, label: 'HOSPITAL' },
  { icon: <PlaneTakeoff size={20} />, label: 'TRAVEL' },
  { icon: <BookOpen size={20} />, label: 'EDUCATION' },
  { icon: <Factory size={20} />, label: 'MANUFACTURING' },
];

const HomeIndustriesSection: React.FC = () => {
  return (
    <section className="py-12 px-4 sm:px-10 bg-gradient-to-r from-teal-500 to-purple-500 text-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl font-bold uppercase">Industries</h2>
        <div className="w-20 h-1 bg-white mx-auto mt-2 mb-8" />

        {/* Grid of industries */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {industries.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center space-y-2">
              <div className="text-white">{item.icon}</div>
              <p className="text-[14px] font-semibold text-center">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeIndustriesSection;
