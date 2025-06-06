import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";

// Import the TECNARIT logo for decoration
import tecnaritIcon from "../assets/tecnarit-icon.png";
import teamImage from "@assets/Naamloos-5.webp";

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
      {/* No background decoration */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-1 lg:gap-12 lg:items-stretch">
          
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="text-center">
              <span className="inline-block py-1 px-3 rounded-full bg-tecnarit-green/10 text-tecnarit-green text-sm font-medium mb-3">{t('about_section.label')}</span>
              <h2 className="text-3xl font-extrabold text-tecnarit-dark sm:text-4xl">
                {t('about_section.title')}
              </h2>
            </div>
            
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
