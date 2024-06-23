import React, { useState } from 'react'
import { motion} from 'framer-motion'
import { useSpring, animated } from "react-spring";
import c1 from "../assets/Kamikaze.jpg"
import ScrollTrigger from "react-scroll-trigger";


function Number({ n }) {
    const { number } = useSpring({
      from: { number: 0 },
      number: n,
      delay: 200,
      config: { mass:1, tension:20, friction: 10 },
    });
    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
  }

const Aboutu = () => {
    const [counterOn, setCounterOn] = useState(false);
  return (
    
    <div className='font-[poppins] p-4 md:p-8 bg-black text-slate-50 md:h-[110vh] lg:h-[100vh]'>
        <div className='flex flex-col md:flex-row mt-16 md:mt-20 lg:mt-24 justify-center md:justify-around h-auto  md:h-[65vh] lg:h-[80vh]'>
          
            <div className='text-slate-50 w-[90vw] md:w-[40vw] lg:mt-[-5vh]  md:p-0 text-center md:text-left'>
                <motion.h1
                initial={{ opacity: 0,y:100 }}
                whileInView={{
                  opacity: 1,
                  y:0,
                  transition: { delay: 0, duration:.5 },
                }}
                viewport={{ once:true, amount: 0.5 }}
                 className='lg:text-5xl text-2xl font-semibold  lg:mt-10'>Leading the Future of National Security</motion.h1>


<motion.img 
            initial={{ opacity: 0,y:100 }}
            whileInView={{
              opacity: 1,
              y:0,
              transition: { delay: 0, duration:.5 },
            }}
            viewport={{ once:true, amount: 0.5 }}
            src={c1} alt="" className='mt-5 lg:h-[70vh] md:hidden md:h-[65vh] h-[35vh] object-cover rounded-[2rem] shadow-slate-700 shadow-2xl ' />

                <motion.p
                initial={{ opacity: 0,y:100 }}
                whileInView={{
                  opacity: 1,
                  y:0,
                  transition: { delay: 0.15, duration:.5 },
                }}
                viewport={{ once:true, amount: 0.5 }}
                 className='lg:text-base text-sm mt-4 lg:mt-8 w-[90vw] md:w-[40vw]'>Garg Defence & Aerospace is dedicated to advancing national security through specialized UAVs. Our range includes precision kamikaze drones, advanced loitering munitions, anti-tank drones, and surveillance UAVs, each designed with cutting-edge technology for unparalleled capabilities. </motion.p>
                    <motion.p
                    initial={{ opacity: 0,y:100 }}
                    whileInView={{
                      opacity: 1,
                      y:0,
                      transition: { delay:0.25, duration:.5 },
                    }}
                    viewport={{ once:true, amount: 0.5 }}
                     className='lg:text-base text-sm mt-4 lg:mt-8 w-[90vw] md:w-[40vw]'>
                    With a focus on innovation and quality commitment, we redefine defense and ensure optimal performance in critical missions, safeguarding lives and enhancing operational effectiveness.</motion.p>

                        <ScrollTrigger
                        onEnter={() => setCounterOn(true)}
                        onExit={() => setCounterOn(false)}
                        >
                            <div className='flex justify-center items-center mt-5 lg:mt-10 space-x-5  lg:space-x-10'>

                            <motion.div
                            initial={{ opacity: 0,y:100 }}
                            whileInView={{
                              opacity: 1,
                              y:0,
                              transition: { delay:0.25, duration:.5 },
                            }}
                            viewport={{ once:true, amount: 0.5 }}
                             className='flex flex-col justify-center items-center text-center'>
                                <div className='flex text-3xl lg:text-5xl'> <p>{counterOn && <Number n={800} /> }</p>
                                <p>+</p></div>
                                <p className='lg:text-xl' >Projects</p>
                            </motion.div>

                            <motion.div 
                            initial={{ opacity: 0,y:100 }}
                            whileInView={{
                              opacity: 1,
                              y:0,
                              transition: { delay:0.4, duration:.5 },
                            }}
                            viewport={{ once:true, amount: 0.5 }}
                            className='flex flex-col justify-center items-center text-center'>
                                <div className='flex text-3xl lg:text-5xl'> <p>{counterOn && <Number n={100} /> }</p>
                                <p>+</p></div>
                                <p className='lg:text-xl' >Happy Clients</p>
                            </motion.div>

                            <motion.div
                            initial={{ opacity: 0,y:100 }}
                            whileInView={{
                              opacity: 1,
                              y:0,
                              transition: { delay:0.35, duration:.5 },
                            }}
                            viewport={{ once:true, amount: 0.5 }}
                             className='flex flex-col justify-center items-center text-center'>
                                <div className='flex text-3xl lg:text-5xl'> <p>{counterOn && <Number n={20} /> }</p>
                                <p>+</p></div>
                                <p className='lg:text-xl' >Years Experience</p>
                            </motion.div>

                    
                            </div>


                        </ScrollTrigger>



                
            </div>
            <motion.img 
            initial={{ opacity: 0,y:100 }}
            whileInView={{
              opacity: 1,
              y:0,
              transition: { delay: 0, duration:.5 },
            }}
            viewport={{ once:true, amount: 0.5 }}
            src={c1} alt="" className=' hidden md:block lg:h-[70vh] md:h-[65vh] md:w-[45vw]  h-[55vh] object-cover rounded-[5rem] shadow-slate-700 shadow-2xl ' />
        </div>
      
    </div>
  )
}

export default Aboutu
