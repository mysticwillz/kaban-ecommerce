import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

export const SearchDesktop = function ({ handleSubmit, handleChange, search }) {
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="relative  items-center hidden md:flex"
      >
        <AiOutlineSearch className="absolute left-0 text-[1.3rem] font-bold ml-[5px] " />
        <input
          onChange={handleChange}
          type="search"
          value={search}
          id="search"
          placeholder="Search for products"
          className=" rounded text-sm border-sm border-[#5b7e99] md:w-[400px]  lg:w-[600px] pl-[2rem] focus:border-[#1e6091]"
        />
        <button className=" shadow ml-[10px] uppercase mx-auto  md:w-[9rem] py-[10px] px-[15px] bg-[#1e6091] text-white rounded h-[40px] flex items-center justify-center cursor-pointer transition duration-150 ease-in-out hover:bg-[#1f2d38]">
          {" "}
          search{" "}
        </button>
      </form>
    </>
  );
};
export const SearchMobile = function ({ handleSubmit, handleChange, search }) {
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="relative flex items-center max-w-7xl px-4 md:hidden pb-4"
      >
        <input
          onChange={handleChange}
          type="search"
          value={search}
          id="search"
          placeholder="Search for products"
          className=" rounded-l-full  text-sm  border border-[#5b7e99] w-full  h-[40px] focus:border-[#1e6091]  "
        />
        <button className="rounded-r-full    border-[#1e6091] bg-[#1e6091] w-[70px] h-[40px] flex items-center justify-center  transition duration-150 ease-in-out ">
          <AiOutlineSearch className=" text-[1.3rem] font-bold  text-white " />
        </button>
      </form>
    </>
  );
};
