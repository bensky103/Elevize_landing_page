import { motion } from 'framer-motion'

/* ── Icons (declared first so they can be used in the services array) ── */

// AutomationIcon: Connected nodes / flow graph — better represents workflow automation
function AutomationIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {/* Central node */}
      <circle cx="12" cy="12" r="2.5" fill="currentColor" fillOpacity="0.25" />
      {/* Left node */}
      <circle cx="3.5" cy="12" r="1.8" fill="currentColor" fillOpacity="0.2" />
      {/* Top-right node */}
      <circle cx="19" cy="5" r="1.8" fill="currentColor" fillOpacity="0.2" />
      {/* Bottom-right node */}
      <circle cx="19" cy="19" r="1.8" fill="currentColor" fillOpacity="0.2" />
      {/* Connecting lines */}
      <line x1="5.3" y1="12" x2="9.5" y2="12" strokeWidth="1.6" />
      <line x1="14" y1="10.7" x2="17.5" y2="6.3" strokeWidth="1.6" />
      <line x1="14" y1="13.3" x2="17.5" y2="17.7" strokeWidth="1.6" />
      {/* Arrow heads on lines */}
      <polyline points="16,5.5 17.5,6.3 16.8,8" strokeWidth="1.4" />
      <polyline points="16,18 17.5,17.7 16.8,16" strokeWidth="1.4" />
    </svg>
  )
}

// AgentIcon: Brain/circuit hybrid — better represents AI agent
function AgentIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {/* Brain outline */}
      <path d="M9.5 3C7 3 5 5 5 7.5c0 1-.3 2-.8 2.8A3.5 3.5 0 005 13c0 1.3.7 2.5 1.8 3.2C7.5 17.7 8 19 8 20h8c0-1 .5-2.3 1.2-3.8A3.5 3.5 0 0019 13a3.5 3.5 0 00-.8-2.7c-.5-.8-.7-1.8-.7-2.8C17.5 5 15.5 3 13 3h-3.5z" fill="currentColor" fillOpacity="0.1" />
      {/* Circuit lines inside brain */}
      <line x1="9" y1="8" x2="15" y2="8" strokeWidth="1.3" />
      <line x1="9" y1="11" x2="15" y2="11" strokeWidth="1.3" />
      <line x1="9" y1="14" x2="15" y2="14" strokeWidth="1.3" />
      <line x1="9" y1="8" x2="9" y2="14" strokeWidth="1.3" />
      <line x1="15" y1="8" x2="15" y2="14" strokeWidth="1.3" />
      {/* Node dots */}
      <circle cx="9" cy="11" r="1" fill="currentColor" />
      <circle cx="15" cy="11" r="1" fill="currentColor" />
      {/* Bottom pins */}
      <line x1="10" y1="20" x2="10" y2="22" strokeWidth="1.5" />
      <line x1="14" y1="20" x2="14" y2="22" strokeWidth="1.5" />
    </svg>
  )
}

// SoftwareIcon: Code brackets with a stack — represents full-stack software
function SoftwareIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {/* Browser/window frame */}
      <rect x="2" y="3" width="20" height="16" rx="2" fill="currentColor" fillOpacity="0.08" />
      {/* Top bar */}
      <line x1="2" y1="7" x2="22" y2="7" strokeWidth="1.5" />
      {/* Traffic light dots */}
      <circle cx="5" cy="5" r="0.8" fill="currentColor" />
      <circle cx="8" cy="5" r="0.8" fill="currentColor" />
      {/* Code chevrons */}
      <polyline points="7 11.5 5 13.5 7 15.5" strokeWidth="1.7" />
      <polyline points="17 11.5 19 13.5 17 15.5" strokeWidth="1.7" />
      <line x1="13" y1="10.5" x2="11" y2="16.5" strokeWidth="1.6" />
    </svg>
  )
}

// AnythingIcon: Sparkle / magic wand — conveys unlimited possibility
function AnythingIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {/* Wand */}
      <line x1="15" y1="4" x2="4" y2="15" strokeWidth="2" />
      <path d="M15 4l2 2-11 11-2-2z" fill="currentColor" fillOpacity="0.15" />
      {/* Sparkle top right */}
      <line x1="18" y1="3" x2="18" y2="5" />
      <line x1="17" y1="4" x2="19" y2="4" />
      {/* Sparkle mid-right */}
      <line x1="21" y1="8" x2="21" y2="11" strokeWidth="1.4" />
      <line x1="19.5" y1="9.5" x2="22.5" y2="9.5" strokeWidth="1.4" />
      {/* Small sparkle */}
      <line x1="19" y1="15" x2="19" y2="17" strokeWidth="1.3" />
      <line x1="18" y1="16" x2="20" y2="16" strokeWidth="1.3" />
      {/* Dot accent */}
      <circle cx="5" cy="19" r="1" fill="currentColor" fillOpacity="0.5" />
    </svg>
  )
}

/* ── Data ── */

const services = [
  {
    icon: <AutomationIcon />,
    label: 'Custom Automations',
    description:
      'End-to-end workflow automation that eliminates the manual. Zapier-level power with none of the limits, built specifically for your processes.',
    accent: 'purple',
    tags: ['n8n', 'Zapier', 'Make', 'Custom'],
  },
  {
    icon: <AgentIcon />,
    label: 'AI Agent Development',
    description:
      'Intelligent agents that reason, decide, and act. From customer-facing chatbots to internal ops agents that handle complex multi-step workflows.',
    accent: 'cyan',
    tags: ['OpenAI', 'LangChain', 'RAG', 'MCP'],
  },
  {
    icon: <SoftwareIcon />,
    label: 'Custom Software',
    description:
      'Full-stack applications built to your exact spec. Dashboards, internal tools, SaaS products, integrations - clean code, production-grade.',
    accent: 'purple',
    tags: ['React', 'FastAPI', 'TypeScript', 'Docker'],
  },
  {
    icon: <AnythingIcon />,
    label: 'Anything You Can Dream',
    description:
      'If it can be built with software, we can build it. Bring your wildest idea and we will architect and ship it with the same precision as everything else.',
    accent: 'cyan',
    tags: ['Monday.com', 'Twilio', 'APIs', 'You Name It'],
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function Services() {
  return (
    <section id="services" className="section-padding relative">
      {/* Subtle divider glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(124,58,237,0.4), transparent)' }}
        aria-hidden
      />

      <div className="site-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-10 md:mb-16 flex flex-col gap-3 items-center text-center"
        >
          <span
            className="tag"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            01 / Services
          </span>
          <h2
            className="text-3xl md:text-5xl font-bold"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--white)' }}
          >
            What We Build
          </h2>
          <p className="max-w-lg text-base" style={{ color: 'var(--muted)', fontWeight: 300 }}>
            We don't do cookie-cutter. Every engagement starts with understanding your problem and ends with a solution that actually works.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((s, i) => (
            <ServiceCard key={s.label} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

type ServiceItem = typeof services[0]

function ServiceCard({ service, index }: { service: ServiceItem; index: number }) {
  const isPurple = service.accent === 'purple'

  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: '-60px' }}
      variants={cardVariants}
      className="glass-card p-7 sm:p-9 flex flex-col gap-5 sm:gap-6 relative group"
      style={{
        borderColor: isPurple ? 'rgba(124,58,237,0.12)' : 'rgba(6,182,212,0.1)',
      }}
    >
      {/* Top border glow line — appears on hover */}
      <span
        className="absolute top-0 left-0 right-0 h-px pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: isPurple
            ? 'linear-gradient(90deg, transparent 0%, rgba(124,58,237,0.7) 40%, rgba(168,85,247,0.9) 50%, rgba(124,58,237,0.7) 60%, transparent 100%)'
            : 'linear-gradient(90deg, transparent 0%, rgba(6,182,212,0.6) 40%, rgba(34,211,238,0.85) 50%, rgba(6,182,212,0.6) 60%, transparent 100%)',
        }}
        aria-hidden
      />

      {/* Scan sweep on hover */}
      <span
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          background: isPurple
            ? 'linear-gradient(120deg, transparent 30%, rgba(124,58,237,0.06) 50%, transparent 70%)'
            : 'linear-gradient(120deg, transparent 30%, rgba(6,182,212,0.05) 50%, transparent 70%)',
        }}
        aria-hidden
      />

      {/* Corner accent */}
      <span
        className="absolute top-0 right-0 w-16 h-16 pointer-events-none"
        style={{
          background: isPurple
            ? 'radial-gradient(circle at top right, rgba(124,58,237,0.18), transparent 70%)'
            : 'radial-gradient(circle at top right, rgba(6,182,212,0.14), transparent 70%)',
        }}
        aria-hidden
      />

      {/* Icon — diamond-cut container */}
      <div
        className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-105"
        style={{
          background: isPurple
            ? 'linear-gradient(135deg, rgba(124,58,237,0.2) 0%, rgba(124,58,237,0.08) 100%)'
            : 'linear-gradient(135deg, rgba(6,182,212,0.18) 0%, rgba(6,182,212,0.07) 100%)',
          border: `1px solid ${isPurple ? 'rgba(124,58,237,0.35)' : 'rgba(6,182,212,0.3)'}`,
          boxShadow: isPurple
            ? '0 0 12px rgba(124,58,237,0.15), inset 0 1px 0 rgba(168,85,247,0.1)'
            : '0 0 12px rgba(6,182,212,0.12), inset 0 1px 0 rgba(34,211,238,0.1)',
          color: isPurple ? '#c084fc' : '#22d3ee',
        }}
      >
        {service.icon}
      </div>

      {/* Text */}
      <div className="flex flex-col gap-2">
        <h3
          className="text-lg font-semibold"
          style={{ fontFamily: 'var(--font-display)', color: 'var(--white)', letterSpacing: '-0.01em' }}
        >
          {service.label}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)', fontWeight: 300 }}>
          {service.description}
        </p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mt-auto">
        {service.tags.map((t) => (
          <span key={t} className={`tag ${isPurple ? '' : 'tag-cyan'}`} style={{ fontSize: '0.7rem' }}>
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  )
}
