"use client"

import { motion } from "framer-motion"
import { Shield, Lock, AlertCircle } from "lucide-react"

export default function Ethics() {
  return (
    <section id="ethics" className="py-20 px-4 sm:px-6 lg:px-8 lg:ml-64 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 text-primary">Ethics, Safety & Global Context</h2>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="p-6 bg-card border border-border rounded-lg"
            >
              <div className="flex gap-4 mb-4">
                <Lock className="text-primary flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Privacy & Data Minimization</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    When deploying ML models (e.g., object detection), I prioritize privacy by avoiding PII capture,
                    implementing data minimization strategies, and maintaining transparent performance evaluation. In
                    the Object Detection project, frames are stored in a database with compression and retention
                    policies to protect user data.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-card border border-border rounded-lg"
            >
              <div className="flex gap-4 mb-4">
                <Shield className="text-primary flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Safety & Reliability</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Embedded systems interacting with high-temperature furnaces require safety interlocks and failsafes.
                    The furnace controller project includes hardware-level cutoffs and redundant temperature checks to
                    ensure safe operation even in failure scenarios.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-6 bg-card border border-border rounded-lg"
            >
              <div className="flex gap-4 mb-4">
                <AlertCircle className="text-primary flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Environmental & Social Impact</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The SoC prediction project for EVs contributes to sustainable transportation by optimizing battery
                    usage and reducing range anxiety. I consider potential failure modes, implement mitigation
                    strategies through testing and redundancy, and evaluate environmental impact in all technical
                    decisions.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
