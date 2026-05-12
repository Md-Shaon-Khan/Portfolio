import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const FILTERS = ['All', 'AI/ML', 'Healthcare', 'Backend', 'IoT', 'Full-Stack']

const PROJECTS = [
  {
    title:       'HealthBridge',
    category:    ['Healthcare', 'Full-Stack', 'Backend'],
    description: 'A comprehensive digital healthcare platform connecting patients, doctors, and pharmacies. Built with FastAPI, MongoDB, and React — featuring real-time consultations, prescription management, and AI-assisted diagnostics.',
    tech:        ['FastAPI', 'MongoDB', 'React', 'Python', 'JWT'],
    github:      'https://github.com/Md-Shaon-Khan',
    featured:    true,
    badge:       'Featured',
    gradient:    'from-punch/10 to-cerulean/10',
  },
  {
    title:       'ECG Arrhythmia Classifier',
    category:    ['AI/ML', 'Healthcare'],
    description: 'Deep learning model for automated ECG signal classification using CNN-LSTM hybrid architecture. Trained on the MIT-BIH dataset achieving high accuracy on 5-class arrhythmia detection.',
    tech:        ['TensorFlow', 'Python', 'NumPy', 'Scikit-learn', 'Pandas'],
    github:      'https://github.com/Md-Shaon-Khan',
    featured:    true,
    badge:       'Research',
    gradient:    'from-cerulean/10 to-frost/10',
  },
  {
    title:       'FastAPI Backend Boilerplate',
    category:    ['Backend'],
    description: 'Production-ready FastAPI starter with MongoDB Atlas integration, Motor async driver, JWT auth, rate limiting, SMTP email notifications, and Docker deployment config.',
    tech:        ['FastAPI', 'MongoDB', 'Motor', 'Docker', 'Pydantic'],
    github:      'https://github.com/Md-Shaon-Khan',
    gradient:    'from-navy/50 to-cerulean/5',
  },
  {
    title:       'Smart Health Monitor — IoT',
    category:    ['IoT', 'Healthcare'],
    description: 'Arduino-based patient vitals monitoring system with real-time temperature, SpO2, and heart rate sensors. Data streamed to a cloud dashboard via MQTT protocol.',
    tech:        ['Arduino', 'C++', 'MQTT', 'Python', 'ESP32'],
    github:      'https://github.com/Md-Shaon-Khan',
    gradient:    'from-frost/5 to-navy/50',
  },
  {
    title:       'ML Pipeline Framework',
    category:    ['AI/ML'],
    description: 'Modular machine learning pipeline for data preprocessing, feature engineering, model training, and evaluation. Supports Scikit-learn and TensorFlow backends with YAML config.',
    tech:        ['Python', 'Scikit-learn', 'TensorFlow', 'MLflow', 'YAML'],
    github:      'https://github.com/Md-Shaon-Khan',
    gradient:    'from-punch/5 to-navy/50',
  },
  {
    title:       'Portfolio API',
    category:    ['Backend', 'Full-Stack'],
    description: 'RESTful API powering this portfolio — contact form storage, email notifications, spam protection, and rate limiting built with FastAPI and deployed on Render.',
    tech:        ['FastAPI', 'MongoDB', 'SMTP', 'Pydantic', 'Python'],
    github:      'https://github.com/Md-Shaon-Khan',
    gradient:    'from-cerulean/5 to-punch/5',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Projects() {
  const ref       = useRef<HTMLDivElement>(null)
  const inView    = useInView(ref, { once: true, margin: '-60px' })
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category.includes(active))

  return (
    <section id="projects" ref={ref} className="relative py-32 px-6 overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="mb-10"
        >
          <p className="section-sub">02 — Projects</p>
          <h2 className="section-heading">Selected Work</h2>
        </motion.div>

        {/* Filters */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`font-mono text-xs px-4 py-2 rounded-sm border transition-all duration-200 ${
                active === f
                  ? 'bg-punch border-punch text-honey'
                  : 'border-frost/20 text-frost/60 hover:border-frost/50 hover:text-honey'
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="popLayout">
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className={`glass-card rounded-sm p-6 flex flex-col gap-4 group hover:border-frost/40 transition-all duration-300 bg-gradient-to-br ${project.gradient} ${
                  project.featured ? 'md:col-span-1' : ''
                }`}
              >
                {/* Top row */}
                <div className="flex items-start justify-between gap-2">
                  <div>
                    {project.badge && (
                      <span className="font-mono text-[10px] text-punch border border-punch/30 px-2 py-0.5 rounded-sm mb-2 inline-block tracking-wider">
                        {project.badge}
                      </span>
                    )}
                    <h3 className="font-display font-bold text-lg text-honey group-hover:text-punch transition-colors duration-200">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex gap-2 mt-1 shrink-0">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-frost/40 hover:text-honey transition-colors"
                      aria-label="GitHub"
                    >
                      <FiGithub size={15} />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-frost/40 hover:text-punch transition-colors"
                      aria-label="Live"
                    >
                      <FiExternalLink size={15} />
                    </a>
                  </div>
                </div>

                <p className="text-frost/55 text-sm leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map(t => (
                    <span key={t} className="tech-badge">{t}</span>
                  ))}
                </div>

                {/* Category tags */}
                <div className="flex flex-wrap gap-1.5 border-t border-frost/10 pt-3">
                  {project.category.map(c => (
                    <span key={c} className="font-mono text-[10px] text-cerulean/70 tracking-wider">
                      #{c}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* GitHub CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/Md-Shaon-Khan"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex"
          >
            <FiGithub size={14} /> View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}