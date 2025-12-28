"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import Hero from "./components/Hero"
import ComponentShowcase from "./components/ComponentShowcase"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

export default function App() {
  const { resolvedTheme, setTheme } = useTheme()
  const theme = resolvedTheme === "light" ? "light" : "dark"
  const [font, setFont] = useState(() => {
    if (typeof window === "undefined") return "boldpixels"
    const saved = localStorage.getItem("prevaia-font")
    return saved === "roboto" ? "roboto" : "boldpixels"
  })

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const toggleFont = () => {
    setFont((prev) => (prev === "boldpixels" ? "roboto" : "boldpixels"))
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-font", font)
    localStorage.setItem("prevaia-font", font)
  }, [font])

  return (
    <div className={theme}>
      <div className="bg-background text-foreground transition-colors duration-300">
        <Navbar theme={theme} onThemeToggle={toggleTheme} font={font} onFontToggle={toggleFont} />
        <main>
          <Hero />
          <ComponentShowcase />
        </main>
        <Footer />
      </div>
    </div>
  )
}
