# Slaide Landing Page

Statische Landing Page für Slaide - Zero-Defect Reporting für High-Stakes Consulting.

## 🚀 Tech Stack

* **HTML5** - Semantisches Markup
* **CSS3** - Custom Styles + Tailwind CSS (via CDN)
* **JavaScript** - Vanilla JS für Interaktivität
* **Lucide Icons** - Beautiful Icons (via CDN)

## 📁 Projektstruktur

```
.
├── SRC/
│   ├── index.html       # Haupt-Landing-Page
│   ├── Creator.html     # Creator Beta Seite
│   ├── agb.html         # AGB
│   ├── datenschutz.html # Datenschutz
│   └── impressum.html   # Impressum
├── vercel.json          # Vercel Deployment Config
├── robots.txt           # SEO Robots
├── sitemap.xml          # SEO Sitemap
└── README.md            # Diese Datei
```

## 🚢 Deployment auf Vercel

### Option 1: Via Vercel CLI (Empfohlen)

1. Installiere Vercel CLI:
```bash
npm i -g vercel
```

2. Login bei Vercel:
```bash
vercel login
```

3. Deploye das Projekt:
```bash
vercel
```

4. Für Production:
```bash
vercel --prod
```

### Option 2: Via Vercel Dashboard

1. Gehe zu [vercel.com](https://vercel.com) und melde dich an
2. Klicke auf "Add New Project"
3. Verbinde dein Git-Repository (GitHub, GitLab, Bitbucket)
4. Vercel erkennt automatisch die Konfiguration und deployed die Seite

### Option 3: Drag & Drop

1. Gehe zu [vercel.com](https://vercel.com)
2. Ziehe den gesamten Projektordner in das Vercel Dashboard
3. Die Seite wird automatisch deployed

## ✨ Features

* ✅ **Zero Build** - Keine Build-Zeit, direktes Deployment
* ✅ **CDN-basiert** - Tailwind CSS & Lucide Icons via CDN
* ✅ **Optimiert für Vercel** - Statisches Hosting, instant deployment
* ✅ **Responsive** - Mobile-first Design
* ✅ **Modern** - Smooth Animations, Custom Cursor, Scroll Effects
* ✅ **SEO-optimiert** - Meta Tags, Structured Data, Sitemap

## 📝 Lokale Entwicklung

Öffne einfach `SRC/index.html` in deinem Browser. Keine Installation nötig!

Oder nutze einen lokalen Server:

```bash
# Python
python -m http.server 8000

# Node.js
npx serve SRC
```

## 🎨 Anpassungen

Alle Styles und Inhalte sind in den HTML-Dateien im `SRC/` Ordner:

* **Tailwind CSS**: Via CDN (Zeile 77 in index.html)
* **Custom CSS**: Im `<style>` Tag
* **JavaScript**: Im `<script>` Tag am Ende

## 📄 Hinweise

* Die Seite nutzt CDN-Links für Tailwind CSS und Lucide Icons
* Keine Dependencies, kein Build-Prozess
* Perfekt für schnelles, einfaches Deployment auf Vercel

## 🔗 Links

* Website: [slaide.de](https://slaide.de)
* Repository: [GitHub](https://github.com/Lugier/Slaide-Website)


