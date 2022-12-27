import one from "../kabanhero/one.png";
import two from "../kabanhero/two.png";
import three from "../kabanhero/three.png";
import four from "../kabanhero/four.png";
import five from "../kabanhero/five.png";
import six from "../kabanhero/six.png";

import "swiper/css/bundle";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useState, useEffect } from "react";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import Products from "../Components/Products.jsx";

export default function Home() {
  const images = [
    { img: one, alt: "first hero", id: 1 },
    { img: two, alt: "second hero", id: 2 },
    { img: three, alt: "third hero", id: 3 },
    { img: four, alt: "fourth hero", id: 4 },
    { img: five, alt: "fifth hero", id: 5 },
    { img: six, alt: "sixth hero", id: 6 },
  ];

  return (
    <main>
      <section className="flex justify-center">
        <div className="max-w-7xl md:h-[60vh] flex md:mt-[15px] ">
          <div className=" rounded  items-start hidden lg:block w-[20%]  bg-black h-[60vh] mr-[15px]"></div>
          <div className=" w-full  h-[40vh] lg:w-[60%] md:h-[60vh] z-index-1 flex items-center justify-center mx-auto ">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper w-full h-[100%] z-index-1 "
            >
              {images.map((image) => {
                const { img, alt, id } = image;

                return (
                  <SwiperSlide
                    key={id}
                    className=" rounded-[10px] flex items-start justify-center h-[40vh] lg:h-[65vh] w-full mx-auto z-index-1"
                  >
                    <img
                      src={img}
                      alt={alt}
                      className=" object-contain lg:object-cover rounded-[10px]  h-full min-w-[500px] p-1 lg:p-0  mx-auto"
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>

          <div className=" rounded-[10px]  hidden ml-[15px] lg:block w-[20%] bg-white h-[60vh]  flex-col items-start">
            <div className="w-full h-[50%] rounded-t  bg-white"></div>
            <div className="w-full h-[50%] rounded-b bg-[red]"></div>
          </div>
        </div>
      </section>
      <Products />
    </main>
  );
}
