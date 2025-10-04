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
              <div className="relative aspect-square">
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
                  Kommerling 70 AD
                </h2>
                <p className="text-lg mb-4">
                  Peti-komorni PVC profil ugradne dubine 70 mm sa duplo
                  brtvojačkim sistemom (AD) koji omogućava vrhunsku termo i
                  akustičnu zaštitu.
                </p>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-3">
                    Ključne osobine
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Termo izolacija Uf vrednost 1,3–1,4 W/m²K</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Akustična zaštita koja dostiže 45 dB</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>
                        Armatura od čelika 1,5 mm za maksimalnu otpornost
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>
                        Bezolovni PVC materijal (Greenline tehnologija)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Raspoloživo u belom koloritu</span>
                    </li>
                  </ul>
                </div>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-3">Specifikacije</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Ugradna širina: 70 mm</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Pet komora u profilu</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>
                        Staklopaketi od 24 do 36 mm (dupli ili triplex)
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    Preporuka primene
                  </h3>
                  <p className="text-muted-foreground">
                    Optimalno rešenje za obnovu prozora i vrata u stambenim
                    objektima gde je potrebna pouzdana izolacija uz dostupnu
                    investiciju
                  </p>
                </div>
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
                  Kommerling 76 AD
                </h2>
                <p className="text-lg mb-4">
                  Napredni sistem sa pet komora i ugradnom širinom 76 mm,
                  opremljen duplim brtvljenjem (AD) za superiorne termo i
                  akustične performanse, uz elegantan i suptilan dizajn profila.
                </p>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-3">
                    Ključne osobine
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Termo izolacija Uf vrednost 1,1–1,2 W/m²K</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Akustična buka smanjena do nivoa od 48 dB</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>
                        Armatura od čelika 1,5 mm za dugotrajnu čvrstoću
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>
                        Bezolovni PVC materijal (Greenline tehnologija)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>
                        Povećana ugradna širina za optimalnu energetsku uštedu
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-3">Specifikacije</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Ugradna širina: 76 mm</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Pet komora u profilu</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>
                        Staklopaketi od 24 do 36 mm (dupli ili triplex)
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    Preporuka primene
                  </h3>
                  <p className="text-muted-foreground">
                    Idealan izbor za savremene objekte koji zahtevaju viši nivo
                    izolacije i moderan estetski izgled, uz minimalan servis i
                    dug vek upotrebe
                  </p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="relative aspect-square order-1 md:order-2">
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
              <div className="relative  aspect-square">
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
                  Kommerling 76 MD
                </h2>
                <p className="text-lg mb-4">
                  Šesto-komorni PVC sistem ugradne širine 76 mm sa centralnim
                  brtvljenjem (MD) koje značajno unapređuje termo i akustičnu
                  izolaciju, pružajući superiorne energetske performanse i
                  potpunu zaštitu od prodora vazduha.
                </p>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-3">
                    Ključne osobine
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Termo izolacija Uf vrednost 1,0–1,1 W/m²K</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Vrhunska akustična zaštita do nivoa od 48 dB</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>
                        Armatura od čelika 1,5 mm za maksimalnu otpornost
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>
                        Bezolovni PVC materijal (Greenline tehnologija)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>
                        Centralni brtvljač za dodatnu barijeru protiv prolaza
                        vazduha i vlage
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-3">Specifikacije</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Ugradna širina: 76 mm</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Šest komora u profilu</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>
                        Staklopaketi od 24 do 36 mm (dupli ili triplex)
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    Preporuka primene
                  </h3>
                  <p className="text-muted-foreground">
                    Najbolji izbor za objekte sa najvišim standardima u pogledu
                    termo izolacije, sigurnosti i izdržljivosti kroz decenije
                    upotrebe
                  </p>
                </div>
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
                  Kommerling 88 MD
                </h2>
                <p className="text-lg mb-4">
                  Elitni PVC profil sa sedam komora i ugradnom širinom 88 mm,
                  opremljen centralnim brtvljenjem (MD) koji omogućava
                  najnaprednije performanse u termo i akustičnoj zaštiti.
                  Kreiran za projekte sa maksimalnom energetskom efikasnošću i
                  savremenim estetskim zahtevima.
                </p>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-3">
                    Ključne osobine
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Termo izolacija Uf vrednost ≈ 0,95 W/m²K</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Vrhunska akustična barijera do 48 dB</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>
                        Armatura od čelika 1,5 mm za vrhunsku rigidnost
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>
                        Bezolovni PVC materijal (Greenline tehnologija)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>
                        Centralni brtvljač za maksimalnu barijeru protiv
                        strujanja vazduha i prodora vlage
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-3">Specifikacije</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Ugradna širina: 88 mm</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Sedam komora u profilu</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>Troslojni staklopaketi 24-36 mm</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    Preporuka primene
                  </h3>
                  <p className="text-muted-foreground">
                    Vrhunsko rešenje za objekte sa najrigoroznijim kriterijumima
                    energetske ušteде, premium estetike i dugovečnosti na
                    najvišem nivou
                  </p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="relative  aspect-square order-1 md:order-2">
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
