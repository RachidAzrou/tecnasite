import { motion } from "framer-motion";
import { CheckSquare, BarChart2, Cog } from "lucide-react";
import { serviceItems } from "@/lib/data";
import { useTranslation } from "react-i18next";

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
      <div className="relative p-6">
        <div className="absolute top-0 right-0 w-32 h-32 tecnarit-gradient-bg opacity-5 rounded-bl-full"></div>
        <div className="flex items-center justify-center h-12 w-12 rounded-md tecnarit-gradient-bg text-white">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="mt-4 text-lg font-medium text-tecnarit-dark">{title}</h3>
        <p className="mt-2 text-base text-neutral-dark">
          {description}
        </p>

      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const { t } = useTranslation();
  const icons = [CheckSquare, BarChart2, Cog];

  return (
    <section id="services" className="py-16 bg-neutral-lightest">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-tecnarit-green/10 text-tecnarit-green text-sm font-medium mb-3">{t('services.title')}</span>
          <h2 className="text-3xl font-extrabold text-tecnarit-dark sm:text-4xl">
            {t('services.title')}
          </h2>
          <div className="mt-4 max-w-2xl lg:mx-auto">
            <p className="text-xl text-neutral-dark">
              {t('services.subtitle')}
            </p>
            <div className="w-20 h-1 mx-auto mt-6 tecnarit-gradient-bg rounded-full"></div>
          </div>
        </motion.div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {serviceItems.map((service, index) => (
              <ServiceCard 
                key={index}
                title={t(`services.${service.key}.title`)}
                description={t(`services.${service.key}.description`)}
                icon={icons[index % icons.length]}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
