import React from 'react'
import HeroSectionCard from './HeroSectionCard.tsx'
import Image from 'next/image'
import Link from 'next/link'
const IndustrySection = () => {
    return (
        <section className='p-3 relative flex flex-col gap-4'>
            <HeroSectionCard headingStyle='text-[#ffffff]' boxStyle="overflow-hidden rounded-tl-[60px] bg-gradient-to-r from-[#093e4d] to-primary  ms-[20px] xl:ms-[40px] md:ms-[30px] rounded-tl-[60px]" subHeadingStyle='text-[#ffffff]' heading="Our Expertise" subHead="Delivering Innovative CRM Solutions Designed for Your Success and Business Growth">
                <div className='flex justify-center items-center w-4/5 mx-auto'>
                    <Image
                        width={900} height={700}
                        src="/assests/homepage/our_expertise.svg"
                        alt="iPhone 12 Pro"
                      
                    />
                </div>
            </HeroSectionCard>
        </section>

    )
}

export default IndustrySection