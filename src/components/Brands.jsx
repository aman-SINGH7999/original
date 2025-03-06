import React from 'react'

export default function Brands() {
  return (
    <div>
        <div className='flex flex-col items-center px-20 text-center'>
            <div className='font-semibold text-4xl lg:text-[32px] md:w-[60vw] text-blue-950 py-20'>Over 150,000 companies, both big and small, are growing their business with Salesforce.</div>
            <button className='w-[90vw] sm:w-auto cursor-pointer px-8 mx-2 py-3 bg-white border-2 border-blue-700 rounded-md text-blue-700 hover:bg-blue-100 hover:text-blue-900 hover:border-blue-900'>View all customers</button>
            <div className='flex flex-wrap items-center justify-center gap-10 py-10 mt-5'>
                <BrandCard logo={"/balaji.webp"}/>
                <BrandCard logo={"/flame.webp"}/>
                <BrandCard logo={"/genpact.webp"}/>
                <BrandCard logo={"/godrej.webp"}/>
                <BrandCard logo={"/mahindra.webp"}/>
                <BrandCard logo={"/pepe.webp"}/>
                <BrandCard logo={"/razor.webp"}/>
                <BrandCard logo={"/secutech.webp"}/>
            </div>
        </div>
        <div className="">
            <img src="/taddy.webp" alt="tree" className="rounded-b-full" />
        </div>
    </div>
  )
}

const BrandCard = ({logo})=>{
    return (
        <div className='w-[200px] h-[100px] px-5 shadow-[0_5px_10px_rgba(0,0,0,0.25)] rounded-lg flex justify-center items-center'>
            <img src={logo} alt={logo} />
        </div>
    )
}