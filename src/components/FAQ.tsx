import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../i18n/context'

export default function FAQ() {
  const { t } = useLanguage()
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="section-padding relative">
      {/* Ambient glow */}
      <div
        className="absolute left-0 bottom-0 w-80 h-80 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(6,182,212,0.05) 0%, transparent 70%)',
          filter: 'blur(70px)',
        }}
        aria-hidden
      />

      <div className="site-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col gap-3 items-center text-center"
        >
          <span className="tag tag-cyan" style={{ fontFamily: 'var(--font-mono)' }}>
            {t.faq.tag}
          </span>
          <h2
            className="text-3xl md:text-5xl font-bold"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--white)' }}
          >
            {t.faq.heading}
          </h2>
        </motion.div>

        {/* Accordion */}
        <div className="max-w-2xl mx-auto flex flex-col gap-2">
          {t.faq.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.08, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <div
                className="glass-card overflow-hidden"
                style={{
                  borderColor: open === i ? 'rgba(124,58,237,0.3)' : 'rgba(255,255,255,0.07)',
                  transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                  boxShadow: open === i ? '0 0 24px rgba(124,58,237,0.1)' : 'none',
                }}
              >
                {/* Question row */}
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-6"
                  style={{ textAlign: 'inherit' }}
                >
                  <span
                    className="text-sm font-medium"
                    style={{
                      fontFamily: 'var(--font-body)',
                      color: open === i ? 'var(--white)' : 'var(--muted-light)',
                      transition: 'color 0.2s ease',
                    }}
                  >
                    {item.q}
                  </span>

                  {/* +/× icon */}
                  <motion.span
                    animate={{ rotate: open === i ? 45 : 0 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="flex-shrink-0"
                    style={{
                      color: open === i ? 'var(--purple-light)' : 'rgba(255,255,255,0.28)',
                      transition: 'color 0.2s ease',
                    }}
                    aria-hidden
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </motion.span>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div className="px-6 pb-6">
                        <div
                          className="h-px mb-4"
                          style={{ background: 'rgba(124,58,237,0.15)' }}
                          aria-hidden
                        />
                        <p
                          className="text-base leading-relaxed"
                          style={{ color: 'var(--muted)', fontWeight: 300 }}
                        >
                          {item.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
