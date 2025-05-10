import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

// Import the TECNARIT logo for decoration
import tecnaritIcon from "../assets/tecnarit-icon.png";

const AboutSection = () => {
  const aboutPoints = [
    "Expert testing team with certified professionals",
    "Experience across diverse industries and technologies",
    "Focus on quality, precision and thorough methodology",
    "Commitment to reliable, secure software solutions"
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
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          <motion.div 
            className="mb-10 lg:mb-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="rounded-lg shadow-xl overflow-hidden relative">
              <img 
                className="w-full" 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800" 
                alt="IT professional analyzing software testing results" 
              />
              {/* Overlay with gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-tecnarit-green/20 to-transparent"></div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-tecnarit-green/10 text-tecnarit-green text-sm font-medium mb-3">About Us</span>
            <h2 className="text-3xl font-extrabold text-tecnarit-dark sm:text-4xl">
              About TECNARIT
            </h2>
            <p className="mt-4 text-lg text-neutral-dark">
              TECNARIT is a leading software testing and quality assurance company dedicated to helping businesses deliver flawless digital experiences.
            </p>
            
            <div className="mt-6">
              <p className="text-base text-neutral-dark mb-4">
                Founded with a passion for quality and precision, we have evolved to become specialists in software testing. Our team of certified testing professionals brings extensive experience across various industries and technologies.
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
                Our mission is to partner with you to ensure your software meets the highest standards of quality, performance, and security. Whether you need comprehensive testing services or specialized expertise for a specific project, TECNARIT delivers results you can trust.
              </p>
            </div>
            

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
