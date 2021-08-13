import "tailwindcss/tailwind.css";
import "react-multi-carousel/lib/styles.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Carousel3 from "../components/Carousel3"
import Movers from "../components/Movers"

import { useState, useRef } from "react";

const Home = () => {
  const KlinkerWork = useRef(null);
  const benifits = useRef(null);
  const keyFeature = useRef(null);
  const [mainHeader, setMainHeader] = useState("");
  const [signUpImage, setSignUpImage] = useState("");
  const [orderImage, setOrderImage] = useState(true);
  const [mobileheaderActive, setMobileheaderActive] = useState(false);

  const mobileHeaderStatus = () => {
    setMobileheaderActive(!mobileheaderActive);
  };
  const scrollRef = (id) => {
    console.log("value", id);
    id.current.scrollIntoView();
    console.log("function");
  };

  const changeImage = (value) => {
    console.log({ value });
    value === "signup"
      ? setSignUpImage("signup")
      : value === "order"
        ? setSignUpImage("order")
        : setSignUpImage("rest");
  };

  return (
    <div class="relative bg-white" style={{ scrollBehavior: "smooth" }}>
      <div class="max-w  flex-row">
        <Header
          mainHeader={mainHeader}
          scrollReff={scrollRef}
          KlinkerWork={KlinkerWork}
          benifits={benifits}
          keyFeature={keyFeature}
          mobileHeaderStatus={mobileHeaderStatus}
        />
        <main
          class={
            mobileheaderActive ? " max-w-full mt-52 md:mt-0" : " max-w-full"
          }
          style={{ backgroundColor: "#d9ecff" }}
        >
          <div class=" lg:inset-y-0 absolute">
            <img
              className="h-full w-screen z-10"
              src="./heroSection.png"
              alt=""
            />
            <div className=" absolute opacity-60 left-1/4 top-2/4 z-40" style={{ backgroundColor: "#594843", height: "30vh", width: "20vw" }}></div>
          </div>

        </main>

        <div className="h-96"><p className="text-white">Empty Div</p></div>
        <div className="h-48"><p className="text-white">Empty Div</p></div>
        <div class=" lg:pb-16 mb-12 lg:mb-16 mt-2">
          <div class="max-w-screen-xl px-36 gap-3 mx-auto lg:px-8 xl:px-4 grid grid-cols-2 sm:grid-cols-3  xl:grid-cols-6">
            <img
              class="w-full justify-self-center"
              src="./Rectangle (3).png"
              alt=""
            />
            <img
              class="w-full p-1 self-end justify-self-center"
              src="./Rectangle (4).png" alt=""
            />
            <img
              class="w-full p-1 self-end justify-self-center"
              src="./Rectangle (5).png" alt=""
            />
            <img
              class="w-full p-1 self-end justify-self-center"
              src="./Rectangle (3).png" alt=""
            />
            <img
              class="w-full p-1 self-end justify-self-center"
              src="./Rectangle (4).png" alt=""
            />
            <img
              class="w-full p-1 self-end justify-self-center"
              src="./Rectangle (5).png" alt=""
            />
          </div>
        </div>
        <div className="mt-2 max-w-4xl mx-auto ">
          <p className="text-center font-extralight font-mono" style={{ fontSize: "19px", color: "#454545" }}>Find everything you need for the bachelorette party, bridesmaid gifts and personalized gifts</p>
          <p className="text-center font-extralight font-mono mt-5" style={{ fontSize: "19px", color: "#454545" }}>We're an online boutique that specializes in pretty party goods for bachelorette parties & the most perfect bridesmaid gifts that your wedding party will love! From wine tumblers, to bachelorette party shirts and lace robes - we are your one stop shop for everything you need!</p>
        </div>
        {/* --------------------------------------------- */}
        <div className="mx-auto text-center mt-10"><p className="font-mono" style={{ fontSize: "19px", color: "#454545" }}>Customer Top Picks</p></div>

        <Movers />
        {/* ----------------------------------------------------- */}

        <div class=" lg:pb-16 mb-12 lg:mb-16 mt-20">
          <div class="max-w-screen-xl px-48 mx-auto lg:px-8 xl:px-4 grid grid-cols-2">
            <img
              class="w-full justify-self-center"
              src="./Rectangle (3).png"
              alt=""
            />
            <img
              class="w-full p-1 self-end justify-self-center"
              src="./Rectangle (4).png" alt=""
            />
            <img
              class="w-full p-1 self-end justify-self-center"
              src="./Rectangle (5).png" alt=""
            />
            <img
              class="w-full p-1 self-end justify-self-center"
              src="./Rectangle (6).png" alt=""
            />

          </div>
        </div>
        {/* ------------------------------------------------------- */}
        <div class=" lg:pb-16 mb-12 lg:mb-16 mt-20">
          <div class="max-w-screen-xl px-20 mx-auto lg:px-8 xl:px-4 grid grid-cols-2 sm:grid-cols-4  xl:grid-cols-6">
            <img
              class="w-full justify-self-center"
              src="./Rectangle (3).png"
              alt=""
            />
            <img
              class="w-full self-end justify-self-center"
              src="./Rectangle (4).png" alt=""
            />
            <img
              class="w-full self-end justify-self-center"
              src="./Rectangle (5).png" alt=""
            />
            <img
              class="w-full self-end justify-self-center"
              src="./Rectangle (3).png" alt=""
            />
            <img
              class="w-full self-end justify-self-center"
              src="./Rectangle (4).png" alt=""
            />
            <img
              class="w-full self-end justify-self-center"
              src="./Rectangle (5).png" alt=""
            />
            <img
              class="w-full justify-self-center"
              src="./Rectangle (3).png"
              alt=""
            />
            <img
              class="w-full self-end justify-self-center"
              src="./Rectangle (4).png" alt=""
            />

          </div>
        </div>


      </div>


      <div class="lg:text-left md:px-10 px-5 pt-1 pb-20">
        <div className="max-w-2xl mx-auto">

          <Carousel3 />
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default Home;
