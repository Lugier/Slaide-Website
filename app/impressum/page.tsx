import type { Metadata } from "next";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Impressum | Slaide",
  description: "Impressum von Slaide",
};

export default function ImpressumPage(): JSX.Element {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white pt-24 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-semibold mb-8">Impressum</h1>
          <div className="prose prose-gray max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Angaben gemäß § 5 TMG
              </h2>
              <p className="text-grey-dark leading-relaxed">
                <strong>Slaide UG (in Gründung)</strong>
                <br />
                <strong>Neckarstraße 12</strong>
                <br />
                <strong>74257 Untereisesheim</strong>
                <br />
                <strong>Deutschland</strong>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Kontakt</h2>
              <p className="text-grey-dark leading-relaxed">
                <strong>E-Mail:</strong>{" "}
                <a
                  href="mailto:kontakt@slaide.de"
                  className="text-black hover:underline"
                >
                  kontakt@slaide.de
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Vertreten durch</h2>
              <p className="text-grey-dark leading-relaxed">
                <strong>Nathalie Scholl</strong>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Registereintrag</h2>
              <p className="text-grey-dark leading-relaxed">
                <strong>Registergericht:</strong> (in Gründung)
                <br />
                <strong>Registernummer:</strong> (in Gründung)
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Umsatzsteuer-ID</h2>
              <p className="text-grey-dark leading-relaxed">
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a
                Umsatzsteuergesetz:
                <br />
                <strong>(in Gründung)</strong>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
              </h2>
              <p className="text-grey-dark leading-relaxed">
                <strong>Nathalie Scholl</strong>
                <br />
                <strong>Slaide UG (in Gründung)</strong>
                <br />
                <strong>Neckarstraße 12</strong>
                <br />
                <strong>74257 Untereisesheim</strong>
                <br />
                <strong>Deutschland</strong>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Haftungsausschluss
              </h2>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                Haftung für Inhalte
              </h3>
              <p className="text-grey-dark leading-relaxed mb-4">
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt.
                Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
                können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter
                sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen
                Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8
                bis 10 TMG sind wir als Diensteanbieter jedoch nicht
                verpflichtet, übermittelte oder gespeicherte fremde
                Informationen zu überwachen oder nach Umständen zu forschen, die
                auf eine rechtswidrige Tätigkeit hinweisen.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                Haftung für Links
              </h3>
              <p className="text-grey-dark leading-relaxed mb-4">
                Unser Angebot enthält Links zu externen Websites Dritter, auf
                deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
                diese fremden Inhalte auch keine Gewähr übernehmen. Für die
                Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
                oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
                wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
                überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
                Verlinkung nicht erkennbar. Eine permanente inhaltliche
                Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
                Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
                Bekanntwerden von Rechtsverletzungen werden wir derartige Links
                umgehend entfernen.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">Urheberrecht</h3>
              <p className="text-grey-dark leading-relaxed mb-4">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
                schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                Downloads und Kopien dieser Seite sind nur für den privaten,
                nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf
                dieser Seite nicht vom Betreiber erstellt wurden, werden die
                Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
                Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
                Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
                entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
                werden wir derartige Inhalte umgehend entfernen.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
