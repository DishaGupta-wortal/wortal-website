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
                boxStyle='flex w-full overflow-hidden '
                layout='image-right'
                heading='Industries we serve'
                headingStyle="text-start"
                subHeadingStyle="text-start"

                subHead='Explore the diverse range of industries we cater to with our specialized solutions.'
            >
                <div className='pointer-events-none'>
                  <Image width={600} height={500} src="/assests/homepage/IndustriesList.png" />
                </div>
            </HeroSectionCard>

        </section >
    )
}

export default IndustrySectionTwo