import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "../AnimatedSection";

export default function Hero() {
  return (
    <section className="relative h-[100dvh] flex items-end justify-start text-white">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/2151004028.jpg"
          alt="Pixal PVC i ALU stolarija"
          fill
          className="object-cover"
          priority
          unoptimized
        />
      </div>
      <div className="absolute w-full h-full bg-black/30"></div>
      <AnimatedSection>
        {" "}
        <div className="relative text-center md:text-left px-4 max-w-5xl md:ml-32 mb-12 md:mb-20">
          <h1 className="text-4xl md:text-8xl font-bold mb-4 ">PIXAL</h1>
          <p className="text-2xl md:text-5xl mb-6 ">
            Izrada i ugradnja PVC i ALU stolarije po meri
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 text-lg md:text-3xl">
            <div className="flex items-center gap-2 md:gap-4">
              <span className="text-primary">✓</span> ALU stolarija
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary">✓</span> PVC stolarija
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary">✓</span> Sobna vrata
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary">✓</span> Sigurnosna vrata
            </div>
          </div>
          <div className="mt-8">
            <Link
              href="/kontakt"
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg text-xl font-semibold hover:bg-blue-400 transition-colors inline-block"
            >
              Kontaktirajte nas
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
