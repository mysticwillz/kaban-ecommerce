import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import HandleAccount from "./HandleAccount";
import { SearchMobile, SearchDesktop } from "./Search";

function Nav() {
  const [search, setSearch] = useState("");

  const [pageState, setPageState] = useState("login");
  const [showAccount, setShowAccount] = useState(false);

  const auth = getAuth();

  useEffect(
    () =>
      onAuthStateChanged(auth, (user) =>
        user
          ? setPageState(`Hi, ${auth.currentUser.displayName}`)
          : setPageState("login")
      ),
    []
  );

  const handleChange = (e) => setSearch(e.target.value);
  const handleSubmit = (e) => e.preventDefault();

  const navigate = useNavigate();

  return (
    <div className="w-full text-[#424b52] h-2xl bg-[#fff] shadow-lg ">
      <nav className="max-w-7xl flex justify-between items-center mx-auto p-4">
        <h1 className=" text-[2rem] md:text-[2.3rem]">Kaban</h1>

        <SearchDesktop
          search={search}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />

        <div
          onClick={() => {
            setShowAccount(!showAccount);
          }}
        >
          <div className="flex justify-between items-center cursor-pointer m-[5px] hover:text-[#1f2d38] text-[#1e6091]">
            <FaUserAlt className=" pr-[5px] text-3xl" />
            <p className="hidden md:block">{pageState}</p>
          </div>

          {showAccount && (
            <div>
              <HandleAccount />
            </div>
          )}
        </div>

        <div
          onClick={() => {
            navigate("/cart");
          }}
          className="flex cursor-pointer items-center hover:text-[#1f2d38] text-[#1e6091]"
        >
          <GiShoppingCart className=" pr-[5px] text-4xl" />
          <p className="hidden md:block">Cart</p>
        </div>
      </nav>

      <SearchMobile
        search={search}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default Nav;
