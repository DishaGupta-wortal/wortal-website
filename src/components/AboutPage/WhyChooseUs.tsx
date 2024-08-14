import React from 'react'
import HeroSectionCard from '../HomePage/HeroSectionCard'
import { TransmissionIcon } from '../icons/ReviewIcons'
import IndustryCard from '../HomePage/card/IndustryCard'

const WhyChooseUs = () => {
    const listDetails = [{
        data: "", heading: "", subHeading: "",
    }]


    return (
        <HeroSectionCard heading='Why Choose Us' subHead='Our clients are our top priority, and we are dedicated to delivering the highest level of service. Our clients are our top priority, and we are dedicated to delivering the highest level of service. ' >
            <section>
                {
                    listDetails.map((ele, index) => (

                        <IndustryCard boxStyle={``} >
                            <div>
                                <div >   <TransmissionIcon /> </div>

                            </div>

                        </IndustryCard>

                    ))
                }

            </section>
        </HeroSectionCard>
    )
}

export default WhyChooseUs


