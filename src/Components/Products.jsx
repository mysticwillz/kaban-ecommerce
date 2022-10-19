import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";




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
import allData from "./shopData/Data";
import topSellingItemData from "./shopData/TopSellingItems";
import kabanUniversalWeekData from "./shopData/KabanUniversalWeek";
import ItemsPage from "./ItemsPage";





export default function App() {
  const [myShopData, setMyShopData ] = useState(allData)
  const [ topSelling, setTopSelling] = useState(topSellingItemData)
  const [ kabanWeek, setKabanWeek] = useState(kabanUniversalWeekData)
  const [showItemPage, setShowItemPage] = useState(false)

  return (
    <section className='max-w-7xl mx-auto '>
     
     <div className="flex flex-col justify-between mx-auto h-[250px] md:h-[300px] bg-white  mt-[10px] ">

     <div className="w-full bg-[#1e6091] rounded-t-sm">
       <h1 className="text-center text-white text-[20px] md:text-[30px]  capitalize"> top selling items </h1>
       </div>

       <div className=" h-[80%]" >
        
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
       
        {topSelling.map((data)=>{
          const {img, price, name,  id} = data

        

          return <SwiperSlide key={id} className="flex flex-col items-center  product-div shadow-light-50 "  >
            <div className="h-full">
            <img src={img} alt="top selling " className=" h-[65%]"/>
            <div className=" h-auto">
           <p className="text-bold] px-1">{name}</p>
            <p className=" text-[12px] md:text-[14px px-1">${price}</p>
            <strike className=" px-1 pb-1 text-[10px] md:text-[12px] text-warm-gray-400">${price * 2}</strike>
           </div>
            </div>
            </SwiperSlide>
        })}
          
        
      </Swiper>
      </div>
      </div>

     <div className="w-full flex flex-col h-[250px] md:h-[300px] bg-white mt-[10px]">
      
     <div className="w-full bg-[#1e6091] h-[20%] flex items-center justify-center rounded-t-sm">
       <h1 className="text-center text-[20px] md:text-[30px] text-white   capitalize">Kaban universal week</h1>
       </div>

      <div className="  flex h-[80%] justify-between">
        
      {kabanWeek.map((data)=>{
        const {img, price, name, para, id} = data
       
  
         
        return <Link to={`/item/${id}`}>
            <div
            key={id} className="  flex justify-center  items-center " >
            <div className=" product-div h-full shadow-sm">
            <img src={img} alt="kabanweek" className="w-[400px] h-[65%]"/>
              
            <div className=" h-auto mt-1
            ">
            <p className="text-bold] px-1">{name}</p>
              <p className=" text-[12px] md:text-[14px px-1">${price}</p>
              <strike className=" px-1 pb-1 text-[10px] md:text-[12px] text-warm-gray-400">${price * 2}</strike>

              
            </div>
              
            </div>
            
              </div>
            </Link>
             
           
           
       
        })}
      </div>

     </div>
     
      <div className="w-full flex flex-col  bg-white mt-[10px]">
      
      <div className="w-full bg-[#1e6691]  rounded-t-sm">
       <h1 className="text-center text-white text-[20px] md:text-[30px]   capitalize">top deals </h1>
       </div>
     

      <div className=" flex justify-between border-[1px]  h-[80%] border-light-800 border-solid">
        
      {topSelling.map((data)=>{
        const {img, price, name,  id} = data

        return <div key={id} className="  flex justify-center  items-center " >
        <div className=" product-div h-full shadow-sm">
         <img src={img} alt="top selling" className="w-[400px] h-[65%]"/>
          
         <div className=" mt-1 h-auto">
         <p className="text-bold] px-1">{name}</p>
          <p className=" text-[12px] md:text-[14px px-1">${price}</p>
          <strike className=" px-1 pb-1 text-[10px] md:text-[12px] text-warm-gray-400">${price * 2}</strike>
         </div>
          
         </div>
          </div>
        })}
      </div>
      </div>
    
      <div className="w-full flex flex-col bg-white  mt-[10px]">
      
       <div className="w-full bg-[#1e6091] rounded-t-sm">
       <h1 className="text-center text-white text-[20px] md:text-[30px]  capitalize">your favorite stores </h1>
       </div>
     

      <div className=" flex justify-between  ">
        
      {kabanWeek.map((data)=>{
           const {img,  id} = data

          return <div key={id} className=" flex justify-between text-white mb-[15px] items-center flex-wrap" >
           <div className=" product-div  shadow-light-50">
           <img src={img} alt="favorite stores" className="w-[400px] "/>
            
            
           </div>
            </div>
        })}
      </div>
      </div>
    </section>
  );
}