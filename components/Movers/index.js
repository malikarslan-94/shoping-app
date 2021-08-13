import React from "react";
import Carousel from "react-multi-carousel";

function Carousel2() {

  const array = [
    {
      img: './Rectangle (3).png',
    },
    {
      img: './Rectangle (4).png',
    },
    {
      img: './Rectangle (5).png',
    },
    {
      img: './Rectangle (3).png',
    },
    {
      img: './Rectangle (4).png',
    },
  ]

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
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
          <div class=" lg:pb-16 mb-12 lg:mb-16 mt-4">

            <div class=" flex flex-row  mx-auto ">
              <img
                // height="2rem"
                // width="2rem"
                class="inline-block w-full "
                src={item.img}
                alt=""
              />

            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
}

export default Carousel2;
