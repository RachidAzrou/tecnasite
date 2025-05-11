import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "./components/ui/toaster";
import { TooltipProvider } from "./components/ui/tooltip";
import { I18nextProvider } from 'react-i18next';
import i18n from "./i18n/i18n";

// Initialize language from localStorage or default to English
const savedLanguage = localStorage.getItem('i18nextLng') || 'en';
i18n.changeLanguage(savedLanguage);

// Ensure language change persists by adding a listener
i18n.on('languageChanged', (lng) => {
  localStorage.setItem('i18nextLng', lng);
});

createRoot(document.getElementById("root")!).render(
  <I18nextProvider i18n={i18n}>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <App />
      </TooltipProvider>
    </QueryClientProvider>
  </I18nextProvider>
);
