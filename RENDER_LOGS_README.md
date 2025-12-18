# Render Logs Abruf-Skript

Skript zum Abrufen von Logs von Render-Servern.

## Installation

Keine zusätzlichen Dependencies nötig (verwendet nur Python Standard-Bibliothek + requests).

Falls `requests` nicht installiert ist:
```bash
pip install requests
```

## Verwendung

### Option 1: Python-Skript

```bash
# Services auflisten
python get_render_logs.py

# Logs für einen bestimmten Service abrufen
python get_render_logs.py srv-cr8p79ij1k6c73f6h4dg

# Mit Umgebungsvariable
export RENDER_API_KEY="rnd_A0kJGelmOe0RBte7pgIQtlA68GbZ"
export RENDER_SERVICE_ID="srv-cr8p79ij1k6c73f6h4dg"
python get_render_logs.py
```

### Option 2: Shell-Skript (Linux/Mac)

```bash
# Services auflisten
./get_render_logs.sh

# Logs für einen bestimmten Service abrufen
./get_render_logs.sh srv-cr8p79ij1k6c73f6h4dg

# Mit Umgebungsvariable
export RENDER_API_KEY="rnd_A0kJGelmOe0RBte7pgIQtlA68GbZ"
export RENDER_SERVICE_ID="srv-cr8p79ij1k6c73f6h4dg"
./get_render_logs.sh
```

### Option 3: Direkt mit curl

```bash
export RENDER_API_KEY="rnd_A0kJGelmOe0RBte7pgIQtlA68GbZ"

# Services auflisten
curl -H "Authorization: Bearer $RENDER_API_KEY" \
     -H "Accept: application/json" \
     https://api.render.com/v1/services

# Logs abrufen
curl -H "Authorization: Bearer $RENDER_API_KEY" \
     -H "Accept: application/json" \
     "https://api.render.com/v1/logs?resource=srv-cr8p79ij1k6c73f6h4dg&limit=100"
```

## Verfügbare Services

Das Skript listet automatisch alle verfügbaren Services auf, wenn keine Service-ID angegeben wird.

## Features

- ✅ Automatische Service-Auflistung
- ✅ Farbige Log-Ausgabe (nach Level)
- ✅ Pagination-Support (Cursor)
- ✅ Windows-kompatibel (keine Emojis)
- ✅ Fehlerbehandlung

## API Key

Der API Key ist standardmäßig im Skript hinterlegt, kann aber auch über die Umgebungsvariable `RENDER_API_KEY` gesetzt werden.


