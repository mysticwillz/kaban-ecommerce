import React from "react";
import { AiOutlineClose } from "react-icons/ai";

function Sidebar({ setShowMenu, showMenu }) {
  return (
    <>
      <main
        className={
          !showMenu
            ? " absolute left-0 top-0 h-screen w-screen bg-[#1e6091] transform translate-y-[-100%] transition all duration-500 ease-in text-white z-index-800000000 overflow-y-hidden  "
            : " absolute left-0 top-0 h-full w-screen bg-[#1e6091] transform translate-y-[0%] transition all duration-500 ease-in text-white z-index-800000000 overflow-y-hidden  "
        }
      >
        <div className="w-full h-full">
          <AiOutlineClose
            className=" pr-[5px] text-4xl "
            onClick={() => {
              setShowMenu(false);
            }}
          />
        </div>
      </main>
    </>
  );
}

export default Sidebar;
