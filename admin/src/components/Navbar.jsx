import React from 'react'
import { assets } from '../assets/assets'

const Navbar = ({ setToken }) => {
    return (
        <div className='flex items-center py-8 px-[4%] justify-between'>
            <img className='w-[max(15%,150px)]' src={assets.logo} alt="" />
            <button onClick={() => setToken('')} className='bg-transparent text-black px-5 py-2 sm:px-7 border border-black sm:py-2 rounded-full text-xs sm:text-sm hover:bg-black hover:text-white transition-all duration-300'>Logout</button>
        </div>
    )
}

export default Navbar
