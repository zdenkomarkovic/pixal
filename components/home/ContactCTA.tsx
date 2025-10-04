import Link from "next/link";
import { PhoneIcon, MailIcon, MapPinIcon } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import AnimatedSection from "../AnimatedSection";

export default function ContactCTA() {
  return (
    <AnimatedSection>
      <section className="py-10 px-4 bg-primary">
        {" "}
        <div className="max-w-4xl mx-auto text-center text-muted">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-muted">
            Kontaktirajte Nas
          </h2>
          <p className="text-lg md:text-xl mb-6 text-muted">
            Zainteresovani ste? Kontaktirajte nas za besplatnu konsultaciju i
            ponudu!
          </p>
          <div className="grid md:grid-cols-3 gap-3 mb-4">
            <a
              href="tel:+381600219015"
              target="_blank"
              className="flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300"
            >
              <PhoneIcon className="w-8 h-8" />
              <p className="text-lg">+38160 021 9015</p>
            </a>
            <a
              href="mailto:pixalpvc@gmail.com"
              target="_blank"
              className="flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300"
            >
              <MailIcon className="w-8 h-8" />
              <p className="text-lg">pixalpvc@gmail.com</p>
            </a>
            <a
              href="https://maps.app.goo.gl/V4PEo8LT8uts8TYSA"
              target="_blank"
              className="flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300"
            >
              <MapPinIcon className="w-8 h-8" />
              <p className="text-lg">
                Koste Glavinića 2<br />
                Senjak, Savski venac
                <br />
                Pozvati pre dolaska - često smo na terenu.
              </p>
            </a>
          </div>
          <div className="flex justify-center gap-10 mb-6">
            <a
              href="https://www.instagram.com/pixalpvc?utm_source=qr&igsh=MWk4MWZnYTFkM20xMw=="
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:scale-110 transition-transform duration-300"
            >
              <FaInstagram className="w-10 h-10" />
            </a>
            <a
              href="https://www.facebook.com/share/1Ga3DMipPd/"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:scale-110 transition-transform duration-300"
            >
              <FaFacebook className="w-10 h-10" />
            </a>
          </div>
          <Link
            href="/kontakt"
            className="bg-muted text-primary px-8 py-3 rounded-lg text-xl font-semibold hover:scale-105 transition-transform duration-300 inline-block"
          >
            Pošaljite upit
          </Link>
        </div>
      </section>
    </AnimatedSection>
  );
}
