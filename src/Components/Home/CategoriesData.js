import { BsPhone, BsLaptop } from "react-icons/bs";
import { FaBaby, FaCameraRetro } from "react-icons/fa";
import { MdOutlineSportsBaseball } from "react-icons/md";
import { GiHealthPotion, GiClothes, GiRockingChair } from "react-icons/gi";

export const categories = [
  {
    category: "Phones & Tablets",
    id: 1,
    icon: <BsPhone className=" text-[25px] pr-2  " />,
  },
  {
    category: "Baby & Kids",
    id: 2,
    icon: <FaBaby className=" text-[25px] pr-2  " />,
  },
  {
    category: "health & beauty",
    id: 3,
    icon: <GiHealthPotion className=" text-[25px] pr-2  " />,
  },
  {
    category: " fashion, bags & clothes",
    id: 4,
    icon: <GiClothes className=" text-[25px] pr-2  " />,
  },
  {
    category: "sporting goods",
    id: 5,
    icon: <MdOutlineSportsBaseball className=" text-[25px] pr-2  " />,
  },
  {
    category: "computing",
    id: 6,
    icon: <BsLaptop className=" text-[25px] pr-2  " />,
  },
  {
    category: "gaming & camera",
    id: 7,
    icon: <FaCameraRetro className=" text-[25px] pr-2  " />,
  },
  {
    category: "home & office",
    id: 8,
    icon: <GiRockingChair className=" text-[25px] pr-2  " />,
  },
];
