'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import React from 'react';

const Breadcrumb: React.FC = () => {
  const pathname = usePathname();

  // Skip breadcrumb on home page
  if (pathname === '/') return null;

  const paths = pathname.split('/').filter(Boolean);

  return (
    <div
      className="w-full py-3 h-[104px] px-6 text-white font-semibold text-sm flex items-center justify-start"
      style={{
        background: 'linear-gradient(0deg, #00A69C 0%, #2D71CE 100%)',
      }}
    >
    <div className="max-w-7xl w-full flex justify-start gap-2 items-center mx-auto">
  <Link href="/" className="hover:underline">
    Home
  </Link>
  {paths.map((segment, i) => {
    const href = '/' + paths.slice(0, i + 1).join('/');
    const label = segment.charAt(0).toUpperCase() + segment.slice(1);
    return (
      <React.Fragment key={i}>
        <span className="mx-1">/</span>
        <Link href={href} className="hover:underline">
          {label}
        </Link>
      </React.Fragment>
    );
  })}
</div>

    </div>
  );
};

export default Breadcrumb;
