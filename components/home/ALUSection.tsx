import Link from "@/node_modules/next/link";
import Image from "next/image";
import AnimatedSection from "../AnimatedSection";

export default function ALUSection() {
  return (
    <section id="alu-stolarija" className="pt-16 px-4">
      {" "}
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          {" "}
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-primary">
            ALU Stolarija
          </h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <AnimatedSection>
            {" "}
            <div className="flex flex-col justify-center order-2 md:order-1">
              <h3 className="text-2xl font-semibold mb-4">Alumil sistemi</h3>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Alumil M11000 - Standard sistem</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Alumil S67 - Premium sistem</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Alumil S77 - Premium sistem</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Alumil S61 - Standard sistem</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Alumil M9400 - Srednja klasa</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Alumil S560 - Podizno klizni sistemi</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Drvo-alu kombinovani sistemi</span>
                </li>
              </ul>
            </div>
          </AnimatedSection>{" "}
          <AnimatedSection>
            <div className="relative h-[300px] md:h-[400px] order-1 md:order-2">
              <Image
                src="/optimized/m11000_51.webp"
                alt="ALU prozori"
                fill
                className="object-cover rounded-lg"
                unoptimized
              />
            </div>
          </AnimatedSection>
        </div>
        <AnimatedSection>
          {" "}
          <Link
            href={"/alu-stolarija"}
            className="flex justify-center py-6 text-2xl font-bold text-primary hover:scale-110 transition-transform w-fit mx-auto"
          >
            Vidi više...
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
