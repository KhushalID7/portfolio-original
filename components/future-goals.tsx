"use client"

import { motion } from "framer-motion"
import { Target, TrendingUp, BookOpen } from "lucide-react"

export default function FutureGoals() {
  const goals = [
    {
      title: "Short-term Goals",
      icon: Target,
      items: [
        "Complete B.Tech with focus on ML + Embedded Systems",
        "Ship end-to-end demonstrators for SoC and furnace control",
        "Publish technical blog post on SoC methodology",
      ],
    },
    {
      title: "Mid-term Goals",
      icon: TrendingUp,
      items: [
        "Join R&D team in automotive or industrial automation",
        "Contribute to open-source safety-critical frameworks",
        "Build production-grade ML deployment systems",
      ],
    },
    {
      title: "Continuous Learning",
      icon: BookOpen,
      items: [
        "Regular Kaggle participation and competitions",
        "Advanced ML courses and certifications",
        "Hardware labs and embedded systems mastery",
        "Mentoring juniors and knowledge sharing",
      ],
    },
  ]

  return (
    <section id="future-goals" className="py-20 px-4 sm:px-6 lg:px-8 lg:ml-64">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-12 text-primary">Future Aspirations & Professional Development</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {goals.map((goal, i) => {
              const Icon = goal.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-card border border-border rounded-lg"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="text-primary" size={28} />
                    <h3 className="text-lg font-semibold text-foreground">{goal.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {goal.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-muted-foreground text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
