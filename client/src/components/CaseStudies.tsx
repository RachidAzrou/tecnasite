import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { caseStudies } from "@/lib/data";
import { ExternalLink } from "lucide-react";

const CaseStudyCard = ({ 
  title, 
  description, 
  image 
}: { 
  title: string; 
  description: string; 
  image: string 
}) => {
  return (
    <motion.div 
      className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl border border-neutral-light"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <div className="relative">
        <img 
          className="w-full h-48 object-cover" 
          src={image} 
          alt={title} 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-tecnarit-dark/50"></div>
      </div>
      <div className="p-6 relative">
        <div className="absolute right-6 top-0 transform -translate-y-1/2">
          <div className="w-10 h-10 rounded-full tecnarit-gradient-bg flex items-center justify-center shadow-lg">
            <ExternalLink className="h-5 w-5 text-white" />
          </div>
        </div>
        <h3 className="text-lg font-bold text-tecnarit-dark">{title}</h3>
        <p className="mt-2 text-sm text-neutral-dark">
          {description}
        </p>
        <div className="mt-4">
          <a 
            href="#contact" 
            className="text-tecnarit-green hover:text-tecnarit-lime font-medium text-sm transition-colors duration-200"
          >
            Read full case study →
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-16 bg-neutral-lightest">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-tecnarit-green/10 text-tecnarit-green text-sm font-medium mb-3">Success Stories</span>
          <h2 className="text-3xl font-extrabold text-tecnarit-dark sm:text-4xl">
            Case Studies
          </h2>
          <div className="mt-4 max-w-2xl lg:mx-auto">
            <p className="text-xl text-neutral-dark">
              See how our testing expertise has helped organizations deliver exceptional software
            </p>
            <div className="w-20 h-1 mx-auto mt-6 tecnarit-gradient-bg rounded-full"></div>
          </div>
        </motion.div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <CaseStudyCard 
              key={index}
              title={study.title}
              description={study.description}
              image={study.image}
            />
          ))}
        </div>

        <motion.div 
          className="mt-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button size="lg" className="tecnarit-gradient-bg hover:opacity-90 text-white" asChild>
            <a href="#contact">View All Case Studies</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
