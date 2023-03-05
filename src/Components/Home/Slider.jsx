import React, { useEffect, useRef, useState } from "react";
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

  const timeRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const previous = () => {
    const firstSlide = currentIndex === 0;
    const newIndex = firstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const next = () => {
    const lastSlide = currentIndex === images.length - 1;
    const newIndex = lastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  useEffect(() => {
    timeRef.current = setTimeout(() => {
      next();
    }, 2000);
    return () => clearInterval(timeRef.current);
  });

  return (
    <>
      <div className=" mt-2  w-[100%] md:w-[70%] lg:w-[60%] md:h-[61vh] h-[30vh] rounded flex items-center justify-center overflow-hidden ">
        <img
          src={images[currentIndex].img}
          alt={images[currentIndex].alt}
          className=" w-full h-full rounded "
        />
      </div>
    </>
  );
}

export default Slider;
