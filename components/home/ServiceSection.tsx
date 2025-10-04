import AnimatedSection from "../AnimatedSection";

export default function ServiceSection() {
  return (
    <AnimatedSection>
      <section className="py-16 px-4 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
            Servis i Održavanje
          </h2>
          <p className="text-lg md:text-xl mb-8">
            Pored izrade i ugradnje, nudimo i kompletan servis i održavanje
            postojeće PVC i ALU stolarije. Naš tim stručnjaka je uvek na
            raspolaganju za sve vrste popravki i redovnog održavanja.
          </p>
        </div>
      </section>{" "}
    </AnimatedSection>
  );
}
