import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { TbBuildingStore } from "react-icons/tb";
import { FaTwitter, FaWhatsapp, FaFacebook } from "react-icons/fa";
import { MdOutlineLocalShipping } from "react-icons/md";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

import { useNavigate, useParams } from "react-router-dom";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../Store/CartSlice";
import YouMayLike from "./Items/YouMayLike";
import Description from "./Items/Description";
import ImageSection from "./Items/ImageSection";

function ItemsPage() {
  const [showNum, setShowNum] = useState(false);
  const currentPageUrl = window.location.href;
  const navigate = useNavigate();
  const id = useParams().id;
  const cartList = useSelector((state) => state.cart.itemsList);
  const itemArray = cartList.find((item) => item.id === id);
  const youMayLike = cartList
    .filter((item) => item.id !== id)
    .filter((item) => item.category === itemArray.category);

  const dispatch = useDispatch();
  const addToCart = (name, price, id) => {
    dispatch(
      cartActions.addToCart({
        name,
        price,
        id,
      })
    );
  };
  const removeFromCart = (id) => {
    dispatch(cartActions.removeFromCart(id));
  };

  return (
    <main className="max-w-7xl mx-auto ">
      <div
        onClick={() => {
          navigate("/");
        }}
        className=" mb-2 text-[18px] rounded border border-[#1e6091] text-[#1e6091] cursor-pointer mt-10 hover:text-white hover:bg-[#1e6091] transition-all duration-300 ease-in flex justify-between  px-2 items-center h-[40px] w-[200px] "
      >
        <BsFillArrowLeftCircleFill className="  w-[30px]" />
        <p className=" whitespace-nowrap"> Continue Shopping</p>
      </div>
      <section className="flex items-center justify-between flex-col md:flex-row  w-full pt-4 md:h-screen">
        <ImageSection poster={itemArray.img} />
        <article className=" w-[50%] h-full ">
          <h2 className="text-[38px] font-bold py-6 ">{itemArray.name}</h2>

          <div className="flex items-center  text-[18px] border-y w-full py-6 ">
            <h5 className=" text-[32px] ">${itemArray.totalPrice}</h5>
            <strike className="text-[22px] text-[#767879db] pl-6">
              ${Math.round((itemArray.totalPrice / 5) * 6)}
            </strike>
          </div>
          <div className="flex items-center py-6  ">
            <h4>Quantity:</h4>
            <div className="flex items-center border ml-6 px-1  ">
              <AiOutlineMinus
                onClick={() => {
                  removeFromCart(id);
                }}
                className=" text-[18px] font-bold cursor-pointer "
              />
              <p className=" text-[18px] font-bold px-4  ">
                {itemArray.quantity}
              </p>
              <AiOutlinePlus
                onClick={() => {
                  addToCart(itemArray.name, itemArray.price, id);
                }}
                className=" text-[18px] font-bold cursor-pointer  "
              />
            </div>
          </div>
          <p className="text-[#767879db] ">Call us for bulk purchases:</p>
          <p
            onClick={() => {
              setShowNum(!showNum);
            }}
            className=" text-[18px] font-bold cursor-pointer border-b pb-6 "
          >
            {showNum ? `${itemArray.price}` : "Click here to show phone number"}
          </p>
          <button className="text-[18px] rounded my-6 border border-[#1e6091] bg-[#1e6091] text-white hover:bg-[#fff] hover:text-[#1e6091] transition-all duration-300 ease-in flex justify-center items-center h-[40px] w-full">
            Purchase Now
          </button>
          <div className="flex items-center ">
            <div className="flex items-center pr-6">
              <MdOutlineLocalShipping className=" text-[50px] pr-4 font-bold  text-[#1e6091] " />
              <p>Pickup & Pay on Collection Available</p>
            </div>
            <div className="flex items-center ">
              <TbBuildingStore className=" text-[50px] font-bold pr-4  text-[#1e6091]" />
              <p>Kaban Warehouse</p>
            </div>
          </div>
          <p className="text-[12px] mb-4  text-[#1f2d38]">
            sold by
            <span className="text-[12px] ml-1 text-red-500 pb-1 border-b-[2px] border-solid border-red-500  ">
              Willz Wonderland
            </span>
          </p>
          <p className=" text-[12px] ">Share With Friends</p>
          <div className="flex items-center ">
            <WhatsappShareButton url={currentPageUrl}>
              <FaWhatsapp className=" text-[30px]  text-[#5FFC7B] cursor-pointer" />
            </WhatsappShareButton>
            <TwitterShareButton url={currentPageUrl}>
              <FaTwitter className=" text-[60px]  px-4 cursor-pointer text-[#00acee]" />
            </TwitterShareButton>

            <FacebookShareButton url={currentPageUrl}>
              <FaFacebook className=" text-[30px] cursor-pointer   text-[#3759ca]" />
            </FacebookShareButton>
          </div>
        </article>
      </section>

      <YouMayLike youMayLike={youMayLike} />
      <Description description={itemArray.para} />
    </main>
  );
}

export default ItemsPage;
