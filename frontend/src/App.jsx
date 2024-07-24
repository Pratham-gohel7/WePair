import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { ThemeProvider } from './context/Theme'
import Hero from './components/Hero/Hero';
import Hero1 from './components/Hero/index.jsx';
import ItemsSlider from "./components/Slider/ItemsSlider"
import MostUsed from "./components/MostUsed.jsx"
import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/index.jsx';
import Services from "./components/Services/index.jsx"
import Testimonials from './components/Testimonials/Testimonials.jsx';

function App() {
  
  return (
    <>
      <Header/>
      <Hero1/>
      <Services/> 
      <MostUsed/>
      <Testimonials/>
      <Footer/>
      {/* <Navbar/>
      <Hero/>
      <ItemsSlider/>
      <MostUsed/>
      <Footer/> */}
      
    </>
  )
}

export default App
