'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function BreadcrumbBanner({ crumbs = [] }) {
  const current = crumbs[crumbs.length - 1]?.label || '';

  return (
    <div className="bg-[#0A2540] text-white mt-25 py-6 px-6 text-center shadow-md">
      <h2 className="text-4xl font-extrabold tracking-wide uppercase mb-4">
        {current}
      </h2>

      <nav
        aria-label="breadcrumb"
        className="inline-flex items-center justify-center text-sm font-medium text-gray-300"
      >
        {crumbs.map((crumb, idx) => {
          const isLast = idx === crumbs.length - 1;

          return (
            <span key={idx} className="inline-flex items-center">
              {!isLast && crumb.href ? (
                <>
                  <Link
                    href={crumb.href}
                    className="hover:text-yellow-400 transition-colors"
                  >
                    {crumb.label}
                  </Link>
                  <ChevronRight className="w-4 h-4 mx-2 text-gray-500" />
                </>
              ) : (
                <span className="text-white">{crumb.label}</span>
              )}
            </span>
          );
        })}
      </nav>
    </div>
  );
}
