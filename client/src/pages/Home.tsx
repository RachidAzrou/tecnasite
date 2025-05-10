import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Home = () => {
  // Implement smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A') {
        const href = target.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const targetId = href.substring(1);
          const element = document.getElementById(targetId);
          if (element) {
            window.scrollTo({
              top: element.offsetTop,
              behavior: 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="bg-neutral-lightest min-h-screen flex flex-col">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyChooseUs />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
