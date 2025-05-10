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
import { Phone, Mail, MapPin, Linkedin, Twitter, Send, CheckCircle } from "lucide-react";
import { contactFormSchema } from "@/lib/data";

// Import Tecnarit logo for decoration
import tecnaritIcon from "../assets/tecnarit-icon.png";

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactSection = () => {
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
            title: "Message sent!",
            description: "Thank you for your message. We'll get back to you soon.",
            variant: "default",
          });
        } else {
          // Email was not sent, but still show success to user
          console.warn("Email sending failed, but form submission was received");
          toast({
            title: "Message sent!",
            description: "Thank you for your message. We'll get back to you soon.",
            variant: "default",
          });
        }
        reset();
      } else {
        throw new Error(result.message || "Something went wrong");
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
      console.error("Contact form error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-tecnarit-dark text-white relative overflow-hidden">
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
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-tecnarit-green/10 text-tecnarit-green text-sm font-medium mb-3">Contact Us</span>
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Get in Touch
          </h2>
          <div className="mt-4 max-w-2xl lg:mx-auto">
            <p className="text-xl text-neutral-light">
              Ready to elevate your software quality? Contact us today to discuss your testing needs.
            </p>
            <div className="w-20 h-1 mx-auto mt-6 tecnarit-gradient-bg rounded-full"></div>
          </div>
        </motion.div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="prose prose-lg prose-invert">
              <h3 className="text-xl font-semibold text-white">Contact Information</h3>
              <p className="text-neutral-light">
                We're here to help with all your software testing needs. Reach out to us through any of the following channels or fill out the form.
              </p>
              
              <div className="mt-8 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-start">
                  <div className="flex-shrink-0 mb-4 sm:mb-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md tecnarit-gradient-bg text-white">
                      <Phone className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="sm:ml-4">
                    <h4 className="text-base font-medium text-white">Phone</h4>
                    <p className="mt-1 text-neutral-light">+32 71 55 09 46</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-start">
                  <div className="flex-shrink-0 mb-4 sm:mb-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md tecnarit-gradient-bg text-white">
                      <Mail className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="sm:ml-4">
                    <h4 className="text-base font-medium text-white">Email</h4>
                    <p className="mt-1 text-neutral-light">info@tecnarit.com</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-start">
                  <div className="flex-shrink-0 mb-4 sm:mb-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md tecnarit-gradient-bg text-white">
                      <MapPin className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="sm:ml-4">
                    <h4 className="text-base font-medium text-white">Locations</h4>
                    <p className="mt-1 text-neutral-light">Belgium: Antwerpen</p>
                    <p className="text-neutral-light">Morocco: Agadir</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-xl font-semibold text-white">Why Choose Our Testing Services?</h3>
                <div className="mt-4 space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-tecnarit-green flex-shrink-0 mt-0.5" />
                    <p className="ml-2 text-neutral-light">Comprehensive testing strategies tailored to your needs</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-tecnarit-green flex-shrink-0 mt-0.5" />
                    <p className="ml-2 text-neutral-light">Experienced team of certified testing professionals</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-tecnarit-green flex-shrink-0 mt-0.5" />
                    <p className="ml-2 text-neutral-light">Fast turnaround times and transparent reporting</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-white">Follow Us</h3>
                <div className="flex space-x-6 mt-4">
                  <a href="#" className="text-neutral-light hover:text-tecnarit-lime transition-colors duration-200">
                    <span className="sr-only">LinkedIn</span>
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-neutral-light hover:text-tecnarit-lime transition-colors duration-200">
                    <span className="sr-only">Twitter</span>
                    <Twitter className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="mt-10 lg:mt-0"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white rounded-lg p-8 shadow-lg border border-tecnarit-green/10">
              <h3 className="text-lg font-semibold text-tecnarit-dark mb-6">Send us a message</h3>
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
  );
};

export default ContactSection;
