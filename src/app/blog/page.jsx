import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div className='w-10/11 md:w-4/5 lg:w-8/11 mx-auto'>
        <div className='flex justify-center items-center text-center h-[500px] w-full text-6xl font-semibold bg-gradient-to-l  from-cyan-400 to-blue-800'>Open Source DAM ( Digital Asset Management )</div>
        <div className='flex flex-col gap-10 mt-15'>
            <div className='flex flex-col justify-center'>
                <div className='flex justify-between border-b-[1px] border-gray-300'>
                    <div className='font-semibold text-gray-500 text-2xl'>Latest</div>
                    <button className='cursor-pointer font-semibold text-blue-800 text-sm'>View All</button>
                </div>
                <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-10 my-10'> 
                <Card 
                        bgColor="bg-cyan-600"
                        title="MCP Servers: The New AI Ecosystem"
                        author={{name:"Travish Tulla", profileImg:"/user-circle.webp",postedAt:"21 March 2025"}}
                    />
                    <Card 
                        bgColor="bg-blue-600"
                        title="MCP Servers: The New AI Ecosystem"
                        author={{name:"Travish Tulla", profileImg:"/user-circle.webp",postedAt:"21 March 2025"}}
                    />
                    <Card 
                        bgColor="bg-red-400"
                        title="MCP Servers: The New AI Ecosystem"
                        author={{name:"Travish Tulla", profileImg:"/user-circle.webp",postedAt:"21 March 2025"}}
                    />
                    <Card 
                        bgColor="bg-green-700"
                        title="MCP Servers: The New AI Ecosystem"
                        author={{name:"Travish Tulla", profileImg:"/user-circle.webp",postedAt:"21 March 2025"}}
                    />
                    <Card 
                        bgColor="bg-orange-800"
                        title="MCP Servers: The New AI Ecosystem"
                        author={{name:"Travish Tulla", profileImg:"/user-circle.webp",postedAt:"21 March 2025"}}
                    />
                    <Card 
                        bgColor="bg-black"
                        title="MCP Servers: The New AI Ecosystem"
                        author={{name:"Travish Tulla", profileImg:"/user-circle.webp",postedAt:"21 March 2025"}}
                    />
                </div>
            </div>
            <div>
                <div className='flex justify-between border-b-[1px] border-gray-300'>
                    <div className='font-semibold text-gray-500 text-2xl'>Articles</div>
                    <button className='cursor-pointer font-semibold text-blue-800 text-sm'>View All</button>
                </div>
                <div className='grid grid-cols-3 gap-10 my-10'> 
                <Card 
                        bgColor="bg-gray-600"
                        title="MCP Servers: The New AI Ecosystem"
                        author={{name:"Travish Tulla", profileImg:"/user-circle.webp",postedAt:"21 March 2025"}}
                    />
                    <Card 
                        bgColor="bg-green-800"
                        title="MCP Servers: The New AI Ecosystem"
                        author={{name:"Travish Tulla", profileImg:"/user-circle.webp",postedAt:"21 March 2025"}}
                    />
                    <Card 
                        bgColor="bg-cyan-900"
                        title="MCP Servers: The New AI Ecosystem"
                        author={{name:"Travish Tulla", profileImg:"/user-circle.webp",postedAt:"21 March 2025"}}
                    />
                    <Card 
                        bgColor="bg-yellow-900"
                        title="MCP Servers: The New AI Ecosystem"
                        author={{name:"Travish Tulla", profileImg:"/user-circle.webp",postedAt:"21 March 2025"}}
                    />
                    <Card 
                        bgColor="bg-yellow-600"
                        title="MCP Servers: The New AI Ecosystem"
                        author={{name:"Travish Tulla", profileImg:"/user-circle.webp",postedAt:"21 March 2025"}}
                    />
                    <Card 
                        bgColor="bg-blue-400"
                        title="MCP Servers: The New AI Ecosystem"
                        author={{name:"Travish Tulla", profileImg:"/user-circle.webp",postedAt:"21 March 2025"}}
                    />
                </div>
            </div>
            <div>
                <div className='flex justify-between border-b-[1px] border-gray-300'>
                    <div className='font-semibold text-gray-500 text-2xl'>Dev</div>
                    <button className='cursor-pointer font-semibold text-blue-800 text-sm'>View All</button>
                </div>
                <div className='grid grid-cols-3 gap-10 my-10'> 
                    <Card 
                        bgColor="bg-gray-800"
                        title="MCP Servers: The New AI Ecosystem"
                        author={{name:"Travish Tulla", profileImg:"/user-circle.webp",postedAt:"21 March 2025"}}
                    />
                    <Card 
                        bgColor="bg-cyan-600"
                        title="MCP Servers: The New AI Ecosystem"
                        author={{name:"Travish Tulla", profileImg:"/user-circle.webp",postedAt:"21 March 2025"}}
                    />
                    <Card 
                        bgColor="bg-pink-600"
                        title="MCP Servers: The New AI Ecosystem"
                        author={{name:"Travish Tulla", profileImg:"/user-circle.webp",postedAt:"21 March 2025"}}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}



const Card = ({bgColor="bg-cyan-600",title="MCP Servers: The New AI Ecosystem",author={name:"Travish Tulla", profileImg:"/user-circle.webp",postedAt:"21 March 2025"}})=>{
    return (
        <Link  href={"#"} className='max-w-[400px] shadow-[0px_0px_30px_rgba(0,0,0,0.2)] mx-auto'>
            <div className={`h-[250px] p-10 text-white flex justify-center items-center text-3xl font-semibold ${bgColor}`}>{title}</div>
            <div className='flex gap-5 p-5 items-center'>
                <div><img src={author.profileImg} alt={author?.name} className='h-16 w-16' /></div>
                <div className=''>
                    <div className='font-semibold'>{author?.name}</div>
                    <div className='text-gray-700 text-sm'>{author?.postedAt}</div>
                </div>
            </div>
        </Link>
    )
}