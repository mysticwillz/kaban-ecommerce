import React from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

function Cart() {
  return (
    <main className=" max-w-7xl mx-auto ">
      <h1 className=" text-[38px] py-6 font-bold text-[#1f2d38]">
        Shopping Cart
      </h1>
      <div className=" mb-2 text-[18px] rounded border border-[#1e6091] text-[#1e6091] cursor-pointer  hover:text-white hover:bg-[#1e6091] transition-all duration-300 ease-in flex justify-between  px-2 items-center h-[40px] w-[200px] ">
        <BsFillArrowLeftCircleFill className="  w-[30px]" />{" "}
        <p> Continue Shopping</p>
      </div>
      <section className=" flex justify-between items-start w-full mt-[50px]">
        <table className=" w-[900px]  ">
          <tbody className="  ">
            <tr className="bg-[#1e6091] text-white h-[40px] ">
              <th>Product Details</th>
              <th>Quantity</th>
              <th>Item Price</th>
              <th>Action</th>
            </tr>
            <tr className="bg-[#dfdada3a] border-b  my-2">
              <td className=" flex justify-between items-center w-[350px]   ">
                <div className=" flex justify-around items-center w-[80px]  h-[80px] ">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmR4jkEpjxw8UNqthaL6bcKZTivc8444J5vA&usqp=CAU"
                    alt="item description"
                    className="w-full h-full"
                  />
                </div>
                <div className=" flex flex-col justify-between  w-250px]   ">
                  <t3>kaba world wide variety of this week </t3>
                  <p className="text-[12px] mb-2  text-[#1f2d38]">
                    sold by
                    <span className="text-[12px] ml-1 text-[#1e6091] ">
                      Willz Wonderland
                    </span>
                  </p>
                </div>
              </td>
              <td>
                {" "}
                <div className="flex items-center border ml-6 px-1 w-[120px] justify-center">
                  <AiOutlineMinus className=" text-[18px] font-bold cursor-pointer " />
                  <p className=" text-[18px] font-bold px-4  ">23</p>
                  <AiOutlinePlus className=" text-[18px] font-bold cursor-pointer  " />
                </div>
              </td>
              <td className=" lg:pl-6">10,000</td>
              <td className=" lg:pl-6">Delete</td>
            </tr>

            <tr className=" bg-[#dfdada3a]  my-2">
              <td className=" flex justify-between items-center w-[350px]   ">
                <div className=" flex justify-around items-center w-[80px]  h-[80px] ">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmR4jkEpjxw8UNqthaL6bcKZTivc8444J5vA&usqp=CAU"
                    alt="item description"
                    className="w-full h-full"
                  />
                </div>
                <div className=" flex flex-col justify-between  w-250px]   ">
                  <t3>kaba world wide variety of this week </t3>
                  <p className="text-[12px] mb-2  text-[#1f2d38]">
                    sold by
                    <span className="text-[12px] ml-1 text-[#1e6091] ">
                      Willz Wonderland
                    </span>
                  </p>
                </div>
              </td>
              <td>
                {" "}
                <div className="flex items-center border ml-6 px-1 w-[120px] justify-center">
                  <AiOutlineMinus className=" text-[18px] font-bold cursor-pointer " />
                  <p className=" text-[18px] font-bold px-4  ">23</p>
                  <AiOutlinePlus className=" text-[18px] font-bold cursor-pointer  " />
                </div>
              </td>
              <td className=" lg:pl-6">10,000</td>
              <td className=" lg:pl-6">Delete</td>
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
