"use client"

import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-background to-card/20"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden border-2 border-primary shadow-lg">
            <motion.img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KHUSHAL_pic-VJbu1XQOy0FImf0xBbhKAUf1XZkSNp.jpg"
              alt="Khushal Shroff"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl sm:text-6xl font-bold mb-4 text-balance"
        >
          Khushal Shroff
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-muted-foreground mb-4"
        >
          B.Tech Computer Science & Engineering
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
        >
          Problem-solving at the intersection of embedded systems and applied machine learning — building practical,
          scalable solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-accent transition-colors font-medium"
          >
            View Projects <ArrowRight size={20} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors font-medium"
          >
            Get in Touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex justify-center gap-6"
        >
          <a
            href="https://github.com/KhushalID7"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-card hover:bg-primary/20 rounded-lg transition-colors"
            aria-label="GitHub"
          >
            <Github size={24} className="text-primary" />
          </a>
          <a
            href="https://www.linkedin.com/in/khushal-shroff-64720a294/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-card hover:bg-primary/20 rounded-lg transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} className="text-primary" />
          </a>
          <a
            href="mailto:khushalshroff7@gmail.com"
            className="p-3 bg-card hover:bg-primary/20 rounded-lg transition-colors"
            aria-label="Email"
          >
            <Mail size={24} className="text-primary" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
