import React from 'react'
import Image from 'next/image'
const IndustryCard = ({ data }) => {
    return (
        <div className='w-[108px] h-[108px]  px-4 py-10 bg-[#fff] rounded-2xl justify-start items-center gap-3'  >
            <Image
                width={300} height={300}
                src={data || "/assests/homepage/our_expertise.png"}
                alt="iPhone 12 Pro"
                quality={100}
            />
        </div>
    )
}

export default IndustryCard