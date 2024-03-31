import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Edge = () => {
  return (
    <div className="bg-black">
      <h1 className="text-3xl md:text-5xl text-center pt-5 md:pt-10 h-[15vh]  font-thin text-slate-50">
        Our Edge
      </h1>
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-black">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    // <div key={card.id} className="text-slate-950 ">
    //   <div className="h-[90vh] w-[100vw] flex items-center justify-center">
    //     <img
    //       src={card.url}
    //       alt=""
    //       className="h-[90vh] w-[100vw] object-cover rounded-3xl"
    //     />
    //     <div className="w-[50vw] mt-36 p-4 flex flex-col items-center text-center absolute">
    //       <h1 className="text-5xl font-semibold border-b-2 pb-8">
    //         {card.heading}
    //       </h1>
    //       <p className="text-xl font-normal mt-10">{card.content}</p>
    //     </div>
    //   </div>
    // </div>
    <div key={card.id} className="text-slate-50">
        <div className="h-[60vh] w-[100vw] flex flex-col md:flex-row  ">
            <motion.img src={card.url} alt="" className="md:h-[80vh] md:w-[50vw] h-[40vh] w-[95vw] object-cover rounded-3xl mt-[-8vh] md:mt-0"  />
            <div className="md:w-[40vw] md:mt-20 lg:mt-36 p-4 flex flex-col items-center text-center">
                <motion.h1 
                 initial={{ opacity: 0,scale:1,y:100 }}
                 transition={{ duration:.75,delay:0}}
                 animate={{}}
                 whileInView={{ opacity:1,scale:1,y:0 }}
                 viewport={{ once: true, amount: 1 }}
                className="lg:text-5xl text-2xl font-light border-b-2 pb-2 md:pb-8">{card.heading}</motion.h1>
                <motion.p
                 initial={{ opacity: 0,scale:1,y:50 }}
                 transition={{ duration:.75,delay:0.15}}
                 animate={{}}
                 whileInView={{ opacity:1,scale:1,y:0 }}
                 viewport={{ once: true, amount: 1 }}
                 className="lg:text-xl font-thin mt-2 md:mt-10">{card.content}</motion.p>
            </div>
        </div>
    </div>
  );
};

export default Edge;

const cards = [
  {
    url: "https://wallpapercave.com/wp/wp1896554.jpg",
    heading: "World-class tech research and design",
    content:
      "Garg’s dedicated technical departments, staffed by experts with decades of experience in the field specialise in creating exceptional products through world-class research and development.",
    id: 1,
  },
  {
    url: "https://wallpapercave.com/wp/wp1896575.jpg",
    heading: "User-driven design approach",
    content:
      "Our thorough understanding of end-user operational requirements and the ability to customize and optimize our products for a wide range of applications.",
    id: 2,
  },
  {
    url: "https://wallpapercave.com/wp/wp1896533.jpg",
    heading: "Global tech and Defence collaboration",
    content:
      "We partner with renowned tech giants and tap into the expertise of experienced national and international defence personnel, to ensure timely success of every venture.",
    id: 3,
  },
  
];
