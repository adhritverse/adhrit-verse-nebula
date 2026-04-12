"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function ServicesList({ children }: { children: React.ReactNode }) {
  const [showAll, setShowAll] = useState(false);
  const childrenArray = React.Children.toArray(children);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {childrenArray.map((child, idx) => (
          <div key={idx} className={`${!showAll && idx >= 2 ? "hidden sm:block" : "block"}`}>
            {child}
          </div>
        ))}
      </div>
      
      {!showAll && childrenArray.length > 2 && (
        <div className="text-center mt-8 sm:hidden">
          <button
            onClick={() => setShowAll(true)}
            className="btn-outline px-6 py-2.5 rounded-full text-white font-medium text-xs inline-flex items-center gap-2"
          >
            Show More <i className="fas fa-chevron-down" aria-hidden="true" />
          </button>
        </div>
      )}
      
      {showAll && (
        <div className="text-center mt-8 sm:hidden">
          <Link
            href="/services"
            className="btn-outline px-8 py-3.5 rounded-full text-white font-medium text-sm inline-flex items-center gap-2"
            aria-label="View all services offered by AdhritVerse"
          >
            View All Services <i className="fas fa-arrow-right text-xs" aria-hidden="true" />
          </Link>
        </div>
      )}
    </>
  );
}
