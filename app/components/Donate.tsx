import React from "react";

export const Donate = () => {
  return (
    <div className="relative">
      <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-10 dark:border-neutral-700">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-neutral-200">
          Fill in the form
        </h2>

        <form>
          <div className="mt-6 grid gap-4 lg:gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              <div>
                <label
                  htmlFor="hs-firstname-hire-us-1"
                  className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                >
                  First Name
                </label>
                <input
                  type="text"
                  name="hs-firstname-hire-us-1"
                  id="hs-firstname-hire-us-1"
                  className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                />
              </div>

              <div>
                <label
                  htmlFor="hs-lastname-hire-us-1"
                  className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  name="hs-lastname-hire-us-1"
                  id="hs-lastname-hire-us-1"
                  className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="hs-work-email-hire-us-1"
                className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
              >
                Work Email
              </label>
              <input
                type="email"
                name="hs-work-email-hire-us-1"
                id="hs-work-email-hire-us-1"
                autoComplete="email"
                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              <div>
                <label
                  htmlFor="hs-company-hire-us-1"
                  className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                >
                  Company
                </label>
                <input
                  type="text"
                  name="hs-company-hire-us-1"
                  id="hs-company-hire-us-1"
                  className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                />
              </div>

              <div>
                <label
                  htmlFor="hs-company-website-hire-us-1"
                  className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                >
                  Company Website
                </label>
                <input
                  type="text"
                  name="hs-company-website-hire-us-1"
                  id="hs-company-website-hire-us-1"
                  className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="hs-about-hire-us-1"
                className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
              >
                Details
              </label>
              <textarea
                id="hs-about-hire-us-1"
                name="hs-about-hire-us-1"
                rows={4}
                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              ></textarea>
            </div>
          </div>
        </form>
        <div className="mt-3 flex">
          <div className="flex">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="shrink-0 mt-1.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
            />
          </div>
          <div className="ms-3">
            <label
              htmlFor="remember-me"
              className="text-sm text-gray-600 dark:text-neutral-400"
            >
              By submitting this form I have read and acknowledged the{" "}
              <a
                className="text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500"
                href="#"
              >
                Privacy policy
              </a>
            </label>
          </div>
        </div>

        <div className="mt-6 grid">
          <button
            type="submit"
            className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
          >
            Send inquiry
          </button>
        </div>

        <div className="mt-3 text-center">
          <p className="text-sm text-gray-500 dark:text-neutral-500">
            We'll get back to you in 1-2 business days.
          </p>
        </div>
      </div>
    </div>
  );
};
