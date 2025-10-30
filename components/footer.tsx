"use client"

import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <p className="text-muted-foreground text-sm">© 2025 Khushal Shroff. All rights reserved.</p>
          <p className="text-muted-foreground text-sm">Built with React, Tailwind CSS, and Framer Motion</p>
        </motion.div>
      </div>
    </footer>
  )
}
