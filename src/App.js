
import React from "react"
import {Routes, Route} from "react-router-dom"
import Cart from "./Pages/Cart";
import ForgotPassword from "./Pages/ForgotPassword";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";


function App() {
  return (
  <>
 
 <Routes>
  <Route path="/" element={<Home />}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/forgot-password" element={<ForgotPassword />}/>
  <Route path="/cart" element={<Cart />}/>
  <Route path="/sign-up" element={<Signup />}/>
 </Routes>
  </>
  );
}

export default App;
