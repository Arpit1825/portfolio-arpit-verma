# Arpit Verma — Portfolio Website

A premium, production-ready personal portfolio built with React + Vite, featuring glassmorphism design, Framer Motion animations, and full responsiveness.

## ✨ Features
- Premium Dark Theme — glassmorphism cards, gradient accents
- Custom Cursor, Page Loader, Scroll Progress indicator
- Dynamic Typing Animation (react-type-animation)
- Framer Motion entrance animations & micro-interactions
- Floating Tech Icons in hero
- Skills section with animated progress bars + category filter tabs
- Projects grid with patent badge highlight
- Achievement counters with animated count-up
- Live GitHub Stats, streak, contribution graph
- EmailJS contact form with copy-to-clipboard
- Fully Responsive — Mobile → Desktop

## 🗂️ Folder Structure
```
portfolio/
├── public/
│   ├── favicon.svg
│   └── resume.pdf          ← ADD YOUR RESUME HERE
├── src/
│   ├── components/
│   │   ├── sections/       Navbar, Hero, About, Skills, Projects,
│   │   │                   Achievements, GitHub, Contact, Footer
│   │   └── ui/             CustomCursor, Loader, ScrollProgress
│   ├── data/index.js       ← ALL CONTENT LIVES HERE
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── tailwind.config.js
└── package.json
```

## 🚀 Quick Start
```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # Production build → dist/
npm run preview   # Preview production build
```

## ⚙️ Setup Checklist

1. **Add resume**: Place `resume.pdf` in `public/`
2. **Update content**: Edit `src/data/index.js` with your info
3. **EmailJS**: In `Contact.jsx`, replace YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, YOUR_PUBLIC_KEY
4. **GitHub username**: In `GitHub.jsx`, set `GITHUB_USERNAME = 'your-username'`

## 🌐 Deploy to Vercel
```bash
# Option 1 — CLI
npm i -g vercel && vercel --prod

# Option 2 — GitHub
# Push to GitHub → vercel.com/new → Import repo → Deploy
# Framework auto-detected as Vite. No env vars needed.
```

## 🎨 Design Tokens
- Background: #050508 | Surface: #0d0d14
- Accent Blue: #4f8eff | Accent Purple: #a855f7 | Accent Cyan: #00d4ff
- Font: Syne (display) + JetBrains Mono (code)

---
**Designed & Developed by Arpit Verma**
