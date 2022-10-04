import React from 'react'
import login from "../assets/login.png"
import {FcGoogle} from "react-icons/fc"
import {BsFacebook} from "react-icons/bs"

function Login() {
  return (
    <section className='flex justify-center w-full mx-auto p-[30px] text-[#424b52] flex-wrap max-w-6xl'>
      <div className='flex flex-col items-center shadow-lg w-full md:w-[40%] lg:w-[50%] p-[25px]'>
        <form className="w-full">
          <h2 className='font-bold text-[2rem] mb-2  '> Login </h2>
          <div className='text-sm'>
            doesn't have an account yet? <span className="underline text-[blue] cursor-pointer hover:text-[red]">Sign up</span>
          </div>
          
          <div>
          <label htmlFor="text" className='capitalize font-bold '>email address</label>
          </div>
          <div>
          <input type="text" value="" placeholder='you@example.com' id="text" className='w-full  rounded shadow-sm bg-white p-[10px] focus:border-[#1e6091] '/>
          </div>

          <div className="flex justify-between mt-3">
          <label htmlFor="password" className='capitalize  font-bold '> password</label>
          <p className='text-[#1e6091] underline capitalize text-sm text-[blue] cursor--pointer hover:text-[red]'> forgot password?</p>
          </div>
         
          <div>
          <input type="password" placeholder="Enter password" value="" id="password" className='w-full  rounded shadow-sm bg-white p-[10px] focus:border-[#1e6091] '/>
          </div>
          <button className="w-full bg-[#1e6091]  text-[white] text-center rounded py-[12px] mt-2 hover:bg-[#11344e] cursor-pointer transition duration-250 ease-in-out">Login</button>
          
          
          <p className='text-center mx-auto my-3 text-sm'> ------------------ <span> or login with </span> -----------------</p>
          <div className='flex justify-between'>
            <button className='w-[45%] border-sm py-[ 10px] google-btn flex items-center justify-center'> <FcGoogle className='mx-1'/> Google</button>
            <button className='w-[45%] bg-[transparent] border-red-400 border-sm border-solid py-[ 10px] facebook-btn flex items-center justify-center'> <BsFacebook className='mx-1'/> Facebook</button>

          </div>   
        </form>
      </div>

      <div className="w-full md:w-[60%] lg:w-[50%]">
        <img src={login} alt="Login image" className="w-full  "/>
      </div>
    </section>
  )
}

export default Login