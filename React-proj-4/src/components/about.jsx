import { motion } from 'framer-motion'
import React from 'react'

const about = () => {
  return (
    <div data-scroll data-scroll-speed=".4" className='w-full bg-[#CDEA69] mt-[-30vh] rounded-t-2xl pt-[9vh] px-[4vw] relative z-10'>
      <p className='w-[77vw] font-light text-[52px] leading-[1.1] '>We craft category-defining presentations, brand identities, and digital experiences that drive funding, sales, and market leadership.</p>
      <div className='w-screen border-t border-[#99AD54] mt-[8vh] ml-[-4vw]'></div>
      <div className='flex flex-row'>
        <div className='flex flex-col'>
      <h1 className=' mt-[1vh] text-[40px] text-wrap font-light'>How we can help:</h1>
      <button className='rounded-4xl uppercase w-[13vw] h-[7vh] font-light mt-[1vh] text-white bg-black flex flex-row items-center justify-center gap-8 '>
        <p className='text-[16px]'>Read more</p>
       <div className='w-[0.8vw] h-[1.4vh] rounded-full bg-amber-50 '></div>
      </button>
        </div>
      <div className='w-[50vw] h-[60vh] bg-green-900 mt-[2vh] mb-[7vh] flex ml-[20vw] rounded-lg overflow-hidden'>
     <img className='relative object-center ' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="" />
      </div>
      </div>
     

    </div>
  )
}

export default about
