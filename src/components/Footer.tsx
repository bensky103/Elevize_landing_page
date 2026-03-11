import { motion } from 'framer-motion'
import { useLanguage } from '../i18n/context'

function FooterLogoMark() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <defs>
        <linearGradient id="footer-logo-grad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#a855f7" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.7" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="9" fill="url(#footer-logo-grad)" />
      <rect x="1.5" y="1.5" width="29" height="29" rx="7.5" fill="#04040f" opacity="0.6" />
      <path
        d="M9 10h14M9 16h10M9 22h14M9 10v12"
        stroke="rgba(255,255,255,0.6)"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Footer() {
  const { t } = useLanguage()
  const links = [
    { label: t.nav.services, href: '#services' },
    { label: t.nav.process, href: '#process' },
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.testimonials, href: '#testimonials' },
    { label: t.nav.contact, href: '#contact' },
    { label: t.nav.faq, href: '#faq' },
  ]
  return (
    <footer className="relative py-12 overflow-hidden">
      {/* Top gradient divider — subtle glow */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(124,58,237,0.4) 25%, rgba(168,85,247,0.5) 50%, rgba(6,182,212,0.35) 75%, transparent)' }}
        aria-hidden
      />
      {/* Soft glow above the divider */}
      <div
        className="absolute top-0 left-1/4 right-1/4 h-12 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(124,58,237,0.1) 0%, transparent 70%)',
        }}
        aria-hidden
      />

      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-col md:grid md:grid-cols-[1fr_auto_1fr] items-center gap-8"
        >
          {/* Logo + tagline */}
          <div className="flex items-center gap-3">
            <FooterLogoMark />
            <div className="flex flex-col gap-0.5">
              <span
                className="text-base font-bold tracking-tight"
                style={{ fontFamily: 'var(--font-display)', color: 'rgba(255,255,255,0.7)' }}
              >
                Elevize
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  color: 'rgba(255,255,255,0.28)',
                }}
              >
                {t.footer.tagline}
              </span>
            </div>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm transition-colors duration-200"
                style={{
                  fontFamily: 'var(--font-mono)',
                  color: 'rgba(255,255,255,0.35)',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.7)' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.35)' }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p
            className="text-sm md:text-end"
            style={{ fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.28)' }}
          >
            © {new Date().getFullYear()} Elevize
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
