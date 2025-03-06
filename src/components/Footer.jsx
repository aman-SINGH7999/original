import Link from 'next/link';
import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareYoutube } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className='pt-10'>
        <div className='flex text-sm flex-col items-center gap-10 md:gap-5 md:items-start md:flex-row md:justify-between px-5 md:px-10 lg:px-20 pb-10'>
            <div className='flex flex-col gap-8 text-sm items-center md:items-start'>
                <img src="/logo-name.png" alt="logo" className='md:w-[20vw]' />
                <div className='flex gap-2 text-2xl '>
                    <FaFacebookSquare />
                    <FaSquareXTwitter />
                    <FaLinkedin />
                    <FaInstagramSquare />
                    <FaSquareYoutube />
                </div>
                <div>Call us at 1800-420-7332</div>
            </div>
            <div className='flex flex-col gap-2 md:gap-4 text-sky-700 w-full text-center'>
                <div className='font-semibold text-blue-950 md:mb-5'>New to Salesforce?</div>
                <Link href={"#"} >Why Salesforce</Link>
                <Link href={"#"} >What is CRM?</Link>
                <Link href={"#"} >Explore All Products</Link>
                <Link href={"#"} >SaaS</Link>
                <Link href={"#"} >Customer Success</Link>
                <Link href={"#"} >Product Pricing</Link>
            </div>
            <div className='flex flex-col gap-2 md:gap-4 text-sky-700 w-full text-center'>
                <div className='font-semibold text-blue-950 md:mb-5'>About Salesforce</div>
                <Link href={"#"} >Our Story</Link>
                <Link href={"#"} >Careers</Link>
                <Link href={"#"} >Press</Link>
                <Link href={"#"} >Blog</Link>
                <Link href={"#"} >Security and Performance</Link>
                <Link href={"#"} >Salesforce.org</Link>
                <Link href={"#"} >Best CRM Software</Link>
                <Link href={"#"} >Sustainability</Link>
                <Link href={"#"} >Security and Performance</Link>
                <Link href={"#"} >Legal</Link>
                <Link href={"#"} >Give us your Feedback</Link>
            </div>
            <div className='flex flex-col gap-2 md:gap-4 text-sky-700 w-full text-center'>
                <div className='font-semibold text-blue-950 md:mb-5'>About Salesforce</div>
                <Link href={"#"} >Our Story</Link>
                <Link href={"#"} >Careers</Link>
                <Link href={"#"} >Press</Link>
                <Link href={"#"} >Blog</Link>
                <Link href={"#"} >Security and Performance</Link>
                <Link href={"#"} >Salesforce.org</Link>
                <Link href={"#"} >Best CRM Software</Link>
                <Link href={"#"} >Sustainability</Link>
                <Link href={"#"} >Security and Performance</Link>
                <Link href={"#"} >Legal</Link>
                <Link href={"#"} >Give us your Feedback</Link>
            </div>
        </div>
        <div className='flex flex-col text-center items-center sm:text-start sm:items-start sm:flex-row text-[13px] px-5 md:px-10 lg:px-20 py-10 gap-10 bg-blue-950 text-white'>
            <div className='w-1/5 flex justify-center'>
                <img src="/logo-icon-1.ico" alt="logo" className='w-15 h-15'/>
            </div>
            <div className='w-3/4 flex flex-col gap-2'>
                <div className='flex flex-wrap gap-4 justify-center sm:justify-start'>
                    <Link href={"#"} className='hover:text-sky-500 underline'>Legal</Link>
                    <Link href={"#"} className='hover:text-sky-500 underline'>Terms of Service</Link>
                    <Link href={"#"} className='hover:text-sky-500 underline'>Privacy</Link>
                    <Link href={"#"} className='hover:text-sky-500 underline'>Responsible Disclosure</Link>
                    <Link href={"#"} className='hover:text-sky-500 underline'>Trust</Link>
                    <Link href={"#"} className='hover:text-sky-500 underline'>Contact</Link>
                    <Link href={"#"} className='hover:text-sky-500 underline'>Cookie Preferences</Link>
                </div>
                <Link href={"#"} className='hover:text-sky-500 underline mb-5'>Your Privacy Choices</Link>
                <div>© Copyright 2025 Salesforce, Inc. <Link href={"#"} className='hover:text-sky-500 underline'>All rights reserved</Link>. Various trademarks held by their respective owners.</div>
            </div>
        </div>
    </footer>
  )
}