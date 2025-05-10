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
import { Phone, Mail, MapPin, Linkedin, Twitter } from "lucide-react";
import { contactFormSchema } from "@/lib/data";

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
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-extrabold text-secondary sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-neutral-dark lg:mx-auto">
            Ready to elevate your software quality? Contact us today to discuss your testing needs.
          </p>
        </motion.div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="prose prose-lg">
              <h3 className="text-xl font-semibold text-secondary">Contact Information</h3>
              <p className="text-neutral-dark">
                We're here to help with all your software testing needs. Reach out to us through any of the following channels or fill out the form.
              </p>
              
              <div className="mt-8 space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-primary text-white">
                      <Phone className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-base font-medium text-secondary">Phone</h4>
                    <p className="mt-1 text-neutral-dark">+31 (0)6 123 456 78</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-primary text-white">
                      <Mail className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-base font-medium text-secondary">Email</h4>
                    <p className="mt-1 text-neutral-dark">info@tecnarit.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-md bg-primary text-white">
                      <MapPin className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-base font-medium text-secondary">Location</h4>
                    <p className="mt-1 text-neutral-dark">Netherlands</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-secondary">Follow Us</h3>
                <div className="flex space-x-6 mt-4">
                  <a href="#" className="text-neutral-dark hover:text-primary transition-colors duration-200">
                    <span className="sr-only">LinkedIn</span>
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-neutral-dark hover:text-primary transition-colors duration-200">
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
            <div className="bg-neutral-lightest rounded-lg p-8 shadow-md">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-secondary">Name</label>
                  <div className="mt-1">
                    <Input
                      id="name"
                      placeholder="Your name"
                      {...register("name")}
                      className={errors.name ? "border-red-500" : ""}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary">Email</label>
                  <div className="mt-1">
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      {...register("email")}
                      className={errors.email ? "border-red-500" : ""}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-secondary">Company</label>
                  <div className="mt-1">
                    <Input
                      id="company"
                      placeholder="Your company name"
                      {...register("company")}
                      className={errors.company ? "border-red-500" : ""}
                    />
                    {errors.company && (
                      <p className="mt-1 text-sm text-red-500">{errors.company.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-secondary">Message</label>
                  <div className="mt-1">
                    <Textarea
                      id="message"
                      rows={4}
                      placeholder="Tell us about your project and testing needs"
                      {...register("message")}
                      className={errors.message ? "border-red-500" : ""}
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <Button 
                    type="submit" 
                    className="w-full" 
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
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
