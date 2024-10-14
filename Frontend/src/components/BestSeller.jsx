import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {

    const { products } = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        const bestProduct = products.filter((item) => (item.bestseller));
        setBestSeller(bestProduct.slice(14, 19))

    }, [products])

    return (
        <div className='my-10'>
            <div className='text-center text-3xl py-8'>
                <Title text1={'BEST'} text2={'SELLER'} />
                <p className='w-3/4 m-auto text-sm sm:text-sm md:text-base text-gray-600'>
                    Whether you're looking for everyday essentials or eye-catching fashion pieces,
                    our bestsellers are tried, tested, and adored by fashion lovers everywhere.
                    Don't miss out on the trends that are defining the season.
                </p>
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-4 gap-y-6'>
                {
                    bestSeller.map((item, index) => (
                        <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
                    ))
                }
            </div>

        </div>
    )
}

export default BestSeller
