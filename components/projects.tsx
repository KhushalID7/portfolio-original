"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"
import ProjectModal from "./project-modal"
import { CardSpotlight } from "@/components/ui/card-spotlight"

const projects = [
	{
		id: 1,
		title: "SoC Calculation Using ML",
		category: "ML",
		description:
			"Applying ML to EV trip datasets to estimate State of Charge with error <0.02%. Website with map to nearest EV charging station.",
		tech: ["Python", "Scikit-Learn", "XGBoost", "React", "PostgreSQL"],
		github: "https://github.com/KhushalID7/SnT-hackathon-2024",
		kaggle: "https://www.kaggle.com/datasets/atechnohazard/battery-and-heating-data-in-real-driving-cycles",
		fullDescription:
			"Applying machine learning to EV car trip dataset. Multiple trips were taken into account to calculate the State of Charge (SoC) reducing error less than 0.02%. Implemented in a website where multiple parameters can be used through sensors to calculate SoC and also provided maps functionality which shows the nearest EV charging station.",
		methodologies: [
			"Time-series preprocessing",
			"Feature engineering per trip",
			"ML regression models",
			"Cross-trip normalization",
			"GPS/map integration",
		],
		outcomes:
			"SoC prediction MAPE/RMSE reduction to <0.02 error; integration with mapping APIs to suggest charging stations.",
	},
	{
		id: 2,
		title: "Smart Traffic Light System",
		category: "Embedded",
		description:
			"IoT IR-sensor-based adaptive traffic light using Arduino and 74HC595 shift register.",
		tech: ["Arduino", "C++", "IR Sensors", "74HC595"],
		github: "https://github.com/KhushalID7/Smart-traffic-signal",
		fullDescription:
			"An IoT-based project where IR sensors are used to detect density (scalable with CV & cameras) and change red/green intervals. Arduino was used as the micro-controller and a shift register (74HC595).",
		methodologies: [
			"Embedded firmware on Arduino",
			"Sensor debounce & sampling",
			"State machine for light scheduling",
			"Optional CV integration",
		],
		outcomes:
			"Adaptive traffic intervals demo with scalable architecture for camera+CV pipeline.",
	},
	{
		id: 3,
		title: "Furnace Temperature Controller",
		category: "Embedded",
		description:
			"PID controller using Arduino & MAX6675; scaling to 1200°C furnace implementation.",
		tech: ["Arduino", "C++", "MAX6675", "PID Control", "OWON Power Supply"],
		github: "https://github.com/KhushalID7/furnace-temperature-controller",
		fullDescription:
			"A PID controller implemented by code which controls an OWON power supply heating a heater whose temperature is detected using Arduino and MAX6675 Module. This project is being scaled right now where this control system is going to be implemented in furnace of temperature range 1200°C.",
		methodologies: [
			"PID tuning",
			"Thermocouple interfacing via MAX6675",
			"Control loop on microcontroller",
			"Power supply control",
		],
		outcomes:
			"Proof-of-concept PID control achieving stable temperature control; scaling plan for high-temperature furnaces.",
	},
	{
		id: 4,
		title: "Object Detection System",
		category: "CV",
		description:
			"YOLO-based object detection demo on Streamlit; stores frames into PostgreSQL.",
		tech: ["Python", "YOLO", "Streamlit", "PostgreSQL", "OpenCV"],
		github: "https://github.com/KhushalID7/object-detection-system",
		fullDescription:
			"A computer vision-based project built with YOLO world models on a Streamlit based web app. It uses laptop's camera and detects the entered objects in a textbox. Every frame captured by the camera is stored in a PostgreSQL database in byte form.",
		methodologies: [
			"YOLO model fine-tuning",
			"Streamlit UI for demo",
			"Frame capture and DB storage",
			"Web deployment",
		],
		outcomes:
			"Working object-detection demo used during internship with real-time throughput optimization.",
	},
]

export default function Projects() {
	const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)
	const [filter, setFilter] = useState("All")

	const categories = ["All", "ML", "Embedded", "CV"]
	const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter)

	return (
		<section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 lg:ml-64">
			<div className="max-w-5xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					<h2 className="text-3xl font-bold mb-8 text-primary">
						Interdisciplinary Projects & Research
					</h2>

					{/* Filter */}
					<div className="flex flex-wrap gap-3 mb-12">
						{categories.map((cat) => (
							<button
								key={cat}
								onClick={() => setFilter(cat)}
								className={`px-4 py-2 rounded-lg transition-colors ${
									filter === cat
										? "bg-primary text-primary-foreground"
										: "bg-card text-muted-foreground hover:text-foreground border border-border"
								}`}
							>
								{cat}
							</button>
						))}
					</div>

					{/* Projects Grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<AnimatePresence>
							{filtered.map((project, i) => (
								<motion.div
									key={project.id}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: 20 }}
									transition={{ duration: 0.5, delay: i * 0.1 }}
									onClick={() => setSelectedProject(project)}
									className="group cursor-pointer"
								>
									{/* Add CardSpotlight here */}
									<CardSpotlight className="p-6 bg-card border border-border rounded-lg hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/20 h-full relative">
										<h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors relative z-10">
											{project.title}
										</h3>
										<p className="text-muted-foreground mb-4 relative z-10">
											{project.description}
										</p>
										<div className="flex flex-wrap gap-2 mb-4 relative z-10">
											{project.tech.slice(0, 3).map((t) => (
												<span
													key={t}
													className="px-2 py-1 bg-primary/20 text-primary text-xs rounded"
												>
													{t}
												</span>
											))}
											{project.tech.length > 3 && (
												<span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded">
													+{project.tech.length - 3}
												</span>
											)}
										</div>
										<div className="flex gap-3 relative z-10">
											<motion.a
												href={project.github}
												target="_blank"
												rel="noopener noreferrer"
												onClick={(e) => e.stopPropagation()}
												className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors"
												whileHover={{ x: 4 }}
												transition={{ duration: 0.2 }}
											>
												<Github size={18} /> GitHub
											</motion.a>
											{project.kaggle && (
												<motion.a
													href={project.kaggle}
													target="_blank"
													rel="noopener noreferrer"
													onClick={(e) => e.stopPropagation()}
													className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors"
													whileHover={{ x: 4 }}
													transition={{ duration: 0.2 }}
												>
													<ExternalLink size={18} /> Kaggle
												</motion.a>
											)}
										</div>
									</CardSpotlight>
								</motion.div>
							))}
						</AnimatePresence>
					</div>
				</motion.div>
			</div>

			{/* Project Modal */}
			<AnimatePresence>
				{selectedProject && (
					<ProjectModal
						project={selectedProject}
						onClose={() => setSelectedProject(null)}
					/>
				)}
			</AnimatePresence>
		</section>
	)
}
