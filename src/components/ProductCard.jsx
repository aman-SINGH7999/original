import Link from 'next/link'
import React from 'react'

export default function ProductCard({img="/blue-card.webp", title="Small Business", description="Sales, service, and email outreach tools in a single app."}) {
  return (
    <div className='flex pb-10 flex-col justify-between rounded-2xl overflow-hidden shadow-[0_10px_10px_rgba(0,0,0,0.25)]'>
        <img src={img} alt="" />
        <div className='flex flex-col justify-center p-5 pb-10'>
            <div className='text-xl font-semibold text-blue-950 my-5'>{title}</div>
            <div>{description}</div>
        </div>
        <Link href={"#"} className='text-blue-950 font-semibold px-5 underline hover:no-underline hover:text-blue-800'>Learn more</Link>
    </div>
  )
}
