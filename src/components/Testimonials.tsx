import { motion } from 'framer-motion'
import { useLanguage } from '../i18n/context'

export default function Testimonials() {
  const { t } = useLanguage()

  return (
    <section id="testimonials" className="section-padding relative">
      {/* Ambient glow */}
      <div
        className="absolute left-1/4 top-0 w-[500px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%)',
          filter: 'blur(80px)',
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
          <span className="tag" style={{ fontFamily: 'var(--font-mono)' }}>
            {t.testimonials.tag}
          </span>
          <h2
            className="text-3xl md:text-5xl font-bold"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--white)' }}
          >
            {t.testimonials.heading}
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.testimonials.items.map((item, i) => {
            const isPurple = i % 2 === 0
            const initial = Array.from(item.name)[0] ?? '?'
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card p-7 flex flex-col gap-5"
                style={{
                  borderColor: isPurple ? 'rgba(124,58,237,0.12)' : 'rgba(6,182,212,0.1)',
                }}
              >
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} width="13" height="13" viewBox="0 0 24 24" fill="#a855f7" aria-hidden>
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p
                  className="text-base leading-relaxed flex-grow"
                  style={{ color: 'var(--muted-light)', fontWeight: 300 }}
                >
                  "{item.quote}"
                </p>

                {/* Separator */}
                <div
                  className="h-px"
                  style={{
                    background: isPurple
                      ? 'linear-gradient(90deg, transparent, rgba(124,58,237,0.2), transparent)'
                      : 'linear-gradient(90deg, transparent, rgba(6,182,212,0.18), transparent)',
                  }}
                  aria-hidden
                />

                {/* Author */}
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      background: isPurple
                        ? 'linear-gradient(135deg, rgba(124,58,237,0.35), rgba(168,85,247,0.18))'
                        : 'linear-gradient(135deg, rgba(6,182,212,0.3), rgba(34,211,238,0.15))',
                      border: `1px solid ${isPurple ? 'rgba(124,58,237,0.3)' : 'rgba(6,182,212,0.3)'}`,
                    }}
                  >
                    <span
                      className="text-xs font-bold"
                      style={{
                        fontFamily: 'var(--font-display)',
                        color: isPurple ? '#c084fc' : '#67e8f9',
                      }}
                    >
                      {initial}
                    </span>
                  </div>

                  <div className="flex flex-col gap-0.5">
                    <span
                      className="text-sm font-semibold"
                      style={{ fontFamily: 'var(--font-display)', color: 'var(--white)' }}
                    >
                      {item.name}
                    </span>
                    <span
                      className="text-sm"
                      style={{ fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.28)' }}
                    >
                      {item.role}
                    </span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Translation note */}
        {t.testimonials.note && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-8"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              color: 'rgba(255,255,255,0.25)',
              letterSpacing: '0.03em',
            }}
          >
            {t.testimonials.note}
          </motion.p>
        )}
      </div>
    </section>
  )
}
