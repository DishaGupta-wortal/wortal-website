"use client"
import React, { useState } from 'react';
import HeroSectionCard from '../HomePage/HeroSectionCard';
import Image from 'next/image';
import { TransmissionIcon } from '../icons/ReviewIcons';
const OurFeatures = () => {
    const [activeFeature, setActiveFeature] = useState(0);

    const data = [
        {
            head: "Leads & Opportunity",
            desc: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts.',
            image: "/assests/homepage/laptop_stand_homepage.svg",
        },
        {
            head: "Built-in Call Dialer",
            desc: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts.',
            image: "/assests/homepage/laptop_stand_homepage.svg",
        },
        {
            head: "Calling App",
            desc: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts.',
            image: "/assests/homepage/laptop_stand_homepage.svg",
        },
        {
            head: "Quotation",
            desc: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts.',
            image: "/assests/homepage/laptop_stand_homepage.svg",
        },
        {
            head: "Contact Centralized",
            desc: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts.',
            image: "/assests/homepage/laptop_stand_homepage.svg",
        },
    ];

    return (
        <HeroSectionCard heading="Our Features" subHead="Enhance Your Experience with Advanced Features" boxStyle='w-10/12 mx-auto'>
            <div className="flex justify-between items-center font-[Inter] h-[400px]">
                <div className="w-1/2 h-full flex items-center justify-center bg-primary rounded-lg shadow-lg p-8 ">
                    <Image
                        width={500}
                        height={500}
                        src={data[activeFeature].image}
                        alt={data[activeFeature].head}
                        className="max-w-full max-h-96 object-contain"
                    />
                </div>

                <div className="w-1/2 flex flex-col text-start space-y-4 pl-8 text-[Inter]">
                    {data.map((feature, index) => (
                        <div
                            key={index}
                            className={`p-3 ps-5 flex gap-4 justify-start items-start cursor-pointer ${activeFeature === index ? 'rounded-lg bg-accent' : 'bg-[#ffffff] rounded-full'
                                }`}
                            onMouseEnter={() => setActiveFeature(index)}
                        >


                            <div className={`flex justify-center items-center ${activeFeature === index ? 'text-[#fff]' : 'text-primary'}`}>
                                <TransmissionIcon fillColor={activeFeature === index ? '#fff' : ''} />
                            </div>
                            <div>   <h3 className={`tracking-tight text-lg font-semibold ${activeFeature === index ? 'text-[#fff]' : ''} `}>{feature.head}</h3>
                                <div className={` ${activeFeature === index ? 'text-[#fff] block' : 'hidden'} leading-relaxed`}>
                                    <p className={`text-sm text-gray-600 ${activeFeature === index ? 'text-[#fff]' : ''} `}>{feature.desc}</p>
                                    <p className='' >View More</p>
                                </div>       </div>                 </div>
                    ))}
                </div>
            </div>
        </HeroSectionCard>
    );
};

export default OurFeatures;
