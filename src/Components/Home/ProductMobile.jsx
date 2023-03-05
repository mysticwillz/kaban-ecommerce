import React from "react";
import { Split } from "../../Molecules/splitterFunction";

export default function ProductMobile({
  handleNavigate,
  name,
  price,
  id,
  img,
  para,
}) {
  return (
    <section
      key={id}
      onClick={(e) => {
        handleNavigate(e, name, price, id, img, para);
      }}
      className="flex flex-col w-[112px] h-[200px] mb-2 mx-2 md:hidden border hover:shadow rounded  bg-white px-4 py-4 cursor-pointer "
    >
      <div className="flex  justify-center items-center w-full h-[137px]   mb-2 ">
        <img src={img[0]} alt="product " className=" w-full h-full" />
      </div>
      <h5 className="capitalize mb-1 text-[12px]  text-[#1f2d38]">
        {Split(name)}
      </h5>
      <div className="flex  justify-between items-center w-full  mb-2  ">
        <h2 className=" text-[12px] font-bold text-[#1f2d38]">$ {price}</h2>
        <strike className="text-[10px] text-[#767879db]">$ {price / 5}</strike>
      </div>
    </section>
  );
}
