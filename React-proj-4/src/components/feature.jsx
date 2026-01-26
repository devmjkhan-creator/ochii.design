import Medimg  from '../images/Med_Website_0.png'
import Fyde from '../images/fyde.png'
import Lets from '../images/lets.jpg'
import Silence from '../images/silence.png'
import Vise from '../images/vise.png'
import Where from '../images/where.png'
import{motion,useAnimation} from "framer-motion"
import React from 'react'

const feature = () => {
  const cards=[useAnimation(),useAnimation(),useAnimation(),useAnimation(),useAnimation(),useAnimation()];

  const handleHover=(index)=>{
    cards[index].start({y:0});
  }
  const handleHoverEnd=(index)=>{
    cards[index].start({y:100});
  }
  return (
    <div data-scroll  data-scroll-speed="0.1" className='relative  rounded-2xl w-full bg-[#F1F1F1] pt-[11vh] z-20 px-[4vw] pb-[20vh] mt-[-10vh]'>
      <h1 className='font-["Neue Montreal"] text-[53px] font-light'>Featured projects</h1>

      <div className='line relative z-20 bt-[#B3B3B3] mt-[3vh] w-screen ml-[-4vw]'></div>
      <div className='flex flex-col gap-[5vh] mt-[4vh]'>



      <div className='m.container flex flex-col'>
       <div className='text.container w-full flex items-center gap-[37.3vw] flex-row mb-[1.7vh]'>

          <div className='flex flex-row uppercase mt-[1vh] items-center justify-center gap-2  '>
            <div className='w-3 h-3 bg-black rounded-full'></div>
            <p>Salience Labs</p>
        </div>
         <div className='flex flex-row items-center justify-center uppercase mt-[1vh] gap-2 '>
            <div className='w-3 h-3 bg-black rounded-full'></div>
            <p className='font-light text-[15px]'>Salience Labs</p>
        </div>
       </div>
   
       <div className='card.container w-full flex flex-row gap-4 overflow-hidden rounded-lg'>
        <motion.div 
        onHoverStart={()=>handleHover(0)}
        onHoverEnd={()=>handleHoverEnd(0)}
        
        className=' relative w-[45.5vw] h-[62vh] bg-pink-400 rounded-lg'>
            <img className='h-full rounded-lg w-full' src={Silence} alt="" />
            <h1 className='absolute text-[#D2ED76] translate-x-1/2 flex translate-y-1/6 text-[100px] overflow-hidden font-extrabold top-[18.5vh] right-[-2vw] font-["Oswald"] z-5 '>
              {"Silence Labs".split("").map((text,index)=>(
          <span
              key={index}
              className="overflow-hidden uppercase inline-block"
              style={{ lineHeight: "1" }}
             >
            <motion.span
            initial={{ y: "100%" }}
            animate={cards[0]}
            transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
            className="block"
            >
           {text}
           </motion.span>
        </span>
              ))}
            </h1>
        </motion.div>

        <motion.div 
        onHoverStart={()=>handleHover(1)}
        onHoverEnd={()=>handleHoverEnd(1)}
        className='w-[45.5vw] relative h-[62vh] bg-pink-300 rounded-lg'>
            <img className=' object-cover object-center h-full w-full rounded-lg' src={Medimg} alt="" />
            <h1 className='absolute text-[#D2ED76] translate-x-1/2 translate-y-1/6 text-[100px] overflow-hidden flex font-extrabold top-[18.5vh] left-[-57vw] tracking-tighter font-["Oswald"] z-5 '>
              {"medallia experience".split("").map((text,index)=>(
               <span
               key={index}
               className='uppercase overflow-hidden  inline-block'
               style={{ lineHeight: "1" }}
               >
                 <motion.span 
                initial={{y:"100%"}}
                animate={cards[1]}
                transition={{ease:[0.22, 1, 0.36, 1],delay: index*.05}}
                className="block"
                >
                  {text}
                </motion.span>
               </span>
              ))}
            </h1>
        </motion.div>
      </div>
       <div className='flex flex-row gap-[27.5vw]'>
        <div className='flex flex-row mt-[2vh] gap-3'>
          <button className='border-black border rounded-2xl flex items-center justify-center px-[1vw] h-[3.9vh] text-[15px] uppercase '>Brand Identity</button>
        <button className='border-black border rounded-2xl flex items-center justify-center w-[7.8vw] h-[3.9vh] text-[15px] uppercase '>Pitch Deck</button>
        </div>
       <div className='flex flex-row mt-[2vh] gap-3'>
          <button className='border-black border rounded-2xl flex items-center justify-center px-[1vw] h-[3.9vh] text-[15px] uppercase '>conference</button>
        <button className='border-black border rounded-2xl flex items-center justify-center px-[1vw] h-[3.9vh] text-[15px] uppercase '>executive keynote</button>
         <button className='border-black border rounded-2xl flex items-center justify-center px-[1vw] h-[3.9vh] text-[15px] uppercase '>Product launch</button>
        </div>
       </div>
      </div>





      <div className='m.container flex flex-col'>
       <div className='text.container w-full flex items-center gap-[37.3vw] flex-row mb-[1.7vh]'>

          <div className='flex flex-row uppercase mt-[1vh] items-center justify-center gap-2  '>
            <div className='w-3 h-3 bg-black rounded-full'></div>
            <p>Salience Labs</p>
        </div>
         <div className='flex flex-row items-center justify-center uppercase mt-[1vh] gap-2 '>
            <div className='w-3 h-3 bg-black rounded-full'></div>
            <p className='font-light text-[15px]'>Salience Labs</p>
        </div>
       </div>
   
       <div className='card.container w-full flex flex-row gap-4 overflow-hidden rounded-lg'>
        <motion.div 
        onHoverStart={()=>handleHover(2)}
        onHoverEnd={()=>handleHoverEnd(2)}
        className=' relative w-[45.5vw] h-[62vh] bg-pink-400 rounded-lg'>
            <img className='h-full rounded-lg w-full' src={Where} alt="" />
            <h1 className='absolute text-[#D2ED76] translate-x-1/2 translate-y-1/6 text-[100px] text-wrap font-extrabold flex overflow-hidden top-[18.5vh] right-[1vw] font-["Oswald"] z-5 '>
              {"AH2 Matthorn".split("").map((text,index)=>(
                 <span
               key={index}
               className='uppercase overflow-hidden  inline-block'
               style={{ lineHeight: "1" }}
               >
                 <motion.span 
                initial={{y:"100%"}}
                animate={cards[2]}
                transition={{ease:[0.22, 1, 0.36, 1],delay: index*.05}}
                className="block"
                >
                  {text}
                </motion.span>
               </span>
              ))}
            </h1>
        </motion.div>
        <motion.div 
        onHoverStart={()=>handleHover(3)}
        onHoverEnd={()=>handleHoverEnd(3)}
        className='w-[45.5vw] relative h-[62vh] bg-pink-300 rounded-lg'>
            <img className=' object-cover object-center h-full w-full rounded-lg' src={Vise} alt="" />
            <h1 className='absolute text-[#D2ED76] translate-x-1/2 translate-y-1/6 text-[100px] flex overflow-hidden font-extrabold top-[18.5vh] left-[-12vw] tracking-tighter font-["Oswald"] z-5 '>
              {"vise".split("").map((text,index)=>(
                 <span
               key={index}
               className='uppercase overflow-hidden  inline-block'
               style={{ lineHeight: "1" }}
               >
                 <motion.span 
                initial={{y:"100%"}}
                animate={cards[3]}
                transition={{ease:[0.22, 1, 0.36, 1],delay: index*.05}}
                className="block"
                >
                  {text}
                </motion.span>
               </span>
              ))}
            </h1>
        </motion.div>
      </div>
       <div className='flex flex-row gap-[27.5vw]'>
        <div className='flex flex-row mt-[2vh] gap-3'>
          <button className='border-black border rounded-2xl flex items-center justify-center px-[1vw] h-[3.9vh] text-[15px] uppercase '>Brand Identity</button>
        <button className='border-black border rounded-2xl flex items-center justify-center w-[7.8vw] h-[3.9vh] text-[15px] uppercase '>Pitch Deck</button>
        </div>
       <div className='flex flex-row mt-[2vh] gap-3'>
          <button className='border-black border rounded-2xl flex items-center justify-center px-[1vw] h-[3.9vh] text-[15px] uppercase '>conference</button>
        <button className='border-black border rounded-2xl flex items-center justify-center px-[1vw] h-[3.9vh] text-[15px] uppercase '>executive keynote</button>
         <button className='border-black border rounded-2xl flex items-center justify-center px-[1vw] h-[3.9vh] text-[15px] uppercase '>Product launch</button>
        </div>
       </div>
      </div>





      <div className='m.container flex flex-col'>
       <div className='text.container w-full flex items-center gap-[37.3vw] flex-row mb-[1.7vh]'>

          <div className='flex flex-row uppercase mt-[1vh] items-center justify-center gap-2  '>
            <div className='w-3 h-3 bg-black rounded-full'></div>
            <p>Salience Labs</p>
        </div>
         <div className='flex flex-row items-center justify-center uppercase mt-[1vh] gap-2 '>
            <div className='w-3 h-3 bg-black rounded-full'></div>
            <p className='font-light text-[15px]'>Salience Labs</p>
        </div>
       </div>
   
       <div className='card.container w-full flex flex-row gap-4 overflow-hidden rounded-lg'>
        <motion.div 
        onHoverStart={()=>handleHover(4)}
        onHoverEnd={()=>handleHoverEnd(4)}
        className=' relative w-[45.5vw] h-[62vh] bg-pink-400 rounded-lg'>
            <img className='h-full rounded-lg w-full' src={Lets} alt="" />
            <h1 className='absolute text-[#D2ED76] translate-x-1/2 translate-y-1/6 text-[100px] font-extrabold top-[18.5vh] right-[-2vw] font-["Oswald"] z-5 '>
              {"Softstart".split("").map((text,index)=>(
                 <span
               key={index}
               className='uppercase overflow-hidden  inline-block'
               style={{ lineHeight: "1" }}
               >
                 <motion.span 
                initial={{y:"100%"}}
                animate={cards[4]}
                transition={{ease:[0.22, 1, 0.36, 1],delay: index*.05}}
                className="block"
                >
                  {text}
                </motion.span>
               </span>
              ))}
            </h1>
        </motion.div>
        <motion.div 
        onHoverStart={()=>handleHover(5)}
        onHoverEnd={()=>handleHoverEnd(5)}
        className='w-[45.5vw] relative h-[62vh] bg-pink-300 rounded-lg'>
            <img className=' object-cover object-center h-full w-full rounded-lg' src={Fyde} alt="" />
            <h1 className='absolute text-[#D2ED76] translate-x-1/2 translate-y-1/6 text-[100px] font-extrabold top-[18.5vh] left-[-12vw] tracking-tighter font-["Oswald"] z-5 '>
              {"fyde".split("").map((text,index)=>(
                 <span
               key={index}
               className='uppercase overflow-hidden  inline-block'
               style={{ lineHeight: "1" }}
               >
                 <motion.span 
                initial={{y:"100%"}}
                animate={cards[5]}
                transition={{ease:[0.22, 1, 0.36, 1],delay: index*.05}}
                className="block"
                >
                  {text}
                </motion.span>
               </span>
              ))}
            </h1>
        </motion.div>
      </div>
       <div className='flex flex-row gap-[27.5vw]'>
        <div className='flex flex-row mt-[2vh] gap-3'>
          <button className='border-black border rounded-2xl flex items-center justify-center px-[1vw] h-[3.9vh] text-[15px] uppercase '>Brand Identity</button>
        <button className='border-black border rounded-2xl flex items-center justify-center w-[7.8vw] h-[3.9vh] text-[15px] uppercase '>Pitch Deck</button>
        </div>
       <div className='flex flex-row mt-[2vh] gap-3'>
          <button className='border-black border rounded-2xl flex items-center justify-center px-[1vw] h-[3.9vh] text-[15px] uppercase '>conference</button>
        <button className='border-black border rounded-2xl flex items-center justify-center px-[1vw] h-[3.9vh] text-[15px] uppercase '>executive keynote</button>
         <button className='border-black border rounded-2xl flex items-center justify-center px-[1vw] h-[3.9vh] text-[15px] uppercase '>Product launch</button>
        </div>
       </div>
      </div>
      <div className='line w-screen ml-[-4vw] mt-4 border-b border-[#BABABA]/60'></div>
      </div>
     
    </div>
  )
}
 
export default feature
