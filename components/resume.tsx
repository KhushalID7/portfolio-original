"use client"

import { motion } from "framer-motion"
import { Download, Mail, Phone, MapPin } from "lucide-react"

export default function Resume() {
  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 lg:ml-64 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-primary">Resume & CV</h2>
            <a
              href="/Khushal Shroff Resume.pdf"
              download="Khushal Shroff Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-accent transition-colors"
            >
              <Download size={20} /> Download PDF
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <h3 className="text-lg font-semibold text-primary mb-4">Contact</h3>
              <div className="space-y-3">
                <a
                  href="mailto:khushalshroff7@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail size={18} /> khushalshroff7@gmail.com
                </a>
                <a
                  href="tel:7567050799"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Phone size={18} /> +91 7567050799
                </a>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin size={18} /> Gandhinagar, Gujarat
                </div>
              </div>
            </motion.div>

            {/* Education & Experience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-primary mb-4">Education</h3>
                <div className="space-y-4">
                  <div className="border-l-2 border-primary pl-4">
                    <h4 className="font-semibold text-foreground">B.Tech Computer Science & Engineering</h4>
                    <p className="text-muted-foreground">Pandit Deendayal Energy University, Gandhinagar</p>
                    <p className="text-sm text-muted-foreground">2023 - 2027 | CGPA: 8.47/10</p>
                  </div>
                  <div className="border-l-2 border-primary pl-4">
                    <h4 className="font-semibold text-foreground">12th Science</h4>
                    <p className="text-muted-foreground">Doon Public School Bhuj</p>
                    <p className="text-sm text-muted-foreground">2021 - 2023 | 85%</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-primary mb-4">Experience</h3>
                <div className="border-l-2 border-primary pl-4">
                  <h4 className="font-semibold text-foreground">Machine Learning Intern</h4>
                  <p className="text-muted-foreground">Innovation Intellect Pvt Ltd</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Developed object detection prototype using YOLO; built Streamlit web app to demo model; saved frames
                    into PostgreSQL during capture.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-12 pt-12 border-t border-border"
          >
            <h3 className="text-lg font-semibold text-primary mb-6">Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Languages", items: ["C++", "Python", "Java"] },
                { title: "Frameworks", items: ["Scikit-Learn", "LangChain", "YOLO", "Streamlit"] },
                { title: "Hardware", items: ["Arduino", "MAX6675", "74HC595", "OWON Power Supply"] },
                { title: "Databases", items: ["MySQL", "PostgreSQL"] },
              ].map((category, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.05 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-semibold text-foreground mb-2">{category.title}</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <span key={item} className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
