'use client';

import React from 'react';
import TestimonialsSection from '../../../components/Testimonials';
import Footer from '../../../components/Footer';
import Breadcrumb from '../../../components/Breadcrumb';

const BlogsPage: React.FC = () => {
  return (
    <>
    <Breadcrumb/>
    <div className="bg-white p-10 font-sans">
      {/* Page Content Wrapper */}
      <div className="flex relative">
        {/* Blog Section */}
        <div className="w-[730px] bg-gray-100 shadow rounded-md p-4">
          {/* First Blog Post */}
          <div className="mb-10">
            <img
              src="/blog1.png"
              alt="Blog Visual 1"
              className="w-full h-[455px] object-cover mb-4 rounded"
            />
            <div className="text-lg">
              <h2 className="text-xl font-bold mb-1">
                What is Offshore Outsourcing Services: A Complete Guide
              </h2>
              <p className="text-gray-600 mb-1">
                Running a business today has become more like an uphill battle,
                where you constantly strive to develop innovative products/services to...
              </p>
              <h3 className="text-blue-600 cursor-pointer">Read More..</h3>
            </div>
          </div>

          {/* Second Blog Post */}
          <div className="mb-10">
            <img
              src="/blog2.png"
              alt="Blog Visual 2"
              className="w-full h-[455px] object-cover mb-4 rounded"
            />
            <div className="text-lg">
              <h2 className="text-xl font-bold mb-1">
                What are the Benefits of UI/UX Design?
              </h2>
              <p className="text-gray-600 mb-1">
                UI/UX design makes a digital product more interactive, easy to navigate,
                and hence, more engaging and sought-after. The attention span...
              </p>
              <h3 className="text-blue-600 cursor-pointer">Read More..</h3>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="absolute  left-[858px] w-[320px] h-[100px] bg-white shadow-md rounded-md p-4 flex flex-col justify-center">
          <label htmlFor="search" className="text-sm text-gray-500 mb-1">Search</label>
          <input
            id="search"
            type="text"
            placeholder="Search blogs..."
            className="w-full h-[40px] border border-gray-300 rounded-md px-4 text-base focus:outline-none"
          />
        </div>
      </div>
</div>
      {/* Testimonials & Footer after all content */}
      <div className="mt-20">
        <TestimonialsSection />
        <Footer />
      </div>
   </>
  );
};

export default BlogsPage;
