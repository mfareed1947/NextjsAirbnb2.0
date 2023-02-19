import React from 'react'

const Banner = () => {
    return (
        <div>
            <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:first-letter:h-[600px] 2xl:h-[700px]">
                <img src="https://wallpapercave.com/wp/wp5961211.jpg" alt=""
                    className='w-full h-full'
                />
                <div className="absolute top-1/2 w-full text-center">
                    <p className='text-sm sm:text-lg text-white font-bold'>Not sure where to go? Perfect.</p>
                    <button
                        className='text-red-500 bg-white px-10 py-4 font-semibold border rounded-full 
                    cursor-pointer active:scale-95 active:bg-red-400 active:text-white hover:shadow-lg 
                    transition transform duration-100 ease-out'>I`m flexible</button>
                </div>
            </div>
        </div>
    )
}

export default Banner
