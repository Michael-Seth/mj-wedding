"use client";

import React from "react";
import { chilanka, oleo } from "../fonts";
import dynamic from "next/dynamic";

const Donate = dynamic(() => import("./Donate"), { ssr: false });
const Gift = dynamic(() => import("./Gift"), { ssr: false });

export const DG = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mt-8 mx-auto">
      <div
        id="support"
        className="mx-auto max-w-lg mb-8 text-center flex flex-col items-center"
      >
        <h2
          className={`${oleo.className} text-3xl sm:text-5xl font-bold text-gray-800 dark:text-neutral-200`}
        >
          Share In Our Joy
        </h2>

        <p
          className={`${chilanka.className} mt-3 text-gray-600 dark:text-neutral-400`}
        >
          Your love and support mean the world to us! Contribute a gift or send
          us a token of your kindness.
        </p>
        <span className="text-center mt-4">
          <svg
            width="239"
            height="24"
            viewBox="0 0 239 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M119.5 9V7.986M150 12.5H239M0 12.5H89M119.5 8.25C119.5 5.35 121.85 3 124.75 3C127.65 3 130 5.382 130 8.282C130 9.842 129.313 11.337 128.12 12.344L122.463 17.12C121.535 17.9038 120.789 18.8808 120.277 19.9828C119.765 21.0847 119.5 22.285 119.5 23.5C119.5 22.285 119.235 21.0847 118.723 19.9828C118.211 18.8808 117.465 17.9038 116.537 17.12L110.88 12.344C110.291 11.8437 109.818 11.2213 109.493 10.5199C109.168 9.8185 109 9.05489 109 8.282C109 5.382 111.35 3 114.25 3C117.15 3 119.5 5.35 119.5 8.25Z"
              stroke="#F46E81"
            />
          </svg>
        </span>
      </div>
      <div className="bg-white dark:bg-gray-900">
        <div className="container py-10 mx-auto">
          <div className="grid grid-cols-1 gap-8 md:gap-2 md:grid-cols-2">
            <Donate />

            <Gift />
          </div>
        </div>
      </div>
    </div>
  );
};
