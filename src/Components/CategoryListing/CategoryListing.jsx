import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { cartActions } from "../../Store/CartSlice";
import { Split } from "../../Molecules/splitterFunction";

function CategoryListing({ listings }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const category = useParams().category;

  const categoryList = listings.filter((list) => {
    return list.data.category === category.trim();
  });

  const handleNavigate = (e, name, price, id, img, para) => {
    if (e.target.type === "button") {
      return;
    } else {
      navigate(`/item/${id}`);
      dispatch(
        cartActions.addToCart({
          name,
          price,
          id,
          img,
          para,
        })
      );
    }
  };
  const addToCart = (name, price, id, img, para) => {
    dispatch(
      cartActions.addToCart({
        name,
        price,
        id,
        img,
        para,
      })
    );
  };

  return (
    <>
      <h1 className="font-bold text-[32px] text-center uppercase ">
        {category}
      </h1>
      <main className="  flex items-center  justify-center md:justify-between mx-auto   w-full max-w-7xl flex-wrap p-0  mt-[10px]">
        {categoryList?.map((product) => {
          const {
            id,
            data: { imgUrls: img, price, name, storeName, para },
          } = product;
          return (
            <section
              key={id}
              onClick={(e) => {
                handleNavigate(e, name, price, id, img, para);
              }}
              className="flex flex-col   w-[250px] h-[350px] mb-2 mx-2 lg:mx-0 border hover:shadow rounded  bg-white px-4 py-4 cursor-pointer  "
            >
              <div className="flex  justify-center items-center w-full h-[170px]   mb-2 ">
                <img src={img[0]} alt="product " className=" w-full h-full" />
              </div>
              <h5 className="capitalize mb-2  text-[#1f2d38]">{Split(name)}</h5>
              <div className="flex  justify-between items-center w-full  mb-2  ">
                <h2 className=" text-[20px] font-bold text-[#1f2d38]">
                  $ {price}
                </h2>
                <strike className="text-[17px] text-[#767879db]">
                  $ {price / 5}
                </strike>
              </div>
              <p className="text-[12px] mb-2  text-[#1f2d38]">
                sold by
                <span className="text-[12px] ml-1 text-[#1e6091] ">
                  {storeName}
                </span>
              </p>
              <button
                type="button"
                onClick={() => {
                  addToCart(name, price, id, img, para);
                }}
                className="text-[18px] rounded border border-[#1e6091] text-[#1e6091] hover:text-white hover:bg-[#1e6091] transition-all duration-300 ease-in flex justify-center items-center h-[40px] w-full"
              >
                Add to cart
              </button>
            </section>
          );
        })}
      </main>
    </>
  );
}

export default CategoryListing;
