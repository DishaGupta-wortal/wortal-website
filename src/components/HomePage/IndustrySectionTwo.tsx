import React from 'react'
import HeroSectionCard from './HeroSectionCard'
import Image from 'next/image'
const IndustrySectionTwo = () => {

    const IndustryList = [
        "https://nazmins28.github.io/img/nodejslogo.png",
        "https://nazmins28.github.io/img/React-icon.svg.png",
        "https://nazmins28.github.io/img/htmllogo.png",
        "https://nazmins28.github.io/img/nodejslogo.png",
        "https://nazmins28.github.io/img/React-icon.svg.png", "https://nazmins28.github.io/img/nodejslogo.png",
        "https://nazmins28.github.io/img/React-icon.svg.png", "https://nazmins28.github.io/img/nodejslogo.png",
        "https://nazmins28.github.io/img/React-icon.svg.png", "https://nazmins28.github.io/img/nodejslogo.png",
        "https://nazmins28.github.io/img/React-icon.svg.png", "https://nazmins28.github.io/img/nodejslogo.png",
        "https://nazmins28.github.io/img/React-icon.svg.png",
    ]
    return (
        <section className='w-full'>
            <HeroSectionCard
                boxStyle='flex justify-between w-full'
                layout='image-right'
                heading='Industries we serve'
                headingStyle="text-start"
                subHeadingStyle="text-start"

                subHead='Explore the diverse range of industries we cater to with our specialized solutions.'
            >
                <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 grid-flow-row gap-0 xl:grid-cols-5 2xl:grid-cols-7 place-items-center'>
                    {IndustryList && IndustryList.map((el, index) => (

                        <div key={index} className={`flex w-[100px] h-[100px] justify-center px-4 py-10 bg-white rounded-2xl shadow flex-col items-center gap-3 ${index % 2 == 0 ? 'self-end' : 'self-start '}`} >
                            <div key={index} className={`flex w-[50px] h-[50px]  ${index % 2 == 0 ? 'self-end' : 'self-start '}`} >
                                <Image src={el} width={50} height={50} />
                            </div>  </div>
                    ))}
                </div>
            </HeroSectionCard>

        </section >
    )
}

export default IndustrySectionTwo