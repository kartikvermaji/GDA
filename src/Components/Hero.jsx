import React from 'react'
import camouflage from "../assets/cam2.jpeg"
import drone from "../assets/drone4.png"
import dcam from "../assets/dcam.webp"
import dprop from "../assets/dprop.webp"
import dmotor from "../assets/dmotor.jpg"
import dstand from "../assets/dtsand.jpg"
import { motion, useTransform, useViewportScroll } from 'framer-motion'
import Navbar from './Navbar'

const Hero = () => {
  const { scrollYProgress } = useViewportScroll()
  const scale = useTransform(scrollYProgress, [1, 0], [0, 1]);
   
      
  return (

    <div className='h-[110vh] bg-black' id='home'>
    <motion.div className='bg-[#000000] h-[100vh] pt-24  ' 
    >
      <motion.div
       initial={{ opacity: 0, x: -150 }}
            transition={{ duration: 1.25 }}
            animate={{}}
            whileInView={{ opacity: 0.15, x: 0 }}
       className='lg:text-8xl text-4xl md:text-7xl font-semibold text-center  text-slate-800 pt-20 absolute opacity-20'>
        <h1>KAMIKAZE DRONES SURVEILLANCE DRONES LOITERING MUNITIONS</h1>
        <h1 className='hidden lg:block' >KAMIKAZE DRONES SURVEILLANCE DRONES LOITERING MUNITIONS</h1>
        <h1 className='lg:hidden'>KAMIKAZE DRONES SURVEILLANCE DRONES </h1>
       
      </motion.div>
        
        <div className=' flex justify-center mt-8 md:mt-4 lg:mt-0'>
        <div>
        <motion.img
            initial={{ opacity:0, y: -50 }}
            transition={{ duration:0.75,delay:.2 }}
            animate={{}}
            whileInView={{ opacity: 1, y: 0 }}
             src={drone} alt="" className=' absolute lg:h-[75vh] md:h-[60vh] h-[50vh] object-cover ml-[-19vw] md:ml-[-23vw]  lg:ml-[-20vw] mt-28 lg:mt-24 drop-shadow-xl shadow-slate-200'  />
            
            <motion.h1
            initial={{ opacity: 0, y: -50 }}
            transition={{ duration:0.5 }}
            animate={{}}
            whileInView={{ opacity: 1, y: 0 }}
             className='lg:text-8xl text-5xl md:text-7xl relative  font-semibold bg-gradient-to-r from-slate-600 via-slate-50 to-slate-500 text-transparent bg-clip-text lg:w-[40vw] md:w-[60vw] w-[70vw] text-center h-[45vh] ' >Explore The Next Frontier Of Flight</motion.h1>
        </div>
        <div className='text-slate-50'>
           
             
             <motion.div
              initial={{ opacity: 0}}
              transition={{ duration:0.5,delay:.75 }}
              animate={{}}
              whileInView={{ opacity: 1 }}
              className='flex w-12 md:w-[25vw] lg:w-[15vw] bg-slate-700 rounded-full absolute mt-[30vh] md:mt-[27vh] ml-[-5vw] md:ml-[-6vw] lg:ml-[-3vw] shadow-xl hover:shadow-slate-700 duration-300 shadow-slate-900 '>
              <img src={dprop} alt="" className=' lg:h-16 h-12 w-12  lg:w-16 object-cover rounded-full' />
              <p className='text-sm lg:text-base pt-1 font-light hidden md:block'>Excellent propellers power an excellent drive</p>
             </motion.div>

             <motion.div
             initial={{ opacity: 0}}
             transition={{ duration:0.75,delay:1 }}
             animate={{}}
             whileInView={{ opacity: 1 }}
             className='flex  w-12 md:w-[25vw] lg:w-[15vw] bg-slate-700 rounded-full absolute mt-[30vh] md:mt-[28vh]  ml-[-80vw] lg:mt-[26vh] md:ml-[-75vw] lg:ml-[-53vw] shadow-xl hover:shadow-slate-700 duration-300 shadow-slate-900 '>
              <img src={dmotor} alt="" className='lg:h-16 h-12 w-12  lg:w-16 object-cover rounded-full' />
              <p className='text-sm lg:text-base pt-1 pl-1 font-light hidden md:block lg:mt-1'>Lightweight motors for extended flight times</p>
             </motion.div>

             <motion.div
             initial={{ opacity: 0}}
             transition={{ duration: .5,delay:1.2 }}
             animate={{}}
             whileInView={{ opacity: 1 }}
              className='flex  w-12 md:w-[25vw] lg:w-[15vw] bg-slate-700 rounded-full absolute mt-[65vh] md:mt-[62vh] ml-[-80vw] md:ml-[-12vw] lg:ml-[-8vw] shadow-xl hover:shadow-slate-700 duration-300 shadow-slate-900 '>
              <img src={dcam} alt="" className='lg:h-16 h-12 w-12  lg:w-16 object-cover rounded-full' />
              <p className='pt-1 text-sm lg:text-base font-light hidden md:block'>Uncompromising Clarity. Unforgettable Shots</p>
             </motion.div>

             <motion.div
             initial={{ opacity: 0}}
             transition={{ duration:0.75,delay:.9 }}
             animate={{}}
             whileInView={{ opacity: 1 }}
              className='flex  w-12 md:w-[25vw] lg:w-[15vw] bg-slate-700 rounded-full absolute mt-[65vh] md:mt-[62vh] ml-[-5vw] md:ml-[-66vw] lg:ml-[-46vw] shadow-xl hover:shadow-slate-700 duration-300 shadow-slate-900 '>
              <img src={dstand} alt="" className='lg:h-16 h-12 w-12  lg:w-16 object-cover rounded-full' />
              <p className='text-sm lg:text-base pt-1 pl-1 font-light hidden md:block'>Sleek and stable drone stands</p>
             </motion.div>
        </div>
        </div>
        
      
    </motion.div>
    </div>
  )
}

export default Hero
