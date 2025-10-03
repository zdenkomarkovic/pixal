import AnimatedSection from "../AnimatedSection";

export default function AboutSection() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <AnimatedSection>
        {" "}
        <div className="text-center">
          <h2 className=" mb-6">IZRADA PVC I ALU STOLARIJE PO MERI - PIXAL</h2>
          <p className=" max-w-3xl mx-auto">
            Specijalizovani smo za izradu i ugradnju kvalitetne PVC i ALU
            stolarije, vrata, roletni i komarnika. Sve radimo po meri, prema
            vašim potrebama i željama. Pozovite nas na broj{" "}
            <a
              href="tel:+381600219015"
              className="italic font-bold text-primary"
            >
              060 021 9015
            </a>{" "}
            ili nas posetite u{" "}
            <a
              href="https://maps.app.goo.gl/q8D5dunpfWFVCVLJ9"
              target="_blank"
              className="italic font-bold text-primary"
            >
              Koste Glavinića 2 Senjak, Savski venac
            </a>
          </p>
        </div>
      </AnimatedSection>
    </section>
  );
}
