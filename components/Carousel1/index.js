import React from "react";
import Carousel from "react-multi-carousel";

function Testimonial() {

  const array = [
    {
      heading: 'Would highly recommend',
      detail: `"I got several of The White Invites items for my bridesmaids and they were beautiful!! I put them in my bridesmaid proposal boxes and the girls loved them!! (I really regret not getting some of the items for myself!!) Great prices and shipped really quickly. Would highly recommend their shop!!"
    `
    },
    {
      heading: 'Would highly recommend',
      detail: `"I got several of The White Invites items for my bridesmaids and they were beautiful!! I put them in my bridesmaid proposal boxes and the girls loved them!! (I really regret not getting some of the items for myself!!) Great prices and shipped really quickly. Would highly recommend their shop!!"
    `
    },
    {
      heading: 'Would highly recommend',
      detail: `"I got several of The White Invites items for my bridesmaids and they were beautiful!! I put them in my bridesmaid proposal boxes and the girls loved them!! (I really regret not getting some of the items for myself!!) Great prices and shipped really quickly. Would highly recommend their shop!!"
    `
    },
    {
      heading: 'Would highly recommend',
      detail: `"I got several of The White Invites items for my bridesmaids and they were beautiful!! I put them in my bridesmaid proposal boxes and the girls loved them!! (I really regret not getting some of the items for myself!!) Great prices and shipped really quickly. Would highly recommend their shop!!"
    `
    },
    {
      heading: 'Would highly recommend',
      detail: `"I got several of The White Invites items for my bridesmaids and they were beautiful!! I put them in my bridesmaid proposal boxes and the girls loved them!! (I really regret not getting some of the items for myself!!) Great prices and shipped really quickly. Would highly recommend their shop!!"
    `
    },
  ]

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        keyBoardControl={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass=" py-10 "
      >


        {array.map((item) => (
          <div class="lg:text-left md:px-10 px-5 pt-1 pb-20 w-full">
            <div className="mx-auto">
              <h1 class="text-sm tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-3xl my-7">
                <span class=" text-4xl leading-8 font-light tracking-tight text-gray-500 sm:text-4xl flex justify-center">
                  {item.heading}
                </span>
              </h1>
              <p class="mt-12 mb-4 text-base leading-8 font-light tracking-tight text-gray-700 sm:text-xl flex justify-center  md:mx-16 text-center">
                {item.detail}
              </p>
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
}

export default Testimonial;
