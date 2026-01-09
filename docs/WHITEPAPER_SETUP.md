# Whitepaper Request Setup

## Checkliste für funktionierendes Whitepaper-Request

### 1. Resend API Key einrichten

1. Gehe zu [resend.com](https://resend.com) und erstelle einen Account
2. Erstelle einen API Key
3. Füge den API Key zu `.env.local` hinzu:

```bash
RESEND_API_KEY=re_xxxxxxxxxxxxx
RESEND_FROM_EMAIL=Slaide <noreply@slaide.de>
```

**Wichtig:** 
- Die E-Mail-Adresse muss in Resend verifiziert sein
- Für Development kannst du `onboarding@resend.dev` verwenden (wird automatisch verifiziert)

### 2. PDF-Datei hinzufügen

1. Erstelle oder lade die PDF-Datei `security-whitepaper.pdf` hoch
2. Platziere sie im `public/` Ordner:

```bash
public/security-whitepaper.pdf
```

### 3. Server neu starten

Nach dem Hinzufügen der Umgebungsvariablen:

```bash
npm run dev
```

### 4. Testen

1. Öffne die Website
2. Klicke auf "Security Whitepaper anfordern"
3. Fülle das Formular aus
4. Prüfe, ob die E-Mail ankommt

## Troubleshooting

### Fehler: "Ungültige Antwort vom Server"

**Ursachen:**
- PDF-Datei fehlt → Siehe Punkt 2 oben
- RESEND_API_KEY fehlt oder ist ungültig → Siehe Punkt 1 oben
- Server wurde nicht neu gestartet → Siehe Punkt 3 oben

### Fehler: "Fehler beim Versenden der E-Mail"

**Ursachen:**
- RESEND_API_KEY ist ungültig
- RESEND_FROM_EMAIL ist nicht verifiziert
- Resend-Konto hat keine Credits mehr

### PDF-Datei fehlt (Development)

Für Development kannst du die API-Route so anpassen, dass sie ohne PDF funktioniert (nur für Tests!).
