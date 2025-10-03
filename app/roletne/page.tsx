import { CheckCircle2, ShieldCheck, Wrench, Clock } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import SectionIntro from "@/components/shared/SectionIntro";
import FeaturesGrid from "@/components/shared/FeaturesGrid";
import ImageGallery from "@/components/shared/ImageGallery";
import CTASection from "@/components/shared/CTASection";

export default function RoletnePage() {
  const images = [
    "/optimized/roletna.webp",
    "/optimized/roletna1.webp",
    "/optimized/roletna2.webp",
    "/optimized/roletna3.webp",
    "/optimized/roletna4.webp",
    "/optimized/roletna5.webp",
    "/optimized/roletna6.webp",
    "/optimized/roletna7.webp",
    "/optimized/roletna8.webp",
    "/optimized/roletna9.webp",
    "/optimized/roletna10.webp",
    "/optimized/roletna11.webp",
  ];

  const features = [
    {
      icon: CheckCircle2,
      title: "Zaštita",
      description: "Potpuna zaštita od sunca, buke i vremenskih uticaja",
    },
    {
      icon: ShieldCheck,
      title: "Sigurnost",
      description: "Dodatna protivprovalna zaštita za vaš dom",
    },
    {
      icon: Wrench,
      title: "Izdržljivost",
      description: "Aluminijum ne rđa i dugo traje",
    },
    {
      icon: Clock,
      title: "Lako održavanje",
      description: "Minimalno održavanje, maksimalan učinak",
    },
  ];

  return (
    <div className="min-h-screen">
      <PageHero
        title="ALU Roletne"
        subtitle="Kvalitetne aluminijumske roletne za zaštitu i privatnost"
        imageSrc="/optimized/roletna.webp"
        imageAlt="ALU roletne"
        position="object-[center_32%]"
      />

      <SectionIntro
        title="Zašto izabrati ALU roletne?"
        description="Aluminijumske roletne predstavljaju idealno rešenje za zaštitu od sunca, buke i neželjenih pogleda. Izrađene od visokokvalitetnog aluminijuma, naše roletne su izdržljive, funkcionalne i estetski privlačne."
      >
        <FeaturesGrid features={features} />
      </SectionIntro>

      {/* Tipovi roletni */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary">
            Tipovi ALU Roletni
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Nadgradne roletne */}
            <div className="bg-muted p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-primary">
                Nadgradne roletne
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Montaža na fasadu iznad prozora</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Idealne za renoviranje postojećih objekata</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Vidljiva kutija roletne</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Jednostavna ugradnja</span>
                </li>
              </ul>
            </div>

            {/* Ugradne roletne */}
            <div className="bg-muted p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-primary">
                Ugradne roletne
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Ugradnja u zid ili prozorski otvor</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Kutija roletne potpuno skrivena</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Elegantan izgled bez vidljivih elemenata</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Najbolje za nove objekte</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sistemi upravljanja */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary">
            Sistemi Upravljanja
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                Ručno upravljanje
              </h3>
              <ul className="space-y-2">
                <li>• Kaišem ili remenom</li>
                <li>• Manuelno podizanje i spuštanje</li>
                <li>• Ekonomično rešenje</li>
                <li>• Pouzdano i jednostavno</li>
              </ul>
            </div>

            <div className="bg-background p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                Električno upravljanje
              </h3>
              <ul className="space-y-2">
                <li>• Prekidač na zidu</li>
                <li>• Daljinski upravljač</li>
                <li>• Automatsko podizanje/spuštanje</li>
                <li>• Komfor i praktičnost</li>
              </ul>
            </div>

            <div className="bg-background p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                Smart upravljanje
              </h3>
              <ul className="space-y-2">
                <li>• Upravljanje preko telefona</li>
                <li>• Programiranje po rasporedu</li>
                <li>• Integracija sa pametnim kućama</li>
                <li>• Senzori za sunce i vetar</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Boje i završne obrade */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-primary">
            Boje i Završne Obrade
          </h2>
          <p className="text-lg text-center mb-8">
            Nudimo širok spektar boja i završnih obrada za aluminijumske lamele
            i kutije:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Standardne boje</h3>
              <p>
                Bela, smeđa, siva, antracit, zelena i druge popularne boje po
                RAL standardu
              </p>
            </div>
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Dekor folije</h3>
              <p>
                Imitacija drveta u različitim tonovima - hrast, orah, mahagoni
              </p>
            </div>
          </div>
        </div>
      </section>
      <CTASection
        title="Zainteresovani za ALU roletne?"
        description="Kontaktirajte nas za besplatnu konsultaciju i merenje. Naši stručnjaci će vam pomoći da odaberete najbolje rešenje."
      />
      <ImageGallery
        images={images}
        title="Naši Radovi - ALU Roletne"
        altPrefix="Roletna"
      />

      {/* Prednosti */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-primary">
            Prednosti ALU Roletni
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-center">
            <div>
              <div className="flex items-center gap-3 mb-2 justify-center">
                <CheckCircle2 className="w-6 h-6 text-primary  flex-shrink-0" />
                <h3 className="font-semibold text-lg">Energetska efikasnost</h3>
              </div>
              <p>Smanjenje troškova grejanja zimi i hlađenja leti</p>
            </div>
            <div className="">
              <div className="flex items-center gap-3 mb-2 justify-center">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                <h3 className="font-semibold text-lg">Zvučna izolacija</h3>
              </div>
              <p>Redukcija spoljne buke do 50%</p>
            </div>
            <div className="">
              <div className="flex items-center gap-3 mb-2 justify-center">
                <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <h3 className="font-semibold text-lg mb-1">Zaštita od sunca</h3>
              </div>
              <p>100% zaštita od UV zraka i pregrevanja prostora</p>
            </div>
            <div className="">
              <div className="flex items-center gap-3 mb-2 justify-center">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                <h3 className="font-semibold text-lg">Privatnost</h3>
              </div>
              <p>Potpuna kontrola privatnosti u vašem domu</p>
            </div>
            <div className="">
              <div className="flex items-center gap-3 mb-2 justify-center">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                <h3 className="font-semibold text-lg">Zaštita od provale</h3>
              </div>
              <p>Dodatna sigurnost i protivprovalna zaštita</p>
            </div>
            <div className="">
              <div className="flex items-center gap-3 mb-2 justify-center">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                <h3 className="font-semibold text-lg">Dugovečnost</h3>
              </div>
              <p>Garancija na materijal i rad</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
