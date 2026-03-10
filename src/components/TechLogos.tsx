import { motion } from 'framer-motion'

const techs = [
  'OpenAI', 'LangChain', 'n8n', 'Make', 'Zapier', 'React', 'FastAPI',
  'TypeScript', 'Docker', 'Monday.com', 'Twilio', 'Vercel', 'PostgreSQL',
  'RAG', 'MCP', 'Supabase', 'Next.js', 'Python',
]

// Double for seamless loop
const items = [...techs, ...techs]

export default function TechLogos() {
  return (
    <div
      className="relative overflow-hidden py-8"
      style={{
        borderTop: '1px solid rgba(255,255,255,0.05)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      {/* Fade left edge */}
      <div
        className="absolute left-0 top-0 bottom-0 w-28 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, var(--bg-base), transparent)' }}
        aria-hidden
      />
      {/* Fade right edge */}
      <div
        className="absolute right-0 top-0 bottom-0 w-28 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, var(--bg-base), transparent)' }}
        aria-hidden
      />

      {/* Always LTR regardless of page direction */}
      <div dir="ltr">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
          className="flex items-center gap-10"
          style={{ width: 'max-content' }}
        >
          {items.map((tech, i) => (
            <span
              key={i}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                letterSpacing: '0.06em',
                color: 'rgba(255,255,255,0.18)',
                whiteSpace: 'nowrap',
              }}
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
