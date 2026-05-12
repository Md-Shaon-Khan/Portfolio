import { motion } from 'framer-motion'

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{ background: '#1D3557' }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo mark */}
      <motion.div
        className="relative mb-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-16 h-16 border-2 border-frost/30 rounded-sm flex items-center justify-center relative overflow-hidden">
          <span className="font-display text-2xl font-bold text-punch">SK</span>
          <motion.div
            className="absolute bottom-0 left-0 right-0 bg-punch/20"
            initial={{ height: '0%' }}
            animate={{ height: '100%' }}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>

      {/* Loading bar */}
      <div className="w-48 h-px bg-cerulean/20 relative overflow-hidden">
        <motion.div
          className="absolute inset-y-0 left-0 bg-punch"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.8, ease: 'easeInOut' }}
        />
      </div>

      <motion.p
        className="font-mono text-xs text-frost/50 mt-4 tracking-widest"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        INITIALIZING...
      </motion.p>
    </motion.div>
  )
}