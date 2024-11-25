import Image from "next/image";
import { chilanka, oleo } from "../fonts";
import Nysc from "../../assets/imgs/1.jpeg";
import Bond from "../../assets/imgs/6.jpeg";
import Proposal from "../../assets/imgs/33.jpeg";
import PreWedding from "../../assets/imgs/34.jpeg";


export const Story = () => {
  return (
    <div id="story" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-20">
        <div className="mx-auto max-w-lg text-center flex flex-col items-center">
          <h2
            className={`${oleo.className} text-3xl sm:text-5xl font-bold text-gray-800 dark:text-neutral-200`}
          >
            Our Love Story
          </h2>

          <p
            className={`${chilanka.className} mt-3 text-gray-600 dark:text-neutral-400`}
          >
            From a chance meeting to a lifetime commitment
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
        <div className="flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-16">
          <div className="w-full max-w-3xl mx-auto">
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-rose-400 before:to-transparent">
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-100 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.756 3.87159C13.626 4.25334 11.9978 6.80034 11.9978 6.80034C11.9978 6.80034 10.3628 4.25334 8.23875 3.87159C2.97975 2.93409 0.811505 7.61634 1.68976 11.1016C2.98726 16.2488 9.22951 20.8621 11.3153 22.2886C11.7278 22.5706 12.2678 22.5706 12.6878 22.2886C14.781 20.8621 21.0225 16.2488 22.3133 11.1016C23.1833 7.61634 21.0158 2.93409 15.756 3.87159Z"
                      fill="#F8312F"
                    />
                  </svg>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                  <div className="mb-6">
                    <Image
                      className="rounded"
                      src={Nysc}
                      width={400}
                      alt="NYSC Meeting"
                    />
                  </div>
                  <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-bold text-slate-900">
                      The Spark Ignites
                    </div>
                    <time className="font-caveat font-semibold text-red-500 space-x-2 text-xs">
                      28/07/2021
                    </time>
                  </div>
                  <p
                    className={`${chilanka.className} text-slate-600 mt-4 text-justify`}
                  >
                    We first met during our NYSC orientation camp. Among the sea
                    of white shirts and khaki, she stood out. It wasn&apos;t just her
                    radiant smile or the way she carried herself—it was
                    something deeper, an energy I couldn&apos;t ignore. We were
                    strangers at first, crossing paths during morning drills,
                    sitting near each other during lectures, and even sharing
                    casual conversations at the camp&apos;s mammy market. Slowly,
                    those small interactions grew into something more. By the
                    end of the camp, I knew she was someone special, and I
                    wanted to know her better.
                  </p>
                </div>
              </div>

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-100 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.756 3.87159C13.626 4.25334 11.9978 6.80034 11.9978 6.80034C11.9978 6.80034 10.3628 4.25334 8.23875 3.87159C2.97975 2.93409 0.811505 7.61634 1.68976 11.1016C2.98726 16.2488 9.22951 20.8621 11.3153 22.2886C11.7278 22.5706 12.2678 22.5706 12.6878 22.2886C14.781 20.8621 21.0225 16.2488 22.3133 11.1016C23.1833 7.61634 21.0158 2.93409 15.756 3.87159Z"
                      fill="#F8312F"
                    />
                  </svg>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                  <div className="mb-6">
                  <Image
                      className="rounded"
                      src={Bond}
                      width={400}
                      alt="Bond Building"
                    />
                  </div>
                  <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-bold text-slate-900">
                      Building The Bond
                    </div>
                    <time className="font-caveat font-semibold text-red-500 space-x-2 text-xs">
                      05/11/2021
                    </time>
                  </div>
                  <p
                    className={`${chilanka.className} text-slate-600 mt-4 text-justify`}
                  >
                    Two months after camp, while serving in our respective NYSC
                    PPA, we started dating. Our conversations became more
                    frequent, and our connection grew stronger with each passing
                    day. We spent our weekends exploring new places, sharing
                    ideas, and dreaming about the future. Despite the challenges
                    of service year, we became each other&apos;s biggest supporters.
                    She inspired me with her creativity and passion, and I like
                    to believe I did the same for her.
                  </p>
                </div>
              </div>

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-100 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.756 3.87159C13.626 4.25334 11.9978 6.80034 11.9978 6.80034C11.9978 6.80034 10.3628 4.25334 8.23875 3.87159C2.97975 2.93409 0.811505 7.61634 1.68976 11.1016C2.98726 16.2488 9.22951 20.8621 11.3153 22.2886C11.7278 22.5706 12.2678 22.5706 12.6878 22.2886C14.781 20.8621 21.0225 16.2488 22.3133 11.1016C23.1833 7.61634 21.0158 2.93409 15.756 3.87159Z"
                      fill="#F8312F"
                    />
                  </svg>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                  <div className="mb-6">
                  <Image
                      className="rounded"
                      src={Proposal}
                      width={400}
                      alt="Proposal Meeting"
                    />
                  </div>
                  <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-bold text-slate-900">The Proposal</div>
                    <time className="font-caveat font-semibold text-red-500 space-x-2 text-xs">
                      15/04/2024
                    </time>
                  </div>
                  <p
                    className={`${chilanka.className} text-slate-600 mt-4 text-justify`}
                  >
                    As the months turned into years, it became clear that this
                    wasn&apos;t just a passing romance. She wasn&apos;t just my
                    girlfriend—she was my partner, my best friend, and my home.
                    One evening, under the glow of soft lights, I asked her to
                    be my wife. Her eyes filled with happy tears, and when she
                    said “Yes,” it felt like the world had stopped just for us.
                    That moment marked the start of a new chapter in our story
                  </p>
                </div>
              </div>

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-100 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.756 3.87159C13.626 4.25334 11.9978 6.80034 11.9978 6.80034C11.9978 6.80034 10.3628 4.25334 8.23875 3.87159C2.97975 2.93409 0.811505 7.61634 1.68976 11.1016C2.98726 16.2488 9.22951 20.8621 11.3153 22.2886C11.7278 22.5706 12.2678 22.5706 12.6878 22.2886C14.781 20.8621 21.0225 16.2488 22.3133 11.1016C23.1833 7.61634 21.0158 2.93409 15.756 3.87159Z"
                      fill="#F8312F"
                    />
                  </svg>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                  <div className="mb-6">
                  <Image
                      className="rounded"
                      src={PreWedding}
                      width={400}
                      alt="Pre Wedding Photo"
                    />
                  </div>
                  <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-bold text-slate-900">
                      A Forever Journey
                    </div>
                    <time className="font-caveat font-semibold text-red-500 space-x-2 text-xs">
                      15/12/2024
                    </time>
                  </div>
                  <p
                    className={`${chilanka.className} text-slate-600 mt-4 text-justify`}
                  >
                    Now, we are preparing for the biggest day of our lives—our
                    wedding day. It&apos;s a celebration of everything we&apos;ve shared
                    and the future we&apos;re building together. From meeting as
                    strangers in camp to becoming partners for life, this
                    journey has been nothing short of magical. We can&apos;t wait to
                    continue this adventure, hand in hand, and create a lifetime
                    of beautiful memories together.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
