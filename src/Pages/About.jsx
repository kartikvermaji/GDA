import React from 'react'
import { motion, useTransform, useViewportScroll } from 'framer-motion'
import {
   
    faArrowRight,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Moto = () => {
    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [.5, .8]);
  return (
    <div className='flex justify-center  bg-black h-[50vh] text-slate-50' id='about'>
       <motion.div 
      style={{ scale, opacity: scale }}
       viewport={{ once: true, amount: 1 }}
      className="flex justify-around flex-col md:flex-row mt-[-4vh] md:space-x-20  lg:space-x-32 lg:mt-10 md:mt-0 w-[80vw] ">
        <h1 className="lg:text-7xl md:text-6xl text-4xl text-center md:text-left font-lightbold "> Taking Flight <br /> for National Security</h1>
        <div className="md:w-[50vw]">
        <p className="font-semibold md:text-lg text-center ml-[-8vw] w-[100vw] md:text-left  md:w-[46vw] mt-5 md:mt-10" >Garg Defence & Aerospace soars for national security. We develop specialized UAVs, from kamikaze drones to logistics, with cutting-edge tech for unmatched capabilities. Our relentless innovation and unwavering quality commitment safeguard lives and redefine defense.</p>
         <a href="#services"><button className="md:text-xl ml-[15vw] md:ml-[0vw] mt-5 md:mt-10 border-2 px-8 py-2 rounded-full font-extralight hover:bg-slate-50 hover:shadow-xl hover:shadow-slate-400 hover:border-slate-50 hover:text-slate-950 duration-200">Get Started <FontAwesomeIcon icon={faArrowRight} className="bg-orange-500 rounded-full px-2 mt-[-0.3rem] rotate-[-20deg]  ml-[1rem] text-xl py-2 absolute hover:shadow-xl hover:shadow-slate-400" /></button></a> 
        </div>
        
      </motion.div>
    </div>
  )
}

export default Moto
