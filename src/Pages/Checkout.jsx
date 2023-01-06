import React from "react";

import { useState } from "react";

import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import Order from "../Components/checkout/Order";

function Checkout() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [listData, setListData] = useState({
    name: "",

    img: {},
    price: "",
    para: "",
    tel: "",
    storeName: "",
    category: "",
  });
  const { name, img, price, para, category, tel, storeName } = listData;

  const handleChange = (e) => {
    if (e.target.files) {
      setListData((prev) => ({
        ...prev,
        img: e.target.files,
      }));
    }
    if (!e.target.files) {
      setListData((prev) => ({
        ...prev,
        [e.target.id]: e.target.value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    if (category === "") {
      setLoading(false);
      toast.error("please select category");
      return;
    }
  };
  return (
    <main className=" max-w-7xl ">
      <section className="flex items-center justify-center max-w-4xl my-9 mx-auto bg-[#6c757d] rounded ">
        <main className="max-w-[30rem] mx-auto mt-[10px]">
          <header className="flex items-center justify-center my-[10px] text-white">
            <h1 className="text-center text-[2.3rem] font-bold ">Payment</h1>
          </header>
          <form onSubmit={handleSubmit} className="flex flex-col mt-3  w-full">
            <div className="w-full   flex  flex-wrap md:flex-nowrap justify-between items-center  px-4 ">
              <div className="flex flex-col  w-full  items-start  r">
                <label htmlFor="name" className="font-bold pr-2 ">
                  Delivery Address:
                </label>
                <input
                  type="text"
                  required
                  id="name"
                  onChange={handleChange}
                  value={name}
                  placeholder="Enter delivery address"
                  className="w-full rounded border-0 focus:border-[#1e6091] "
                />
              </div>
            </div>
            <div className="w-full mt-[10px]   flex  flex-wrap md:flex-nowrap justify-between items-center  px-4 ">
              <div className="flex flex-col  w-full  items-start  r">
                <label htmlFor="name" className="font-bold pr-2 ">
                  CardHolder's Name:
                </label>
                <input
                  type="text"
                  required
                  id="name"
                  onChange={handleChange}
                  value={name}
                  placeholder="Name on card"
                  className="w-full rounded border-0 focus:border-[#1e6091] "
                />
              </div>
            </div>
            <div className="w-full mt-[10px]   flex  flex-wrap md:flex-nowrap justify-between items-center  px-4 ">
              <div className="flex flex-col  w-full  items-start  r">
                <label htmlFor="name" className="font-bold pr-2 ">
                  Card Number:
                </label>
                <input
                  type="text"
                  required
                  id="name"
                  onChange={handleChange}
                  value={name}
                  placeholder="Enter card number"
                  className="w-full rounded border-0 focus:border-[#1e6091] text-[20px] font-bold  letter-spacing "
                />
              </div>
            </div>

            <div className="w-full   flex  md:flex-nowrap justify-between items-center mt-[10px]  px-4 ">
              <div className="flex flex-col  items-start w-[49%] ">
                <label htmlFor="name" className="font-bold pr-2 ">
                  Expiry Date:
                </label>
                <input
                  type="text"
                  required
                  id="storeName"
                  onChange={handleChange}
                  value={storeName}
                  placeholder="MM/YY"
                  className="w-full rounded border-0 focus:border-[#1e6091] "
                />
              </div>
              <div className="flex flex-col  items-start  w-[49%]  ">
                <label htmlFor="price" className="font-bold pr-2 ">
                  CVV:
                </label>
                <input
                  type="number"
                  id="tel"
                  required
                  min="0"
                  onChange={handleChange}
                  value={tel}
                  placeholder="Code"
                  className="w-full rounded border-0 focus:border-[#1e6091] "
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
        <Order />
      </section>
    </main>
  );
}

export default Checkout;
