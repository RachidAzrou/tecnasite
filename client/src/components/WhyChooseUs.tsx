import { motion } from "framer-motion";
import { Check, Zap, Award, Calendar } from "lucide-react";
import { features } from "@/lib/data";

const FeatureItem = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string 
}) => {
  return (
    <motion.div 
      className="flex"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center h-10 w-10 rounded-md bg-primary text-white">
          <Icon className="h-6 w-6" />
        </div>
      </div>
      <div className="ml-4">
        <h3 className="text-lg font-medium text-secondary">{title}</h3>
        <p className="mt-2 text-base text-neutral-dark">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const WhyChooseUs = () => {
  const icons = [Check, Zap, Award, Calendar];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-extrabold text-secondary sm:text-4xl">
              Why Choose Tecnarit for Software Testing
            </h2>
            <p className="mt-3 max-w-2xl text-lg text-neutral-dark">
              We deliver excellence in software testing with a focus on precision, efficiency, and valuable insights.
            </p>
            
            <div className="mt-8 space-y-6">
              {features.map((feature, index) => (
                <FeatureItem 
                  key={index}
                  icon={icons[index % icons.length]} 
                  title={feature.title} 
                  description={feature.description} 
                />
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="mt-10 lg:mt-0"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img 
              className="rounded-lg shadow-xl" 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800" 
              alt="Software testing team collaboration" 
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
