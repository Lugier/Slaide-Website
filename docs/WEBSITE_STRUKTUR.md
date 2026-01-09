# 🌐 Slaide Website - Struktur & Übersicht

## 📍 Website ansehen

Die Website läuft auf: **http://localhost:3000**

---

## 🏗️ Seitenstruktur

### 1. **Navigation** (Fixed Header)
- Logo: Slaide mit blauem Quadrat
- Desktop Navigation:
  - Warum Slaide? → Scroll zu #benefits
  - ROI → Scroll zu #pricing
  - Technologie → Scroll zu #technology
- Buttons:
  - "Creator Beta" (Link zu /creator)
  - "Loslegen" (CTA Button)
- Mobile Menu: Hamburger Icon öffnet Dropdown-Menü

---

### 2. **Hero Section** (`#hero`)
**Position:** Oben, direkt nach Navigation

**Inhalt:**
- **Headline:** "Zero-Defect Reporting." (groß, fett)
- **Subheadline:** Beschreibung der Konsistenz-Architektur
- **CTA Button:** "Review Starten" (scrollt zu #demo)
- **Social Proof:** "By Top Tier consultants" mit Avataren (MB, BC, RB)

**Demo-App-Window:**
- **Linke Seite (70%):** Slide-Vorschau
  - macOS Window Controls (rot, gelb, grün)
  - Dateiname: "Project Delta_Final_v3.pptx"
  - Status: "KI-Prüfung aktiv" (grün, animiert)
  - Slide-Inhalt:
    - Header: "Projekt Delta" + "Streng vertraulich" Badge
    - Titel: "Starke EBITDA-Expansion durch 'Alpha'-Effizienzprogramm"
    - Text-Spalte: Zusammenfassung + Bullet Points
    - Chart-Spalte: Umsatzentwicklung mit 3 Balken (2022, 2023, 2024)
    - **Fehler-Highlight:** Text zeigt "11,8 Mio. €" aber Chart zeigt "11,5" (rote Verbindungslinie)
    - Footer: Projekt-Info + Foliennummer

- **Rechte Seite (30%):** Prüfbericht Sidebar
  - Header: "Prüfbericht" + "3 Probleme gefunden" (rot, animiert)
  - **3 Fehler-Karten:**
    1. **Logikfehler** (Rot, Hoch): Widerspruch Text (11.8) vs. Chart (11.5)
    2. **Summenfehler** (Gelb, Hoch): Folie 32 (12.1) vs. Zusammenfassung (11.8)
    3. **Namensfehler** (Gelb, Mittel): Header "Projekt Delta" vs. Fußnote "Projekt Gamma"
  - Footer: "Live-Überwachung" Status

**Animationen:**
- Scan-Linie bewegt sich über den Slide
- SVG-Verbindungslinie zwischen Text und Chart (rot, gestrichelt)

---

### 3. **Benefits Section** (`#benefits`)
**Position:** Nach Hero Section

**Layout:** 2 Spalten (Desktop)

**Linke Spalte:**
- **Headline:** "Fehler kosten Vertrauen. Wir eliminieren sie, bevor sie ankommen."
- **Beschreibung:** Text über High-Stakes-Dokumente
- **3 Feature-Cards:**
  1. 🧠 **Kontextuelle Logikprüfung** (Blau)
  2. 🧮 **Numerische Integrität** (Indigo)
  3. ✍️ **Linguistische Präzision** (Grün)

**Rechte Spalte (Sticky):**
- **Live-Erkennungsfeed** (dunkler Hintergrund)
  - 3 Feed-Items mit Fehlern (rot, gelb, blau)
  - Statistik-Box unten:
    - "312 Folien gescannt"
    - "23 Kritische Fehler"
    - Progress Bar (92%)

---

### 4. **Pricing/ROI Section** (`#pricing`)
**Position:** Nach Benefits Section

**Layout:** 2 Karten nebeneinander

**Linke Karte (Status Quo):**
- Titel: "Das Asset (Status Quo) - Premium-Folie"
- Kostenaufstellung:
  - Recherche & Strategie: ≈ 120 €
  - Storytelling & Design: ≈ 100 €
  - Prüfschleifen: ≈ 80 €
- **Gesamt:** ~300 € pro Slide
- **Warnung:** "Risiko: Fehlerquote ~3-5%"

**Rechte Karte (Slaide - Highlighted):**
- Titel: "Die Absicherung (Review) - Zero-Defect Check"
- **3 Preis-Tiers:**
  1. Pay as you go: **2,39 €** pro Slide
  2. Ab 500 Slides/Monat: **1,99 €** pro Slide (BELIEBT Badge)
  3. Ab 4.500 Slides/Monat: **1,59 €** pro Slide
- **CTA Button:** "Jetzt Absichern"

**Unten:** Enterprise Info (VLA für 10.000+ Slides)

---

### 5. **Technology Section** (`#technology`)
**Position:** Nach Pricing Section

**Design:** Dunkler Hintergrund (slate-900) mit blauem Glow

**Inhalt:**
- **Headline:** "Multimodale Inferenz."
- **Beschreibung:** Wie Fehler gefunden werden
- **3 Tech-Cards:**
  1. 🔍 **Visuelle Normalisierung** (Dual-Resolution Rendering)
  2. 🔗 **Constraint-Propagation** (Wissens-Graph)
  3. 🧮 **Numerische Validierung** (Mathematische Verifizierung)

---

### 6. **Creator & FAQ Section** (`#creator`)
**Position:** Nach Technology Section

**Layout:** 2 Spalten

**Linke Spalte (Creator Teaser):**
- **Badge:** "Beta-Zugang"
- **Headline:** "Der autonome AI-Analyst für Consulting."
- **Beschreibung:** Creator generiert Präsentationen automatisch
- **3 Features:**
  - ✅ 3 Minuten 20 Sekunden pro Folie (98% Zeitersparnis)
  - ✅ Datenfusion aus 3 Quellen
  - ✅ Code-gesteuerte Finanzen
- **CTA Button:** "Creator Beta testen" (Link zu /creator)

**Rechte Spalte (FAQ):**
- **Headline:** "Häufige Fragen zu Review"
- **6 FAQ-Items** (Accordion):
  1. Was ist Review?
  2. Wie funktioniert die Fehlerprüfung?
  3. Welche Dateiformate werden unterstützt?
  4. Wie sicher sind meine Daten? (mit Sicherheits-Badges)
  5. Was kostet Review?
  6. Kann ich Review in meinen Workflow integrieren?

---

### 7. **Footer**
**Position:** Ganz unten

**Inhalt:**
- Logo: Slaide
- Links: Datenschutz | Impressum | AGB
- Standort: "Frankfurt am Main"

---

## 🎨 Design-Features

### Farben:
- **Primary:** Slate-900 (dunkel)
- **Accent:** Blue-600 (blau)
- **Fehler:** Red-500 (rot), Amber-500 (gelb)
- **Erfolg:** Emerald-500 (grün)

### Animationen:
- ✅ Scroll-Triggered Reveal (Elemente erscheinen beim Scrollen)
- ✅ Hover-Effekte (Glow, Scale, Lift)
- ✅ Scan-Linie im Demo-Window
- ✅ SVG-Verbindungslinie (dynamisch berechnet)
- ✅ FAQ Accordion (Smooth Expand/Collapse)
- ✅ Scroll Progress Bar (oben)
- ✅ Back-to-Top Button (unten rechts, erscheint nach 400px scroll)

### Responsive:
- ✅ Mobile Menu (unter 768px)
- ✅ Responsive Grids (1 Spalte auf Mobile)
- ✅ Touch-optimierte Buttons (min. 44x44px)

---

## 🔗 Navigation & Links

### Anchor Links (Smooth Scroll):
- `#benefits` → Benefits Section
- `#pricing` → Pricing Section
- `#technology` → Technology Section
- `#creator` → Creator & FAQ Section
- `#demo` → Demo-App-Window in Hero

### Externe Links:
- `/creator` → Creator Beta Seite (noch nicht erstellt)
- `/datenschutz` → Datenschutz (noch nicht erstellt)
- `/impressum` → Impressum (noch nicht erstellt)
- `/agb` → AGB (noch nicht erstellt)

---

## 📱 Mobile Ansicht

- Navigation: Hamburger Menu statt Desktop-Navigation
- Hero: Vollbreite Buttons
- Demo-Window: Scrollbar für Sidebar
- Sections: 1 Spalte statt 2 Spalten
- Typography: Kleinere Schriftgrößen

---

## 🚀 Interaktivität

### Client-Side Features:
1. **Scroll Progress Bar** (oben, zeigt Scroll-Fortschritt)
2. **Reveal Animations** (Elemente erscheinen beim Scrollen)
3. **Mobile Menu Toggle** (öffnet/schließt Navigation)
4. **FAQ Accordion** (klickbar, öffnet/schließt Antworten)
5. **Back-to-Top Button** (erscheint nach 400px, scrollt nach oben)
6. **Smooth Scroll** (für Anchor Links)
7. **SVG Connection Line** (dynamisch berechnet zwischen Text und Chart)

---

## 📂 Dateistruktur

```
app/
├── layout.tsx          # Root Layout (Metadata, SEO, Structured Data)
├── page.tsx            # Hauptseite (alle Sections)
└── globals.css         # Globale Styles

components/
├── navigation.tsx      # Header + Mobile Menu
├── hero-section.tsx   # Hero + Demo-App-Window
├── benefits-section.tsx
├── pricing-section.tsx
├── technology-section.tsx
├── creator-faq-section.tsx
└── footer.tsx

public/
└── favicon.*           # Favicons
```

---

## 🎯 Wichtige IDs & Klassen

### Section IDs:
- `#hero` - Hero Section
- `#demo` - Demo-App-Window
- `#benefits` - Benefits Section
- `#pricing` - Pricing Section
- `#technology` - Technology Section
- `#creator` - Creator & FAQ Section

### Wichtige Klassen:
- `.reveal` - Scroll-Animation (erscheint beim Scrollen)
- `.scroll-reveal` - Card-Animation
- `.hover-glow` - Hover-Effekt mit Glow
- `.hover-lift` - Hover-Effekt mit Lift
- `.tech-dot-bg` - Punktiertes Hintergrund-Muster
- `.app-window` - Demo-App-Container
- `.scan-line` - Animierte Scan-Linie
- `.faq-item` - FAQ Accordion Item

---

## ✅ Checkliste zum Testen

- [ ] Navigation funktioniert (Desktop & Mobile)
- [ ] Smooth Scroll zu Sections
- [ ] Demo-App-Window zeigt Fehler korrekt
- [ ] SVG-Verbindungslinie ist sichtbar
- [ ] FAQ Accordion öffnet/schließt
- [ ] Back-to-Top Button erscheint nach Scroll
- [ ] Scroll Progress Bar funktioniert
- [ ] Mobile Menu öffnet/schließt
- [ ] Alle Hover-Effekte funktionieren
- [ ] Responsive Design auf Mobile

---

**Viel Spaß beim Ansehen! 🎉**
