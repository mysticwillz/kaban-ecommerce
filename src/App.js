
import React from "react"
import {Routes, Route} from "react-router-dom"
import Nav from "./Components/Nav";
import Cart from "./Pages/Cart";
import ForgotPassword from "./Pages/ForgotPassword";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Signup from "./Pages/Signup";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
  <>
<Nav/>
 <Routes>
  <Route path="/" element={<Home />}/>
  <Route path="/profile" element={<Profile />}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/forgot-password" element={<ForgotPassword />}/>
  <Route path="/cart" element={<Cart />}/>
  <Route path="/sign-up" element={<Signup />}/>
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
  </>
  );
}

export default App;
