import React from "react";
import { useEffect } from "react";
import { getAuth } from "firebase/auth";
import { db } from "../Components/Firebase";
import { getDocs, orderBy, query, collection, where } from "firebase/firestore";
import { useState } from "react";

function MyListings() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const auth = getAuth();
  useEffect(() => {
    const fetchUserListing = async () => {
      const listingRef = collection(db, "listings");

      const q = query(
        listingRef,
        where("userRef", "==", auth.currentUser.uid),
        orderBy("timestamp", "desc")
      );

      const querySnap = await getDocs(q);

      let myListingsArray = [];
      querySnap.forEach((doc) => {
        return myListingsArray.push({
          id: doc.id,
          data: doc.data(),
        });
      });

      setListings(myListingsArray);

      setLoading(false);
    };
    fetchUserListing();
  }, [auth.currentUser.uid]);
  console.log(listings);

  return (
    listings.length > 0 && (
      <>
        <h1 className="  text-[30px] font-bold text-center">My Listings</h1>
        <main className="  flex items-center  justify-center md:justify-between mx-auto   w-full max-w-7xl flex-wrap p-0  mt-[10px]">
          {listings.map((product) => {
            const {
              id,
              data: { imgUrls, price, name, storeName },
            } = product;

            return (
              <section className="flex flex-col   w-[250px] h-[300px] mb-2 mx-2 lg:mx-0 border hover:shadow rounded  bg-white px-4 py-4 cursor-pointer  ">
                <div
                  key={id}
                  className="flex  justify-center items-center w-full h-[170px]   mb-2 "
                >
                  <img src={imgUrls[0]} alt="item" className="w-full h-full " />
                </div>
                <h5 className="capitalize mb-2  text-[#1f2d38]"> {name}</h5>
                <div className="flex  justify-between items-start w-full  mb-2  ">
                  <h2 className=" text-[20px] font-bold text-[#1f2d38]">
                    $ {price}
                  </h2>
                </div>
                <p className="text-[12px] mb-2  text-[#1f2d38]">
                  sold by
                  <span className="text-[12px] ml-1 text-[#1e6091] ">
                    {storeName}
                  </span>
                </p>
              </section>
            );
          })}
        </main>
      </>
    )
  );
}

export default MyListings;
