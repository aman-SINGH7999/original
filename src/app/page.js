import Brands from "@/components/Brands";
import Hero from "@/components/Hero";
import ProductSection from "@/components/ProductSection";
import SkillsSection from "@/components/SkillsSection";
import Image from "next/image";

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
    </div>
  );
}
