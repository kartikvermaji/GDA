import Services from "./Pages/Services";
import Footer from "./Pages/Footer";
import Hero from "./Pages/Hero";
import Navbar from "./Pages/Navbar";
import "./App.css"
import About from "./Pages/About";

export default function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <About/>
      <Services/>
      <Footer/>
    </div>
  );
}
