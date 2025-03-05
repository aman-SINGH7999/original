import Link from 'next/link'
import React from 'react'

export default function ProductCard({img="/blue-card.webp", title="Small Business", description="Sales, service, and email outreach tools in a single app.", btn}) {
  return (
    <div className='flex pb-10 flex-col justify-between text-start rounded-2xl overflow-hidden shadow-[0_10px_10px_rgba(0,0,0,0.25)]'>
        <img src={img} alt="" className={btn ? "px-20 md:px-10 lg:px-20" : ""} />
        {
          btn ? <div className='px-5 text-start'><button className='bg-blue-200 py-1 px-2 rounded-3xl'>{btn}</button></div> : null
        }
        <div className='flex flex-col justify-center px-5 pb-10'>
            <div className='text-xl font-semibold text-blue-950 my-5'>{title}</div>
            <div>{description}</div>
        </div>
        <Link href={"#"} className='text-blue-950 font-semibold px-5 underline hover:no-underline hover:text-blue-800'>Learn more</Link>
    </div>
  )
}
