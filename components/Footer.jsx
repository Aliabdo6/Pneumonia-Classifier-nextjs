import Link from "next/link";
import Logo from "./Logo";
import {
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1">
            <Logo />
            <p className="mt-4 text-gray-300">
              Empowering healthcare with AI-driven
              pneumonia detection. Committed to
              improving patient outcomes through
              innovative technology.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-yellow-300 transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-yellow-300 transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/model"
                  className="hover:text-yellow-300 transition-colors duration-300"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contacts"
                  className="hover:text-yellow-300 transition-colors duration-300"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/predictions"
                  className="hover:text-yellow-300 transition-colors duration-300"
                >
                  Predictions
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Connect With Ali Abdo
            </h3>
            <div className="space-y-4">
              <a
                href="mailto:aliabdo12121@outlook.sa"
                className="flex items-center text-white hover:text-yellow-300 transition-colors duration-300"
              >
                <FaEnvelope
                  size={20}
                  className="mr-2"
                />
                aliabdo12121@outlook.sa
              </a>
              <a
                href="https://www.linkedin.com/in/aliabdo6/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-white hover:text-yellow-300 transition-colors duration-300"
              >
                <FaLinkedin
                  size={20}
                  className="mr-2"
                />
                LinkedIn
              </a>
              <a
                href="https://wa.me/201090561644"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-white hover:text-yellow-300 transition-colors duration-300"
              >
                <FaWhatsapp
                  size={20}
                  className="mr-2"
                />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>
            &copy; {currentYear} Ali Abdo. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
