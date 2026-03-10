# i18n (HE/EN/RU) + RTL + Formspree Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add Hebrew (default/RTL), English, and Russian language support with a Navbar switcher, swap fonts to Rubik, and wire the contact form to Formspree.

**Architecture:** React Context holds active language; `useLanguage()` hook provides `{ lang, setLang, t, dir }` to all components. On language change, `document.documentElement.lang` and `dir` are updated. RTL is handled by the browser's native dir attribute plus a CSS letter-spacing reset for Hebrew. No external i18n library.

**Tech Stack:** React 19, TypeScript, Tailwind CSS v4, Framer Motion, Rubik (Google Fonts), Formspree

---

## Task 1: Create translation file

**Files:**
- Create: `src/i18n/translations.ts`

**Step 1: Create the file with all strings for all three languages**

```ts
export type Lang = 'he' | 'en' | 'ru'

export const translations = {
  he: {
    dir: 'rtl' as const,
    arrow: '←',
    nav: {
      services: 'שירותים',
      projects: 'פרויקטים',
      contact: 'צור קשר',
      cta: 'בואו נדבר',
      ctaMobile: 'דברו איתנו בוואטסאפ',
    },
    hero: {
      badge: 'פתרונות תוכנה',
      headlineWords: ['בנו', 'מה', 'שאחרים', 'לא יכולים.'],
      subline:
        'אנחנו הופכים רעיונות שאפתניים למציאות ברמת פרודקשן — אוטומציות מותאמות, סוכני AI ותוכנה שנבנית בדיוק לצרכים שלכם.',
      subwords: ['אוטומציות', '·', 'סוכני AI', '·', 'תוכנה מותאמת', '·', 'כל דבר'],
      ctaStart: 'התחל פרויקט',
      ctaWork: 'צפה בעבודות',
    },
    services: {
      tag: '01 / שירותים',
      heading: 'מה אנחנו בונים',
      subline:
        'אנחנו לא עושים עבודה שבלונית. כל התקשרות מתחילה בהבנת הבעיה שלך ומסתיימת בפתרון שעובד באמת.',
      items: [
        {
          label: 'אוטומציות מותאמות אישית',
          description:
            'אוטומציה של תהליכי עבודה מקצה לקצה שמבטלת את הידני. עוצמה ברמת Zapier ללא המגבלות, נבנית ספציפית לתהליכים שלכם.',
        },
        {
          label: 'פיתוח סוכני AI',
          description:
            'סוכנים חכמים שחושבים, מחליטים ופועלים. ממוקדי לקוח ועד סוכני פנים-ארגוניים שמטפלים בתהליכי עבודה מורכבים.',
        },
        {
          label: 'תוכנה מותאמת אישית',
          description:
            'אפליקציות פול-סטאק לפי המפרט המדויק שלכם. דשבורדים, כלים פנימיים, מוצרי SaaS, אינטגרציות — קוד נקי, ברמת פרודקשן.',
        },
        {
          label: 'כל רעיון שיש לך',
          description:
            'אם אפשר לבנות את זה בתוכנה, אנחנו נבנה את זה. הביאו את הרעיון הכי אמיץ שלכם ואנחנו נתכנן ונשלח אותו באותה רמת דיוק.',
        },
      ],
    },
    projects: {
      tag: '02 / פרויקטים',
      heading: 'מה שיצרנו',
      subline: 'דוגמה ממה שבנינו. כל פרויקט שונה — האיכות אף פעם לא.',
      liveStatus: 'חי',
      nextStatus: 'הבא?',
      items: [
        {
          title: 'מנוע אוטומציה לידים',
          description:
            'מערכת לכידה ונתוב לידים מקצה לקצה המשלבת טפסי ווב, לוחות Monday.com והתראות SMS של Twilio — ללא התערבות ידנית.',
        },
        {
          title: 'סוכן תמיכה AI',
          description:
            'סוכן שיחה רב-סבבי עם RAG על תיעוד מוצרים, המסוגל לפתור 80% מכרטיסי התמיכה באופן אוטונומי לפני הסלמה.',
        },
        {
          title: 'דשבורד תפעולי',
          description:
            'דשבורד תפעולי בזמן אמת המחבר מלאי, תזמון וביצועי צוות לתצוגה מאוחדת אחת עם התראות חיות.',
        },
        {
          title: 'הפרויקט הבא שלך',
          description:
            'יש לך בעיה שתוכנה יכולה לפתור? נהפוך אותה למערכת פרודקשן שעובדת — בדיוק כפי שאתה צריך.',
        },
      ],
    },
    contact: {
      tag: '03 / צור קשר',
      heading1: 'מוכנים לבנות',
      heading2: 'משהו אמיתי?',
      subline:
        'ספרו לנו על מה אתם עובדים. נחזור אליכם תוך 24 שעות עם תשובה ישירה — ללא שטויות, ללא מגרש מכירות.',
      chatLabel: 'או שוחחו ישירות',
      wa: 'כתבו לנו בוואטסאפ',
      fields: {
        name: 'שם',
        namePlaceholder: 'השם שלך',
        email: 'אימייל',
        emailPlaceholder: 'האימייל שלך',
        message: 'מה אתם בונים?',
        messagePlaceholder: 'תארו את הפרויקט או הרעיון שלכם...',
      },
      send: 'שלח הודעה',
      sending: 'שולח...',
      successTitle: 'ההודעה התקבלה',
      successSub: 'נחזור אליכם תוך 24 שעות. מצפים לשמוע.',
      error: 'משהו השתבש. נסו ליצור קשר בוואטסאפ.',
    },
    footer: {
      tagline: 'בנה מה שאחרים לא יכולים.',
    },
    floating: {
      backToTop: 'חזרה למעלה',
      wa: 'שוחח בוואטסאפ',
    },
  },

  en: {
    dir: 'ltr' as const,
    arrow: '→',
    nav: {
      services: 'Services',
      projects: 'Projects',
      contact: 'Contact',
      cta: "Let's Talk",
      ctaMobile: "Let's Talk on WhatsApp",
    },
    hero: {
      badge: 'Software Solutions',
      headlineWords: ['Build', 'What', 'Others', "Can't."],
      subline:
        'We turn ambitious ideas into production-grade reality — custom automations, AI agents, and software built exactly to your needs.',
      subwords: ['Automations', '·', 'AI Agents', '·', 'Custom Software', '·', 'Anything'],
      ctaStart: 'Start a Project',
      ctaWork: 'View Our Work',
    },
    services: {
      tag: '01 / Services',
      heading: 'What We Build',
      subline:
        "We don't do cookie-cutter. Every engagement starts with understanding your problem and ends with a solution that actually works.",
      items: [
        {
          label: 'Custom Automations',
          description:
            'End-to-end workflow automation that eliminates the manual. Zapier-level power with none of the limits, built specifically for your processes.',
        },
        {
          label: 'AI Agent Development',
          description:
            'Intelligent agents that reason, decide, and act. From customer-facing chatbots to internal ops agents that handle complex multi-step workflows.',
        },
        {
          label: 'Custom Software',
          description:
            'Full-stack applications built to your exact spec. Dashboards, internal tools, SaaS products, integrations - clean code, production-grade.',
        },
        {
          label: 'Anything You Can Dream',
          description:
            "If it can be built with software, we can build it. Bring your wildest idea and we will architect and ship it with the same precision as everything else.",
        },
      ],
    },
    projects: {
      tag: '02 / Projects',
      heading: "What We've Shipped",
      subline: "A sample of what we've built. Every project is different — the quality never is.",
      liveStatus: 'Live',
      nextStatus: 'Next?',
      items: [
        {
          title: 'Lead Automation Engine',
          description:
            'End-to-end lead capture and routing system integrating web forms, Monday.com boards, and Twilio SMS notifications — zero manual intervention.',
        },
        {
          title: 'AI Support Agent',
          description:
            'Multi-turn conversational agent with RAG over product docs, capable of resolving 80% of support tickets autonomously before escalating.',
        },
        {
          title: 'Operations Dashboard',
          description:
            'Real-time internal ops dashboard connecting inventory, scheduling, and team performance into a single unified view with live alerts.',
        },
        {
          title: 'Your Project Here',
          description:
            "Got a problem that software can solve? We'll turn it into a production system that actually works — precisely the way you need it.",
        },
      ],
    },
    contact: {
      tag: '03 / Contact',
      heading1: 'Ready to build',
      heading2: 'something real?',
      subline:
        "Tell us what you're working on. We'll respond within 24 hours with a straight answer — no fluff, no sales pitch.",
      chatLabel: 'Or chat directly',
      wa: 'WhatsApp Us',
      fields: {
        name: 'Name',
        namePlaceholder: 'Your name',
        email: 'Email',
        emailPlaceholder: 'your@email.com',
        message: 'What are you building?',
        messagePlaceholder: 'Describe your project or idea...',
      },
      send: 'Send Message',
      sending: 'Sending...',
      successTitle: 'Message received',
      successSub: "We'll be in touch within 24 hours. Looking forward to it.",
      error: 'Something went wrong. Try reaching us on WhatsApp instead.',
    },
    footer: {
      tagline: "Build What Others Can't.",
    },
    floating: {
      backToTop: 'Back to top',
      wa: 'Chat on WhatsApp',
    },
  },

  ru: {
    dir: 'ltr' as const,
    arrow: '→',
    nav: {
      services: 'Услуги',
      projects: 'Проекты',
      contact: 'Контакт',
      cta: 'Напишите нам',
      ctaMobile: 'Напишите нам в WhatsApp',
    },
    hero: {
      badge: 'Программные решения',
      headlineWords: ['Строим', 'то,', 'что', 'другие нет.'],
      subline:
        'Мы превращаем амбициозные идеи в продакшн-решения — кастомные автоматизации, AI-агенты и ПО под ваши задачи.',
      subwords: ['Автоматизации', '·', 'AI-агенты', '·', 'Кастомный софт', '·', 'Что угодно'],
      ctaStart: 'Начать проект',
      ctaWork: 'Наши работы',
    },
    services: {
      tag: '01 / Услуги',
      heading: 'Что мы строим',
      subline:
        'Мы не работаем по шаблону. Каждый проект начинается с понимания вашей задачи и заканчивается решением, которое реально работает.',
      items: [
        {
          label: 'Кастомные автоматизации',
          description:
            'Сквозная автоматизация рабочих процессов, устраняющая ручной труд. Мощность уровня Zapier без ограничений, созданная под ваши процессы.',
        },
        {
          label: 'Разработка AI-агентов',
          description:
            'Интеллектуальные агенты, которые рассуждают, принимают решения и действуют. От чат-ботов для клиентов до внутренних операционных агентов.',
        },
        {
          label: 'Кастомное ПО',
          description:
            'Full-stack приложения по вашему точному ТЗ. Дашборды, внутренние инструменты, SaaS-продукты, интеграции — чистый код, продакшн-уровень.',
        },
        {
          label: 'Что угодно',
          description:
            'Если это можно сделать с помощью ПО, мы это сделаем. Приносите самую смелую идею — спроектируем и реализуем с той же точностью.',
        },
      ],
    },
    projects: {
      tag: '02 / Проекты',
      heading: 'Что мы сделали',
      subline: 'Примеры нашей работы. Каждый проект уникален — качество неизменно.',
      liveStatus: 'Запущен',
      nextStatus: 'Далее?',
      items: [
        {
          title: 'Движок автоматизации лидов',
          description:
            'Сквозная система захвата и маршрутизации лидов, интегрирующая веб-формы, доски Monday.com и SMS-уведомления Twilio — без ручного вмешательства.',
        },
        {
          title: 'AI-агент поддержки',
          description:
            'Многоходовой разговорный агент с RAG по документации продукта, способный автономно решить 80% тикетов поддержки до эскалации.',
        },
        {
          title: 'Операционный дашборд',
          description:
            'Дашборд реального времени, объединяющий склад, расписание и производительность команды в едином представлении с живыми алертами.',
        },
        {
          title: 'Ваш проект здесь',
          description:
            'Есть задача, которую может решить ПО? Мы превратим её в продакшн-систему, которая работает именно так, как вам нужно.',
        },
      ],
    },
    contact: {
      tag: '03 / Контакт',
      heading1: 'Готовы создать',
      heading2: 'что-то реальное?',
      subline:
        'Расскажите, над чем работаете. Ответим в течение 24 часов — без воды и продажного питча.',
      chatLabel: 'Или напишите напрямую',
      wa: 'WhatsApp',
      fields: {
        name: 'Имя',
        namePlaceholder: 'Ваше имя',
        email: 'Email',
        emailPlaceholder: 'ваш@email.com',
        message: 'Что вы строите?',
        messagePlaceholder: 'Опишите проект или идею...',
      },
      send: 'Отправить',
      sending: 'Отправка...',
      successTitle: 'Сообщение получено',
      successSub: 'Свяжемся с вами в течение 24 часов.',
      error: 'Что-то пошло не так. Напишите нам в WhatsApp.',
    },
    footer: {
      tagline: 'Строим то, что другие не могут.',
    },
    floating: {
      backToTop: 'Наверх',
      wa: 'Чат в WhatsApp',
    },
  },
} satisfies Record<Lang, unknown>

export type Translations = typeof translations.en
```

**Step 2: Verify TypeScript compiles**

Run: `npm run build`
Expected: No type errors in the new file.

**Step 3: Commit**

```bash
git add src/i18n/translations.ts
git commit -m "feat: add i18n translation strings (HE/EN/RU)"
```

---

## Task 2: Create language context

**Files:**
- Create: `src/i18n/context.tsx`

**Step 1: Create the context and hook**

```tsx
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
  const t = translations[lang]

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = t.dir
  }, [lang, t.dir])

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
```

**Step 2: Commit**

```bash
git add src/i18n/context.tsx
git commit -m "feat: add LanguageProvider and useLanguage hook"
```

---

## Task 3: Wrap App with LanguageProvider

**Files:**
- Modify: `src/App.tsx`

**Step 1: Import and wrap**

Replace the contents of `src/App.tsx`:

```tsx
import { LanguageProvider } from './i18n/context'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'

export default function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </LanguageProvider>
  )
}
```

**Step 2: Commit**

```bash
git add src/App.tsx
git commit -m "feat: wrap app with LanguageProvider"
```

---

## Task 4: Update index.html — default lang/dir + Rubik font

**Files:**
- Modify: `index.html`

**Step 1: Update the html tag, meta, title, and font imports**

Replace the entire `index.html`:

```html
<!doctype html>
<html lang="he" dir="rtl">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Elevize — פתרונות תוכנה מותאמים אישית, אוטומציות וסוכני AI." />
    <title>Elevize — בנה מה שאחרים לא יכולים</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300&family=DM+Mono:wght@300;400;500&display=swap&subset=hebrew,latin,cyrillic"
      rel="stylesheet"
    />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

**Step 2: Commit**

```bash
git add index.html
git commit -m "feat: set default lang=he dir=rtl, switch to Rubik font"
```

---

## Task 5: Update index.css — font variables + RTL reset

**Files:**
- Modify: `src/index.css`

**Step 1: Update the font CSS variables and add RTL reset**

Change the two font variable lines inside `:root`:
```css
/* Replace these two lines: */
--font-display: 'Syne', sans-serif;
--font-body: 'DM Sans', sans-serif;

/* With: */
--font-display: 'Rubik', sans-serif;
--font-body: 'Rubik', sans-serif;
```

Add after the `::selection` block:
```css
/* Hebrew typography — letter-spacing doesn't apply to Hebrew script */
[dir="rtl"] {
  letter-spacing: 0 !important;
}
```

**Step 2: Verify visually**

Run: `npm run dev`
Open browser — page should load in Hebrew with Rubik font. Text should render correctly.

**Step 3: Commit**

```bash
git add src/index.css
git commit -m "feat: switch to Rubik font vars, add RTL letter-spacing reset"
```

---

## Task 6: Update Navbar — language switcher + translations

**Files:**
- Modify: `src/components/Navbar.tsx`

**Step 1: Import useLanguage and update all hardcoded strings**

Key changes:
1. Add `import { useLanguage } from '../i18n/context'` at the top
2. Inside `Navbar()`, add: `const { t, lang, setLang } = useLanguage()`
3. Replace `navLinks` array with one derived from `t`:
```tsx
const navLinks = [
  { label: t.nav.services, href: '#services' },
  { label: t.nav.projects, href: '#projects' },
  { label: t.nav.contact, href: '#contact' },
]
```
4. Replace `"Let's Talk"` span with `{t.nav.cta}`
5. Replace `"Let's Talk on WhatsApp"` with `{t.nav.ctaMobile}`
6. Add a language switcher pill after the WhatsApp CTA button (before the hamburger):

```tsx
{/* Language switcher */}
<div
  className="hidden sm:flex items-center gap-1 px-2 py-1 rounded-full"
  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
>
  {(['he', 'en', 'ru'] as const).map((l) => (
    <button
      key={l}
      onClick={() => setLang(l)}
      className="px-2 py-0.5 rounded-full text-xs transition-all duration-200"
      style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.7rem',
        background: lang === l ? 'rgba(124,58,237,0.3)' : 'transparent',
        color: lang === l ? '#c4b5fd' : 'rgba(255,255,255,0.35)',
        border: lang === l ? '1px solid rgba(124,58,237,0.4)' : '1px solid transparent',
      }}
    >
      {l.toUpperCase()}
    </button>
  ))}
</div>
```

7. Add mobile language switcher inside the mobile menu drawer (at the bottom of the links list):
```tsx
<div className="flex gap-2 pt-2">
  {(['he', 'en', 'ru'] as const).map((l) => (
    <button
      key={l}
      onClick={() => { setLang(l); setMenuOpen(false) }}
      className="px-3 py-1 rounded-full text-xs transition-all duration-200"
      style={{
        fontFamily: 'var(--font-mono)',
        background: lang === l ? 'rgba(124,58,237,0.25)' : 'rgba(255,255,255,0.05)',
        color: lang === l ? '#c4b5fd' : 'rgba(255,255,255,0.35)',
        border: `1px solid ${lang === l ? 'rgba(124,58,237,0.35)' : 'rgba(255,255,255,0.08)'}`,
      }}
    >
      {l.toUpperCase()}
    </button>
  ))}
</div>
```

**Step 2: Verify**

Run: `npm run dev` — switch languages and verify nav labels change, dir flips, switcher highlights active lang.

**Step 3: Commit**

```bash
git add src/components/Navbar.tsx
git commit -m "feat: add language switcher to navbar, wire nav translations"
```

---

## Task 7: Update Hero — translations + RTL-aware animations

**Files:**
- Modify: `src/components/Hero.tsx`

**Step 1: Import and wire translations**

1. Add `import { useLanguage } from '../i18n/context'`
2. Inside `Hero()`, add: `const { t } = useLanguage()`
3. Remove the `HEADLINE_WORDS` and `SUBWORDS` constants (now from `t`)
4. Replace `HEADLINE_WORDS` with `t.hero.headlineWords`
5. Replace `SUBWORDS` with `t.hero.subwords`
6. Replace `"Software Solutions"` badge text with `{t.hero.badge}`
7. Replace the paragraph subline with `{t.hero.subline}`
8. Replace `GlowButton` label: `label={t.hero.ctaStart}`
9. Replace `"View Our Work"` with `{t.hero.ctaWork}`
10. Arrow in `GlowButton`: change `{label} →` to `{label} {t.arrow}` — pass `t` or `arrow` as prop. Simplest: pass `arrow` as a prop to `GlowButton`:

```tsx
function GlowButton({ href, label, arrow }: { href: string; label: string; arrow: string }) {
  // ...
  return (
    <a href={href} ...>
      {/* shine sweep */}
      {label} {arrow}
    </a>
  )
}
```

Call: `<GlowButton href="#contact" label={t.hero.ctaStart} arrow={t.arrow} />`

**Step 2: Commit**

```bash
git add src/components/Hero.tsx
git commit -m "feat: wire Hero to i18n translations"
```

---

## Task 8: Update Services — translations

**Files:**
- Modify: `src/components/Services.tsx`

**Step 1: Import and wire translations**

1. Add `import { useLanguage } from '../i18n/context'`
2. Remove the `services` constant array from module scope (it had hardcoded English text)
3. Inside `Services()`, derive the display data by merging translation items with the static icons/tags/accent:

```tsx
export default function Services() {
  const { t } = useLanguage()

  // Static per-service data that doesn't change with language
  const servicesMeta = [
    { icon: <AutomationIcon />, accent: 'purple', tags: ['n8n', 'Zapier', 'Make', 'Custom'] },
    { icon: <AgentIcon />,      accent: 'cyan',   tags: ['OpenAI', 'LangChain', 'RAG', 'MCP'] },
    { icon: <SoftwareIcon />,   accent: 'purple', tags: ['React', 'FastAPI', 'TypeScript', 'Docker'] },
    { icon: <AnythingIcon />,   accent: 'cyan',   tags: ['Monday.com', 'Twilio', 'APIs', 'You Name It'] },
  ]

  const services = t.services.items.map((item, i) => ({
    ...servicesMeta[i],
    label: item.label,
    description: item.description,
  }))
  // ... rest of JSX unchanged, uses services array
}
```

4. Replace `"01 / Services"` tag text with `{t.services.tag}`
5. Replace `"What We Build"` with `{t.services.heading}`
6. Replace the subline paragraph text with `{t.services.subline}`
7. In `ServiceCard`, use `service.label` as displayed (already done via the merged array)
8. Change `key={s.label}` in the map to `key={i}` (label changes with language)

**Step 2: Commit**

```bash
git add src/components/Services.tsx
git commit -m "feat: wire Services to i18n translations"
```

---

## Task 9: Update Projects — translations

**Files:**
- Modify: `src/components/Projects.tsx`

**Step 1: Import and wire translations**

1. Add `import { useLanguage } from '../i18n/context'`
2. Remove the `projects` constant array from module scope
3. Inside `Projects()`, derive display data:

```tsx
export default function Projects() {
  const { t } = useLanguage()

  // Static per-project data (visual only, no text)
  const projectsMeta = [
    { gradient: 'linear-gradient(135deg, #4c1d95 0%, #1e1b4b 50%, #0f172a 100%)', accent: 'purple', isLive: true,  isPlaceholder: false, tags: ['Monday.com', 'Twilio', 'FastAPI', 'Automation'] },
    { gradient: 'linear-gradient(135deg, #0c4a6e 0%, #0f172a 50%, #1e1b4b 100%)', accent: 'cyan',   isLive: true,  isPlaceholder: false, tags: ['OpenAI', 'LangChain', 'RAG', 'React'] },
    { gradient: 'linear-gradient(135deg, #312e81 0%, #0f172a 50%, #064e3b 100%)', accent: 'purple', isLive: true,  isPlaceholder: false, tags: ['React', 'TypeScript', 'FastAPI', 'SSE'] },
    { gradient: 'linear-gradient(135deg, #1c1917 0%, #0f172a 60%, #1c1917 100%)', accent: 'cyan',   isLive: false, isPlaceholder: true,  tags: ['Your Stack', 'Your Problem', 'Our Solution'] },
  ]

  const projects = t.projects.items.map((item, i) => ({
    ...projectsMeta[i],
    title: item.title,
    description: item.description,
    status: projectsMeta[i].isLive ? t.projects.liveStatus : t.projects.nextStatus,
  }))
  // ... rest of JSX unchanged
}
```

4. Replace header texts with `{t.projects.tag}`, `{t.projects.heading}`, `{t.projects.subline}`
5. In `ProjectCard`: replace `project.status === 'Next?'` check with `project.isPlaceholder`
6. Change `key={p.title}` to `key={i}`

**Step 2: Commit**

```bash
git add src/components/Projects.tsx
git commit -m "feat: wire Projects to i18n translations"
```

---

## Task 10: Update Contact — translations + Formspree

**Files:**
- Modify: `src/components/Contact.tsx`
- Modify: `.env`
- Modify: `.env.example`

**Step 1: Add Formspree env var**

In `.env`, add:
```
VITE_FORMSPREE_ID=your_form_id_here
```

In `.env.example`, add:
```
VITE_FORMSPREE_ID=your_form_id_here
```

To get a Formspree ID: go to formspree.io → New Form → copy the form ID (e.g. `xpzgkdlr`).

**Step 2: Update Contact.tsx**

1. Add `import { useLanguage } from '../i18n/context'`
2. Add at top of file:
```tsx
const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID as string
```
3. Inside `Contact()`, add: `const { t, dir } = useLanguage()`
4. Replace the `fetch('/api/leads', ...)` call:
```tsx
const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
  body: JSON.stringify({ name, email, message }),
})
```
5. Replace all hardcoded strings with `t.contact.*`
6. RTL-aware x animation: the Contact section has `initial={{ opacity: 0, x: -24 }}` on the left column and `x: 24` on the right. For RTL these should flip:
```tsx
const xLeft = dir === 'rtl' ? 24 : -24
const xRight = dir === 'rtl' ? -24 : 24
// Use xLeft / xRight in the motion.div initial props
```
7. Replace `'Send Message →'` submit button text with `{state === 'submitting' ? t.contact.sending : \`${t.contact.send} ${t.arrow}\`}`

**Step 3: Commit**

```bash
git add src/components/Contact.tsx .env .env.example
git commit -m "feat: wire Contact to i18n, replace /api/leads with Formspree"
```

---

## Task 11: Update Footer — translations

**Files:**
- Modify: `src/components/Footer.tsx`

**Step 1: Wire translations**

1. Add `import { useLanguage } from '../i18n/context'`
2. Inside `Footer()`, add: `const { t } = useLanguage()`
3. Replace `"Build What Others Can't."` tagline with `{t.footer.tagline}`
4. Replace the `navLinks` array with:
```tsx
const links = [
  { label: t.nav.services, href: '#services' },
  { label: t.nav.projects, href: '#projects' },
  { label: t.nav.contact, href: '#contact' },
]
```
Note: `t.nav` is accessible — Footer imports from the same context.

**Step 2: Commit**

```bash
git add src/components/Footer.tsx
git commit -m "feat: wire Footer to i18n translations"
```

---

## Task 12: Update FloatingButtons — translations (aria-labels)

**Files:**
- Modify: `src/components/FloatingButtons.tsx`

**Step 1: Wire translations**

1. Add `import { useLanguage } from '../i18n/context'`
2. Inside `FloatingButtons()`, add: `const { t } = useLanguage()`
3. Replace `aria-label="Back to top"` with `aria-label={t.floating.backToTop}`
4. Replace `aria-label="Chat on WhatsApp"` with `aria-label={t.floating.wa}`

**Step 2: Commit**

```bash
git add src/components/FloatingButtons.tsx
git commit -m "feat: wire FloatingButtons aria-labels to i18n"
```

---

## Task 13: Final verification

**Step 1: Full build**

```bash
npm run build
```
Expected: Build succeeds with no TypeScript errors.

**Step 2: Visual check**

```bash
npm run preview
```

Verify:
- [ ] Default loads in Hebrew, page direction is RTL
- [ ] Switching to EN: page flips to LTR, all text in English, arrow shows `→`
- [ ] Switching to RU: page stays LTR, all text in Russian
- [ ] Switching back to HE: RTL restored, arrow shows `←`
- [ ] Language switcher pill visible in desktop Navbar, works in mobile menu too
- [ ] Font is Rubik across all languages (check DevTools)
- [ ] Contact form submits to Formspree (test with a real ID in .env)

**Step 3: Final commit**

```bash
git add .
git commit -m "feat: i18n HE/EN/RU with RTL support, Rubik font, Formspree contact"
```
