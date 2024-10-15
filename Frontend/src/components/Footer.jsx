import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr_] gap-14 my-10 mt-40 text-sm'>
                <div>
                    <img src={assets.logo} className='mb-5 w-40 h-auto' alt="" />
                    <p className='w-full md:w-2/3 text-gray-600'>
                        Explore our collections and elevate your wardrobe with high-quality, trendsetting designs.
                        From everyday essentials to bold statement pieces, we've got the looks you'll love. Stay connected and shop with confidence!
                    </p>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>1800-222-9999</li>
                        <li>customercare@urbanthreads.com</li>
                    </ul>
                </div>

            </div>

            <div>
                <hr />
                <p className='py-5 text-sm text-center'>©2024 urbanthreads.vercel.app - All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer
