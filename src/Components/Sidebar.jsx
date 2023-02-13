import React from "react";
import { AiOutlineClose } from "react-icons/ai";

import { useAuthStatus } from "../hooks/useAuthStatus";
import { categories } from "./Home/CategoriesData";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getAuth, signOut } from "firebase/auth";
function Sidebar({ setShowMenu, showMenu }) {
  const { loggedIn } = useAuthStatus();
  const navigate = useNavigate();
  const auth = getAuth();
  async function handleLogOut() {
    try {
      signOut(auth);

      navigate("/");
    } catch (error) {
      toast.error("could not log out");
    }
  }
  return (
    <>
      <main
        className={
          !showMenu
            ? " overflow-x-hidden absolute left-0 top-0 h-screen w-screen bg-[#fff] transform translate-y-[-100%] transition all duration-500 ease-in text-white z-10 overflow-hidden  "
            : " overflow-x-hidden  absolute left-0 top-0 h-screen  w-screen bg-[#fff] transform translate-y-[0%] transition all duration-500 ease-in text-white z-10 overflow-hidden  "
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
          <div
            onClick={() => {
              navigate("/profile");
            }}
            className=" flex items-center mb-4 text-[#1e6091] transition duration-250 ease-in  "
          >
            <p className=" text-[22px] uppercase   ">Account </p>
          </div>
          {loggedIn ? (
            <button
              onClick={handleLogOut}
              className="w-[85px] h-[40px] text-center font-bold py-1 flex items-center justify-center hover:bg-[#1f2d38] transition duration-250 ease-in-out   capitalize   bg-[#1e6091] rounded-sm text-white"
            >
              Log Out
            </button>
          ) : (
            <button
              onClick={() => {
                navigate("/login");
              }}
              className="w-[85px] h-[40px] text-center font-bold py-1 flex items-center justify-center hover:bg-[#1f2d38] transition duration-250 ease-in-out   capitalize   bg-[#1e6091] rounded-sm text-white"
            >
              Login
            </button>
          )}
          <div
            onClick={() => {
              navigate("/profile");
            }}
            className=" flex items-center my-2  hover:text-[#1e6091] transition duration-250 ease-in cursor-pointer "
          >
            <p className=" text-[16px] capitalize  ">My Account </p>
          </div>
          <div className=" flex items-center my-2  hover:text-[#1e6091] transition duration-250 ease-in cursor-pointer ">
            <p className=" text-[16px] capitalize  ">My orders </p>
          </div>

          {loggedIn && (
            <div
              onClick={() => {
                navigate("/create-listing");
              }}
              className=" flex items-center my-2  hover:text-[#1e6091] transition duration-250 ease-in cursor-pointer "
            >
              <p className=" text-[16px] capitalize  ">Create Listing </p>
            </div>
          )}
        </div>

        <div className="text-[#1f2d38] rounded pl-6 lg:flex  lg:flex-col justify-center  border-t    w-[100%]  bg-white  mr-[15px]">
          <div className=" flex items-center mb-4 text-[#1e6091] transition duration-250 ease-in  ">
            <p className=" text-[22px] uppercase   ">Categories</p>
          </div>
          {categories?.map((cat) => {
            const { category, id, icon } = cat;
            return (
              <>
                <div
                  key={id}
                  onClick={() => {
                    navigate(`/category/${category}`);
                  }}
                  className=" flex items-center my-2  hover:text-[#1e6091] transition duration-250 ease-in cursor-pointer "
                >
                  {icon}
                  <p className=" text-[16px] capitalize  "> {category} </p>
                </div>
              </>
            );
          })}
        </div>
      </main>
    </>
  );
}

export default Sidebar;
