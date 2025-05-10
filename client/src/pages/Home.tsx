import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  // No smooth scrolling needed anymore since we use proper page navigation
  useEffect(() => {
    // Effect can be used for other initialization if needed in the future
  }, []);

  return (
    <div className="bg-neutral-lightest min-h-screen flex flex-col">
      <Navbar />
      <main>
        <HeroSection />
        
        {/* About Section before services */}
        <section className="py-16 bg-tecnarit-dark text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-left text-neutral-light">
              <span className="inline-block py-1 px-3 rounded-full bg-tecnarit-green/10 text-tecnarit-green text-sm font-medium mb-3">{t('about_section.label')}</span>
              <h2 className="text-2xl font-extrabold text-white sm:text-3xl mb-4">
                {t('about_section.title')}
              </h2>
              <p className="text-base mb-4">
                {t('about_section.paragraph1')}
              </p>
              <p className="text-base">
                {t('about_section.paragraph2')}
              </p>
            </div>
          </div>
        </section>
        
        <ServicesSection />
        <WhyChooseUs />
        
        {/* Call-to-Action Section */}
        <section className="py-16 bg-tecnarit-dark text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold sm:text-4xl mb-8">
              {t('home.cta.title')}
            </h2>
            <p className="text-xl text-neutral-light max-w-3xl mx-auto mb-10">
              {t('home.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button className="tecnarit-gradient-bg hover:opacity-90 text-white" size="lg" asChild>
                <Link href="/contact">{t('home.cta.contact_button')}</Link>
              </Button>
              <Button className="bg-white text-tecnarit-dark hover:bg-neutral-100" size="lg" asChild>
                <Link href="/services">{t('home.cta.services_button')}</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
