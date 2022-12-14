import React, { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineClose } from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";
import { GiMilkCarton } from "react-icons/gi";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";

function HandleAccount() {
  const [account, setAccount] = useState(false);
  const auth = getAuth();

  {
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setAccount(true);
        }
      });
    }, []);
  }

  const navigate = useNavigate();

  async function handleLogOut() {
    try {
      signOut(auth);

      navigate("/");
    } catch (error) {
      toast.error("could not log out");
    }
  }

  function IsLoggedOut() {
    return (
      <div className="w-[200px] h-[250px] bg-[white] shadow-2xl px-2 py-4  rounded-lg flex flex-col items-center  ">
        <AiOutlineClose className="text-[2.5rem] pb-3 text-[#1e6091] cursor-pointer hover:text-[#424b52] transition-all duration-250" />
        <button
          onClick={() => {
            navigate("/login");
          }}
          className="w-[85px] h-[40px] text-center font-bold py-1 flex items-center justify-center hover:bg-[#424b52] transition duration-250 ease-in-out   capitalize   bg-[#1e6091] rounded-sm text-white"
        >
          Login
        </button>

        <ul className=" mt-[30px] border-t-[1px] border-[#1e6091] pt-[10px] cursor-pointer ">
          <li
            onClick={() => {
              navigate("/profile");
            }}
            className=" hover:text-[#424b52] transition duration-250 ease-in-out  flex text-[#1e6091] items-center "
          >
            {" "}
            <AiFillHeart className="pr-1 text-[1.4rem]" /> My Account
          </li>
          <li
            onClick={() => {
              navigate("/orders");
            }}
            className=" hover:text-[#424b52] transition duration-250 ease-in-out flex text-[#1e6091] items-center py-3"
          >
            <GiMilkCarton className="pr-1 text-[1.4rem]" /> Orders
          </li>
        </ul>
      </div>
    );
  }

  function IsLoggedIn() {
    return (
      <div className="w-[200px] h-[250px] bg-[white] shadow-2xl  px-2 py-4  rounded-lg flex flex-col items-center    ">
        <AiOutlineClose className="text-[2.5rem] pb-3 text-[#1e6091] cursor-pointer hover:text-[#424b52] transition-all duration-250" />

        <ul className=" mb-[30px] border-b-[1px] border-[#1e6091] pb-[10px] cursor-pointer ">
          <li
            onClick={() => {
              navigate("/profile");
            }}
            className=" hover:text-[#424b52] transition duration-250 ease-in-out  flex text-[#1e6091]  items-center "
          >
            {" "}
            <AiFillHeart className="pr-1 text-[1.4rem]" /> My Account
          </li>
          <li
            onClick={() => {
              navigate("/orders");
            }}
            className=" hover:text-[#424b52] transition duration-250 ease-in-out flex text-[#1e6091] items-center py-3"
          >
            <GiMilkCarton className="pr-1 text-[1.4rem]" /> Orders
          </li>
        </ul>

        <button
          onClick={handleLogOut}
          className="w-[85px] h-[40px] text-center font-bold py-1 flex items-center justify-center hover:bg-[#424b52] transition duration-250 ease-in-out   capitalize   bg-[#1e6091] rounded-sm text-white"
        >
          Log Out
        </button>
      </div>
    );
  }

  return (
    <section className="absolute left-[-80px] top-[72px] overflow-x-hidden">
      {account ? <IsLoggedIn /> : <IsLoggedOut />}
    </section>
  );
}

export default HandleAccount;
