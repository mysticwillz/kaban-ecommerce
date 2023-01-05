import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsPhone, BsLaptop } from "react-icons/bs";
import { FaBaby, FaCameraRetro } from "react-icons/fa";
import { MdOutlineSportsBaseball } from "react-icons/md";
import { GiHealthPotion, GiClothes, GiRockingChair } from "react-icons/gi";
import { useAuthStatus } from "../hooks/useAuthStatus";
function Sidebar({ setShowMenu, showMenu }) {
  const { loggedIn } = useAuthStatus();
  console.log(loggedIn);
  return (
    <>
      <main
        className={
          !showMenu
            ? " overflow-x-hidden absolute left-0 top-0 h-screen w-screen bg-[#fff] transform translate-y-[-100%] transition all duration-500 ease-in text-white z-10 overflow-y-hidden  "
            : " overflow-x-hidden  absolute left-0 top-0 h-screen  w-screen bg-[#fff] transform translate-y-[0%] transition all duration-500 ease-in text-white z-10 overflow-y-hidden  "
        }
      >
        <div className="flex justify-end p-6 ">
          <AiOutlineClose
            className=" pr-[5px] text-[40px] text-[#1e6091] cursor-pointer "
            onClick={() => {
              setShowMenu(false);
            }}
          />
        </div>
        <div className="text-[#1f2d38] rounded pl-6 lg:flex pb-1  lg:flex-col justify-center  border-t    w-[100%]  bg-white  mr-[15px]">
          <div className=" flex items-center mb-4 text-[#1e6091] transition duration-250 ease-in  ">
            <p className=" text-[22px] uppercase   ">Account </p>
          </div>
          {loggedIn ? (
            <button className="w-[85px] h-[40px] text-center font-bold py-1 flex items-center justify-center hover:bg-[#1f2d38] transition duration-250 ease-in-out   capitalize   bg-[#1e6091] rounded-sm text-white">
              Log Out
            </button>
          ) : (
            <button className="w-[85px] h-[40px] text-center font-bold py-1 flex items-center justify-center hover:bg-[#1f2d38] transition duration-250 ease-in-out   capitalize   bg-[#1e6091] rounded-sm text-white">
              Login
            </button>
          )}
          <div className=" flex items-center my-2  hover:text-[#1e6091] transition duration-250 ease-in cursor-pointer ">
            <p className=" text-[16px] capitalize  ">My Account </p>
          </div>
          <div className=" flex items-center my-2  hover:text-[#1e6091] transition duration-250 ease-in cursor-pointer ">
            <p className=" text-[16px] capitalize  ">My orders </p>
          </div>
        </div>

        <div className="text-[#1f2d38] rounded pl-6 lg:flex  lg:flex-col justify-center  border-t    w-[100%]  bg-white  mr-[15px]">
          <div className=" flex items-center mb-4 text-[#1e6091] transition duration-250 ease-in  ">
            <p className=" text-[22px] uppercase   ">Categories</p>
          </div>
          <div className=" flex items-center my-2  hover:text-[#1e6091] transition duration-250 ease-in cursor-pointer ">
            <BsPhone className=" text-[25px] pr-2  " />
            <p className=" text-[16px] capitalize  ">Phones & Tablets</p>
          </div>
          <div className=" flex items-center  cursor-pointer my-2 hover:text-[#1e6091] transition duration-250 ease-in  ">
            <FaBaby className=" text-[25px] cursor-pointer  pr-2" />
            <p className=" text-[16px] capitalize  ">Baby & Kids</p>
          </div>
          <div className=" flex items-center cursor-pointer  my-2 hover:text-[#1e6091] transition duration-250 ease-in  ">
            <GiHealthPotion className=" text-[25px]  cursor-pointer pr-2" />
            <p className=" text-[16px] capitalize  ">health & beauty</p>
          </div>
          <div className=" flex items-center cursor-pointer my-2 hover:text-[#1e6091] transition duration-250 ease-in  ">
            <GiClothes className=" text-[25px]  cursor-pointer pr-2" />

            <p className=" text-[16px] capitalize  ">fashion, bags & clothes</p>
          </div>
          <div className="flex items-center cursor-pointer   my-2 hover:text-[#1e6091] transition duration-250 ease-in  ">
            <MdOutlineSportsBaseball className=" text-[25px] cursor-pointer  pr-2" />
            <p className=" text-[16px] capitalize  ">sporting goods</p>
          </div>
          <div className="flex items-center cursor-pointer  my-2 hover:text-[#1e6091] transition duration-250 ease-in  ">
            <BsLaptop className=" text-[25px] cursor-pointer  pr-2" />
            <p className=" text-[16px] capitalize  ">computing</p>
          </div>
          <div className=" flex items-center cursor-pointer  my-2 hover:text-[#1e6091] transition duration-250 ease-in  ">
            <FaCameraRetro className=" text-[25px] cursor-pointer  pr-2" />
            <p className=" text-[16px] capitalize  ">gaming & camera</p>
          </div>
          <div className="flex items-center my-2 cursor-pointer  hover:text-[#1e6091] transition duration-250 ease-in  ">
            <GiRockingChair className=" text-[25px] cursor-pointer  pr-2" />
            <p className=" text-[16px] capitalize  ">home & office</p>
          </div>
        </div>
      </main>
    </>
  );
}

export default Sidebar;
