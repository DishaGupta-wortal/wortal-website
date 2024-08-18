import React from 'react';
import HeroSectionCard from '../HomePage/HeroSectionCard';
import { TransmissionIcon } from '../icons/ReviewIcons';
import {Flex} from "antd"
import IndustryCard from '../HomePage/card/IndustryCard';
import { calc } from 'antd/es/theme/internal';

const WhyChooseUs = () => {
    const listDetails = [
        { color: '#39AAE1', heading: 'Simplified Operations', subHeading: 'Simplify your workflows with our intuitive interface.' },
        { color: '#F9B33E', heading: 'Simplified Operations', subHeading: 'Simplify your workflows with our intuitive interface.' },
        { color: '#E9522A', heading: 'Simplified Operations', subHeading: 'Simplify your workflows with our intuitive interface.' },
        { color: '#198754', heading: 'Simplified Operations', subHeading: 'Simplify your workflows with our intuitive interface.' },
    ];

    return (
        <HeroSectionCard
            boxStyle=" overflow-hidden bg-primary p-5 w-full pb-[22px] xl:pb-[0px]"
        >  <div className='flex flex-col gap-2 p-4'>
                <h2 className={'text-[#fff]'}>Why Choose Us</h2>
                <p className={`text-[#fff] font-[Inter] text-[12px] leading-relaxed font-normal`} >Our clients are our top priority, and we are dedicated to delivering the highest level of service.</p>
            </div>
            <section className="flex overflow-x-auto content-end items-end xl:self-center max-w-screen  ">
                {listDetails.map((ele, index) => (
                    <IndustryCard
                        key={index}
                        boxStyle={`flex rounded-none rounded-tr-[50px] flex-col justify-start items-start rounded-lg ${index === 0 ? ' min-w-[22rem]' : ''} min-w-[15rem] p-4`}
                        style={{ backgroundColor: ele.color ,height: `${18 + (index * 7)}rem` }} // Inline style for dynamic background color
                    >
                        <div className="flex justify-start w-[55px] h-[55px] rounded-full bg-[#fff] mb-4 p-2">
                            <TransmissionIcon />
                        </div>
                      <Flex vertical>
                      <h3 className="text-[#fff] text-left text-lg font-semibold tracking-wide leading-[37px]">{ele.heading}</h3>
                      <p className="text-[#fff] text-sm text-start font-normal leadind-[28px] mt-2">{ele.subHeading}</p>
                      </Flex>
                    </IndustryCard>
                ))}
            </section>
        </HeroSectionCard>
    );
};

export default WhyChooseUs;
