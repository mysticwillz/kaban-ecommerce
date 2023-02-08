import React from "react";

function Description({ description }) {
  return (
    <section>
      <h2 className=" text-[30px] font-bold text-[#1e6091] ">Description</h2>
      <div className=" text-[18px] w-[600px] ">
        <p className=" text-[#767879db] text-[18px] w-[600px] mb-[10px]">
          {description}
        </p>
      </div>
    </section>
  );
}

export default Description;
