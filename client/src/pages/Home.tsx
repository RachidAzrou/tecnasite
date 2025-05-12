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
import { Helmet } from "react-helmet";

const Home = () => {
  const { t } = useTranslation();
  // No smooth scrolling needed anymore since we use proper page navigation
  useEffect(() => {
    // Effect can be used for other initialization if needed in the future
  }, []);

  return (
    <div className="bg-neutral-lightest min-h-screen flex flex-col">
      <Helmet>
        <title>TECNARIT - Professional Software Testing & QA Services | Test IT Better</title>
        <meta name="description" content="TECNARIT offers comprehensive software testing services including functional, performance, automation and load testing with a Belgian-Moroccan nearshoring approach for optimal quality and cost-efficiency." />
        <meta name="keywords" content="software testing, QA services, TECNARIT, test automation, functional testing, performance testing, load testing, nearshoring, Belgian-Moroccan team" />
        <link rel="canonical" href="https://www.tecnarit.com" />
        <meta property="og:title" content="TECNARIT - Software Testing Excellence | Test IT Better" />
        <meta property="og:description" content="Professional software testing services, QA, test automation, and nearshoring solutions from our Belgian-Moroccan team. Ensure your software works flawlessly with our comprehensive testing solutions." />
        <meta property="og:url" content="https://www.tecnarit.com" />
        <meta name="twitter:title" content="TECNARIT - Software Testing Excellence | Test IT Better" />
        <meta name="twitter:description" content="Expert software testing, QA, and nearshoring services. Belgian management with a skilled Moroccan team for optimal quality at competitive rates." />
        
        {/* JSON-LD structured data for better SEO */}
        <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "TECNARIT",
            "description": "Comprehensive software testing and quality assurance services with a Belgian-Moroccan nearshoring approach",
            "url": "https://www.tecnarit.com",
            "logo": "https://www.tecnarit.com/logo.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Cleydaellaan 16/5",
              "addressLocality": "Aartselaar",
              "addressRegion": "Antwerpen",
              "postalCode": "2630",
              "addressCountry": "BE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "51.1348",
              "longitude": "4.3825"
            },
            "telephone": "+32 71 55 09 46",
            "email": "info@tecnarit.com",
            "sameAs": [
              "https://www.linkedin.com/company/tecnarit/"
            ],
            "openingHours": "Mo,Tu,We,Th,Fr 09:00-17:00",
            "serviceArea": ["Belgium", "Netherlands", "France", "Germany", "Luxembourg"],
            "services": [
              {
                "@type": "Service",
                "name": "Functional Testing",
                "description": "Verify your software behaves exactly as expected by testing it against functional requirements and specifications."
              },
              {
                "@type": "Service",
                "name": "Performance Testing",
                "description": "Evaluate the performance, security, usability and reliability aspects of your software to ensure it meets quality standards."
              },
              {
                "@type": "Service",
                "name": "Test Automation",
                "description": "Accelerate testing cycles with customized test automation solutions that improve efficiency and test coverage."
              },
              {
                "@type": "Service",
                "name": "Load Testing",
                "description": "Ensure your software can handle expected and peak loads with comprehensive load testing."
              }
            ]
          }
        `}
        </script>
      </Helmet>
      <Navbar />
      <main>
        <HeroSection />
        
        {/* About Section before services */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="inline-block py-1 px-3 rounded-full bg-tecnarit-green/10 text-tecnarit-green text-sm font-medium mb-3">{t('about_section.label')}</span>
              <h2 className="text-2xl font-extrabold text-tecnarit-dark sm:text-3xl mb-4">
                {t('about_section.title')}
              </h2>
              <div className="max-w-3xl mx-auto">
                <p className="text-base mb-4 text-neutral-dark">
                  {t('about_section.paragraph1')}
                </p>
                <p className="text-base text-neutral-dark">
                  {t('about_section.paragraph2')}
                </p>
              </div>
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
