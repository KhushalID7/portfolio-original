"use client"

import { motion } from "framer-motion"

export default function Introduction() {
  return (
    <section id="introduction" className="py-20 px-4 sm:px-6 lg:px-8 lg:ml-64">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6 text-primary">Introduction & Learning Philosophy</h2>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            I am a Computer Science undergraduate focused on applied machine learning and embedded systems. My learning
            journey has combined hands-on hardware projects (Arduino, PID control) with AI-driven solutions (object
            detection, SoC prediction). I value iterative experimentation, reproducibility, and building solutions that
            bridge research and deployment.
          </p>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            My approach emphasizes multidisciplinary synthesis: pairing physical systems with data-driven models to
            solve real-world problems efficiently and safely.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Curiosity-driven experimentation",
              "Reproducibility & clean engineering",
              "Ethical responsibility & global impact",
              "Collaborative leadership & mentorship",
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-4 bg-card rounded-lg border border-border"
              >
                <p className="text-foreground font-medium">{value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
