import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { serviceItems } from "@/lib/data";
import { CheckSquare, BarChart2, Cog } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

const ServiceCard = ({ 
  title, 
  description, 
  icon: Icon
}: { 
  title: string; 
  description: string; 
  icon: React.ElementType 
}) => {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative p-8">
        <div className="absolute top-0 right-0 w-40 h-40 tecnarit-gradient-bg opacity-5 rounded-bl-full"></div>
        <div className="flex items-center justify-center h-16 w-16 rounded-md tecnarit-gradient-bg text-white mb-6">
          <Icon className="h-8 w-8" />
        </div>
        <h3 className="text-xl font-bold text-tecnarit-dark mb-4">{title}</h3>
        <p className="text-neutral-dark">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const ServicesPage = () => {
  const { t } = useTranslation();
  const icons = [CheckSquare, BarChart2, Cog];

  return (
    <div className="bg-neutral-lightest min-h-screen flex flex-col">
      <Helmet>
        <title>Services | TECNARIT</title>
        <meta name="description" content="Comprehensive software testing services offered by TECNARIT including functional testing, performance testing, and test automation." />
      </Helmet>
      
      <Navbar />
      <main className="flex-grow">
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
            
            <div className="mt-12 grid gap-8 max-w-5xl mx-auto">
              {/* First row - Two services */}
              <div className="grid gap-8 md:grid-cols-2">
                <ServiceCard 
                  key="service-1"
                  title={t(`services.${serviceItems[0].key}.title`)}
                  description={t(`services.${serviceItems[0].key}.description`)}
                  icon={icons[0]}
                />
                <ServiceCard 
                  key="service-2"
                  title={t(`services.${serviceItems[1].key}.title`)}
                  description={t(`services.${serviceItems[1].key}.description`)}
                  icon={icons[1]}
                />
              </div>
              
              {/* Second row - One centered service */}
              <div className="flex justify-center">
                <div className="w-full md:w-1/2">
                  <ServiceCard 
                    key="service-3"
                    title={t(`services.${serviceItems[2].key}.title`)}
                    description={t(`services.${serviceItems[2].key}.description`)}
                    icon={icons[2]}
                  />
                </div>
              </div>
            </div>
            
            <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-tecnarit-dark mb-4">{t('services.nearshoring.title')}</h3>
              <p className="text-neutral-dark mb-4">
                {t('services.nearshoring.description')}
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;