import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowDown } from "react-icons/fa6";

const landingpage = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-[#F1F1F1]'>
        <div className='Textblock flex flex-col py-[20vh] '>{["We Create","Eye-Opening","Presentations"].map((text,index)=>{
            return(
                <div className='masker'key={index}>
                <div className='flex px-[4vw] overflow-hidden'>
                    {index==1 && (<motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease:[0.45, 0, 0.55, 1],
                      duration:0.8
                    }} className=' w-[9vw] rounded-md mt-[1.4vh] ml-[0.6vw] bg-[url("https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg")] bg-cover bg-center h-[11vh]'></motion.div> )}
                    {index==1 && (<div className='ml-[1vw]'></div> )}
                    <h1 className="text-3xl text-[#212121] uppercase font-['Oswald'] text-[100px] leading-[13vh] tracking-tighter font-semibold">{text}</h1>
                </div>
                </div>
            )
        })}</div>
        <div className='line'></div>
        <div className='w-[73vw] flex flex-row gap-[23vw] text-lg capitalize pt-[2vh] px-[4vw]  '>
          {["Presentation and storytelling agency","For innovation teams and global brands "].map((text,index)=>(
            <p className='text-[#212121] text-md font-light tracking-tighter' key={index}>{text}</p>
          ))}
        </div>
         <div className='w-[20vw] flex flex-row  ml-[77vw] mt-[-5.7vh] pt-[2vh] gap-2  uppercase text-[#212121] items-center justify-center'>
          <p className='Start rounded-2xl h-[4vh] w-[13vw] px-[0.8vw] items-center flex justify-center text-sm font-light'>start the project</p>
         <div className='Arrow rounded-full flex items-center justify-center font-light'><FaArrowDown className='text-base'/></div>
        </div>
        
    </div>
  )
}

export default landingpage
