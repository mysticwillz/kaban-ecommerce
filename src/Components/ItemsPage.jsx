import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { TbBuildingStore } from "react-icons/tb";
import { MdOutlineLocalShipping } from "react-icons/md";

function ItemsPage() {
  return (
    <main className="max-w-7xl mx-auto ">
      <section className="flex items-center justify-between w-full  h-screen ">
        <div className="flex flex-col items-center justify-center w-[50%]   ">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmR4jkEpjxw8UNqthaL6bcKZTivc8444J5vA&usqp=CAU"
            alt="item description"
            className="w-[500px] h-[400px]"
          />
          <div className="flex  items-center justify-center ">
            <div className="flex  items-center justify-center w-[55px] h-[55px] border-[2px] border-red-500">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmR4jkEpjxw8UNqthaL6bcKZTivc8444J5vA&usqp=CAU"
                alt="item description"
                className="flex  w-[50px] h-[50px] "
              />
            </div>
            <div className="flex  items-center justify-center w-[55px] h-[55px] m-4 border-[2px] border-red-500">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmR4jkEpjxw8UNqthaL6bcKZTivc8444J5vA&usqp=CAU"
                alt="item description"
                className="flex  w-[50px] h-[50px] "
              />
            </div>
            <div className="flex  items-center justify-center w-[55px] h-[55px] border-[2px] border-red-500">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmR4jkEpjxw8UNqthaL6bcKZTivc8444J5vA&usqp=CAU"
                alt="item description"
                className="flex  w-[50px] h-[50px] "
              />
            </div>
          </div>
        </div>
        <article className=" w-[50%] h-full ">
          <t2 className="text-[38px] font-bold py-6 ">
            Oraimo Wireless Earbuds
          </t2>

          <div className="flex items-center  text-[18px] border-y w-full py-6 ">
            <t5 className=" text-[32px] ">$800</t5>
            <strike className="text-[17px] text-[#767879db] pl-6">$50</strike>
          </div>
          <div className="flex items-center py-6  ">
            <h4>Quantity:</h4>
            <div className="flex items-center border ml-6  ">
              <AiOutlineMinus className=" text-[18px] font-bold cursor-pointer " />
              <p className=" text-[18px] font-bold px-4  ">23</p>
              <AiOutlinePlus className=" text-[18px] font-bold cursor-pointer  " />
            </div>
          </div>
          <p className="text-[#767879db] ">Call us for bulk purchases:</p>
          <p className=" text-[18px] font-bold cursor-pointer border-b pb-6 ">
            Click here to show phone number
          </p>
          <button className="text-[18px] rounded my-6 border border-[#1e6091] bg-[#1e6091] text-white hover:bg-[#fff] hover:text-[#1e6091] transition-all duration-300 ease-in flex justify-center items-center h-[40px] w-full">
            Purchase Now
          </button>
          <div className="flex items-center ">
            <div className="flex items-center pr-6">
              <MdOutlineLocalShipping className=" text-[50px] pr-4 font-bold  text-[#1e6091] " />
              <p>Pickup & Pay on Collection Available</p>
            </div>
            <div className="flex items-center ">
              <TbBuildingStore className=" text-[50px] font-bold pr-4  text-[#1e6091]" />
              <p>Kaban Warehouse</p>
            </div>
          </div>
          <p className="text-[12px] mb-2  text-[#1f2d38]">
            sold by
            <span className="text-[12px] ml-1 text-red-500 pb-1 border-b-[2px] border-solid border-red-500  ">
              Willz Wonderland
            </span>
          </p>
        </article>
      </section>
    </main>
  );
}

export default ItemsPage;
