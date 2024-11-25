import React from "react";
import { chilanka, oleo } from "../fonts";

export const BrideNGroom = () => {
  return (
    <div id="about" className="max-w-[85rem] mt-24 px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className={`${oleo.className} mx-auto max-w-lg mb-20 text-center flex flex-col items-center`}>
        <h2 className="text-3xl sm:text-5xl font-bold text-gray-800 dark:text-neutral-200">
          Meet the Couple
        </h2>

        <p className={`${chilanka.className} mt-3 text-gray-600 dark:text-neutral-400`}>
          Two creative minds, one beautiful love story
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
      <div className="grid md:grid-cols-2 items-center gap-5">
        <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
          <div
            className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1521903062400-b80f2cb8cb9d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80)",
            }}
          ></div>

          <div className="w-[90%] -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-full dark:bg-gray-800">
            <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
              Michael Osas
            </h3>

            <div className="flex flex-col  justify-center px-3 py-2 bg-gray-50 dark:bg-gray-700">
              <span
                className={`${chilanka.className} text-base my-4 text-gray-800 px-3 dark:text-gray-200`}
              >
                A passionate software engineer with a love for creating
                innovative solutions, he approaches life with the same precision
                and care as his code. Deeply in love, he’s excited to embark on
                this beautiful journey with his soulmate and best friend.
              </span>
              <div className="inline w-auto px-2 py-3 text-xs font-semibold text-white uppercase transition-colors duration-300 bg-gray-800 rounded">
                Groom
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
          <div
            className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1521903062400-b80f2cb8cb9d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80)",
            }}
          ></div>

          <div className="w-[90%] -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-full dark:bg-gray-800">
            <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
              Ehiedu Joy
            </h3>

            <div className="flex flex-col  justify-center px-3 py-2 bg-gray-50 dark:bg-gray-700">
              <span
                className={`${chilanka.className} text-base my-4 px-3 text-gray-800 dark:text-gray-200`}
              >
                A talented writer, mobile and UX engineer, she crafts intuitive
                designs and seamless experiences, just like the love she shares
                with her groom. Her heart is full as she steps into this new
                chapter with the love of her life.
              </span>
              <div className="inline w-auto px-2 py-3 text-xs font-semibold text-white uppercase transition-colors duration-300 bg-gray-800 rounded">
                Bride
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
