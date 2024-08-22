import React from 'react'
import MySlider from "@/components/slider/MySlider"
import HeroSectionCard from '../HomePage/HeroSectionCard'
import Image from 'next/image'
import styles from "./reviewSlider.module.scss"
import { ReviewIconsCommas, ReviewIconsStar, LeftMoveButton, RightMoveButton } from '../icons/ReviewIcons'
import { Flex } from 'antd'
const ReviewSlider = () => {
    const sliderSettings = {
        // infinite: true,
        // autoplay: true,
        // speed: 1000,
        // autoplaySpeed: 3000,
        slidesToShow: 1,
        swipeToSlide: true,
        initialSlide: 1,
        nextArrow: <RightMoveButton />,
        prevArrow: <LeftMoveButton />
    };
    return (
        <HeroSectionCard boxStyle='bg-[#fff] overflow-hidden' heading='Customer Review' subHead='Choose Wortal CRM for a seamless, efficient, and effective solution to your CRM needs.'>
            <MySlider className={styles.reviewSliderParent} slider_settings={sliderSettings}>
                {Array(5).fill(null).map((el, index) => (
                    <CustomerReview key={index} />
                ))}
            </MySlider>
        </HeroSectionCard>
    )
}

export default ReviewSlider

export const CustomerReview = () => {
    return (
        <section className="container w-2/3 mx-auto py-5">
            <div className=" text-center w-2/3 mx-auto flex flex-col justify-center items-center">
                <div className="border-[#D6DCE0] border rounded-[20px] flex flex-col justify-center items-center p-8">
                    <ReviewIconsCommas />
                    <p className="sub_head text-[#84849A] text-center text-xs mb-4 leading-[22px] font-[Inter]">
                        {"Wortal CRM is a game-changer for businesses. It seamlessly integrates Sales Management, Inventory Management, Employee Management, and Role & User Management into a single, efficient platform. It's the best CRM software we've ever used!"}
                    </p>
                    <p className="text-sm font-medium font-[Inter]">- Savannah Nguyen</p>
                    <Flex>
                        {Array(5).fill(null).map((el, index) => (
                            <ReviewIconsStar key={index} />
                        ))}
                    </Flex>
                </div>
                <div className="aspect-square overflow-hidden mt-4">
                    <Image
                        className="rounded-lg"
                        alt="Profile"
                        width={80}
                        height={80}
                        objectFit="contain"
                        src="/assests/homepage/join_us_todday_girl.png"
                    />

                </div>
            </div>
        </section>
    );
};

