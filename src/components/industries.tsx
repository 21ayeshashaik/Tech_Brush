'use client';

import React from 'react';
import {
  Building2,
  ShoppingCart,
  Banknote,
  Truck,
  Hospital,
  PlaneTakeoff,
  BookOpen,
  Factory,
} from 'lucide-react';

const industries = [
  { icon: Building2, label: 'TECHNOLOGY' },
  { icon: ShoppingCart, label: 'ECOMMERCE' },
  { icon: Banknote, label: 'BANKING' },
  { icon: Truck, label: 'LOGISTIC & SHIPPING' },
  { icon: Hospital, label: 'HOSPITAL' },
  { icon: PlaneTakeoff, label: 'TRAVEL' },
  { icon: BookOpen, label: 'EDUCATION' },
  { icon: Factory, label: 'MANUFACTURING' },
];

const HomeIndustriesSection: React.FC = () => {
  return (
    <section className="py-10 px-4 sm:px-6 md:px-8 bg-gradient-to-r from-teal-500 to-purple-500 text-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase font-montserrat">
          Industries
        </h2>
        <div className="w-16 sm:w-20 h-1 bg-white mx-auto mt-3 mb-8 rounded-full" />

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 sm:gap-8">
          {industries.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center justify-center space-y-1 text-white hover:text-yellow-300 transition duration-300"
              >
                <div className="p-2 sm:p-3 bg-white/20 rounded-full">
                  <Icon size={20} className="sm:size-3 md:size-4" />
                </div>
                <p className="text-xs sm:text-sm md:text-[15px] font-semibold text-center leading-tight font-montserrat">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeIndustriesSection;
