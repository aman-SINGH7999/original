
import React from 'react'

export default function Hero() {
  return (
    <div className='flex flex-col items-center  lg:flex-row justify-center w-full relative'>
        <div className='flex flex-col justify-between w-10/11 sm:w-4/5 lg:w-1/2 md:p-20 py-10'>
            <h2 className='text-5xl lg:text-[52px] xl:text-6xl font-semibold mb-5'>Try Salesforce Starter Suite for free.</h2>
            <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eligendi, saepe eius totam debitis voluptatum odit consequuntur dolorum quo laudantium dolorem,</p>
            <div className='flex flex-col sm:flex-row gap-4 flex-wrap mt-5 w-10/11'>
              <button className='cursor-pointer px-8 mx-2 py-3 bg-blue-700 text-white rounded-md hover:bg-blue-900'>Start Free Trial</button>
              <button className='cursor-pointer px-8 mx-2 py-3 bg-white border-2 border-blue-700 rounded-md text-blue-700 hover:bg-blue-100 hover:text-blue-900 hover:border-blue-900'>Watch Demo</button>
            </div>
        </div>
        <div className='w-full sm:w-4/5 lg:w-1/2 h-full flex items-center justify-center lg:justify-start'>
            <div className='bg-sky-200 w-9/10 aspect-video rounded-2xl'>hi</div>
        </div>
        <img src="/hero-tree.jpg" alt="hero-tree" className='absolute -z-10 w-full lg:w-1/2 right-0 h-full object-cover'/>
    </div>
  )
}
