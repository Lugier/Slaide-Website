# Deployment Anleitung

## Git Setup & Push zu GitHub

Falls das Repository noch nicht initialisiert ist:

```bash
# Git initialisieren (falls noch nicht geschehen)
git init

# Remote Repository hinzufügen
git remote add origin https://github.com/Lugier/Slaide-Website.git

# Alle Dateien hinzufügen
git add .

# Commit erstellen
git commit -m "Initial commit: Slaide Landing Page optimiert für Vercel"

# Push zu GitHub (main branch)
git branch -M main
git push -u origin main
```

Falls das Repository bereits existiert:

```bash
# Status prüfen
git status

# Alle Änderungen hinzufügen
git add .

# Commit erstellen
git commit -m "Optimierung für Vercel Deployment"

# Push zu GitHub
git push
```

## Vercel Deployment

1. Gehe zu [vercel.com](https://vercel.com) und melde dich an
2. Klicke auf "Add New Project"
3. Wähle "Import Git Repository"
4. Wähle das Repository: `Lugier/Slaide-Website`
5. Vercel erkennt automatisch die `vercel.json` Konfiguration
6. Klicke auf "Deploy"

Die Website wird automatisch deployed und ist unter einer `.vercel.app` Domain erreichbar.

## Custom Domain (Optional)

1. Gehe zu Project Settings → Domains
2. Füge deine Domain hinzu (z.B. `slaide.de`)
3. Folge den DNS-Anweisungen von Vercel

## Wichtige Dateien

- `vercel.json` - Vercel Konfiguration (Rewrites, Headers, Caching)
- `SRC/` - Alle HTML-Dateien
- `robots.txt` - SEO Robots
- `sitemap.xml` - SEO Sitemap
- `.gitignore` - Git Ignore Regeln

