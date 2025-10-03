import ContactForm from "@/components/ContactForm";
import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function KontaktPage() {
  return (
    <div className="min-h-screen mt-16">
      {/* Hero Section */}
      <section className="py-12 md:py-16 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Kontaktirajte Nas
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Rado ćemo odgovoriti na sva vaša pitanja i pružiti besplatnu
            konsultaciju
          </p>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Information */}
          <div className="space-y-6 md:space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-primary">
                Kontakt Informacije
              </h2>
              <p className="text-base text-gray-600">
                Pozovite nas ili pošaljite upit, tu smo da vam pomognemo!
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 hover:bg-primary/5 transition-colors">
                <PhoneIcon className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Telefon</h3>
                  <a
                    href="tel:+381600219015"
                    className="text-base hover:text-primary transition-colors"
                  >
                    060 021 9015
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 hover:bg-primary/5 transition-colors">
                <MailIcon className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <a
                    href="mailto:pixalpvc@gmail.com"
                    className="text-base hover:text-primary transition-colors break-all"
                  >
                    pixalpvc@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 hover:bg-primary/5 transition-colors">
                <MapPinIcon className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Adresa</h3>
                  <a
                    href="https://www.google.com/maps/place/Koste+Glavini%C4%87a+2,+Beograd+11000/@44.7959415,20.4438372,17z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base hover:text-primary transition-colors"
                  >
                    Koste Glavinica 2<br />
                    Senjak, Savski venac
                    <br />
                    Beograd, Srbija
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 hover:bg-primary/5 transition-colors">
                <ClockIcon className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Radno vreme</h3>
                  <p className="text-base text-gray-600">
                    Ponedeljak - Petak: 08:00 - 17:00
                    <br />
                    Subota: 09:00 - 14:00
                    <br />
                    Nedelja: Zatvoreno
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-4">
              <h3 className="font-semibold text-lg mb-4">Pratite nas</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/pixalpvc?utm_source=qr&igsh=MWk4MWZnYTFkM20xMw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gradient-to-br from-purple-600 to-pink-500 text-white rounded-lg hover:scale-110 transition-transform"
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-6 h-6" />
                </a>
                <a
                  href="https://www.facebook.com/share/1Ga3DMipPd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-blue-600 text-white rounded-lg hover:scale-110 transition-transform"
                  aria-label="Facebook"
                >
                  <FaFacebook className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-6 md:p-8 rounded-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
              Pošaljite nam poruku
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 md:py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-8 text-center text-primary">
            Naša Lokacija
          </h2>
          <div className="w-full h-[350px] md:h-[450px] rounded-lg overflow-hidden shadow-lg border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2831.257457687817!2d20.4438372!3d44.7959415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a701d019afdef%3A0x16434bde9202308a!2sKoste%20Glavini%C4%87a%202%2C%20Beograd%2011000!5e0!3m2!1sen!2srs!4v1759357872587!5m2!1sen!2srs"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Pixal PVC lokacija"
            ></iframe>
          </div>
          <p className="text-center mt-4 text-base text-gray-600">
            Lako nas pronađite na adresi Koste Glavinica 2, Senjak, Beograd
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 px-4 bg-gradient-to-br from-primary to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 text-white">
            Besplatno merenje i konsultacije
          </h2>
          <p className="text-base md:text-lg mb-6 md:mb-8 text-white/90 max-w-2xl mx-auto">
            Pozovite nas danas i zakažite besplatno merenje. Naši stručnjaci će
            vam pomoći da izaberete najbolje rešenje za vaš dom ili poslovni
            prostor.
          </p>
          <a
            href="tel:+381600219015"
            className="bg-white text-primary px-6 md:px-8 py-3 rounded-lg text-lg md:text-xl font-semibold hover:bg-gray-100 transition-colors inline-block shadow-lg"
          >
            Pozovite nas: 060 021 9015
          </a>
        </div>
      </section>
    </div>
  );
}
