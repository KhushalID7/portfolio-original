"use client"

import { motion } from "framer-motion"

export default function Conclusion() {
  return (
    <section id="conclusion" className="py-20 px-4 sm:px-6 lg:px-8 lg:ml-64 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 text-primary">Conclusion & Self-Assessment</h2>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="p-6 bg-card border border-border rounded-lg"
            >
              <h3 className="text-lg font-semibold text-primary mb-4">Key Achievements</h3>
              <ul className="space-y-2">
                {[
                  "CGPA: 8.47/10 - Consistent academic excellence",
                  "Pre Tech Nova Hackathon Winner - Demonstrated innovation",
                  "97.7th percentile in rapid chess - Strategic thinking & discipline",
                  "4 major projects spanning ML, Embedded Systems, and CV",
                  "Leadership role in organizing Breach 2025 hackathon (₹1.5 lakh prize pool)",
                ].map((achievement, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground">{achievement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div className="p-6 bg-card border border-border rounded-lg">
                <h3 className="text-lg font-semibold text-primary mb-4">Strengths</h3>
                <ul className="space-y-2">
                  {[
                    "Hands-on embedded + ML experience",
                    "Proven project delivery",
                    "Leadership & team collaboration",
                    "Multidisciplinary problem-solving",
                  ].map((strength, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-accent">→</span>
                      <span className="text-muted-foreground text-sm">{strength}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 bg-card border border-border rounded-lg">
                <h3 className="text-lg font-semibold text-primary mb-4">Growth Areas</h3>
                <ul className="space-y-2">
                  {[
                    "Production ML deployment at scale",
                    "Large-scale data operations",
                    "Advanced cloud infrastructure",
                    "Industry-standard DevOps practices",
                  ].map((area, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-accent">→</span>
                      <span className="text-muted-foreground text-sm">{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-6 bg-card border border-border rounded-lg"
            >
              <h3 className="text-lg font-semibold text-primary mb-4">Self-Reflection</h3>
              <p className="text-muted-foreground leading-relaxed">
                My journey has been defined by curiosity and hands-on experimentation. I've successfully bridged the gap
                between theoretical knowledge and practical implementation, delivering projects that solve real-world
                problems. Moving forward, I'm committed to deepening my expertise in production systems, contributing to
                open-source initiatives, and mentoring the next generation of engineers. I believe that technical
                excellence combined with ethical responsibility and collaborative spirit is the foundation for
                meaningful impact in technology.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
