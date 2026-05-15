'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'HealthBridge',
    description: 'IoT-driven clinical intelligence platform with real-time disease prediction, ECG processing, and a responsive care management dashboard.',
    github: 'https://github.com/Md-Shaon-Khan/HealthBridge-with-ECG-Check-Up',
    labels: ['Healthcare', 'AI/ML', 'Backend'],
  },
  {
    title: 'IIT Academic Website with Backend',
    description: 'University portal with centralized academic resources, role-based workflows, and a strong backend architecture for student and faculty services.',
    github: 'https://github.com/Md-Shaon-Khan/IIT-Academic-Website-with-Backend',
    labels: ['Full-Stack', 'Backend', 'Education'],
  },
  {
    title: 'LockGuard Dual Factor Smart Door Security',
    description: 'Dual-factor access control system with smart alerts, Arduino integration, and secure entry monitoring for modern facilities.',
    github: 'https://github.com/Md-Shaon-Khan/LockGuard-Dual-Factor-Smart-Door-Security-with-Alerts',
    labels: ['IoT', 'Security', 'Embedded'],
  },
  {
    title: 'UniFix',
    description: 'University complaint management system with issue tracking, dashboards for campus teams, and modular backend services.',
    github: 'https://github.com/Md-Shaon-Khan/UniFix',
    labels: ['Full-Stack', 'Web App', 'Dashboard'],
  },
  {
    title: 'Student Attendance System',
    description: 'Attendance management platform delivering reliable student records, analytics, and automated reporting.',
    github: 'https://github.com/Md-Shaon-Khan/Student_Attendance_System',
    labels: ['Education', 'Backend', 'Automation'],
  },
  {
    title: 'Agriculture Intelligence Platform',
    description: 'Upcoming agriculture intelligence system for crop monitoring, farm analytics, and sustainable automation.',
    github: 'https://github.com/Md-Shaon-Khan',
    labels: ['Agriculture', 'AI', 'IoT'],
  },
]

const additional = [
  { title: 'Deep Learning Projects', github: 'https://github.com/Md-Shaon-Khan/Deep-Learning-Projects' },
  { title: 'Machine Learning Basics Project', github: 'https://github.com/Md-Shaon-Khan/Machine-Learning-Basics-Project' },
  { title: 'AI Code Debugger App', github: 'https://github.com/Md-Shaon-Khan/AI-Code-Debugger-App' },
  { title: 'Weather Condition using API', github: 'https://github.com/Md-Shaon-Khan/Weather_Condition_using_API' },
]

export default function ProjectSection() {
  return (
    <section id="projects" className="relative py-24">
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-10">
          <span className="section-label">Projects</span>
          <h2 className="section-heading">Advanced project portfolio</h2>
        </div>

        <div className="grid gap-6 xl:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65, delay: index * 0.08 }}
              className="group relative overflow-hidden rounded-[32px] border border-slate-700/60 bg-slate-900/85 p-6 shadow-glow transition-all hover:-translate-y-1 hover:border-cyan-400/30"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-400 via-sky-400 to-slate-400 opacity-80" />
              <div className="relative space-y-4 pt-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="rounded-full border border-cyan-400/20 bg-slate-800/80 px-3 py-1 text-xs uppercase tracking-[0.3em] text-cyan-200">Featured</p>
                  <div className="flex items-center gap-2 text-cyan-200/70">
                    <Github size={16} />
                    <a href={project.github} className="text-sm text-cyan-100 transition-colors hover:text-cyan-300">Source</a>
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-slate-100">{project.title}</h3>
                <p className="text-sm leading-7 text-slate-300">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.labels.map((label) => (
                    <span key={label} className="tech-pill">{label}</span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-3 text-sm font-semibold text-cyan-200">
                  <ExternalLink size={16} />
                  <a href={project.github} target="_blank" rel="noreferrer" className="transition-colors hover:text-white">
                    View on GitHub
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 rounded-[30px] border border-slate-700/60 bg-slate-900/85 p-6 shadow-glow">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <p className="section-label">Additional work</p>
              <h3 className="text-2xl font-semibold text-slate-100">Repository collection</h3>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {additional.map((item) => (
              <a
                key={item.title}
                href={item.github}
                target="_blank"
                rel="noreferrer"
                className="glass-card rounded-[28px] border border-slate-700/70 bg-slate-950/90 p-5 transition-all hover:-translate-y-1 hover:border-cyan-400/30"
              >
                <p className="text-base font-semibold text-slate-100">{item.title}</p>
                <p className="mt-2 text-sm text-slate-400">GitHub repository with additional AI and ML projects.</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
