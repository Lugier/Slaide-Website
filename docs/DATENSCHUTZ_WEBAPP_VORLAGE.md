# Datenschutzerklärung für Web-App (app.slaide.de) - Vorlage

Diese Vorlage kann in der Web-App verwendet werden. Sie enthält Platzhalter für Web-App-spezifische Services.

## Wichtige Hinweise:

1. **Rechtlich korrekt:** Separate Datenschutzerklärungen für Website und Web-App sind rechtlich unbedenklich und oft sogar sinnvoll
2. **Vollständigkeit:** Die Web-App-Datenschutzerklärung sollte alle verwendeten Services abdecken
3. **Verweis:** Beide Datenschutzerklärungen können aufeinander verweisen

## Struktur:

Die Datenschutzerklärung sollte enthalten:

1. Verantwortlicher (gleicher wie Website)
2. Verweis auf Website-Datenschutzerklärung für gemeinsame Services
3. Web-App-spezifische Services:
   - Authentifizierung (z.B. Auth0, Clerk, NextAuth, etc.)
   - Datenbank (z.B. PostgreSQL, MongoDB, Supabase, etc.)
   - File Storage (z.B. AWS S3, Cloudflare R2, etc.)
   - KI-Services (z.B. OpenAI, Anthropic, etc.)
   - Payment Provider (z.B. Stripe, PayPal, etc.)
   - Analytics (falls andere als Vercel Analytics)
   - Error Tracking (z.B. Sentry, LogRocket, etc.)
   - Monitoring (z.B. Datadog, New Relic, etc.)
4. Datenverarbeitung in der Web-App:
   - Benutzerkonten
   - Hochgeladene Dokumente
   - Prüfungsergebnisse
   - Nutzungsdaten
5. Rechte der betroffenen Person (gleich wie Website)
6. Datensicherheit

## Beispiel-Text:

```
Diese Datenschutzerklärung gilt für die Nutzung unserer Web-Anwendung unter app.slaide.de.

Für die Nutzung unserer Website (www.slaide.de) gilt eine separate Datenschutzerklärung, 
die Sie unter https://www.slaide.de/datenschutz finden können.

[Web-App-spezifische Services hier einfügen]
```
