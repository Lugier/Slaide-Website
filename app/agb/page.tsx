import type { Metadata } from "next";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "AGB | Slaide",
  description: "Allgemeine Geschäftsbedingungen von Slaide",
};

export default function AGBPage(): JSX.Element {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white pt-24 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-semibold mb-8">
            Allgemeine Geschäftsbedingungen
          </h1>
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
                Die nachfolgenden Allgemeinen Geschäftsbedingungen (AGB) regeln
                die Nutzung der Dokumentenprüfungs-Software "Slaide Review" (im
                Folgenden "Service" oder "Dienstleistung") der Slaide UG (in
                Gründung) (im Folgenden "Anbieter" oder "wir").
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                1. Geltungsbereich und Vertragspartner
              </h2>
              <p className="text-grey-dark leading-relaxed mb-4">
                <strong>1.1</strong> Diese AGB gelten für alle Leistungen des
                Anbieters im Rahmen der Bereitstellung der Software "Slaide
                Review" zur Prüfung von Dokumenten (PDF, PPTX, DOCX).
              </p>
              <p className="text-grey-dark leading-relaxed mb-4">
                <strong>1.2</strong> Vertragspartner ist:
              </p>
              <p className="text-grey-dark leading-relaxed mb-4 ml-4">
                <strong>Slaide UG (in Gründung)</strong>
                <br />
                <strong>Neckarstraße 12</strong>
                <br />
                <strong>74257 Untereisesheim</strong>
                <br />
                <strong>Deutschland</strong>
                <br />
                <br />
                <strong>E-Mail:</strong>{" "}
                <a
                  href="mailto:kontakt@slaide.de"
                  className="text-black hover:underline"
                >
                  kontakt@slaide.de
                </a>
              </p>
              <p className="text-grey-dark leading-relaxed mb-4">
                <strong>1.3</strong> Abweichende, entgegenstehende oder
                ergänzende AGB des Kunden werden nicht Vertragsbestandteil, es
                sei denn, ihrer Geltung wird ausdrücklich schriftlich
                zugestimmt.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                2. Leistungsbeschreibung
              </h2>
              <p className="text-grey-dark leading-relaxed mb-4">
                <strong>2.1</strong> Der Anbieter stellt eine cloud-basierte
                Software zur Verfügung, die Dokumente (PDF, PPTX, DOCX) auf
                Fehler, Inkonsistenzen, logische Widersprüche und inhaltliche
                Probleme prüft.
              </p>
              <p className="text-grey-dark leading-relaxed mb-4">
                <strong>2.2</strong> Der Service umfasst folgende Prüfungen:
              </p>
              <ul className="list-disc list-inside text-grey-dark leading-relaxed mb-4 space-y-2 ml-4">
                <li>Rechtschreibung und Grammatik</li>
                <li>Formatierungs-Checks</li>
                <li>Einfache Plausibilitätsprüfungen</li>
                <li>Cross-Document Consistency (bei Standard Verification)</li>
                <li>Mathematische Neuberechnung (bei Standard Verification)</li>
                <li>Argumentations-Logik (bei Standard Verification)</li>
              </ul>
              <p className="text-grey-dark leading-relaxed mb-4">
                <strong>2.3</strong> Der Umfang der Prüfungen richtet sich nach
                dem gewählten Tarif (Lite Audit oder Standard Verification).
              </p>
              <p className="text-grey-dark leading-relaxed mb-4">
                <strong>2.4</strong> Der Anbieter erbringt die Leistung mit der
                gebotenen Sorgfalt. Eine Garantie für die Vollständigkeit oder
                Fehlerfreiheit der Prüfung kann nicht übernommen werden. Der
                Service dient als Unterstützungstool und ersetzt nicht die
                eigenverantwortliche Prüfung durch den Nutzer.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                3. Vertragsschluss
              </h2>
              <p className="text-grey-dark leading-relaxed mb-4">
                <strong>3.1</strong> Der Vertrag kommt durch die Annahme der
                Bestellung durch den Anbieter zustande. Die Annahme kann
                ausdrücklich oder durch die Bereitstellung des Services
                erfolgen.
              </p>
              <p className="text-grey-dark leading-relaxed mb-4">
                <strong>3.2</strong> Der Kunde bestätigt mit der Nutzung des
                Services, dass er die AGB gelesen, verstanden und akzeptiert
                hat.
              </p>
              <p className="text-grey-dark leading-relaxed mb-4">
                <strong>3.3</strong> Der Anbieter speichert den Vertragstext und
                sendet dem Kunden die Bestelldaten per E-Mail zu. Die AGB können
                jederzeit auf der Website abgerufen werden.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                4. Preise und Zahlungsbedingungen
              </h2>
              <p className="text-grey-dark leading-relaxed mb-4">
                <strong>4.1</strong> Alle Preise verstehen sich in Euro (€) und
                enthalten die gesetzliche Mehrwertsteuer.
              </p>
              <p className="text-grey-dark leading-relaxed mb-4">
                <strong>4.2</strong> Die Abrechnung erfolgt nutzungsbasiert pro
                verarbeiteter Seite. Eine Seite entspricht einer Seite eines
                PDF-Dokuments, einer Folie einer Präsentation (PPTX) oder einer
                Seite eines Word-Dokuments (DOCX).
              </p>
              <p className="text-grey-dark leading-relaxed mb-4">
                <strong>4.3</strong> Die aktuellen Preise betragen:
              </p>
              <ul className="list-disc list-inside text-grey-dark leading-relaxed mb-4 space-y-2 ml-4">
                <li>
                  <strong>Lite Audit:</strong> 2,19 € pro verarbeitete Seite
                </li>
                <li>
                  <strong>Standard Verification:</strong> 2,99 € pro
                  verarbeitete Seite
                </li>
              </ul>
              <p className="text-grey-dark leading-relaxed mb-4">
                <strong>4.4</strong> Für Organisationen mit mehr als 5.000
                Seiten pro Monat werden individuelle Enterprise-Verträge mit
                volumenbasierten Preisen angeboten.
              </p>
              <p className="text-grey-dark leading-relaxed mb-4">
                <strong>4.5</strong> Die Zahlungsmodalitäten werden individuell
                vereinbart. Bei Enterprise-Verträgen erfolgt die
                Rechnungsstellung monatlich oder nach Erreichen eines bestimmten
                Verbrauchsvolumens. Die Zahlungsmethoden werden im Rahmen der
                Vertragsverhandlung festgelegt.
              </p>
              <p className="text-grey-dark leading-relaxed mb-4">
                <strong>4.6</strong> Bei Zahlungsverzug werden Verzugszinsen in
                Höhe von 9 Prozentpunkten über dem Basiszinssatz berechnet. Der
                Anbieter behält sich vor, bei Zahlungsverzug die Leistung
                einzustellen.
              </p>
              <p className="text-grey-dark leading-relaxed mb-4">
                <strong>4.7</strong> Der Anbieter behält sich das Recht vor, die
                Preise mit einer Frist von 4 Wochen zu ändern. Widerspricht der
                Kunde der Preiserhöhung nicht innerhalb von 2 Wochen nach
                Bekanntgabe, gilt die Preiserhöhung als genehmigt. Der Kunde
                wird in der Bekanntgabe der Preiserhöhung auf diese Rechtsfolge
                hingewiesen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                5. Nutzung des Services
              </h2>
              <p className="text-grey-dark leading-relaxed mb-4">
                <strong>5.1</strong> Der Kunde erhält nach Vertragsschluss
                Zugangsdaten für den Service. Der Kunde ist verpflichtet, die
                Zugangsdaten geheim zu halten und Dritten nicht zugänglich zu
                machen.
              </p>
              <p className="text-grey-dark leading-relaxed mb-4">
                <strong>5.2</strong> Der Kunde verpflichtet sich, den Service
                nur im Rahmen der gesetzlichen Bestimmungen und dieser AGB zu
                nutzen.
              </p>
              <p className="text-grey-dark leading-relaxed mb-4">
                <strong>5.3</strong> Es ist dem Kunden untersagt:
              </p>
              <ul className="list-disc list-inside text-grey-dark leading-relaxed mb-4 space-y-2 ml-4">
                <li>den Service für rechtswidrige Zwecke zu nutzen</li>
                <li>
                  den Service zu nutzen, um urheberrechtlich geschützte Inhalte
                  ohne Berechtigung zu verarbeiten
                </li>
                <li>
                  den Service zu nutzen, um personenbezogene Daten ohne
                  Rechtsgrundlage zu verarbeiten
                </li>
                <li>
                  verschleiernde oder automatisierte Mittel einzusetzen, um die
                  Nutzung des Services zu manipulieren
                </li>
                <li>
                  den Service zu nutzen, um Malware, Viren oder andere
                  schädliche Inhalte zu verbreiten
                </li>
              </ul>
              <p className="text-grey-dark leading-relaxed mb-4">
                <strong>5.4</strong> Der Kunde ist für alle Handlungen
                verantwortlich, die unter Verwendung seiner Zugangsdaten
                erfolgen.
              </p>
              <p className="text-grey-dark leading-relaxed mb-4">
                <strong>5.5</strong> Der Anbieter behält sich vor, bei Verstößen
                gegen diese AGB den Zugang zum Service zu sperren oder zu
                kündigen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                6. Verfügbarkeit und Wartung
              </h2>
              <p className="text-grey-dark leading-relaxed mb-4">
                <strong>6.1</strong> Der Anbieter bemüht sich um eine hohe
                Verfügbarkeit des Services. Eine Verfügbarkeit von 99,5% pro
                Monat wird angestrebt, jedoch nicht garantiert.
              </p>
              <p className="text-grey-dark leading-relaxed mb-4">
                <strong>6.2</strong> Der Anbieter behält sich vor, den Service
                für Wartungsarbeiten vorübergehend einzustellen.
                Wartungsarbeiten werden nach Möglichkeit außerhalb der
                Geschäftszeiten durchgeführt. Der Kunde wird über geplante
                Wartungsarbeiten mit angemessener Vorlaufzeit informiert.
              </p>
              <p className="text-grey-dark leading-relaxed mb-4">
                <strong>6.3</strong> Der Anbieter übernimmt keine Haftung für
                Ausfälle, die auf höhere Gewalt, Störungen der
                Telekommunikationsnetze oder auf Fehler Dritter zurückzuführen
                sind.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                7. Datenschutz und Datensicherheit
              </h2>
              <p className="text-grey-dark leading-relaxed mb-4">
                <strong>7.1</strong> Der Anbieter verarbeitet personenbezogene
                Daten im Rahmen der Nutzung des Services. Die Einzelheiten
                ergeben sich aus der Datenschutzerklärung, die auf der Website
                abrufbar ist.
              </p>
              <p className="text-grey-dark leading-relaxed mb-4">
                <strong>7.2</strong> Der Anbieter verpflichtet sich, die vom
                Kunden hochgeladenen Dokumente vertraulich zu behandeln und nur
                für die Zwecke der Prüfung zu verwenden.
              </p>
              <p className="text-grey-dark leading-relaxed mb-4">
                <strong>7.3</strong> Dokumente werden nach Abschluss der Prüfung
                gelöscht, es sei denn, der Kunde hat ausdrücklich einer längeren
                Speicherung zugestimmt oder eine gesetzliche
                Aufbewahrungspflicht besteht.
              </p>
              <p className="text-grey-dark leading-relaxed mb-4">
                <strong>7.4</strong> Der Anbieter setzt angemessene technische
                und organisatorische Maßnahmen ein, um die Sicherheit der Daten
                zu gewährleisten.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                8. Gewährleistung und Haftung
              </h2>
              <p className="text-grey-dark leading-relaxed mb-4">
                <strong>8.1</strong> Der Anbieter haftet unbeschränkt für
                Vorsatz und grobe Fahrlässigkeit sowie nach Maßgabe des
                Produkthaftungsgesetzes.
              </p>
              <p className="text-grey-dark leading-relaxed mb-4">
                <strong>8.2</strong> Bei leichter Fahrlässigkeit haftet der
                Anbieter nur bei Verletzung einer wesentlichen Vertragspflicht,
                deren Erfüllung die ordnungsgemäße Durchführung des Vertrages
                überhaupt erst ermöglicht und auf deren Einhaltung der Kunde
                regelmäßig vertrauen darf (Kardinalpflicht). In diesem Fall ist
                die Haftung auf den bei Vertragsschluss vorhersehbaren,
                vertragstypischen Schaden begrenzt.
              </p>
              <p className="text-grey-dark leading-relaxed mb-4">
                <strong>8.3</strong> Die vorstehenden Haftungsbeschränkungen
                gelten nicht bei Verletzung des Lebens, des Körpers oder der
                Gesundheit sowie im Falle zwingender gesetzlicher Bestimmungen.
              </p>
              <p className="text-grey-dark leading-relaxed mb-4">
                <strong>8.4</strong> Der Anbieter übernimmt keine Gewährleistung
                für die Vollständigkeit oder Fehlerfreiheit der
                Prüfungsergebnisse. Der Service dient als Unterstützungstool und
                ersetzt nicht die eigenverantwortliche Prüfung durch den Kunden.
              </p>
              <p className="text-grey-dark leading-relaxed mb-4">
                <strong>8.5</strong> Der Anbieter haftet nicht für Schäden, die
                durch die Nutzung der Prüfungsergebnisse durch den Kunden
                entstehen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Widerrufsrecht</h2>
              <p className="text-grey-dark leading-relaxed mb-4">
                <strong>9.1</strong> Verbraucher haben ein Widerrufsrecht nach
                Maßgabe der folgenden Bestimmungen, wobei ein Verbraucher jede
                natürliche Person ist, die ein Rechtsgeschäft zu Zwecken
                abschließt, die überwiegend weder ihrer gewerblichen noch ihrer
                selbständigen beruflichen Tätigkeit zugerechnet werden können:
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                Widerrufsbelehrung
              </h3>
              <p className="text-grey-dark leading-relaxed mb-4">
                <strong>Widerrufsrecht</strong>
              </p>
              <p className="text-grey-dark leading-relaxed mb-4">
                Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von
                Gründen diesen Vertrag zu widerrufen.
              </p>
              <p className="text-grey-dark leading-relaxed mb-4">
                Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des
                Vertragsschlusses.
              </p>
              <p className="text-grey-dark leading-relaxed mb-4">
                Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (Slaide UG (in
                Gründung), Neckarstraße 12, 74257 Untereisesheim, Deutschland, E-Mail:
                kontakt@slaide.de) mittels einer eindeutigen Erklärung (z.B. ein
                mit der Post versandter Brief, Telefax oder E-Mail) über Ihren
                Entschluss, diesen Vertrag zu widerrufen, informieren. Sie
                können dafür das beigefügte Muster-Widerrufsformular verwenden,
                das jedoch nicht vorgeschrieben ist.
              </p>
              <p className="text-grey-dark leading-relaxed mb-4">
                <strong>Folgen des Widerrufs</strong>
              </p>
              <p className="text-grey-dark leading-relaxed mb-4">
                Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle
                Zahlungen, die wir von Ihnen erhalten haben, unverzüglich und
                spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an
                dem die Mitteilung über Ihren Widerruf dieses Vertrags bei uns
                eingegangen ist. Für diese Rückzahlung verwenden wir dasselbe
                Zahlungsmittel, das Sie bei der ursprünglichen Transaktion
                eingesetzt haben, es sei denn, mit Ihnen wurde ausdrücklich
                etwas anderes vereinbart; in keinem Fall werden Ihnen wegen
                dieser Rückzahlung Entgelte berechnet.
              </p>
              <p className="text-grey-dark leading-relaxed mb-4">
                <strong>Ende der Widerrufsbelehrung</strong>
              </p>

              <p className="text-grey-dark leading-relaxed mb-4">
                <strong>9.2</strong> Das Widerrufsrecht erlischt vorzeitig, wenn
                der Anbieter mit der Ausführung der Dienstleistung mit
                ausdrücklicher Zustimmung des Verbrauchers vor Ablauf der
                Widerrufsfrist begonnen hat oder der Verbraucher diese selbst
                veranlasst hat.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Kündigung</h2>
              <p className="text-grey-dark leading-relaxed mb-4">
                <strong>10.1</strong> Beide Parteien können den Vertrag
                jederzeit mit einer Frist von 4 Wochen zum Monatsende kündigen.
              </p>
              <p className="text-grey-dark leading-relaxed mb-4">
                <strong>10.2</strong> Das Recht zur außerordentlichen Kündigung
                aus wichtigem Grund bleibt unberührt. Ein wichtiger Grund liegt
                insbesondere vor, wenn:
              </p>
              <ul className="list-disc list-inside text-grey-dark leading-relaxed mb-4 space-y-2 ml-4">
                <li>
                  der Kunde gegen wesentliche Pflichten aus diesem Vertrag
                  verstößt und trotz Abmahnung den Vertragsverstoß nicht beendet
                </li>
                <li>
                  der Kunde mit Zahlungen in Verzug ist und trotz Mahnung nicht
                  zahlt
                </li>
                <li>
                  der Anbieter den Service aus betriebswirtschaftlichen Gründen
                  einstellt
                </li>
              </ul>
              <p className="text-grey-dark leading-relaxed mb-4">
                <strong>10.3</strong> Kündigungen müssen schriftlich erfolgen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                11. Änderungen der AGB
              </h2>
              <p className="text-grey-dark leading-relaxed mb-4">
                <strong>11.1</strong> Der Anbieter behält sich vor, diese AGB zu
                ändern. Änderungen werden dem Kunden per E-Mail oder durch
                Veröffentlichung auf der Website mitgeteilt.
              </p>
              <p className="text-grey-dark leading-relaxed mb-4">
                <strong>11.2</strong> Widerspricht der Kunde der Änderung nicht
                innerhalb von 6 Wochen nach Bekanntgabe, gilt die Änderung als
                genehmigt. Der Kunde wird in der Bekanntgabe der Änderung auf
                diese Rechtsfolge hingewiesen.
              </p>
              <p className="text-grey-dark leading-relaxed mb-4">
                <strong>11.3</strong> Widerspricht der Kunde der Änderung, kann
                der Anbieter den Vertrag zum Zeitpunkt des Wirksamwerdens der
                Änderung kündigen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                12. Schlussbestimmungen
              </h2>
              <p className="text-grey-dark leading-relaxed mb-4">
                <strong>12.1</strong> Es gilt das Recht der Bundesrepublik
                Deutschland unter Ausschluss des UN-Kaufrechts.
              </p>
              <p className="text-grey-dark leading-relaxed mb-4">
                <strong>12.2</strong> Erfüllungsort und Gerichtsstand für alle
                Streitigkeiten aus diesem Vertrag ist, soweit der Kunde
                Kaufmann, juristische Person des öffentlichen Rechts oder
                öffentlich-rechtliches Sondervermögen ist, der Sitz des
                Anbieters.
              </p>
              <p className="text-grey-dark leading-relaxed mb-4">
                <strong>12.3</strong> Sollten einzelne Bestimmungen dieser AGB
                unwirksam sein oder werden, so bleibt die Wirksamkeit der
                übrigen Bestimmungen unberührt. Die unwirksame Bestimmung soll
                durch eine wirksame ersetzt werden, die dem wirtschaftlichen
                Zweck der unwirksamen Bestimmung am nächsten kommt.
              </p>
              <p className="text-grey-dark leading-relaxed mb-4">
                <strong>12.4</strong> Der Anbieter ist nicht verpflichtet, an
                Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
