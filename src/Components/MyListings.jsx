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
      console.log(myListingsArray);
      setListings(myListingsArray);

      setLoading(false);
    };
    fetchUserListing();
  }, [auth.currentUser.uid]);
  return (
    <>
      <main className="flex justify-center items-center mx-auto max-w-7xl">
        <section>
          <header className="flex justify-center ">
            <h1 className="text-[3rem] capitalize font-bold ">my listings</h1>

            {!loading &&
              listings.map((listing) => {
                return (
                  <section
                    key={listing.id}
                    className="mt-[20px] flex items-center  justify-center w-full"
                  >
                    <div className="  flex items-center justify-center  flex-wrap">
                      <div className="h-[20rem] rounded border border-emerald-300 m-2 w-[18rem]">
                        <div className="w-full h-[80%] border border-black">
                          <img src="" alt="" />
                        </div>
                        <div className="p-2 ">
                          <p>{listing.name}</p>
                          <p>{listing.data}</p>
                        </div>
                      </div>
                    </div>
                  </section>
                );
              })}
          </header>
        </section>
      </main>
    </>
  );
}

export default MyListings;
