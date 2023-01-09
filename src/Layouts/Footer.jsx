import React from "react";
import { FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <main className="w-full bg-[#030a0f]  mx-auto py-[35px] flex flex-col items-center justify-center  ">
      <section className="max-w-7xl text-white  flex justify-between w-full flex-wrap">
        <ul>
          <li className=" text-[22px] font-bold">ABOUT KABAN</li>
          <li className="capitalize text-[14px] transition duration-250 ease-in-out cursor-pointer">
            contact us
          </li>
          <li className="capitalize text-[14px] transition duration-250 ease-in-out cursor-pointer">
            about us
          </li>
          <li className="capitalize text-[14px] transition duration-250 ease-in-out cursor-pointer">
            careers
          </li>
          <li className="capitalize text-[14px] transition duration-250 ease-in-out cursor-pointer">
            our blog
          </li>
          <li className="capitalize text-[14px] transition duration-250 ease-in-out cursor-pointer">
            forum
          </li>
          <li className="capitalize text-[14px] transition duration-250 ease-in-out cursor-pointer">
            terms and condition{" "}
          </li>
        </ul>
        <ul>
          <li className=" text-[22px] font-bold">PAYMENT</li>
          <li className="capitalize text-[14px] transition duration-250 ease-in-out cursor-pointer">
            kaban pay
          </li>
          <li className="capitalize text-[14px] transition duration-250 ease-in-out cursor-pointer">
            wallet
          </li>
          <li className="capitalize text-[14px] transition duration-250 ease-in-out cursor-pointer">
            mastercard
          </li>
          <li className="capitalize text-[14px] transition duration-250 ease-in-out cursor-pointer">
            visa
          </li>
          <li className="capitalize text-[14px] transition duration-250 ease-in-out cursor-pointer">
            verve
          </li>
        </ul>
        <ul>
          <li className=" text-[22px] font-bold">BUYING ON KABAN</li>
          <li className="capitalize text-[14px] transition duration-250 ease-in-out cursor-pointer">
            buyers safety center
          </li>
          <li className="capitalize text-[14px] transition duration-250 ease-in-out cursor-pointer">
            FAQs
          </li>
          <li className="capitalize text-[14px] transition duration-250 ease-in-out cursor-pointer">
            delivery
          </li>
          <li className="capitalize text-[14px] transition duration-250 ease-in-out cursor-pointer">
            kaban return policy
          </li>
          <li className="capitalize text-[14px] transition duration-250 ease-in-out cursor-pointer">
            bulk purchase
          </li>
          <li className="capitalize text-[14px] transition duration-250 ease-in-out cursor-pointer">
            digital services
          </li>
        </ul>
        <ul>
          <li className=" text-[22px] font-bold">MORE INFO</li>
          <li className="capitalize text-[14px] transition duration-250 ease-in-out cursor-pointer">
            privacy policy
          </li>
          <li className="capitalize text-[14px] transition duration-250 ease-in-out cursor-pointer">
            site map
          </li>
          <li className="capitalize text-[14px] transition duration-250 ease-in-out cursor-pointer">
            track my order
          </li>
          <li className="capitalize text-[14px] transition duration-250 ease-in-out cursor-pointer">
            authenticate item policy
          </li>
        </ul>
        <ul>
          <li className=" text-[22px] font-bold">MAKE MONEY ON KABAN</li>
          <li className="capitalize text-[14px] transition duration-250 ease-in-out cursor-pointer">
            become a kaban affiliate
          </li>
        </ul>
      </section>
      <section className=" w-full max-w-7xl mt-[20px]  ">
        <h4 className=" text-[18px] font-bold text-white capitalize   ">
          connect on socials
        </h4>

        <div className=" w-[170px] flex justify-between  items-center ">
          <a
            target="_blank"
            href="https://twitter.com/mysticwillz"
            rel="noreferrer"
          >
            <FaTwitter className=" text-[30px]   cursor-pointer text-[#00acee]" />
          </a>
          <a
            target="_blank"
            href="https://github.com/mysticwillz"
            rel="noreferrer"
          >
            <FaGithub className=" text-[60px]  px-4 cursor-pointer text-white" />
          </a>
          <a
            target="_blank"
            href="https://instagram.com/mysticwillz"
            rel="noreferrer"
          >
            <FaInstagram className=" text-[30px]   cursor-pointer text-[#fa5682]" />
          </a>
        </div>
      </section>
      <p className="  text-white">
        {" "}
        Copyright &copy; Eze Williams 2023 . All rights reserved{" "}
      </p>
    </main>
  );
}

export default Footer;
