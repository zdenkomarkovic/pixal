import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import PVCSection from "@/components/home/PVCSection";
import ALUSection from "@/components/home/ALUSection";
import AdditionalProducts from "@/components/home/AdditionalProducts";
import Gallery from "@/components/home/Gallery";
import ServiceSection from "@/components/home/ServiceSection";
import ContactCTA from "@/components/home/ContactCTA";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutSection />
      <PVCSection />
      <ALUSection />
      <AdditionalProducts />
      <ContactCTA />
      <ServiceSection />
      <Gallery />
    </div>
  );
}
