import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'

const Eye2 = () => {
  const [rotate, setRotate] = useState(0)
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouse = (e) => {
      const x = e.clientX
      const y = e.clientY

      const dx = x - window.innerWidth / 2
      const dy = y - window.innerHeight / 2

      const angle = Math.atan2(dy, dx) * (180 / Math.PI)
      setRotate(angle - 180)

      const maxMove = 6
      const length = Math.sqrt(dx * dx + dy * dy) || 1
      const moveX = (dx / length) * maxMove
      const moveY = (dy / length) * maxMove

      setOffset({ x: moveX, y: moveY })
    }

    window.addEventListener("mousemove", handleMouse)

    return () => window.removeEventListener("mousemove", handleMouse)
  }, [])

  return (

    <div data-scroll  data-scroll-speed=".3" className="w-full relative bg-[#CDEA69] z-30 pt-[19vh] pb-[17vh] mt-[-30vh]  rounded-2xl">
      <div className="relative flex items-center justify-center flex-col">
        {["Ready", "To Start", "The Project ?"].map((text, index) => (
          <h1
            key={index}
            className='text-[#212121] font-bold text-[170px] uppercase tracking-tighter font-["Oswald"] leading-none'
          >
            {text}
          </h1>
        ))}

        <div  data-scroll  data-scroll-speed=".4"  className="absolute top-[22.6vh] flex flex-row items-center justify-center gap-8">
          
          {/* Eye 1 */}
          <div className="eye2eye1 rounded-full bg-[#F4F4F4] flex items-center justify-center">
            <div
              className="eye2eye2 rounded-full bg-[#212121] flex items-center justify-center transition-transform duration-200 ease-out"
              style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
            >
              <div style={{ rotate: `${rotate}deg` }} className="relative w-full">
                <div className="eye2eye3 rounded-full bg-[#F4F4F4]"></div>
              </div>
            </div>
          </div>

          {/* Eye 2 */}
          <div className="eye2eye1 rounded-full bg-[#F4F4F4] flex items-center justify-center">
            <div
              className="eye2eye2 rounded-full bg-[#212121] flex items-center justify-center transition-transform duration-200 ease-out"
              style={{
                transform: `translate(${offset.x * 0.8}px, ${offset.y * 0.8}px)` // slight difference for natural look
              }}
            >
              <div style={{ rotate: `${rotate}deg` }} className="relative w-full">
                <div className="eye2eye3 rounded-full bg-[#F4F4F4]"></div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="gap-4 flex flex-col items-center justify-center mt-[5vh]">
        <button className="flex flex-row items-center justify-center bg-[#212121] rounded-[50px] border py-4 px-6 gap-10 uppercase font-light">
          <p className="text-white">start the project</p>
          <div className="w-2 h-2 bg-white rounded-full"></div>
        </button>
        <p className="text-[#212121] font-light">OR</p>
        <button className="flex flex-row items-center justify-center rounded-[50px] border py-4 px-6 gap-10 uppercase font-light">
          <p className="text-[#212121]">Hello@chi.design</p>
          <div className="w-2 h-2 bg-[#212121] rounded-full"></div>
        </button>
      </div>
    </div>
  )
}

export default Eye2
