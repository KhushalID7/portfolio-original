"use client"

import { motion } from "framer-motion"
import { Users, Trophy, Zap } from "lucide-react"

export default function Leadership() {
  const experiences = [
    {
      role: "Event Management & Creative Head",
      organization: "Anirveda - Techno Economic Club, PDEU",
      period: "2024-25",
      description:
        "Lead a team, hosted events, developed rule books, and managed budget paperwork. Currently organizing Breach 2025 (hackathon with ₹1.5 lakh prize pool), handling fundraising and paperwork management.",
      icon: Users,
    },
    {
      role: "Event Management SUBCOM Member",
      organization: "Anirveda - Techno Economic Club, PDEU",
      period: "2023-24",
      description:
        "Assisted in planning and executing events such as IPL Auction, Global-o-poly, and Ambush, ensuring participant decorum.",
      icon: Trophy,
    },
    {
      role: "Pre Tech Nova Hackathon Winner",
      organization: "Achievement",
      period: "2024",
      description:
        "Won the Pre Tech Nova Hackathon, demonstrating technical excellence and innovative problem-solving.",
      icon: Zap,
    },
  ]

  return (
    <section id="leadership" className="py-20 px-4 sm:px-6 lg:px-8 lg:ml-64">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-12 text-primary">Leadership & Collaboration</h2>

          <div className="space-y-6">
            {experiences.map((exp, i) => {
              const Icon = exp.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-card border border-border rounded-lg hover:border-primary transition-colors"
                >
                  <div className="flex gap-4">
                    <div className="p-3 bg-primary/20 rounded-lg h-fit">
                      <Icon size={24} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
                      <p className="text-primary text-sm mb-1">{exp.organization}</p>
                      <p className="text-muted-foreground text-sm mb-3">{exp.period}</p>
                      <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
