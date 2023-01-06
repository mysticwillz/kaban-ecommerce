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
import { BsPhone, BsLaptop } from "react-icons/bs";
import { FaBaby, FaCameraRetro } from "react-icons/fa";
import { MdOutlineSportsBaseball } from "react-icons/md";
import { GiHealthPotion, GiClothes, GiRockingChair } from "react-icons/gi";
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
        <div className="max-w-7xl md:h-[60vh] flex justify-center items-center md:mt-[15px] ">
          <div className="text-[#1f2d38] rounded pl-6 md:flex border md:flex-col justify-center   hidden  w-[20%] bg-white h-[60vh] mr-[15px]">
            <div className=" flex items-center my-2  hover:text-[#1e6091] transition duration-250 ease-in cursor-pointer ">
              <BsPhone className=" text-[25px] pr-2  " />
              <p className=" text-[16px] capitalize  ">Phones & Tablets</p>
            </div>
            <div className=" flex items-center  cursor-pointer my-2 hover:text-[#1e6091] transition duration-250 ease-in  ">
              <FaBaby className=" text-[25px] cursor-pointer  pr-2" />
              <p className=" text-[16px] capitalize  ">Baby & Kids</p>
            </div>
            <div className=" flex items-center cursor-pointer  my-2 hover:text-[#1e6091] transition duration-250 ease-in  ">
              <GiHealthPotion className=" text-[25px]  cursor-pointer pr-2" />
              <p className=" text-[16px] capitalize  ">health & beauty</p>
            </div>
            <div className=" flex items-center cursor-pointer my-2 hover:text-[#1e6091] transition duration-250 ease-in  ">
              <GiClothes className=" text-[25px]  cursor-pointer pr-2" />

              <p className=" text-[16px] capitalize  ">
                fashion, bags & clothes
              </p>
            </div>
            <div className="flex items-center cursor-pointer   my-2 hover:text-[#1e6091] transition duration-250 ease-in  ">
              <MdOutlineSportsBaseball className=" text-[25px] cursor-pointer  pr-2" />
              <p className=" text-[16px] capitalize  ">sporting goods</p>
            </div>
            <div className="flex items-center cursor-pointer  my-2 hover:text-[#1e6091] transition duration-250 ease-in  ">
              <BsLaptop className=" text-[25px] cursor-pointer  pr-2" />
              <p className=" text-[16px] capitalize  ">computing</p>
            </div>
            <div className=" flex items-center cursor-pointer  my-2 hover:text-[#1e6091] transition duration-250 ease-in  ">
              <FaCameraRetro className=" text-[25px] cursor-pointer  pr-2" />
              <p className=" text-[16px] capitalize  ">gaming & camera</p>
            </div>
            <div className="flex items-center my-2 cursor-pointer  hover:text-[#1e6091] transition duration-250 ease-in  ">
              <GiRockingChair className=" text-[25px] cursor-pointer  pr-2" />
              <p className=" text-[16px] capitalize  ">home & office</p>
            </div>
          </div>
          <div className=" w-full  h-[40vh] lg:w-[60%] md:h-[60vh] z-index-1 flex items-center   ">
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

          <div className=" rounded-[10px]  hidden ml-[15px] xl:block w-[20%] bg-white h-[60vh]  flex-col items-start">
            <div className="w-full h-[50%] rounded-t  ">
              <img
                src={six}
                alt="sub hero"
                className=" rounded-t h-full w-full"
              />
            </div>
            <div className="w-full h-[50%] rounded-b ">
              {" "}
              <img
                src={three}
                alt="sub hero"
                className="rounded-b  h-full w-full"
              />
            </div>
          </div>
        </div>
      </section>
      <Products />
    </main>
  );
}
