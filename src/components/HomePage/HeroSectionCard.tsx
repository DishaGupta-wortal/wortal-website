import React, { ReactNode } from 'react';
import Image from 'next/image';

interface HeroSectionCardProps {
  layout?: string;
  heading?: string;
  subHead?: string;
  headingStyle?: string;
  subHeadingStyle?: string;
  images?: { src: string; alt?: string }[];
  boxHeight?: string;
  boxStyle?: string;
  children?: ReactNode;
  imageStyling?: string;
}

const HeroSectionCard = ({ layout, heading, subHead, children, headingStyle, subHeadingStyle, images, boxHeight, boxStyle, imageStyling }: HeroSectionCardProps) => {
  const isImageOnRight = layout === 'image-right';
  const isImageOnBottom = layout === 'image-bottom';

  return (
    <section className={`${boxHeight || ''}   text-center  ${boxStyle} `} >
      <div className={`flex ${isImageOnRight ? 'xl:flex-row justify-center items-center flex-col w-full ' : 'flex-col'}  gap-2 p-5  `}>
        <div className='flex flex-col gap-2 p-4 '>
          {heading && <h2 className={headingStyle}>{heading}</h2>}
          {subHead && <p className={`${subHeadingStyle} font-[Inter] text-[12px] leading-relaxed font-normal`} >{subHead}</p>}
          {
            images && images.length > 0 && images.map((el, index) => <>
              <div className={`w-[200px] h-[200px] ${imageStyling} `} >
                <Image src={el.src} width={300} height={300} />
              </div>
            </>)
          }
        </div>
        {children}
      </div>
    </section>
  );
};

export default HeroSectionCard;