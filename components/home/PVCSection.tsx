import Link from "@/node_modules/next/link";
import Image from "next/image";
import AnimatedSection from "../AnimatedSection";

export default function PVCSection() {
  return (
    <section id="pvc-stolarija" className="pt-16 px-4 bg-background">
      {" "}
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          {" "}
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-primary">
            PVC Stolarija
          </h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <AnimatedSection>
            {" "}
            <div className="relative h-[300px] md:h-[400px]">
              <Image
                src="/optimized/profil.webp"
                alt="PVC prozori"
                fill
                className="object-cover rounded-lg"
                unoptimized
              />
            </div>
          </AnimatedSection>
          <AnimatedSection>
            {" "}
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-semibold mb-4">
                Kommerling profili
              </h3>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Kommerling 70AD - 5-komorni sistem</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Kommerling 76AD - 5-komorni sistem</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Kommerling 76MD - Premium sistem</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Kommerling 88MD - Premium - vrhunska izolacija</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Siegenia okov vrhunskog kvaliteta</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Sve vrste stakla prema potrebama</span>
                </li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
        <AnimatedSection>
          {" "}
          <Link
            href={"/pvc-stolarija"}
            className="flex justify-center py-6 text-2xl font-bold text-primary hover:scale-110 transition-transform w-fit mx-auto"
          >
            Vidi više...
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
