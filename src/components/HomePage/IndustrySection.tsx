import React from 'react'
import HeroSectionCard from './HeroSectionCard.tsx'
import Image from 'next/image'
import Link from 'next/link'
const IndustrySection = () => {
    return (
        <section className='p-3 relative flex flex-col gap-4'>
            <HeroSectionCard headingStyle='text-[#ffffff]' boxStyle="rounded-tl-[60px] bg-gradient-to-r from-[#093e4d] to-primary  ms-[20px] xl:ms-[40px] md:ms-[30px] rounded-tl-[60px]" subHeadingStyle='text-[#ffffff]' heading="Our Expertise" subHead="Delivering Innovative CRM Solutions Designed for Your Success and Business Growth">
                <div className='flex justify-center items--center'>
                    <Image
                        width={700} height={700}
                        src="/assests/homepage/our_expertise.png"
                        alt="iPhone 12 Pro"
                        quality={100}
                    />
                </div>
            </HeroSectionCard>
        </section>

    )
}

export default IndustrySection