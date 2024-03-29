import React from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { faArrowRight,faSatelliteDish,faLaptopCode,faSatellite } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Moto = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 0.8]);
  return (
    <div className="h-[110vh] bg-black text-slate-50">
       <div className='flex justify-center items-center  bg-slate-50 h-[70vh] pb-[10vh]  md:h-[60vh] lg:h-[50vh] text-black'>
       <motion.div 
      initial={{ opacity: 0, y:100 ,scale:1}}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay:0, duration: 1,scale:1. },
      }}
      viewport={{ once: true, amount: 0}}
      className="flex justify-center lg:ml-24 items-center flex-col md:flex-row mt-[-4vh] md:space-x-20 lg:space-x-44  lg:mt-10 md:mt-0 w-[80vw]  ">
        <h1 className="lg:text-7xl md:text-5xl md:ml-5 lg:ml-2 text-3xl mt-16 md:mt-20 lg:mt-0 lg:w-[40vw] text-center  md:text-left font-lightbold ">Taking Flight  for National Security!</h1>
        <div className="md:w-[50vw] justify-center items-center">
        <p className="font-semibold lg:text-lg lg:font-extralight  md:text-sm text-sm text-center ml-[-4vw] w-[90vw] md:text-left  md:w-[44vw] lg:w-[34vw] mt-5 md:mt-10 lg:mt-0"> Garg Defence & Aerospace soars for national security. We develop
            specialized UAVs, from kamikaze drones to logistics, with
            cutting-edge tech for unmatched capabilities. Our relentless
            innovation and unwavering quality commitment safeguard lives and
            redefine defense.</p>
          <button className="md:text-xl ml-[15vw] md:ml-[0vw]  mt-5 lg:mt-5 md:mt-5 border-2 px-8 py-2 rounded-full font-extralight hover:bg-slate-50 hover:shadow-xl hover:shadow-slate-400 hover:border-slate-50 hover:text-slate-950 duration-200">Get Started <FontAwesomeIcon icon={faArrowRight} className="bg-orange-500 rounded-full px-2 mt-[-0.3rem] rotate-[-20deg]  ml-[1rem] text-xl py-2 absolute hover:shadow-xl hover:shadow-slate-400" /></button>
        </div>
        
      </motion.div>
    </div>
    
      

      <motion.div 
      initial={{ opacity: 0, y:100 }}
      transition={{ duration: 1.25 }}
      animate={{}}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 1 }}
      className="flex flex-col items-center">
        <h1 className='text-3xl md:text-5xl mt-0 lg:mt-5 md:p-4 font-thin'>Our Solutions</h1>
        <div className="flex flex-col md:flex-row justify-around w-[80vw] mt-10 space-x-5 space-y-4">

        <motion.div
        initial={{ opacity: 0, y:100 }}
        transition={{ duration: 1.25 }}
        animate={{}}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 1 }}
         className="flex flex-col items-center text-center space-y-2 md:space-y-4">
        <FontAwesomeIcon icon={faSatelliteDish} className="lg:text-7xl text-4xl lg:mt-3 md:text-6xl" />
        <h1 className="md:text-2xl font-thin">ELECTRONIC WARFARE</h1>
        <p className="text-sm md:text-lg ">Anti-Missile Decoy, Digital Signal Processing and Communication Systems</p>

        </motion.div>

        <motion.div
        initial={{ opacity: 0, y:100 }}
        transition={{ duration: 1.25,delay:.5 }}
        animate={{}}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 1 }}
         className="flex flex-col items-center text-center space-y-2 md:space-y-4">
        <FontAwesomeIcon icon={faLaptopCode} className="lg:text-7xl text-4xl md:text-6xl"/>
        <h1 className="md:text-2xl font-thin">SOFTWARE SOLUTIONS</h1>
        <p className="text-sm md:text-lg">AI powered Computer Vision, and unmanned vehicle control systems</p>
        </motion.div>

        <motion.div
        initial={{ opacity: 0, y:100 }}
        transition={{ duration: 1,delay:.25 }}
        animate={{}}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 1 }}
         className="flex flex-col items-center text-center space-y-2 md:space-y-4">
        <FontAwesomeIcon icon={faSatellite} className="lg:text-7xl text-4xl md:text-6xl" />
        <h1 className="md:text-2xl font-thin">AEROSPACE</h1>
        <p className="text-sm md:text-lg">Customized and mission specific fixedwing and multirotor design</p>
        </motion.div>
        </div>
      
      </motion.div>
    </div>
  );
};

export default Moto;
