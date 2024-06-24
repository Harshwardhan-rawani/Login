import React from 'react'
import { RiUser3Fill } from "react-icons/ri";
import { IoIosLock } from "react-icons/io";
import photo from "../assets/photo.svg"
function Login() {
  return (
    <>
      <div className='h-screen w-screen flex xl:justify-center xl:items-center bg-gradient-to-r from-[#782a80] to-[#742a87] '>
        <div className='xl:w-4/5 relative xl:h-4/5 flex shadow-2xl shadow-black'>
            <div className='w-[60%] h-full bg-[#762c85] flex justify-center items-center p-5'>
            <div>
            <p className='text-center text-white text-4xl my-5'>Welcome to the website </p>
            <p className='text-center text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate ducimus neque ipsam quas velit quia modi omnis exercitationem est voluptatibus.</p>
            <div className='flex justify-center'>  <img src={photo} alt="" /></div>
          
            </div>
        
            </div>
            <form className='w-[40%] h-full bg-[#8e5290] flex  items-center justify-center'>
                <div className='w-3/4 flex flex-col items-center'>
                    <h1 className='text-2xl my-8 text-white'>USER LOGIN</h1>
                    <div className='space-y-4 w-5/6 '>
                    <div className='flex w-full items-center'>
                        <label className='text-2xl mx-5 text-white' htmlFor="username"><RiUser3Fill/></label>
                        <input placeholder='Username' type="text" className='w-full h-8 p-2 font-semibold'/>
                    </div>
                    <div className='flex w-full items-center'>
                        <label className='text-2xl mx-5 text-white' htmlFor="username"><IoIosLock /></label>
                        <input placeholder='*******' type="text" className='w-full h-8 p-2 font-semibold'/>
                    </div>
                    <div className='flex ml-16 justify-between'>
                    <div class="form-check">
                <input className="form-check-input" type="checkbox"  id="flexCheckChecked" checked />
                <label className="form-check-label text-white text-sm" htmlFor="flexCheckChecked">
                        Remember
                </label>
                    </div>
                        <div className='text-sm text-white'>Forgot password?</div>
                    </div>
                    <div className='flex ml-16 justify-center'>
                        <button className='text-white bg-[#762c85] px-10 py-1 rounded-2xl font-semibold'>LOGIN</button>
                    </div>
                    <div className='flex ml-16 justify-center'>
                        <p className='text-white'>Create Account</p>
                    </div>
                    </div>
                 
                </div>
            </form>
        </div>
      </div>
    </>
  )
}

export default Login
