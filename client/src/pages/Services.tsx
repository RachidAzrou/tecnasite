import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { serviceItems } from "@/lib/data";
import { Check, CheckSquare, BarChart2, Cog } from "lucide-react";
import { useTranslation } from "react-i18next";

const ServicesPage = () => {
  const { t } = useTranslation();
  const icons = [CheckSquare, BarChart2, Cog];

  return (
    <div className="bg-neutral-lightest min-h-screen flex flex-col">
      <Navbar />
      <main>
        <section className="py-16 bg-tecnarit-dark text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl">
                {t('services.title')}
              </h1>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-neutral-light">
                {t('services.subtitle')}
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block py-1 px-3 rounded-full bg-tecnarit-green/10 text-tecnarit-green text-sm font-medium mb-3">{t('services.offer')}</span>
              <h2 className="text-3xl font-extrabold text-tecnarit-dark">
                {t('services.solutions')}
              </h2>
              <div className="w-20 h-1 mx-auto mt-6 tecnarit-gradient-bg rounded-full"></div>
            </div>
            
            <div className="grid gap-10 md:grid-cols-2">
              {serviceItems.map((service, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-lg border border-neutral-light relative overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="absolute top-0 right-0 w-40 h-40 tecnarit-gradient-bg opacity-5 rounded-bl-full"></div>
                  <div className="flex items-center justify-center h-16 w-16 rounded-md tecnarit-gradient-bg text-white mb-6">
                    {React.createElement(icons[index % icons.length], { className: "h-8 w-8" })}
                  </div>
                  <h3 className="text-xl font-bold text-tecnarit-dark mb-4">{t(`services.${service.key}.title`)}</h3>
                  <p className="text-neutral-dark mb-6">{t(`services.${service.key}.description`)}</p>
                  <div className="border-t border-neutral-light pt-4">
                    <h4 className="font-medium text-tecnarit-dark mb-2">{t('services.benefits')}:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <Check className="h-5 w-5 text-tecnarit-green mr-2 flex-shrink-0" />
                        <span>{t('services.benefit1')}</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="h-5 w-5 text-tecnarit-green mr-2 flex-shrink-0" />
                        <span>{t('services.benefit2')}</span>
                      </li>
                      <li className="flex items-center">
                        <Check className="h-5 w-5 text-tecnarit-green mr-2 flex-shrink-0" />
                        <span>{t('services.benefit3')}</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-tecnarit-dark mb-4">{t('services.nearshoring.title')}</h3>
              <p className="text-neutral-dark mb-4">
                {t('services.nearshoring.description')}
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-tecnarit-green mr-2 flex-shrink-0" />
                  <span>{t('services.nearshoring.benefit1')}</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-tecnarit-green mr-2 flex-shrink-0" />
                  <span>{t('services.nearshoring.benefit2')}</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-tecnarit-green mr-2 flex-shrink-0" />
                  <span>{t('services.nearshoring.benefit3')}</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-tecnarit-green mr-2 flex-shrink-0" />
                  <span>{t('services.nearshoring.benefit4')}</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;