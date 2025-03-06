"use client"
import React, {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { RiUser3Fill } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import { HiMiniBars3 } from "react-icons/hi2";

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <div className='flex flex-row items-center p-4 lg:p-8 bg-white relative'>
      {
        open ? < RxCross1 className='mr-4 text-5xl sm:text-3xl block lg:hidden text-blue-900' onClick={()=>setOpen(!open)}/>
        : < HiMiniBars3 className='mr-4 text-5xl sm:text-3xl block lg:hidden text-blue-900' onClick={()=>setOpen(!open)}/>
      }
      <Image src="/logo-name.png" width={200} height={100} alt='logo' />
      <div className='flex flex-row lg:justify-between justify-end items-center w-full text-blue-900'>
        <div className='lg:flex flex-row gap-5 mx-10 text-sm hidden'>
            <Link href={"/about"} scroll={true} className='hover:text-blue-400'>About</Link>
            <Link href={"/services"} scroll={true} className='hover:text-blue-400'>Services</Link>
            <Link href={"/technologies"} scroll={true} className='hover:text-blue-400'>Technologies</Link>
            <Link href={"/open-source"} scroll={true} className='hover:text-blue-400'>Open Source</Link>
            <Link href={"/customers"} scroll={true} className='hover:text-blue-400'>Customers</Link>
            <Link href={"/blog"} scroll={true} className='hover:text-blue-400'>Blog</Link>
            <Link href={"/carrers"} scroll={true} className='hover:text-blue-400'>Carrers</Link>
        </div>
        <div>
          <button className='hidden md:flex flex-row gap-2 items-center py-2 px-4 rounded-2xl text-sm cursor-pointer hover:bg-gray-300 hover:text-blue-400'>< RiUser3Fill />Login</button>
        </div>
      </div>
      {
        open
        ? <div className='absolute top-15 flex flex-col gap-5 mx-10 text-sm lg:hidden text-blue-900 bg-white z-20 px-10 py-3'>
              <Link href={"/about"} scroll={true} className='hover:text-blue-400'>About</Link>
              <Link href={"/services"} scroll={true} className='hover:text-blue-400'>Services</Link>
              <Link href={"/technologies"} scroll={true} className='hover:text-blue-400'>Technologies</Link>
              <Link href={"/open-source"} scroll={true} className='hover:text-blue-400'>Open Source</Link>
              <Link href={"/customers"} scroll={true} className='hover:text-blue-400'>Customers</Link>
              <Link href={"/blog"} scroll={true} className='hover:text-blue-400'>Blog</Link>
              <Link href={"/carrers"} scroll={true} className='hover:text-blue-400'>Carrers</Link>
              <hr />
              <button className='flex flex-row gap-2 items-center text-sm cursor-pointer hover:text-blue-400'>< RiUser3Fill />Login</button>
          </div>
        : null
      }
    </div>
  )
}
