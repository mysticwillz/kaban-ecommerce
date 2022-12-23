import React from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

function Cart() {
  return (
    <main className=" max-w-7xl mx-auto">
      <h1 className=" text-[38px] py-6 font-bold text-[#1f2d38]">
        Shopping Cart
      </h1>
      <div className=" mb-2 text-[18px] rounded border border-[#1e6091] text-[#1e6091] cursor-pointer  hover:text-white hover:bg-[#1e6091] transition-all duration-300 ease-in flex justify-between  px-2 items-center h-[40px] w-[200px] ">
        <BsFillArrowLeftCircleFill className="  w-[30px]" />{" "}
        <p> Continue Shopping</p>
      </div>
      <section className=" flex justify-between items-center w-full">
        <table className=" w-[900px] border ">
          <tbody>
            <tr className=" flex justify-between items-center h-[40px]  px-2 ">
              <th>Product Details</th>
              <th>Quantity</th>
              <th>Item Price</th>
              <th>Action</th>
            </tr>
          </tbody>
        </table>
        <table className="  w-[350px] border ">
          <tbody>
            <tr className=" flex justify-between items-center h-[40px] w-[350px] px-2">
              <th>Order Summary</th>
              <th>7 items</th>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
}

export default Cart;
