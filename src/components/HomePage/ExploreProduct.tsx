"use client"
import React, { useState, useRef, useEffect } from 'react';
import HeroSectionCard from './HeroSectionCard';
import Image from 'next/image';
import { PiHandCoinsLight } from "react-icons/pi";
import { FaArrowRight } from "react-icons/fa";
import Button from "@/components/Button";
import { Tag } from "antd"
const ExploreProduct = () => {
  const [selectedItem, setSelectedItem] = useState({
    id: 1,
    name: "Leads",
    image: "/assests/homepage/laptop_stand_homepage.svg",
    detail: "Discover Wortal CRM, best CRM software and the Premier CRM Solution in India. Elevate Your Operations, Streamline Workflows, and Achieve Unprecedented Success. Sign Up Today",
  });

  const services = [
    {
      id: 1,
      name: "Leads",
      image: "/assests/homepage/laptop_stand_homepage.svg",
      detail: "Discover Wortal CRM, best CRM software and the Premier CRM Solution in India. Elevate Your Operations, Streamline Workflows, and Achieve Unprecedented Success. Sign Up Today",
    },
    {
      id: 2,
      name: "Leasdads",
      image: "/wortal_logo_1.png",
      detail: "Discover Wortal CRM, best CRM software and the Premier CRM Solution in India. Elevate Your Operations, Streamline Workflows, and Achieve Unprecedented Success. Sign Up Today",
    },
    {
      id: 3,
      name: "Leaasdads",
      image: "/assests/homepage/laptop_stand_homepage.svg",
      detail: "Discover Wortal CRM, best CRM software and the Premier CRM Solution in India. Elevate Your Operations, Streamline Workflows, and Achieve Unprecedented Success. Sign Up Today",
    },
    {
      id: 4,
      name: "Leasdasdads",
      image: "/wortal_logo_1.png",
      detail: "Discover Wortal CRM, best CRM software and the Premier CRM Solution in India. Elevate Your Operations, Streamline Workflows, and Achieve Unprecedented Success. Sign Up Today",
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);


  return (
    <HeroSectionCard boxStyle='flex justify-between w-11/12 xl:w-4/5 mx-auto overflow-hidden' heading='Explore Our Product' subHead='Discover Wortal CRM, best CRM software and the Premier CRM Solution in India. Elevate Your Operations, Streamline Workflows, and Achieve Unprecedented Success. Sign Up Today'>
      <div ref={containerRef} className='block xl:hidden p-5  border-[#D6DCE0] '>
        <div className='flex gap-4 items-start flex-wrap'>
          {services.map((el, index) => (
            <Tag color={`${selectedItem.id === el.id ? '#00B4D9' : ''}`} icon={<PiHandCoinsLight className={`size-[26px] ${selectedItem.id === el.id ? 'text-[#fff]' : 'text-[#737380]'} `} />}
              className={`flex cursor-pointer justify-start gap-2 py-1 px-2 items-center rounded-full ${selectedItem.id === el.id ? 'text-[#00B4D9]' : ''}`}
              onClick={() => setSelectedItem(el)}
              key={el.id}
            >{el?.name || "Tag"}
            </Tag>
          ))}
        </div>
      </div>

      <div className='flex h-[600px] border border-[#D6DCE0] rounded-xl bg-[#fff] radius-[22px]'>
        <div ref={containerRef} className='border-r hidden xl:block  border-[#D6DCE0] overflow-y-auto h-[600px] items-start w-7/12'>
          <div className='p-5 pe-0 ps-9 flex flex-col gap-3 items-start'>
            {services.map((el, index) => (
              <div

                className={`flex w-full cursor-pointer justify-between items-center ${selectedItem.id === el.id ? 'text-[#00B4D9]' : ''}`}
                onClick={() => setSelectedItem(el)}
                key={el.id}
              >
                <div className='flex gap-3 items-center'>
                  <PiHandCoinsLight className='size-[26px]' style={{color:'#737380'}} />
                  <p className={`card list_content font-normal ${selectedItem.id === el.id ? 'text-[#00B4D9]' : 'text-[#1C1E1F]'} `}>{el.name}</p>
                </div>
                <div className={`${selectedItem.id === el.id ? 'border-2' : ''} h-[1cm] rounded border-[#00B4D9]`} />
              </div>
            ))}
          </div>
        </div>
        <div className='h-full p-5 ps-9 font-[Inter]'>
          <div className='flex flex-col gap-3'>
            <div className='w-full h-[1.5cm] flex justify-between items-start'>
              <h2 className='text-4xl' >{selectedItem?.name}</h2>
              <Button PrefixIcon={<FaArrowRight className='text-[#fff]' />} className='border text-[#fff] bg-primary' />
            </div>
            <p className='list_content text-start'>
              {selectedItem?.detail}
            </p>
            {selectedItem && (
              <div className='relative height-full'>
                <div className='absolute inset-0 w-full h-[auto]'>
                  <Image
                    src={selectedItem?.image}
                    quality={10}
                    width={600}
                    height={100}
                    
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </HeroSectionCard>
  );
};

export default ExploreProduct;
