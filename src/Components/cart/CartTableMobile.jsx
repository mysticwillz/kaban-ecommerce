import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

function CartTableMobile({
  img,
  name,
  id,
  removeFromCart,
  addToCart,
  quantity,
  totalPrice,
  deleteFromCart,
}) {
  return (
    <section className=" md:hidden border-b">
      <div className="flex items-center mb-[10px]">
        <div className=" flex justify-around items-center w-[80px]  h-[80px] ">
          <img src={img} alt="item description" className="w-full h-full" />{" "}
        </div>
        <div className="pl-6">
          <h3>{name} </h3>
          <p className="text-[12px] mb-2  text-[#1f2d38]">
            sold by
            <span className="text-[12px] ml-1 text-[#1e6091] ">
              Willz Wonderland
            </span>
          </p>
        </div>
      </div>
      <div className="flex items-center mb-[10px]">
        <div>
          <p>Quantity:</p>
          <div className="flex items-center border  w-[120px] justify-center">
            <AiOutlineMinus
              onClick={() => {
                removeFromCart(id);
              }}
              className=" text-[18px] font-bold cursor-pointer "
            />
            <p className=" text-[18px] font-bold px-4  ">{quantity}</p>
            <AiOutlinePlus
              onClick={() => {
                addToCart(name, totalPrice, id);
              }}
              className=" text-[18px] font-bold cursor-pointer  "
            />
          </div>
        </div>
        <h3 className=" text-[22px] font-bold pl-6">$ {totalPrice}</h3>
      </div>

      <button
        onClick={() => {
          deleteFromCart(id);
        }}
        className=" mb-[10px] rounded hover:bg-red-500 bg-[#1e6091] cursor-pointer transition all duration-300 ease-in text-[16px] text-white w-[70px] h-[40px] flex justify-center items-center"
      >
        Delete
      </button>
    </section>
  );
}

export default CartTableMobile;
