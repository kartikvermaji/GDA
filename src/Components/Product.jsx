import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Kam from "../assets/Kamikaze.jpg"
import mal from "../assets/munution.jpg"
import ant from "../assets/antitank.jpg"
import surv from "../assets/survdrone.jpg"


const Edge = () => {
  return (
    <div className="bg-black font-[poppins] ">
      <div className="flex flex-col justify-center items-center">
      <motion.h1
       initial={{ opacity: 0,y:50 }}
       transition={{ duration:.5,delay:0}}
       animate={{}}
       whileInView={{ opacity:1,y:0 }}
       viewport={{ once: true, amount: 1 }}
       className="text-2xl md:text-5xl text-center pt-20 h-[23vh] lg:pt-28 font-thin text-slate-50">
        OUR PRODUCTS
      </motion.h1>
      <motion.p 
       initial={{ opacity: 0,y:50 }}
       transition={{ duration:.5,delay:0.15}}
       animate={{}}
       whileInView={{ opacity:1,y:0 }}
       viewport={{ once: true, amount: 1 }}
      
       className="text-slate-50 w-[90vw] lg:w-[60vw] lg:text-xl text-center md:mt-10">Our drone lineup includes precision kamikaze, surveillance, loitering munition, and anti-tank drones, each tailored for specific needs. Kamikaze drones offer accuracy with minimal damage, surveillance drones provide real-time data, loitering munitions offer extended flight times, and anti-tank drones target enemy vehicles precisely
      </motion.p >

      <motion.h1
      initial={{ opacity: 0,y:50 }}
      transition={{ duration:.5,delay:0.3}}
      animate={{}}
      whileInView={{ opacity:1,y:0 }}
      viewport={{ once: true, amount: 1 }}
       className="text-slate-50 mt-16 md:mt-20 text-3xl md:text-5xl font-light">OUR SPECIALIZATION</motion.h1>
      </div>
      <motion.div
     
       className="mt-[-1vh] lg:mt-10">
      <HorizontalScrollCarousel />
      </motion.div>
      
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-black">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden ">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.slice(0,4).map((card) => {
            return (<Card card={card} key={card.id} />);
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div key={card.id} className="text-slate-950 ">
      <div className="h-[80vh] w-[100vw] mt-20 flex items-center justify-center">
        <img
          src={card.url}
          alt=""
          className= "mt-[-50vh] md:mt-0 h-[40vh] md:h-[100vh] w-[100vw] object-cover rounded-3xl"
        />
        <div className=" scroll-smooth w-[90vw] md:w-[40vw] lg:w-[35vw] mt-[30vh] md:mt-[-0vh] lg:mt-[-0vh] md:ml-[-55vw] lg:ml-[-55vw] flex flex-col items-center text-center absolute bg-black/95 text-slate-50 p-4 rounded-3xl shadow-xl shadow-slate-900 ">
          <motion.h1
           initial={{ opacity: 0,y:50 }}
           transition={{ duration:.5,delay:0}}
           animate={{}}
           whileInView={{ opacity:1,y:0 }}
           viewport={{ once: true, amount: 1 }}
           className="lg:text-4xl md:text-2xl text-xl border-b-2 pb-2 lg:pb-6 font-light">{card.heading}</motion.h1>
          <motion.p
            initial={{ opacity: 0,y:50 }}
            transition={{ duration:.5,delay:0.15}}
            animate={{}}
            whileInView={{ opacity:1,y:0 }}
            viewport={{ once: true, amount: 1 }}
           className="lg:text-base text-sm lg:mt-10 mt-5 md:text-left w-[80vw] md:w-[30vw] lg:w-[30vw]">{card.p1}</motion.p>
          <motion.p
            initial={{ opacity: 0,y:50 }}
            transition={{ duration:.5,delay:.25}}
            animate={{}}
            whileInView={{ opacity:1,y:0 }}
            viewport={{ once: true, amount: 1 }}
           className="lg:text-base text-sm mt-4 lg:mt-10 text-left w-[80vw] hidden lg:block lg:w-[30vw]">{card.p2}</motion.p>
          <motion.button
          
           className="lg:text-lg font-thin border-2 border-slate-50 px-4 py-1 lg:px-8 lg:py-2 rounded-full mt-2 lg:mt-6 hover:bg-slate-50 hover:text-black duration-200">KNOW MORE</motion.button>
        </div>
      </div>
      
    </div>
    // <div key={card.id} className="text-slate-50">
    //     <div className="h-[60vh] w-[100vw] flex flex-col md:flex-row ">
    //         <motion.img src={card.url} alt="" className="md:h-[80vh] md:w-[50vw] h-[40vh] w-[95vw] object-cover rounded-3xl"  />
    //         <div className="md:w-[40vw] md:mt-20 lg:mt-36 p-4 flex flex-col items-center text-center">
    //             <motion.h1 
    //              initial={{ opacity: 0,scale:1,y:100 }}
    //              transition={{ duration:.75,delay:0}}
    //              animate={{}}
    //              whileInView={{ opacity:1,scale:1,y:0 }}
    //              viewport={{ once: true, amount: 1 }}
    //             className="lg:text-5xl text-2xl font-light border-b-2 pb-2 md:pb-8">{card.heading}</motion.h1>
    //             <motion.p
    //              initial={{ opacity: 0,scale:1,y:100 }}
    //              transition={{ duration:.75,delay:0.15}}
    //              animate={{}}
    //              whileInView={{ opacity:1,scale:1,y:0 }}
    //              viewport={{ once: true, amount: 1 }}
    //              className="lg:text-xl font-thin mt-10">{card.content}</motion.p>
    //         </div>
    //     </div>
    // </div>
  );
};

export default Edge;

const cards = [
  {
    url:Kam,
    heading: "KAMIKAZE DRONES",
    p1:"Experience Precision Strikes with our kamikaze drones, offering unparalleled accuracy for targeted strikes while minimizing collateral damage. Our compact and stealthy design ensures undetected approaches, with speeds reaching up to 150kmph and a quadcopter size of just 22cm diagonally",
    p2:"Customize your ammunition payload from 350g to 4500g for optimal mission outcomes. Benefit from rapid deployment in critical situations and the versatility to launch from multiple platforms, including ground-based systems, aircraft, and ships.",
      id: 1,
      link:"#"
  },
  {
    url:mal,
    heading: "LOITERNING MUNITIONS",
      p1:"Our loitering munitions redefine aerial capabilities with extended flight times, ensuring prolonged surveillance and strike capabilities for critical missions.",
      p2:"Equipped with advanced autonomous intelligence, these drones are agile and responsive, adapting swiftly to changing mission requirements. Their exceptional maneuverability allows them to navigate complex environments with ease, effectively engaging moving targets for unparalleled precision in combat scenarios.",
    id: 2,
    link:"#"
  },
  {
    url:ant,
    heading: "ANTI-TANK DRONES",
   p1:"Anti-tank drones, also referred to as loitering munitions or kamikaze drones, are advanced UAVs meticulously engineered to target and eliminate enemy tanks or armored vehicles with unparalleled precision.",
   p2:"These drones play a crucial role in military operations, offering exceptional capabilities in reconnaissance, surveillance, and tactical strikes. Their extended loitering abilities allow operators to effectively identify and engage targets, whether operated remotely or autonomously with pre-programmed instructions.",
    id: 3,
    link:"#"
  },
  {
    url:surv,
    heading: "SURVEILLANCE DRONES",
    p1:"Surveillance drones, also known as UAVs or reconnaissance aircraft, are unmanned vehicles used for monitoring and collecting information. Equipped with cameras and sensors, they capture images, videos, and data from the air.",
    p2:"These drones find diverse applications in military reconnaissance, border patrol, disaster response, agriculture, and law enforcement. Their primary function is to provide real-time aerial information, enhancing situational awareness and decision-making while minimizing risks to human operators.",
   id: 4,
   link:"#"
  },
  
];
