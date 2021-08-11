import React from "react";
import Carousel from "react-multi-carousel";

function Testimonial() {

const array=[
  {
    img:'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    name:' Nick',
    detail:`Buying ready mix concrete is a nightmare and if you get the wrong kind, it is both expensive and time`
  },
  {
    img:'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    name:' Thomas',
    detail:`Buying ready mix concrete is a nightmare and if you get the wrong kind, it is both expensive and time`
  },
  {
    img:'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    name:' Kevin',
    detail:`Buying ready mix concrete is a nightmare and if you get the wrong kind, it is both expensive and time`
  },
  {
    img:'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    name:' Brad',
    detail:`Buying ready mix concrete is a nightmare and if you get the wrong kind, it is both expensive and time`
  },
  {
    img:'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    name:' Tom',
    detail:`Buying ready mix concrete is a nightmare and if you get the wrong kind, it is both expensive and time`
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
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
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


{array.map((item)=>(
  <div className=" md:px-5 md:py-7 pb-20 rounded-sm  w-full ">
  <div className="flex flex-col w-full ">
    <div class="font-sans w-full">
      <div class="rounded-3xl relative flex flex-col sm:justify-center items-center bg-gray-100 w-full ">
        <div class="relative sm:max-w-sm w-full">
          <div class="relative w-full rounded-3xl  md:px-6 md:py-4 bg-gray-100 shadow-md">
            <div className="bg-secondary  px-5 py-7 rounded-sm mx-5 ">
              <div className="flex flex-col ">
                <div className="flex flex-row pb-3">
                  <img
                    height="2rem"
                    width="2rem"
                    class="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                    src={item.img}
                    alt=""
                  />
                  <div className="pl-3 mb-4">
                    <h3 className="text-lightgrayText  text-lg">{item.name}</h3>
                  </div>
                </div>
                <p className="space-y-0 text-justify h-60 ">
                  <p className="text-4xl  font-extrabold font-serif leading-6">“</p>
                  {item.detail}
                </p>
                <p className="text-4xl  font-extrabold font-serif leading-6 flex justify-end mt-1">”</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
))}
      </Carousel>
    </>
  );
}

export default Testimonial;
