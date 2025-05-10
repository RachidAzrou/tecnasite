import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";

// Import the TECNARIT logo for decoration and map image
import tecnaritIcon from "../assets/tecnarit-icon.png";
import mapImage from "../assets/belgium_morocco_map.webp";

const AboutSection = () => {
  const { t } = useTranslation();
  
  const aboutPoints = [
    t('about_section.points.point1'),
    t('about_section.points.point2'),
    t('about_section.points.point3'),
    t('about_section.points.point4')
  ];

  return (
    <section id="about" className="py-16 bg-neutral-lightest relative overflow-hidden">
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
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-stretch">
          <motion.div 
            className="mb-10 lg:mb-0 flex items-center justify-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="rounded-lg border border-neutral-200 shadow-xl overflow-hidden relative w-full bg-gradient-to-br from-white to-neutral-50 p-6">
              <div className="absolute top-0 left-0 right-0 h-1.5 tecnarit-gradient-bg"></div>
              <h4 className="text-tecnarit-dark font-medium mb-4 text-center flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-tecnarit-green mr-2"></div>
                TECNARIT Nearshoring
                <div className="w-1.5 h-1.5 rounded-full bg-tecnarit-green ml-2"></div>
              </h4>
              <img 
                className="w-full object-contain mx-auto" 
                src={mapImage} 
                alt="Map showing TECNARIT offices in Belgium and Morocco" 
                style={{ height: '270px' }}
              />
              <div className="flex items-center justify-between mt-4 border-t border-neutral-100 pt-4">
                <div className="flex items-center px-3 py-1.5 bg-tecnarit-green/10 rounded-full">
                  <div className="w-2 h-2 rounded-full bg-tecnarit-green mr-2"></div>
                  <span className="font-medium text-tecnarit-dark text-xs">België: Antwerpen</span>
                </div>
                <div className="h-px bg-neutral-200 flex-grow mx-2"></div>
                <div className="flex items-center px-3 py-1.5 bg-tecnarit-green/10 rounded-full">
                  <div className="w-2 h-2 rounded-full bg-tecnarit-green mr-2"></div>
                  <span className="font-medium text-tecnarit-dark text-xs">Marokko: Agadir</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-tecnarit-green/10 text-tecnarit-green text-sm font-medium mb-3">{t('about_section.label')}</span>
            <h2 className="text-3xl font-extrabold text-tecnarit-dark sm:text-4xl">
              {t('about_section.title')}
            </h2>
            
            <div className="mt-6">
              <p className="text-base text-neutral-dark mb-4">
                {t('about_section.paragraph1')}
              </p>
              
              <div className="mt-6 mb-6 space-y-3">
                {aboutPoints.map((point, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-tecnarit-green flex-shrink-0 mt-0.5" />
                    <p className="ml-2 text-neutral-dark">{point}</p>
                  </div>
                ))}
              </div>
              
              <p className="text-base text-neutral-dark">
                {t('about_section.paragraph2')}
              </p>
            </div>
            

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
