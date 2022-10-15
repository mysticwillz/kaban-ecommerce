import React, { useRef, useState } from "react";

import one from "../kabanhero/one.png"
import two from "../kabanhero/two.png"
import three from "../kabanhero/three.png"
import four from "../kabanhero/four.png"
import five from "../kabanhero/five.png"
import six from "../kabanhero/six.png"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/bundle";

// import required modules
import { Pagination, Navigation } from "swiper";
import shopData from "./Data.jsx"



export default function App() {
  console.log(shopData)

  const pictures = [{img:one,alt:"first hero",
id:1},
  {img:two,alt:"second hero",id:2},
  {img:three, alt:"third hero",id:3},
  {img:four,alt:"fourth hero",id:4},
  {img:five, alt:"fifth hero",id:5}
  ];

  const picture = [
    {img:one,alt:"first hero",id:1},
  {img:two,alt:"second hero",id:2}, 
  {img:six,alt:"sixth hero",id:6}];

  return (
    <section className="max-w-7xl mx-auto">
     
     <div className="flex flex-col justify-between mx-auto max-w-7xl bg-white  mt-[10px] ">

     <div className="w-full bg-black rounded-t-sm">
       <h1 className="text-center text-white text-[20px] md:text-[30px]  capitalize"> top selling items </h1>
       </div>

       <div >
        
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
       
        {pictures.map((image)=>{
          const {img, alt, id} = image

          return <SwiperSlide key={id}className="flex flex-col items-center  product-div shadow-light-50 "  >
            <div>
            <img src={img} alt={alt}/>
            <h1 className="text-bold ">title</h1>
            <p className="my-[5px]">$10.5</p>
        
            <strike className=" text-[12px] text-warm-gray-400">$21</strike>
            </div>
            </SwiperSlide>
        })}
          
        
      </Swiper>
      </div>
      </div>

     <div className="w-full flex flex-col  bg-white mt-[10px]">
      
     <div className="w-full bg-[#14b390a9] rounded-t-sm">
       <h1 className="text-center text-[20px] md:text-[30px] text-white capitalize">Kaban universal week</h1>
       </div>

      <div className=" flex justify-between">
        
      {picture.map((image)=>{
          const {img, alt, id} = image

          return <div key={id} className=" flex justify-center  items-center " >
          <div className=" product-div shadow-sm">
           <img src={img} alt={alt} className="w-[400px]"/>
            
            <h1 className="text-bold px-1">title</h1>
            <p className="my-[5px] px-1">$10.5</p>
            <strike className=" px-1 pb-1 text-[12px] text-warm-gray-400">$21</strike>
            
           </div>
            </div>
        })}
      </div>

     </div>
     
      <div className="w-full flex flex-col  bg-white mt-[10px]">
      
      <div className="w-full bg-[blue]  rounded-t-sm">
       <h1 className="text-center text-white text-[20px] md:text-[30px]   capitalize">top deals </h1>
       </div>
     

      <div className=" flex justify-between border-[1px] border-light-800 border-solid">
        
      {pictures.map((image)=>{
          const {img, alt, id} = image

          return <div key={id} className=" flex justify-center  items-center " >
          <div className=" product-div shadow-light-50">
           <img src={img} alt={alt} className="w-[200px]"/>
            <h1 className="text-bold ">title</h1>
            <p className="my-[5px]">$10.5</p>
            <strike className=" text-[12px] text-warm-gray-400">$21</strike>
           </div>
            </div>
        })}
      </div>
      </div>
    
      <div className="w-full flex flex-col bg-white  mt-[10px]">
      
       <div className="w-full bg-[#e71c1ca9] rounded-t-sm">
       <h1 className="text-center text-[20px] md:text-[30px]  capitalize">your favorite stores </h1>
       </div>
     

      <div className=" flex justify-between  ">
        
      {picture.map((image)=>{
          const {img, alt, id} = image

          return <div key={id} className=" flex justify-between mb-[15px] items-center flex-wrap" >
           <div className=" product-div  shadow-light-50">
           <img src={img} alt={alt} className="w-[400px] "/>
            
            
           </div>
            </div>
        })}
      </div>
      </div>
    </section>
  );
}