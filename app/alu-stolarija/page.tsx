import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import SectionIntro from "@/components/shared/SectionIntro";
import FeaturesGrid from "@/components/shared/FeaturesGrid";
import CTASection from "@/components/shared/CTASection";

export default function ALUStolarijaPage() {
  const features = [
    {
      icon: CheckCircle2,
      title: "Izdržljivost",
      description: "Aluminijum ne rđa i otporan je na sve vremenske uslove",
    },
    {
      icon: CheckCircle2,
      title: "Dizajn",
      description: "Tanki profili za maksimalno ostakljenje",
    },
    {
      icon: CheckCircle2,
      title: "Čvrstoća",
      description: "Idealno za velike staklene površine",
    },
    {
      icon: CheckCircle2,
      title: "Održavanje",
      description: "Minimalno održavanje i lako čišćenje",
    },
  ];

  return (
    <div className="min-h-screen">
      <PageHero
        title="ALU Stolarija"
        subtitle="Premium Alumil sistemi za vaš dom i poslovni prostor"
        imageSrc="/optimized/m11000_51.webp"
        imageAlt="ALU stolarija"
        position="object-bottom"
      />

      <SectionIntro
        title="Zašto izabrati ALU stolariju?"
        description="Aluminijumska stolarija predstavlja vrhunac moderne arhitekture. Kombinacija čvrstoće, izdržljivosti i elegantnog dizajna čini ALU stolariju idealnim izborom za savremene objekte. Koristimo isključivo Alumil sisteme - evropskog lidera u proizvodnji aluminijumskih sistema."
      >
        <FeaturesGrid features={features} />
      </SectionIntro>

      {/* Alumil M11000 */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative  aspect-[10/9] mx-10">
              <Image
                src="/optimized/m11000_51 (1).webp"
                alt="Alumil M11000"
                fill
                className="object-cover w-full h-full rounded-lg"
                unoptimized
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4 text-primary">
                Alumil M11000
              </h2>
              <p className="text-lg mb-4">
                Premium sistem vrhunskih performansi. Idealan za objekte sa
                najvišim zahtevima toplotne i zvučne izolacije.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Termoprekid sistema za maksimalnu izolaciju</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Koeficijent prolaska toplote Uf od 1.3 W/m²K</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Vodootpornost klase E1800</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Zvučna izolacija do 45 dB</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Vrhunske performanse za luksuzne objekte</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Alumil S67 */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-4 text-primary">
                Alumil S67
              </h2>
              <p className="text-lg mb-4">
                Klizni sistem sa termoprekidom. Idealan za terase, balkone i
                velike staklene površine.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Klizni sistem sa podignutim pragom</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Dubina sistema: 67mm</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Mogućnost velikih dimenzija krila</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Glatko klizanje sa roltnama</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Odlična vodootpornost</span>
                </li>
              </ul>
            </div>
            <div className="relative aspect-square mx-10 order-1 md:order-2">
              <Image
                src="/optimized/s67.webp"
                alt="Alumil S67"
                fill
                className="object-cover rounded-lg"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* Alumil S61 */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-square mx-10">
              <Image
                src="/optimized/s61.webp"
                alt="Alumil S61"
                fill
                className="object-cover rounded-lg"
                unoptimized
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4 text-primary">
                Alumil S61
              </h2>
              <p className="text-lg mb-4">
                Ekonomični klizni sistem bez termoprekida. Optimalan odnos cene
                i kvaliteta za pomoćne prostorije i letnjikovce.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Klizni sistem sa podignutim pragom</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Ekonomično rešenje</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Jednostavna montaža</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Izdržljiva konstrukcija</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Idealno za pomoćne prostorije</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Alumil M9400 */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-4 text-primary">
                Alumil M9400
              </h2>
              <p className="text-lg mb-4">
                Srednja klasa sistema, termički neizolovan sistem. Odličan
                balans između performansi.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Visoko funkcionalno</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Optimalan odnos cene i performansi</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Visok stepen sigurnosti</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Dobra zvučna izolacija</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Širok spektar primene</span>
                </li>
              </ul>
            </div>
            <div className="relative  aspect-square mx-10 order-1 md:order-2">
              <Image
                src="/optimized/m9400_1.webp"
                alt="Alumil M9400"
                fill
                className="object-cover rounded-lg"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* Alumil S560 */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-square mx-10">
              <Image
                src="/optimized/S560.webp"
                alt="Alumil S560"
                fill
                className="object-cover rounded-lg"
                unoptimized
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4 text-primary">
                Alumil S560 - Podizno klizni sistem
              </h2>
              <p className="text-lg mb-4">
                Premium podizno klizni (HST) sistem za maksimalan komfor.
                Idealan za velike staklene površine sa bezbrižnim rukovanjem.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Podizno klizni mehanizam</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Krila težine do 400kg</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Lako rukovanje velikim površinama</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Niski prag za bezbarijerni pristup</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Vrhunska vodootpornost</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <CTASection
        title="Zainteresovani za ALU stolariju?"
        description="Kontaktirajte nas za besplatnu konsultaciju i merenje. Naši stručnjaci će vam pomoći da odaberete najbolje rešenje za vaše potrebe."
      />
      {/* Drvo-Alu */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              Drvo-Alu Sistemi
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
              Kombinacija toplote drveta i izdržljivosti aluminijuma. Drvo-alu
              sistemi nude najbolje od oba materijala - estetiku prirodnog
              drveta sa unutrašnje strane i zaštitu aluminijuma sa spoljne.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-background p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-primary">
                Prednosti
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Toplina i estetika drveta iznutra</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Aluminijumska zaštita spolja</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Minimalno spoljno održavanje</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Odlična toplotna izolacija</span>
                </li>
              </ul>
            </div>
            <div className="bg-background p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-primary">
                Primena
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Luksuzne vile i rezidencije</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Obnovljeni stari objekti</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Planinske kuće</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Objekti u zaštićenim zonama</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Boje i završne obrade */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
            Boje i završne obrade
          </h2>
          <p className="text-lg md:text-xl mb-8">
            ALU stolarija može biti proizvedena u širokoj paleti boja i završnih
            obrada:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">RAL boje</h3>
              <p>Preko 200 standardnih RAL boja prema vašem izboru</p>
            </div>
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Anodizacija</h3>
              <p>Prirodna metalik završnica u različitim tonovima</p>
            </div>
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Dekor folije</h3>
              <p>Imitacija drveta i drugih prirodnih materijala</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
