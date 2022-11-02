import React from "react";
import { useState } from "react";

function CreateListing() {
  const [listData, setListData] = useState({
    name: "",
    id: "",
    img: "",
    price: "",
    para: "",
    category: "",
    itemPictures: "",
  });
  const { name, id, img, price, para, category, itemPictures } = listData;

  const handleChange = (e) => {
    setListData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  return (
    <main className="max-w-2xl mx-auto mt-[10px]">
      <form className="flex flex-col  w-full">
        <div className="w-full flex justify-between items-center  px-4 ">
          <div className="flex items-center">
            <label htmlFor="name" className="font-bold pr-2 ">
              Name:
            </label>
            <input
              type="text"
              id="name"
              onChange={(e) => {
                handleChange(e);
              }}
              value={name}
              placeholder="Enter Product Name"
              className="w-full rounded border-0 focus:border-[#1e6091] "
            />
          </div>

          <div className="flex items-center">
            <label htmlFor="price" className="font-bold pr-2 ">
              Price:
            </label>
            <input
              type="number"
              id="price"
              onChange={(e) => {
                handleChange(e);
              }}
              value={price}
              placeholder="1000"
              className="w-full rounded border-0 focus:border-[#1e6091] "
            />
          </div>
        </div>
        <div className="mt-[15px] w-full px-4">
          <p htmlFor="para" className="font-bold ">
            Description
          </p>
          <textarea
            onChange={(e) => {
              handleChange(e);
            }}
            id="para"
            value={para}
            rows="6"
            placeholder="Enter Product Description here"
            className=" border-0 focus:border-[#1e6091] w-full rounded px-4"
          ></textarea>
        </div>
        <div className="flex px-4 items-center">
          <p htmlFor="img" className="font-bold pr-2 ">
            Display Image:
          </p>
          <input
            type="file"
            id="img"
            max={1}
            onChange={(e) => {
              handleChange(e);
            }}
            value={img}
            className="w-full rounded border-0 focus:border-[#1e6091] "
          />
        </div>
      </form>
    </main>
  );
}

export default CreateListing;
