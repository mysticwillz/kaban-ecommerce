import React from "react";
import { BsCartCheck } from "react-icons/bs";
import logo from "../assets/logo.png";

import { useRef, useState } from "react";
import { useParams } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import allData from "./shopData/Data.jsx";

function ItemsPage() {
  const myId = useParams().id;

  const itemData = allData.filter((data) => {
    if (data.id === myId) {
      return true;
    }
  });
  return (
    <>
      {itemData.map((data) => {
        const {
          img,
          para: itemDescription,
          name,
          id,
          price,
          category,
          itemPictures: { sub1_img, sub2_img, sub3_img },
        } = data;

        console.log({ sub1_img, sub2_img, sub3_img });

        const youMayAlsoLike = allData
          .filter((x) => {
            if (x.category === category) {
              return true;
            }
          })
          .filter((x) => x.id !== myId);

        return (
          <main
            key={id}
            className="bg-white max-w-7xl mt-[15px] mx-auto h-[70%]"
          >
            <div className="flex justify-center">
              <img
                src={logo}
                alt="logo"
                className="w-[80px] md:w-[120px] my-[15px] "
              />
            </div>
            <div className=" flex items-center justify-center">
              <section className="w-[80%] flex justify-between items-center md:pr-2">
                <div className="flex flex-col w-[40%] ">
                  <img src={img} alt="item" className="w-full px-2 py-4" />

                  {{ sub1_img, sub2_img, sub3_img } && (
                    <div className="flex w-full flex-wrap">
                      <img
                        src={sub1_img}
                        alt="item"
                        className=" max-w-[50px] max-h-[70px]    cursor-pointer  hover:border border-light-800 mx-2 "
                      />

                      <img
                        src={sub2_img}
                        alt="item"
                        className=" max-w-[50px] max-h-[70px]    cursor-pointer  hover:border border-light-800 mx-2 "
                      />

                      <img
                        src={sub3_img}
                        alt="item"
                        className=" max-w-[50px] max-h-[70px]    cursor-pointer  hover:border border-light-800 mx-2 "
                      />
                    </div>
                  )}
                </div>

                <div className=" px-2 ">
                  <h1 className="font-medium md:text-[25px]">{name}</h1>
                  <div className="mt-[15px] ">
                    <div className="w-full flex justify-center items-center bg-[blue] rounded-t-sm">
                      <h2 className=" text-white text-[22px] py-2  uppercase">
                        shop in grand style
                      </h2>
                    </div>

                    <div className="border border-[blue] p-[4%]">
                      <p className="text-[25px] text-bolder">$ {price}</p>
                      <p className="text-[18px] font-bold  bolder">
                        $ <strike>{price / 2}</strike>
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="w-full
                  mt-[15px]
                  h-[40px]
                  rounded-sm
                   flex items-center justify-center cursor-pointer bg-[blue] text-white hover:bg-black transition duration-250 ease-in-out relative"
                  >
                    {" "}
                    <BsCartCheck className=" absolute left-[2%] text-[22px] " />{" "}
                    ADD TO CART
                  </button>
                </div>
              </section>
            </div>
            <section className="w-[60%] py-2 px-4">
              <div className=" w-full py-1 border-b border-current">
                <h1 className="text-center">PRODUCT DETAILS</h1>
              </div>
              <p>{itemDescription}</p>
            </section>
            <section key={id}>
              <div className=" w-full py-1 border-b border-current mb-15px[]">
                <h1 className="capitalize text-center">you may also like</h1>
              </div>

              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                slidesPerGroup={3}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                {" "}
                `$
                {youMayAlsoLike.map((x) => {
                  const { price, name, img, id } = x;
                  console.log(name);

                  return (
                    <SwiperSlide>
                      <div key={id}>
                        <img src={img} alt="item" />
                        <p>{name}</p>
                        <p>{price}</p>
                      </div>
                    </SwiperSlide>
                  );
                })}
                `
              </Swiper>
            </section>
          </main>
        );
      })}
    </>
  );
}

export default ItemsPage;