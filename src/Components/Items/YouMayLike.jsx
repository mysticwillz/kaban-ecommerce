import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Split } from "../../Molecules/splitterFunction";
import { cartActions } from "../../Store/CartSlice";
import ProductMobile from "../Home/ProductMobile";

function YouMayLike({ youMayLike, storeName }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNavigate = (e, name, price, id, img, para) => {
    if (e.target.type === "button") {
      return;
    } else {
      navigate(`/item/${id}`);
      dispatch(
        cartActions.addToCart({
          name,
          price,
          id,
          img,
          para,
        })
      );
    }
  };
  const addToCart = (name, price, id, img, para) => {
    dispatch(
      cartActions.addToCart({
        name,
        price,
        id,
        img,
        para,
      })
    );
  };
  return (
    <>
      {youMayLike.length > 0 && (
        <h2 className=" text-[30px] font-bold text-[#1e6091]  ">
          Similar Products You May Like
        </h2>
      )}
      <section className="  flex items-center justify-between flex-wrap  mx-auto  w-full max-w-7xl    mt-[10px]">
        {youMayLike.map((product) => {
          const { id, img, price, name, para } = product;
          return (
            <>
              {" "}
              <ProductMobile
                handleNavigate={handleNavigate}
                name={name}
                price={price}
                id={id}
                img={img}
                para={para}
              />
              <div
                key={id}
                onClick={(e) => {
                  handleNavigate(e, name, price, id, img, para);
                }}
                className="hidden md:flex flex-col  w-full  md:w-[250px]  mb-2 mx-2 lg:mx-0 border hover:shadow rounded  bg-white px-4 py-4 cursor-pointer  "
              >
                <div className="flex  justify-center items-center w-full h-[170px]   mb-2 ">
                  <img src={img} alt="product " className=" w-full h-full" />
                </div>
                <h5 className="capitalize mb-2  text-[#1f2d38]">
                  {Split(name)}
                </h5>
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
                    {storeName}
                  </span>
                </p>
                <button className="text-[18px] rounded border border-[#1e6091] text-[#1e6091] hover:text-white hover:bg-[#1e6091] transition-all duration-300 ease-in flex justify-center items-center h-[40px] w-full">
                  Add to cart
                </button>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
}

export default YouMayLike;
