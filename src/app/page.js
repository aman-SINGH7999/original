import Brands from "@/components/Brands";
import Card from "@/components/Card";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import ProductSection from "@/components/ProductSection";
import SkillsSection from "@/components/SkillsSection";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <ProductSection />
      <div className="relative h-[190px] sm:h-[35vw] md:h-[30vw] lg:h-[20vw]">
        <img src="/hill-img.webp" alt="tree" className="absolute lg:-top-40 -z-10" />
      </div>
      
      <div className="flex flex-col items-center text-center md:w-[60vw] mx-auto p-10">
        <div className="font-semibold text-4xl lg:text-[40px] text-blue-950">We bring companies and customers together</div>
        <div className="py-7 md:w-3/4">Salesforce is the world’s most trusted customer relationship management (CRM) platform. We help your marketing, sales, commerce, service and IT teams work as one from anywhere — so you can keep your customers happy everywhere.</div>
        <div className='flex flex-col sm:flex-row gap-4 flex-wrap mt-5'>
          <button className='w-[90vw] sm:w-auto cursor-pointer px-8 mx-2 py-3 bg-blue-700 text-white rounded-md hover:bg-blue-900'>Start Free Trial</button>
          <button className='w-[90vw] sm:w-auto cursor-pointer px-8 mx-2 py-3 bg-white border-2 border-blue-700 rounded-md text-blue-700 hover:bg-blue-100 hover:text-blue-900 hover:border-blue-900'>Watch Demo</button>
        </div>
      </div>

      <SkillsSection />
      <Brands />
      <Card 
          img={"/card-img.webp"}
          title={"Try Salesforce for free. No credit card required, no software to install."} 
          btn_text1={"Start Free Trial"} 
          btn_text2={"Watch Demo"} 
      />

      <div className='flex flex-col items-center text-center py-10 m-10 sm:m-20'>
          <div className='font-semibold text-4xl lg:text-[32px] md:w-[60vw] text-blue-950'>How can we help grow your business?</div>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-10 lg:p-20 p-10'>
              <Adviser img={"/blue-boy.webp"} link_text={"Sell faster"} />
              <Adviser img={"/green-boy.webp"} link_text={"Close more deals"} />
              <Adviser img={"/red-boy.webp"} link_text={"Scale service"} />
              <Adviser img={"/orange-boy.webp"} link_text={"Build customer relationship"} />
          </div>
      </div>

      <div className='flex flex-col items-center text-center mx-10 sm:mx-20'>
          <div className='font-semibold text-4xl lg:text-[32px] md:w-[60vw] text-blue-950'>Our technology helps people create better jobs, lives, companies, and communities.</div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-10 lg:p-20 p-10'>
              <Adviser img={"/dolor.webp"} text={"Technology given for free or discounted"} />
              <Adviser img={"/fortune1.webp"} text={"Fortune 100 Best Companies to Work For 2024 (16 years in a row)"} />
              <Adviser img={"/fortune2.webp"} text={"Fortune World’s Most Admired Companies 2024"} />
          </div>
      </div>
      <div className="">
        <img src="/instin.webp" alt="tree" className=" rounded-b-full" />
      </div>

      <Card 
          img={"/boy-girl.webp"}
          title={"Questions? We’ll put you on the right path."} 
          text={"Ask about Salesforce products, pricing, implementation, or anything else. Our highly trained reps are standing by, ready to help."} 
          btn_text1={"Contect us"}
          btn_text2={"Editions & pricing"}
      />

    </div>
  );
}


const Adviser = ({img="/blue-boy.webp", link_text, text})=>{
    return (
      <div className="text-start">
        <img src={img} alt={img} className="mb-5" />
        <Link href={"#"} className='text-blue-950 font-semibold underline hover:no-underline hover:text-blue-800'>{link_text ? link_text : null}</Link>
        <div className="text-sm">{text ? text : null}</div>
      </div>
    )
}