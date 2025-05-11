import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const languages = [
  { code: 'en', name: 'English', shortcode: 'EN' },
  { code: 'nl', name: 'Nederlands', shortcode: 'NL' },
  { code: 'fr', name: 'Français', shortcode: 'FR' }
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(localStorage.getItem('i18nextLng') || 'en');
  
  // Update language in all contexts when the component mounts
  useEffect(() => {
    // Force the i18n to use the stored language on mount
    const storedLanguage = localStorage.getItem('i18nextLng');
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage);
      setCurrentLang(storedLanguage);
    }
  }, [i18n]);
  
  // Ensure we always have a valid language code
  const effectiveLanguage = currentLang.split('-')[0] || 'en'; // Handle 'en-US' format
  const currentLangObj = languages.find(lang => lang.code === effectiveLanguage) || languages[0];

  // Handler for language change
  const handleLanguageChange = (languageCode: string) => {
    // Store in localStorage
    localStorage.setItem('i18nextLng', languageCode);
    
    // Update i18n
    i18n.changeLanguage(languageCode);
    
    // Update local state
    setCurrentLang(languageCode);
    setOpen(false);
  };

  // For debugging - log language info
  useEffect(() => {
    console.log('Current i18n language:', i18n.language);
    console.log('Current localStorage language:', localStorage.getItem('i18nextLng'));
  }, [i18n.language, currentLang]);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center gap-1 text-sm font-medium text-white hover:text-tecnarit-lime">
          <Globe className="h-4 w-4" />
          <span className="inline-block font-medium">{currentLangObj.shortcode}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((language) => (
          <DropdownMenuItem 
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            className={`text-neutral-dark hover:text-white ${language.code === effectiveLanguage ? "bg-tecnarit-green/10 font-medium" : ""}`}
          >
            <span className="w-8 inline-block font-bold">{language.shortcode}</span>
            <span>{language.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;