"use client"
import React from "react";
import { chilanka, oleo } from "../fonts";
import a from "../../assets/imgs/24.jpeg";
import b from "../../assets/imgs/8.jpeg";
import c from "../../assets/imgs/29.jpeg";
import h from "../../assets/imgs/6.jpeg";
import e from "../../assets/imgs/3.jpeg";
import f from "../../assets/imgs/20.jpeg";
import g from "../../assets/imgs/30.jpg";
import d from "../../assets/imgs/23.jpeg";
import i from "../../assets/imgs/39.jpg";
import j from "../../assets/imgs/7.jpeg";
import k from "../../assets/imgs/31.jpg";
import l from "../../assets/imgs/4.jpeg";
import Image from "next/image";

export const Gallery = () => {
  return (
    <div
      id="gallery"
      className="max-w-[85rem] px-4 py-6 sm:px-6 lg:px-8 lg:py-14 mx-auto"
    >
      <div className="mx-auto max-w-lg mb-20 text-center flex flex-col items-center">
        <h2
          className={`${oleo.className} text-3xl sm:text-5xl font-bold text-gray-800 dark:text-neutral-200`}
        >
          Our Love in Moments
        </h2>

        <p
          className={`${chilanka.className} mt-3 text-gray-600 dark:text-neutral-400`}
        >
          A glimpse into the journey of our love
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
              stroke="#E70B21"
            />
          </svg>
        </span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        <div className="space-y-2">
          <Image
            className="w-full h-auto object-cover"
            src={a}
            alt="Love Meeting"
            placeholder="blur" 
          />
          <Image
            className="w-full h-auto object-cover"
            src={b}
            alt="Love Meeting"
            placeholder="blur" 
          />
          <Image
            className="w-full h-auto object-cover"
            src={k}
            alt="Love Meeting"
            placeholder="blur" 
          />
        </div>
        <div className="space-y-2">
          <Image
            className="w-full h-auto object-cover"
            src={c}
            alt="Love Meeting"
            placeholder="blur" 
          />
          <Image
            className="w-full h-auto object-cover"
            src={e}
            alt="Love Meeting"
            placeholder="blur" 
          />
          <Image
            className="w-full h-auto object-cover"
            src={d}
            alt="Love Meeting"
            placeholder="blur" 
          />
        </div>
        <div className="space-y-2">
          <Image
            className="w-full h-auto object-cover"
            src={f}
            alt="Love Meeting"
            placeholder="blur" 
          />
          <Image
            className="w-full h-auto object-cover"
            src={g}
            alt="Love Meeting"
            placeholder="blur" 
          />
          <Image
            className="w-full h-auto object-cover"
            src={h}
            alt="Love Meeting"
            placeholder="blur" 
          />
        </div>
        <div className="space-y-2">
          <Image
            className="w-full h-auto object-cover"
            src={i}
            alt="Love Meeting"
            placeholder="blur" 
          />
          <Image
            className="w-full h-auto object-cover"
            src={j}
            alt="Love Meeting"
            placeholder="blur" 
          />
          <Image
            className="w-full h-auto object-cover"
            src={l}
            alt="Love Meeting"
            placeholder="blur" 
          />
        </div>
      </div>
    </div>
  );
};
