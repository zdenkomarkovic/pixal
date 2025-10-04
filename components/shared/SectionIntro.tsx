import AnimatedSection from "../AnimatedSection";

interface SectionIntroProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

export default function SectionIntro({
  title,
  description,
  children,
}: SectionIntroProps) {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <AnimatedSection>
        {" "}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
            {title}
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
            {description}
          </p>
        </div>
      </AnimatedSection>{" "}
      {children}
    </section>
  );
}
