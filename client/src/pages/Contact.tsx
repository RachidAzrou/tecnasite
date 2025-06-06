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
import { Helmet } from "react-helmet";
import { Breadcrumb } from "@/components/ui/breadcrumb";

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
      // Send form data to serverless function for Vercel deployment
      const response = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      
      const result = await response.json();
      
      if (response.ok) {
        if (result.emailSent) {
          toast({
            title: t('contact.form.success.title'),
            description: t('contact.form.success.description'),
            variant: "default",
          });
        } else {
          // Email was not sent, but still show success to user
          console.warn("Email sending failed, but form submission was received");
          toast({
            title: t('contact.form.success.title'),
            description: t('contact.form.success.description'),
            variant: "default",
          });
        }
        reset();
      } else {
        throw new Error(result.message || "Something went wrong");
      }
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
      <Helmet>
        <title>{t('page_titles.contact')}</title>
        <meta name="description" content="Get in touch with TECNARIT for professional software testing services including functional testing, performance testing, load testing, and test automation. Our Belgian-Moroccan nearshoring model ensures quality at competitive rates." />
        <meta name="keywords" content="contact TECNARIT, software testing services, QA services, nearshoring, test automation services, functional testing company, performance testing specialists, load testing experts, software quality assurance" />
        <link rel="canonical" href="https://www.tecnarit.com/contact" />
        <meta property="og:title" content="Contact TECNARIT | Software Testing and QA Services" />
        <meta property="og:description" content="Reach out to TECNARIT for expert software testing solutions. Our Belgian-Moroccan nearshoring model delivers high-quality testing services at competitive rates." />
        <meta property="og:url" content="https://www.tecnarit.com/contact" />
        <meta name="twitter:title" content="Contact TECNARIT for Software Testing Services" />
        <meta name="twitter:description" content="Get in touch with our testing experts for functional testing, performance testing, load testing, and test automation services." />
      </Helmet>
      <Navbar />
      <main>
        <div className="h-2 w-full bg-gradient-to-r from-tecnarit-dark via-tecnarit-dark/90 to-tecnarit-dark"></div>
        
        {/* Breadcrumb Navigation - Good for SEO and user navigation */}
        <div className="bg-tecnarit-dark/95 py-2 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <Breadcrumb 
              segments={[
                { name: t('nav.contact'), href: '/contact' }
              ]}
            />
          </div>
        </div>
        <section className="pt-14 pb-16 relative overflow-hidden text-white" style={{ background: 'linear-gradient(180deg, #0f1729 0%, #132b23 50%, #183728 100%)' }}>
          {/* Animated background elements */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-tecnarit-green/5 animate-pulse" style={{ animationDuration: '7s' }}></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-tecnarit-lime/5 animate-pulse" style={{ animationDuration: '5s' }}></div>
            <div className="absolute top-1/2 right-1/4 w-24 h-24 rounded-full bg-tecnarit-green/5 animate-pulse" style={{ animationDuration: '8s' }}></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-tecnarit-green/20 text-tecnarit-lime text-sm font-medium mb-3">{t('contact.title')}</span>
              <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl">
                {t('contact.title')}
              </h1>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-neutral-light">
                {t('contact.subtitle')}
              </p>
              <div className="w-20 h-1 mx-auto mt-6 bg-gradient-to-r from-tecnarit-green to-tecnarit-lime rounded-full"></div>
            </motion.div>
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