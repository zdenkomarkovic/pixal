import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";

export default function SeamlessWelding() {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-primary">
            Bezšavna izrada profila 76mm
          </h2>
          <p className="text-lg md:text-xl mb-8 text-center max-w-3xl mx-auto">
            Koristimo savremenu mašinu koja omogućava bezšavno zavarivanje
            profila. Spojevi su nevidljivi, što rezultuje estetski savršenim
            izgledom i maksimalnom izdržljivošću.
          </p>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <AnimatedSection>
            <div className="relative aspect-square">
              <Image
                src="/optimized/sav2.webp"
                alt="Bezsavna izrada - prikaz 1"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div className="relative aspect-square">
              <Image
                src="/optimized/sav.webp"
                alt="Bezsavna izrada - prikaz 2"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
