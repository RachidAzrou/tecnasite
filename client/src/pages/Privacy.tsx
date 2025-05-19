import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { useState, useEffect } from "react";

const Privacy = () => {
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
        <title>{t('page_titles.privacy')}</title>
        <meta name="description" content="TECNARIT's Privacy Policy explains how we protect and process your personal data when you use our software testing, QA and test automation services." />
        <meta name="keywords" content="TECNARIT privacy policy, GDPR compliance, software testing privacy, data protection, secure testing services, QA services privacy" />
        <link rel="canonical" href="https://www.tecnarit.com/privacy" />
        <meta property="og:title" content="Privacy Policy | TECNARIT Software Testing Services" />
        <meta property="og:description" content="Learn how TECNARIT protects and respects your privacy and personal data while providing professional software testing services." />
        <meta property="og:url" content="https://www.tecnarit.com/privacy" />
        <meta name="twitter:title" content="Privacy Policy | TECNARIT" />
        <meta name="twitter:description" content="TECNARIT's commitment to protecting your personal data while delivering high-quality software testing services." />
      </Helmet>
      
      <Navbar />
      <main className="flex-grow">
        
        {/* Breadcrumb Navigation - Good for SEO and user navigation */}
        <div className="bg-tecnarit-dark/95 py-2 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <Breadcrumb 
              segments={[
                { name: t('nav.privacy'), href: '/privacy' }
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
              <span className="inline-block py-1 px-3 rounded-full bg-tecnarit-green/20 text-tecnarit-lime text-sm font-medium mb-3">{t('nav.privacy')}</span>
              <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl">
                {t('privacy_policy.title')}
              </h1>
              <p className="mt-4 text-xl text-neutral-light max-w-3xl mx-auto">
                {t('privacy_policy.subtitle')}
              </p>
              <div className="w-20 h-1 mx-auto mt-6 bg-gradient-to-r from-tecnarit-green to-tecnarit-lime rounded-full"></div>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>{t('privacy_policy.intro')}</p>

              <h2 className="text-2xl font-semibold text-tecnarit-dark mt-8 mb-4">{t('privacy_policy.who_we_are.title')}</h2>
              <p className="whitespace-pre-line">{t('privacy_policy.who_we_are.content')}</p>

              <h2 className="text-2xl font-semibold text-tecnarit-dark mt-8 mb-4">{t('privacy_policy.what_data.title')}</h2>
              <p>{t('privacy_policy.what_data.content')}</p>
              <ul className="list-disc pl-6 mb-4">
                {Array.isArray(t('privacy_policy.what_data.items', { returnObjects: true })) 
                  ? t('privacy_policy.what_data.items', { returnObjects: true }).map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))
                  : <li>No items available</li>
                }
              </ul>

              <h2 className="text-2xl font-semibold text-tecnarit-dark mt-8 mb-4">{t('privacy_policy.why_collect.title')}</h2>
              <p>{t('privacy_policy.why_collect.content')}</p>
              <ul className="list-disc pl-6 mb-4">
                {Array.isArray(t('privacy_policy.why_collect.items', { returnObjects: true })) 
                  ? t('privacy_policy.why_collect.items', { returnObjects: true }).map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))
                  : <li>No items available</li>
                }
              </ul>

              <h2 className="text-2xl font-semibold text-tecnarit-dark mt-8 mb-4">{t('privacy_policy.how_protect.title')}</h2>
              <p className="whitespace-pre-line">{t('privacy_policy.how_protect.content')}</p>

              <h2 className="text-2xl font-semibold text-tecnarit-dark mt-8 mb-4">{t('privacy_policy.how_long.title')}</h2>
              <p>{t('privacy_policy.how_long.content')}</p>

              <h2 className="text-2xl font-semibold text-tecnarit-dark mt-8 mb-4">{t('privacy_policy.cookies.title')}</h2>
              <p>{t('privacy_policy.cookies.content')}</p>

              <h2 className="text-2xl font-semibold text-tecnarit-dark mt-8 mb-4">{t('privacy_policy.who_share.title')}</h2>
              <p>{t('privacy_policy.who_share.content')}</p>
              <ul className="list-disc pl-6 mb-4">
                {Array.isArray(t('privacy_policy.who_share.items', { returnObjects: true })) 
                  ? t('privacy_policy.who_share.items', { returnObjects: true }).map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))
                  : <li>No items available</li>
                }
              </ul>
              <p>{t('privacy_policy.who_share.note')}</p>

              <h2 className="text-2xl font-semibold text-tecnarit-dark mt-8 mb-4">{t('privacy_policy.your_rights.title')}</h2>
              <p>{t('privacy_policy.your_rights.content')}</p>
              <ul className="list-disc pl-6 mb-4">
                {Array.isArray(t('privacy_policy.your_rights.items', { returnObjects: true })) 
                  ? t('privacy_policy.your_rights.items', { returnObjects: true }).map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))
                  : <li>No items available</li>
                }
              </ul>
              <p>{t('privacy_policy.your_rights.note')}</p>

              <h2 className="text-2xl font-semibold text-tecnarit-dark mt-8 mb-4">{t('privacy_policy.third_party.title')}</h2>
              <p>{t('privacy_policy.third_party.content')}</p>

              <h2 className="text-2xl font-semibold text-tecnarit-dark mt-8 mb-4">{t('privacy_policy.changes.title')}</h2>
              <p>{t('privacy_policy.changes.content')}</p>

              <h2 className="text-2xl font-semibold text-tecnarit-dark mt-8 mb-4">{t('privacy_policy.contact_us.title')}</h2>
              <p className="whitespace-pre-line">{t('privacy_policy.contact_us.content')}</p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Privacy;