import React, { useState } from 'react'
import signupPicture from "../assets/signup.png"
import {FcGoogle} from "react-icons/fc"
import {BsFacebook} from "react-icons/bs"
import { useNavigate } from "react-router-dom"
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth"

import {db} from "../Components/Firebase"

import { doc, serverTimestamp, setDoc } from 'firebase/firestore';


function Signup() {
  const [signup, setSignup] = useState({
    name:"",
    email:"",
    password:""
  });

  const {name, email, password} = signup

  const handleChange = (e)=>{
    setSignup((prev)=>(
      {...prev, [e.target.id]:e.target.value
      }
    ))
   };

   async function handleSubmit (e){
    e.preventDefault()
    try {
        const auth = getAuth()
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);

        updateProfile(auth.currentUser,{displayName:name})
        
        const user = userCredential.user

        const signupCopy = { ...signup}
        delete signupCopy.password
        signupCopy.timestamp = serverTimestamp();

        await setDoc(doc(db, "users", user.uid),signupCopy)
     
        navigate("/")
    } catch (error) {
        console.log(error)
    }

}

  const navigate = useNavigate()
  return (
    <section className='flex justify-center w-full mx-auto p-[30px] text-[#424b52] flex-wrap max-w-6xl'>
      <div className='flex flex-col items-center shadow-lg w-full md:w-[40%] lg:w-[50%] p-[25px]'>
        <form onSubmit={handleSubmit} className="w-full">
          <h2 className='font-bold text-[2rem] mb-2  '> Sign up </h2>
          <div className='text-sm'>
            Already have an account? <span onClick={()=>{
              navigate("/login")
            }} className="underline text-[blue] cursor-pointer hover:text-[red]">Login</span>
          </div>
          
          <div>
          <label htmlFor="text" className='capitalize font-bold '>Name</label>
          </div>
          <div>
          <input onChange={handleChange} type="text" value={name} placeholder='Enter your name' id="name" className='w-full  rounded shadow-sm bg-white p-[10px] focus:border-[#1e6091] '/>
          </div>

          <div>
          <label htmlFor="email" className='capitalize font-bold '>email address</label>
          </div>
          <div>
          <input onChange={handleChange} type="email" value={email} placeholder='you@example.com' id="email" className='w-full  rounded shadow-sm bg-white p-[10px] focus:border-[#1e6091] '/>
          </div>

          <div className=" mt-3">
          <label htmlFor="password" className='capitalize  font-bold '> password</label>
          
          </div>
         
          <div>
          <input onChange={handleChange} type="password" placeholder="Enter password" value={password} id="password" className='w-full  rounded shadow-sm bg-white p-[10px] focus:border-[#1e6091] '/>
          </div>
          <button className="w-full bg-[#1e6091]  text-[white] text-center rounded py-[12px] mt-2 hover:bg-[#11344e] cursor-pointer transition duration-250 ease-in-out">Sign up</button>
          
          
          <p className='text-center mx-auto my-3 text-sm'> ------------------ <span> or Sign up with </span> -----------------</p>
          <div className='flex justify-between'>
            <button className='w-[45%] border-sm py-[ 10px] google-btn flex items-center justify-center'> <FcGoogle className='mx-1'/> Google</button>
            <button className='w-[45%] bg-[transparent] border-red-400 border-sm border-solid py-[ 10px] facebook-btn flex items-center justify-center'> <BsFacebook className='mx-1'/> Facebook</button>

          </div>   
        </form>
      </div>

      <div className="w-full md:w-[60%] lg:w-[50%]">
        <img src={signupPicture} alt="signup logo" className="w-full  "/>
      </div>
    </section>
  )
}

export default Signup