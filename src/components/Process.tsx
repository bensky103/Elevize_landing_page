import { motion } from 'framer-motion'
import { useLanguage } from '../i18n/context'

export default function Process() {
  const { t } = useLanguage()

  return (
    <section id="process" className="section-padding relative">
      {/* Ambient glow */}
      <div
        className="absolute right-0 top-1/3 w-96 h-96 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)',
          filter: 'blur(60px)',
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
          className="mb-14 flex flex-col gap-3 items-center text-center"
        >
          <span className="tag tag-cyan" style={{ fontFamily: 'var(--font-mono)' }}>
            {t.process.tag}
          </span>
          <h2
            className="text-3xl md:text-5xl font-bold"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--white)' }}
          >
            {t.process.heading}
          </h2>
          <p className="max-w-lg text-base" style={{ color: 'var(--muted)', fontWeight: 300 }}>
            {t.process.subline}
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.process.steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.1, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card p-7 flex flex-col gap-4 relative overflow-hidden group"
            >
              {/* Watermark number */}
              <span
                className="absolute -top-2 -right-1 font-black select-none pointer-events-none"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '5.5rem',
                  color: 'rgba(255,255,255,0.025)',
                  lineHeight: 1,
                }}
                aria-hidden
              >
                {step.num}
              </span>

              {/* Number pill */}
              <span
                className="self-start text-xs font-medium px-2.5 py-1 rounded-full"
                style={{
                  fontFamily: 'var(--font-mono)',
                  background: i % 2 === 0 ? 'rgba(124,58,237,0.12)' : 'rgba(6,182,212,0.1)',
                  border: `1px solid ${i % 2 === 0 ? 'rgba(124,58,237,0.25)' : 'rgba(6,182,212,0.25)'}`,
                  color: i % 2 === 0 ? 'var(--purple-light)' : 'var(--cyan-light)',
                }}
              >
                {step.num}
              </span>

              <h3
                className="text-lg font-semibold"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--white)', letterSpacing: '-0.01em' }}
              >
                {step.title}
              </h3>

              <p
                className="text-base leading-relaxed"
                style={{ color: 'var(--muted)', fontWeight: 300 }}
              >
                {step.desc}
              </p>

              {/* Bottom accent line on hover */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: i % 2 === 0
                    ? 'linear-gradient(90deg, transparent, rgba(124,58,237,0.5), transparent)'
                    : 'linear-gradient(90deg, transparent, rgba(6,182,212,0.45), transparent)',
                }}
                aria-hidden
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
