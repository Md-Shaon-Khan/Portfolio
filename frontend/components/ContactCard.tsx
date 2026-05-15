'use client'

import React from 'react'
import { motion } from 'framer-motion'

type Props = {
  label: string
  value?: string
  href: string
  external?: boolean
  className?: string
}

export default function ContactCard({ label, value, href, external, className }: Props) {
  return (
    <motion.a
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.99 }}
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className={
        'glass-card flex flex-col gap-1 rounded-2xl border border-slate-700/60 bg-slate-900/80 p-5 shadow-sm transition-shadow hover:shadow-lg ' +
        (className ?? '')
      }
    >
      <span className="text-sm font-medium text-slate-200">{label}</span>
      {value && <span className="text-sm text-slate-400 break-words">{value}</span>}
    </motion.a>
  )
}
