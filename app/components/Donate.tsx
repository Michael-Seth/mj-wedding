"use client";

import dynamic from "next/dynamic";
import React, { useState } from "react";
const FormBtn = dynamic(() => import("./FormButton"), { ssr: false });

const Donate = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState(0);

  const handleAmountChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const rawValue = event.target.value;
    // Remove "₦" symbol and commas, then convert to number
    const formattedAmount = Number(rawValue.replace(/[₦,]/g, ""));
    setAmount(formattedAmount);
  };

  return (
    <div className="relative">
      <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-10 dark:border-neutral-700">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-neutral-200">
          Send Your Love and Support
        </h2>

        <form>
          <div className="mt-6 grid gap-4 lg:gap-6">
            <div>
              <label
                htmlFor="hs-firstname-hire-us-1"
                className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
              >
                Full Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="hs-firstname-hire-us-1"
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-custom-pink focus:ring-custom-pink disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              />
            </div>
            <div>
              <label
                htmlFor="hs-work-email-hire-us-1"
                className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
              >
                Email <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                name="hs-work-email-hire-us-1"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-custom-pink focus:ring-custom-pink disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              <div>
                <label
                  htmlFor="hs-company-hire-us-1"
                  className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                >
                  Are you coming?
                </label>
                <select className="py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-custom-pink focus:ring-custom-pink disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                  <option defaultValue="">Select</option>
                  <option>Yes, I&apos;ll be there</option>
                  <option>No, I&apos;m sorry</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="hs-company-website-hire-us-1"
                  className="mb-2 text-sm text-gray-700 font-medium dark:text-white flex justify-between items-center"
                >
                  Send us your support <span className="text-red-600">*</span>
                  <span className="inline-flex items-center justify-center rounded-md bg-emerald-100 px-1 py-0.5 text-emerald-300">
                    <p className="whitespace-nowrap text-sm text-emerald-800 mr-2">
                      ₦
                    </p>

                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 2.5C1.46957 2.5 0.960859 2.71071 0.585786 3.08579C0.210714 3.46086 0 3.96957 0 4.5L0 13.5C0 14.0304 0.210714 14.5391 0.585786 14.9142C0.960859 15.2893 1.46957 15.5 2 15.5H6V2.5H2Z"
                        fill="#009A49"
                      />
                      <path d="M6 2.5H12V15.5H6V2.5Z" fill="#EEEEEE" />
                      <path
                        d="M16 2.5H12V15.5H16C16.5304 15.5 17.0391 15.2893 17.4142 14.9142C17.7893 14.5391 18 14.0304 18 13.5V4.5C18 3.96957 17.7893 3.46086 17.4142 3.08579C17.0391 2.71071 16.5304 2.5 16 2.5Z"
                        fill="#009A49"
                      />
                    </svg>
                  </span>
                </label>
                <select
                  id="amount"
                  onChange={handleAmountChange}
                  className="py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-custom-pink focus:ring-custom-pink disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                >
                  <option defaultValue="Select an amount">₦20,000</option>
                  <option>₦30,000</option>
                  <option>₦50,000</option>
                  <option>₦70,000</option>
                  <option>₦100,000</option>
                  <option>₦120,000</option>
                  <option>₦150,000</option>
                  <option>₦250,000</option>
                  <option>₦300,000</option>
                  <option>₦400,000</option>
                  <option>₦500,000</option>
                  <option>₦1,000,000</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="hs-about-hire-us-1"
                className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
              >
                Message
                <span className="text-gray-400 mx-2">&#40;optional&#41;</span>
              </label>
              <textarea
                id="hs-about-hire-us-1"
                name="hs-about-hire-us-1"
                rows={4}
                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-custom-pink focus:ring-custom-pink disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              ></textarea>
            </div>
          </div>
        </form>
        <div className="w-full text-slate-600 h-1 my-4 border border-b-1"></div>
        <div className="mt-3 flex">
          <div className="flex items-center justify-between text-gray-600 text-sm font-semibold w-full">
            <span>Ehiedu Joy </span>
            <span>UBA </span>
            <span>2266146117 </span>
          </div>
        </div>

        <div className="mt-6 grid">
          <FormBtn
            disabled={!amount || !fullName || !email}
            amount={amount}
            text="Send"
            email={email}
            fullName={fullName}
          />
        </div>

        <div className="mt-3 text-center">
          <p className="text-sm text-gray-500 dark:text-neutral-500">
            Thank you for being a part of our beautiful journey
          </p>
        </div>
      </div>
    </div>
  );
};

export default Donate;
