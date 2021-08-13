// import React {useState} from "react";
import { useState, useRef } from "react";
import Link from "next/link";
import Testimonial from "../Carousel3/index";
import pricing from "./../../pages/pricing";
import { useSmoothScroll } from "use-smooth-scroll";

function Header({
  mainHeader,
  pricingHeader,
  scrollReff,
  benifits,
  keyFeature,
  KlinkerWork,
  mobileHeaderStatus,
}) {
  // const myRef = useRef(null);
  const [solutionDrop, setsolutionDrop] = useState(false);
  const [pricingDrop, setPricingDrop] = useState(false);
  const [menuState, setMenuState] = useState(false);
  // const [klinkerWork, setKlinkerWork] = useState("klinkerRef");

  // function scroolTo(num) {
  //   window.scrollTo(0, num);
  // }
  // const executeScroll = () => {
  //   myRef.current.scrollIntoView();
  //   console.log("function");
  // };
  return (
    <div class="relative py-1 font-sans" style={{ backgroundColor: "#ffffff" }}>
      <div class="w-full flex justify-center align-middle h-8" style={{ backgroundColor: "#f096c0" }}>
        <p>GET FREE SHIPPING ON ORDERS OVER $75</p>
      </div>
      <div class="w-full flex justify-end px-5 h-8" style={{ backgroundColor: "#faedec" }}>
        <p> Log in</p>
      </div>
      <div class="max-w-7xl  mx-auto">
        <div class="flex items-center py-6 md:justify-between">
          <div
            class="flex items-center  lg:flex-grow-0 
          transition duration-500 ease-in-out md:transform hover:-translate-y-1 hover:scale-105 md:w-3/12"
          >
            <div class="md:flex items-left justify-between w-full md:w-auto rounded-sm hidden">
              {/* <a href="#">
                <img class="h-44 w-44 sm:h-10 " src="./brand-logo.png" />
              </a> */}
            </div>
          </div>
          <nav
            class={
              "hidden md:flex space-x-1 lg:justify-center items-center  align-middle"
            }
            style={{ display: pricingHeader ? "none" : "" }}
          >
            <button
              onClick={() => scrollReff(KlinkerWork)}
              type="button"
              class="hover:text-blue-400 group px-5 py-1  rounded-md inline-flex items-center text-base font-light text-gray-900 focus:outline-none hover:bg-white transition duration-500 ease-in-out"
              aria-expanded="false"
            >
              <span>NEW ARRIVAL</span>
            </button>

            <button
              onClick={() => scrollReff(benifits)}
              type="button"
              class="hover:text-blue-400 group px-5 py-1 rounded-md inline-flex items-center text-base font-light text-gray-900 focus:outline-none hover:bg-white transition duration-500 ease-in-out"
              aria-expanded="false"
            >
              <span>APPAREL</span>
            </button>
            <button
              onClick={() => scrollReff(keyFeature)}
              type="button"
              class="hover:text-blue-400 group px-5 py-1 rounded-md inline-flex items-center text-base font-light text-gray-900 focus:outline-none hover:bg-white transition duration-500 ease-in-out bg-scroll"
              aria-expanded="false"
            >
              <span>PERSONALISED GIFTS</span>
            </button>
            <button
              onClick={() => scrollReff(keyFeature)}
              type="button"
              class="hover:text-blue-400 group px-5 py-1 rounded-md inline-flex items-center text-base font-light text-gray-900 focus:outline-none hover:bg-white transition duration-500 ease-in-out bg-scroll"
              aria-expanded="false"
            >
              <span>SALES</span>
            </button>
            <button
              onClick={() => scrollReff(keyFeature)}
              type="button"
              class="hover:text-blue-400 group px-5 py-1 rounded-md inline-flex items-center text-base font-light text-gray-900 focus:outline-none hover:bg-white transition duration-500 ease-in-out bg-scroll"
              aria-expanded="false"
            >
              <span>BEST SELLING</span>
            </button>
            <button
              onClick={() => scrollReff(keyFeature)}
              type="button"
              class="hover:text-blue-400 group px-5 py-1 rounded-md inline-flex items-center text-base font-light text-gray-900 focus:outline-none hover:bg-white transition duration-500 ease-in-out bg-scroll"
              aria-expanded="false"
            >
              <span>BLOG</span>
            </button>
          </nav>
          <div className="px-16 py-4 bg-transparent border-gray-500" style={{ borderWidth: 1 }}>

          </div>
        </div>
      </div>

    </div>
  );
}
export default Header;
