import { useNavigate } from "react-router-dom";
import { categories } from "./CategoriesData";
import Slider from "./Slider";
import one from "../../assets/kabanhero/one.png";
import two from "../../assets/kabanhero/two.png";
import three from "../../assets/kabanhero/three.png";
import four from "../../assets/kabanhero/four.png";
import five from "../../assets/kabanhero/five.png";
import six from "../../assets/kabanhero/six.png";

function Hero() {
  const navigate = useNavigate();
  return (
    <>
      <section className="flex justify-center items-center max-w-7xl mx-auto w-full px-2 lg:px-0 overflow-hidden">
        <div className=" md:h-[60vh] flex justify-between items-center md:mt-[15px]  w-full ">
          <div className="text-[#1f2d38] rounded pl-6 md:flex border md:flex-col justify-center   hidden md:w-[30%] lg:w-[20%] bg-white h-[60vh] mr-[15px]">
            {categories?.map((cat) => {
              const { category, id, icon } = cat;
              return (
                <div
                  key={id}
                  onClick={() => {
                    navigate(`/category/${category}`);
                  }}
                  className=" flex items-center my-2  hover:text-[#1e6091] transition duration-250 ease-in cursor-pointer "
                >
                  {icon}
                  <p className=" text-[16px] capitalize  "> {category} </p>
                </div>
              );
            })}
          </div>
          <Slider />

          <div className=" rounded-[10px]  hidden ml-[15px] lg:block w-[20%] bg-white h-[60vh]  flex-col items-start">
            <div className="w-full h-[50%] rounded-t ">
              <img
                src={six}
                alt="sub hero"
                className=" rounded-t h-full w-full"
              />
            </div>
            <div className="w-full h-[50%] rounded-b ">
              <img
                src={three}
                alt="sub hero"
                className="rounded-b  h-full w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
