import React from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faInstagram,faFacebook,faLinkedin,faGoogle} from '@fortawesome/free-brands-svg-icons'
import gdab from "../assets/gdab (1).jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="lg:h-[60vh] md:h-[80vh]  bg-black text-slate-50 flex flex-col items-center">
      <div className="flex flex-col md:flex-row justify-center md:space-x-28 pt-10 border-b-2 pb-10 w-[90vw] border-slate-50 bg-black text-slate-50 ">
        <div>
          <h1 className="lg:text-8xl md:text-6xl text-3xl text-orange-500 font-extrabold">Get  <br />Connected </h1>
        </div>
        <div >
          <p className="md:text-lg textsm font-thin">
          Supercharge your business with the power of drones! Shop our extensive drone selection and unlock exclusive deals. Get more for your money, save big, and watch your deliveries take flight – faster, smoother, and more efficient than ever.


{" "}
          </p>
          <a href="mailto:garvgarg111@gmail.com"><button className="border-2 lg:mt-10 mt-5 hover:shadow-2xl hover:shadow-slate-500 md:py-2 hover:bg-slate-50 duration-200 hover:text-slate-950  rounded-full lg:text-lg flex lg:space-x-32 lg:px-3">
            <p className="pt-2 p-2  "> Write Your email here...</p>
            <FontAwesomeIcon icon={faArrowRight}  className="md:text-2xl px-4 text-slate-50 bg-orange-500 py-3 rounded-full"/>
          </button></a>
          
        </div>
      </div>

      <div className="flex flex-col space-y-2 md:flex-row justify-around w-[90vw] pt-5 md:pt-10">
        <div>
          <a href="#home"><img src={gdab} alt="" className="h-16" /></a>
            
        </div>
        <div className="flex justify-around md:space-x-5 lg:space-x-12 text-xl lg:text-4xl">
            <a href="https://www.instagram.com/gargdefence?utm_source=qr&igsh=eTJubXRmNjd3Zm5n"><FontAwesomeIcon icon={faInstagram} /></a>
            {/* <a href="#"><FontAwesomeIcon icon={faFacebook} /></a> */}
            <a href="https://www.linkedin.com/company/garg-defence/"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="mailto:garvgarg111@gmail.com"><FontAwesomeIcon icon={faGoogle} /></a>
        </div>
        <div>
            <h1 className="lg:text-lg">&copy;2024 GDA .All Rights Reserved</h1>
        </div>

      </div>
    </div>
  );
};

export default Footer;
