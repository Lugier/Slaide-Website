# GitHub Deployment Anleitung

## Schritt 1: GitHub Repository erstellen

1. Gehe zu [github.com](https://github.com) und melde dich an
2. Klicke auf "New" oder "New repository"
3. Repository-Name: z.B. `slaide-landing` oder `slaide-website`
4. **WICHTIG:** Lass es **LEER** (keine README, keine .gitignore, keine License)
5. Klicke auf "Create repository"

## Schritt 2: Repository zu GitHub pushen

Führe diese Befehle im Terminal aus (im Projektordner):

```bash
# Ersetze USERNAME und REPO-NAME mit deinen Werten
git remote add origin https://github.com/USERNAME/REPO-NAME.git
git branch -M main
git push -u origin main
```

**Beispiel:**
```bash
git remote add origin https://github.com/logiermann/slaide-landing.git
git branch -M main
git push -u origin main
```

## Schritt 3: Vercel mit GitHub verbinden

1. Gehe zu [vercel.com](https://vercel.com)
2. Klicke auf "Add New Project"
3. Wähle dein GitHub-Repository aus
4. Vercel erkennt automatisch die `vercel.json` Konfiguration
5. Klicke auf "Deploy"

**Fertig!** 🎉 

Die Seite wird automatisch bei jedem Push zu GitHub neu deployed.

