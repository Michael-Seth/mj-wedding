"use client";

import React, { useState } from "react";

const Gift = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const rowsPerPage = 3;

  const rows = [
    {
      id: 1,
      img: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/29/6870951/1.jpg?8117",
      description: "Amani 32''Inch Amani Smart Android TV",
      link: "https://www.jumia.com.ng/amani-32inch-amani-smart-android-tv-with-netflixyoutubegoogle-159078692.html",
    },
    {
      id: 2,
      img: "https://www-konga-com-res.cloudinary.com/w_500,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/A/Z/213840_1677495977.jpg",
      description: "Vitafoam Vita Corona Mattress - 6x4.5ftx10",
      link: "https://www.konga.com/product/vitafoam-mattress",
    },
    {
      id: 3,
      img: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/61/0647811/1.jpg?2936",
      description: "Dining Table With 2 Sitting Chairs",
      link: "https://www.jumia.com.ng/generic-beechwood-dining-table-with-2-sitting-top-leather-chairs-118746016.html",
    },
    {
      id: 4,
      img: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/23/837509/1.jpg?3388",
      description: "Non Stick Cooking Pots",
      link: "https://www.jumia.com.ng/non-stick-cooking-pots-big-size-generic-mpg3148215.html",
    },
    {
      id: 5,
      img: "https://www-konga-com-res.cloudinary.com/w_500,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/W/V/_1713798108.png",
      description: "Nexus Split Ac 1hp",
      link: "https://www.konga.com/product/nexus-nexus-split-ac-1hp-nx-mssh9000sc-r410-with-kit-5912221?cid=9759",
    },
    {
      id: 6,
      img: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/36/4931362/1.jpg?7389",
      description: "LG Glass Table Top Double Burner",
      link: "https://www.jumia.com.ng/lg-glass-thick-table-top-double-burner-with-auto-ignition-263139463.html",
    },
    {
      id: 7,
      img: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/09/3679273/1.jpg?9850",
      description: "Nordic Geometry Carpet for Living Room",
      link: "https://www.jumia.com.ng/generic-nordic-geometry-carpet-for-living-room-luxury-home-decorations-sofa-table-large-area-rugs-bedroom-bedside-anti-slip-floor-mat-372976390.html",
    },
    {
      id: 8,
      img: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/65/982254/1.jpg?9377",
      description: "Nunix Home Theatre Sounds System",
      link: "https://www.jumia.com.ng/nunix-home-theatre-sounds-system-3.1-nunix-45228956.html",
    },
    {
      id: 9,
      img: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/91/8695353/1.jpg?0308",
      description: "Skyrun 6kg Semi-Automatic Washing Machine",
      link: "https://www.jumia.com.ng/6kg-twin-tub-semi-automatic-washing-machine-wms-6hc-skyrun-mpg4310789.html",
    },
  ];

  const startIndex = currentPage * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const visibleRows = rows.slice(startIndex, endIndex);

  const handleNext = () => {
    if (endIndex < rows.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <div className=" w-full md:w-auto px-4 py-10 sm:py-0 sm:px-6 mx-auto">
        <div className="flex flex-col">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-neutral-900 dark:border-neutral-700">
                <div className="px-6 pt-4 pb-1 grid gap-3 md:flex md:justify-between md:items-center dark:border-neutral-700">
                  <span className="font-semibold text-sm">Address</span>
                  <span className="text-xs text-gray-600">
                    38 Damunde Estate, Lifecamp, Abuja.
                  </span>
                </div>
                <div className="px-6 pt-1 pb-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-neutral-700">
                  <span className="font-semibold text-sm">Phone</span>
                  <span className="text-xs text-gray-600">09133303018</span>
                </div>
                <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                  <thead className="bg-gray-50 dark:bg-neutral-800">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-start">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                            Gift
                          </span>
                        </div>
                      </th>

                      <th scope="col" className="px-6 py-3 text-start">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                            Description
                          </span>
                        </div>
                      </th>

                      <th scope="col" className="px-6 py-3 text-start">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                            Order Link
                          </span>
                        </div>
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                    {visibleRows.map((row) => (
                      <tr
                        key={row.id}
                        className="bg-white hover:bg-gray-50 dark:bg-neutral-900 dark:hover:bg-neutral-800"
                      >
                        <td className=" whitespace-nowrap w-64 align-top">
                          <div className="block p-2">
                            <div className="flex items-center gap-x-4 w-40">
                              <img
                                className="rounded"
                                src={row.img}
                                alt="Product Image"
                              />
                            </div>
                          </div>
                        </td>

                        <td className="h-px w-44 min-w-44 align-top">
                          <a className="block p-6" href="#">
                            <span className="block text-sm font-medium text-gray-800 dark:text-neutral-200">
                              {row.description}
                            </span>
                          </a>
                        </td>
                        <td className="size-px whitespace-nowrap align-top">
                          <a className="block p-6" href={row.link} target="_blank">
                            <button className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 transition-colors duration-200  dark:hover:bg-gray-800 border border-gray-400 rounded-md dark:text-gray-300 gap-x-2 hover:bg-amber-500 hover:font-semibold hover:border-none hover:text-white">
                              <svg
                                className="w-4 h-4"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g id="Interface / External_Link">
                                  <path
                                    id="Vector"
                                    d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </g>
                              </svg>

                              <span className="text-sm">Send Gift</span>
                            </button>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-neutral-700">
                  <div>
                    <div className="inline-flex gap-x-2">
                      <button
                        onClick={handlePrev}
                        disabled={startIndex === 0}
                        className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                      >
                        <svg
                          className="shrink-0 size-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m15 18-6-6 6-6" />
                        </svg>
                        Prev
                      </button>

                      <button
                        onClick={handleNext}
                        disabled={endIndex >= rows.length}
                        className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                      >
                        Next
                        <svg
                          className="shrink-0 size-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m9 18 6-6-6-6" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Gift;