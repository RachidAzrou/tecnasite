import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { Link } from "wouter";

const Home = () => {
  // No smooth scrolling needed anymore since we use proper page navigation
  useEffect(() => {
    // Effect can be used for other initialization if needed in the future
  }, []);

  return (
    <div className="bg-neutral-lightest min-h-screen flex flex-col">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyChooseUs />
        <AboutSection />
        
        {/* Call-to-Action Section */}
        <section className="py-16 bg-tecnarit-dark text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold sm:text-4xl mb-8">
              Ready to enhance your software quality?
            </h2>
            <p className="text-xl text-neutral-light max-w-3xl mx-auto mb-10">
              Our nearshoring model combines Belgian management expertise with our talented Moroccan team to deliver cost-effective, high-quality testing solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button className="tecnarit-gradient-bg hover:opacity-90 text-white" size="lg" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button variant="outline" className="border-tecnarit-green text-white hover:bg-tecnarit-green/20" size="lg" asChild>
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
