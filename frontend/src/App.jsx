import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { ThemeProvider } from './context/Theme'
import Hero from './components/Hero/Hero';
import Hero1 from './components/Hero/index.jsx';
import ItemsSlider from "./components/Slider/ItemsSlider"
import MostUsed from "./components/MostUsed/index.jsx"
import Footer from './components/Footer/Footer.jsx';
import Widget from './components/Try/Widget.jsx';
import Header from './components/Header/index.jsx';


function App() {
  const [themeMode, setThemeMode] = useState("light");
  const lightMode = () => {
    setThemeMode("light")
  }

  const darkMode = () => {
    setThemeMode("dark")
  }

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark");
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])
  return (
    <ThemeProvider value={{themeMode, darkMode, lightMode}}>
      <Header/>
      <Hero1/>
      {/* <Navbar/>
      <Hero/>
      <ItemsSlider/>
      <MostUsed/>
      <Footer/> */}
      {/* <Widget/> */}
    </ThemeProvider>
  )
}

export default App
