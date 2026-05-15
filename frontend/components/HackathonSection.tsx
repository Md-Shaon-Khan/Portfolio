'use client'

import { motion } from 'framer-motion'
import { Sparkles, Github } from 'lucide-react'

export default function HackathonSection() {
  return (
    <section id="hackathon" className="relative py-24">
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-10">
          <span className="section-label">Hackathon</span>
          <h2 className="section-heading">Featured event project</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="glass-card rounded-[32px] border border-cyan-400/10 bg-slate-900/85 p-8 shadow-glow"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-cyan-200">
                <Sparkles size={14} /> The Infinity AI BuildFest 2026
              </span>
              <h3 className="mt-6 text-3xl font-semibold text-slate-100">ArogyoAI</h3>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
                Designed ArogyoAI as a health-focused AI assistant for predictive diagnostics and decision support using a combination of machine learning models and intelligent sensor integration.
              </p>
            </div>

            <div className="space-y-4 rounded-[28px] border border-slate-700/60 bg-slate-950/85 p-5 text-sm text-slate-300">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Project</p>
                <p className="mt-2 text-slate-100">ArogyoAI</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Role</p>
                <p className="mt-2 text-slate-100">AI & IoT Developer</p>
              </div>
              <a
                href="https://github.com/Md-Shaon-Khan/ArogyoAI"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition-colors hover:text-white"
              >
                <Github size={16} /> View GitHub
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
