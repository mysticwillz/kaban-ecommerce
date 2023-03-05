import React from "react";

import { useState } from "react";
import { useSelector } from "react-redux";

import { handlePayment } from "../PaymentUsingComponents";

function Checkout() {
  const cartList = useSelector((state) => state.cart.itemsList);

  const amount = cartList
    .map((cart) => {
      const { totalPrice } = cart;
      return totalPrice;
    })
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  const [listData, setListData] = useState({
    email: "",

    address: "",
  });
  const { email, address } = listData;

  const handleChange = (e) => {
    setListData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    handlePayment(email, amount);
  };
  return (
    <main className=" max-w-7xl px-3 md:px-0 md text-white:h-screen ">
      <section className="flex items-center justify-center max-w-2xl my-9 mx-auto bg-[#6c757d] rounded ">
        <main className="max-w-[30rem] mx-auto mt-[10px]">
          <header className="flex items-center justify-center my-[10px] text-white">
            <h1 className="text-center text-[2.3rem] font-bold ">Payment</h1>
          </header>
          <form onSubmit={handleSubmit} className="flex flex-col mt-3  w-full">
            <div className="w-full   flex  flex-wrap md:flex-nowrap justify-between items-center  px-4 ">
              <div className="flex flex-col  w-full  items-start  r">
                <label htmlFor="name" className="font-bold pr-2 text-white ">
                  Delivery Address:
                </label>
                <input
                  type="text"
                  required
                  id="address"
                  onChange={handleChange}
                  value={address}
                  placeholder="Enter delivery address"
                  className="w-full rounded border-0 focus:border-[#1e6091] text-[20px] font-bold  letter-spacing  "
                />
              </div>
            </div>

            <div className="w-full mt-[10px]   flex  flex-wrap md:flex-nowrap justify-between items-center  px-4 ">
              <div className="flex flex-col  w-full  items-start  r">
                <label htmlFor="name" className="font-bold pr-2  text-white">
                  Email:
                </label>
                <input
                  type="text"
                  required
                  id="email"
                  onChange={handleChange}
                  value={email}
                  placeholder="name@email.com"
                  className="w-full rounded border-0 focus:border-[#1e6091] text-[20px] font-bold  letter-spacing "
                />
              </div>
            </div>
            <div className="w-full mt-[10px]   flex  flex-wrap md:flex-nowrap justify-between items-center  px-4 ">
              <div className="flex flex-col  w-full  items-start  r">
                <label htmlFor="name" className="font-bold pr-2 text-white">
                  Amount:
                </label>
                <input
                  type="text"
                  required
                  id="amount"
                  value={amount}
                  placeholder="Enter amount"
                  className="w-full rounded border-0 focus:border-[#1e6091] text-[20px] font-bold  letter-spacing "
                />
              </div>
            </div>

            <div className="flex items-center justify-center px-4 mt-[10px] mb-[70px]">
              <button
                type="submit"
                className="w-full rounded border-0 h-[40px] outline-0 hover:bg-[#424b52] transition all duration-150 ease-in-out bg-[#1e6091] text-white uppercase flex items-center justify-center"
              >
                Pay Now
              </button>
            </div>
          </form>
        </main>
      </section>
    </main>
  );
}

export default Checkout;
