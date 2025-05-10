import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
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
      await apiRequest("POST", "/api/contact", data);
      toast({
        title: "Message sent!",
        description: "Thank you for your message. We'll get back to you soon.",
        variant: "default",
      });
      reset();
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
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
                Contact Us
              </h1>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-neutral-light">
                Get in touch with our team to discuss your software testing needs.
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div>
                  <h2 className="text-2xl font-bold text-tecnarit-dark mb-6">Reach Out To Us</h2>
                  <p className="text-neutral-dark mb-8">
                    Our nearshoring model combines the best of both worlds - Belgian management with our talented Moroccan team. 
                    We're here to help with all your software testing needs.
                  </p>
                  
                  <div className="space-y-6 mb-10">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-10 w-10 rounded-md tecnarit-gradient-bg text-white">
                          <MapPin className="h-5 w-5" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-base font-medium text-tecnarit-dark">Our Offices</h4>
                        <div className="mt-1">
                          <p className="text-neutral-dark">Management: Belgium</p>
                          <p className="text-neutral-dark">Development Team: Morocco</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-10 w-10 rounded-md tecnarit-gradient-bg text-white">
                          <Mail className="h-5 w-5" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-base font-medium text-tecnarit-dark">Email</h4>
                        <p className="mt-1 text-neutral-dark">info@tecnarit.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-10 w-10 rounded-md tecnarit-gradient-bg text-white">
                          <Phone className="h-5 w-5" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-base font-medium text-tecnarit-dark">Phone</h4>
                        <p className="mt-1 text-neutral-dark">+31 (0)6 123 456 78</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md border border-neutral-light">
                    <h3 className="text-lg font-medium text-tecnarit-dark mb-4">Our Nearshoring Model Benefits</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-tecnarit-green flex-shrink-0 mt-0.5" />
                        <p className="ml-2 text-neutral-dark">Cost-effective software testing solutions</p>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-tecnarit-green flex-shrink-0 mt-0.5" />
                        <p className="ml-2 text-neutral-dark">Belgian management ensures smooth communication</p>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-tecnarit-green flex-shrink-0 mt-0.5" />
                        <p className="ml-2 text-neutral-dark">Talented Moroccan team delivers high-quality testing</p>
                      </li>
                    </ul>
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
                  <h3 className="text-xl font-semibold text-tecnarit-dark mb-6">Send us a message</h3>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-tecnarit-dark">Name</label>
                      <div className="mt-1">
                        <Input
                          id="name"
                          placeholder="Your name"
                          {...register("name")}
                          className={errors.name ? "border-red-500" : "border-tecnarit-green/20 focus:border-tecnarit-green/50"}
                        />
                        {errors.name && (
                          <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-tecnarit-dark">Email</label>
                      <div className="mt-1">
                        <Input
                          id="email"
                          type="email"
                          placeholder="your.email@example.com"
                          {...register("email")}
                          className={errors.email ? "border-red-500" : "border-tecnarit-green/20 focus:border-tecnarit-green/50"}
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-tecnarit-dark">Company</label>
                      <div className="mt-1">
                        <Input
                          id="company"
                          placeholder="Your company name"
                          {...register("company")}
                          className={errors.company ? "border-red-500" : "border-tecnarit-green/20 focus:border-tecnarit-green/50"}
                        />
                        {errors.company && (
                          <p className="mt-1 text-sm text-red-500">{errors.company.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-tecnarit-dark">Message</label>
                      <div className="mt-1">
                        <Textarea
                          id="message"
                          rows={4}
                          placeholder="Tell us about your project and testing needs"
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
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center">
                            Send Message
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