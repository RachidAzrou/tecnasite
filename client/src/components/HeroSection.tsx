import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

// Import the TECNARIT logo for decoration
import tecnaritIcon from "../assets/tecnarit-icon.png";

const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <section id="home" className="relative bg-tecnarit-dark text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-7xl lg:pb-24 xl:pb-32">
          <div className="pt-10 mx-auto max-w-7xl px-4 sm:pt-12 sm:px-6 md:pt-16 lg:pt-20 lg:px-8 xl:pt-28">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
                <span className="block">{t('hero.title')}</span>
              </h1>
              <p className="mt-3 text-base text-neutral-light sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl mx-auto">
                {t('hero.subtitle')}
              </p>
              <div className="mt-5 sm:mt-8 flex justify-center">
                <div className="rounded-md shadow">
                  <Button size="lg" className="tecnarit-gradient-bg hover:opacity-90 text-white border-none" asChild>
                    <a href="/contact">{t('hero.cta')}</a>
                  </Button>
                </div>
                <div className="mt-0 ml-3">
                  <Button size="lg" variant="outline" className="border-tecnarit-lime bg-tecnarit-lime/20 text-white hover:bg-tecnarit-lime/40" asChild>
                    <a href="/services">{t('services.title')}</a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Abstract geometric shapes background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-tecnarit-green"></div>
        <div className="absolute top-1/2 -left-24 w-64 h-64 rounded-full bg-tecnarit-lime"></div>
        <img 
          src={tecnaritIcon} 
          alt="" 
          className="absolute bottom-5 right-5 w-72 h-72 opacity-10"
          aria-hidden="true"
        />
      </div>

      <div className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="h-56 w-full relative sm:h-72 md:h-96 lg:w-full lg:h-full overflow-hidden">
          <img 
            className="absolute inset-0 h-full w-full object-cover" 
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&h=1000" 
            alt="Software testing professional working with code"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-tecnarit-dark to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
