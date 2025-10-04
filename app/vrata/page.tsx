import Image from "next/image";
import { CheckCircle2, ShieldCheck, Key, Home, DoorOpen } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import SectionIntro from "@/components/shared/SectionIntro";
import FeaturesGrid from "@/components/shared/FeaturesGrid";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/AnimatedSection";

export default function VrataPage() {
  const features = [
    {
      icon: DoorOpen,
      title: "Ulazna vrata",
      description: "Prvi utisak vašeg doma",
    },
    {
      icon: ShieldCheck,
      title: "Sigurnosna vrata",
      description: "Maksimalna zaštita i sigurnost",
    },
    {
      icon: Home,
      title: "Sobna vrata",
      description: "Elegancija unutar vašeg doma",
    },
    {
      icon: Key,
      title: "Rolo vrata",
      description: "Praktično rešenje za garaže",
    },
  ];

  const ulaznaImages = [
    "/optimized/vrata4.webp",
    "/optimized/vrata7.webp",
    "/optimized/vrata1.webp",
  ];
  const sigurnosnaImages = [
    "/optimized/IMG-bf391647863fd88ee6c46a16073ecae1-V.webp",
    "/optimized/vrata8.webp",
    "/optimized/vrata.webp",
  ];
  const sobnaImages = [
    "/optimized/vrata6.webp",
    "/optimized/vrata5.webp",
    "/optimized/vrata2.webp",
  ];
  const roloImages = [
    "/optimized/rolo.webp",
    "/optimized/IMG-e17958a52cc8124ba1543e8a12b71ce4-V.webp",
  ];

  return (
    <div className="min-h-screen">
      <PageHero
        title="Vrata"
        subtitle="Ulazna, Sigurnosna, Sobna i Rolo vrata po meri"
        imageSrc="/optimized/2149301118.webp"
        imageAlt="Vrata"
      />

      <SectionIntro
        title="Naša ponuda vrata"
        description="Nudimo kompletnu ponudu vrata za sve potrebe - od ulaznih i sigurnosnih vrata za maksimalnu zaštitu, preko elegantnih sobnih vrata, do praktičnih rolo vrata. Sva vrata izrađujemo po meri i prilagođavamo vašim potrebama."
      >
        <FeaturesGrid features={features} />
      </SectionIntro>

      {/* Ulazna vrata */}
      <section className="py-16 px-4 bg-background">
        <div className="container px-2 md:px-4 mx-auto">
          <AnimatedSection>
            {" "}
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-primary">
              Ulazna Vrata
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-4 gap-6 mb-8 items-center">
            <AnimatedSection>
              {" "}
              <div>
                <p className="text-lg mb-6">
                  Ulazna vrata su vizit karta vašeg doma. Nudimo širok asortiman
                  modernih i klasičnih dizajna.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>ALU ili PVC konstrukcija sa termoprekidom</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Višeslojna izolacija</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Kvalitetni bravar sistem</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
            {ulaznaImages.map((img, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                {" "}
                <div className="relative aspect-[8/10]">
                  <Image
                    src={img}
                    alt={`Ulazna vrata ${i + 1}`}
                    fill
                    className="object-cover rounded-lg"
                    unoptimized
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Sigurnosna vrata */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            {" "}
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-primary">
              Sigurnosna Vrata
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-4 gap-6 mb-8 items-center">
            {sigurnosnaImages.map((img, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                {" "}
                <div className="relative  aspect-[8/10]">
                  <Image
                    src={img}
                    alt={`Sigurnosna vrata ${i + 1}`}
                    fill
                    className="object-cover rounded-lg"
                    unoptimized
                  />
                </div>
              </AnimatedSection>
            ))}

            <AnimatedSection delay={0.4}>
              {" "}
              <div className="order-1 md:order-2">
                <p className="text-lg mb-6">
                  Sigurnosna vrata pružaju maksimalnu zaštitu za vaš dom.
                  Sertifikovana za otpornost na provalu.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Čelični okvir i krilo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Višestruko zaključavanje (5-7 tačaka)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Protivprovalni cilindar</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Sobna vrata */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-primary">
              Sobna Vrata
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-4 items-center gap-8 mb-8">
            <AnimatedSection>
              {" "}
              <div>
                <p className="text-lg mb-6">
                  Sobna vrata doprinose unutrašnjem dizajnu vašeg doma.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Drvena, MDF ili CPL krila</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Puna ili ostakljena krila</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Širok spektar boja</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
            {sobnaImages.map((img, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="relative aspect-[8/10]">
                  <Image
                    src={img}
                    alt={`Sobna vrata ${i + 1}`}
                    fill
                    className="object-cover rounded-lg"
                    unoptimized
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Rolo vrata */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            {" "}
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-primary">
              Rolo Vrata
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 items-center gap-8 mb-8">
            {roloImages.map((img, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                {" "}
                <div className="relative aspect-[15/10]">
                  <Image
                    src={img}
                    alt={`Rolo vrata ${i + 1}`}
                    fill
                    className="object-cover rounded-lg"
                    unoptimized
                  />
                </div>
              </AnimatedSection>
            ))}

            <AnimatedSection delay={0.3}>
              {" "}
              <div className="order-1 md:order-2">
                <p className="text-lg mb-6">
                  Rolo vrata su idealno rešenje za garaže, magacine i poslovne
                  prostore.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Aluminijumske lamele</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Ručno ili motorno upravljanje</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Daljinsko upravljanje</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <CTASection
        title="Zainteresovani za vrata?"
        description="Kontaktirajte nas za besplatnu konsultaciju i merenje. Naši stručnjaci će vam pomoći da odaberete najbolje rešenje za vaše potrebe."
      />
    </div>
  );
}
