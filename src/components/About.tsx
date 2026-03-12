import { motion } from 'framer-motion'
import { useLanguage } from '../i18n/context'

export default function About() {
  const { t, dir } = useLanguage()

  const stats = [
    { value: t.about.stat1Value, label: t.about.stat1Label },
    { value: t.about.stat2Value, label: t.about.stat2Label },
    { value: t.about.stat3Value, label: t.about.stat3Label },
  ]

  const xLeft = dir === 'rtl' ? 24 : -24
  const xRight = dir === 'rtl' ? -24 : 24

  return (
    <section id="about" className="section-padding relative" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
      {/* Ambient glow */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(124,58,237,0.06) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        aria-hidden
      />

      <div className="site-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: xLeft }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6"
          >
            <span
              className="tag"
              style={{ fontFamily: 'var(--font-mono)', alignSelf: 'flex-start' }}
            >
              {t.about.tag}
            </span>
            <h2
              className="text-3xl md:text-5xl font-bold"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--white)' }}
            >
              {t.about.heading}
            </h2>
            {t.about.body && (
              <p
                className="text-base leading-relaxed"
                style={{ color: 'var(--muted)', fontWeight: 300, maxWidth: '460px' }}
              >
                {t.about.body}
              </p>
            )}
          </motion.div>

          {/* Right — stats grid */}
          <motion.div
            initial={{ opacity: 0, x: xRight }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-3 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card p-5 sm:p-6 flex flex-col items-center text-center gap-2"
              >
                <span
                  className="font-black"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                    backgroundImage: 'linear-gradient(135deg, #c084fc 0%, #a855f7 40%, #06b6d4 100%)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent',
                    lineHeight: 1.1,
                  }}
                >
                  {stat.value}
                </span>
                <span
                  className="text-sm leading-snug"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    color: 'rgba(255,255,255,0.32)',
                  }}
                >
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
