# 🚀 Slaide Website - Next.js TypeScript

Moderne, performante Website für Slaide Review & Creator, gebaut mit Next.js 14+ und TypeScript.

## 📁 Projektstruktur

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root Layout (Metadata, SEO)
│   ├── page.tsx           # Hauptseite
│   ├── creator/
│   │   └── page.tsx      # Creator Beta Seite
│   └── globals.css        # Globale Styles
│
├── components/            # React Komponenten
│   ├── layout/           # Layout-Komponenten
│   │   ├── navigation.tsx
│   │   └── footer.tsx
│   ├── sections/         # Page Sections
│   │   ├── hero-section.tsx
│   │   ├── benefits-section.tsx
│   │   ├── pricing-section.tsx
│   │   ├── technology-section.tsx
│   │   └── creator-faq-section.tsx
│   └── pages/            # Vollständige Seiten
│       └── creator-page.tsx
│
├── lib/                   # Utilities & Helpers
│   └── utils/
│
├── public/                # Statische Assets
│   ├── favicon.*
│   ├── robots.txt
│   └── sitemap.xml
│
└── docs/                  # Dokumentation
    ├── QUICK_START.md
    ├── WEBSITE_STRUKTUR.md
    ├── CREATOR_SEITE.md
    └── README_NEXTJS.md
```

## 🚀 Quick Start

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Öffne [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
npm run build
npm start
```

## 🎯 Features

- ✅ **Next.js 14+ App Router** mit TypeScript
- ✅ **Tailwind CSS** für Styling
- ✅ **Lucide React** für Icons
- ✅ **SEO optimiert** mit vollständigen Metadata
- ✅ **Responsive Design** mit Mobile Menu
- ✅ **Scroll-Animationen** und Interaktivität
- ✅ **FAQ Accordion** mit State Management
- ✅ **Back-to-Top Button**
- ✅ **Scroll Progress Bar**

## 📄 Seiten

- **/** - Hauptseite (Review Tool)
- **/creator** - Creator Beta Seite

## 🛠️ Technologien

- **Next.js 14.2+** - React Framework
- **TypeScript** - Type Safety
- **Tailwind CSS** - Utility-First CSS
- **Lucide React** - Icon Library

## 📚 Dokumentation

Siehe `docs/` Ordner für detaillierte Dokumentation:
- `QUICK_START.md` - Schnellstart-Anleitung
- `WEBSITE_STRUKTUR.md` - Detaillierte Struktur-Übersicht
- `CREATOR_SEITE.md` - Creator-Seite Dokumentation
- `README_NEXTJS.md` - Technische Details

## 🔧 Scripts

```bash
npm run dev      # Development Server
npm run build    # Production Build
npm run start    # Production Server
npm run lint     # ESLint
```

## 📝 Notizen

- Die Website wurde von statischer HTML-Version in Next.js migriert
- Alle Metadaten, SEO-Struktur und Structured Data wurden übernommen
- Client-side Interaktivität wurde in React Hooks umgewandelt
- Alle Animationen und Styles wurden beibehalten
