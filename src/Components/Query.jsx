import React from "react";
import ps from "../assets/survdrone.jpg";
import { motion, useTransform, useViewportScroll } from "framer-motion";

const Page2 = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 1.1]);
  return (
    <div  id="contact" className="bg-black lg:pt-32  text-slate-50 pt-20 md:space-x-5 l flex justify-center items-centermd:pt-10 md:p-3 md:pt-20  lg:p-20 h-[90vh] md:h-[100vh]">
      <div>
        <motion.img
     initial={{ opacity: 0,y:150 }}
     whileInView={{
       opacity: 1,
       y:0,
       transition: { delay: 0, duration:1 },
     }}
     viewport={{ once:true, amount: 0.5 }}
          src={ps}
          alt=""
          className=" hidden md:block lg:mt-0 h-[80vh]  lg:h-[75vh] lg:w-[40vw] w-[45vw] lg:ml-[-5vw]  object-cover rounded-2xl hover:shadow-2xl hover:shadow-slate-500 duration-200"
        />
      </div>

      <div className="text-center flex flex-col  lg:ml-[-20vw]  md:ml-[-10vw] md:pl-0 items-center">
        <motion.h1
         initial={{ opacity: 0, y: 50 }}
         whileInView={{
           opacity: 1,
           y: 0,
           transition: { delay: 0, duration: 1 },
         }}
         viewport={{ once: true, amount: 0.5 }}
         className="font-extralight lg:text-4xl text-2xl">
          Have Questions ?<br />
          We're Here{" "}
        </motion.h1>
        <motion.button 
         initial={{ opacity: 0, y: 50 }}
         whileInView={{
           opacity: 1,
           y: 0,
           transition: { delay: 0, duration: 1 },
         }}
         viewport={{ once: true, amount: 0.5 }}
        className="lg:text-lg lg:mt-5 mt-5  font-sans font-lightbold hover:shadow-2xl hover:shadow-slate-200  hover:bg-slate-950 hover:text-slate-50 border-2 duration-200 bg-slate-50 text-slate-950 px-3 lg:px-2 w-[37vw] lg:w-[10vw] py-1 lg:py-1 rounded-full">
          Get in Touch
        </motion.button>
        <div className="flex flex-col mt-5 lg:mt-10">
          <form
            action=""
            className="flex flex-col space-y-2 lg:space-y-3 justify-center items-center"
          >
            <motion.input
             initial={{ opacity: 0, y: 50 }}
             whileInView={{
               opacity: 1,
               y: 0,
               transition: { delay: 0, duration: 1 },
             }}
             viewport={{ once: true, amount: 0.5 }}
              type="text"
              placeholder="Your Name"
              className="bg-transparent hover:shadow-2xl hover:shadow-slate-500 w-[70vw] md:w-[40vw] lg:w-[30vw]   border-2 lg:px-28 lg:py-2 text-lg lg:text-2xl hover:bg-orange-500 hover:text-slate-950 duration-200 hover:border-orange-500 rounded-full text-center"
            />
            <motion.input
             initial={{ opacity: 0, y: 50 }}
             whileInView={{
               opacity: 1,
               y: 0,
               transition: { delay: 0, duration: 1 },
             }}
             viewport={{ once: true, amount: 0.5 }}
              type="text"
              placeholder="Your Email"
              className="bg-transparent  w-[70vw] md:w-[40vw] lg:w-[30vw]   border-2 lg:px-28 lg:py-2 text-lg lg:text-2xl hover:shadow-2xl hover:shadow-slate-500  hover:bg-orange-500 hover:text-slate-950 duration-200 hover:border-orange-500 rounded-full text-center"
            />
            <motion.textarea
             initial={{ opacity: 0, y: 50 }}
             whileInView={{
               opacity: 1,
               y: 0,
               transition: { delay: 0, duration: 1 },
             }}
             viewport={{ once:true, amount: 0.5 }}
              name=""
              id=""
              cols="30"
              rows="4"
              placeholder="Your Thoughts" 
              className="bg-transparent  w-[70vw] md:w-[40vw] lg:w-[30vw]  lg:px-28 lg:py-2 duration-200 pt-5  hover:shadow-2xl hover:shadow-slate-500 text-lg lg:text-2xl hover:bg-orange-500 hover:text-slate-950 border-2  hover:border-orange-500 rounded-[6vh] lg:rounded-[8vh] text-center"
            ></motion.textarea>
            <motion.button
             initial={{ opacity: 0, y: 50 }}
             whileInView={{
               opacity: 1,
               y: 0,
               transition: { delay: 0, duration: 1 },
             }}
             viewport={{ once: true, amount: 0.5 }}
             className="lg:text-xl text-lg lg:mt-10 mt-5 font-sans font-lightbold hover:shadow-2xl hover:shadow-slate-500  hover:bg-slate-950 hover:text-slate-50 border-2 duration-200 bg-orange-500 border-orange-500 text-slate-950 px-3 lg:px-8 w-[25vw] lg:w-[12vw] py-1 lg:py-2 rounded-full">
              Send
            </motion.button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page2;
