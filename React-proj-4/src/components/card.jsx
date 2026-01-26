import { motion } from 'framer-motion'
import React from 'react'

const card = () => {
  return (
    <div data-scroll data-scroll-speed="-.3"  className='relative w-full z-20 bg-[#F1F1F1] pt-[7vh] px-[4vw] pb-[20vh] mt-[-15vh]  rounded-2xl'>
        <div  className='flex flex-row items-center justify-between'>
          <div className='relative '>
              <div className='Card1 w-[44vw] h-[44vh] bg-[#004D43] rounded-lg flex items-center justify-center'>
              <img className='w-[11vw]' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
              </div>
              <button className='card1btn absolute bottom-[4vh] left-[2vw] border text-[14px] border-[#CDEA69] rounded-2xl px-2  items-center justify-center flex text-[#CDEA69]'>
                ©2019-2025
              </button>
          </div>
             <div className='relative'>
                <div className='Card2 w-[22vw] h-[44vh] bg-[#212121] rounded-lg flex items-center justify-center'>
                <img className='w-[11vw]' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
             </div>
             <button className='card2btn uppercase absolute bottom-[4vh] left-[2vw] text-[14px] font-light text-[#F1F1F1] border border-[#F1F1F1] rounded-2xl px-3  items-center justify-center flex '>
                rating 5.0 on clutch
             </button>
             </div>

             <div className='relative'>
                 <div className='Card3 w-[22vw] h-[44vh] bg-[#212121] rounded-lg flex items-center justify-center'>
               <img className='w-[7vw]' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
              </div>
              <button className='card3btn  uppercase absolute bottom-[4vh] left-[2vw] text-[14px] text-[#F1F1F1] border border-[#F1F1F1] rounded-2xl px-3  items-center justify-center flex'>
                business bootcamp alumni
              </button>
             </div>
        </div>
      
    </div>
  )
}

export default card
