# Design: i18n (HE/EN/RU) + RTL + Formspree

**Date:** 2026-03-10
**Status:** Approved

## Summary

Add multilingual support (Hebrew default, English, Russian) with full RTL handling for Hebrew, switch fonts to Rubik, and replace the broken `/api/leads` backend call with Formspree.

## Decisions

- **i18n approach:** React Context + translation file (no external library)
- **Default language:** Hebrew (`lang="he"`, `dir="rtl"`)
- **Font:** Rubik (replaces Syne + DM Sans — supports Hebrew, Latin, Cyrillic); DM Mono kept
- **Contact form:** Formspree (`VITE_FORMSPREE_ID` env var)

## Architecture

### Translation Layer

- `src/i18n/translations.ts` — all UI strings keyed as `{ he, en, ru }` per key
- `src/i18n/context.tsx` — `LanguageContext`, `LanguageProvider`, `useLanguage()` hook
- `useLanguage()` returns `{ lang, setLang, t, dir }`
- On language change: `document.documentElement.lang` and `document.documentElement.dir` updated via `useEffect`

### RTL Handling

- `dir="rtl"` on `<html>` handles text alignment and inline layout automatically
- Arrows in buttons: `t('arrow')` returns `←` for Hebrew, `→` for EN/RU
- Framer Motion x-offsets: flip sign when `dir === 'rtl'`
- CSS: `[dir="rtl"] { letter-spacing: 0; }` — Hebrew typography standard

### Language Switcher

- Pill in Navbar right side: `HE | EN | RU`
- Active language highlighted in purple

### Formspree

- Endpoint: `https://formspree.io/f/${VITE_FORMSPREE_ID}`
- Fields: `name`, `email`, `message` (unchanged)
- Env var: `VITE_FORMSPREE_ID`

## Files

| File | Change |
|------|--------|
| `src/i18n/translations.ts` | New |
| `src/i18n/context.tsx` | New |
| `src/App.tsx` | Add LanguageProvider |
| `index.html` | `lang="he" dir="rtl"`, Rubik font |
| `src/index.css` | Rubik font vars, RTL letter-spacing reset |
| `src/components/Navbar.tsx` | Language switcher + translations |
| `src/components/Hero.tsx` | Translations |
| `src/components/Services.tsx` | Translations |
| `src/components/Projects.tsx` | Translations |
| `src/components/Contact.tsx` | Translations + Formspree |
| `src/components/Footer.tsx` | Translations |
| `src/components/FloatingButtons.tsx` | Translations |
| `.env` + `.env.example` | Add VITE_FORMSPREE_ID |
