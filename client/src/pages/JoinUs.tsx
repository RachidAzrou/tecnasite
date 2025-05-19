import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle } from "lucide-react";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { useState, useEffect } from "react";

const JoinUs = () => {
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

  // Benefits dynamically pulled from translations 
  const benefits = [
    {
      key: "growth",
      title: t('join_us.benefits.growth.title'),
      description: t('join_us.benefits.growth.description')
    },
    {
      key: "balance",
      title: t('join_us.benefits.balance.title'),
      description: t('join_us.benefits.balance.description')
    },
    {
      key: "international",
      title: t('join_us.benefits.international.title'),
      description: t('join_us.benefits.international.description')
    },
    {
      key: "projects",
      title: t('join_us.benefits.projects.title'),
      description: t('join_us.benefits.projects.description')
    },
    {
      key: "career",
      title: t('join_us.perks.career.title'),
      description: t('join_us.perks.career.description')
    },
    {
      key: "compensation",
      title: t('join_us.perks.development.title'),
      description: t('join_us.perks.development.description')
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>{t('page_titles.join_us')}</title>
        <meta name="description" content="Join TECNARIT's team of talented QA professionals. We offer exciting career opportunities in functional testing, performance testing, and test automation." />
        <meta name="keywords" content="software testing careers, QA jobs, test engineer positions, quality assurance employment, software testing team, nearshoring jobs" />
        <link rel="canonical" href="https://www.tecnarit.com/join-us" />
        <meta property="og:title" content="Join Our Testing Team | TECNARIT Software Testing" />
        <meta property="og:description" content="Join TECNARIT's team of talented QA professionals. We offer exciting career opportunities in functional testing, performance testing, and test automation." />
        <meta property="og:url" content="https://www.tecnarit.com/join-us" />
        <meta name="twitter:title" content="Join Our Testing Team | TECNARIT Software Testing" />
        <meta name="twitter:description" content="Join TECNARIT's team of talented QA professionals. We offer exciting career opportunities in functional testing, performance testing, and test automation." />
      </Helmet>
      
      <Navbar />
      <main className="flex-grow">

        
        {/* Breadcrumb Navigation */}
        <div className="bg-tecnarit-dark/95 py-2 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <Breadcrumb 
              segments={[
                { name: t('nav.join_us'), href: '/join-us' }
              ]}
            />
          </div>
        </div>

        {/* Hero Section */}
        <section className="pt-14 pb-16 relative overflow-hidden text-white" style={{ background: 'linear-gradient(180deg, #0f1729 0%, #132b23 50%, #183728 100%)' }}>
          {/* Animated background elements - Responsive for all devices */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            {/* Larger animation on top left - also visible on mobile */}
            <div className="absolute top-5 left-5 sm:top-10 sm:left-10 w-24 h-24 sm:w-40 sm:h-40 rounded-full bg-tecnarit-green/5 animate-pulse" style={{ animationDuration: '7s' }}></div>
            
            {/* Center animation - good visibility on mobile */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-48 sm:h-48 rounded-full bg-tecnarit-lime/10 animate-pulse" style={{ animationDuration: '5s' }}></div>
            
            {/* Bottom right animation - adjusted for mobile */}
            <div className="absolute bottom-5 right-5 sm:bottom-20 sm:right-10 w-32 h-32 sm:w-60 sm:h-60 rounded-full bg-tecnarit-green/5 animate-pulse" style={{ animationDuration: '6s' }}></div>
            
            {/* Small additional animations for visual interest */}
            <div className="absolute top-20 sm:top-40 right-10 sm:right-40 w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-tecnarit-lime/5 animate-pulse" style={{ animationDuration: '8s' }}></div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-6"
              >
                <span className="inline-block py-1 px-3 rounded-full bg-tecnarit-green/20 text-tecnarit-lime text-sm font-medium">{t('nav.join_us')}</span>
              </motion.div>
              
              <motion.h1 
                className="text-4xl sm:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {t('join_us.title')}
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-300 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {t('join_us.subtitle')}
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Link href="/jobs">
                  <Button className="tecnarit-gradient-bg hover:opacity-90 text-white font-semibold px-8 py-3 rounded-md border-none">
                    {t('join_us.openings.button')}
                  </Button>
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="w-20 h-1 mx-auto mt-12 tecnarit-gradient-bg rounded-full"
              ></motion.div>
            </div>
          </div>
        </section>

        {/* Why Join Us Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-tecnarit-dark mb-4">{t('join_us.benefits_title')}</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('join_us.benefits_description')}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start">
                    <div className="mr-4 text-tecnarit-green">
                      <CheckCircle size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-tecnarit-dark mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Culture Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-10">
              <div className="lg:w-1/2">
                <motion.div 
                  className="rounded-lg overflow-hidden shadow-xl"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&h=800&q=80" 
                    alt="TECNARIT office culture" 
                    className="w-full h-auto"
                  />
                </motion.div>
              </div>
              <div className="lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl sm:text-4xl font-bold text-tecnarit-dark mb-6">{t('join_us.perks.title')}</h2>
                  <p className="text-lg text-gray-600 mb-6">
                    {t('join_us.perks.remote.description')} {t('join_us.perks.collaboration.description')}
                  </p>
                  <p className="text-lg text-gray-600 mb-6">
                    {t('join_us.benefits.international.description')}
                  </p>
                  <p className="text-lg text-gray-600">
                    {t('join_us.benefits.balance.description')} {t('join_us.perks.career.description')}
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-tecnarit-dark text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 
              className="text-3xl sm:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {t('join_us.openings.title')}
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              {t('join_us.openings.description')}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Link href="/jobs">
                <Button className="bg-tecnarit-lime hover:bg-tecnarit-lime/90 text-tecnarit-dark font-semibold px-8 py-6 rounded-md text-lg">
                  {t('join_us.openings.button')}
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default JoinUs;