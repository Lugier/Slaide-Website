export const translations = {
    de: {
        nav: {
            solution: 'Lösung',
            platform: 'Plattform',
            benchmark: 'Benchmark',
            security: 'Sicherheit',
            pricing: 'Pricing',
            requestDemo: 'Demo anfragen',
            login: 'Login',
        },
        hero: {
            badge: 'Review by Slaide',
            headlinePart1: 'Perfektion.',
            headlinePart2: 'Ohne Kompromisse.',
            subline: 'Slaide prüft Ihre Dokumente auf Logik, Konsistenz, Sprache und Zahlenfehler – inkl. Cross-Slide-Verifikation. In Minuten statt Tagen.',
            ctaPrimary: 'Kostenlos testen',
            ctaSecondary: 'Demo buchen',
            trust: 'Vertraut von führenden Strategieberatungen und Kanzleien',
            badges: {
                input: 'PDF, PPTX & Word',
                security: 'DSGVO Konform',
                roiValue: 'Ø 532€ Ersparnis',
                roiSuffix: 'pro Dokument'
            }
        },
        coreCapabilities: {
            headline: 'Fehler zerstören Vertrauen.',
            subline: 'Review versteht den Kontext und findet den Widerspruch. Es validiert die Substanz Ihrer Dokumente auf allen Ebenen und sorgt für rechnerische Exaktheit, logische Stringenz und stilistische Sicherheit.',
            data: {
                title: 'Daten-Validierung',
                desc: 'Zahlen sind das Fundament Ihrer Glaubwürdigkeit. Review validiert jeden Datenpunkt, jedes Ergebnis und jeden Querverweis zwischen Tabellen, Charts und Fließtext seitenübergreifend. Damit Ihre Datenbasis über jeden Zweifel erhaben ist.',
                visual: {
                    module: 'Prüf-Modul: Daten',
                    error: 'Rechenfehler',
                    found: 'Im Text (S. 05)',
                    text: '"EBITDA-Marge ca. 14,2%"',
                    ai: 'AI-Nachrechnung (Werte aus S. 143)',
                    calc: '15,9 (EBITDA) / 114,8 (Umsatz)',
                }
            },
            logic: {
                title: 'Logik & Plausibilität',
                desc: 'Sichern Sie die inhaltliche Geschlossenheit. Review erkennt Widersprüche im Text sowie Diskrepanzen zwischen Charts und Aussagen. Egal ob auf Seite 5 oder 500 – Ihre Storyline bleibt widerspruchsfrei.',
                visual: {
                    module: 'Prüf-Modul: Logik',
                    error: 'Widerspruch',
                    textLabel: 'AUSSAGE',
                    textValue: '"Markführende Position"',
                    chartLabel: 'DATENBASIS',
                    chartValue: 'Marktanteil < 4%',
                    message: '> Aussage widerspricht Marktdaten',
                }
            },
            formal: {
                title: 'Formale Korrektheit',
                desc: 'Perfektionieren Sie Ihren Stil. Review prüft weit mehr als nur Syntax, Grammatik und Rechtschreibung. Es vereinfacht zudem komplexe Satzstrukturen und liefert klare Formulierungsvorschläge – für einen sprachlich makellosen Auftritt.',
                visual: {
                    module: 'Prüf-Modul: Stil',
                    error: 'Inkonsistenz',
                    guideline: 'Vorgabe (Glossar)',
                    term: '"Asset-Deal"',
                    found: 'Gefunden (Seite 14)',
                    wrongTerm: '"Asset Deal"',
                    message: 'Abweichende Schreibweise',
                }
            }
        },
        useCases: {
            headline: 'Für Teams, die sich keine Fehler leisten können.',
            subline: 'Review ist Ihre finale Instanz für kompromisslose Qualität. Sie schützt Ihre Reputation dort, wo Präzision die Währung Ihres Erfolgs ist.',
            consulting: {
                title: 'Unternehmensberatung',
                desc: 'Konsistenz von Kennzahlen und Storyline-Checks in Pitch-Decks und SteerCo-Unterlagen.',
                features: ['Cross-Slide Consistency', 'Action-Title Logik']
            },
            legal: {
                title: 'Legal',
                desc: 'Prüfung von Schriftsätzen und Gutachten auf formale Korrektheit, Referenzen und Logikbrüche.',
                features: ['Referenz-Checks', 'Definitions-Konsistenz']
            },
            pe: {
                title: 'Private Equity',
                desc: 'Validierung von Commercial Due Diligence Reports und Investment Memos auf Zahlenkonsistenz und Plausibilität.',
                features: ['Modell-Konsistenz', 'CAGR-Validierung']
            },
            banking: {
                title: 'Banking',
                desc: 'Prüfung von Finanzkennzahlen, Tabellen-Summen und Wachstumsraten.',
                features: ['Tabellen-Footing', 'CAGR-Validierung']
            },
            esg: {
                title: 'ESG',
                desc: 'Validierung von hunderten Kennzahlen, Definitionen und CO2-Aussagen über alle Seiten.',
                features: ['Einheiten-Prüfung', 'Daten-Lineage Tracking']
            },
            ma: {
                title: 'M&A',
                desc: 'Plausibilitätsprüfung von Information Memorandums (IM) und Teasern. Abgleich von Teaser und Full-Deck.',
                features: ['Teaser-Deck-Match', 'Valuation-Checks']
            }
        },
        platform: {
            badge: 'PLATTFORM',
            headline: 'Ein Cockpit für Qualität.',
            subline: 'Keine komplizierten Tools. Einfach Datei hochladen und präzise Ergebnisse erhalten.',
            features: {
                upload: { title: 'Drag & Drop', desc: 'PDF, PPTX oder DOCX' },
                analysis: { title: 'Deep Analysis', desc: 'Findet Fehler, die Menschen übersehen' },
                report: { title: 'Smart Report', desc: 'Strukturierte Liste aller Issues' }
            },
            tabs: {
                presentation: 'Präsentation',
                report: 'Report', // Keeping Report as it often stays Report in business German, or changed to Bericht? User said "Originalversion". "Report" is likely safe/used.
                contract: 'Vertrag'
            },
            ui: {
                findings: 'AUFFÄLLIGKEITEN',
                score: 'Qualitätsscore'
            },
            demo: {
                ui: {
                    critical: 'KRITISCH',
                    medium: 'MITTEL',
                    low: 'NIEDRIG', // Original was likely NIEDRIG/HINWEIS.
                    accept: 'Akzeptieren',
                    ignore: 'Ignorieren'
                },
                findings: {
                    slide: {
                        critical: { title: 'Inkonsistenz (Zahl)', desc: 'Text nennt 14,2%, Tabelle zeigt 13,8% für Q2 (errechnet aus 15,9/114,8).' },
                        medium1: { title: 'Formatierungsinkonsistenz', desc: 'Unterschiedliche Währungssymbole (€ vs. EUR) verwendet.' },
                        medium2: { title: 'Rundungsinkonsistenz', desc: 'Chart zeigt für Q2 den Wert 115,0, aber Tabelle zeigt 114,8 - Rundungsinkonsistenz.' },
                        low: { title: 'Formatierungsinkonsistenz', desc: 'Die Schriftgröße schwankt zwischen Executive Summary und Key Highlights.' }
                    },
                    report: {
                        critical1: { title: 'Logik-Widerspruch', desc: 'Text behauptet "konstant unterhalb Grenzwerte", aber Abb. 14 zeigt Überschreitung (3,2 mm/s).' },
                        critical2: { title: 'Widersprüchliche Ursachen', desc: 'Abschnitt 2.3 nennt Rotorunwucht, Abschnitt 4.2 nennt Labyrinthdichtungen als Hauptursache.' },
                        medium1: { title: 'Unvollständige Legende', desc: 'Legende in Abb. 14 fehlt Angabe zu Messbedingungen (z.B. RMS-Glättung).' },
                        medium2: { title: 'Ungewöhnlicher Verlauf', desc: 'Bei 100% Last 3,2 mm/s, bei 110% nur 2,2 mm/s. Rückgang ohne Erklärung.' },
                        low: { title: 'Fehlende Referenz', desc: 'Abschnitt 4.1 erwähnt DIN ISO 10816-5 ohne Quellenangabe.' }
                    },
                    contract: {
                        critical: { title: 'Widerspruch Laufzeit', desc: '§ 1.2 definiert 36 Monate, § 2.2 nennt 24 Monate. Kritischer Widerspruch.' },
                        medium1: { title: 'Begriffsinconsistenz', desc: 'Wechselnde Begriffe: "IT-Serviceleistungen", "Software-Lizenz", "SaaS-Dienstleistungen".' },
                        medium2: { title: 'Fehlende Anlage', desc: '§ 5.4 verweist auf "Anlage B", die im Dokument fehlt.' },
                        low: { title: 'Rechtschreibfehler', desc: '"Maximillanstraße" statt "Maximilianstraße".' }
                    }
                },
                mockups: {
                    slide: {
                        title: 'Finanzübersicht 2024',
                        subtitle: 'Folie 3 / 12',
                        confidential: 'Vertraulich',
                        execSummary: {
                            title: 'Executive Summary',
                            p1: 'Starkes Wachstum in Q3 trotz Marktvolatilität',
                            p2: 'EBITDA-Marge deutlich verbessert, sowie die operative Effizienz',
                            p3Part1: 'Kosteneinsparungen von 8,5 Mio.',
                            p3Part2: 'realisiert, aufgrund unserer Maßnahmen'
                        },
                        highlights: {
                            title: 'Key Highlights',
                            textPart1: 'Trotz volatilen Marktumfelds konnten wir durch Kosteneinsparungen die EBIT-Marge von Q2 auf',
                            textPart2: 'steigern und unsere operative Effizienz verbessern. Die strategischen Initiativen zeigen positive Wirkung und übertreffen unsere Erwartungen.'
                        },
                        chartTitle: 'Umsatzentwicklung',
                        financials: {
                            title: 'Finanzkennzahlen (in Mio.',
                            position: 'Position',
                            revenue: 'Umsatzerlöse',
                            ebit: 'EBIT',
                            margin: 'EBIT-Marge'
                        }
                    },
                    report: {
                        header: { title: 'Technische Revision T-402', chapter: 'Kapitel 4: Diagnostik' },
                        sec41: {
                            title: '4.1 Methodik der Schwingungsmessung',
                            textPart1: 'Die Erfassung der mechanischen Schwingungen erfolgte gemäß',
                            textPart2: 'an den Lagergehäusen der Führungslager L1 (Turbine) und L2 (Generator). Die Signalabtastung (10 kHz, 48h) erfasste transiente Zustände vollständig. Rohdaten wurden durch einen Tiefpassfilter (Cut-off 1 kHz) bereinigt.'
                        },
                        sec42: {
                            title: '4.2 Analyseergebnisse Lager L2 (Radial)',
                            p1Part1: 'Fokus der Analyse war das radiale Schwingungsverhalten des generatorseitigen Führungslagers (L2) bei 20% bis 110% Nennlast. Die Messreihen zeigen eine Stabilisierung nach',
                            p1Part2: '.',
                            p2: 'Der verwendete Alarmgrenzwert von 2,5 mm/s basiert auf den Vorgaben in Abschnitt 3.2 dieser Revision. Weitere Details zur Grenzwertbestimmung finden sich im Anhang A.',
                            quotePart1: '"Zusammenfassend ist festzustellen, dass die gemessenen Schwinggeschwindigkeiten (v_rms) über das gesamte Lastband',
                            quotePart2: 'konstant unterhalb des zulässigen Alarmgrenzwertes von 2,5 mm/s',
                            quotePart3: 'verblieben sind. Ein dauerhafter Betrieb ist uneingeschränkt zulässig."'
                        },
                        chart: { caption: 'Abb. 14: Schwinggeschwindigkeit v_rms (mm/s) vs. Generatorlast P/Pn', source: 'Datenquelle: VIB-L2, RMS-Glättung (t=500ms)' }
                    },
                    contract: {
                        parties: {
                            p1: 'Nordstern Industrie GmbH',
                            p2: 'CloudSolutions AG'
                        },
                        intro: 'Zwischen der Nordstern Industrie GmbH, nachfolgend "Auftraggeber" genannt, und der CloudSolutions AG, nachfolgend "Dienstleister" genannt, wird nachstehender Vertrag geschlossen.',
                        date: 'Berlin, den 15. März 2024',
                        sec1: {
                            title: '§ 1 Vertragsgegenstand',
                            p1: '1.1 Dieser Vertrag regelt die Erbringung von IT-Serviceleistungen durch den Dienstleister an den Auftraggeber.',
                            p2Part1: '1.2 Der Vertrag gilt für die Laufzeit von',
                            p2Part2: 'ab Vertragsbeginn.',
                            p3Part1: '1.3 Der',
                            p3Part2: 'Vertragsgegenstand',
                            p3Part3: 'wird als',
                            p3Part4: '"Software-Lizenz"',
                            p3Part5: 'definiert.'
                        },
                        sec2: {
                            title: '§ 2 Vertragsbeginn und Laufzeit',
                            p1: '2.1 Der Vertrag tritt mit Unterzeichnung durch beide Parteien in Kraft. Die Leistungserbringung beginnt spätestens 14 Werktage nach Vertragsbeginn.',
                            p2Part1: 'Die Vertragslaufzeit beträgt',
                            p2Part2: '24 Monate',
                            p2Part3: '. Eine ordentliche Kündigung ist frühestens 6 Monate vor Ablauf der Laufzeit möglich.'
                        },
                        sec3: {
                            title: '§ 3 Kündigung',
                            p1: 'Beide Parteien können den Vertrag mit einer Frist von 3 Monaten zum Ende eines Kalendermonats kündigen, sofern keine abweichende Regelung getroffen wurde.',
                            p2: 'Die Kündigungsfrist beträgt 30 Tage und beginnt mit Zugang der Kündigungserklärung beim Empfänger. Die Kündigung bedarf der Schriftform.'
                        },
                        sec4: {
                            title: '§ 4 Leistungsumfang',
                            p1Part1: '4.1 Der Dienstleister erbringt',
                            p1Part2: 'SaaS-Dienstleistungen',
                            p1Part3: 'gemäß den Spezifikationen in Anlage A.',
                        },
                        sec5: {
                            title: '§ 5 Vergütung',
                            p1Part1: '5.1 Die monatliche Grundvergütung beträgt 8.500,00 EUR. Details in',
                            p1Part2: 'Anlage B (Preismodell)',
                            p1Part3: '.'
                        }
                    }
                }
            },
        },
        howItWorks: {
            badge: 'ARCHITECTURE v2.0',
            headline: 'Analyse-Tiefe, die selbst Experten entgeht.',
            subline: 'Review nutzt eine mehrstufige neuronale Architektur, um den Inhalt Ihrer Dokumente semantisch tiefgründig zu durchdringen.',
            stages: {
                ingest: {
                    title: 'Multimodale Erfassung',
                    desc: 'Das System zerlegt PDFs in Text-, Vektor- und Bild-Layer. Ein vorgeschalteter KI-Screener filtert irrelevante Seiten (Deckblatt, Inhaltsverzeichnis, Abschnitt) sofort heraus, um effizient zu arbeiten.',
                    badge: 'STAGE 01 • INGEST & SCREEN'
                },
                core: {
                    title: 'Semantische Verifikation',
                    desc: 'Kern der Analyse. Eine hybride Architektur aus generativer KI und Deep-Learning-Modellen analysiert:',
                    badge: 'STAGE 02 • NEURAL CORE',
                    features: [
                        'Rechtsschreibung, Grammatik & Syntax',
                        'Mathematische Neuberechnung',
                        'Argumentationslogik',
                        'Querverweise',
                        'Plausibilität'
                    ]
                },
                synthesis: {
                    title: 'Strukturierter Report',
                    desc: 'Ergebnisse werden nicht als loser Text, sondern als strukturierte Issue-Liste ausgegeben. Priorisiert nach Schweregrad von Kritisch bis Niedrig, bereit für den direkten Fix im Originaldokument. Mit direktem PDF-Export der Ergebnisse.',
                    badge: 'STAGE 03 • SYNTHESIS'
                }
            },
            cta: {
                text: 'Erleben Sie die neuronale Architektur in Aktion',
                button: 'Kostenlose Demo buchen'
            }
        },
        comparison: {
            headline: 'Manuell vs. Review',
            subline: 'Wir haben Review gegen erfahrene Berater antreten lassen. Die Ergebnisse definieren einen neuen Standard für Ihre Qualitätssicherung.',
            note: 'Grundlage: Eine repräsentative Beispiel-Präsentation (20 Seiten, 36 Fehler).',
            speed: {
                title: 'Verarbeitungszeit',
                consultant: 'Erfahrene Berater (Ø)',
                improvement: '46x Schneller'
            },
            precision: {
                title: 'Fehlererkennung',
                consultant: 'Erfahrene Berater (Ø)',
                errors: 'Fehler',
                improvement: '+94% Präzision'
            },
            impact: {
                efficiency: { title: 'EFFIZIENZ', value: '-98% Zeitaufwand', desc: 'Eliminiert den Flaschenhals manueller Korrekturschleifen. Sofortige Ergebnisse statt stundenlanges Warten.' },
                consistency: { title: 'KONSISTENZ', value: 'Konstante Präzision', desc: 'Seite 1 wird genauso präzise und aufmerksam geprüft wie Seite 100 – ohne Ermüdungsfaktor.' },
                impact: { title: 'IMPACT', value: 'Board-Level Plausibilität', desc: 'Stellt sicher, dass jedes Dokument nicht nur fehlerfrei, sondern in sich schlüssig und plausibel ist.' }
            }
        },
        security: {
            headline: 'Sicherheit ohne Kompromisse.',
            subline: 'Ihre Daten sind Ihr wertvollstes Asset. Wir schützen sie mit Banken-Standard.',
            retention: { title: 'Zero-Retention', desc: 'Daten werden nach der Analyse sofort gelöscht. Kein Training mit Ihren Daten.' },
            hosting: { title: 'Deutsche Server', desc: 'Hosting ausschließlich in zertifizierten deutschen Rechenzentren (ISO 27001).' },
            training: { title: 'Kein KI-Training', desc: 'Ihre Dokumente werden niemals zum Training unserer Modelle verwendet.' },
            whitepaper: { cta: 'Sicherheits-Whitepaper lesen' },
            compliance: {
                title: 'Compliance & Zertifikate',
                gdpr: 'DSGVO Konform',
                avv: 'AVV verfügbar',
                security: 'Banken-Standard',
                iso: 'ISO 27001'
            }
        },
        pricing: {
            headline: 'Einfaches, transparentes Pricing.',
            subline: 'Keine versteckten Kosten. Volle Kostenkontrolle.',
            billing: {
                monthly: 'Monatlich',
                yearly: 'Jährlich',
                save: '20% sparen'
            },
            payPerUse: {
                title: 'Pay-per-Use',
                desc: 'Perfekt für einzelne Projekte.',
                price: '2,69€',
                suffix: 'pro Seite',
                features: [
                    'Voller Funktionsumfang',
                    'Alle Dateiformate',
                    'Unbegrenzte Nutzer',
                    'Team-Dashboard',
                    'Sofort startklar'
                ],
                cta: 'Jetzt starten'
            },
            teams: {
                badge: 'BELIEBT',
                title: 'Teams',
                desc: { bold: 'Ab 5 Nutzern.', text: 'Für professionelle Deal-Teams.' },
                price: { yearly: '59€', monthly: '69€' },
                suffix: 'pro Nutzer / Monat',
                features: [
                    'Alles in Pay-per-Use',
                    'Sammelrechnung',
                    'Admin-Portal',
                    'Priorisierter Support',
                    'Onboarding-Session'
                ],
                cta: 'Team einladen'
            },
            scale: {
                title: 'Scale',
                desc: { bold: 'Ab 50 Nutzern.', text: 'Für ganze Organisationen.' },
                price: { yearly: '49€', monthly: '59€' }, // Volume discount as per user feedback
                suffix: 'pro Nutzer / Monat',
                features: [
                    'Alles in Teams',
                    'Dedizierter CSM',
                    'SSO & Audit-Logs',
                    'Custom Vokabular',
                    'API-Zugriff'
                ],
                cta: 'Kontakt aufnehmen'
            },
            trust: {
                gdpr: 'DSGVO KONFORM',
                cancel: 'JEDERZEIT KÜNDBAR',
                setup: 'SCHNELLES SETUP'
            },
            contact: {
                question: 'Fragen zum Pricing?',
                cta: 'Sprechen Sie mit uns'
            }
        },
        roi: {
            headline: 'ROI, der sich sofort rechnet.',
            subline: 'Investieren Sie in Qualität, sparen Sie bei der Korrektur.',
            inputs: {
                title: 'Berechnungsgrundlage',
                docType: {
                    label: 'Dokumententyp',
                    presentation: 'Präsentation',
                    presentationTime: 'ca. 7 Min/Seite',
                    document: 'Dokument',
                    documentTime: 'ca. 12 Min/Seite'
                },
                pages: { label: 'Seiten pro Monat' },
                cta: 'Demo buchen'
            },
            results: {
                title: 'Ihr Einsparpotenzial',
                manual: 'Manuelle Prüfung',
                hours: 'Stunden',
                description: 'Basierend auf einem Stundensatz von',
                review: 'Mit Slaide Review',
                pages: 'Seiten',
                page: 'Seite',
                processingTime: 'Bearbeitungszeit',
                savings: 'Ersparnis pro Monat',
                costSavings: 'Kostenersparnis',
                timeSavings: 'Zeitersparnis'
            },
            cta: 'ROI Rechner'
        },
        footer: {
            copyright: 'Alle Rechte vorbehalten.',
            rights: 'Alle Rechte vorbehalten.',
            links: {
                platform: 'Plattform',
                privacy: 'Datenschutz',
                imprint: 'Impressum',
                terms: 'AGB'
            },
            product: 'Produkt',
            company: 'Unternehmen',
            legal: {
                imprint: 'Impressum',
                privacy: 'Datenschutz',
                terms: 'AGB'
            },
        }
    },
    en: {
        nav: {
            solution: 'Solution',
            platform: 'Platform',
            benchmark: 'Benchmark',
            security: 'Security',
            pricing: 'Pricing',
            requestDemo: 'Request Demo',
            login: 'Login',
        },
        hero: {
            badge: 'Review by Slaide',
            headlinePart1: 'Perfection.',
            headlinePart2: 'Without Compromise.',
            subline: 'Slaide checks your documents for logic, consistency, language, and numerical errors – including cross-slide verification. In minutes instead of days.',
            ctaPrimary: 'Try for free',
            ctaSecondary: 'Book Demo',
            trust: 'Trusted by leading strategy consultancies and law firms',
            badges: {
                input: 'PDF, PPTX & Word',
                security: 'GDPR Compliant',
                roiValue: 'Ø 532€ Savings',
                roiSuffix: 'per document'
            }
        },
        coreCapabilities: {
            headline: 'Errors destroy trust.',
            subline: 'Review understands context and finds contradictions. It validates the substance of your documents on all levels, ensuring mathematical precision, logical consistency, and stylistic confidence.',
            data: {
                title: 'Data Validation',
                desc: 'Numbers are the foundation of your credibility. Review validates every data point, result, and cross-reference between tables, charts, and body text across pages. Ensuring your data basis is beyond doubt.',
                visual: {
                    module: 'Verify_Module: Data',
                    error: 'Calculation Error',
                    found: 'In text (p. 05)',
                    text: '"EBITDA Margin approx. 14.2%"',
                    ai: 'AI-Recalculation (Values from p. 143)',
                    calc: '15.9 (EBITDA) / 114.8 (Revenue)',
                }
            },
            logic: {
                title: 'Logic & Plausibility',
                desc: 'Ensure content consistency. Review detects contradictions in text as well as discrepancies between charts and statements. Whether on page 5 or 500 – your storyline remains contradiction-free.',
                visual: {
                    module: 'Verify_Module: Logic',
                    error: 'Contradiction',
                    textLabel: 'STATEMENT',
                    textValue: '"Market Leading Position"',
                    chartLabel: 'DATA BASIS',
                    chartValue: 'Market Share < 4%',
                    message: '> Statement contradicts market data',
                }
            },
            formal: {
                title: 'Formal Correctness',
                desc: 'Perfect your style. Review checks far more than just syntax, grammar, and spelling. It also simplifies complex sentence structures and provides clear phrasing suggestions – for a linguistically flawless appearance.',
                visual: {
                    module: 'Verify_Module: Style',
                    error: 'Inconsistency',
                    guideline: 'Guideline (Glossary)',
                    term: '"Asset-Deal"',
                    found: 'Found (Page 14)',
                    wrongTerm: '"Asset Deal"',
                    message: 'Deviating spelling',
                }
            }
        },
        useCases: {
            headline: 'For teams that cannot afford mistakes.',
            subline: 'Review is your final line of defense for uncompromising quality. It protects your reputation where precision is the currency of your success.',
            consulting: {
                title: 'Management Consulting',
                desc: 'Consistency of metrics and storyline checks in pitch decks and SteerCo documents.',
                features: ['Cross-Slide Consistency', 'Action-Title Logic']
            },
            legal: {
                title: 'Legal',
                desc: 'Reviewing briefs and expert opinions for formal correctness, references, and logical breaks.',
                features: ['Reference Checks', 'Definition Consistency']
            },
            pe: {
                title: 'Private Equity',
                desc: 'Validation of Commercial Due Diligence reports and Investment Memos for numerical consistency and plausibility.',
                features: ['Model Consistency', 'CAGR Validation']
            },
            banking: {
                title: 'Banking',
                desc: 'Checking financial metrics, table totals, and growth rates.',
                features: ['Table Footing', 'CAGR Validation']
            },
            esg: {
                title: 'ESG',
                desc: 'Validation of hundreds of metrics, definitions, and CO2 statements across all pages.',
                features: ['Unit Checks', 'Data Lineage Tracking']
            },
            ma: {
                title: 'M&A',
                desc: 'Plausibility check of Information Memorandums (IM) and Teasers. Reconciliation of Teaser and Full-Deck.',
                features: ['Teaser-Deck Match', 'Valuation Checks']
            }
        },
        platform: {
            badge: 'PLATFORM',
            headline: 'One interface for absolute certainty.',
            subline: 'No complicated tools. Simply upload file and get precise results.',
            features: {
                upload: { title: 'Drag & Drop', desc: 'PDF, PPTX or DOCX' },
                analysis: { title: 'Deep Analysis', desc: 'Finds errors humans miss' },
                report: { title: 'Smart Report', desc: 'Structured list of all issues' }
            },
            tabs: {
                presentation: 'Presentation',
                report: 'Report',
                contract: 'Contract'
            },
            ui: {
                findings: 'FINDINGS',
                score: 'Quality Score'
            },
            demo: {
                ui: {
                    critical: 'CRITICAL',
                    medium: 'MEDIUM',
                    low: 'LOW',
                    accept: 'Accept',
                    ignore: 'Ignore'
                },
                findings: {
                    slide: {
                        critical: { title: 'Inconsistency (Number)', desc: 'Text states 14.2%, table shows 13.8% for Q2 (calculated from 15.9/114.8).' },
                        medium1: { title: 'Formatting Inconsistency', desc: 'Different currency symbols (€ vs. EUR) used.' },
                        medium2: { title: 'Rounding Inconsistency', desc: 'Chart shows 115.0 for Q2, but table shows 114.8 - rounding inconsistency.' },
                        low: { title: 'Formatting Inconsistency', desc: 'Font size varies between Executive Summary and Key Highlights.' }
                    },
                    report: {
                        critical1: { title: 'Logic Contradiction', desc: 'Text claims "consistently below limits", but Fig. 14 shows violation (3.2 mm/s).' },
                        critical2: { title: 'Contradictory Causes', desc: 'Section 2.3 cites rotor imbalance, Section 4.2 cites labyrinth seals as main cause.' },
                        medium1: { title: 'Incomplete Legend', desc: 'Legend in Fig. 14 missing measurement conditions (e.g. RMS smoothing).' },
                        medium2: { title: 'Unusual Trend', desc: 'At 100% load 3.2 mm/s, at 110% only 2.2 mm/s. Drop without explanation.' },
                        low: { title: 'Missing Reference', desc: 'Section 4.1 mentions DIN ISO 10816-5 without citation.' }
                    },
                    contract: {
                        critical: { title: 'Duration Contradiction', desc: '§ 1.2 defines 36 months, § 2.2 states 24 months. Critical contradiction.' },
                        medium1: { title: 'Term Inconsistency', desc: 'Inconsistent terms: "IT Services", "Software License", "SaaS Services".' },
                        medium2: { title: 'Missing Appendix', desc: '§ 5.4 refers to "Appendix B", which is missing.' },
                        low: { title: 'Spelling Error', desc: '"Maximillanstraße" instead of "Maximilianstraße".' }
                    }
                },
                mockups: {
                    slide: {
                        title: 'Financial Overview 2024',
                        subtitle: 'Slide 3 / 12',
                        confidential: 'Confidential',
                        execSummary: {
                            title: 'Executive Summary',
                            p1: 'Strong growth in Q3 despite market volatility',
                            p2: 'EBITDA margin significantly improved, as well as operational efficiency',
                            p3Part1: 'Cost savings of 8.5 million',
                            p3Part2: 'realized, due to our measures'
                        },
                        highlights: {
                            title: 'Key Highlights',
                            textPart1: 'Despite volatile market environment, cost savings increased Q2 EBIT margin to',
                            textPart2: 'and improved our operational efficiency. Strategic initiatives show positive impact and exceed expectations.'
                        },
                        chartTitle: 'Revenue Development',
                        financials: {
                            title: 'Financial Metrics (in Mio.',
                            position: 'Position',
                            revenue: 'Revenue',
                            ebit: 'EBIT',
                            margin: 'EBIT Margin'
                        }
                    },
                    report: {
                        header: { title: 'Technical Revision T-402', chapter: 'Chapter 4: Diagnostics' },
                        sec41: {
                            title: '4.1 Methodology of Vibration Measurement',
                            textPart1: 'The recording of mechanical vibrations was performed according to',
                            textPart2: 'at the bearing housings of the guide bearings L1 (Turbine) and L2 (Generator). The signal sampling (10 kHz, 48h) captured transient states completely. Raw data was cleaned by a low-pass filter (Cut-off 1 kHz).'
                        },
                        sec42: {
                            title: '4.2 Analysis Results Bearing L2 (Radial)',
                            p1Part1: 'Focus of analysis was the radial vibration behavior of the generator-side guide bearing (L2) at 20% to 110% nominal load. Measurement series show stabilization after',
                            p1Part2: '.',
                            p2: 'The used alarm limit of 2.5 mm/s is based on specifications in Section 3.2 of this revision. Further details on limit determination found in Appendix A.',
                            quotePart1: '"In summary, it can be stated that measured vibration velocities (v_rms) across the entire load band',
                            quotePart2: 'remained constantly below the permissible alarm limit of 2.5 mm/s',
                            quotePart3: '. Permanent operation is unrestricted allowed."'
                        },
                        chart: { caption: 'Fig. 14: Vibration velocity v_rms (mm/s) vs. Generator Load P/Pn', source: 'Source: VIB-L2, RMS Smoothing (t=500ms)' }
                    },
                    contract: {
                        parties: {
                            p1: 'Nordstern Industrie GmbH',
                            p2: 'CloudSolutions AG'
                        },
                        intro: 'Between Nordstern Industrie GmbH, hereinafter "Client", and CloudSolutions AG, hereinafter "Provider", the following contract is concluded.',
                        date: 'Berlin, March 15, 2024',
                        sec1: {
                            title: '§ 1 Subject Matter',
                            p1: '1.1 This contract regulates the provision of IT services by the Provider to the Client.',
                            p2Part1: '1.2 The contract applies for a term of',
                            p2Part2: 'from start of contract.',
                            p3Part1: '1.3 The',
                            p3Part2: 'Subject Matter',
                            p3Part3: 'is defined as',
                            p3Part4: '"Software License"',
                            p3Part5: '.'
                        },
                        sec2: {
                            title: '§ 2 Commencement and Term',
                            p1: '2.1 The contract enters into force upon signature by both parties. Service provision begins at the latest 14 working days after contract start.',
                            p2Part1: 'The contract term is',
                            p2Part2: '24 months',
                            p2Part3: '. Ordinary termination is possible at the earliest 6 months before the end of the term.'
                        },
                        sec3: {
                            title: '§ 3 Termination',
                            p1: 'Both parties may terminate the contract with a notice period of 3 months to the end of a calendar month, unless otherwise agreed.',
                            p2: 'The notice period is 30 days and begins with receipt of the notice of termination by the recipient. Termination must be in writing.'
                        },
                        sec4: {
                            title: '§ 4 Scope of Services',
                            p1Part1: '4.1 The Provider provides',
                            p1Part2: 'SaaS Services',
                            p1Part3: 'according to specifications in Appendix A.',
                        },
                        sec5: {
                            title: '§ 5 Remuneration',
                            p1Part1: '5.1 The monthly basic fee is 8,500.00 EUR. Details in',
                            p1Part2: 'Appendix B (Pricing Model)',
                            p1Part3: '.'
                        }
                    }
                }
            }
        },
        howItWorks: {
            badge: 'ARCHITECTURE v2.0',
            headline: 'Analysis depth that even experts miss.',
            subline: 'Review uses a multi-stage neural architecture to penetrate the content of your documents deeply and semantically.',
            stages: {
                ingest: {
                    title: 'Multimodal Ingest',
                    desc: 'The system decomposes PDFs into text, vector, and image layers. An upstream AI screener filters out irrelevant pages (cover, TOC, dividers) immediately to work efficiently.',
                    badge: 'STAGE 01 • INGEST & SCREEN'
                },
                core: {
                    title: 'Semantic Verification',
                    desc: 'Core of the analysis. A hybrid architecture of generative AI and deep learning models analyzes:',
                    badge: 'STAGE 02 • NEURAL CORE',
                    features: [
                        'Spelling, Grammar & Syntax',
                        'Mathematical Recalculation',
                        'Argumentation Logic',
                        'Cross-References',
                        'Plausibility'
                    ]
                },
                synthesis: {
                    title: 'Structured Report',
                    desc: 'Results are output not as loose text but as a structured issue list. Prioritized by severity from Critical to Low, ready for direct fix in the original document. With direct PDF export of results.',
                    badge: 'STAGE 03 • SYNTHESIS'
                }
            },
            cta: {
                text: 'Experience the neural architecture in action',
                button: 'Book free demo'
            }
        },
        comparison: {
            headline: 'Manual vs. Review',
            subline: 'We pitted Review against experienced consultants. The results define a new standard for your quality assurance.',
            note: 'Basis: A representative sample presentation (20 pages, 36 errors).',
            speed: {
                title: 'Processing Time',
                consultant: 'Experienced Consultants (Ø)',
                improvement: '46x Faster'
            },
            precision: {
                title: 'Error Detection',
                consultant: 'Experienced Consultants (Ø)',
                errors: 'Errors',
                improvement: '+94% Precision'
            },
            impact: {
                efficiency: { title: 'EFFICIENCY', value: '-98% Time Spent', desc: 'Eliminates the bottleneck of manual correction loops. Instant results instead of waiting for hours.' },
                consistency: { title: 'CONSISTENCY', value: 'Constant Precision', desc: 'Page 1 is checked just as precisely and attentively as page 100 – without fatigue factor.' },
                impact: { title: 'IMPACT', value: 'Board-Level Plausibility', desc: 'Ensures that every document is not only error-free but also inherently consistent and plausible.' }
            }
        },
        security: {
            headline: 'Security without compromise.',
            subline: 'Your data is your most valuable asset. We protect it with bank-grade standards.',
            retention: { title: 'Zero-Retention', desc: 'Data is deleted immediately after analysis. No training with your data.' },
            hosting: { title: 'German Servers', desc: 'Hosting exclusively in certified German data centers (ISO 27001).' },
            training: { title: 'No AI Training', desc: 'Your documents are never used to train our models.' },
            whitepaper: { cta: 'Read Security Whitepaper' },
            compliance: {
                title: 'Compliance & Certificates',
                gdpr: 'GDPR Compliant',
                avv: 'DPA Available',
                security: 'Bank-Grade',
                iso: 'ISO 27001'
            }
        },
        pricing: {
            headline: 'Simple, transparent pricing.',
            subline: 'No hidden costs. Full cost control.',
            billing: {
                monthly: 'Monthly',
                yearly: 'Yearly',
                save: 'Save 20%'
            },
            payPerUse: {
                title: 'Pay-per-Use',
                desc: 'Perfect for individual projects.',
                price: '2.69€',
                suffix: 'per page',
                features: [
                    'Full feature set',
                    'All file formats',
                    'Unlimited users',
                    'Team dashboard',
                    'Ready to start immediately'
                ],
                cta: 'Start now'
            },
            teams: {
                badge: 'POPULAR',
                title: 'Teams',
                desc: { bold: 'From 5 users.', text: 'For professional deal teams.' },
                price: { yearly: '59€', monthly: '69€' },
                suffix: 'per user / month',
                features: [
                    'Everything in Pay-per-Use',
                    'Consolidated billing',
                    'Admin portal',
                    'Priority support',
                    'Onboarding session'
                ],
                cta: 'Invite team'
            },
            scale: {
                title: 'Scale',
                desc: { bold: 'From 50 users.', text: 'For entire organizations.' },
                price: { yearly: '49€', monthly: '59€' },
                suffix: 'per user / month',
                features: [
                    'Everything in Teams',
                    'Dedicated CSM',
                    'SSO & Audit logs',
                    'Custom vocabulary',
                    'API Access'
                ],
                cta: 'Contact us'
            },
            trust: {
                gdpr: 'GDPR COMPLIANT',
                cancel: 'CANCEL ANYTIME',
                setup: 'QUICK SETUP'
            },
            contact: {
                question: 'Questions about pricing?',
                cta: 'Talk to us'
            }
        },
        roi: {
            headline: 'ROI that pays off immediately.',
            subline: 'Invest in quality, save on correction.',
            inputs: {
                title: 'Calculation Basis',
                docType: {
                    label: 'Document Type',
                    presentation: 'Presentation',
                    presentationTime: 'approx. 7 min/page',
                    document: 'Document',
                    documentTime: 'approx. 12 min/page'
                },
                pages: { label: 'Pages per Month' },
                cta: 'Book Demo'
            },
            results: {
                title: 'Your Potential Savings',
                manual: 'Manual Review',
                hours: 'Hours',
                description: 'Based on an hourly rate of',
                review: 'With Slaide Review',
                pages: 'Pages',
                page: 'Page',
                processingTime: 'Processing Time',
                savings: 'Monthly Savings',
                costSavings: 'Cost Savings',
                timeSavings: 'Time Savings'
            },
            cta: 'ROI Calculator'
        },
        footer: {
            copyright: 'All rights reserved.',
            rights: 'All rights reserved.',
            links: {
                platform: 'Platform',
                privacy: 'Privacy',
                imprint: 'Imprint',
                terms: 'Terms'
            },
            product: 'Product',
            company: 'Company',
            legal: {
                imprint: 'Imprint',
                privacy: 'Privacy',
                terms: 'Terms'
            },
        }
    }
}
