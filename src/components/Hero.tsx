
import React from 'react'

const Hero = () => {
  return (
    <div className='flex justify-center items-center min-h-[450px] px-[16px] bg-[url("/hero-image.avif")] bg-no-repeat bg-cover bg-bottom mb-6 text-black   '>
      <div className='w-[800px] text-center leading-[70px]'>
        <h1 className=' text-black font-extrabold xl:leading-[70px] lg:leading-[60px] leading-[35px] xl:text-[80px] lg:text-[60px] text-[40px] mb-[12px]'>Usama Blogging </h1>
        <p className='leading-[120%] '>Welcome to my recipe blog! I’m Usama Muzammil, a passionate home cook and developer who loves exploring flavors and creating delicious dishes. Here, you’ll find easy-to-follow recipes, cooking tips, and culinary inspiration to make every meal special. Let’s embark on a flavorful journey together!</p>
        <button className="bg-black leading-4 lead border-none text-white font-bold mt-[40px] py-2 px-4 rounded-md hover:bg-blue-400">
                  My Blogs
            </button>
      </div>
    </div>
  )
}

export default Hero
