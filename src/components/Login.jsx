import React from 'react'
import { RiUser3Fill } from "react-icons/ri";
import { IoIosLock } from "react-icons/io";
import photo from "../assets/photo.svg"
import "./Login.css"

import video from "../assets/video.mp4"
function Login() {
  return (
    <>
      <div className='h-screen w-screen flex xl:justify-center xl:items-center bg-gradient-to-r from-[#782a80] to-[#742a87] '>
        <div className='xl:w-4/5 relative xl:h-4/5 flex shadow-2xl shadow-black'>
            <div className='w-[60%] h-full bg-[#762c85] flex justify-center items-center p-5'>
            <div className='w-full '>
            <div className='text-center text-white text-4xl my-5 relative w-full overflow-hidden '>
              <div>Welcome to the website</div>  
              <div className='absolute top-0 right-28 bg-[#762c85] border-l-2  text-[#762c85] w-[25%] animate'>h</div>  
                 </div>
            <p className='text-center text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate ducimus neque ipsam quas velit quia modi omnis exercitationem est voluptatibus.</p>
            <div className='flex justify-center'>  <img src={photo} alt="" /></div>
          
            </div>
        
            </div>
            <form className='w-[40%] h-full bg-[#8e5290] flex  items-center justify-center relative '>
            <div className='absolute top-0 z-30 h-full'>
                <video width="500" height="600"
                 style={{ width: '600px', height:'100%', backgroundColor: 'black' }}
      autoPlay
      loop
      muted>
                     <source src={video} type="video/mp4" />
                 </video>
                </div>
                <div className='w-3/4 flex flex-col items-center z-50'>
                    <h1 className='text-2xl my-8 text-white'>USER LOGIN</h1>
                    <div className='space-y-4 w-5/6 '>
                    <div className='flex w-full items-center'>
                        <label className='text-2xl mx-5 text-white animate1' htmlFor="username"><RiUser3Fill/></label>
                        <input placeholder='Username' type="text" className='w-full h-8 p-2 font-semibold'/>
                    </div>
                    <div className='flex w-full items-center'>
                        <label className='text-2xl mx-5 text-white  animate2' htmlFor="username"><IoIosLock /></label>
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
                        <button className='text-white bg-[#762c85] px-10 py-1 rounded-2xl font-semibold animatec'>LOGIN</button>
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
