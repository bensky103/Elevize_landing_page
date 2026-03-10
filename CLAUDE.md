# Elevize Landing Page

Frontend-only landing page for Elevize. React + Vite + TypeScript + Tailwind CSS v4.

## Commands

```bash
npm install       # install dependencies
npm run dev       # dev server (localhost:5173)
npm run build     # production build → dist/
npm run preview   # preview production build locally
```

## Stack

- React 19, TypeScript
- Tailwind CSS v4 (via `@tailwindcss/vite` plugin — no tailwind.config.js needed)
- Framer Motion for animations
- No backend, no API calls

## Structure

```
src/
  components/   # page sections (Hero, Navbar, Services, Projects, Contact, Footer, FloatingButtons)
  App.tsx
  main.tsx
  index.css
index.html
public/
```

## Environment

`.env` (gitignored) — copy from `.env.example`:
- `VITE_WA_NUMBER` — WhatsApp number for contact button
- `VITE_WA_MESSAGE` — default WhatsApp message

## Deployment

Hosted on Vercel. Push to GitHub → auto-deploy.
Vercel settings: root directory = repo root, build command = `npm run build`, output = `dist`.

## Design Decisions

- **No backend** — use third-party services for forms (Formspree/Web3Forms) and email capture
- **Sub-pages** — add `react-router-dom` if needed; Vercel handles SPA routing natively
- **Recommend against**: adding a backend to this repo; keep automations separate

## Workflow Notes

- When user proposes an architectural decision that differs from best practice, flag it and suggest the standard approach before implementing
