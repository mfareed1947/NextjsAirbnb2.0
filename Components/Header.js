import Image from 'next/image'
import React from 'react'


const Header = () => {
    return (
        <header className='sticky top-0 z-50 grid grid-cols-3 bg-white-300 shadow-md '>
            {/* Left Side div for logo */}
            <div className=' flex justify-start w-full relative '>
                <img src="https://download.logo.wine/logo/Airbnb/Airbnb-Logo.wine.png"
                    alt=""
                    className='-w-[125px] h-[80px] p-1 object-contain cursor-pointer'
                />
            </div>
            {/* Middle Side div for Search bar */}
            <div className='flex  items-center '>
                <div className='flex rounded-full md:border-2 md:py-2 w-full md:shadow-sm'>
                    <input type="text" placeholder='Start your search' className=' outline-none w-full md:px-[10px] bg-transparent' />
                    <svg xmlns="http://www.w3.org/2000/svg" className="hidden md:inline-flex h-6 w-6 mx-2 rounded-full bg-red-400 text-white p-1 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>
            {/* Right Side div for Search bar */}
            <div className='flex space-x-4 items-center justify-end text-gray-500 p-2'>
                <p p className="hidden md:inline cursor-pointer">Become a host </p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 cursor-pointer">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>
            <div className='flex items-center p-2 border-2 rounded-full'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h- cursor-pointer">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 cursor-pointer">
                    <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
                </svg>

            </div>
        </div>
        </header >
    )
}

export default Header