import React from 'react'
import Image from 'next/image'
interface IndustryCardProps {
    data?: string;
    boxStyle?: string;
    heading?: string;
    subHeading?: string;
    children?: React.ReactNode;
}
const IndustryCard = ({ data, boxStyle, heading, subHeading, children }: IndustryCardProps) => {
    return (
        <div className={`w-[108px] h-[108px]  px-4 py-10 bg-[#fff] rounded-2xl justify-start items-center gap-3 ${boxStyle} `}  >
            <Image
                width={300} height={300}
                src={data || "/assests/homepage/our_expertise.png"}
                alt="iPhone 12 Pro"
                quality={100}
            />
            {heading && <p className='list_head'>{heading}</p>}
            {subHeading && <p className='list_content' >{subHeading}</p>}
            {children}
        </div>
    )
}

export default IndustryCard