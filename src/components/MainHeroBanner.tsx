import React from 'react'
import Button from "@/components/Button"
import { FaArrowRight } from "react-icons/fa";
import Image from 'next/image';
const MainHeroBanner = () => {
  return (
    <section className='mt-[3px] ms-[20px] xl:ms-[40px] md:ms-[30px] p-2 pt-0 pb-0'>
      <div className="rounded-tl-[60px] overflow-hidden bg-gradient-to-r from-[#33A0BF] to-primary  ">
        <div className='p-2  flex flex-col lg:flex-row justify-between'>
          <div className='flex flex-col gap-3 w-full xl:max-w-[520px] text-center pt-[50px] text-wrap p-3 md:px-[45px]  '>
            <h1 className='w-full text-start text-[#ffffff]'>
              Effortlessly manage sales, inventory, & employees all in one place.
            </h1>
            <p className="sub_head text-start xl:max-w-[450px]">
              Discover Wortal CRM, best CRM software and the Premier CRM Solution in India. Elevate Your Operations, Streamline Workflows, and Achieve Unprecedented Success. Sign Up Today.
            </p>
            <div className='flex gap-3 mt-3 justify-start sm:justify-center lg:justify-start'>
              <Button Text="Start Free Trial" SuffixIcon={<FaArrowRight className='font-normal' />} customStyle="bg-[#fff] text-accent font-base " />
              <Button Text="Book Demo" SuffixIcon={<FaArrowRight />} customStyle="font-base border outline-white border-white text-[#fff]" />
            </div>
          </div>
          <div className='w-full flex justify-center items-center h-none h-[300px] md:h-[400px] lg:h-[unset] relative'>
            <RightHeroMainSection />
          </div>
        </div>
      </div>
    </section>
  );
};


export default MainHeroBanner

export const RightHeroMainSection = () => {
  return (
    <div className="absolute bottom-0  ">
      {/*    md:h-[500px]   */}
      <Image
        className='z-10 w-full h-[200px] w-[200px]  sm:w-[450px] lg:h-[500px] sm:h-[300px]  md:w-[500px] lg:w-[800px] '
        width={800}
        height={600}
        src="/assests/homepage/laptop_stand_homepage.svg"
        alt="Laptop Stand"
      />
      <Image
        className='z-20 absolute left-[10%] sm:left-[100px] bottom-[10%] h-[130px] w-[100px] sm:w-[70px] sm:h-[170px] md:w-[250px] lg:w-[200px] lg:h-[250px] xl:w-[200px] xl:h-[300px]'
        width={130}
        height={120}
        src="/assests/homepage/iPhone_12_Pro.svg"
        alt="iPhone 12 Pro"
      />
    </div>
  );
};
