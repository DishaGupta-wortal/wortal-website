import React from 'react'
import Image from 'next/image'
import { FaArrowRight } from "react-icons/fa";
import HeroSectionCard from '../HeroSectionCard';
import Button from '../../Button'
const JoinUsToday = () => {
    return (
        <HeroSectionCard boxStyle='overflow-hidden bg-[#fff]' >
            <section className='p-3  flex flex-col-reverse xl:flex-row  ms-[20px] xl:ms-[40px] md:ms-[30px]   xl:h-[280px]'>
                <div className='justify-center flex align-center bg-[#083441] w-full xl:w-2/6 rounded-tl-0 h-[350px] md:h-[280px] xl:h-[unset] xl:rounded-tl-[60px] relative text-center'>
                    <Image className='blended scale-150 absolute bottom-[63px]' width={150} height={250} src="/assests/homepage/join_us_todday_girl.png"
                    />
                </div>
                <div className=' bg-[#093e4d] w-full xl:w-4/6 rounded-tl-[60px] xl:rounded-tl-[0px] h-[360px] xl:h-[unset] flex justify-center flex-col pl-[70px]'   >
                    <div className=' self-start'>
                        <h2 className='text-[#ffffff] wrap  text-[30px] leading-loose text-wrap' style={{ maxWidth: '80%' }}>Join Us Today & Boost Your Business
                            With Wortal CRM!</h2> </div>

                    <div className='flex gap-3 mt-3 flex-col sm:flex-row pb-[10px] sm:pb-[0px] w-1/2'>
                        <Button Text="Start Free Trial " SuffixIcon={<FaArrowRight className='font-normal' />} customStyle="bg-[#33a0bf] text-[#fff] font-base" />
                        <Button Text="Take Free Demo" SuffixIcon={<FaArrowRight />} customStyle="font-base border oultine-white border-white text-[#fff]" />
                    </div>   </div>
            </section >
        </HeroSectionCard>)
}

export default JoinUsToday