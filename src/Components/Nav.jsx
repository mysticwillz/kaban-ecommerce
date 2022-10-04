import React, { useState } from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import  {GiShoppingCart } from "react-icons/gi"
import logo from "../assets/logo.png"

function Nav() {
  const [search, setSearch] = useState("")
  const handleChange = (e)=>(
    setSearch(e.target.value)
  );
  const handleSubmit = (e)=>(
     e.preventDefault()
     
  )
  
  return (
   <div className='w-full text-[#424b52] h-4xl bg-[#fff] shadow-lg '>
     <nav className='max-w-6xl flex justify-between items-center mx-auto p-4'>
       
        <img src={logo} alt='Kaban Logo' className='w-[70px] cursor-pointer '/>
        
        <form onSubmit={handleSubmit} className='relative flex items-center '>
           <AiOutlineSearch className='absolute left-0 text-[1.3rem] fw-bold ml-[5px] '/>
           <input onChange={handleChange} type="search" value={search} id="search" placeholder='Search products' className=' rounded text-sm border-sm border-[#5b7e99] md:w-[400px]  lg:w-[600px] pl-[2rem] focus:border-[#1e6091]' />
           <button className=' shadow ml-[10px] uppercase mx-auto  md:w-[6rem] py-[10px] px-[15px] bg-[#1e6091] text-white rounded h-[40px] flex items-center justify-center cursor-pointer transition duration-150 ease-in-out hover:bg-[#102f47]'> search </button>
        </form>
       
       
        <div className='flex justify-between items-center cursor-pointer m-[5px] hover:text-[#1e6091]'>
            <FaUserAlt className=' pr-[5px] text-3xl'/>
            <p className='hidden md:block'>Login</p>
            
          
        </div>
        <div className='flex cursor-pointer items-center hover:text-[#1e6091]'>
            <GiShoppingCart className=' pr-[5px] text-4xl'/>
            <p className='hidden md:block'>Cart</p>
        </div>
    </nav>
  </div>  
  )
}

export default Nav