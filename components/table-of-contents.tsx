"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function TableOfContents() {
  const [isOpen, setIsOpen] = useState(false)

  const sections = [
    { label: "Hero", id: "hero" },
    { label: "Introduction", id: "introduction" },
    { label: "Resume", id: "resume" },
    { label: "Projects", id: "projects" },
    { label: "Skills", id: "skills" },
    { label: "Leadership", id: "leadership" },
    { label: "Ethics", id: "ethics" },
    { label: "Future Goals", id: "future-goals" },
    { label: "Conclusion", id: "conclusion" },
    { label: "Testimonials", id: "testimonials" },
    { label: "Contact", id: "contact" },
  ]

  return (
    <>
      {/* Desktop TOC */}
      <aside className="hidden lg:block w-64 fixed left-0 top-16 h-[calc(100vh-64px)] bg-card/50 border-r border-border p-6 overflow-y-auto">
        <h2 className="text-sm font-semibold text-primary mb-4 uppercase tracking-wider">Contents</h2>
        <nav className="space-y-2">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
            >
              {section.label}
            </a>
          ))}
        </nav>
      </aside>

      {/* Mobile TOC */}
      <div className="lg:hidden fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-accent transition-colors"
          aria-label="Toggle table of contents"
        >
          <ChevronDown size={24} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
        </button>

        {isOpen && (
          <div className="absolute bottom-16 right-0 bg-card border border-border rounded-lg p-4 w-48 shadow-lg">
            <nav className="space-y-2">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
                  onClick={() => setIsOpen(false)}
                >
                  {section.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </>
  )
}
