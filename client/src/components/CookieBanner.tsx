import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";

const CookieBanner = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookiesAccepted = localStorage.getItem('cookies-accepted');
    if (!cookiesAccepted) {
      // If not accepted, show the banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    // Save to localStorage that cookies are accepted
    localStorage.setItem('cookies-accepted', 'true');
    setIsVisible(false);
  };

  const declineCookies = () => {
    // Save to localStorage that cookies are declined
    localStorage.setItem('cookies-accepted', 'false');
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-tecnarit-dark text-white py-4 px-6 shadow-lg z-50 animate-fadeIn">
      <button 
        onClick={() => setIsVisible(false)} 
        className="absolute top-2 right-2 text-white"
        aria-label="Close cookie banner"
      >
        <X size={20} />
      </button>
      <div className="container mx-auto max-w-screen-xl">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <div className="text-sm max-w-3xl">
            <h3 className="text-lg font-semibold mb-2">{t('cookies.title')}</h3>
            <p className="mb-1">
              {t('cookies.description')}
            </p>
            <p className="text-tecnarit-lime">
              <Link to="/privacy" className="underline hover:text-white transition-colors">
                {t('cookies.learn_more')}
              </Link>
            </p>
          </div>
          <div className="flex gap-3 mt-3 lg:mt-0 flex-wrap">
            <Button
              variant="outline"
              className="bg-transparent border-tecnarit-lime text-white hover:bg-tecnarit-lime/20"
              onClick={declineCookies}
            >
              {t('cookies.decline')}
            </Button>
            <Button
              className="tecnarit-gradient-bg hover:opacity-90 border-none text-white"
              onClick={acceptCookies}
            >
              {t('cookies.accept')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;