import React, { useState } from "react";
import one from "../../assets/kabanhero/one.png";
import two from "../../assets/kabanhero/two.png";
import three from "../../assets/kabanhero/three.png";
import four from "../../assets/kabanhero/four.png";
import five from "../../assets/kabanhero/five.png";
import six from "../../assets/kabanhero/six.png";

function Slider() {
  const images = [
    { img: one, alt: "first hero", id: 1 },
    { img: two, alt: "second hero", id: 2 },
    { img: three, alt: "third hero", id: 3 },
    { img: four, alt: "fourth hero", id: 4 },
    { img: five, alt: "fifth hero", id: 5 },
    { img: six, alt: "sixth hero", id: 6 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <>
      <div className="w-[60%] h-[60vh] rounded-lg flex items-center justify-center">
        <img
          src={images[currentIndex].img}
          alt={images[currentIndex].alt}
          className="w-full h-full rounded-lg"
        />
      </div>
    </>
  );
}

export default Slider;
