import React from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function EmptySearch() {
  const navigate = useNavigate();
  return (
    <main className="flex justify-center items-center w-full h-[80vh]">
      <div className="flex justify-center flex-col items-center w-full h-full">
        <h5>Sorry! searched item could not be found </h5>
        <div
          onClick={() => {
            navigate("/");
          }}
          className=" mb-2 text-[18px] rounded hover:border hover:border-[#1e6091] bg-[#1e6091] hover:text-[#1e6091] cursor-pointer  text-white hover:bg-[#fff] transition-all duration-300 ease-in flex justify-between  px-2 items-center h-[40px] w-[200px] "
        >
          <BsFillArrowLeftCircleFill className="  w-[30px]" />
          <p> Continue Shopping</p>
        </div>
      </div>
    </main>
  );
}

export default EmptySearch;
