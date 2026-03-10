import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Lead Automation Engine',
    description:
      'End-to-end lead capture and routing system integrating web forms, Monday.com boards, and Twilio SMS notifications — zero manual intervention.',
    gradient: 'linear-gradient(135deg, #4c1d95 0%, #1e1b4b 50%, #0f172a 100%)',
    accent: 'purple',
    tags: ['Monday.com', 'Twilio', 'FastAPI', 'Automation'],
    status: 'Live',
  },
  {
    title: 'AI Support Agent',
    description:
      'Multi-turn conversational agent with RAG over product docs, capable of resolving 80% of support tickets autonomously before escalating.',
    gradient: 'linear-gradient(135deg, #0c4a6e 0%, #0f172a 50%, #1e1b4b 100%)',
    accent: 'cyan',
    tags: ['OpenAI', 'LangChain', 'RAG', 'React'],
    status: 'Live',
  },
  {
    title: 'Operations Dashboard',
    description:
      'Real-time internal ops dashboard connecting inventory, scheduling, and team performance into a single unified view with live alerts.',
    gradient: 'linear-gradient(135deg, #312e81 0%, #0f172a 50%, #064e3b 100%)',
    accent: 'purple',
    tags: ['React', 'TypeScript', 'FastAPI', 'SSE'],
    status: 'Live',
  },
  {
    title: 'Your Project Here',
    description:
      "Got a problem that software can solve? We'll turn it into a production system that actually works — precisely the way you need it.",
    gradient: 'linear-gradient(135deg, #1c1917 0%, #0f172a 60%, #1c1917 100%)',
    accent: 'cyan',
    tags: ['Your Stack', 'Your Problem', 'Our Solution'],
    status: 'Next?',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative">
      {/* BG accent */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 pointer-events-none"
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
          viewport={{ once: false, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-10 md:mb-16 flex flex-col gap-3 items-center text-center"
        >
          <span
            className="tag tag-cyan"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            02 / Projects
          </span>
          <h2
            className="text-3xl md:text-5xl font-bold"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--white)' }}
          >
            What We've Shipped
          </h2>
          <p className="max-w-lg text-base" style={{ color: 'var(--muted)', fontWeight: 300 }}>
            A sample of what we've built. Every project is different — the quality never is.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

type Project = typeof projects[0]

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isPurple = project.accent === 'purple'
  const isLast = index === projects.length - 1

  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: '-60px' }}
      variants={cardVariants}
      className="glass-card group flex flex-col"
      style={{
        borderColor: isLast
          ? 'rgba(6,182,212,0.3)'
          : isPurple
          ? 'rgba(124,58,237,0.12)'
          : 'rgba(6,182,212,0.1)',
        borderStyle: isLast ? 'dashed' : 'solid',
      }}
    >
      {/* Thumbnail */}
      <div
        className="relative h-36 sm:h-44 flex-shrink-0 overflow-hidden"
        style={{ background: project.gradient }}
      >
        {/* Grid overlay on thumbnail */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />
        {/* Noise texture overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: '128px 128px',
            mixBlendMode: 'overlay',
          }}
          aria-hidden
        />

        {/* Status badge */}
        <span
          className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-medium"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            background: project.status === 'Next?'
              ? 'rgba(6,182,212,0.15)'
              : 'rgba(34,197,94,0.12)',
            border: `1px solid ${project.status === 'Next?' ? 'rgba(6,182,212,0.3)' : 'rgba(34,197,94,0.3)'}`,
            color: project.status === 'Next?' ? '#67e8f9' : '#86efac',
          }}
        >
          {project.status === 'Next?' ? '→' : '●'} {project.status}
        </span>

        {/* Hover shine sweep */}
        <span
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          style={{
            background: 'linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.06) 50%, transparent 65%)',
          }}
          aria-hidden
        />
      </div>

      {/* Hairline separator between thumbnail and content */}
      <div
        className="h-px flex-shrink-0"
        style={{
          background: isPurple
            ? 'linear-gradient(90deg, transparent, rgba(124,58,237,0.3) 30%, rgba(124,58,237,0.15) 70%, transparent)'
            : 'linear-gradient(90deg, transparent, rgba(6,182,212,0.28) 30%, rgba(6,182,212,0.14) 70%, transparent)',
        }}
        aria-hidden
      />

      {/* Content */}
      <div className="p-7 sm:p-9 flex flex-col gap-4 flex-grow">
        <h3
          className="text-lg font-semibold"
          style={{ fontFamily: 'var(--font-display)', color: 'var(--white)', letterSpacing: '-0.01em' }}
        >
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)', fontWeight: 300 }}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className={`tag ${isPurple ? '' : 'tag-cyan'}`}
              style={{ fontSize: '0.7rem' }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
