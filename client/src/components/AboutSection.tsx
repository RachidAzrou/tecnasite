import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-neutral-lightest">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          <motion.div 
            className="mb-10 lg:mb-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img 
              className="rounded-lg shadow-xl" 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800" 
              alt="IT professional analyzing software testing results" 
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-extrabold text-secondary sm:text-4xl">
              About Tecnarit
            </h2>
            <p className="mt-4 text-lg text-neutral-dark">
              Tecnarit is a leading software testing and quality assurance company dedicated to helping businesses deliver flawless digital experiences.
            </p>
            
            <div className="mt-6">
              <p className="text-base text-neutral-dark mb-4">
                Founded with a passion for quality and precision, we have evolved to become specialists in software testing. Our team of certified testing professionals brings extensive experience across various industries and technologies.
              </p>
              <p className="text-base text-neutral-dark mb-4">
                We understand that quality software is critical to your business success, which is why we apply rigorous testing methodologies to identify issues before they impact your users or your reputation.
              </p>
              <p className="text-base text-neutral-dark">
                Our mission is to partner with you to ensure your software meets the highest standards of quality, performance, and security. Whether you need comprehensive testing services or specialized expertise for a specific project, Tecnarit delivers results you can trust.
              </p>
            </div>
            
            <div className="mt-8">
              <Button size="lg" asChild>
                <a href="#contact">Get to Know Us</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
