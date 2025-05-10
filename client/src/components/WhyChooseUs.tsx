import React from "react";
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
        <div className="flex items-center justify-center h-10 w-10 rounded-md tecnarit-gradient-bg text-white">
          <Icon className="h-6 w-6" />
        </div>
      </div>
      <div className="ml-4">
        <h3 className="text-lg font-medium text-tecnarit-dark">{title}</h3>
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
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute left-0 top-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
        <div className="absolute top-1/3 -right-64 w-96 h-96 rounded-full bg-tecnarit-green"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-tecnarit-lime"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-tecnarit-green/10 text-tecnarit-green text-sm font-medium mb-3">Why Choose Us</span>
            <h2 className="text-3xl font-extrabold text-tecnarit-dark sm:text-4xl">
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
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
