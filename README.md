<div align="center">

# GHAZI MOUADDEB — PORTFOLIO

**Full-Stack Developer · Software Engineering Student · Tunisia**

[![React](https://img.shields.io/badge/React-19-61dafb?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8-646cff?style=flat-square&logo=vite&logoColor=white)](https://vite.dev)
[![GSAP](https://img.shields.io/badge/GSAP-3-88ce02?style=flat-square&logo=greensock&logoColor=black)](https://gsap.com)
[![License](https://img.shields.io/badge/license-MIT-f43f5e?style=flat-square)](./LICENSE)

</div>

---

A high-performance, interactive developer portfolio built with a **Neo-Brutalist** design aesthetic. Features an animated boot loader, smooth scroll, GSAP-powered scroll reveals, a live animated background canvas, synthesized UI micro-sounds, and a dual-language CV download page.

---

## 👤 About Me

I'm **Ghazi Mouaddeb**, a software engineering student at **Faculté des Sciences de Tunis (FST)**, specializing in full-stack web development, backend engineering, and relational database design.

- 🎓 Currently in the **Software Engineering Cycle** at FST (2025 – Present)
- 🏫 Completed **Integrated Preparatory Cycle (MPI)** at FST (2023 – 2025)
- 🏆 Graduated with **Mention Très Bien** (17.14/20) — Lycée Pilote de Gafsa (2023)
- 🌍 Based in **Tunis, Tunisia**
- 🗣 **Arabic** (Native) · **French** (Fluent) · **English** (Fluent) · **Spanish** (Proficient)

### 🔗 Links

| Platform | URL |
|----------|-----|
| GitHub | [github.com/Ghaziiw](https://github.com/Ghaziiw) |
| LinkedIn | [linkedin.com/in/ghazi-meddeb-436154306](https://linkedin.com/in/ghazi-meddeb-436154306/) |
| Email | ghazimdb@gmail.com |

---

## 🛠 Tech Stack

| Layer | Technologies |
|-------|-------------|
| **Languages** | C, C++, Java, Python, JavaScript, TypeScript, SQL, PL/SQL, Bash |
| **Frontend** | Angular, React, HTML/CSS, Tailwind CSS, Vite |
| **Backend** | Node.js, Express.js, RESTful APIs |
| **Databases** | PostgreSQL, Relational Modeling, Data Architecture |
| **Cloud** | Backblaze B2 Object Storage |
| **Engineering** | UML, OOP, System Design, Software Architecture |

---

## 📁 Featured Projects

### 🏙 CityConnect — Smart Community Platform (2026)
> `Angular` `Node.js` `Express.js` `PostgreSQL` `Backblaze B2`

A full-stack platform digitizing municipal services and public administrative tasks. Integrated a service marketplace for manual laborers (builders, plumbers, electricians) to connect with citizens.

### 🎨 ArtisanArt — E-Commerce Platform (2025)
> `Angular` `Node.js` `Express.js` `PostgreSQL`

A platform designed to help local Tunisian artisans market and sell handmade products online. Features product management, user authentication, and a RESTful API backend with relational database design.

### 🏨 Robinson — Hotel Management System (2025)
> `Java` `OOP` `Swing`

A desktop application for hotel room reservations, client billing records, and status tracking. Built with strict object-oriented design principles and modular software architecture.

---

## ✨ Portfolio Features

- ⚡ **Boot Loader** — Terminal-style loading sequence with animated progress counter
- 🎨 **Neo-Brutalist Design** — High-contrast dark theme with electric accent colors
- 🖼 **Background Canvas** — Live-animated grid with floating code glyphs
- 🎵 **Micro-sounds** — Synthesized UI sounds via Web Audio API (tick, whoosh, chime)
- 🔤 **Text Scramble** — Matrix-style scramble effect on hover
- 📜 **Smooth Scroll** — Lenis smooth scrolling with custom easing
- 🎞 **GSAP Animations** — Scroll-triggered reveals, hero character entrances
- 📄 **Dual CV Download** — English and French PDF versions
- 📱 **Responsive** — Works across all screen sizes
- 🔍 **SEO Ready** — Meta tags, Open Graph, semantic HTML

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm v9 or higher

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Ghaziiw/portfolio.git

# 2. Navigate into the project
cd portfolio

# 3. Install dependencies
npm install
```

### Development

```bash
# Start the local dev server with hot reload
npm run dev
```

Then open **http://localhost:5173** in your browser.

### Build for Production

```bash
# Compile and minify for production
npm run build
```

The output will be in the `dist/` folder, ready to deploy.

### Preview Production Build

```bash
# Serve the production build locally
npm run preview
```

---

## 📂 Project Structure

```
portfolio/
├── public/
│   ├── favicon.svg           # Custom SVG favicon
│   └── assets/
│       ├── cv-en.pdf         # English CV (downloadable)
│       └── cv-fr.pdf         # French CV (downloadable)
├── src/
│   ├── components/
│   │   ├── BackgroundCanvas.jsx  # Animated grid canvas
│   │   ├── Loader.jsx            # Boot sequence screen
│   │   └── Navbar.jsx            # Fixed navigation bar
│   ├── pages/
│   │   ├── Home.jsx              # Main landing page
│   │   ├── Works.jsx             # Projects showcase
│   │   ├── Resume.jsx            # CV & resume page
│   │   └── NotFound.jsx          # 404 page
│   ├── utils/
│   │   ├── audio.js              # Web Audio API synthesizer
│   │   └── textScramble.js       # Matrix text effect
│   ├── App.jsx                   # App root + routing
│   ├── index.css                 # Global design system
│   └── main.jsx                  # Entry point
├── index.html                    # HTML shell + SEO meta
├── vite.config.js                # Vite configuration
└── package.json
```

---

## 🚢 Deployment

This site can be deployed to any static hosting platform:

### Vercel (Recommended)
```bash
npm i -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Upload the dist/ folder to Netlify, or connect the repo via Netlify UI
```

### GitHub Pages
```bash
npm install --save-dev gh-pages
# Add to package.json scripts: "deploy": "gh-pages -d dist"
npm run build && npm run deploy
```

---

## 📝 License

This project is open source and available under the [MIT License](./LICENSE).

---

<div align="center">

Made with ⚡ by **Ghazi Mouaddeb** — Tunis, Tunisia · 2026

</div>
