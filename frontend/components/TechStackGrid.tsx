'use client'

import { motion } from 'framer-motion'
import { Cpu, Code2, Database, Layers, Terminal } from 'lucide-react'

const groups = [
  {
    title: 'Languages',
    icon: Code2,
    items: ['C++', 'C', 'Java', 'Python', 'HTML5', 'CSS3', 'JavaScript'],
  },
  {
    title: 'AI / ML / DL Libraries',
    icon: Cpu,
    items: ['TensorFlow', 'Keras', 'NumPy', 'Pandas', 'Scikit-learn', 'Matplotlib', 'SciPy', 'Seaborn'],
  },
  {
    title: 'Tools & Environments',
    icon: Database,
    items: ['FastAPI', 'Jupyter', 'MySQL', 'PostgreSQL', 'Git', 'GitHub', 'Arduino', 'Streamlit'],
  },
]

export default function TechStackGrid() {
  return (
    <section id="skills" className="relative py-24">
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-10">
          <span className="section-label">Tech Stack</span>
          <h2 className="section-heading">Modern technical skill grid</h2>
        </div>

        <div className="grid gap-6 xl:grid-cols-3">
          {groups.map((group, index) => {
            const Icon = group.icon
            return (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.65, delay: index * 0.08 }}
                className="glass-card rounded-[32px] border border-slate-700/60 bg-slate-900/85 p-6 shadow-glow"
              >
                <div className="mb-6 flex items-center gap-3 text-cyan-300">
                  <Icon size={20} />
                  <h3 className="text-xl font-semibold text-slate-100">{group.title}</h3>
                </div>
                <div className="grid gap-3">
                  {group.items.map((item) => (
                    <div
                      key={item}
                      className="rounded-3xl border border-slate-700/50 bg-slate-950/80 px-4 py-3 text-sm text-slate-200 transition-all hover:-translate-y-0.5 hover:border-cyan-400/30 hover:bg-slate-900/90"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
