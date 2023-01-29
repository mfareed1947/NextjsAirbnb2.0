// import Image from 'next/image'
import React from 'react'

const SmallCard = ({ img, location, distance }) => {
    return (
        <div className='flex items-center space-x-4 m-2 mt-5 cursor-pointer rounded-xl hover:bg-gray-100
        hover:scale-105 transition transform duration-200 ease-out'>
            {/* leftside */}
            <div className='relative h-16 w-16'>
                <img
                    src={img}
                    className='rounded-lg'
                />
            </div>
            {/* Rightside */}
            <div className="">
                <h2>{location}</h2>
                <h3 className='text-gray-500'>{distance}</h3>
            </div>
        </div>
    )
}

export default SmallCard
