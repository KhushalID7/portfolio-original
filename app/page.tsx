"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import TableOfContents from "@/components/table-of-contents"
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
import ScrollProgress from "@/components/scroll-progress"

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
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="flex">
        <TableOfContents />
        <div className="flex-1">
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
        </div>
      </main>
      <Footer />
    </div>
  )
}
