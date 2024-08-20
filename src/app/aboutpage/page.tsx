import WhyChooseUs from '@/components/AboutPage/WhyChooseUs';
import React from 'react'
import Header from '@/components/header/Header';
import Footer from '@/components/Footer';
import FAQPage from '@/components/AboutPage/FAQPage';
import OurFeatures from '@/components/AboutPage/OurFeatures';
const AboutPage = () => {

    return (
        <section className="flex flex-col gap-[10px] ">
            <Header />
            <OurFeatures />
            <WhyChooseUs />
            <FAQPage />
            <Footer />

        </section>

    )
}

export default AboutPage;