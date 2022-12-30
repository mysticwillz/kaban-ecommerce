import React from "react";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import TopSellingItemsData from "./shopData/TopSellingItems";
import { cartActions } from "../Store/CartSlice";

function Products() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleNavigate = (e, id) => {
    if (e.target.type === "button") {
      return;
    } else {
      navigate(`/item/${id}`);
    }
  };
  const addToCart = (name, price, id, img) => {
    dispatch(
      cartActions.addToCart({
        name,
        price,
        id,
        img,
      })
    );
  };

  return (
    <>
      <main className="  flex items-center  justify-center md:justify-between mx-auto   w-full max-w-7xl flex-wrap p-0  mt-[10px]">
        {TopSellingItemsData.map((product) => {
          const { id, img, price, name } = product;
          return (
            <section
              key={id}
              onClick={(e) => {
                handleNavigate(e, id);
              }}
              className="flex flex-col   w-[250px] h-[380px] mb-2 mx-2 lg:mx-0 border hover:shadow rounded  bg-white px-4 py-4 cursor-pointer  "
            >
              <div className="flex  justify-center items-center w-full h-[170px]   mb-2 ">
                <img src={img} alt="product " className=" w-full h-full" />
              </div>
              <t5 className="capitalize mb-2  text-[#1f2d38]">{name}</t5>
              <div className="flex  justify-between items-center w-full  mb-2  ">
                <h2 className=" text-[20px] font-bold text-[#1f2d38]">
                  $ {price}
                </h2>
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
              <button
                type="button"
                onClick={() => {
                  addToCart(name, price, id, img);
                }}
                className="text-[18px] rounded border border-[#1e6091] text-[#1e6091] hover:text-white hover:bg-[#1e6091] transition-all duration-300 ease-in flex justify-center items-center h-[40px] w-full"
              >
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
