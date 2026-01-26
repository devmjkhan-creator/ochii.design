import React from 'react'
import Navbar from './components/navbar'
import Landingpage from './components/landingpage'
import Marquee from './components/marquee'
import About from './components/about'
import Eyes from './components/eyes'
import Feature from './components/feature'
import Card from './components/card'
import Eye2 from './components/eye2'
import Footer from './components/footer'
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full h-screen bg-zinc-900'>
      <Navbar/>
      <Landingpage/>
      <Marquee/>
      <About/>
      <Eyes/>
      <Feature/>
       <Card/>
      <Eye2/>
      <Footer/>
    </div>
  )
}

export default App
