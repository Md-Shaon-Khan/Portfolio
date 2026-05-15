'use client'

import { motion } from 'framer-motion'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 mx-auto flex w-full max-w-7xl items-center justify-between gap-6 bg-slate-950/95 px-6 py-4 backdrop-blur-xl sm:px-8"
    >
      <a href="#hero" className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300 transition hover:text-cyan-100">
        Shaon Khan
      </a>
      <nav className="hidden items-center gap-4 md:flex">
        {navLinks.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-sm text-slate-300 transition hover:text-cyan-200"
          >
            {item.label}
          </a>
        ))}
      </nav>
      <a
        href="#contact"
        className="hidden rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-500/15 sm:inline-flex"
      >
        Contact
      </a>
    </motion.header>
  )
}
