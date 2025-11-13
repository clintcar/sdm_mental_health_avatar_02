"use client";

import React from "react";

export default function NavBar() {
  return (
    <>
      <div className="flex flex-col w-[1000px] m-auto p-4 pb-0 gap-1">
        <div className="flex flex-row items-center justify-center gap-4">
          <div className="flex flex-col">
            <p className="text-2xl font-semibold text-black text-center">
            CU Anschutz School of Dental Medicine - Health Assessment Avatar
            </p>
          </div>
        </div>
        <div className="flex justify-end">
          <a
            href="https://www.linkedin.com/in/clintcarlson/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-black"
          >
            Author: Clint Carlson | Contact
          </a>
        </div>
        {/* Right-side links are intentionally hidden */}
      </div>
    </>
  );
}
