import React, { useState } from "react";

function ImageSection({ poster }) {
  const [imgIndex, setImgIndex] = useState(0);

  const swapIndex = (i) => {
    setImgIndex(i);
  };
  return (
    <div className="flex flex-col items-center justify-center w-full md:w-[50%]  h-[400px] ">
      <div className=" flex items-center justify-center md:w-[500px] w-[350px]">
        <img
          src={poster[imgIndex]}
          alt="item description"
          className="w-full h-full"
        />
      </div>
      <div className="flex  items-center justify-center ">
        {poster.map((post, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                swapIndex(index);
              }}
              className="flex  items-center justify-center w-[55px] h-[55px]  mt-2 px-1"
            >
              <img
                src={post}
                alt="item description"
                className="flex  w-[50px] h-[50px]"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ImageSection;
