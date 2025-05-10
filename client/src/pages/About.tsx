import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { aboutUsHighlights } from "@/lib/data";
import { CheckCircle2, Users, Globe, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

// Import the TECNARIT logo for decoration
import tecnaritIcon from "../assets/tecnarit-icon.png";

const AboutPage = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-neutral-lightest min-h-screen flex flex-col">
      <Navbar />
      <main>
        <div className="h-2 w-full bg-gradient-to-r from-tecnarit-dark via-tecnarit-dark/90 to-tecnarit-dark"></div>
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
              <span className="inline-block py-1 px-3 rounded-full bg-tecnarit-green/20 text-tecnarit-lime text-sm font-medium mb-3">{t('about.title')}</span>
              <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl">
                {t('about.title')}
              </h1>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-neutral-light">
                {t('about.subtitle')}
              </p>
              <div className="w-20 h-1 mx-auto mt-6 bg-gradient-to-r from-tecnarit-green to-tecnarit-lime rounded-full"></div>
            </motion.div>
          </div>
        </section>
        
        <section className="py-16 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none">
            <img 
              src={tecnaritIcon} 
              alt="" 
              className="w-72 h-72"
              aria-hidden="true"
            />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <span className="inline-block py-1 px-3 rounded-full bg-tecnarit-green/10 text-tecnarit-green text-sm font-medium mb-3">{t('about.story')}</span>
              <h2 className="text-3xl font-extrabold text-tecnarit-dark">
                {t('about.who')}
              </h2>
              <div className="w-20 h-1 mx-auto mt-6 tecnarit-gradient-bg rounded-full"></div>
            </div>
            
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div>
                <p className="text-lg text-neutral-dark mb-6">
                  {t('about.overview.p1')}
                </p>
                <p className="text-lg text-neutral-dark mb-6">
                  {t('about.overview.p2')}
                </p>
                <p className="text-lg text-neutral-dark">
                  {t('about.overview.p3')}
                </p>
                
                <div className="mt-8 grid md:grid-cols-2 gap-4">
                  <div className="flex items-center p-4 bg-white rounded-lg shadow border border-neutral-light">
                    <MapPin className="h-8 w-8 text-tecnarit-green mr-4" />
                    <div>
                      <h4 className="font-medium text-tecnarit-dark">{t('about.locations.belgium')}</h4>
                      <p className="text-sm text-neutral-dark">{t('about.locations.belgium_team')}</p>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-white rounded-lg shadow border border-neutral-light">
                    <MapPin className="h-8 w-8 text-tecnarit-green mr-4" />
                    <div>
                      <h4 className="font-medium text-tecnarit-dark">{t('about.locations.morocco')}</h4>
                      <p className="text-sm text-neutral-dark">{t('about.locations.morocco_team')}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold text-tecnarit-dark mb-6">{t('about.advantages.title')}</h3>
                  
                  <div className="space-y-6">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md tecnarit-gradient-bg text-white">
                          <Globe className="h-6 w-6" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium text-tecnarit-dark">{t('about.advantages.expertise.title')}</h4>
                        <p className="mt-2 text-neutral-dark">
                          {t('about.advantages.expertise.description')}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md tecnarit-gradient-bg text-white">
                          <Users className="h-6 w-6" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium text-tecnarit-dark">{t('about.advantages.talent.title')}</h4>
                        <p className="mt-2 text-neutral-dark">
                          {t('about.advantages.talent.description')}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md tecnarit-gradient-bg text-white">
                          <CheckCircle2 className="h-6 w-6" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-medium text-tecnarit-dark">{t('about.advantages.cost.title')}</h4>
                        <p className="mt-2 text-neutral-dark">
                          {t('about.advantages.cost.description')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {aboutUsHighlights.map((highlight, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md border border-neutral-light"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="text-lg font-bold text-tecnarit-dark mb-3">{t(`about.highlights.${highlight.key}.title`)}</h3>
                  <p className="text-neutral-dark">{t(`about.highlights.${highlight.key}.description`)}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;