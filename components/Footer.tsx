"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      className="bg-gray-900 text-white py-12 mt-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/android-chrome-192x192.png"
                alt="Pixal Logo"
                width={150}
                height={60}
                className="hue-rotate-90"
              />
            </Link>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              Vaš pouzdan partner za kvalitetnu PVC i ALU stolariju, vrata,
              roletne i komarnice.
            </p>
            {/* Social Media */}
            <div className="flex gap-3 mt-4">
              <a
                href="https://www.instagram.com/pixalpvc?utm_source=qr&igsh=MWk4MWZnYTFkM20xMw=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:scale-110 transition-transform"
                aria-label="Instagram"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.facebook.com/share/1Ga3DMipPd/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:scale-110 transition-transform"
                aria-label="Facebook"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-white">
              Brzi Linkovi
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-primary transition-colors text-sm"
                >
                  Početna
                </Link>
              </li>
              <li>
                <Link
                  href="/pvc-stolarija"
                  className="text-gray-300 hover:text-primary transition-colors text-sm"
                >
                  PVC Stolarija
                </Link>
              </li>
              <li>
                <Link
                  href="/alu-stolarija"
                  className="text-gray-300 hover:text-primary transition-colors text-sm"
                >
                  ALU Stolarija
                </Link>
              </li>
              <li>
                <Link
                  href="/vrata"
                  className="text-gray-300 hover:text-primary transition-colors text-sm"
                >
                  Vrata
                </Link>
              </li>
              <li>
                <Link
                  href="/roletne"
                  className="text-gray-300 hover:text-primary transition-colors text-sm"
                >
                  ALU Roletne
                </Link>
              </li>
              <li>
                <Link
                  href="/komarnici"
                  className="text-gray-300 hover:text-primary transition-colors text-sm"
                >
                  ALU Komarnici
                </Link>
              </li>
              <li>
                <Link
                  href="/venecijaneri"
                  className="text-gray-300 hover:text-primary transition-colors text-sm"
                >
                  Venecijaneri
                </Link>
              </li>
              <li>
                <Link
                  href="/kontakt"
                  className="text-gray-300 hover:text-primary transition-colors text-sm"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-2">
            <h4 className="text-lg font-semibold mb-4 text-white">Kontakt</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <a
                  href="https://www.google.com/maps/place/Koste+Glavini%C4%87a+2,+Beograd+11000/@44.7959415,20.4438372,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-primary transition-colors text-sm"
                >
                  Koste Glavinica 2<br />
                  Senjak, Savski venac
                  <br />
                  Beograd, Srbija
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="tel:+381600219015"
                  className="text-gray-300 hover:text-primary transition-colors text-sm"
                >
                  060 021 9015
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:pixalpvc@gmail.com"
                  className="text-gray-300 hover:text-primary transition-colors text-sm"
                >
                  pixalpvc@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-around items-center text-center gap-4">
          <p className="text-gray-400 text-base">
            &copy; {new Date().getFullYear()} Pixal. Sva prava zadržana.
          </p>
          <a
            href="https://www.manikamwebsolutions.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400  transition-colors text-base"
          >
            Izrada sajta:{" "}
            <span className="font-bold text-primary hover:text-muted">
              ManikamWebSolutions
            </span>
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
