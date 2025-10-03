interface CTASectionProps {
  title: string;
  description: string;
}

export default function CTASection({ title, description }: CTASectionProps) {
  return (
    <section className="py-16 px-4 bg-primary">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">
          {title}
        </h2>
        <p className="text-lg md:text-xl mb-8 text-primary-foreground">
          {description}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="tel:+381600219015"
            className="bg-primary-foreground text-primary px-8 py-3 rounded-lg text-xl font-semibold hover:scale-105 transition-transform duration-300 inline-block"
          >
            060 021 9015
          </a>
        </div>
      </div>
    </section>
  );
}
