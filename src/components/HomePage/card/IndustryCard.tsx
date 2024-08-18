import React from 'react'
import Image from 'next/image'
interface IndustryCardProps {
    data?: string;
    boxStyle?: string;
    heading?: string;
    subHeading?: string;
    children?: React.ReactNode;
    style?: Object
}
const IndustryCard = ({ data, boxStyle, heading, subHeading, children, style }: IndustryCardProps) => {
    return (
        <div className={`w-[108px] h-[108px]  px-4 py-10 rounded-2xl justify-start gap-3 ${boxStyle} `} style={style} >
            {
                data && <Image
                    width={300} height={300}
                    src={data || "/assests/homepage/our_expertise.png"}
                    alt="iPhone 12 Pro"
                    quality={100}
                />
            }
            {heading && <p className='list_head'>{heading}</p>}
            {subHeading && <p className='list_content' >{subHeading}</p>}
            {children}
        </div>
    )
}

export default IndustryCard