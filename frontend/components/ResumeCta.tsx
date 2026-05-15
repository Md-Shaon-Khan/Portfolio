'use client'

import { motion } from 'framer-motion'
import { Download, FileText } from 'lucide-react'

export default function ResumeCta() {
  return (
    <section id="resume" className="relative py-24">
      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="glass-card rounded-[32px] border border-slate-700/60 bg-slate-900/85 p-10 shadow-glow"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <span className="section-label">Resume</span>
              <h2 className="section-heading">Professional CV and resume</h2>
              <p className="mt-4 max-w-2xl text-slate-300 leading-7">
                Download the portfolio resume or open the full CV in a new tab. The assets are optimized for recruiter review and interview follow-up.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://drive.google.com/file/d/1h2hCBg-gbBpUMhvtTIXAAJ_VTpKAcToI/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                <FileText size={18} />
                View CV
              </a>
              <a
                href="https://drive.google.com/uc?export=download&id=1h2hCBg-gbBpUMhvtTIXAAJ_VTpKAcToI"
                className="btn-secondary"
              >
                <Download size={18} />
                Download Resume
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
