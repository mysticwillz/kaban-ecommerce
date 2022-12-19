import React from "react";
import { BsSuitHeart, BsFillSuitHeartFill } from "react-icons/bs";
import TopSellingItemsData from "./shopData/TopSellingItems";
//  <BsSuitHeart className="text-red-600 text-[22px]" />
// text-[#1f2d38] text-[#1e6091]
function Products() {
  return (
    <>
      <main className="  grid grid-cols-5 gap-2 mx-auto   w-full max-w-7xl flex-wrap p-0  mt-[10px]">
        {TopSellingItemsData.map((product) => {
          const { id, img, price, name } = product;
          return (
            <section
              key={id}
              className="flex flex-col   w-[250px] h-[380px]  border hover:shadow- rounded  bg-white px-4 py-4 cursor-pointer  "
            >
              <div className="flex  justify-end items-center w-full  mb-2 ">
                <BsFillSuitHeartFill className="   text-red-400 text-[22px]" />
              </div>
              <div className="flex  justify-center items-center w-full h-[170px]   mb-2 ">
                <img src={img} alt="product " className=" w-full h-full" />
              </div>
              <t5 className="capitalize mb-2  text-[#1f2d38]">{name}</t5>
              <div className="flex  justify-between items-center w-full  mb-2  ">
                <h2 className=" text-[20px] font-bold text-[#1f2d38]">
                  $ {price}
                </h2>{" "}
                <strike className="text-[17px] text-[#767879db]">
                  $ {price / 5}
                </strike>
              </div>
              <p className="text-[12px] mb-2  text-[#1f2d38]">
                sold by
                <span className="text-[12px] ml-1 text-[#1e6091] ">
                  Willz Wonderland
                </span>
              </p>
              <button className="text-[18px] rounded border border-[#1e6091] text-[#1e6091] hover:text-white hover:bg-[#1e6091] transition-all duration-300 ease-in flex justify-center items-center h-[40px] w-full">
                Add to cart
              </button>
            </section>
          );
        })}
      </main>
    </>
  );
}

export default Products;
