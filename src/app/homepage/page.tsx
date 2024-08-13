import MainHeroBanner from "@/components/MainHeroBanner"
import IndustrySection from "@/components/HomePage/IndustrySection"
import HeroSectionCard from "@/components/HomePage/HeroSectionCard"
import MySlider from "@/components/slider/MySlider"
import IndustrySectionTwo from "@/components/HomePage/IndustrySectionTwo"
import ReviewSlider from "@/components/slider/ReviewSlider"
import ExploreProduct from "@/components/HomePage/ExploreProduct"
const HomePage = () => {
  return (
    <div className="flex flex-col gap-8 w-[100vw]">
      <MainHeroBanner />
      <IndustrySection />
      <HeroSectionCard boxStyle="ms-0 w-[calc(100% + 20px)] rounded-none md:ms-0 xl:ms-0 rounded-tl-[0px]" headingStyle='text-[#333333]' boxHeight=' bg-[#fff]' subHeadingStyle='text-[#84849a]'
        heading="Trusted By"
        subHead="Our clients are our top priority, and we are dedicated to delivering the highest level of service."
      > <div className=" h-[120px] mt-3 w-full">  <MySlider /> </div>  </HeroSectionCard>
        <ReviewSlider  />
        <ExploreProduct />
   {/* <IndustrySectionTwo /> */}
    </div>
  )
}

export default HomePage