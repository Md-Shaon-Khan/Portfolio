'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Loader() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 1400)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1.4, ease: 'linear' }}
            className="flex h-20 w-20 items-center justify-center rounded-full border border-cyan-400/30 bg-slate-900/90 shadow-[0_0_80px_rgba(56,189,248,0.16)]"
          >
            <div className="h-10 w-10 rounded-full border-2 border-t-cyan-300 border-slate-600" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
