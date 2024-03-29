import React from 'react'
import Hero from "../Components/Hero"
import Navbar from '../Components/Navbar'
import About from '../Components/About'
import Edge from '../Components/Edge'
import Services from '../Components/Services'
import Footer from '../Components/Footer'
import Product from '../Components/Product'

const HomePage = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Services/>
      <Product/>
      <Edge/>
     
      <Footer/>
      <Navbar/>

    </div>
  )
}

export default HomePage
