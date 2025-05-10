import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "wouter";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

// Import the Tecnarit logo
import tecnaritLogo from "../assets/tecnarit-logo-clear.png";
import tecnaritIcon from "../assets/tecnarit-icon.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const { t } = useTranslation();
  
  const navLinks = [
    { name: t('nav.home'), href: "/" },
    { name: t('nav.services'), href: "/services" },
    { name: t('nav.about'), href: "/about" },
    { name: t('nav.contact'), href: "/contact" },
    { name: t('nav.privacy'), href: "/privacy" },
  ];

  return (
    <header className={cn(
      "bg-tecnarit-dark sticky top-0 z-50 transition-shadow duration-300",
      scrolled ? "shadow-md" : "shadow-sm"
    )}>
      <div className="max-w-7xl mx-auto px-0 pl-0 pr-4 sm:pl-0 sm:pr-6 lg:pl-0 lg:pr-8 relative">
        <div className="flex items-center py-4">
          {/* Logo - Left aligned */}
          <div className="flex-shrink-0 mr-auto">
            <Link href="/" className="flex items-center">
              <img 
                src={tecnaritLogo} 
                alt="TECNARIT Logo" 
                className="h-10 hidden md:block -ml-4" 
              />
              <img 
                src={tecnaritIcon} 
                alt="TECNARIT Logo" 
                className="h-8 md:hidden -ml-3" 
              />
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
            <nav className="flex items-center justify-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative text-white hover:text-tecnarit-lime font-medium group"
                >
                  {link.name}
                  <span className="absolute w-0 h-0.5 tecnarit-gradient-bg bottom-[-2px] left-0 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>
          </div>
          
          {/* Language Switcher - Right aligned */}
          <div className="hidden md:flex ml-auto">
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden ml-auto">
            <button
              type="button"
              className="text-white focus:outline-none"
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

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <div className="px-2 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center justify-between px-4 py-3 rounded-md text-base font-medium text-white hover:bg-tecnarit-green/20 hover:text-tecnarit-lime transition duration-150"
                onClick={closeMenu}
              >
                <span>{link.name}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-tecnarit-lime"></span>
              </a>
            ))}
            <div className="flex justify-between items-center mt-4 px-4 py-3 border-t border-white/10">
              <span className="text-white/70 text-sm">Taal / Language</span>
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
