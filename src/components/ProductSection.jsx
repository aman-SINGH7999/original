import React from 'react'
import ProductCard from './ProductCard'

export default function ProductSection() {
  return (
    <div className='flex flex-col justify-center items-center px-10 pt-10'>
        <h2 className='font-semibold text-4xl lg:text-5xl text-blue-950 py-10 md:w-3/4'>Learn what Salesforce products can do for you.</h2>
        <div className='grid gap-10 w-[90vw] py-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
            <ProductCard img="/blue-card.webp" title="Small Business" description="Sales, service, and email outreach tools in a single app."/>
            <ProductCard img="/green-card.webp" title="Sales Cloud" description="Close more deals and speed up growth with the #1 CRM."/>
            <ProductCard img="/red-card.webp" title="Service Cloud" description="Make customers happy faster and build loyalty with Service Cloud."/>
            <ProductCard img="/orange-card.webp" title="Marketing Cloud" description="Build customer relationships for life with data-first digital marketing."/>
        </div>
        <button className='cursor-pointer w-[90vw] sm:w-auto px-10 mx-2 py-3 bg-white border-2 border-blue-700 rounded-md text-blue-700 hover:bg-blue-100 hover:text-blue-900 hover:border-blue-900'>View all our Products</button>
    </div>
  )
}
