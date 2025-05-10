import { motion } from "framer-motion";
import { Check, Zap, Shield, RefreshCw, Monitor, ClipboardList } from "lucide-react";
import { serviceItems } from "@/lib/data";

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
      className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-6">
        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="mt-4 text-lg font-medium text-secondary">{title}</h3>
        <p className="mt-2 text-base text-neutral-dark">
          {description}
        </p>
        <div className="mt-4">
          <a href="#contact" className="text-primary hover:text-primary-dark font-medium transition-colors duration-200">
            Learn more →
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const icons = [Check, Zap, Shield, RefreshCw, Monitor, ClipboardList];

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
          <h2 className="text-3xl font-extrabold text-secondary sm:text-4xl">
            Our Software Testing Services
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-neutral-dark lg:mx-auto">
            Comprehensive testing solutions tailored to your specific needs
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {serviceItems.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={icons[index % icons.length]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
