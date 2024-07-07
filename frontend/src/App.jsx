import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { ThemeProvider } from './context/Theme'
import Hero from './components/Hero/Hero';
import ItemsSlider from "./components/Slider/ItemsSlider"


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
      <Navbar/>
      <Hero/>
      <ItemsSlider/>
    </ThemeProvider>
  )
}

export default App
