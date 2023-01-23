import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div className=' relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[600px] 2xl:h-[700px]'>
      <Image src="https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" layout='fill' objectFit='cover' />
    </div>
  )
}

export default Banner
