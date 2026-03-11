import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../i18n/context'

export default function Hero() {
  const { t } = useLanguage()
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ paddingTop: 'var(--navbar-height)' }}
    >
      {/* Animated grid background */}
      <GridBackground />

      {/* Radial glow orbs */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
      >
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
        <div
          className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      <div className="relative z-10 site-container text-center flex flex-col items-center gap-5 sm:gap-8">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <span className="tag tag-cyan" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem' }}>
            {/* Pulse dot — ping ring animation for higher visibility */}
            <span className="relative inline-flex items-center justify-center w-2 h-2 mr-1.5">
              <span
                className="absolute inline-flex w-full h-full rounded-full bg-cyan-400 opacity-60"
                style={{ animation: 'ping 1.4s cubic-bezier(0, 0, 0.2, 1) infinite' }}
              />
              <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-cyan-400" />
            </span>
            {t.hero.badge}
          </span>
        </motion.div>

        {/* Animated headline */}
        <h1
          className="font-black tracking-tight"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.8rem, 8.5vw, 6.5rem)',
            lineHeight: 1.05,
          }}
        >
          <motion.span
            className="flex flex-wrap justify-center"
            style={{ gap: '0.25em' }}
          >
            {t.hero.headlineWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ delay: 0.4 + i * 0.12, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  color: i === t.hero.headlineWords.length - 1 ? 'transparent' : 'var(--white)',
                  backgroundImage:
                    i === t.hero.headlineWords.length - 1
                      ? 'linear-gradient(135deg, #c084fc 0%, #a855f7 35%, #06b6d4 100%)'
                      : undefined,
                  WebkitBackgroundClip: i === t.hero.headlineWords.length - 1 ? 'text' : undefined,
                  backgroundClip: i === t.hero.headlineWords.length - 1 ? 'text' : undefined,
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.span>
        </h1>

        {/* Typewriter subline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="text-base md:text-lg max-w-xl"
          style={{ color: 'var(--muted)', fontFamily: 'var(--font-body)', fontWeight: 300 }}
        >
          {t.hero.subline}
        </motion.p>

        {/* Sub-tags scroll */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-2"
        >
          {t.hero.subwords.map((w, i) =>
            w === '·' ? (
              <span key={i} style={{ color: 'rgba(255,255,255,0.15)', fontFamily: 'var(--font-mono)' }}>·</span>
            ) : (
              <span
                key={i}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  color: 'rgba(255,255,255,0.4)',
                  letterSpacing: '0.05em',
                }}
              >
                {w}
              </span>
            )
          )}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-3 mt-2"
        >
          <GlowButton href="#contact" label={t.hero.ctaStart} arrow={t.arrow} />
          <a
            href="#projects"
            className="px-6 py-3 rounded-full text-sm font-medium transition-all duration-300"
            style={{
              fontFamily: 'var(--font-body)',
              color: 'rgba(255,255,255,0.5)',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'rgba(255,255,255,0.85)'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'rgba(255,255,255,0.5)'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
            }}
          >
            {t.hero.ctaWork}
          </a>
        </motion.div>

      </div>

      {/* Scroll indicator — anchored to the section bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ScrollCaret />
      </motion.div>
    </section>
  )
}

function GlowButton({ href, label, arrow }: { href: string; label: string; arrow: string }) {
  return (
    <a
      href={href}
      className="relative px-7 py-3 rounded-full text-sm font-semibold overflow-hidden group"
      style={{
        fontFamily: 'var(--font-body)',
        background: 'linear-gradient(135deg, #7c3aed, #5b21b6)',
        color: '#fff',
        boxShadow: '0 0 24px rgba(124,58,237,0.4), 0 4px 20px rgba(124,58,237,0.25)',
        transition: 'box-shadow 0.3s ease, transform 0.2s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 0 40px rgba(124,58,237,0.65), 0 4px 30px rgba(124,58,237,0.4)'
        e.currentTarget.style.transform = 'translateY(-1px)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 0 24px rgba(124,58,237,0.4), 0 4px 20px rgba(124,58,237,0.25)'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      {/* Shine sweep */}
      <span
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.15) 50%, transparent 60%)',
        }}
      />
      {label} {arrow}
    </a>
  )
}

function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!

    let w = 0, h = 0
    const resize = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // Dot grid — primary purple layer + secondary cyan corners + bright center
    const SPACING = 40
    let t = 0

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      t += 0.004

      const cols = Math.ceil(w / SPACING) + 1
      const rows = Math.ceil(h / SPACING) + 1
      const maxDist = Math.sqrt((w / 2) ** 2 + (h / 2) ** 2)

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * SPACING
          const y = r * SPACING
          const dx = x - w / 2
          const dy = y - h / 2
          const dist = Math.sqrt(dx * dx + dy * dy)
          const wave = Math.sin(dist * 0.012 - t * 2) * 0.5 + 0.5
          const proximity = 1 - dist / maxDist

          // Corner proximity — how close to any corner
          const cornerDists = [
            Math.sqrt(x * x + y * y),
            Math.sqrt((x - w) * (x - w) + y * y),
            Math.sqrt(x * x + (y - h) * (y - h)),
            Math.sqrt((x - w) * (x - w) + (y - h) * (y - h)),
          ]
          const minCornerDist = Math.min(...cornerDists)
          const cornerProximity = Math.max(0, 1 - minCornerDist / (maxDist * 0.55))

          // Center proximity — for brighter purple core
          const centerProximity = Math.max(0, 1 - dist / (maxDist * 0.4))

          // Purple primary dot
          const purpleAlpha = wave * proximity * 0.55
          ctx.beginPath()
          ctx.arc(x, y, 1.2, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(139, 92, 246, ${purpleAlpha})`
          ctx.fill()

          // Cyan corner layer
          if (cornerProximity > 0.02) {
            ctx.beginPath()
            ctx.arc(x, y, 1.2, 0, Math.PI * 2)
            ctx.fillStyle = `rgba(6, 182, 212, ${wave * cornerProximity * 0.35})`
            ctx.fill()
          }

          // Brighter purple center
          if (centerProximity > 0.02) {
            ctx.beginPath()
            ctx.arc(x, y, 1.5, 0, Math.PI * 2)
            ctx.fillStyle = `rgba(192, 132, 252, ${wave * centerProximity * 0.22})`
            ctx.fill()
          }
        }
      }

      if (!prefersReducedMotion) {
        animRef.current = requestAnimationFrame(draw)
      }
    }

    draw()
    return () => {
      cancelAnimationFrame(animRef.current)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.85 }}
      aria-hidden
    />
  )
}

function ScrollCaret() {
  return (
    <motion.div
      animate={{ y: [0, 8, 0], opacity: [0.7, 0.25, 0.7] }}
      transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      style={{ color: 'rgba(255,255,255,0.6)' }}
    >
      <svg width="18" height="22" viewBox="0 0 18 22" fill="none">
        <path d="M9 0v18M2 11l7 7 7-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </motion.div>
  )
}
