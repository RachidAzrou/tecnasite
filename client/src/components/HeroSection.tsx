import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

// Import the TECNARIT logo for decoration
import tecnaritIcon from "../assets/tecnarit-icon.png";

const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <section id="home" className="relative bg-tecnarit-dark text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-7xl lg:pb-24 xl:pb-32">
          <div className="pt-10 mx-auto max-w-7xl px-4 sm:pt-12 sm:px-6 md:pt-16 lg:pt-20 lg:px-8 xl:pt-28">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
                <span className="block">{t('hero.title')}</span>
              </h1>
              <p className="mt-3 text-base text-neutral-light sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl mx-auto">
                {t('hero.subtitle')}
              </p>
              <div className="mt-5 sm:mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-0">
                <div className="rounded-md shadow">
                  <Button size="lg" className="w-full sm:w-auto tecnarit-gradient-bg hover:opacity-90 text-white border-none" asChild>
                    <a href="/contact">{t('hero.cta')}</a>
                  </Button>
                </div>
                <div className="sm:mt-0 sm:ml-3">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-tecnarit-lime bg-tecnarit-lime/20 text-white hover:bg-tecnarit-lime/40" asChild>
                    <a href="/services">{t('services.title')}</a>
                  </Button>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
      
      {/* Abstract geometric shapes background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-tecnarit-green"></div>
        <div className="absolute top-1/2 -left-24 w-64 h-64 rounded-full bg-tecnarit-lime"></div>
        <img 
          src={tecnaritIcon} 
          alt="" 
          className="absolute bottom-5 right-5 w-72 h-72 opacity-10"
          aria-hidden="true"
        />
      </div>

      <div className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="h-56 w-full relative sm:h-72 md:h-96 lg:w-full lg:h-full overflow-hidden">
          {/* Code testing animation */}
          <div className="absolute inset-0 bg-[#1E1E3F] flex flex-col justify-center overflow-hidden">
            <div className="w-full h-full flex items-center justify-center">
              <motion.div 
                className="w-[90%] max-w-2xl bg-[#1E1E3F] rounded-lg overflow-hidden shadow-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {/* Editor header */}
                <div className="px-4 py-2 bg-[#131336] flex items-center border-b border-gray-800">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="mx-auto text-xs text-neutral-400 font-mono">main.js - Quality Assurance</div>
                </div>
                
                {/* Code content with animation */}
                <div className="px-4 py-4 font-mono text-sm text-white overflow-hidden relative h-[300px]">
                  {/* Code before testing - with bugs */}
                  <motion.div
                    className="absolute inset-0 pl-4 pt-2"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{ duration: 0.5, delay: 2.0 }}
                  >
                    <div className="text-red-400 mb-1"># Code with bugs</div>
                    <pre className="text-white">
{`function calculateTotal(items) {
  let total = 0;
  for(let i = 0; i < items.lenght; i++) { // Typo in 'length'
    total += items[i].price;
  }
  return total;
}

function applyDiscount(total, discount) {
  return total - discount; // No validation
}`}
                    </pre>
                  </motion.div>
                  
                  {/* Code after testing - fixed */}
                  <motion.div
                    className="absolute inset-0 pl-4 pt-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 2.5 }}
                  >
                    <div className="text-green-400 mb-1"># Code after testing - fixed</div>
                    <pre className="text-white">
{`function calculateTotal(items) {
  if (!Array.isArray(items)) { // Added validation
    throw new Error('Invalid items array');
  }
  let total = 0;
  for(let i = 0; i < items.length; i++) { // Fixed typo
    total += items[i].price || 0; // Added fallback
  }
  return total;
}

function applyDiscount(total, discount) {
  if (discount > total) { // Added validation
    return 0;
  }
  return total - discount;
}`}
                    </pre>
                  </motion.div>
                  
                  {/* Testing overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-[#1E1E3F]/90 flex flex-col items-center justify-center text-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0.9, 0] }}
                    transition={{ 
                      duration: 2.5, 
                      times: [0, 0.2, 1],
                      delay: 1.2
                    }}
                  >
                    <div className="text-2xl font-semibold text-tecnarit-lime mb-3">Testing in Progress</div>
                    <div className="flex items-center space-x-2 text-neutral-300">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      >
                        <svg className="w-5 h-5 text-tecnarit-lime" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                      </motion.div>
                      <span>Finding and fixing issues...</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-tecnarit-dark to-transparent"></div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
