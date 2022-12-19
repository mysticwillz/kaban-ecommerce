import React from "react";
import { BsSuitHeart, BsFillSuitHeartFill } from "react-icons/bs";
//  <BsSuitHeart className="text-red-600 text-[22px]" />
// text-[#1f2d38] text-[#1e6091]
function Products() {
  return (
    <>
      {" "}
      <main className="flex  justify-center  items-center w-full max-w-7xl  mt-[10px] ">
        <section className="flex flex-col   w-[250px] h-[380px]  border hover:shadow- rounded  bg-white px-2 py-4 cursor-pointer  ">
          <div className="flex  justify-end items-center w-full  mb-2 ">
            <BsFillSuitHeartFill className="   text-red-400 text-[22px]" />
          </div>
          <div className="flex  justify-center items-center w-full h-[170px]   mb-2 "></div>
          <t5 className="capitalize mb-2  p-0 ">
            polystar electronic dry led government{" "}
          </t5>
          <div className="flex  justify-between items-center w-full  mb-2  ">
            <h2 className=" text-[18px] font-bold">$ 500 </h2>{" "}
            <strike className="text-[14px] ">$ 200</strike>
          </div>
          <p className="text-[12px] mb-2  ">
            sold by <span className="text-[12px]  ">Willz wonderland</span>
          </p>
          <button className="text-[18px] rounded border border-[#1e6091] text-[#1e6091] hover:text-white hover:bg-[#1e6091] transition-all duration-300 ease-in flex justify-center items-center h-[40px] w-full">
            {" "}
            Add to cart{" "}
          </button>
        </section>
      </main>
    </>
  );
}

export default Products;
