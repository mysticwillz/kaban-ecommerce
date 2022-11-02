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
    <main className="max-w-2xl mt-[10px]">
      <form className="flex flex-col items-center justify-centre w-full">
        <div className="w-full  mx-auto px-4 ">
          <label htmlFor="name" className="font-bold ">
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
        <div>
          <label htmlFor="name" className="font-bold ">
            Price:
          </label>
          <input
            type="number"
            id="price"
            onChange={(e) => {
              handleChange(e);
            }}
            value={name}
            placeholder="Price"
            className="w-full rounded border-0 focus:border-[#1e6091] "
          />
        </div>
      </form>
    </main>
  );
}

export default CreateListing;
