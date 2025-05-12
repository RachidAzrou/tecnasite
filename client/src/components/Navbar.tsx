import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { 
  Menu, X, Home, Wrench, Info, Mail, Check, CheckCircle, 
  TestTube, Ribbon, Bug, BugPlay, Code, HelpCircle, 
  FileQuestion, Building, Users, HandMetal, Handshake, 
  HardHat, Workflow, ScrollText, Microscope, TestTubes,
  BriefcaseBusiness
} from "lucide-react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import { motion, AnimatePresence } from "framer-motion";

// Import the Tecnarit logo
import tecnaritLogo from "../assets/tecnarit-logo-clear.png";
import tecnaritIcon from "../assets/tecnarit-icon.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Add body scroll lock when sidebar is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const { t } = useTranslation();
  
  // Preview van verschillende iconen voor Services en About
  const servicesIconOptions = [
    <HandMetal className="w-5 h-5" />,
    <Handshake className="w-5 h-5" />,
    <Workflow className="w-5 h-5" />,
    <Microscope className="w-5 h-5" />,
    <TestTubes className="w-5 h-5" />
  ];
  
  const aboutIconOptions = [
    <Users className="w-5 h-5" />,
    <Building className="w-5 h-5" />,
    <HelpCircle className="w-5 h-5" />,
    <FileQuestion className="w-5 h-5" />,
    <Info className="w-5 h-5" />
  ];
  
  const mainNavLinks = [
    { name: t('nav.home'), href: "/", icon: <Home className="w-5 h-5" /> },
    { name: t('nav.services'), href: "/services", icon: <Workflow className="w-5 h-5" /> },
    { name: t('nav.about'), href: "/about", icon: <Building className="w-5 h-5" /> },
    { name: t('nav.join_us'), href: "/join-us", icon: <Handshake className="w-5 h-5" /> },
    { name: t('nav.jobs'), href: "/jobs", icon: <HardHat className="w-5 h-5" /> },
  ];
  
  // Separate contact for special styling
  const contactLink = { name: t('nav.contact'), href: "/contact", icon: <Mail className="w-5 h-5" /> };
  
  // Combined for mobile menu
  const allNavLinks = [...mainNavLinks, contactLink];
  
  const isActive = (path: string) => location === path;

  return (
    <header className={cn(
      "sticky top-0 z-50 transition-shadow duration-300",
      scrolled ? "shadow-md" : "shadow-sm"
    )} style={{ background: 'linear-gradient(180deg, #0f1729 0%, #0f1729 100%)' }}>
      <div className="max-w-7xl mx-auto px-1 sm:px-4 lg:px-8 relative">
        <div className="flex items-center py-4">
          {/* Logo - Centered on mobile, left-aligned on desktop */}
          <div className="flex-shrink-0 md:mr-auto w-full md:w-auto">
            <Link href="/" className="flex items-center md:justify-start justify-center">
              <img 
                src={tecnaritLogo} 
                alt="TECNARIT Logo" 
                className="h-8 md:h-10 md:-ml-4" 
              />
            </Link>
          </div>

          {/* Desktop Navigation - Left aligned */}
          <div className="hidden md:flex justify-start ml-8">
            <nav className="flex items-center space-x-8">
              {mainNavLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "relative text-white hover:text-tecnarit-lime font-medium group",
                    isActive(link.href) && "text-tecnarit-lime"
                  )}
                >
                  {link.name}
                  <span className={cn(
                    "absolute h-0.5 tecnarit-gradient-bg bottom-[-2px] left-0 transition-all duration-300",
                    isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                  )} />
                </a>
              ))}
            </nav>
          </div>
          
          {/* Contact Button and Language Switcher - Right aligned */}
          <div className="hidden md:flex ml-auto space-x-6 items-center">
            <a
              href={contactLink.href}
              className={cn(
                "tecnarit-gradient-bg hover:opacity-90 text-white px-4 py-2 rounded-md font-medium transition-colors border-none",
                isActive(contactLink.href) && "opacity-90"
              )}
            >
              {contactLink.name}
            </a>
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Toggle - Absolute position for centered logo */}
          <div className="md:hidden absolute right-3 top-1/2 transform -translate-y-1/2">
            <button
              type="button"
              className="text-white focus:outline-none p-2 hover:bg-tecnarit-green/10 rounded-full transition-colors"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={closeMenu}
            />
            
            {/* Slide-in sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed top-0 right-0 bottom-0 w-3/4 max-w-xs bg-slate-900 z-50 md:hidden shadow-xl flex flex-col"
            >
              <div className="flex items-center justify-between p-5 border-b border-white/10">
                <h2 className="text-2xl text-white font-normal py-1 flex items-center">
                  <Menu className="w-5 h-5 mr-2" />
                  Menu
                </h2>
                <button
                  type="button"
                  className="text-white focus:outline-none p-2"
                  onClick={closeMenu}
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto py-4">
                <nav className="flex flex-col space-y-1">
                  {allNavLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className={cn(
                        "flex items-center gap-3 px-6 py-4 text-base font-medium transition duration-150 relative",
                        isActive(link.href) 
                          ? "text-tecnarit-lime bg-tecnarit-green/20 border-r-4 border-tecnarit-lime" 
                          : "text-white hover:bg-tecnarit-green/10 hover:text-tecnarit-lime hover:border-r-4 hover:border-tecnarit-lime/40"
                      )}
                      onClick={closeMenu}
                    >
                      {link.icon}
                      <span>{link.name}</span>
                    </a>
                  ))}
                </nav>
              </div>
              
              <div className="p-4 border-t border-white/10">
                <div className="flex justify-between items-center">
                  <span className="text-white/70 text-sm">Taal / Language</span>
                  <LanguageSwitcher />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
