import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";
import { contactFormSchema } from "@/lib/data";

// Import Tecnarit logo for decoration
import tecnaritIcon from "@assets/Color logo - no background.png";

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactPage = () => {
  const { toast } = useToast();
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      // Prepare mailto link with form data
      const subject = encodeURIComponent(`Contact from ${data.name} - TECNARIT Website`);
      const body = encodeURIComponent(
        `Name: ${data.name}\nEmail: ${data.email}\nCompany: ${data.company}\n\nMessage:\n${data.message}`
      );
      
      // Try to open mailto link
      window.location.href = `mailto:info@tecnarit.com?subject=${subject}&body=${body}`;
      
      // Also send to server for backup
      try {
        await apiRequest("POST", "/api/contact", data);
      } catch (e) {
        console.log("Backend storage failed, but email was opened", e);
      }
      
      toast({
        title: t('contact.form.success.title'),
        description: t('contact.form.success.description'),
        variant: "default",
      });
      reset();
    } catch (error) {
      toast({
        title: t('contact.form.error.title'),
        description: t('contact.form.error.description'),
        variant: "destructive",
      });
      console.error("Contact form error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-neutral-lightest min-h-screen flex flex-col">
      <Navbar />
      <main>
        <section className="py-16 bg-tecnarit-dark text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl">
                {t('contact.title')}
              </h1>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-neutral-light">
                {t('contact.subtitle')}
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-neutral-lightest text-neutral-dark relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute left-0 top-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-tecnarit-green"></div>
            <div className="absolute bottom-20 -left-24 w-64 h-64 rounded-full bg-tecnarit-lime"></div>
            <img 
              src={tecnaritIcon} 
              alt="" 
              className="absolute top-1/3 right-10 w-72 h-72 opacity-10"
              aria-hidden="true"
            />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div>
                  <h2 className="text-2xl font-bold text-tecnarit-dark mb-6">{t('contact.reach')}</h2>
                  <p className="text-neutral-dark mb-8">
                    {t('contact.intro')}
                  </p>
                  
                  <div className="space-y-6 mb-10">
                    <div className="flex flex-col sm:flex-row sm:items-start">
                      <div className="flex-shrink-0 mb-4 sm:mb-0">
                        <div className="flex items-center justify-center h-10 w-10 rounded-md tecnarit-gradient-bg text-white">
                          <MapPin className="h-5 w-5" />
                        </div>
                      </div>
                      <div className="sm:ml-4">
                        <h4 className="text-base font-medium text-tecnarit-dark">{t('contact.offices')}</h4>
                        <div className="mt-1">
                          <p className="text-neutral-dark">{t('contact.management_address')}</p>
                          <p className="text-neutral-dark">{t('contact.development_address')}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-start">
                      <div className="flex-shrink-0 mb-4 sm:mb-0">
                        <div className="flex items-center justify-center h-10 w-10 rounded-md tecnarit-gradient-bg text-white">
                          <Mail className="h-5 w-5" />
                        </div>
                      </div>
                      <div className="sm:ml-4">
                        <h4 className="text-base font-medium text-tecnarit-dark">{t('contact.email')}</h4>
                        <p className="mt-1 text-neutral-dark">info@tecnarit.com</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-start">
                      <div className="flex-shrink-0 mb-4 sm:mb-0">
                        <div className="flex items-center justify-center h-10 w-10 rounded-md tecnarit-gradient-bg text-white">
                          <Phone className="h-5 w-5" />
                        </div>
                      </div>
                      <div className="sm:ml-4">
                        <h4 className="text-base font-medium text-tecnarit-dark">{t('contact.phone')}</h4>
                        <p className="mt-1 text-neutral-dark">+32 71 55 09 46</p>
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="bg-white rounded-lg p-8 shadow-lg border border-tecnarit-green/10">
                  <h3 className="text-xl font-semibold text-tecnarit-dark mb-6">{t('contact.form.title')}</h3>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-tecnarit-dark">{t('contact.form.name')}</label>
                      <div className="mt-1">
                        <Input
                          id="name"
                          placeholder={t('contact.form.name_placeholder')}
                          required
                          {...register("name")}
                          className={errors.name ? "border-red-500" : "border-tecnarit-green/20 focus:border-tecnarit-green/50"}
                        />
                        {errors.name && (
                          <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-tecnarit-dark">{t('contact.form.email')}</label>
                      <div className="mt-1">
                        <Input
                          id="email"
                          type="email"
                          placeholder={t('contact.form.email_placeholder')}
                          required
                          {...register("email")}
                          className={errors.email ? "border-red-500" : "border-tecnarit-green/20 focus:border-tecnarit-green/50"}
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-tecnarit-dark">{t('contact.form.company')}</label>
                      <div className="mt-1">
                        <Input
                          id="company"
                          placeholder={t('contact.form.company_placeholder')}
                          required
                          {...register("company")}
                          className={errors.company ? "border-red-500" : "border-tecnarit-green/20 focus:border-tecnarit-green/50"}
                        />
                        {errors.company && (
                          <p className="mt-1 text-sm text-red-500">{errors.company.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-tecnarit-dark">{t('contact.form.message')}</label>
                      <div className="mt-1">
                        <Textarea
                          id="message"
                          rows={4}
                          placeholder={t('contact.form.message_placeholder')}
                          required
                          {...register("message")}
                          className={errors.message ? "border-red-500" : "border-tecnarit-green/20 focus:border-tecnarit-green/50"}
                        />
                        {errors.message && (
                          <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <Button 
                        type="submit" 
                        className="w-full tecnarit-gradient-bg hover:opacity-90 text-white" 
                        size="lg"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center">
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            {t('contact.form.sending')}
                          </span>
                        ) : (
                          <span className="flex items-center">
                            {t('contact.form.submit')}
                            <Send className="ml-2 h-4 w-4" />
                          </span>
                        )}
                      </Button>
                    </div>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;