import React from 'react'

const LargeCard = ({ img, title, desc, btnText }) => {
    return (
        <div className='relative py-16 cursor-pointer'>
            <div className="relative h-96 min-w-[300px]">
                <img src={img} alt="" className='w-full h-full object-cover rounded-2xl' />
            </div>
            <div className="absolute top-32 left-12">
                <h3 className='text-4xl mb-3 w-64 md:w-full'>{title}</h3>
                <p className=''>{desc}</p>
                <button className='text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5'>{btnText}</button>
            </div>
        </div>
    )
}

export default LargeCard
