import React, { useState, useEffect } from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import  {GiShoppingCart } from "react-icons/gi"
import { useNavigate } from 'react-router-dom';
import logo from "../assets/logo.png"
import {getAuth, onAuthStateChanged} from "firebase/auth"

function Nav() {
  const [search, setSearch] = useState("")
  const [pageState, setPageState] = useState("login")

  const auth = getAuth()

  useEffect(()=>(
    onAuthStateChanged(auth, (user)=>user ? setPageState(`hi, williams`) : setPageState("login"))
  ))


  const handleChange = (e)=>(
    setSearch(e.target.value)
  );
  const handleSubmit = (e)=>(
     e.preventDefault()
     
  );
  
  const navigate = useNavigate()
  
  return (
   <div className='w-full text-[#424b52] h-2xl bg-[#fff] shadow-lg '>
     <nav className='max-w-6xl flex justify-between items-center mx-auto p-4'>
       
        <img src={logo} alt='Kaban Logo' className='h-[90px] cursor-pointer mr-[7px]'/>
        
        <form onSubmit={handleSubmit} className='relative flex items-center '>
           <AiOutlineSearch className='absolute left-0 text-[1.3rem] font-bold ml-[5px] '/>
           <input onChange={handleChange} type="search" value={search} id="search" placeholder='Search products' className=' rounded text-sm border-sm border-[#5b7e99] md:w-[400px]  lg:w-[600px] pl-[2rem] focus:border-[#1e6091]' />
           <button className=' shadow ml-[10px] uppercase mx-auto  md:w-[9rem] py-[10px] px-[15px] bg-[#1e6091] text-white rounded h-[40px] flex items-center justify-center cursor-pointer transition duration-150 ease-in-out hover:bg-[#1f2d38]'> search </button>
        </form>
       
       
        <div onClick={()=>{
          navigate("/login")
        }} className='flex justify-between items-center cursor-pointer m-[5px] hover:text-[#1f2d38] text-[#1e6091]'>
            <FaUserAlt className=' pr-[5px] text-3xl'/>
            <p className='hidden md:block'>{pageState}</p>
            
          
        </div>
        <div onClick={()=>{
          navigate("/cart")
        }} className='flex cursor-pointer items-center hover:text-[#1f2d38] text-[#1e6091]'>
            <GiShoppingCart className=' pr-[5px] text-4xl'/>
            <p className='hidden md:block'>Cart</p>
        </div>
    </nav>
  </div>  
  )
}

export default Nav