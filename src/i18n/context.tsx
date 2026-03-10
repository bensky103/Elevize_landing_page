import { createContext, useContext, useEffect, useState } from 'react'
import { translations, type Lang } from './translations'

type LangContextValue = {
  lang: Lang
  setLang: (l: Lang) => void
  t: typeof translations.en
  dir: 'ltr' | 'rtl'
}

const LangContext = createContext<LangContextValue | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('he')
  const t = translations[lang] as typeof translations.en

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = t.dir
    document.title = t.pageTitle
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) metaDesc.setAttribute('content', t.pageDescription)
  }, [lang, t.dir, t.pageTitle, t.pageDescription])

  return (
    <LangContext.Provider value={{ lang, setLang, t, dir: t.dir }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider')
  return ctx
}
