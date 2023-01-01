import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { TbBuildingStore } from "react-icons/tb";
import { FaTwitter, FaWhatsapp, FaFacebook } from "react-icons/fa";
import { MdOutlineLocalShipping } from "react-icons/md";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

import TopSellingItemsData from "./shopData/TopSellingItems";

import { useNavigate, useParams } from "react-router-dom";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../Store/CartSlice";

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
        <BsFillArrowLeftCircleFill className="  w-[30px]" />{" "}
        <p> Continue Shopping</p>
      </div>
      <section className="flex items-center justify-between w-full pt-4 h-screen ">
        <div className="flex flex-col items-center justify-center w-[50%]   ">
          <img
            src={itemArray.img}
            alt="item description"
            className="w-[500px] h-[400px]"
          />
          <div className="flex  items-center justify-center ">
            <div className="flex  items-center justify-center w-[55px] h-[55px] border-[2px] border-red-500">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmR4jkEpjxw8UNqthaL6bcKZTivc8444J5vA&usqp=CAU"
                alt="item description"
                className="flex  w-[50px] h-[50px] "
              />
            </div>
            <div className="flex  items-center justify-center w-[55px] h-[55px] m-4 border-[2px] border-red-500">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmR4jkEpjxw8UNqthaL6bcKZTivc8444J5vA&usqp=CAU"
                alt="item description"
                className="flex  w-[50px] h-[50px] "
              />
            </div>
            <div className="flex  items-center justify-center w-[55px] h-[55px] border-[2px] border-red-500">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmR4jkEpjxw8UNqthaL6bcKZTivc8444J5vA&usqp=CAU"
                alt="item description"
                className="flex  w-[50px] h-[50px] "
              />
            </div>
          </div>
        </div>
        <article className=" w-[50%] h-full ">
          <t2 className="text-[38px] font-bold py-6 ">{itemArray.name}</t2>

          <div className="flex items-center  text-[18px] border-y w-full py-6 ">
            <t5 className=" text-[32px] ">${itemArray.totalPrice}</t5>
            <strike className="text-[22px] text-[#767879db] pl-6">
              ${(itemArray.totalPrice / 5) * 6}
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

      <section>
        <t2 className=" text-[30px] font-bold text-[#1e6091] ">Description</t2>
        <div className=" text-[18px] w-[600px] ">
          <p className=" text-[#767879db] text-[18px] w-[600px] mb-[10px]">
            {itemArray.para}
          </p>
        </div>
      </section>
      {youMayLike.length > 0 && (
        <t2 className=" text-[30px] font-bold text-[#1e6091]  ">
          Similar Products You May Like
        </t2>
      )}
      <section className="  flex items-center justify-between flex-wrap  mx-auto  w-full max-w-7xl    mt-[10px]">
        {youMayLike.map((product) => {
          const { id, img, price, name } = product;
          return (
            <div
              key={id}
              className="flex flex-col   w-[250px] h-[350px] mb-2 mx-2 lg:mx-0  border hover:shadow rounded  bg-white px-4 py-4 cursor-pointer  "
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
              <button className="text-[18px] rounded border border-[#1e6091] text-[#1e6091] hover:text-white hover:bg-[#1e6091] transition-all duration-300 ease-in flex justify-center items-center h-[40px] w-full">
                Add to cart
              </button>
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default ItemsPage;
