import React, { useState } from 'react'
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'
import forgotpassword from "../assets/forgotpassword.png"
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify'



function ForgotPassword() {

  const [email, setEmail] = useState("")
  const handleChange = (e)=>{
    setEmail(e.target.value)
  };

  async function handleSubmit(e){
    e.preventDefault()
    try {
        const auth = getAuth()
        await sendPasswordResetEmail(auth,email)
        toast.success("email was sent")
        
    } catch (error) {
        toast.error("could not send reset password")
        
    }
   }
   
  const navigate = useNavigate();

 return <section className='flex justify-center w-full mx-auto p-[30px] text-[#424b52] flex-wrap max-w-6xl'>
      <div className='flex flex-col items-center shadow-lg w-full md:w-[40%] lg:w-[50%] p-[25px]'>
        <form onSubmit={handleSubmit} className="w-full">
          <h2 className='font-bold text-[2rem] mb-2  '> Reset password </h2>
          <div className='text-sm pb-3'>
            doesn't have an account yet? <span onClick={()=>{navigate("/sign-up")}} className="underline text-[blue] cursor-pointer hover:text-[red]" >Sign up</span>
          </div>
          
          <div>
          <label htmlFor="email" className='capitalize font-bold '> enter your email address</label>
          </div>
          <div>
          <input onChange={handleChange} type="text" value={email} placeholder='you@example.com' id="email" className='w-full  rounded shadow-sm bg-white p-[10px] focus:border-[#1e6091] '/>
          </div>

          
          <p onClick={()=>{navigate("/login")}} className=' text-end underline capitalize text-sm text-[blue] cursor-pointer hover:text-[red] py-2'> back to login</p>
          
         
      
          <button className="w-full bg-[#1e6091]  text-[white] text-center rounded py-[12px] mt-2 hover:bg-[#11344e] cursor-pointer transition duration-250 ease-in-out">Reset Password</button>
          
          
         
            
        </form>
      </div>

      <div className="w-full md:w-[60%] lg:w-[50%]">
        <img src={forgotpassword} alt="forgotpassword logo" className="w-full  "/>
      </div>
    </section>
}

export default ForgotPassword