import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="home" className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:w-full lg:max-w-7xl lg:pb-24 xl:pb-32">
          <div className="pt-10 mx-auto max-w-7xl px-4 sm:pt-12 sm:px-6 md:pt-16 lg:pt-20 lg:px-8 xl:pt-28">
            <motion.div 
              className="sm:text-center lg:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl tracking-tight font-extrabold text-secondary sm:text-5xl md:text-6xl">
                <span className="block">Elevate Your Software Quality with</span>
                <span className="block text-primary">Expert Testing Solutions</span>
              </h1>
              <p className="mt-3 text-base text-neutral-dark sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                At Tecnarit, we specialize in comprehensive software testing and quality assurance services that ensure your applications work flawlessly, every time.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Button size="lg" asChild>
                    <a href="#contact">Get Started</a>
                  </Button>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Button size="lg" variant="outline" asChild>
                    <a href="#services">Our Services</a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img 
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" 
          src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&h=1000" 
          alt="Software testing professional analyzing code"
        />
      </div>
    </section>
  );
};

export default HeroSection;
