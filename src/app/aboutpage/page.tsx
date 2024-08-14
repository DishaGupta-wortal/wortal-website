import WhyChooseUs from '@/components/AboutPage/WhyChooseUs';
import React from 'react'
import Header from '@/components/header/Header';
import Footer from '@/components/Footer';
import FAQPage from '@/components/AboutPage/FAQPage';
const AboutPage = () => {

    return (
        <section className="flex flex-col ">
            <Header />
            <FAQPage />
            <Footer />
            {/* <WhyChooseUs /> */}
        </section>

    )
}

export default AboutPage;