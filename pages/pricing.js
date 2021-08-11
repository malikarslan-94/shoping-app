import "tailwindcss/tailwind.css";
import Footer from "../components/Footer";

import Header from "../components/Header";
import { useState } from "react";

function pricing() {
  const [pricingHeader, setPricingHeader] = useState(true);
  return (
    <div class="bg-white overflow-hidden max-w-full mx-auto">
      <Header pricingHeader={pricingHeader} />
      <main class=" max-w-full mx-auto relative flex flex-col md:pb-20 pb-5">
        <div
          class=" md:space container flex justify-around flex-wrap e-y-0 md:grid md:grid-cols-2 md:gap-x-8 max-w-full md:px-20 mx-auto md:pt-20"
          style={{ backgroundColor: "#f4f7fa" }}
        >
          <div class="justify-center">
            <h1 class="text-3xl tracking-tight font-semibold sm:text-5xl md:text-xl my-2 flex ">
              <p class="block xl:inline text-green-400 tracking-wide mx-auto md:mx-0 ">
                Flexible pricing
              </p>
            </h1>
            <h1 class="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-5xl my-2 flex text-center">
              <p class="block xl:inline text-black tracking-wide mx-auto md:mx-0">
                {" "}
                Options for Projects
              </p>
            </h1>
            <h1 class="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-5xl my-2 flex text-center">
              <p class="block xl:inline text-black tracking-wide mx-auto md:mx-0">
                of Any Size or Scale
              </p>
            </h1>

            <p class="mt-3 text-gray-500 sm:mt-5 text-lg max-w-xl mx-auto md:mt-5 md:text-xl lg:mx-0 px-5 md:px-0">
              Self-host our open-source platform on-premises for free, or scale
              up to our managed Enterprise solution, we have options to fit your
              project’s requirements.
            </p>

            <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start mx-4 md:mx-0">
              <div class="rounded-md shadow border-green-400 border-2">
                <a
                  href="/"
                  class="w-full flex items-center justify-center px-8 py-3 t text-base font-medium rounded-md text-white bg-blue-400 hover:bg-blue-500 md:py-4 md:text-lg md:px-10 border-white border-2"
                >
                  Have Question ?
                </a>
              </div>
            </div>
          </div>

          <div class=" lg:inset-y-0 lg:w-full right-0 pt-4 mx-4">
            <img
              style={{
                transform:
                  "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
              }}
              class=" w-full object-cover lg:h-6/6 md:h-96 lg:w-max h-auto"
              src="./undraw_online_payments_luau.svg"
              alt=""
            />
          </div>
        </div>
        <svg
          id="wave"
          style={{ transform: "rotate(180deg)" }}
          viewBox="0 0 1440 390"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
              <stop stop-color="rgba(239, 239, 239, 1)" offset="0%"></stop>
              <stop stop-color="rgba(45, 76, 114, 1)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            style={{ transform: "translate(0, 0px)", opacity: 1 }}
            fill="url(#sw-gradient-0)"
            d="M0,195L60,169C120,143,240,91,360,78C480,65,600,91,720,130C840,169,960,221,1080,240.5C1200,260,1320,247,1440,227.5C1560,208,1680,182,1800,182C1920,182,2040,208,2160,188.5C2280,169,2400,104,2520,71.5C2640,39,2760,39,2880,52C3000,65,3120,91,3240,136.5C3360,182,3480,247,3600,240.5C3720,234,3840,156,3960,110.5C4080,65,4200,52,4320,97.5C4440,143,4560,247,4680,247C4800,247,4920,143,5040,84.5C5160,26,5280,13,5400,6.5C5520,0,5640,0,5760,52C5880,104,6000,208,6120,260C6240,312,6360,312,6480,266.5C6600,221,6720,130,6840,110.5C6960,91,7080,143,7200,162.5C7320,182,7440,169,7560,169C7680,169,7800,182,7920,175.5C8040,169,8160,143,8280,143C8400,143,8520,169,8580,182L8640,195L8640,390L8580,390C8520,390,8400,390,8280,390C8160,390,8040,390,7920,390C7800,390,7680,390,7560,390C7440,390,7320,390,7200,390C7080,390,6960,390,6840,390C6720,390,6600,390,6480,390C6360,390,6240,390,6120,390C6000,390,5880,390,5760,390C5640,390,5520,390,5400,390C5280,390,5160,390,5040,390C4920,390,4800,390,4680,390C4560,390,4440,390,4320,390C4200,390,4080,390,3960,390C3840,390,3720,390,3600,390C3480,390,3360,390,3240,390C3120,390,3000,390,2880,390C2760,390,2640,390,2520,390C2400,390,2280,390,2160,390C2040,390,1920,390,1800,390C1680,390,1560,390,1440,390C1320,390,1200,390,1080,390C960,390,840,390,720,390C600,390,480,390,360,390C240,390,120,390,60,390L0,390Z"
          ></path>
          <defs>
            <linearGradient id="sw-gradient-1" x1="0" x2="0" y1="1" y2="0">
              <stop stop-color="rgba(244, 247, 250, 1)" offset="0%"></stop>
              <stop stop-color="rgba(239, 239, 239, 1)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            style={{ transform: "translate(0, 50px)" }}
            fill="url(#sw-gradient-1)"
            d="M0,156L60,130C120,104,240,52,360,78C480,104,600,208,720,240.5C840,273,960,234,1080,182C1200,130,1320,65,1440,39C1560,13,1680,26,1800,78C1920,130,2040,221,2160,221C2280,221,2400,130,2520,104C2640,78,2760,117,2880,169C3000,221,3120,286,3240,312C3360,338,3480,325,3600,266.5C3720,208,3840,104,3960,52C4080,0,4200,0,4320,6.5C4440,13,4560,26,4680,84.5C4800,143,4920,247,5040,292.5C5160,338,5280,325,5400,273C5520,221,5640,130,5760,136.5C5880,143,6000,247,6120,279.5C6240,312,6360,273,6480,253.5C6600,234,6720,234,6840,195C6960,156,7080,78,7200,78C7320,78,7440,156,7560,214.5C7680,273,7800,312,7920,318.5C8040,325,8160,299,8280,253.5C8400,208,8520,143,8580,110.5L8640,78L8640,390L8580,390C8520,390,8400,390,8280,390C8160,390,8040,390,7920,390C7800,390,7680,390,7560,390C7440,390,7320,390,7200,390C7080,390,6960,390,6840,390C6720,390,6600,390,6480,390C6360,390,6240,390,6120,390C6000,390,5880,390,5760,390C5640,390,5520,390,5400,390C5280,390,5160,390,5040,390C4920,390,4800,390,4680,390C4560,390,4440,390,4320,390C4200,390,4080,390,3960,390C3840,390,3720,390,3600,390C3480,390,3360,390,3240,390C3120,390,3000,390,2880,390C2760,390,2640,390,2520,390C2400,390,2280,390,2160,390C2040,390,1920,390,1800,390C1680,390,1560,390,1440,390C1320,390,1200,390,1080,390C960,390,840,390,720,390C600,390,480,390,360,390C240,390,120,390,60,390L0,390Z"
          ></path>
        </svg>

        <div class="container flex flex-wrap pt-4 pb-10 m-auto mt-6 md:mt-2 lg:px-12 xl:px-16">
          <div class="w-full px-0 lg:px-4">
            <h2 class="px-12 text-2xl font-bold text-center md:text-5xl text-gray-900 mb-10">
              Choose your plan
            </h2>
            <p class="px-5 md:py-1 text-lg text-center text-gray-900 md:text-2xl">
              It is a long established fact that a reader will be distracted by
              the readable
            </p>
            <p class="px-5 md:py-1 text-lg text-center text-gray-900 mb-10 md:text-2xl">
              content of a page when looking at its layout.
            </p>
            <div class="flex flex-wrap items-center justify-center md:gap-x-2 pt-0 mx-6 gap-y-5">
              <div class="w-full md:w-1/2 lg:w-1/4 plan-card">
                <label class="flex flex-col rounded-xl shadow-lg group relative cursor-pointer hover:shadow-2xl border-gray-900 border-2">
                  <div class="w-full px-4 py-6 rounded-t-lg card-section-1">
                    <h3 class="mx-auto text-base font-semibold text-center underline text-blue-400 ">
                      Standard
                    </h3>
                    <p class="text-5xl font-bold text-center  text-blue-400">
                      $25.<span class="text-3xl">95</span>
                    </p>
                    <p class="text-xs text-center uppercase  text-blue-400">
                      monthly
                    </p>
                  </div>
                  <div class="flex flex-col items-center justify-center w-full h-full pb-6  rounded-b-lg bg-blue-400">
                    <div className="flex flex-col items-center justify-center w-full h-full pb-3 gap-y-3">
                      <span className="inline-flex justify-between w-full px-4">
                        <svg
                          className="w-5 mx-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#60A5FA"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <p class="text-lg text-white">1 month</p>
                      </span>
                      <span className="inline-flex justify-between w-full px-4">
                        <svg
                          className="w-5 mx-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#60A5FA"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <p class="text-lg text-white">1 month</p>
                      </span>{" "}
                      <span className="inline-flex justify-between w-full px-4">
                        <svg
                          className="w-5 mx-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#60A5FA"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <p class="text-lg text-white">1 month</p>
                      </span>{" "}
                      <span className="inline-flex justify-between w-full px-4">
                        <svg
                          className="w-5 mx-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#60A5FA"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <p class="text-lg text-white">1 month</p>
                      </span>{" "}
                    </div>
                    <p class="text-xl text-white">1 month</p>
                    <button class="w-5/6 py-2 mt-5 font-semibold text-center uppercase bg-white border border-transparent rounded text-blue-400">
                      <a href="https://klinker.herokuapp.com/auth/register">
                        Get Started
                      </a>
                    </button>
                  </div>
                </label>
              </div>

              <div class="w-full md:w-1/2 lg:w-80 border-2 rounded-lg ">
                <label class="flex flex-col rounded-xl shadow-lg relative cursor-pointer hover:shadow-2xl border-gray-900 border-2">
                  <div class="w-full px-4 py-8 rounded-t-lg bg-blue-400">
                    <h3 class="mx-auto text-base font-semibold text-center underline text-white my-2">
                      Premium
                    </h3>
                    <p class="text-5xl font-bold text-center text-white my-2">
                      $21.<span class="text-3xl">95</span>
                    </p>
                    <p class="text-xs text-center uppercase text-white my-2">
                      monthly
                    </p>
                  </div>
                  <div class="flex flex-col items-center justify-center w-full h-full py-6 rounded-b-lg bg-white border-t-2 border-white">
                    <div className="flex flex-col items-center justify-center w-full h-full pb-3 gap-y-3">
                      <span className="inline-flex space-x-2 justify-between w-full px-5">
                        <svg
                          className="w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#60A5FA"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <p class="text-lg text-blue-400">1 month</p>
                      </span>
                      <span className="inline-flex space-x-2 justify-between w-full px-5">
                        <svg
                          className="w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#60A5FA"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <p class="text-lg text-blue-400">1 month</p>
                      </span>{" "}
                      <span className="inline-flex space-x-2 justify-between w-full px-5">
                        <svg
                          className="w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#60A5FA"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <p class="text-lg text-blue-400">1 month</p>
                      </span>{" "}
                      <span className="inline-flex space-x-2 justify-between w-full px-5">
                        <svg
                          className="w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#60A5FA"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <p class="text-lg text-blue-400">1 month</p>
                      </span>{" "}
                    </div>
                    <p class="text-xl text-blue-400">3 month</p>
                    <button class="w-5/6 py-2 my-2 mt-5 font-semibold text-center uppercase bg-blue-400 border border-transparent rounded text-white">
                      <a href="https://klinker.herokuapp.com/auth/register">
                        {" "}
                        Save 15%
                      </a>
                    </button>
                  </div>
                </label>
              </div>

              <div class="w-full md:w-1/2 lg:w-1/4 plan-card">
                <label class="flex flex-col rounded-xl shadow-lg group card-group relative hover:bg-jblue-secondary cursor-pointer hover:shadow-2xl border-gray-900 border-2">
                  <div class="w-full px-4 py-6 rounded-t-lg card-section-1 p-5">
                    <h3 class="mx-auto text-base font-semibold text-center underline text-blue-400 ">
                      Elite
                    </h3>
                    <p class="text-5xl font-bold text-center  text-blue-400">
                      $19.<span class="text-3xl">45</span>
                    </p>
                    <p class="text-xs text-center uppercase  text-blue-400">
                      monthly
                    </p>
                  </div>
                  <div class="flex flex-col items-center justify-center w-full h-full py-6 rounded-b-lg bg-blue-400">
                    <div className="flex flex-col items-center justify-center w-full h-full pb-3 gap-y-3">
                      <span className="inline-flex justify-between w-full px-5">
                        <svg
                          className="w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#60A5FA"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <p class="text-lg text-white">1 month</p>
                      </span>
                      <span className="inline-flex justify-between w-full px-5">
                        <svg
                          className="w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#60A5FA"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <p class="text-lg text-white">1 month</p>
                      </span>{" "}
                      <span className="inline-flex justify-between w-full px-5">
                        <svg
                          className="w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#60A5FA"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <p class="text-lg text-white">1 month</p>
                      </span>{" "}
                      <span className="inline-flex justify-between w-full px-5">
                        <svg
                          className="w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#60A5FA"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <p class="text-lg text-white">1 month</p>
                      </span>{" "}
                    </div>
                    <p class="text-xl text-white">6 month</p>
                    <button class="w-5/6 py-2 mt-5 font-semibold text-center uppercase bg-white border border-transparent rounded text-blue-500">
                      <a href="https://klinker.herokuapp.com/auth/register">
                        Save 25%
                      </a>
                    </button>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div class="md:px-20 shadow-sm py-10 px-5">
          <div class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10  mt-20">
            <div class="flex">
              <div class="space-y-10 md:space-y-0 md:grid  md:gap-x-5 md:gap-y-10  md:ml-10">
                <div>
                  <h1 class="text-3xl tracking-tight font-semibold sm:text-5xl md:text-xl  my-2">
                    <span class="block xl:inline text-green-400">
                      Additional Services{" "}
                    </span>
                  </h1>
                  <p class="text-3xl tracking-tight font-extrabold sm:text-5xl md:text-5xl">
                    We’re here to help{" "}
                  </p>
                  <p class="text-3xl tracking-tight font-extrabold sm:text-5xl md:text-5xl  my-2">
                    when you need it.{" "}
                  </p>
                </div>
                <div
                  className="flex
                "
                >
                  <div class="flex-shrink-0 ">
                    <div class="flex items-center justify-center h-12 w-12 rounded-md bg-blue-400 text-white">
                      <svg
                        class="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4">
                    <dt class="text-2xl leading-6 font-medium text-gray-900">
                      Monthly Support Retainers
                    </dt>
                    <dd class="mt-2 text-lg text-gray-500">
                      Secure premium support hours in advance so you're covered
                      when you need it.
                    </dd>
                  </div>
                </div>
                <div class="flex ">
                  <div class="flex-shrink-0">
                    <div class="flex items-center justify-center h-12 w-12 rounded-md bg-blue-400 text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="-8 -8 40 40"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4">
                    <dt class="text-2xl leading-6 font-medium text-gray-900">
                      Custom Development
                    </dt>
                    <dd class="mt-2 text-lg text-gray-500">
                      Expedite community features and fixes, or let us develop
                      your proprietary extensions.
                    </dd>
                  </div>
                </div>

                <div class="flex ">
                  <div class="flex-shrink-0">
                    <div class="flex items-center justify-center h-12 w-12 rounded-md bg-blue-400 text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="-8 -8 40 40"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4">
                    <dt class="text-2xl leading-6 font-medium text-gray-900">
                      Consulting & Training
                    </dt>
                    <dd class="mt-2 text-lg text-gray-500">
                      Get help architecting your data-model, schedule staff
                      training, or efficiently onboard your engineers.
                    </dd>
                  </div>
                </div>
              </div>
            </div>
            <div class=" lg:inset-y-0 lg:right-0 lg:w-full lg:h-full flex">
              <img
                class="w-full object-cover sm:h-72 md:h-auto lg:w-full lg:h-auto"
                src="./BIKE.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </main>
      <div class="relative bg-gray-300 pt-8 pb-6">
        <div
          class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style={{ height: "80px", transform: "translateZ(0px)" }}
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              class="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div class="container mx-auto px-4">
          <div class="flex flex-wrap">
            <div class="w-full lg:w-6/12 px-4">
              <h4 class="text-3xl font-semibold">Let's keep in touch!</h4>
              <h5 class="text-lg mt-0 mb-2 text-gray-700">
                Find us on any of these platforms, we respond 1-2 business days.
              </h5>
              <div class="mt-6">
                <button
                  class="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                  type="button"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                  </svg>
                </button>
                <button
                  class="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                  type="button"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                  </svg>
                </button>
                <button
                  class="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                  type="button"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M256 8C119.252 8 8 119.252 8 256s111.252 248 248 248 248-111.252 248-248S392.748 8 256 8zm163.97 114.366c29.503 36.046 47.369 81.957 47.835 131.955-6.984-1.477-77.018-15.682-147.502-6.818-5.752-14.041-11.181-26.393-18.617-41.614 78.321-31.977 113.818-77.482 118.284-83.523zM396.421 97.87c-3.81 5.427-35.697 48.286-111.021 76.519-34.712-63.776-73.185-116.168-79.04-124.008 67.176-16.193 137.966 1.27 190.061 47.489zm-230.48-33.25c5.585 7.659 43.438 60.116 78.537 122.509-99.087 26.313-186.36 25.934-195.834 25.809C62.38 147.205 106.678 92.573 165.941 64.62zM44.17 256.323c0-2.166.043-4.322.108-6.473 9.268.19 111.92 1.513 217.706-30.146 6.064 11.868 11.857 23.915 17.174 35.949-76.599 21.575-146.194 83.527-180.531 142.306C64.794 360.405 44.17 310.73 44.17 256.323zm81.807 167.113c22.127-45.233 82.178-103.622 167.579-132.756 29.74 77.283 42.039 142.053 45.189 160.638-68.112 29.013-150.015 21.053-212.768-27.882zm248.38 8.489c-2.171-12.886-13.446-74.897-41.152-151.033 66.38-10.626 124.7 6.768 131.947 9.055-9.442 58.941-43.273 109.844-90.795 141.978z" />
                  </svg>
                </button>
                <button
                  class="bg-white text-gray-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                  type="button"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                  </svg>
                </button>
              </div>
            </div>
            <div class="w-full lg:w-6/12 px-4 mt-6">
              <div class="flex  items-top mb-6 md:flex-row">
                <div class="w-full lg:w-4/12 px-4 ml-auto">
                  <span class="block uppercase text-gray-600 text-sm font-semibold mb-2">
                    Useful Links
                  </span>
                  <ul class="list-unstyled">
                    <li>
                      <a
                        class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="https://www.creative-tim.com/presentation"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="https://blog.creative-tim.com"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="https://www.github.com/creativetimofficial"
                      >
                        Github
                      </a>
                    </li>
                    <li>
                      <a
                        class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="https://www.creative-tim.com/bootstrap-themes/free"
                      >
                        Free Products
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="w-full lg:w-4/12 flex justify-end">
                  <div className="flex flex-col w-3/6 pl-12">
                    <span
                      class="
                  uppercase text-gray-600 text-sm font-semibold mb-2 flex"
                    >
                      Other Resources
                    </span>
                    <ul class="list-unstyled ">
                      <li>
                        <a
                          class="text-gray-700 hover:text-gray-900 font-semibold pb-2 text-sm text-left flex "
                          href="https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md"
                        >
                          MIT License
                        </a>
                      </li>
                      <li>
                        <a
                          class="text-gray-700 hover:text-gray-900 font-semibold flex  pb-2 text-sm"
                          href="https://creative-tim.com/terms"
                        >
                          Terms &amp; Conditions
                        </a>
                      </li>
                      <li>
                        <a
                          class="text-gray-700 hover:text-gray-900 font-semibold flex  pb-2 text-sm"
                          href="https://creative-tim.com/privacy"
                        >
                          Privacy Policy
                        </a>
                      </li>
                      <li>
                        <a
                          class="text-gray-700 hover:text-gray-900 font-semibold flex  pb-2 text-sm"
                          href="https://creative-tim.com/contact-us"
                        >
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr class="my-6 border-gray-400" />
          <div class="flex flex-wrap items-center md:justify-between justify-center">
            <div class="w-full md:w-4/12 px-4 mx-auto text-center">
              <div class="text-sm text-gray-600 font-semibold py-1">
                <p>Copyright © 2021 Firm Connect by</p>
                <p>Interstellus</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default pricing;
