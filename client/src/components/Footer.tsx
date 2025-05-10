import { Linkedin, Phone, Mail, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

// Import the Tecnarit logo
import tecnaritLogo from "@assets/Color logo - no background.png";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-tecnarit-dark">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center">
              <img 
                src={tecnaritLogo}
                alt="TECNARIT Logo"
                className="h-10"
              />
            </div>

            <div className="mt-6 space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-tecnarit-green mr-3" />
                <span className="text-neutral-light">+32 71 55 09 46</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-tecnarit-green mr-3" />
                <span className="text-neutral-light">info@tecnarit.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-tecnarit-green mr-3" />
                <span className="text-neutral-light">{t('footer.address')}</span>
              </div>
            </div>
            <div className="mt-6 flex space-x-6">
              <a href="https://www.linkedin.com/company/tecnarit/" target="_blank" rel="noopener noreferrer" className="text-neutral-light hover:text-tecnarit-lime transition-colors duration-200">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-tecnarit-green tracking-wider uppercase">
              {t('footer.company')}
            </h3>
            <ul role="list" className="mt-4 space-y-4">
              <li>
                <a href="/about" className="text-base text-neutral-light hover:text-tecnarit-lime transition-colors duration-200">
                  {t('nav.about')}
                </a>
              </li>
              <li>
                <a href="/about" className="text-base text-neutral-light hover:text-tecnarit-lime transition-colors duration-200">
                  {t('footer.nearshoring')}
                </a>
              </li>
              <li>
                <a href="/contact" className="text-base text-neutral-light hover:text-tecnarit-lime transition-colors duration-200">
                  {t('nav.contact')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-tecnarit-green/20 pt-8">
          <p className="text-base text-neutral-light xl:text-center">
            {t('footer.copyright').replace('2023', new Date().getFullYear().toString())}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
