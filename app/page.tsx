"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Introduction from "@/components/introduction"
import Resume from "@/components/resume"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Leadership from "@/components/leadership"
import Ethics from "@/components/ethics"
import FutureGoals from "@/components/future-goals"
import Conclusion from "@/components/conclusion"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import TableOfContents from "@/components/table-of-contents"
import ScrollProgress from "@/components/scroll-progress"
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect"

export default function Home() {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    const saved = localStorage.getItem("darkMode")
    if (saved !== null) {
      setDarkMode(JSON.parse(saved))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode))
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  return (
    <div className="relative min-h-screen">
      {/* Background Ripple Effect - Behind everything, excluding sidebar */}
      <BackgroundRippleEffect cellSize={50} />
      
      {/* Main Content - Above background */}
      <div className="relative z-20">
        <TableOfContents />
        <ScrollProgress />
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Hero />
        <Introduction />
        <Resume />
        <Projects />
        <Skills />
        <Leadership />
        <Ethics />
        <FutureGoals />
        <Conclusion />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}
