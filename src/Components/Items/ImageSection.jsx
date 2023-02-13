import React from "react";

function ImageSection({ poster }) {
  console.log(poster);
  return (
    <div className="flex flex-col items-center justify-center w-full md:w-[50%]  h-[400px] ">
      <div className=" flex items-center justify-center md:w-[500px] w-[350px]">
        <img src={poster[0]} alt="item description" className="w-full h-full" />
      </div>

      <div className="flex  items-center justify-center ">
        <div className="flex  items-center justify-center w-[55px] h-[55px] border-[2px] border-red-500">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmR4jkEpjxw8UNqthaL6bcKZTivc8444J5vA&usqp=CAU"
            alt="item description"
            className="flex  w-[50px] h-[50px] "
          />
        </div>
        <div className="flex  items-center justify-center w-[55px] h-[55px] m-4 border-[2px] border-red-500">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmR4jkEpjxw8UNqthaL6bcKZTivc8444J5vA&usqp=CAU"
            alt="item description"
            className="flex  w-[50px] h-[50px] "
          />
        </div>
        <div className="flex  items-center justify-center w-[55px] h-[55px] border-[2px] border-red-500">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmR4jkEpjxw8UNqthaL6bcKZTivc8444J5vA&usqp=CAU"
            alt="item description"
            className="flex  w-[50px] h-[50px] "
          />
        </div>
      </div>
    </div>
  );
}

export default ImageSection;
