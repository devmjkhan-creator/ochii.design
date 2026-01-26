import React from 'react'
import {motion} from 'framer-motion'
const Marquee = () => {
  return (
    <div data-scroll  data-scroll-speed=".1" className='w-full bg-[#004D43] rounded-t-2xl pt-[13vh] pb-[10vh]'>
      <div className='border-t border-b border-zinc-300 overflow-hidden flex flex-row gap-10 w-full h-[37vh] '>
       <motion.div
         className='flex whitespace-nowrap'
        animate={{ x: ["0%", "-50%"] }}
         transition={{ease:"linear",repeat:Infinity,duration:11}}
        >
       <h1 className='uppercase text-[#FFFFFF] text-[330px] tracking-tighter font-semibold font-["Oswald"] whitespace-nowrap mt-[-14vh]'> WE are ochi</h1>
       <h1 className='uppercase text-[#FFFFFF] text-[330px] tracking-tighter font-semibold font-["Oswald"] whitespace-nowrap mt-[-14vh] pl-[6vw]'> WE are ochi</h1>
       <h1 className='uppercase text-[#FFFFFF] text-[330px] tracking-tighter font-semibold font-["Oswald"] whitespace-nowrap mt-[-14vh] pl-[6vw]'> WE are ochi</h1>
       <h1 className='uppercase text-[#FFFFFF] text-[330px] tracking-tighter font-semibold font-["Oswald"] whitespace-nowrap mt-[-14vh] pl-[6vw]'> WE are ochi</h1>
       </motion.div>
      
      </div>
    </div>
  )
}

export default Marquee
