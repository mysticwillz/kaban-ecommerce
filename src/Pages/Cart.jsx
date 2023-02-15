import React, { useContext } from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { FiTrash2 } from "react-icons/fi";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../Store/CartSlice";
import EmptyCart from "../Components/EmptyCart";
import CartTableMobile from "../Components/cart/CartTableMobile";
import { FetchContext } from "../Context/FetchContext";

function Cart() {
  const navigate = useNavigate();
  const cartList = useSelector((state) => state.cart.itemsList);
  const listings = useContext(FetchContext);

  let total = 0;
  cartList.forEach((item) => {
    total += item.totalPrice;
  });
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
  const deleteFromCart = (id) => {
    dispatch(cartActions.deleteFromCart(id));
  };

  return cartList.length === 0 ? (
    <EmptyCart />
  ) : (
    <main className=" max-w-7xl mx-auto px-2 md:px-0 overflow-x-hidden ">
      <h1 className=" text-[38px] py-6 font-bold text-[#1f2d38]">
        Shopping Cart
      </h1>
      <div
        onClick={() => {
          navigate("/");
        }}
        className=" mb-2 text-[18px] rounded border border-[#1e6091] text-[#1e6091] cursor-pointer  hover:text-white hover:bg-[#1e6091] transition-all duration-300 ease-in flex justify-between  px-2 items-center h-[40px] w-[200px] "
      >
        <BsFillArrowLeftCircleFill className="  w-[30px]" />
        <p> Continue Shopping</p>
      </div>
      <section className="  flex lg:justify-between lg:items-start flex-col mx-auto items-center justify-center lg:flex-row mb-[20px]  w-full mt-[50px]">
        {cartList?.map((cartItem) => {
          const { name, totalPrice, quantity, img, id } = cartItem;
          return (
            <CartTableMobile
              name={name}
              totalPrice={totalPrice}
              quantity={quantity}
              img={img}
              id={id}
              deleteFromCart={deleteFromCart}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          );
        })}
        <table className="hidden  md:inline-table w-[900px] ">
          <tbody className=" ">
            <tr className="bg-transparent text-[#1f2d38] h-[40px]">
              <th>Product Details</th>
              <th>Quantity</th>
              <th>Item Price</th>
              <th>Action</th>
            </tr>
            {cartList?.map((cartItem) => {
              const { name, totalPrice, quantity, img, id } = cartItem;

              return (
                <tr className="bg-[#dfdada3a] border-b  my-2">
                  <td
                    key={id}
                    className=" flex justify-between items-center w-[350px]   "
                  >
                    <div className=" flex justify-around items-center w-[80px]  h-[80px] ">
                      <img
                        src={img}
                        alt="item description"
                        className="w-full h-full"
                      />
                    </div>
                    <div className=" flex flex-col justify-between  w-250px]   ">
                      <h3>{name} </h3>
                      <p className="text-[12px] mb-2  text-[#1f2d38]">
                        sold by
                        <span className="text-[12px] ml-1 text-[#1e6091] ">
                          {
                            listings.find((item) => item.id === id).data
                              .storeName
                          }
                        </span>
                      </p>
                    </div>
                  </td>
                  <td>
                    {" "}
                    <div className="flex items-center border ml-6 px-1 w-[120px] justify-center">
                      <AiOutlineMinus
                        onClick={() => {
                          removeFromCart(id);
                        }}
                        className=" text-[18px] font-bold cursor-pointer "
                      />
                      <p className=" text-[18px] font-bold px-4  ">
                        {quantity}
                      </p>
                      <AiOutlinePlus
                        onClick={() => {
                          addToCart(name, totalPrice, id);
                        }}
                        className=" text-[18px] font-bold cursor-pointer  "
                      />
                    </div>
                  </td>
                  <td className=" lg:pl-6">$ {totalPrice}</td>
                  <td className=" lg:pl-8 ">
                    <FiTrash2
                      onClick={() => {
                        deleteFromCart(id);
                      }}
                      className=" hover:text-red-500 text-[#1e6091] cursor-pointer transition all duration-300 ease-in text-[22px]"
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="  w-[350px] border  flex-col  flex justify-start  items-center mt-[15px] lg:mt-[0px] mx-auto bg-[#fff] ">
          <table className="  w-[350px]  bg-[#1e6091] text-white ">
            <tbody>
              <tr className=" flex justify-between items-center h-[40px] px-2 ">
                <th>Order Summary</th>
                <th>7 items</th>
              </tr>
            </tbody>
          </table>
          <div className="   border-b flex justify-between items-start  w-[350px] p-2 ">
            <p>Delivery Charges:</p>
            <p className=" text-[11px] w-[120px]">
              Add your Delivery address at checkout to see delivery charges
            </p>
          </div>
          <div className="   border-b flex justify-between items-start  w-[350px] p-2 ">
            <p>Subtotal:</p>
            <p className=" ">${total}</p>
          </div>
          <div className="   border-b flex justify-between items-start  w-[350px] p-2 ">
            <h4 className=" text-[22px] font-bold">Total:</h4>
            <h4 className=" text-[22px] font-bold">${total}</h4>
          </div>
          <div className="    flex justify-end items-start  w-[350px] px-2 ">
            <p className=" text-[12px] text-end text-red-500 ">
              Excluding delivery charges
            </p>
          </div>
          <div className="    flex justify-center  items-center   w-[350px] px-2 ">
            <button
              onClick={() => {
                navigate("/checkout");
              }}
              className="text-[18px] rounded my-6 border border-[#1e6091] bg-[#1e6091] capitalize text-white hover:bg-[#fff] hover:text-[#1e6091] transition-all duration-300 ease-in flex justify-center items-center h-[40px] w-full"
            >
              continue to checkout
            </button>
          </div>
          <div className="    flex justify-between items-center w-[350px] px-2 ">
            <p className=" text-[12px] text-end text-red-500 ">We accept:</p>
            <div className="  w-[200px]  flex justify-between items-center   ">
              <img
                src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/assets/images/content/mastercard.png"
                alt="payment resource"
              />
              <img
                src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/assets/images/content/visacard.png"
                alt="payment resource"
              />
              <img
                src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/assets/images/content/vervecard.png"
                alt="payment resource"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Cart;
