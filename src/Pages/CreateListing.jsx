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
      <header className="flex items-center justify-center my-[10px] ">
        <h1 className="text-center text-[2.3rem] font-bold ">Create Listing</h1>
      </header>
      <form className="flex flex-col mt-3  w-full">
        <div className="w-full   flex  flex-wrap md:flex-nowrap justify-between items-center  px-4 ">
          <div className="flex flex-col md:flex-row w-full md:w-[49%] items-start  md:items-center">
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
          <div className="flex md:items-center flex-col md:flex-row w-full items-start md:w-[49%]  ">
            <label htmlFor="price" className="font-bold pr-2 ">
              Price:
            </label>
            <input
              type="number"
              id="price"
              min="0"
              onChange={(e) => {
                handleChange(e);
              }}
              value={price}
              placeholder="1000"
              className="w-full rounded border-0 focus:border-[#1e6091] "
            />
          </div>
        </div>

        <div className="flex whitespace-normal px-4 items-center mt-[20px]">
          <p className="font-bold pr-2 whitespace-nowrap">Display Image:</p>
          <input
            type="file"
            id="img"
            max="1"
            onChange={(e) => {
              handleChange(e);
            }}
            value={img}
            className="   rounded border-0 focus:border-[#1e6091] "
          />
        </div>
        <div className="w-full px-4 mt-[20px]">
          <label htmlFor="category" className="font-bold ">
            Category
          </label>
          <select
            id="category"
            name={category}
            value={category}
            className=" border-0 rounded  w-full  "
          >
            <option>phone</option>
            <option>laptop</option>
            <option selected>camera</option>
            <option>bags</option>
            <option>clothing</option>
            <option>watch</option>
            <option>shoes</option>
          </select>
        </div>

        <div className="flex px-4 items-center mt-[20px]">
          <p className="font-bold pr-2 whitespace-nowrap">
            Description Images:
          </p>
          <input
            type="file"
            id="img"
            max="3"
            min="3"
            onChange={(e) => {
              handleChange(e);
            }}
            value={itemPictures}
            className="   rounded border-0 focus:border-[#1e6091] "
          />
        </div>
        <div className=" w-full px-4 mt-[20px]">
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

        <div className="flex items-center justify-center px-4  my-[20px]">
          <button
            type="submit"
            className="w-full rounded border-0 h-[40px]  bg-[#1e6091] text-white uppercase flex items-center justify-center"
          >
            Publish your product
          </button>
        </div>
      </form>
    </main>
  );
}

export default CreateListing;
