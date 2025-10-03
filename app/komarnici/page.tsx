import { CheckCircle2, Bug, Wind, Home } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import SectionIntro from "@/components/shared/SectionIntro";
import FeaturesGrid from "@/components/shared/FeaturesGrid";
import ImageGallery from "@/components/shared/ImageGallery";
import CTASection from "@/components/shared/CTASection";

export default function KomarniciPage() {
  const images = [
    "/optimized/komarnik.webp",
    "/optimized/komarnik1.webp",
    "/optimized/komarnik2.webp",
    "/optimized/komarnik3.webp",
    "/optimized/komarnik4.webp",
    "/optimized/komarnik5.webp",
    "/optimized/komarnik6.webp",
    "/optimized/komarnik7.webp",
    "/optimized/komarnik8.webp",
  ];

  const features = [
    {
      icon: Bug,
      title: "Zaštita od insekata",
      description: "100% efikasna barijera protiv svih vrsta insekata",
    },
    {
      icon: Wind,
      title: "Ventilacija",
      description: "Slobodan protok vazduha i prirodno provetravanje",
    },
    {
      icon: Home,
      title: "Prilagođeno",
      description: "Izrada po meri za svaki prozor ili vrata",
    },
    {
      icon: CheckCircle2,
      title: "Izdržljivost",
      description: "ALU ram ne rđa, fiberglas mreža visokog kvaliteta",
    },
  ];

  return (
    <div className="min-h-screen">
      <PageHero
        title="ALU Komarnici"
        subtitle="Zaštita od insekata uz savršenu ventilaciju"
        imageSrc="/optimized/komarnik.webp"
        imageAlt="ALU komarnici"
      />

      <SectionIntro
        title="Zašto izabrati ALU komarnike?"
        description="Aluminijumski komarnici su neophodni tokom toplog dela godine. Omogućavaju prirodnu ventilaciju prostora dok štite od komaraca, muva i drugih insekata. Izrađeni su od kvalitetnog aluminijuma i fiberglasa, što garantuje dugotrajnost i pouzdanost."
      >
        <FeaturesGrid features={features} />
      </SectionIntro>

      {/* Tipovi komarnika - custom content */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary">
            Tipovi ALU Komarnika
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-muted p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-primary">
                Fiksni komarnici
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Montaža sa unutrašnje ili spoljne strane prozora</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Ekonomično rešenje</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Jednostavna ugradnja i održavanje</span>
                </li>
              </ul>
            </div>

            <div className="bg-muted p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-primary">
                Roletni komarnici
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Vertikalno spuštanje i podizanje</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Ne zauzima prostor kada nije u upotrebi</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Elegantan i diskretan izgled</span>
                </li>
              </ul>
            </div>

            <div className="bg-muted p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-primary">
                Klizni komarnici
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Horizontalno klizanje levo-desno</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Savršeni za balkonska vrata</span>
                </li>
              </ul>
            </div>

            <div className="bg-muted p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-primary">
                Plise komarnici
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Harmonika sistem - nabiranje mrežice</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Kompaktan i funkcionalan</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ImageGallery
        images={images}
        title="Naši Radovi - ALU Komarnici"
        altPrefix="Komarnik"
      />

      <CTASection
        title="Zainteresovani za ALU komarnike?"
        description="Kontaktirajte nas za besplatnu konsultaciju i merenje. Naši stručnjaci će vam pomoći da odaberete najbolje rešenje."
      />
    </div>
  );
}
