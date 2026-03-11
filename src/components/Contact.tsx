import { useState, type FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../i18n/context'

const WA_NUMBER = import.meta.env.VITE_WA_NUMBER as string
const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID as string

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export default function Contact() {
  const { t, dir } = useLanguage()
  const WA_MESSAGE = encodeURIComponent(t.waMessage)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [state, setState] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setState('submitting')
    setErrorMsg('')

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })

      if (!res.ok) throw new Error('Server error')
      setState('success')
    } catch {
      setState('error')
      setErrorMsg(t.contact.error)
    }
  }

  const xLeft = dir === 'rtl' ? 24 : -24
  const xRight = dir === 'rtl' ? -24 : 24

  return (
    <section id="contact" className="section-padding relative">
      {/* Left glow */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-80 h-80 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        aria-hidden
      />

      <div className="site-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, x: xLeft }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: '-80px' }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6"
          >
            <span
              className="tag"
              style={{ fontFamily: 'var(--font-mono)', alignSelf: 'flex-start' }}
            >
              {t.contact.tag}
            </span>
            <h2
              className="text-3xl md:text-5xl font-bold"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--white)' }}
            >
              {t.contact.heading1}<br />
              <span
                style={{
                  backgroundImage: 'linear-gradient(135deg, #a855f7, #06b6d4)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                {t.contact.heading2}
              </span>
            </h2>
            <p className="text-base leading-relaxed" style={{ color: 'var(--muted)', fontWeight: 300, maxWidth: '420px' }}>
              {t.contact.subline}
            </p>

            {/* Alternative contact */}
            <div className="flex flex-col gap-3 mt-2">
              <p
                className="text-xs uppercase tracking-widest"
                style={{ fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.25)' }}
              >
                {t.contact.chatLabel}
              </p>
              <a
                href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-3 rounded-xl w-fit transition-all duration-300 group"
                style={{
                  background: 'rgba(37,211,102,0.08)',
                  border: '1px solid rgba(37,211,102,0.2)',
                  color: '#4ade80',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(37,211,102,0.14)'
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(37,211,102,0.18)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(37,211,102,0.08)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <WhatsAppIcon />
                <span className="text-sm font-medium" style={{ fontFamily: 'var(--font-body)' }}>
                  {t.contact.wa}
                </span>
                <span className="text-xs ml-auto opacity-50 group-hover:opacity-80 transition-opacity" style={{ fontFamily: 'var(--font-mono)' }}>
                  →
                </span>
              </a>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: xRight }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: '-80px' }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <AnimatePresence mode="wait">
              {state === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="glass-card p-7 sm:p-10 flex flex-col items-center gap-5 text-center"
                  style={{ borderColor: 'rgba(124,58,237,0.25)' }}
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(124,58,237,0.3)' }}
                  >
                    <CheckIcon />
                  </div>
                  <h3
                    className="text-xl font-bold"
                    style={{ fontFamily: 'var(--font-display)', color: 'var(--white)' }}
                  >
                    {t.contact.successTitle}
                  </h3>
                  <p className="text-base" style={{ color: 'var(--muted)', fontWeight: 300 }}>
                    {t.contact.successSub}
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="glass-card p-5 sm:p-7 flex flex-col gap-5"
                  style={{ borderColor: 'rgba(124,58,237,0.15)' }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field
                      label={t.contact.fields.name}
                      type="text"
                      value={name}
                      onChange={setName}
                      placeholder={t.contact.fields.namePlaceholder}
                      required
                    />
                    <Field
                      label={t.contact.fields.email}
                      type="email"
                      value={email}
                      onChange={setEmail}
                      placeholder={t.contact.fields.emailPlaceholder}
                      required
                    />
                  </div>
                  <Field
                    label={t.contact.fields.message}
                    type="textarea"
                    value={message}
                    onChange={setMessage}
                    placeholder={t.contact.fields.messagePlaceholder}
                    required
                  />

                  {state === 'error' && (
                    <p className="text-sm text-red-400" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}>
                      {errorMsg}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={state === 'submitting'}
                    className="relative w-full py-3 rounded-xl font-semibold text-sm overflow-hidden transition-all duration-300"
                    style={{
                      fontFamily: 'var(--font-body)',
                      background: state === 'submitting'
                        ? 'rgba(124,58,237,0.3)'
                        : 'linear-gradient(135deg, #7c3aed, #5b21b6)',
                      color: '#fff',
                      boxShadow: state === 'submitting' ? 'none' : '0 0 20px rgba(124,58,237,0.35)',
                    }}
                    onMouseEnter={(e) => {
                      if (state !== 'submitting') {
                        e.currentTarget.style.boxShadow = '0 0 35px rgba(124,58,237,0.55)'
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (state !== 'submitting') {
                        e.currentTarget.style.boxShadow = '0 0 20px rgba(124,58,237,0.35)'
                      }
                    }}
                  >
                    {state === 'submitting' ? (
                      <span className="flex items-center justify-center gap-2">
                        <Spinner /> {t.contact.sending}
                      </span>
                    ) : (
                      `${t.contact.send} ${t.arrow}`
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ── Field ── */
function Field({
  label,
  type,
  value,
  onChange,
  placeholder,
  required,
}: {
  label: string
  type: 'text' | 'email' | 'textarea'
  value: string
  onChange: (v: string) => void
  placeholder: string
  required?: boolean
}) {
  const baseStyle: React.CSSProperties = {
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '10px',
    padding: '0.65rem 0.85rem',
    color: 'var(--white)',
    fontFamily: 'var(--font-body)',
    fontSize: '0.875rem',
    width: '100%',
    outline: 'none',
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
  }

  const focusStyle = {
    borderColor: 'rgba(124,58,237,0.45)',
    boxShadow: '0 0 0 3px rgba(124,58,237,0.1)',
  }

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    Object.assign(e.currentTarget.style, focusStyle)
  }
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
    e.currentTarget.style.boxShadow = 'none'
  }

  return (
    <div className="flex flex-col gap-1.5">
      <label
        className="text-xs"
        style={{ fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.05em' }}
      >
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          required={required}
          rows={5}
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={{ ...baseStyle, resize: 'none' }}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          required={required}
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={baseStyle}
        />
      )}
    </div>
  )
}

/* ── Icons ── */
function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function Spinner() {
  return (
    <svg
      className="animate-spin"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
      <path d="M12 2a10 10 0 0110 10" />
    </svg>
  )
}
