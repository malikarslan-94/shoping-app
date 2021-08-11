import "tailwindcss/tailwind.css";
import "react-multi-carousel/lib/styles.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
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
              className="h-full w-screen"
              src="./heroSection.png"
              alt=""
            />
          </div>

        </main>

        <div className="h-96"><p className="text-white">Empty Div</p></div>
        <div className="h-48"><p className="text-white">Empty Div</p></div>
        <div class=" lg:pb-16 mb-12 lg:mb-16 mt-20">
          <div class="max-w-screen-xl mx-auto px-6 lg:px-8 xl:px-4 grid grid-cols-2 sm:grid-cols-3  xl:grid-cols-6 col-gap-6">
            <img
              class="w-4/12 p-1 self-end justify-self-center"
              src="./Rectangle (3).png"
              alt=""
            />
            <img
              class="w-4/12 p-1 self-end justify-self-center"
              src="./Rectangle (4).png" alt=""
            />
            <img
              class="w-4/12 p-1 self-end justify-self-center"
              src="./Rectangle (5).png" alt=""
            />
            <img
              class="w-4/12 p-1 self-end justify-self-center"
              src="./Rectangle (6).png" alt=""
            />
            <img
              class="w-4/12 p-1 self-end justify-self-center"
              src="./Rectangle (7).png" alt=""
            />
            <img
              class="w-4/12 p-1 self-end justify-self-center"
              src="./Rectangle (8).png" alt=""
            />
          </div>
        </div>

      </div>


      {/* <div class="lg:text-left md:px-20 px-5 bg-blue-100 pt-1 pb-20">
        <div className="max-w-7xl mx-auto">
          <h1 class="text-sm tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-3xl my-7">
            <span class=" text-4xl leading-8 font-bold tracking-tight text-gray-500 sm:text-4xl flex justify-center">
              Testimonials
            </span>
          </h1>
          <p class="mt-2 mb-4 text-xl leading-8 font-semibold tracking-tight text-gray-700 sm:text-xl flex justify-center  md:mx-48 text-center">
            We are very fortunate to have formed excellent partnerships with
            many of our clients. And we’ve formed more than just working
            relationships with them; we have formed true friendships. Here’s
            what they’re saying about us.
          </p>
          <Testimonial />
        </div>
      </div> */}
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
        <path
          fill="#DBEAFE"
          fill-opacity="1"
          d="M0,224L60,218.7C120,213,240,203,360,181.3C480,160,600,128,720,106.7C840,85,960,75,1080,69.3C1200,64,1320,64,1380,64L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg> */}
      <Footer />
    </div>
  );
};
export default Home;
