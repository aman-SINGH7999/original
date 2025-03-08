import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div className='flex flex-col md:flex-row gap-5 px-10 mt-10 md:mt-0 h-[80vh] lg:px-20'>
        <div className='hidden md:w-1/2 md:flex flex-col justify-center gap-5 items-center text-center relative'>
        <img src="/signup.jpg" alt="login-img" className='w-full h-full object-cover absolute -z-10 opacity-52' />
            <div className='text-4xl font-bold p-2'>Welcome to ORIGINAL</div>
            <div className='text-sm md:w-9/10 lg:w-4/5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, quo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, illum!</div>
        </div>
        <div className='md:w-1/2 flex flex-col justify-center items-center'>
            <img src="/logo-name.png" alt="logo" className='w-1/2 mb-10' />
            <form action="" className='flex flex-col gap-5 justify-center items-start border-[1px] shadow-[0px_0px_100px_rgba(0,0,0,0.1)] border-gray-400 p-5 w-[350px] rounded-sm'>
                <div className='w-full flex flex-col gap-1'>
                    <label htmlFor="username" className='text-gray-500 text-sm'>Username</label>
                    <input type="text" id='username' className='border-[1px] border-gray-400 rounded-sm p-2' />
                </div>
                <div className='w-full flex flex-col gap-1'>
                    <label htmlFor="password" className='text-gray-500 text-sm'>Password</label>
                    <input type="password" id='password' className='border-[1px] border-gray-400 rounded-sm p-2' />
                </div>
                <div className='w-full flex flex-col gap-1'>
                    <label htmlFor="confirm-password" className='text-gray-500 text-sm'>Confirm Password</label>
                    <input type="password" id='confirm-password' className='border-[1px] border-gray-400 rounded-sm p-2' />
                </div>
                
                <button className='bg-blue-700 w-full rounded-sm text-white p-2 hover:bg-blue-800'>Sign Up</button>
                <div className='flex justify-between items-center w-full text-sm text-blue-700'>
                    <Link href={"/login"}>Already Have an Account?</Link>
                </div>
            </form>
        </div>
    </div>
  )
}
