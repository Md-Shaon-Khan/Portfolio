'use client'

import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import ContactCard from './ContactCard'
import ContactForm from './ContactForm'

type ContactItem = {
  label: string
  value?: string
  href: string
  external?: boolean
}

const contactItems: ContactItem[] = [
  { label: 'Email', value: 'shaon.iit52@gmail.com', href: 'mailto:shaon.iit52@gmail.com?subject=Portfolio Inquiry' },
  { label: 'GitHub', value: 'github.com/Md-Shaon-Khan', href: 'https://github.com/Md-Shaon-Khan', external: true },
  { label: 'LinkedIn', value: 'md-shaon-khan-01003433a', href: 'https://www.linkedin.com/in/md-shaon-khan-01003433a/', external: true },
  { label: 'Location', value: 'Jahangirnagar, Bangladesh', href: '#contact' },
]

export default function ContactSection(): JSX.Element {
  return (
    <section id="contact" className="relative py-24">
      <div className="relative z-10 mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Contact"
          title="Get in touch"
          subtitle="Open to AI/ML Internship, Research Collaboration, and Software Engineering Opportunities."
        />

        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-2xl border border-slate-700/60 bg-gradient-to-br from-slate-900/80 to-slate-800/60 p-8 shadow-sm"
          >
            <p className="text-sm text-slate-300">Message</p>
            <h3 className="mt-2 text-2xl font-semibold text-slate-100">Send a professional message</h3>
            <p className="mt-3 text-slate-400">Use the form below or reach out directly via Email or WhatsApp.</p>

            <div className="mt-6">
              <ContactForm />
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:shaon.iit52@gmail.com?subject=Portfolio Inquiry"
                className="btn-primary w-full sm:w-auto justify-center"
              >
                Email
              </a>
              <a
                href="https://wa.me/8801633040670"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary w-full sm:w-auto justify-center"
              >
                WhatsApp
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="space-y-4"
          >
            {contactItems.map((c) => (
              <ContactCard key={c.label} label={c.label} value={c.value} href={c.href} external={c.external} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
