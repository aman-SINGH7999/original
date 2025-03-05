import React from 'react'
import ProductCard from './ProductCard'

export default function SkillsSection() {
  return (
    <div className='flex flex-col items-center text-center py-10'>
        <div className='font-semibold text-4xl lg:text-[32px] md:w-[60vw] text-blue-950'>Learn valuable skills for free, with Trailhead.</div>
        <div className='md:w-[60vw]'>Follow guided learning paths and get hands-on to learn Salesforce, digital, and soft skills from anywhere.</div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 lg:p-20 p-10'>
            <ProductCard img="/blue-circle.webp" title="Small Business" description="Sales, service, and email outreach tools in a single app." btn="module" />
            <ProductCard img="/user-circle.webp" title="Small Business" description="Sales, service, and email outreach tools in a single app." btn="module" />
            <ProductCard img="/mobile-circle.webp" title="Small Business" description="Sales, service, and email outreach tools in a single app." btn="module" />
        </div>
        <button className='w-[90vw] sm:w-auto cursor-pointer px-8 mx-2 py-3 bg-white border-2 border-blue-700 rounded-md text-blue-700 hover:bg-blue-100 hover:text-blue-900 hover:border-blue-900'>Learn for free</button>
    </div>
  )
}
