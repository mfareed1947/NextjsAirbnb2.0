import React from 'react'

const MediumCard = ({ img, title }) => {
    return (
        <div className='cursor-pointer hover:scale-105 transition transform duration-300 ease-out'>
            <div className="relative w-80 h-80">
                <img src={img} alt="" className='rounded-xl' />
            </div>
            <h3 className='text-2xl mt-3'>{title}</h3>
        </div>
    )
}

export default MediumCard
