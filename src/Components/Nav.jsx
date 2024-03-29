import React, { useState, useEffect } from "react";

import { FaUserAlt } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { GiShoppingCart } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import kaban from "../assets/kaban.png";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import HandleAccount from "./HandleAccount";
import { SearchMobile, SearchDesktop } from "./Search";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";

function Nav() {
  const [search, setSearch] = useState("");

  const [pageState, setPageState] = useState("login");
  const [showAccount, setShowAccount] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const authRefresh = useSelector((state) => state.auth.changed);

  const auth = getAuth();

  useEffect(
    () =>
      onAuthStateChanged(auth, (user) =>
        user
          ? setPageState(`Hi, ${auth.currentUser.displayName}`)
          : setPageState("login")
      ),
    [authRefresh]
  );
  const navigate = useNavigate();
  const handleChange = (e) => setSearch(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.length === 0) {
      return;
    } else {
      navigate(`/search/${search}`);
      setSearch("")
    }
  };

  const quantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <div className="w-full text-[#424b52] h-2xl bg-[#fff] shadow-lg sticky left-0 top-0 z-10">
      <nav className="max-w-7xl flex justify-between items-center mx-auto relative p-4">
        <div className=" flex items-center justify-center w-[90px] h-[70px] cursor-pointer m-0 p-0">
          <img
            src={kaban}
            alt="kaban logo"
            onClick={() => {
              navigate("/");
            }}
            className=" w-full h-full "
          />
        </div>

        <div className=" w-[60px] hidden md:block">
          <p
            onClick={() => {
              navigate("/create-listing");
            }}
            className=" text-[1rem] hidden md:block cursor-pointer  hover:text-[#1f2d38] text-[#1e6091] "
          >
            {" "}
            List a product{" "}
          </p>
        </div>

        <SearchDesktop
          search={search}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />

        <div
          onClick={() => {
            setShowAccount(!showAccount);
          }}
          className="relative hidden md:block "
        >
          <div className="flex justify-between items-center cursor-pointer m-[5px] hover:text-[#1f2d38] text-[#1e6091]  ">
            <FaUserAlt className=" pr-[5px] text-3xl" />
            <p className="md:hidden lg:block">{pageState}</p>
          </div>

          {showAccount && (
            <div className="hidden md:block">
              <HandleAccount />
            </div>
          )}
        </div>

        <div
          onClick={() => {
            navigate("/cart");
          }}
          className="flex cursor-pointer justify-center  items-center text-[#fff]  w-[150px] h-[40px] bg-[#1e6091] rounded "
        >
          <GiShoppingCart className=" pr-2 text-4xl" />
          <p className="pr-2 md:hidden lg:block">Cart</p>
          <div className="w-[30px] h-[30px] bg-white flex justify-center  items-center rounded ">
            <p className="text-red-500">{quantity}</p>{" "}
          </div>
        </div>
        <FiMenu
          className=" pr-[5px] text-4xl md:hidden cursor-pointer text-[#1e6091]"
          onClick={() => {
            setShowMenu(true);
          }}
        />
      </nav>
      <Sidebar setShowMenu={setShowMenu} showMenu={showMenu} />

      <SearchMobile
        search={search}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default Nav;
