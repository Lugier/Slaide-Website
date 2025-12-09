# Slaide Landing Page

Statische Landing Page für Slaide - Universal Advisory Intelligence.

## 🚀 Tech Stack

- **HTML5** - Semantisches Markup
- **CSS3** - Custom Styles + Tailwind CSS (via CDN)
- **JavaScript** - Vanilla JS für Interaktivität
- **Lucide Icons** - Beautiful Icons (via CDN)

## 📁 Projektstruktur

```
.
├── SRC/
│   └── index.html       # Haupt-HTML-Datei (alles in einer Datei)
├── vercel.json          # Vercel Deployment Config
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

- ✅ **Zero Build** - Keine Build-Zeit, direktes Deployment
- ✅ **CDN-basiert** - Tailwind CSS & Lucide Icons via CDN
- ✅ **Optimiert für Vercel** - Statisches Hosting, instant deployment
- ✅ **Responsive** - Mobile-first Design
- ✅ **Modern** - Dark Mode, Spotlight Effects, Smooth Animations

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

Alle Styles und Inhalte sind in `SRC/index.html`:
- **Tailwind Config**: Zeilen 12-56
- **Custom CSS**: Zeilen 58-113
- **JavaScript**: Zeilen 606-621

## 📄 Hinweise

- Die Seite nutzt CDN-Links für Tailwind CSS und Lucide Icons
- Keine Dependencies, kein Build-Prozess
- Perfekt für schnelles, einfaches Deployment
