import { CheckCircle2, Sun, Eye, Thermometer } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import SectionIntro from "@/components/shared/SectionIntro";
import FeaturesGrid from "@/components/shared/FeaturesGrid";
import CTASection from "@/components/shared/CTASection";

export default function VenecijaneriPage() {
  const features = [
    {
      icon: Sun,
      title: "Kontrola svetlosti",
      description: "Precizno podešavanje količine svetla u prostoru",
    },
    {
      icon: Eye,
      title: "Privatnost",
      description: "Fleksibilna zaštita od pogleda spolja",
    },
    {
      icon: Thermometer,
      title: "Toplotna zaštita",
      description: "Smanjenje pregrevanja prostora",
    },
    {
      icon: CheckCircle2,
      title: "Estetika",
      description: "Moderan i elegantan dizajn",
    },
  ];

  return (
    <div className="min-h-screen">
      <PageHero
        title="Venecijaneri"
        subtitle="Elegantan način kontrole svetlosti i privatnosti"
        imageSrc="/optimized/prozor.webp"
        imageAlt="Venecijaneri"
      />

      <SectionIntro
        title="Zašto izabrati venecijanere?"
        description="Venecijaneri predstavljaju savršeno rešenje za kontrolu prirodnog svetla, privatnosti i toplotne zaštite. Sa mogućnošću preciznog podešavanja lamela, omogućavaju vam potpunu kontrolu nad osvetljenjem i privatnošću u vašem prostoru."
      >
        <FeaturesGrid features={features} />
      </SectionIntro>

      {/* Materijali */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary">
            Vrste Venecijanera
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-muted p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-primary">
                Aluminijumski venecijaneri
              </h3>
              <ul className="space-y-3 mx-auto w-fit">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Izdržljivi i dugotrajni</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Ne deformišu se od vlage</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Širina lamela: 16mm, 25mm, 50mm</span>
                </li>
              </ul>
            </div>

            {/* <div className="bg-muted p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-primary">
                Drveni venecijaneri
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Prirodan i topao izgled</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Ekskluzivan i elegantan dizajn</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Širina lamela: 50mm, 65mm</span>
                </li>
              </ul>
            </div> */}

            <div className="bg-muted p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-primary">
                PVC venecijaneri
              </h3>
              <ul className="space-y-3 mx-auto w-fit">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Ekonomično rešenje</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Otporni na vlagu i vlažnost</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Idealni za kupatila i kuhinje</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Zainteresovani za venecijanere?"
        description="Kontaktirajte nas za besplatnu konsultaciju i merenje. Naši stručnjaci će vam pomoći da odaberete najbolje rešenje."
      />
    </div>
  );
}
