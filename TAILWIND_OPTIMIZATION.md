# Tailwind CSS Optimierung - Performance Boost

## Problem
Die aktuelle Seite nutzt das Tailwind CDN (`cdn.tailwindcss.com`), das:
- ~100KB+ JavaScript lädt
- CSS **live im Browser** generiert (langsam)
- First Contentful Paint verzögert

## Lösung: Tailwind CSS kompilieren

### Schritt 1: Tailwind CLI installieren

```bash
npm init -y
npm install -D tailwindcss
npx tailwindcss init
```

### Schritt 2: tailwind.config.js erstellen

Erstelle `tailwind.config.js` im Projekt-Root:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./SRC/**/*.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### Schritt 3: CSS Input-Datei erstellen

Erstelle `SRC/input.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Schritt 4: CSS kompilieren

```bash
npx tailwindcss -i ./SRC/input.css -o ./SRC/styles.css --minify
```

### Schritt 5: HTML aktualisieren

In allen HTML-Dateien (`SRC/index.html`, etc.):

**Entfernen:**
```html
<script src="https://cdn.tailwindcss.com"></script>
```

**Hinzufügen:**
```html
<link rel="stylesheet" href="/styles.css">
```

### Schritt 6: vercel.json aktualisieren

Füge einen Rewrite für `styles.css` hinzu:

```json
{
  "source": "/styles.css",
  "destination": "/SRC/styles.css"
}
```

## Ergebnis

- **Vorher:** ~100KB+ JavaScript, CSS wird live generiert
- **Nachher:** ~10-20KB komprimiertes CSS, sofort verfügbar
- **Performance-Gewinn:** 70-80% schnellerer First Contentful Paint

## Automatisierung (Optional)

Füge zu `package.json` hinzu:

```json
{
  "scripts": {
    "build:css": "tailwindcss -i ./SRC/input.css -o ./SRC/styles.css --minify",
    "watch:css": "tailwindcss -i ./SRC/input.css -o ./SRC/styles.css --watch --minify"
  }
}
```

Dann: `npm run build:css` vor jedem Commit.


