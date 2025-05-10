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
  
  // Make sure English is set on first load
  useEffect(() => {
    // Only force English if the language isn't explicitly set yet
    if (!localStorage.getItem('i18nextLng')) {
      i18n.changeLanguage('en');
    }
  }, [i18n]);
  
  // Ensure we always have a valid language code
  const effectiveLanguage = i18n.language?.split('-')[0] || 'en'; // Handle 'en-US' format
  const currentLanguage = languages.find(lang => lang.code === effectiveLanguage) || languages[0];

  const changeLanguage = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
    setOpen(false);
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center gap-1 text-sm font-medium text-white hover:text-tecnarit-lime">
          <Globe className="h-4 w-4" />
          <span className="inline-block font-medium">{currentLanguage.shortcode}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((language) => (
          <DropdownMenuItem 
            key={language.code}
            onClick={() => changeLanguage(language.code)}
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