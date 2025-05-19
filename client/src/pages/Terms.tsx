import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { useState, useEffect } from "react";

const Terms = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);
  
  // Update component when language changes
  useEffect(() => {
    const handleLanguageChange = () => {
      setLanguage(i18n.language);
    };
    
    // Add event listener
    i18n.on('languageChanged', handleLanguageChange);
    
    // Clean up
    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  return (
    <div className="bg-neutral-lightest min-h-screen flex flex-col">
      <Helmet>
        <title>{t('page_titles.terms')}</title>
        <meta name="description" content="TECNARIT's Terms and Conditions outline the rules, guidelines, and obligations for using our software testing and QA services." />
        <meta name="keywords" content="TECNARIT terms conditions, software testing terms, QA services agreement, TECNARIT legal" />
        <link rel="canonical" href="https://www.tecnarit.com/terms" />
        <meta property="og:title" content="Terms and Conditions | TECNARIT Software Testing Services" />
        <meta property="og:description" content="Learn about the terms and conditions for using TECNARIT's professional software testing services." />
        <meta property="og:url" content="https://www.tecnarit.com/terms" />
        <meta name="twitter:title" content="Terms and Conditions | TECNARIT" />
        <meta name="twitter:description" content="TECNARIT's terms and conditions for providing high-quality software testing services." />
      </Helmet>
      
      <Navbar />
      <main className="flex-grow">
        
        {/* Breadcrumb Navigation */}
        <div className="bg-tecnarit-dark/95 py-2 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <Breadcrumb 
              segments={[
                { name: t('nav.terms'), href: '/terms' }
              ]}
            />
          </div>
        </div>
        {/* Hero Section */}
        <section className="pt-14 pb-16 relative overflow-hidden text-white" style={{ background: 'linear-gradient(180deg, #0f1729 0%, #132b23 50%, #183728 100%)' }}>
          {/* Animated background elements */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-tecnarit-green/5 animate-pulse" style={{ animationDuration: '7s' }}></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-tecnarit-lime/5 animate-pulse" style={{ animationDuration: '5s' }}></div>
            <div className="absolute top-1/2 right-1/4 w-24 h-24 rounded-full bg-tecnarit-green/5 animate-pulse" style={{ animationDuration: '8s' }}></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-tecnarit-green/20 text-tecnarit-lime text-sm font-medium mb-3">{t('nav.terms')}</span>
              <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl">
                {t('terms.title')}
              </h1>
              <p className="mt-4 text-xl text-neutral-light max-w-3xl mx-auto">
                {t('terms.subtitle')}
              </p>
              <div className="w-20 h-1 mx-auto mt-6 bg-gradient-to-r from-tecnarit-green to-tecnarit-lime rounded-full"></div>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>{t('terms.intro')}</p>

              <h2 className="text-2xl font-semibold text-tecnarit-dark mt-8 mb-4">{t('terms.definitions.title')}</h2>
              <p>{t('terms.definitions.content')}</p>
              <ul className="list-disc pl-6 mb-4">
                {Array.isArray(t('terms.definitions.items', { returnObjects: true })) 
                  ? t('terms.definitions.items', { returnObjects: true }).map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))
                  : <li>No items available</li>
                }
              </ul>

              <h2 className="text-2xl font-semibold text-tecnarit-dark mt-8 mb-4">{t('terms.acceptance.title')}</h2>
              <p className="whitespace-pre-line">{t('terms.acceptance.content')}</p>

              <h2 className="text-2xl font-semibold text-tecnarit-dark mt-8 mb-4">{t('terms.services.title')}</h2>
              <p>{t('terms.services.content')}</p>
              <ul className="list-disc pl-6 mb-4">
                {Array.isArray(t('terms.services.items', { returnObjects: true })) 
                  ? t('terms.services.items', { returnObjects: true }).map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))
                  : <li>No items available</li>
                }
              </ul>

              <h2 className="text-2xl font-semibold text-tecnarit-dark mt-8 mb-4">{t('terms.intellectual_property.title')}</h2>
              <p className="whitespace-pre-line">{t('terms.intellectual_property.content')}</p>

              <h2 className="text-2xl font-semibold text-tecnarit-dark mt-8 mb-4">{t('terms.confidentiality.title')}</h2>
              <p>{t('terms.confidentiality.content')}</p>

              <h2 className="text-2xl font-semibold text-tecnarit-dark mt-8 mb-4">{t('terms.payment.title')}</h2>
              <p>{t('terms.payment.content')}</p>
              <ul className="list-disc pl-6 mb-4">
                {Array.isArray(t('terms.payment.items', { returnObjects: true })) 
                  ? t('terms.payment.items', { returnObjects: true }).map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))
                  : <li>No items available</li>
                }
              </ul>

              <h2 className="text-2xl font-semibold text-tecnarit-dark mt-8 mb-4">{t('terms.liability.title')}</h2>
              <p className="whitespace-pre-line">{t('terms.liability.content')}</p>

              <h2 className="text-2xl font-semibold text-tecnarit-dark mt-8 mb-4">{t('terms.termination.title')}</h2>
              <p className="whitespace-pre-line">{t('terms.termination.content')}</p>

              <h2 className="text-2xl font-semibold text-tecnarit-dark mt-8 mb-4">{t('terms.force_majeure.title')}</h2>
              <p>{t('terms.force_majeure.content')}</p>

              <h2 className="text-2xl font-semibold text-tecnarit-dark mt-8 mb-4">{t('terms.governing_law.title')}</h2>
              <p>{t('terms.governing_law.content')}</p>

              <h2 className="text-2xl font-semibold text-tecnarit-dark mt-8 mb-4">{t('terms.changes.title')}</h2>
              <p>{t('terms.changes.content')}</p>

              <h2 className="text-2xl font-semibold text-tecnarit-dark mt-8 mb-4">{t('terms.contact.title')}</h2>
              <p className="whitespace-pre-line">{t('terms.contact.content')}</p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms;