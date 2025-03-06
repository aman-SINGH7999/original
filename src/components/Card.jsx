import React from 'react'

export default function Card({img, title,text, btn_text1, btn_text2}) {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center py-10 shadow-[0_5px_10px_rgba(0,0,0,0.25)] m-10 sm:m-20 rounded-2xl'>
        <div className='w-full md:w-1/2 px-5 sm:pl-5 lg:px-20 flex flex-col justify-between items-center text-center md:text-start'>
            <div className='font-semibold text-4xl lg:text-[32px] text-blue-950 lg:mb-20'>{title ? title : null}</div>
            <div className='my-4'>{text ? text : null}</div>
            <div className='flex flex-col sm:flex-row gap-4 flex-wrap mt-5 justify-center md:justify-start w-full'>
              <button className='cursor-pointer px-8 sm:w-[200px] py-3 bg-blue-700 text-white rounded-md hover:bg-blue-900'>{btn_text1 ? btn_text1 : null}</button>
              <button className='cursor-pointer px-8 sm:w-[200px] py-3 bg-white border-2  border-blue-700 rounded-md text-blue-700 hover:bg-blue-100 hover:text-blue-900 hover:border-blue-900'>{btn_text2 ? btn_text2 : null}</button>
            </div>
        </div>
        <div className='w-full md:w-1/2 flex justify-center items-center'>
            <img src={img? img : "/card-img.webp"} alt={img? img : "/card-img.webp"} className='w-9/10 lg:w-4/5 object-cover' />
        </div>
    </div>
  )
}
