import { Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Cart from "./Pages/Cart";
import ForgotPassword from "./Pages/ForgotPassword";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import CreateListing from "./Pages/CreateListing";
import Profile from "./Pages/Profile";
import Signup from "./Pages/Signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./Components/PrivateRoute";
import ItemsPage from "./Components/ItemsPage";
import Footer from "./Layouts/Footer";
import Checkout from "./Pages/Checkout";
import Category from "./Pages/Category";
import { FetchContext } from "./Context/FetchContext";
import React, { useState, useEffect } from "react";

import { db } from "./Components/Firebase";
import { getDocs, orderBy, query, collection } from "firebase/firestore";
import SearchResult from "./Pages/SearchResult";
import ScrollToTop from "./Molecules/ScrollToTop";

function App() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchUserListing = async () => {
      const listingRef = collection(db, "listings");

      const q = query(
        listingRef,

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
  }, []);

  return (
    <>
      <FetchContext.Provider value={listings}>
        <ScrollToTop />
        <Nav />
        <Routes>
          <Route path="/" element={<Home loading={loading} />} />
          <Route path="/search/:search" element={<SearchResult />} />
          <Route path="/profile" element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>

          <Route path="/checkout" element={<Checkout />} />

          <Route path="/create-listing" element={<PrivateRoute />}>
            <Route path="/create-listing" element={<CreateListing />} />
          </Route>

          <Route path="/category/:category" element={<Category />} />

          <Route path="/login" element={<Login />} />
          <Route path="/item/:id" element={<ItemsPage />} />

          <Route path="/forgot-password" element={<ForgotPassword />} />

          <Route path="/cart" element={<Cart />} />
          <Route path="/sign-up" element={<Signup />} />
        </Routes>

        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <Footer />
      </FetchContext.Provider>
    </>
  );
}

export default App;
