'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, MapPin, MessageSquare, Phone } from 'lucide-react'

const contacts = [
  { label: 'Email', value: 'shaon.iit52@gmail.com', href: 'mailto:shaon.iit52@gmail.com', icon: Mail },
  { label: 'GitHub', value: 'github.com/Md-Shaon-Khan', href: 'https://github.com/Md-Shaon-Khan', icon: Github },
  { label: 'LinkedIn', value: 'md-shaon-khan-01003433a', href: 'https://www.linkedin.com/in/md-shaon-khan-01003433a/', icon: Linkedin },
  { label: 'Location', value: 'Jahangirnagar, Bangladesh', href: '#contact', icon: MapPin },
]

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-24">
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-10">
          <span className="section-label">Contact</span>
          <h2 className="section-heading">Contact</h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="glass-card rounded-[32px] border border-slate-700/60 bg-slate-900/85 p-8 shadow-glow"
          >
            <p className="section-label">Message</p>
            <h3 className="text-2xl font-semibold text-slate-100">Two direct contact actions</h3>
            <p className="mt-4 text-slate-300 leading-7">
              Reach out via email for formal proposals or WhatsApp for a direct follow-up.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="mailto:shaon.iit52@gmail.com"
                className="btn-primary w-full justify-center"
              >
                <Mail size={18} />
                Email Me
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=+8801633040670"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary w-full justify-center"
              >
                <Phone size={18} />
                WhatsApp
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-4"
          >
            {contacts.map((item) => {
              const Icon = item.icon
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="glass-card flex items-center gap-4 rounded-[28px] border border-slate-700/60 bg-slate-900/85 p-6 shadow-glow transition-all hover:-translate-y-1"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-cyan-500/10 text-cyan-300">
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-100">{item.label}</p>
                    <p className="mt-1 text-sm text-slate-400">{item.value}</p>
                  </div>
                </a>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
