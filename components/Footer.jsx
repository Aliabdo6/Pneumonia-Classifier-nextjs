import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">
              Company Name
            </h3>
            <p>
              A brief description of your company
              or project.
            </p>
          </div>
          <ul className="flex space-x-4">
            <li>
              <Link
                href="/about"
                className="hover:text-gray-300"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/model"
                className="hover:text-gray-300"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/contacts"
                className="hover:text-gray-300"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="mt-8 text-center md:text-left">
          <p>
            &copy; {new Date().getFullYear()}{" "}
            Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
