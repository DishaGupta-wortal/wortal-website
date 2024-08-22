import HeroSectionCard from '@/components/HomePage/HeroSectionCard'
import React from 'react'
import { Form, Card, Flex, Input } from 'antd'
import { InfoSection } from '@/components/Footer'
import { TwitterIcon, FacebookIcon, InstagramIcon, LinkedInIcon } from '@/components/icons/SocialIcons'

const Contactpage = () => {
    return (
        <HeroSectionCard layout='image-bottom' boxStyle="bg-primary w-full p-4 flex" headingStyle='text-white' subHeadingStyle='text-white' heading='Contact Us' subHead="Get in touch with us. We're ready to assist you!" >
            <div className='flex gap-3 flex-col xl:flex-row  px-2 xl:px-[32px] w-full xl:w-3/4 mx-auto '>
                <Card className="bg-[#083441] xl:w-1/3 w-full p-3 text-start rounded-[24px]" bordered={false}  >
                    <h3 className='text-white my-3 font-semibold  ' > Contact Details </h3>
                    <InfoSection darkTheme={true} iconClassName="bg-primary " className={`flex  w-full flex-col text-white  text-start gap-3`} />
                    <Flex justify='space-around' className='w-2/4 mt-5 size-1  '>
                        <TwitterIcon />
                        <FacebookIcon />
                        <InstagramIcon />
                        <LinkedInIcon />
                    </Flex>
                </Card>  <div className='grow h-full rounded-[24px]' >

                    <Card className='h-full text-start'>      <Form labelCol={{ span: 4 }}
                        wrapperCol={{ span: 14 }}
                        layout="horizontal"

                        style={{ maxWidth: 600 }}>
                        <h3 className='text-black text-start  font-semibold ' > Send Message </h3>

                    </Form>  </Card>
                </div>
            </div>
        </HeroSectionCard >
    )
}

export default Contactpage
