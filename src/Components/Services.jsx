import React from 'react'
import a1 from "../assets/a1 (3).jpg"
import a2 from "../assets/a2.jpg"
import a3 from "../assets/a3.png"
import a4 from "../assets/a1 (2).jpg"
import a5 from "../assets/a5.jpg"

import { motion } from 'framer-motion'

const About = () => {
  return (
    <div className='bg-black md:h-[100vh] flex flex-col justify-center items-center text-slate-50' id='services'>
      <h1 className='text-3xl md:text-5xl mt-5 md:mt-10 p-4 font-thin' >Our Services </h1>
      <div className='flex md:flex-row flex-col space-x-4'>

        <div className='flex md:flex-col flex-row space-y-4 space-x-4'>

          <motion.div
          initial={{ opacity: 0,scale:1,y:100 }}
          transition={{ duration:.75,delay:0}}
          animate={{}}
          whileInView={{ opacity:1,scale:1,y:0 }}
          viewport={{ once: true, amount: 1 }}
          >
          <div className='absolute md:text-xl font-medium w-[20vw] mt-40 p-4'>
            <p  >Specialized Drones</p>
            <p className='text-sm hidden lg:block text-slate-200'>We specialize in the development of kamikaze drones, loitering munitions, anti-tank drone,etc</p>
            </div>
          <img src={a1} alt="" className='h-[40vh] w-[45vw] md:w-[23vw] object-cover rounded-[5vh] md:rounded-[7vh] hover:shadow-xl hover:shadow-slate-500 duration-200 ' />
            </motion.div>

          <motion.div
          initial={{ opacity: 0,y:30 }}
          transition={{ duration:1,delay:0  }}
          animate={{}}
          whileInView={{ opacity:1,y:0 }}
          viewport={{ once: true, amount: 1 }}
          >
            <div className=' absolute hover:bg-black/50 h-[40vh] md:h-[30vh] mt-[-3vh] md:mt-0 w-[45vw] md:w-[23vw] object-cover rounded-[5vh] md:rounded-[7vh] hover:shadow-xl hover:shadow-slate-500 duration-200 ' >
          <div className='  absolute md:text-xl font-medium md:w-[20vw] w-[28vw] mt-36 p-2 md:mt-24 md:p-4'>
            <p >Innovation and R&D</p>
            <p className='text-sm hidden lg:block text-slate-200'>Garg Defence and Aerospace is driven by innovation</p>
            </div></div>
            <img src={a2} alt="" className=' h-[40vh] md:h-[30vh] mt-[-3vh] md:mt-0 w-[45vw] md:w-[23vw] object-cover rounded-[5vh] md:rounded-[7vh] hover:shadow-xl hover:shadow-slate-500 duration-200 ' />
            </motion.div>
        </div>

        <motion.div 
        className='flex flex-col space-y-4'>

        <motion.div
        initial={{ opacity: 0,y:100 }}
        transition={{ duration:.75,delay:0.05}}
        animate={{}}
        viewport={{ once: true, amount: 1 }}
        whileInView={{ opacity:1,y:0 }}
        >
        <div className='absolute  md:text-xl font-medium w-[40vw] mt-20 p-4 '>
            <p >Government Partnerships</p>
            <p className='text-sm hidden lg:block text-slate-200'>We work closely with government bodies, including Ordnance Factories, Defence Public Sector Undertakings (DPSUs)</p>
            </div>
          <img src={a5} alt="" className='h-[25vh] w-[92vw] ml-[-2vw] md:ml-0 mt-2 md:mt-0 md:w-[50vw] object-cover rounded-[5vh] md:rounded-[7vh] hover:shadow-xl hover:shadow-slate-500 duration-200 ' />
          </motion.div>

        <div className='flex flex-row space-x-4'>

          <motion.div
          initial={{ opacity: 0,y:30 }}
          transition={{ duration:1,delay:0.1}}
          animate={{}}
          viewport={{ once: true, amount: 1 }}
          whileInView={{ opacity:1,y:0 }}
          >
            <div className='hover:bg-black/70 absolute md:h-[45vh] h-[35vh] w-[40vw] md:w-[24vw] object-cover rounded-[5vh] md:rounded-[7vh] hover:shadow-xl hover:shadow-slate-500 duration-200 '>
          <div className='absolute md:text-xl font-medium w-[20vw] mt-20 md:mt-28 lg:mt-40 p-2 md:p-4'>
            <p >Navigation and Communication Systems</p>
            <p className='text-sm text-slate-200 hidden lg:block'>We are also engaged in the development of cutting-edge navigation and communication systems for elite soldiers</p>
            </div>
            </div>
            <img src={a3} alt="" className='md:h-[45vh] h-[35vh] w-[40vw] md:w-[24vw] object-cover rounded-[5vh] md:rounded-[7vh] hover:shadow-xl hover:shadow-slate-500 duration-200 ' />
            </motion.div>

          <motion.div
          initial={{ opacity: 0,y:30 }}
          transition={{ duration:.5,delay:0.15}}
          animate={{}}
          viewport={{ once: true, amount: 1 }}
          whileInView={{ opacity:1,y:0}}
          >
            <div className='absolute md:text-xl font-medium w-[20vw] mt-24 md:mt-40 p-2 md:p-4'>
            <p >Collaborations with Armed Force</p>
            <p className='text-sm text-slate-200 hidden lg:block'>We have conducted successful trials and collaborations with elite units such as Para SF and other armed forces</p>
            </div>
            <img src={a4} alt="" className='md:h-[45vh] h-[35vh] w-[40vw] md:w-[24vw] object-cover rounded-[5vh] md:rounded-[7vh] hover:shadow-xl hover:shadow-slate-500 duration-200 ' />
            </motion.div>

        </div> </motion.div>


        <div>

        </div>
      </div>

      
    </div>
  )
}

export default About
