import Image from "next/image";
import AnimatedSection from "../AnimatedSection";

interface PageHeroProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt?: string;
  position?: string;
}

export default function PageHero({
  title,
  subtitle,
  imageSrc,
  imageAlt = title,
  position,
}: PageHeroProps) {
  return (
    <section className="relative h-[70dvh] flex items-center justify-center text-white">
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className={`object-cover ${position} brightness-75`}
          priority
          unoptimized
        />
      </div>
      <AnimatedSection>
        <div className="relative text-center px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
          <p className="text-xl md:text-2xl">{subtitle}</p>
        </div>
      </AnimatedSection>{" "}
    </section>
  );
}
