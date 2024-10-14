import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-3xl text-center pt-10 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Welcome to UrbanThreads, where fashion meets urban style. Born from a passion for creativity and individuality,
            we are dedicated to offering modern, high-quality clothing that inspires confidence and self-expression.
            Our mission is to provide unique, trendsetting designs that combine comfort, style, and versatility for every aspect of your life.</p>
          <p>At UrbanThreads, we believe fashion is more than just clothing—it's a way to showcase your personality and make a statement.
            That's why we carefully curate collections that reflect the latest trends while staying true to timeless essentials,
            ensuring there's something for everyone.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>To empower individuals to express their unique style with confidence through innovative, high-quality fashion.</p>
          <b className='text-gray-800'>Our Values</b>
          <div className='ml-5'>
            <ol className='list-disc'>
              <li>Quality: We're committed to delivering well-crafted garments that last.</li>
              <li>Creativity: We celebrate individuality through fresh, bold designs.</li>
              <li>Sustainability: We strive to make fashion with a conscious approach to the environment and ethical production practices.</li>
            </ol>
          </div>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance: </b>
          <p className='text-gray-600'>At UrbanThreads, quality is our top priority.
            We meticulously select premium fabrics and materials to ensure that every piece in our collection is durable,
            comfortable, and timeless. Our garments are crafted to meet the highest standards, so you can feel confident in every item you wear.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience: </b>
          <p className='text-gray-600'>We understand that life moves fast, and shopping should be easy.
            That's why we offer a seamless online shopping experience with quick, reliable delivery, easy returns, and hassle-free exchanges.
            Whether you're at home or on the go, UrbanThreads is designed to fit effortlessly into your lifestyle.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service: </b>
          <p className='text-gray-600'>We pride ourselves on going above and beyond to provide a personalized, supportive experience for every customer.
            Our friendly, knowledgeable team is always here to help, whether you have a question about sizing or need assistance with your order.
            Your satisfaction is our priority, and we're committed to making every interaction with us a positive one.</p>
        </div>
      </div>

      <NewsletterBox />

    </div>
  )
}

export default About
