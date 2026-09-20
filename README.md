# স্বপ্নবুনন — ShopnoBunon

> **We don't just dream. We weave.**
> Mess with the best, Rest like death.

The official website of **ShopnoBunon (স্বপ্নবুনন)** — a youth-driven creative and
self-development community for people who write, speak, create, learn, lead
and grow.

This is a modern, bilingual (বাংলা/English), fully responsive, content-driven
React + Vite + Tailwind CSS single-page application designed to be maintained
by non-developers through simple data files, and deployed automatically from
GitHub.

---

## ✨ Features

- Cinematic animated hero with a signature "weaving dreams" thread animation
- Bilingual interface (বাংলা ⇄ English) with a scalable translation system
- Light / Dark / System theme with persisted preference
- Fully content-driven: publications, events, team, gallery & videos all live
  in simple TypeScript data files under `src/data/`
- Editorial article reading experience with author profiles, related
  articles, tags, and social sharing
- Events with automatic "Upcoming / Past" detection
- Masonry gallery with filters + fullscreen lightbox
- Global `⌘K` / `Ctrl+K` search across articles, events and team members
- Apple-inspired micro-interactions, scroll reveals, and a subtle custom
  cursor (desktop only)
- Accessible: semantic HTML, keyboard navigation, focus states, and
  `prefers-reduced-motion` support
- SEO-friendly meta tags, `robots.txt` and `sitemap.xml`

## 🧱 Tech Stack

- [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev) (build tool)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/) for animation
- [React Router](https://reactrouter.com) (`HashRouter`, so it works on any
  static host — including plain GitHub Pages — without server rewrites)
- [Lucide](https://lucide.dev) icons

## 📁 Project Structure

```
shopnobunon/
├── public/
│   ├── images/            # brand, hero, and other static images
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/        # reusable UI building blocks
│   │   └── cards/
│   ├── context/           # Language & Theme React contexts
│   ├── data/               ← ✏️ MOST CONTENT LIVES HERE
│   │   ├── site.ts          (organization name, motto, mission, contact…)
│   │   ├── social.ts        (Facebook/Instagram/YouTube/LinkedIn URLs)
│   │   ├── navigation.ts    (navbar items)
│   │   ├── translations.ts  (all UI text, bn/en)
│   │   ├── content.ts       (values, "what we do", about content)
│   │   ├── team.ts          (team members)
│   │   ├── publications.ts  (articles/blog posts)
│   │   ├── events.ts        (events)
│   │   ├── gallery.ts       (gallery images)
│   │   ├── media.ts         (videos)
│   │   └── types.ts
│   ├── layouts/
│   ├── pages/              # one file per route
│   ├── utils/
│   ├── App.tsx              # routes are registered here
│   └── index.css            # theme tokens (colors/fonts), global styles
├── CONTENT_GUIDE.md        ← ✏️ read this to edit the site without coding
├── .env.example
└── README.md
```

See **[CONTENT_GUIDE.md](./CONTENT_GUIDE.md)** for a non-technical guide to
editing every part of this website.

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start the local dev server
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build locally
npm run preview
```

The production build outputs a single, self-contained `dist/index.html`
(styles and scripts are inlined) plus a `dist/images/...` folder for assets.

## 🌐 Deployment

This project deploys cleanly to any static host:

### Vercel / Netlify
1. Push this repository to GitHub.
2. Import the repo in [Vercel](https://vercel.com/new) or
   [Netlify](https://app.netlify.com/start).
3. Build command: `npm run build` — Output directory: `dist`.
4. Every push to your main branch redeploys automatically.

### GitHub Pages
1. Push this repository to GitHub.
2. Build locally (`npm run build`) and publish the `dist/` folder to a
   `gh-pages` branch (e.g. using the `gh-pages` npm package), or use a GitHub
   Actions workflow that runs `npm run build` and deploys `dist/`.
3. Because the app uses a hash-based router (`/#/about`, `/#/events`, …), no
   special server rewrite rules are required — it works out of the box on
   GitHub Pages.

## 🔐 Environment Variables

None are required to run this site. `.env.example` lists optional variables
for future integrations (a form backend, analytics, translation API). Never
commit a real `.env` file or secret keys to GitHub.

## 🗺️ Roadmap / Designed to Scale

The architecture intentionally keeps content separate from UI so the
following can be added later **without a rewrite**:

- Swap local data files for a headless CMS or database/API
- Member accounts & article submission system
- Event registration & payments
- Newsletter, podcast, digital magazine
- AI-assisted translation pipeline
- Notifications & a contributor dashboard

## 📄 License

© ShopnoBunon. All rights reserved. Update this section with your preferred
license (e.g. MIT for the codebase) if you plan to open-source the project.
