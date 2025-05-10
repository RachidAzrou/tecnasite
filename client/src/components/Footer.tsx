import { Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-white">Tecnarit</span>
            </div>
            <p className="mt-4 text-base text-neutral-light">
              Specialized in software testing and quality assurance services that ensure your applications work flawlessly, every time.
            </p>
            <div className="mt-6 flex space-x-6">
              <a href="#" className="text-neutral-light hover:text-white transition-colors duration-200">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-neutral-light hover:text-white transition-colors duration-200">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-neutral-lightest tracking-wider uppercase">
              Services
            </h3>
            <ul role="list" className="mt-4 space-y-4">
              <li>
                <a href="#services" className="text-base text-neutral-light hover:text-white transition-colors duration-200">
                  Functional Testing
                </a>
              </li>
              <li>
                <a href="#services" className="text-base text-neutral-light hover:text-white transition-colors duration-200">
                  Performance Testing
                </a>
              </li>
              <li>
                <a href="#services" className="text-base text-neutral-light hover:text-white transition-colors duration-200">
                  Security Testing
                </a>
              </li>
              <li>
                <a href="#services" className="text-base text-neutral-light hover:text-white transition-colors duration-200">
                  Automated Testing
                </a>
              </li>
              <li>
                <a href="#services" className="text-base text-neutral-light hover:text-white transition-colors duration-200">
                  QA Consulting
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-neutral-lightest tracking-wider uppercase">
              Company
            </h3>
            <ul role="list" className="mt-4 space-y-4">
              <li>
                <a href="#about" className="text-base text-neutral-light hover:text-white transition-colors duration-200">
                  About
                </a>
              </li>
              <li>
                <a href="#case-studies" className="text-base text-neutral-light hover:text-white transition-colors duration-200">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-base text-neutral-light hover:text-white transition-colors duration-200">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-base text-neutral-light hover:text-white transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-neutral-light xl:text-center">
            &copy; {new Date().getFullYear()} Tecnarit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
