import Link from "@/node_modules/next/link";
import Image from "next/image";
import roletna from "../../public/optimized/roletna4.webp";
import AnimatedSection from "../AnimatedSection";

export default function AdditionalProducts() {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          {" "}
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary">
            Dodatni Proizvodi i Usluge
          </h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-6">
          <AnimatedSection delay={0.1}>
            <div className="text-center  rounded-xl  overflow-hidden shadow-lg hover:shadow-xl">
              <div className="relative aspect-square ">
                <Image
                  src={roletna}
                  alt="Alu roletne"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="p-3">
                <h3 className="text-xl font-semibold mb-2">Alu Roletne</h3>
                <p className="pb-2">
                  Kvalitetne aluminijumske roletne za sve vrste objekata
                </p>
                <Link
                  href={"/roletne"}
                  className="font-bold text-primary hover:scale-110 transition-transform duration-300 ml-auto flex w-fit mr-6"
                >
                  Vidi vise...
                </Link>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            {" "}
            <div className="text-center  rounded-xl  overflow-hidden shadow-lg hover:shadow-xl">
              <div className="relative aspect-square ">
                <Image
                  src="/optimized/komarnik8.webp"
                  alt="Komarnici"
                  fill
                  className="object-cover rounded-lg"
                  unoptimized
                />
              </div>
              <div className="p-3">
                <h3 className="text-xl font-semibold mb-2">Komarnici</h3>
                <p className="pb-2">
                  Aluminijumski komarnici prilagođeni vašim prozorima
                </p>
                <Link
                  href={"/komarnici"}
                  className="font-bold text-primary hover:scale-110 transition-transform duration-300 ml-auto flex w-fit mr-6"
                >
                  Vidi vise...
                </Link>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            {" "}
            <div className="text-center  rounded-xl  overflow-hidden shadow-lg hover:shadow-xl">
              <div className="relative aspect-square ">
                <Image
                  src="/optimized/vrata5.webp"
                  alt="Vrata"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="p-3 flex flex-col justify-between">
                <h3 className="text-xl font-semibold mb-2">Vrata</h3>
                <p className="pb-2">
                  Sobna vrata, sigurnosna vrata, rolo vrata
                </p>
                <Link
                  href={"/vrata"}
                  className="font-bold text-primary hover:scale-110 transition-transform duration-300 ml-auto flex w-fit mr-6"
                >
                  Vidi vise...
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
