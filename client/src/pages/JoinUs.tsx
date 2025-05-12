import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle } from "lucide-react";
import { Breadcrumb } from "@/components/ui/breadcrumb";

const JoinUs = () => {
  const { t } = useTranslation();

  // Benefits of working at TECNARIT
  const benefits = [
    {
      title: "Continuous Growth",
      description: "We invest in your development through certifications, training programs, and learning opportunities."
    },
    {
      title: "Work-Life Balance",
      description: "Flexible working hours and policies that respect your personal time and well-being."
    },
    {
      title: "International Environment",
      description: "Gain experience in a multicultural setting with our Belgium-Morocco nearshoring model."
    },
    {
      title: "Challenging Projects",
      description: "Work on diverse, challenging projects across various industries and technologies."
    },
    {
      title: "Career Advancement",
      description: "Clear growth paths and opportunities to advance your testing career."
    },
    {
      title: "Competitive Compensation",
      description: "Attractive salary packages and benefits aligned with your skills and experience."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>{t('page_titles.join_us')}</title>
        <meta name="description" content="Join TECNARIT's team of talented QA professionals. We offer exciting career opportunities in functional testing, performance testing, and test automation." />
        <meta name="keywords" content="software testing careers, QA jobs, test engineer positions, quality assurance employment, software testing team, nearshoring jobs" />
        <link rel="canonical" href="https://www.tecnarit.com/join-us" />
        <meta property="og:title" content="Join Our Testing Team | TECNARIT Software Testing" />
        <meta property="og:description" content="Join TECNARIT's team of talented QA professionals. We offer exciting career opportunities in functional testing, performance testing, and test automation." />
        <meta property="og:url" content="https://www.tecnarit.com/join-us" />
        <meta name="twitter:title" content="Join Our Testing Team | TECNARIT Software Testing" />
        <meta name="twitter:description" content="Join TECNARIT's team of talented QA professionals. We offer exciting career opportunities in functional testing, performance testing, and test automation." />
      </Helmet>
      
      <Navbar />
      <main className="flex-grow">

        
        {/* Breadcrumb Navigation */}
        <div className="bg-tecnarit-dark/95 py-2 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <Breadcrumb 
              segments={[
                { name: 'Join Us', href: '/join-us' }
              ]}
            />
          </div>
        </div>

        {/* Hero Section */}
        <section className="pt-14 pb-16 relative overflow-hidden text-white" style={{ background: 'linear-gradient(180deg, #0f1729 0%, #132b23 50%, #183728 100%)' }}>
          {/* Animated background elements */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-tecnarit-green/5 animate-pulse" style={{ animationDuration: '7s' }}></div>
            <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-tecnarit-green/5 animate-pulse" style={{ animationDuration: '6s' }}></div>
            <div className="absolute top-40 right-40 w-20 h-20 rounded-full bg-tecnarit-lime/5 animate-pulse" style={{ animationDuration: '8s' }}></div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-6"
              >
                <span className="inline-block py-1 px-3 rounded-full bg-tecnarit-green/20 text-tecnarit-lime text-sm font-medium">{t('nav.join_us')}</span>
              </motion.div>
              
              <motion.h1 
                className="text-4xl sm:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {t('join_us.title')}
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-300 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {t('join_us.subtitle')}
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Link href="/jobs">
                  <Button className="tecnarit-gradient-bg hover:opacity-90 text-white font-semibold px-8 py-3 rounded-md border-none">
                    {t('join_us.openings.button')}
                  </Button>
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="w-20 h-1 mx-auto mt-12 tecnarit-gradient-bg rounded-full"
              ></motion.div>
            </div>
          </div>
        </section>

        {/* Why Join Us Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-tecnarit-dark mb-4">Why Join TECNARIT?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're not just a testing company; we're a team of passionate professionals dedicated to excellence in software quality.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start">
                    <div className="mr-4 text-tecnarit-green">
                      <CheckCircle size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-tecnarit-dark mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Culture Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-10">
              <div className="lg:w-1/2">
                <motion.div 
                  className="rounded-lg overflow-hidden shadow-xl"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&h=800&q=80" 
                    alt="TECNARIT office culture" 
                    className="w-full h-auto"
                  />
                </motion.div>
              </div>
              <div className="lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl sm:text-4xl font-bold text-tecnarit-dark mb-6">Our Culture</h2>
                  <p className="text-lg text-gray-600 mb-6">
                    At TECNARIT, we've cultivated a working environment that values collaboration, innovation, and personal growth. We believe the best results come from teams that are empowered, respected, and inspired.
                  </p>
                  <p className="text-lg text-gray-600 mb-6">
                    Our nearshoring model between Belgium and Morocco creates a unique multicultural atmosphere where diverse perspectives drive creative solutions and professional development.
                  </p>
                  <p className="text-lg text-gray-600">
                    We prioritize a healthy work-life balance, recognize achievements, and provide opportunities for growth at every career stage.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-tecnarit-dark text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 
              className="text-3xl sm:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Ready to Take the Next Step in Your Testing Career?
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Explore our current openings or submit your resume for future opportunities.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Link href="/jobs">
                <Button className="bg-tecnarit-lime hover:bg-tecnarit-lime/90 text-tecnarit-dark font-semibold px-8 py-6 rounded-md text-lg">
                  Browse Job Openings
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default JoinUs;