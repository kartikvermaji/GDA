import React, { useState } from 'react'
import gdab from "../assets/gdab (1).jpg"
import { faBars ,faXmark} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  const[open,setOpen]=useState(false)
  return (
    <div className=' flex justify-center '>
    <div className='flex p-2 justify-around w-[100vw] md:w-[90vw] text-xl pt-4  md:pt-8 rounded-full text-slate-50 bg-black'>
      <div>
        <a href="#home"><img src={gdab} alt="" className='lg:h-12 h-8 ' /></a>
        
        
      </div>

      <div className='lg:space-x-10 space-x-5 font-normal pt-1 md:block hidden text-sm  lg:text-xl'>
       
        <a href="#home" className='hover:text-slate-400 duration-200'>Home</a>
        <a href="#about"className='hover:text-slate-400 duration-200'>About Us</a>
        <a href="#services" className='hover:text-slate-400 duration-200'>Services</a>
        <a href="#" className='hover:text-slate-400 duration-200'>Products</a>
        
        <a href="#" className='hover:text-slate-400 duration-200'>Contact Us</a>
      </div>

      <div className='md:block hidden'>
        <button className='border-2 px-3 text-sm lg:text-xl  lg:px-5 py-1 rounded-full hover:bg-slate-50 hover:text-black duration-200'>Buy</button>
      </div>

      <div>
        <button className="md:hidden" >
        <FontAwesomeIcon icon={faBars} />
        </button>
        {open && (<div className="">
            
            <div className="flex flex-col fixed top-[15vh] left-[20vw] z-999 p-10 text-xl text-center text-slate-700 bg-slate-200 rounded-lg">
            <div><button className="text-xl text-slate-800  hover:text-slate-400 hover:drop-shadow-xl sticky top-5"onClick={()=>{setOpen(!open)}} ><FontAwesomeIcon icon={faXmark} /></button></div>
        <a href="#home" className="p-3 hover:text-slate-400 hover:drop-shadow-xl">Home</a>
        <a href="#about"  className="p-3 hover:text-slate-400 hover:drop-shadow-xl ">About Us</a>
        <a href="#skills"  className="p-3 hover:text-slate-400 hover:drop-shadow-xl ">Products</a>
        <a href="#experience"  className="p-3 hover:text-slate-400 hover:drop-shadow-xl ">Careers</a>
        <a href="#portfolio"  className="p-3 hover:text-slate-400 hover:drop-shadow-xl ">Contact Us</a>

      </div>
        </div>)}
      </div>

    </div>
    </div>
  )
}

export default Navbar
