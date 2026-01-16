import type { Metadata } from "next";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Slaide",
  description: "Datenschutzerklärung von Slaide",
};

export default function DatenschutzPage(): JSX.Element {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white pt-24 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-semibold mb-8">Datenschutzerklärung</h1>
          <div className="prose prose-gray max-w-none space-y-6">
            <section>
              <p className="text-grey-dark leading-relaxed mb-4">
                <strong>Stand:</strong>{" "}
                {new Date().toLocaleDateString("de-DE", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <p className="text-grey-dark leading-relaxed">
                Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Diese
                Datenschutzerklärung informiert Sie über die Art, den Umfang und
                Zweck der Verarbeitung von personenbezogenen Daten auf unserer
                Website (www.slaide.de).
              </p>
              <p className="text-grey-dark leading-relaxed mb-4">
                <strong>Hinweis:</strong> Für die Nutzung unserer Web-Anwendung
                (app.slaide.de) gilt eine separate Datenschutzerklärung, die Sie
                in der Web-Anwendung unter "Datenschutz" finden können.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                1. Verantwortlicher
              </h2>
              <p className="text-grey-dark leading-relaxed">
                Verantwortlicher für die Datenverarbeitung auf dieser Website
                (www.slaide.de) ist:
                <br />
                <br />
                <strong>Nathalie Scholl</strong>
                <br />
                <strong>Slaide UG (in Gründung)</strong>
                <br />
                <strong>Neckarstraße 10</strong>
                <br />
                <strong>74257 Untereisesheim</strong>
                <br />
                <strong>Deutschland</strong>
                <br />
                <br />
                <strong>E-Mail:</strong>{" "}
                <a
                  href="mailto:info@slaide.de"
                  className="text-black hover:underline"
                >
                  info@slaide.de
                </a>
                <br />
                <strong>Telefon:</strong>{" "}
                <a
                  href="tel:+491728812969"
                  className="text-black hover:underline"
                >
                  +49 172 8812969
                </a>
              </p>
              <p className="text-grey-dark leading-relaxed mb-4">
                <strong>Hinweis zur Rechtsform:</strong> Slaide UG (in Gründung)
                ist eine Vorgründungsgesellschaft (GbR) und wird von Nathalie
                Scholl als alleiniger Gesellschafterin vertreten.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                2. Datenschutzbeauftragter
              </h2>
              <p className="text-grey-dark leading-relaxed">
                Wir haben keinen Datenschutzbeauftragten bestellt, da wir nicht
                die gesetzlichen Voraussetzungen hierfür erfüllen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                3. Allgemeine Hinweise zur Datenverarbeitung
              </h2>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                3.1 Umfang der Verarbeitung personenbezogener Daten
              </h3>
              <p className="text-grey-dark leading-relaxed mb-4">
                Wir verarbeiten personenbezogene Daten unserer Nutzer
                grundsätzlich nur, soweit dies zur Bereitstellung einer
                funktionsfähigen Website sowie unserer Inhalte und Leistungen
                erforderlich ist. Die Verarbeitung personenbezogener Daten
                erfolgt regelmäßig nur nach ausdrücklicher Einwilligung des
                Nutzers.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                3.2 Rechtsgrundlage der Verarbeitung
              </h3>
              <p className="text-grey-dark leading-relaxed mb-4">
                Soweit wir für Verarbeitungsvorgänge personenbezogener Daten
                eine Einwilligung der betroffenen Person einholen, dient Art. 6
                Abs. 1 lit. a EU-Datenschutzgrundverordnung (DSGVO) als
                Rechtsgrundlage.
              </p>
              <p className="text-grey-dark leading-relaxed mb-4">
                Bei der Verarbeitung von personenbezogenen Daten, die zur
                Erfüllung eines Vertrages, dessen Vertragspartei die betroffene
                Person ist, erforderlich ist, dient Art. 6 Abs. 1 lit. b DSGVO
                als Rechtsgrundlage. Dies gilt auch für Verarbeitungsvorgänge,
                die zur Durchführung vorvertraglicher Maßnahmen erforderlich
                sind.
              </p>
              <p className="text-grey-dark leading-relaxed mb-4">
                Soweit eine Verarbeitung personenbezogener Daten zur Erfüllung
                einer rechtlichen Verpflichtung erforderlich ist, der unser
                Unternehmen unterliegt, dient Art. 6 Abs. 1 lit. c DSGVO als
                Rechtsgrundlage.
              </p>
              <p className="text-grey-dark leading-relaxed mb-4">
                Für den Fall, dass lebenswichtige Interessen der betroffenen
                Person oder einer anderen natürlichen Person eine Verarbeitung
                personenbezogener Daten erforderlich machen, dient Art. 6 Abs. 1
                lit. d DSGVO als Rechtsgrundlage.
              </p>
              <p className="text-grey-dark leading-relaxed mb-4">
                Ist die Verarbeitung zur Wahrung eines berechtigten Interesses
                unseres Unternehmens oder eines Dritten erforderlich und
                überwiegen die Interessen, Grundrechte und Grundfreiheiten des
                Betroffenen das erstgenannte Interesse nicht, so dient Art. 6
                Abs. 1 lit. f DSGVO als Rechtsgrundlage für die Verarbeitung.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                4. Bereitstellung der Website und Erstellung von Logfiles
              </h2>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                4.1 Beschreibung und Umfang der Datenverarbeitung
              </h3>
              <p className="text-grey-dark leading-relaxed mb-4">
                Bei jedem Aufruf unserer Internetseite werden durch unseren
                Hosting-Provider (Vercel) automatisch Server-Logfiles erstellt.
                Diese enthalten technische Daten, die für die Bereitstellung der
                Website erforderlich sind.
              </p>
              <p className="text-grey-dark leading-relaxed mb-4">
                Folgende Daten werden hierbei automatisch in den Server-Logfiles
                gespeichert:
              </p>
              <ul className="list-disc list-inside text-grey-dark leading-relaxed mb-4 space-y-2 ml-4">
                <li>IP-Adresse des aufrufenden Rechners</li>
                <li>Datum und Uhrzeit des Zugriffs</li>
                <li>Angeforderte URL und HTTP-Methode</li>
                <li>HTTP-Statuscode</li>
                <li>Übertragene Datenmenge</li>
                <li>
                  User-Agent (enthält Informationen über Browser und
                  Betriebssystem, wird jedoch nicht einzeln ausgewertet)
                </li>
              </ul>
              <p className="text-grey-dark leading-relaxed mb-4">
                Diese Daten werden ausschließlich für technische Zwecke
                (Fehlerbehebung, Sicherheit, Performance-Optimierung) verwendet
                und nicht für Marketing- oder Tracking-Zwecke ausgewertet.
              </p>
              <p className="text-grey-dark leading-relaxed mb-4">
                Zusätzlich verwenden wir Rate Limiting über den Dienst Upstash
                (Upstash Inc., 2261 Market Street #4339, San Francisco, CA
                94114, USA), um Missbrauch zu verhindern. Hierbei wird Ihre
                IP-Adresse temporär in einer Redis-Datenbank gespeichert, um die
                Anzahl der Anfragen zu begrenzen. Diese Daten werden nach
                spätestens 24 Stunden automatisch gelöscht. Bei Überschreitung
                der Rate-Limits kann der Zugriff temporär für bis zu 1 Stunde
                gesperrt werden. Weitere Informationen:{" "}
                <a
                  href="https://upstash.com/legal/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:underline"
                >
                  https://upstash.com/legal/privacy
                </a>
              </p>
              <p className="text-grey-dark leading-relaxed mb-4">
                <strong>Hinweis zu Drittlandübermittlungen:</strong> Vercel und
                Upstash sind US-Unternehmen. Die Datenverarbeitung erfolgt
                teilweise in den USA. Wir haben mit beiden Dienstleistern
                Standardvertragsklauseln (SCC) nach Art. 46 Abs. 2 lit. c DSGVO
                abgeschlossen. Zusätzlich wurden technische und organisatorische
                Maßnahmen implementiert, um ein angemessenes Datenschutzniveau zu
                gewährleisten. Ein Transfer Impact Assessment (TIA) wurde
                durchgeführt. Weitere Details finden Sie in Abschnitt 15.
              </p>
              <p className="text-grey-dark leading-relaxed mb-4">
                <strong>Auftragsverarbeitungsvertrag:</strong> Mit Vercel und
                Upstash wurden Auftragsverarbeitungsverträge (AVV) nach Art. 28
                DSGVO abgeschlossen.
              </p>
              <p className="text-grey-dark leading-relaxed mb-4">
                <strong>Speicherort:</strong> Vercel speichert Daten primär in
                AWS-Rechenzentren in Europa (Frankfurt, Irland). Logfiles können
                temporär auch in US-Rechenzentren verarbeitet werden. Upstash
                speichert Daten in US-Rechenzentren.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                4.2 Rechtsgrundlage für die Datenverarbeitung
              </h3>
              <p className="text-grey-dark leading-relaxed mb-4">
                Die Rechtsgrundlage für die vorübergehende Speicherung der Daten
                und der Logfiles ist Art. 6 Abs. 1 lit. f DSGVO.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                4.3 Zweck der Datenverarbeitung
              </h3>
              <p className="text-grey-dark leading-relaxed mb-4">
                Die vorübergehende Speicherung der IP-Adresse durch das System
                ist notwendig, um eine Auslieferung der Website an den Rechner
                des Nutzers zu ermöglichen. Hierfür muss die IP-Adresse des
                Nutzers für die Dauer der Sitzung gespeichert bleiben.
              </p>
              <p className="text-grey-dark leading-relaxed mb-4">
                Die Speicherung in Logfiles erfolgt, um die Funktionsfähigkeit
                der Website sicherzustellen. Zudem dienen uns die Daten zur
                Optimierung der Website und zur Sicherstellung der Sicherheit
                unserer informationstechnischen Systeme. Eine Auswertung der
                Daten zu Marketingzwecken findet in diesem Zusammenhang nicht
                statt.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                4.4 Dauer der Speicherung
              </h3>
              <p className="text-grey-dark leading-relaxed mb-4">
                Die Daten werden gelöscht, sobald sie für die Erreichung des
                Zweckes ihrer Erhebung nicht mehr erforderlich sind. Im Falle
                der Erfassung der Daten zur Bereitstellung der Website ist dies
                der Fall, wenn die jeweilige Sitzung beendet ist.
              </p>
              <p className="text-grey-dark leading-relaxed mb-4">
                Im Falle der Speicherung der Daten in Logfiles ist dies nach
                spätestens sieben Tagen der Fall. Eine darüber hinausgehende
                Speicherung erfolgt nur bei konkreten Sicherheitsvorfällen
                (z.B. DDoS-Angriffe, Hacking-Versuche) und nur für die Dauer
                der Untersuchung (maximal 30 Tage). In diesem Fall werden die
                IP-Adressen der Nutzer nach Abschluss der Untersuchung gelöscht
                oder verfremdet, sodass eine Zuordnung des aufrufenden Clients
                nicht mehr möglich ist.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                4.5 Widerspruchs- und Beseitigungsmöglichkeit
              </h3>
              <p className="text-grey-dark leading-relaxed mb-4">
                Die Erfassung der Daten zur Bereitstellung der Website und die
                Speicherung der Daten in Logfiles ist für den Betrieb der
                Internetseite zwingend erforderlich. Es besteht folglich seitens
                des Nutzers keine Widerspruchsmöglichkeit.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                5. Verwendung von Cookies und lokalen Speichertechnologien
              </h2>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                5.1 Beschreibung und Umfang der Datenverarbeitung
              </h3>
              <p className="text-grey-dark leading-relaxed mb-4">
                Unsere Internetseite verwendet technisch notwendige Cookies und
                lokale Speichertechnologien. Bei Cookies handelt es sich um
                Textdateien, die im Internetbrowser bzw. vom Internetbrowser auf
                dem Computersystem des Nutzers gespeichert werden.
              </p>
              <p className="text-grey-dark leading-relaxed mb-4">
                Wir setzen ausschließlich technisch notwendige Cookies ein, die
                für die Funktionsfähigkeit der Website erforderlich sind. Diese
                werden insbesondere verwendet für:
              </p>
              <ul className="list-disc list-inside text-grey-dark leading-relaxed mb-4 space-y-2 ml-4">
                <li>Session-Management (z.B. durch Next.js Framework)</li>
                <li>
                  Speicherung von Präferenzen für die Website-Funktionalität
                </li>
                <li>Service Worker für Offline-Funktionalität (PWA)</li>
              </ul>
              <p className="text-grey-dark leading-relaxed mb-4">
                <strong>Wichtig:</strong> Wir verwenden keine Tracking-Cookies
                oder Cookies zu Marketingzwecken. Vercel Analytics, das wir für
                die Website-Analyse nutzen, verwendet keine Cookies.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                5.2 Rechtsgrundlage für die Datenverarbeitung
              </h3>
              <p className="text-grey-dark leading-relaxed mb-4">
                Die Rechtsgrundlage für die Verarbeitung personenbezogener Daten
                unter Verwendung von Cookies ist Art. 6 Abs. 1 lit. f DSGVO.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                5.3 Zweck der Datenverarbeitung
              </h3>
              <p className="text-grey-dark leading-relaxed mb-4">
                Der Zweck der Verwendung technisch notwendiger Cookies ist, die
                Nutzung von Websites für die Nutzer zu vereinfachen. Einige
                Funktionen unserer Internetseite können ohne den Einsatz von
                Cookies nicht angeboten werden. Für diese ist es erforderlich,
                dass der Browser auch nach einem Seitenwechsel wiedererkannt
                wird.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                5.4 Dauer der Speicherung, Widerspruchs- und
                Beseitigungsmöglichkeit
              </h3>
              <p className="text-grey-dark leading-relaxed mb-4">
                Cookies werden auf dem Rechner des Nutzers gespeichert und von
                diesem an unsere Seite übermittelt. Daher haben Sie als Nutzer
                auch die volle Kontrolle über die Verwendung von Cookies. Durch
                eine Änderung der Einstellungen in Ihrem Internetbrowser können
                Sie die Übertragung von Cookies deaktivieren oder einschränken.
                Bereits gespeicherte Cookies können jederzeit gelöscht werden.
                Dies kann auch automatisiert erfolgen. Werden Cookies für unsere
                Website deaktiviert, können möglicherweise nicht mehr alle
                Funktionen der Website vollumfänglich genutzt werden.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                6. Whitepaper-Anfrageformular und E-Mail-Kontakt
              </h2>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                6.1 Beschreibung und Umfang der Datenverarbeitung
              </h3>
              <p className="text-grey-dark leading-relaxed mb-4">
                Auf unserer Internetseite ist ein Formular vorhanden, über das
                Sie unser Security Whitepaper als PDF anfordern können. Nimmt
                ein Nutzer diese Möglichkeit wahr, so werden die in der
                Eingabemaske eingegeben Daten an uns übermittelt und
                gespeichert. Diese Daten sind:
              </p>
              <ul className="list-disc list-inside text-grey-dark leading-relaxed mb-4 space-y-2 ml-4">
                <li>Name</li>
                <li>E-Mail-Adresse</li>
                <li>Firma</li>
                <li>Zustimmung zur Datenschutzerklärung (erforderlich)</li>
                <li>Zustimmung zu AGB (optional)</li>
              </ul>
              <p className="text-grey-dark leading-relaxed mb-4">
                Im Zeitpunkt der Absendung der Anfrage wird zudem gespeichert:
              </p>
              <ul className="list-disc list-inside text-grey-dark leading-relaxed mb-4 space-y-2 ml-4">
                <li>Die IP-Adresse des Nutzers</li>
                <li>Datum und Uhrzeit der Anfrage</li>
              </ul>
              <p className="text-grey-dark leading-relaxed mb-4">
                Für die Verarbeitung der Daten wird im Rahmen des
                Absendevorgangs Ihre Einwilligung eingeholt und auf diese
                Datenschutzerklärung verwiesen.
              </p>
              <p className="text-grey-dark leading-relaxed mb-4">
                Die Daten werden verwendet, um Ihnen das angeforderte Whitepaper
                per E-Mail zuzusenden. Die E-Mail wird über den Dienst Resend
                versendet (siehe Abschnitt 11).
              </p>
              <p className="text-grey-dark leading-relaxed mb-4">
                Alternativ ist eine Kontaktaufnahme über die bereitgestellte
                E-Mail-Adresse möglich. In diesem Fall werden die mit der E-Mail
                übermittelten personenbezogenen Daten des Nutzers gespeichert.
              </p>
              <p className="text-grey-dark leading-relaxed mb-4">
                Es erfolgt in diesem Zusammenhang keine Weitergabe der Daten an
                Dritte (außer an Resend für den E-Mail-Versand, siehe Abschnitt
                11). Die Daten werden ausschließlich für die Versendung des
                Whitepapers und die Verarbeitung der Konversation verwendet.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                6.2 Rechtsgrundlage für die Datenverarbeitung
              </h3>
              <p className="text-grey-dark leading-relaxed mb-4">
                Die Rechtsgrundlage für die Verarbeitung der Daten ist bei
                Vorliegen einer Einwilligung des Nutzers Art. 6 Abs. 1 lit. a
                DSGVO.
              </p>
              <p className="text-grey-dark leading-relaxed mb-4">
                Die Rechtsgrundlage für die Verarbeitung der Daten, die im Zuge
                einer Übersendung einer E-Mail übermittelt werden, ist Art. 6
                Abs. 1 lit. f DSGVO. Zielt der E-Mail-Kontakt auf den Abschluss
                eines Vertrages ab, so ist zusätzliche Rechtsgrundlage für die
                Verarbeitung Art. 6 Abs. 1 lit. b DSGVO.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                6.3 Zweck der Datenverarbeitung
              </h3>
              <p className="text-grey-dark leading-relaxed mb-4">
                Die Verarbeitung der personenbezogenen Daten aus der
                Eingabemaske dient uns zur Versendung des angefragten
                Whitepapers per E-Mail. Im Falle einer Kontaktaufnahme per
                E-Mail liegt hieran auch das erforderliche berechtigte Interesse
                an der Verarbeitung der Daten.
              </p>
              <p className="text-grey-dark leading-relaxed mb-4">
                Die sonstigen während des Absendevorgangs verarbeiteten
                personenbezogenen Daten dienen dazu, einen Missbrauch des
                Formulars zu verhindern und die Sicherheit unserer
                informationstechnischen Systeme sicherzustellen.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                6.4 Dauer der Speicherung
              </h3>
              <p className="text-grey-dark leading-relaxed mb-4">
                Die Daten werden gelöscht, sobald sie für die Erreichung des
                Zweckes ihrer Erhebung nicht mehr erforderlich sind. Für die
                personenbezogenen Daten aus der Eingabemaske des Formulars und
                diejenigen, die per E-Mail übersandt wurden, ist dies dann der
                Fall, wenn die jeweilige Konversation mit dem Nutzer beendet
                ist. Die Konversation gilt als beendet, wenn:
              </p>
              <ul className="list-disc list-inside text-grey-dark leading-relaxed mb-4 space-y-2 ml-4">
                <li>
                  Das Whitepaper erfolgreich versendet wurde und keine weitere
                  Kommunikation erfolgt ist (spätestens nach 6 Monaten)
                </li>
                <li>
                  Der Nutzer ausdrücklich die Löschung verlangt
                </li>
                <li>
                  Der betroffene Sachverhalt abschließend geklärt ist
                </li>
              </ul>
              <p className="text-grey-dark leading-relaxed mb-4">
                <strong>Konkrete Löschfrist:</strong> Spätestens 6 Monate nach
                Versendung des Whitepapers, sofern keine weitere Kommunikation
                erfolgt ist.
              </p>
              <p className="text-grey-dark leading-relaxed mb-4">
                Die während des Absendevorgangs zusätzlich erhobenen
                personenbezogenen Daten werden spätestens nach einer Frist von
                sieben Tagen gelöscht.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                6.5 Widerspruchs- und Beseitigungsmöglichkeit
              </h3>
              <p className="text-grey-dark leading-relaxed mb-4">
                Der Nutzer hat jederzeit die Möglichkeit, seine Einwilligung zur
                Verarbeitung der personenbezogenen Daten zu widerrufen. Die
                Einwilligung kann so einfach wie ihre Erteilung widerrufen
                werden. Sie können Ihre Einwilligung jederzeit per E-Mail an{" "}
                <a
                  href="mailto:info@slaide.de"
                  className="text-black hover:underline"
                >
                  info@slaide.de
                </a>{" "}
                oder schriftlich an unsere oben genannte Adresse widerrufen.
                Nimmt der Nutzer per E-Mail Kontakt mit uns auf, so kann er der
                Speicherung seiner personenbezogenen Daten jederzeit
                widersprechen. In einem solchen Fall kann die Konversation nicht
                fortgeführt werden.
              </p>
              <p className="text-grey-dark leading-relaxed mb-4">
                <strong>Wichtig:</strong> Die Einwilligung ist freiwillig. Sie
                können die Einwilligung jederzeit widerrufen, ohne dass Ihnen
                daraus Nachteile entstehen. Durch den Widerruf wird die
                Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf
                erfolgten Verarbeitung nicht berührt.
              </p>
              <p className="text-grey-dark leading-relaxed mb-4">
                Alle personenbezogenen Daten, die im Zuge der Kontaktaufnahme
                gespeichert wurden, werden in diesem Fall gelöscht.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                7. Verwendung von Cal.com für Terminbuchungen
              </h2>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                7.1 Beschreibung und Umfang der Datenverarbeitung
              </h3>
              <p className="text-grey-dark leading-relaxed mb-4">
                Wir nutzen den Dienst Cal.com für die Terminbuchung. Cal.com ist
                ein Service der Cal.com, Inc., 2093 Philadelphia Pike #5022,
                Claymont, DE 19703, USA.
              </p>
              <p className="text-grey-dark leading-relaxed mb-4">
                Wenn Sie einen Termin über unsere Website buchen, werden
                folgende Daten an Cal.com übermittelt:
              </p>
              <ul className="list-disc list-inside text-grey-dark leading-relaxed mb-4 space-y-2 ml-4">
                <li>Name</li>
                <li>E-Mail-Adresse</li>
                <li>Terminwunsch</li>
                <li>IP-Adresse</li>
              </ul>
              <p className="text-grey-dark leading-relaxed mb-4">
                <strong>Rechtsgrundlage:</strong> Für bestehende Kunden erfolgt
                die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. b
                DSGVO zur Erfüllung eines Vertrages. Für Interessenten ohne
                bestehenden Vertrag erfolgt die Datenverarbeitung auf Grundlage
                von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der
                Terminvereinbarung) bzw. Art. 6 Abs. 1 lit. a DSGVO
                (Einwilligung), sofern eine Einwilligung eingeholt wurde.
              </p>
              <p className="text-grey-dark leading-relaxed mb-4">
                <strong>Datenweitergabe:</strong> Cal.com kann Daten an
                Drittanbieter weitergeben, die für die Terminbuchung erforderlich
                sind (z.B. Videokonferenz-Anbieter wie Zoom, Google Meet, wenn
                diese vom Nutzer ausgewählt werden). Eine vollständige Liste
                finden Sie in der Datenschutzerklärung von Cal.com.
              </p>
              <p className="text-grey-dark leading-relaxed mb-4">
                <strong>Hinweis zu Drittlandübermittlungen:</strong> Cal.com ist
                ein US-Unternehmen. Die Datenverarbeitung erfolgt in den USA.
                Wir haben mit Cal.com Standardvertragsklauseln (SCC) nach Art.
                46 Abs. 2 lit. c DSGVO abgeschlossen. Zusätzlich wurden
                technische und organisatorische Maßnahmen implementiert. Ein
                Transfer Impact Assessment (TIA) wurde durchgeführt. Weitere
                Details finden Sie in Abschnitt 15.
              </p>
              <p className="text-grey-dark leading-relaxed mb-4">
                <strong>Auftragsverarbeitungsvertrag:</strong> Mit Cal.com wurde
                ein Auftragsverarbeitungsvertrag (AVV) nach Art. 28 DSGVO
                abgeschlossen.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                7.2 Datenschutzerklärung von Cal.com
              </h3>
              <p className="text-grey-dark leading-relaxed mb-4">
                Weitere Informationen zur Datenverarbeitung durch Cal.com finden
                Sie in der Datenschutzerklärung von Cal.com:{" "}
                <a
                  href="https://cal.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:underline"
                >
                  https://cal.com/privacy
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                8. Verwendung von Vercel Analytics und Speed Insights
              </h2>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                8.1 Beschreibung und Umfang der Datenverarbeitung
              </h3>
              <p className="text-grey-dark leading-relaxed mb-4">
                Wir nutzen Vercel Analytics und Vercel Speed Insights,
                Webanalysedienste der Vercel Inc., 340 S Lemon Ave #4133,
                Walnut, CA 91789, USA, um die Nutzung unserer Website zu
                analysieren und zu verbessern.
              </p>
              <p className="text-grey-dark leading-relaxed mb-4">
                Vercel Analytics und Speed Insights sind privacy-first
                Analytics-Dienste, die keine Cookies verwenden und keine
                personenbezogenen Daten sammeln. Es werden folgende
                anonymisierte Daten erfasst:
              </p>
              <ul className="list-disc list-inside text-grey-dark leading-relaxed mb-4 space-y-2 ml-4">
                <li>Anzahl der Seitenaufrufe (anonymisiert)</li>
                <li>
                  Performance-Metriken (Web Vitals: LCP, INP, CLS, FCP, TTFB)
                </li>
                <li>
                  Geografische Herkunft (nur auf Länderebene, keine IP-Adressen)
                </li>
              </ul>
              <p className="text-grey-dark leading-relaxed mb-4">
                <strong>Wichtig:</strong> Vercel Analytics und Speed Insights
                sammeln keine IP-Adressen, keine Cookies und keine
                personenbezogenen Daten. Die Daten werden vollständig
                anonymisiert verarbeitet. Die geografische Herkunft wird über
                IP-Geolocation auf Länderebene bestimmt, wobei die IP-Adresse
                selbst nicht gespeichert wird.
              </p>
              <p className="text-grey-dark leading-relaxed mb-4">
                <strong>Erfasste Performance-Metriken:</strong> LCP (Largest
                Contentful Paint), INP (Interaction to Next Paint), CLS
                (Cumulative Layout Shift), FCP (First Contentful Paint), TTFB
                (Time to First Byte). Zusätzlich werden anonymisierte
                Geräteinformationen (Bildschirmauflösung, Gerätetyp) erfasst,
                jedoch keine personenbezogenen Daten.
              </p>
              <p className="text-grey-dark leading-relaxed mb-4">
                Die Datenverarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1
                lit. f DSGVO zur Verbesserung unserer Website und zur Analyse
                der Performance.
              </p>
              <p className="text-grey-dark leading-relaxed mb-4">
                <strong>Hinweis zu Drittlandübermittlungen:</strong> Vercel ist
                ein US-Unternehmen. Die Datenverarbeitung erfolgt teilweise in
                den USA. Wir haben mit Vercel Standardvertragsklauseln (SCC)
                nach Art. 46 Abs. 2 lit. c DSGVO abgeschlossen. Zusätzlich
                wurden technische und organisatorische Maßnahmen implementiert.
                Ein Transfer Impact Assessment (TIA) wurde durchgeführt.
                Weitere Details finden Sie in Abschnitt 15.
              </p>
              <p className="text-grey-dark leading-relaxed mb-4">
                <strong>Auftragsverarbeitungsvertrag:</strong> Mit Vercel wurde
                ein Auftragsverarbeitungsvertrag (AVV) nach Art. 28 DSGVO
                abgeschlossen.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                8.2 Datenschutzerklärung von Vercel
              </h3>
              <p className="text-grey-dark leading-relaxed mb-4">
                Weitere Informationen zur Datenverarbeitung durch Vercel finden
                Sie in der Datenschutzerklärung von Vercel:{" "}
                <a
                  href="https://vercel.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:underline"
                >
                  https://vercel.com/legal/privacy-policy
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                9. Content Security Policy (CSP) Reports
              </h2>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                9.1 Beschreibung und Umfang der Datenverarbeitung
              </h3>
              <p className="text-grey-dark leading-relaxed mb-4">
                Um die Sicherheit unserer Website zu gewährleisten, verwenden
                wir Content Security Policy (CSP). Bei Verstößen gegen diese
                Sicherheitsrichtlinie werden automatisch Berichte an unseren
                Server gesendet. Diese Berichte enthalten technische
                Informationen wie:
              </p>
              <ul className="list-disc list-inside text-grey-dark leading-relaxed mb-4 space-y-2 ml-4">
                <li>Die blockierte URL oder Ressource</li>
                <li>Die verletzte CSP-Richtlinie</li>
                <li>Die ursprüngliche URL, von der aus der Verstoß auftrat</li>
                <li>IP-Adresse des Browsers (technisch erforderlich)</li>
                <li>User-Agent String</li>
                <li>Referer-URL</li>
              </ul>
              <p className="text-grey-dark leading-relaxed mb-4">
                Diese Daten werden ausschließlich für Sicherheitszwecke
                verwendet und nicht für Marketing oder Tracking. Die
                Datenverarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f
                DSGVO zur Gewährleistung der Sicherheit unserer Website.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                9.2 Dauer der Speicherung
              </h3>
              <p className="text-grey-dark leading-relaxed mb-4">
                CSP-Reports werden nur in der Entwicklungsumgebung geloggt. In
                der Produktionsumgebung werden sie verarbeitet, aber nicht
                dauerhaft gespeichert. Die Daten werden im RAM gehalten und
                nach maximal 1 Stunde automatisch gelöscht, sofern keine
                Sicherheitsrelevanz festgestellt wird.
              </p>
              <p className="text-grey-dark leading-relaxed mb-4">
                <strong>Automatisierte Entscheidungen:</strong> Bei
                wiederholten CSP-Verstößen kann der Zugriff automatisch
                blockiert werden. Dies erfolgt ohne menschliches Eingreifen
                basierend auf vordefinierten Sicherheitsregeln. Sie haben das
                Recht, dieser automatisierten Entscheidung zu widersprechen
                (siehe Abschnitt 12.8).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                10. Progressive Web App (PWA) und Service Worker
              </h2>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                10.1 Beschreibung und Umfang der Datenverarbeitung
              </h3>
              <p className="text-grey-dark leading-relaxed mb-4">
                Unsere Website ist als Progressive Web App (PWA) konzipiert und
                verwendet einen Service Worker für Offline-Funktionalität und
                Performance-Optimierung. Der Service Worker speichert folgende
                Daten lokal auf Ihrem Gerät:
              </p>
              <ul className="list-disc list-inside text-grey-dark leading-relaxed mb-4 space-y-2 ml-4">
                <li>
                  Statische Assets (Bilder, Schriftarten, CSS, JavaScript) für
                  Offline-Verfügbarkeit
                </li>
                <li>
                  Cache-Manifest für die Verwaltung der gecachten Ressourcen
                </li>
                <li>
                  Keine personenbezogenen Daten werden gecacht. Formular-Eingaben
                  werden nicht lokal gespeichert.
                </li>
              </ul>
              <p className="text-grey-dark leading-relaxed mb-4">
                Diese Daten werden ausschließlich auf Ihrem Gerät gespeichert
                und nicht an unseren Server übertragen. Der Cache wird
                automatisch nach 7 Tagen oder bei Aktualisierung der Website
                aktualisiert. Sie können den Service Worker jederzeit über Ihre
                Browser-Einstellungen deaktivieren oder den Cache löschen.
              </p>
              <p className="text-grey-dark leading-relaxed mb-4">
                Die Datenverarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1
                lit. f DSGVO zur Verbesserung der Performance und
                Benutzerfreundlichkeit unserer Website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                11. Verwendung von Resend für E-Mail-Versand
              </h2>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                11.1 Beschreibung und Umfang der Datenverarbeitung
              </h3>
              <p className="text-grey-dark leading-relaxed mb-4">
                Wir nutzen den E-Mail-Service Resend der Resend, Inc., 2261
                Market Street #4339, San Francisco, CA 94114, USA, um E-Mails zu
                versenden (z.B. Whitepaper-Versand).
              </p>
              <p className="text-grey-dark leading-relaxed mb-4">
                Bei der Nutzung von Resend werden folgende Daten verarbeitet:
              </p>
              <ul className="list-disc list-inside text-grey-dark leading-relaxed mb-4 space-y-2 ml-4">
                <li>E-Mail-Adresse des Empfängers</li>
                <li>Name des Empfängers</li>
                <li>E-Mail-Inhalt</li>
                <li>IP-Adresse</li>
              </ul>
              <p className="text-grey-dark leading-relaxed mb-4">
                Die Datenverarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1
                lit. b DSGVO zur Erfüllung eines Vertrages bzw. Art. 6 Abs. 1
                lit. f DSGVO zur Wahrung unserer berechtigten Interessen.
              </p>
              <p className="text-grey-dark leading-relaxed mb-4">
                <strong>Sub-Auftragsverarbeiter:</strong> Resend nutzt
                Sub-Auftragsverarbeiter für die E-Mail-Infrastruktur (z.B.
                Cloud-Provider für Server-Infrastruktur, SMTP-Provider). Eine
                vollständige Liste der Sub-Auftragsverarbeiter finden Sie in der
                Datenschutzerklärung von Resend. Wir haben mit Resend
                vereinbart, dass Sub-Auftragsverarbeiter nur nach Art. 28 Abs.
                3 lit. h DSGVO eingesetzt werden dürfen.
              </p>
              <p className="text-grey-dark leading-relaxed mb-4">
                <strong>Hinweis zu Drittlandübermittlungen:</strong> Resend ist
                ein US-Unternehmen. Die Datenverarbeitung erfolgt in den USA.
                Wir haben mit Resend Standardvertragsklauseln (SCC) nach Art. 46
                Abs. 2 lit. c DSGVO abgeschlossen. Zusätzlich wurden technische
                und organisatorische Maßnahmen implementiert. Ein Transfer
                Impact Assessment (TIA) wurde durchgeführt. Weitere Details
                finden Sie in Abschnitt 15.
              </p>
              <p className="text-grey-dark leading-relaxed mb-4">
                <strong>Auftragsverarbeitungsvertrag:</strong> Mit Resend wurde
                ein Auftragsverarbeitungsvertrag (AVV) nach Art. 28 DSGVO
                abgeschlossen.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                11.2 Datenschutzerklärung von Resend
              </h3>
              <p className="text-grey-dark leading-relaxed mb-4">
                Weitere Informationen zur Datenverarbeitung durch Resend finden
                Sie in der Datenschutzerklärung von Resend:{" "}
                <a
                  href="https://resend.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:underline"
                >
                  https://resend.com/legal/privacy-policy
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                12. Rechte der betroffenen Person
              </h2>

              <p className="text-grey-dark leading-relaxed mb-4">
                Werden personenbezogene Daten von Ihnen verarbeitet, sind Sie
                Betroffener i.S.d. DSGVO und es stehen Ihnen folgende Rechte
                gegenüber dem Verantwortlichen zu:
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                12.1 Auskunftsrecht
              </h3>
              <p className="text-grey-dark leading-relaxed mb-4">
                Sie können von dem Verantwortlichen eine Bestätigung darüber
                verlangen, ob personenbezogene Daten, die Sie betreffen, von uns
                verarbeitet werden.
              </p>
              <p className="text-grey-dark leading-relaxed mb-4">
                Liegt eine solche Verarbeitung vor, können Sie von dem
                Verantwortlichen über folgende Informationen Auskunft verlangen:
              </p>
              <ul className="list-disc list-inside text-grey-dark leading-relaxed mb-4 space-y-2 ml-4">
                <li>
                  die Zwecke, zu denen die personenbezogenen Daten verarbeitet
                  werden
                </li>
                <li>
                  die Kategorien von personenbezogenen Daten, welche verarbeitet
                  werden
                </li>
                <li>
                  die Empfänger bzw. die Kategorien von Empfängern, gegenüber
                  denen die Sie betreffenden personenbezogenen Daten offengelegt
                  wurden oder noch offengelegt werden
                </li>
                <li>
                  die geplante Dauer der Speicherung der Sie betreffenden
                  personenbezogenen Daten oder, falls konkrete Angaben hierzu
                  nicht möglich sind, Kriterien für die Festlegung der
                  Speicherdauer
                </li>
                <li>
                  das Bestehen eines Rechts auf Berichtigung oder Löschung der
                  Sie betreffenden personenbezogenen Daten, eines Rechts auf
                  Einschränkung der Verarbeitung durch den Verantwortlichen oder
                  eines Widerspruchsrechts gegen diese Verarbeitung
                </li>
                <li>
                  das Bestehen eines Beschwerderechts bei einer Aufsichtsbehörde
                </li>
                <li>
                  alle verfügbaren Informationen über die Herkunft der Daten,
                  wenn die personenbezogenen Daten nicht bei der betroffenen
                  Person erhoben werden
                </li>
                <li>
                  das Bestehen einer automatisierten Entscheidungsfindung
                  einschließlich Profiling gemäß Art. 22 Abs. 1 und 4 DSGVO und
                  — zumindest in diesen Fällen — aussagekräftige Informationen
                  über die involvierte Logik sowie die Tragweite und die
                  angestrebten Auswirkungen einer derartigen Verarbeitung für
                  die betroffene Person
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                12.2 Recht auf Berichtigung
              </h3>
              <p className="text-grey-dark leading-relaxed mb-4">
                Sie haben ein Recht auf Berichtigung und/oder Vervollständigung
                gegenüber dem Verantwortlichen, sofern die verarbeiteten
                personenbezogenen Daten, die Sie betreffen, unrichtig oder
                unvollständig sind. Der Verantwortliche hat die Berichtigung
                unverzüglich vorzunehmen.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                12.3 Recht auf Löschung
              </h3>
              <p className="text-grey-dark leading-relaxed mb-4">
                Sie können von dem Verantwortlichen verlangen, dass die Sie
                betreffenden personenbezogenen Daten unverzüglich gelöscht
                werden, und der Verantwortliche ist verpflichtet, diese Daten
                unverzüglich zu löschen, sofern einer der folgenden Gründe
                zutrifft:
              </p>
              <ul className="list-disc list-inside text-grey-dark leading-relaxed mb-4 space-y-2 ml-4">
                <li>
                  Die Sie betreffenden personenbezogenen Daten sind für die
                  Zwecke, für die sie erhoben oder auf sonstige Weise
                  verarbeitet wurden, nicht mehr notwendig.
                </li>
                <li>
                  Sie widerrufen Ihre Einwilligung, auf die sich die
                  Verarbeitung gemäß Art. 6 Abs. 1 lit. a oder Art. 9 Abs. 2
                  lit. a DSGVO stützte, und es fehlt an einer anderweitigen
                  Rechtsgrundlage für die Verarbeitung.
                </li>
                <li>
                  Sie legen gemäß Art. 21 Abs. 1 DSGVO Widerspruch gegen die
                  Verarbeitung ein und es liegen keine vorrangigen berechtigten
                  Gründe für die Verarbeitung vor, oder Sie legen gemäß Art. 21
                  Abs. 2 DSGVO Widerspruch gegen die Verarbeitung ein.
                </li>
                <li>
                  Die Sie betreffenden personenbezogenen Daten wurden
                  unrechtmäßig verarbeitet.
                </li>
                <li>
                  Die Löschung der Sie betreffenden personenbezogenen Daten ist
                  zur Erfüllung einer rechtlichen Verpflichtung nach dem
                  Unionsrecht oder dem Recht der Mitgliedstaaten erforderlich,
                  dem der Verantwortliche unterliegt.
                </li>
                <li>
                  Die Sie betreffenden personenbezogenen Daten wurden in Bezug
                  auf angebotene Dienste der Informationsgesellschaft gemäß Art.
                  8 Abs. 1 DSGVO erhoben.
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                12.4 Recht auf Einschränkung der Verarbeitung
              </h3>
              <p className="text-grey-dark leading-relaxed mb-4">
                Sie haben das Recht, von dem Verantwortlichen die Einschränkung
                der Verarbeitung zu verlangen, wenn eine der folgenden
                Voraussetzungen gegeben ist:
              </p>
              <ul className="list-disc list-inside text-grey-dark leading-relaxed mb-4 space-y-2 ml-4">
                <li>
                  Die Richtigkeit der Sie betreffenden personenbezogenen Daten
                  wird von Ihnen bestritten, und zwar für eine Dauer, die es dem
                  Verantwortlichen ermöglicht, die Richtigkeit der
                  personenbezogenen Daten zu überprüfen.
                </li>
                <li>
                  Die Verarbeitung ist unrechtmäßig und Sie lehnen die Löschung
                  der personenbezogenen Daten ab und verlangen stattdessen die
                  Einschränkung der Nutzung der personenbezogenen Daten.
                </li>
                <li>
                  Der Verantwortliche benötigt die Sie betreffenden
                  personenbezogenen Daten für die Zwecke der Verarbeitung nicht
                  länger, Sie benötigen sie jedoch zur Geltendmachung, Ausübung
                  oder Verteidigung von Rechtsansprüchen.
                </li>
                <li>
                  Sie haben Widerspruch gegen die Verarbeitung gemäß Art. 21
                  Abs. 1 DSGVO eingelegt und es steht noch nicht fest, ob die
                  berechtigten Gründe des Verantwortlichen gegenüber Ihren
                  Gründen überwiegen.
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                12.5 Recht auf Datenübertragbarkeit
              </h3>
              <p className="text-grey-dark leading-relaxed mb-4">
                Sie haben das Recht, die Sie betreffenden personenbezogenen
                Daten, die Sie dem Verantwortlichen bereitgestellt haben, in
                einem strukturierten, gängigen und maschinenlesbaren Format zu
                erhalten. Außerdem haben Sie das Recht, diese Daten einem
                anderen Verantwortlichen ohne Behinderung durch den
                Verantwortlichen, dem die personenbezogenen Daten bereitgestellt
                wurden, zu übermitteln, sofern die Verarbeitung auf der
                Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO oder Art. 9 Abs. 2
                lit. a DSGVO oder auf einem Vertrag gemäß Art. 6 Abs. 1 lit. b
                DSGVO beruht und die Verarbeitung mithilfe automatisierter
                Verfahren erfolgt.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                12.6 Widerspruchsrecht
              </h3>
              <p className="text-grey-dark leading-relaxed mb-4">
                Sie haben das Recht, aus Gründen, die sich aus ihrer besonderen
                Situation ergeben, jederzeit gegen die Verarbeitung der Sie
                betreffenden personenbezogenen Daten, die aufgrund von Art. 6
                Abs. 1 lit. e oder f DSGVO erfolgt, Widerspruch einzulegen; dies
                gilt auch für ein auf diese Bestimmungen gestütztes Profiling.
              </p>
              <p className="text-grey-dark leading-relaxed mb-4">
                Der Verantwortliche verarbeitet die Sie betreffenden
                personenbezogenen Daten nicht mehr, es sei denn, er kann
                zwingende schutzwürdige Gründe für die Verarbeitung nachweisen,
                die Ihre Interessen, Rechte und Freiheiten überwiegen, oder die
                Verarbeitung dient der Geltendmachung, Ausübung oder
                Verteidigung von Rechtsansprüchen.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                12.7 Recht auf Widerruf der datenschutzrechtlichen Einwilligung
              </h3>
              <p className="text-grey-dark leading-relaxed mb-4">
                Sie haben das Recht, Ihre datenschutzrechtliche Einwilligung
                jederzeit zu widerrufen. Durch den Widerruf der Einwilligung
                wird die Rechtmäßigkeit der aufgrund der Einwilligung bis zum
                Widerruf erfolgten Verarbeitung nicht berührt.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                12.8 Automatisierte Entscheidung im Einzelfall einschließlich
                Profiling
              </h3>
              <p className="text-grey-dark leading-relaxed mb-4">
                Sie haben das Recht, nicht einer ausschließlich auf einer
                automatisierten Verarbeitung — einschließlich Profiling —
                beruhenden Entscheidung unterworfen zu werden, die Ihnen
                gegenüber rechtliche Wirkung entfaltet oder Sie in ähnlicher
                Weise erheblich beeinträchtigt. Dies gilt nicht, wenn die
                Entscheidung für den Abschluss oder die Erfüllung eines Vertrags
                zwischen Ihnen und dem Verantwortlichen erforderlich ist,
                aufgrund von Rechtsvorschriften der Union oder der
                Mitgliedstaaten, denen der Verantwortliche unterliegt, zulässig
                ist und diese Rechtsvorschriften angemessene Maßnahmen zur
                Wahrung Ihrer Rechte und Freiheiten sowie Ihrer berechtigten
                Interessen vorsehen oder mit Ihrer ausdrücklichen Einwilligung
                erfolgt.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                12.9 Recht auf Beschwerde bei einer Aufsichtsbehörde
              </h3>
              <p className="text-grey-dark leading-relaxed mb-4">
                Unbeschadet eines anderweitigen verwaltungsrechtlichen oder
                gerichtlichen Rechtsbehelfs steht Ihnen das Recht auf Beschwerde
                bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat
                ihres Aufenthaltsorts, ihres Arbeitsplatzes oder des Orts des
                mutmaßlichen Verstoßes, zu, wenn Sie der Ansicht sind, dass die
                Verarbeitung der Sie betreffenden personenbezogenen Daten gegen
                die DSGVO verstößt.
              </p>
              <p className="text-grey-dark leading-relaxed mb-4">
                <strong>Zuständige Aufsichtsbehörde:</strong> Die für uns
                zuständige Aufsichtsbehörde ist:
              </p>
              <p className="text-grey-dark leading-relaxed mb-4 ml-4">
                <strong>Der Landesbeauftragte für den Datenschutz und die
                Informationsfreiheit Baden-Württemberg (LfDI)</strong>
                <br />
                Königstraße 10a
                <br />
                70173 Stuttgart
                <br />
                Deutschland
                <br />
                <br />
                <strong>Telefon:</strong> +49 711 615541-0
                <br />
                <strong>E-Mail:</strong>{" "}
                <a
                  href="mailto:poststelle@lfdi.bwl.de"
                  className="text-black hover:underline"
                >
                  poststelle@lfdi.bwl.de
                </a>
                <br />
                <strong>Website:</strong>{" "}
                <a
                  href="https://www.baden-wuerttemberg.datenschutz.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:underline"
                >
                  https://www.baden-wuerttemberg.datenschutz.de
                </a>
              </p>
              <p className="text-grey-dark leading-relaxed mb-4">
                Die Aufsichtsbehörde, bei der die Beschwerde eingereicht wurde,
                unterrichtet den Beschwerdeführer über den Stand und die
                Ergebnisse der Beschwerde einschließlich der Möglichkeit eines
                gerichtlichen Rechtsbehelfs nach Art. 78 DSGVO.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                13. Datensicherheit
              </h2>
              <p className="text-grey-dark leading-relaxed mb-4">
                Wir verwenden innerhalb des Besuchs unserer Internetseite das
                verbreitete SSL-Verfahren (Secure Socket Layer) in Verbindung
                mit der jeweils höchsten Verschlüsselungsstufe, die von Ihrem
                Browser unterstützt wird. In der Regel handelt es sich dabei um
                eine 256 Bit Verschlüsselung. Falls Ihr Browser keine
                256-Bit-Verschlüsselung unterstützt, greifen wir auf 128-Bit v3
                Technologie zurück.
              </p>
              <p className="text-grey-dark leading-relaxed mb-4">
                Ob eine einzelne Seite unserer Internetpräsenz verschlüsselt
                übertragen wird, erkennen Sie an der geschlossenen Darstellung
                des Schüssel- bzw. Schloss-Symbols in der unteren Statusleiste
                Ihres Browsers.
              </p>
              <p className="text-grey-dark leading-relaxed mb-4">
                Wir bedienen uns im Übrigen geeigneter technischer und
                organisatorischer Sicherheitsmaßnahmen, um Ihre Daten gegen
                zufällige oder vorsätzliche Manipulationen, teilweisen oder
                vollständigen Verlust, Zerstörung oder gegen den unbefugten
                Zugriff Dritter zu schützen. Unsere Sicherheitsmaßnahmen werden
                entsprechend der technologischen Entwicklung fortlaufend
                verbessert.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                14. Automatisierte Entscheidungsfindung
              </h2>
              <p className="text-grey-dark leading-relaxed mb-4">
                Wir setzen automatisierte Systeme ein, die Entscheidungen ohne
                menschliches Eingreifen treffen können:
              </p>
              <ul className="list-disc list-inside text-grey-dark leading-relaxed mb-4 space-y-2 ml-4">
                <li>
                  <strong>Rate Limiting (Upstash):</strong> Bei Überschreitung
                  der zulässigen Anfrageanzahl wird der Zugriff automatisch für
                  bis zu 1 Stunde gesperrt. Dies dient dem Schutz vor
                  Missbrauch und DDoS-Angriffen.
                </li>
                <li>
                  <strong>CSP Reports:</strong> Bei wiederholten
                  Sicherheitsverstößen kann der Zugriff automatisch blockiert
                  werden.
                </li>
              </ul>
              <p className="text-grey-dark leading-relaxed mb-4">
                Diese automatisierten Entscheidungen beruhen auf
                vordefinierten Sicherheitsregeln und dienen dem Schutz unserer
                Website und der Nutzer. Sie haben das Recht, dieser
                automatisierten Entscheidung zu widersprechen (siehe Abschnitt
                12.8). In diesem Fall prüfen wir Ihren Fall manuell.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                15. Drittlandübermittlungen und Transfer Impact Assessment
              </h2>
              <p className="text-grey-dark leading-relaxed mb-4">
                Wir nutzen folgende Dienstleister mit Sitz in den USA:
              </p>
              <ul className="list-disc list-inside text-grey-dark leading-relaxed mb-4 space-y-2 ml-4">
                <li>Vercel Inc. (Hosting, Analytics, Speed Insights)</li>
                <li>Cal.com, Inc. (Terminbuchung)</li>
                <li>Resend, Inc. (E-Mail-Versand)</li>
                <li>Upstash Inc. (Rate Limiting)</li>
              </ul>
              <p className="text-grey-dark leading-relaxed mb-4">
                <strong>Rechtsgrundlage für Drittlandübermittlungen:</strong>
              </p>
              <p className="text-grey-dark leading-relaxed mb-4">
                Da die USA kein angemessenes Datenschutzniveau nach Art. 45
                DSGVO haben, stützen wir die Datenübermittlung auf
                Standardvertragsklauseln (SCC) nach Art. 46 Abs. 2 lit. c
                DSGVO. Wir haben mit allen genannten Dienstleistern SCC
                abgeschlossen, die die EU-Standardvertragsklauseln (2021/914)
                verwenden.
              </p>
              <p className="text-grey-dark leading-relaxed mb-4">
                <strong>Transfer Impact Assessment (TIA):</strong>
              </p>
              <p className="text-grey-dark leading-relaxed mb-4">
                Wir haben ein Transfer Impact Assessment durchgeführt, in dem
                wir die Risiken der Datenübermittlung in die USA bewertet haben.
                Dabei haben wir folgende Maßnahmen implementiert:
              </p>
              <ul className="list-disc list-inside text-grey-dark leading-relaxed mb-4 space-y-2 ml-4">
                <li>
                  Verschlüsselung der Daten während der Übertragung (TLS/SSL)
                </li>
                <li>
                  Verschlüsselung der Daten im Ruhezustand, soweit technisch
                  möglich
                </li>
                <li>
                  Minimierung der übermittelten Daten auf das technisch
                  Notwendige
                </li>
                <li>
                  Regelmäßige Überprüfung der Datenschutzmaßnahmen der
                  Dienstleister
                </li>
                <li>
                  Vereinbarung von Zusatzgarantien in den SCC, die über die
                  Standardklauseln hinausgehen
                </li>
              </ul>
              <p className="text-grey-dark leading-relaxed mb-4">
                <strong>Zusatzgarantien nach Schrems II:</strong>
              </p>
              <p className="text-grey-dark leading-relaxed mb-4">
                Wir haben mit allen Dienstleistern zusätzliche Garantien
                vereinbart, die über die Standardvertragsklauseln hinausgehen:
              </p>
              <ul className="list-disc list-inside text-grey-dark leading-relaxed mb-4 space-y-2 ml-4">
                <li>
                  Verpflichtung zur Meldung von Zugriffen durch
                  Strafverfolgungsbehörden, soweit rechtlich zulässig
                </li>
                <li>
                  Verpflichtung zur Prüfung der Rechtmäßigkeit von
                  Zugriffsanfragen durch Behörden
                </li>
                <li>
                  Verpflichtung zur Nutzung von Verschlüsselungstechnologien
                </li>
                <li>
                  Recht auf Information über Zugriffe durch Behörden, soweit
                  rechtlich zulässig
                </li>
              </ul>
              <p className="text-grey-dark leading-relaxed mb-4">
                <strong>Ihre Rechte bei Drittlandübermittlungen:</strong>
              </p>
              <p className="text-grey-dark leading-relaxed mb-4">
                Sie haben das Recht, Auskunft über die konkreten
                Sicherheitsmaßnahmen zu erhalten, die wir implementiert haben.
                Bei Fragen wenden Sie sich bitte an{" "}
                <a
                  href="mailto:info@slaide.de"
                  className="text-black hover:underline"
                >
                  info@slaide.de
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                16. Aktualität und Änderung dieser Datenschutzerklärung
              </h2>
              <p className="text-grey-dark leading-relaxed mb-4">
                Diese Datenschutzerklärung ist aktuell gültig und hat den Stand{" "}
                {new Date().toLocaleDateString("de-DE", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
                .
              </p>
              <p className="text-grey-dark leading-relaxed mb-4">
                Durch die Weiterentwicklung unserer Website und Angebote darüber
                oder aufgrund geänderter gesetzlicher beziehungsweise
                behördlicher Vorgaben kann es notwendig werden, diese
                Datenschutzerklärung zu ändern. Die jeweils aktuelle
                Datenschutzerklärung kann jederzeit auf der Website unter dem
                Link "Datenschutz" von Ihnen abgerufen und ausgedruckt werden.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
