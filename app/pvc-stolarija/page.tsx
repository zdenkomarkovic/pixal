import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import SectionIntro from "@/components/shared/SectionIntro";
import FeaturesGrid from "@/components/shared/FeaturesGrid";
import CTASection from "@/components/shared/CTASection";
import AnimatedSection from "@/components/AnimatedSection";
import SeamlessWelding from "@/components/shared/SeamlessWelding";

export default function PVCStolarijaPage() {
  const features = [
    {
      icon: CheckCircle2,
      title: "Energetska efikasnost",
      description: "Odlična toplotna i zvučna izolacija",
    },
    {
      icon: CheckCircle2,
      title: "Izdržljivost",
      description: "Otpornost na vremenske uticaje",
    },
    {
      icon: CheckCircle2,
      title: "Lako održavanje",
      description: "Ne zahteva bojenje ili lakiranje",
    },
    {
      icon: CheckCircle2,
      title: "Estetika",
      description: "Moderan dizajn i različite boje",
    },
  ];

  return (
    <div className="min-h-screen">
      <PageHero
        title="PVC Stolarija"
        subtitle="Vrhunski Kommerling profili i Siegenia okov"
        imageSrc="/optimized/profil.webp"
        imageAlt="PVC stolarija"
      />

      <SectionIntro
        title="Zašto izabrati PVC stolariju?"
        description="PVC stolarija predstavlja idealno rešenje za moderne domove i poslovne prostore. Kombinacija kvalitetnih Kommerling profila i renomiranog Siegenia okova garantuje dugotrajnost, energetsku efikasnost i estetski izgled."
      >
        <FeaturesGrid features={features} />
      </SectionIntro>

      {/* Kommerling 70AD */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <AnimatedSection>
              <div className="relative aspect-square mx-10">
                <Image
                  src="/optimized/70a1.webp"
                  alt="Kommerling 70AD"
                  fill
                  className="object-cover rounded-lg"
                  unoptimized
                />
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div>
                <h2 className="text-3xl font-bold mb-4 text-primary">
                  Kommerling 70AD
                </h2>
                <p className="text-lg mb-4">
                  5-komorni sistem sa dubinom ugradnje od 70mm. Idealan za
                  standardne zahteve toplotne i zvučne izolacije.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Dubina ugradnje: 70mm</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>5-komorni sistem profila</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Ekonomično rešenje</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Kommerling 76AD */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <AnimatedSection>
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold mb-4 text-primary">
                  Kommerling 76AD
                </h2>
                <p className="text-lg mb-4">
                  5-komorni sistem sa dubinom ugradnje od 76mm. Vrhunska
                  toplotna izolacija za maksimalnu energetsku efikasnost.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Dubina ugradnje: 76mm</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>5-komorni sistem profila</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Maksimalna energetska efikasnost</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="relative aspect-square mx-10 order-1 md:order-2">
                <Image
                  src="/optimized/5_System-76-AD-Standard_weiss_web.webp"
                  alt="Kommerling 76AD"
                  fill
                  className="object-cover rounded-lg"
                  unoptimized
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Kommerling 76MD */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <AnimatedSection>
              <div className="relative  aspect-square mx-10">
                <Image
                  src="/optimized/profil.webp"
                  alt="Kommerling 76MD"
                  fill
                  className="object-cover rounded-lg"
                  unoptimized
                />
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div>
                <h2 className="text-3xl font-bold mb-4 text-primary">
                  Kommerling 76MD
                </h2>
                <p className="text-lg mb-4">
                  Premium sistem - kombinacija performansi i cene. Idealan za
                  renovacije i adaptacije.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Dubina ugradnje: 76mm</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Maksimalna energetska efikasnost</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Vrhunske performanse</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Kommerling 88MD */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <AnimatedSection>
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold mb-4 text-primary">
                  Kommerling 88MD
                </h2>
                <p className="text-lg mb-4">
                  Premium sistem sa dubinom ugradnje od 88mm. Najviši nivo
                  toplotne i zvučne izolacije. Idealan za pasivne kuće i objekte
                  sa visokim zahtevima.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Dubina ugradnje: 88mm</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>7-komorni sistem profila</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>Idealan za pasivne kuće</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="relative  aspect-square mx-10 order-1 md:order-2">
                <Image
                  src="/optimized/KOEMMERLING-88-MD-Standard-weiss.webp"
                  alt="Kommerling 88MD"
                  fill
                  className="object-cover aspect-square rounded-lg"
                  unoptimized
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <SeamlessWelding />

      <CTASection
        title="Zainteresovani za PVC stolariju?"
        description="Kontaktirajte nas za besplatnu konsultaciju i ponudu. Naši stručnjaci će vam pomoći da odaberete najbolje rešenje za vaše potrebe."
      />

      {/* Siegenia Okov */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              Siegenia Okov
            </h2>
            <p className="text-lg md:text-xl mb-8">
              Koristimo isključivo Siegenia okov - svetski lider u proizvodnji
              okova za prozore i vrata. Siegenia okov garantuje:
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            <AnimatedSection>
              <div className="bg-muted p-6 rounded-lg h-full">
                <h3 className="text-xl font-semibold mb-3">Dugotrajnost</h3>
                <p>Testiran i sertifikovan za preko 20,000 ciklusa otvaranja</p>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="bg-muted p-6 rounded-lg h-full">
                <h3 className="text-xl font-semibold mb-3">Sigurnost</h3>
                <p>Višestruka zaključavanja i anti-provalna zaštita</p>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="bg-muted p-6 rounded-lg h-full">
                <h3 className="text-xl font-semibold mb-3">Funkcionalnost</h3>
                <p>Glatko i lako rukovanje kroz ceo vek trajanja</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stakla */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              Sve vrste stakla
            </h2>
            <p className="text-lg md:text-xl mb-8">
              Nudimo širok asortiman stakala prema vašim potrebama:
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <AnimatedSection>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-primary">
                  Standardna stakla
                </h3>
                <ul className="space-y-2">
                  <li>• Dvoslojna i troslojna stakla</li>
                  <li>• Low-E stakla (nisko emisiona)</li>
                  <li>• Termo stakla sa toplom ramom</li>
                </ul>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-primary">
                  Specijalna stakla
                </h3>
                <ul className="space-y-2">
                  <li>• Protivprovalna stakla</li>
                  <li>• Protivpožarna stakla</li>
                  <li>• Zvučna izolacija</li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
