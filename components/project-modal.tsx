"use client"

import { motion } from "framer-motion"
import { X, Github, ExternalLink } from "lucide-react"

interface ProjectModalProps {
  project: any
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-card border border-border rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="sticky top-0 flex justify-between items-center p-6 border-b border-border bg-card">
          <h2 className="text-2xl font-bold text-foreground">{project.title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-primary/20 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-primary mb-2">Overview</h3>
            <p className="text-muted-foreground leading-relaxed">{project.fullDescription}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-primary mb-3">Methodologies</h3>
            <ul className="space-y-2">
              {project.methodologies.map((m: string, i: number) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">{m}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-primary mb-2">Outcomes & Innovations</h3>
            <p className="text-muted-foreground leading-relaxed">{project.outcomes}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-primary mb-3">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t: string) => (
                <span key={t} className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-4 pt-4 border-t border-border">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-accent transition-colors"
            >
              <Github size={20} /> View on GitHub
            </a>
            {project.kaggle && (
              <a
                href={project.kaggle}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors"
              >
                <ExternalLink size={20} /> Kaggle Dataset
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
