import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { caseStudies } from "@/lib/data";

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
      className="bg-neutral-lightest rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <img 
        className="w-full h-48 object-cover" 
        src={image} 
        alt={title} 
      />
      <div className="p-6">
        <h3 className="text-lg font-bold text-secondary">{title}</h3>
        <p className="mt-2 text-sm text-neutral-dark">
          {description}
        </p>
        <div className="mt-4">
          <a 
            href="#contact" 
            className="text-primary hover:text-primary-dark font-medium text-sm transition-colors duration-200"
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
    <section id="case-studies" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-extrabold text-secondary sm:text-4xl">
            Case Studies
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-neutral-dark lg:mx-auto">
            See how our testing expertise has helped organizations deliver exceptional software
          </p>
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
          <Button size="lg" asChild>
            <a href="#contact">View All Case Studies</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
