"use client"

import { motion } from "framer-motion"

export default function Skills() {
  const skillCategories = [
    {
      title: "Machine Learning & Data Analysis",
      skills: ["Scikit-Learn", "Pandas", "NumPy", "Matplotlib", "XGBoost", "Neural Networks"],
      level: 85,
    },
    {
      title: "Embedded Systems & Control",
      skills: ["Arduino", "PID Control", "MAX6675", "Shift Registers", "Firmware Development"],
      level: 80,
    },
    {
      title: "Computer Vision & Detection",
      skills: ["YOLO", "OpenCV", "Real-time Processing", "Image Processing"],
      level: 75,
    },
    {
      title: "Full-Stack Development",
      skills: ["React", "Python", "PostgreSQL", "Streamlit", "Web APIs"],
      level: 80,
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 lg:ml-64 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-12 text-primary">Advanced Technical Skills & Mastery</h2>

          <div className="space-y-8">
            {skillCategories.map((category, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.05 }}
                viewport={{ once: true }}
              >
                <h4 className="font-semibold text-foreground mb-2">{category.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((item) => (
                    <motion.span
                      key={item}
                      className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm cursor-default"
                      whileHover={{ scale: 1.05, backgroundColor: "var(--color-primary)" ,color: "var(--color-primary-foreground)"}}
                      transition={{ duration: 0.2 }}
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
