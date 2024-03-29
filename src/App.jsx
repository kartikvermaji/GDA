import "./App.css"
import { BrowserRouter, Navigate, Routes, Route, Router } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ProductsPage from "./Pages/ProductsPage";
import AboutPage from "./Pages/AboutPage";
import Navbar from "./Components/Navbar";
import ServicePage from "./Pages/ServicePage";
import ContactPage from "./Pages/ContactPage";


export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/services" element={<ServicePage/>}/>
        <Route path="/products" element={<ProductsPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  );
}
