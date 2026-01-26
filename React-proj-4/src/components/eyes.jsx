import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'



const Eyes = () => {
  const [rotate, setRotate] = useState(0)          // White pupil rotation
  const [offset, setOffset] = useState({ x: 0, y: 0 }) // Black pupil movement

  useEffect(() => {
    const handleMouse = (e) => {
      const x = e.clientX
      const y = e.clientY

      const dx = x - window.innerWidth / 2
      const dy = y - window.innerHeight / 2

      // Calculate rotation angle for white pupil
      const angle = Math.atan2(dy, dx) * (180 / Math.PI)
      setRotate(angle - 180)

      // Calculate smooth movement for black pupil
      const maxMove = 6 // max pixels black pupil moves
      const length = Math.sqrt(dx * dx + dy * dy) || 1
      const moveX = (dx / length) * maxMove
      const moveY = (dy / length) * maxMove

      setOffset({ x: moveX, y: moveY })
    }

    window.addEventListener("mousemove", handleMouse)
    return () => window.removeEventListener("mousemove", handleMouse)
  }, [])


  return (
    
    <div data-scroll  data-scroll-speed="-0.6" className='relative  rounded-2xl z-2 pointer-events-none w-full h-[102vh] pb-[-10vh]'>
      {/* Background */}
      <div className='w-full h-full bg-cover bg-center relative bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
        
        {/* Eyes Container */}
        <div data-scroll  data-scroll-speed=".4"  className='eyeblock absolute top-[39vh] left-[34vw] flex flex-row gap-8'>

          {/* Eye 1 */}
          <div className='w-[14vw] h-[25vh] rounded-full bg-[#F4F4F4] flex justify-center items-center'>
            {/* Black pupil */}
            <div
              className='w-[8vw] h-[14vh] rounded-full bg-[#212121] flex items-center justify-center transition-transform duration-200 ease-out'
              style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
            >
              {/* White pupil */}
              <div style={{ rotate: `${rotate}deg` }} className='w-full h-[4vh] relative'>
                <div className='w-6 h-6 rounded-full bg-[#F4F4F4]'></div>
              </div>
            </div>
          </div>

          {/* Eye 2 */}
          <div className='w-[14vw] h-[25vh] rounded-full bg-[#F4F4F4] flex justify-center items-center'>
            {/* Black pupil */}
            <div
              className='w-[8vw] h-[14vh] rounded-full bg-[#212121] flex items-center justify-center transition-transform duration-200 ease-out'
              style={{ transform: `translate(${offset.x * 0.8}px, ${offset.y * 0.8}px)` }} 
            >
              {/* White pupil */}
              <div style={{ rotate: `${rotate}deg` }} className='w-full h-[4vh] relative'>
                <div className='w-6 h-6 rounded-full bg-[#F4F4F4]'></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Eyes
