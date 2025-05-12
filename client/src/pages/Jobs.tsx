import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
//import { apiRequest } from "@/lib/queryClient";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Loader2, CheckCircle, Clock, Award, Briefcase, FileUp } from "lucide-react";

// Job listings data
const jobListings = [
  {
    id: "qa_analyst",
    title: "Quality Assurance Analyst",
    description: "We're looking for an experienced QA Analyst to join our testing team.",
    location: "Hybrid (Belgium or Morocco)",
    type: "Full-time",
    requirements: [
      "4+ years of experience in software quality assurance",
      "Strong understanding of software testing methodologies and life cycles",
      "Experience with test case design, test execution, and defect reporting",
      "Knowledge of testing tools such as JIRA, TestRail, and Zephyr",
      "ISTQB certification (Foundation level minimum)",
      "Excellent communication skills in English (Dutch and/or French is a plus)",
      "Proactive approach to problem-solving and quality improvement",
      "Bachelor's degree in Computer Science, Information Technology, or related field"
    ],
    responsibilities: [
      "Design, develop and execute test cases for functional and non-functional testing",
      "Identify, document, and track defects through resolution",
      "Collaborate with development teams to improve software quality",
      "Perform regression testing to ensure software stability",
      "Create detailed test reports and documentation",
      "Participate in requirement analysis and test planning",
      "Contribute to continuous improvement of testing processes"
    ]
  },
  {
    id: "qa_automation",
    title: "QA Automation Engineer",
    description: "We're seeking a skilled QA Automation Engineer to develop and maintain our test automation frameworks.",
    location: "Hybrid (Belgium or Morocco)",
    type: "Full-time",
    requirements: [
      "4+ years of experience in test automation",
      "Strong programming skills in languages such as Java, JavaScript, or Python",
      "Experience with test automation frameworks (Selenium, Cypress, Playwright, etc.)",
      "Knowledge of API testing tools (Postman, REST Assured, etc.)",
      "Experience with CI/CD pipelines and tools like Jenkins",
      "ISTQB Advanced Level Test Automation Engineer certification preferred",
      "Excellent problem-solving and analytical skills",
      "Bachelor's degree in Computer Science, Information Technology, or related field"
    ],
    responsibilities: [
      "Design, develop, and maintain automated test scripts and frameworks",
      "Implement API, UI, and integration test automation",
      "Set up continuous integration for automated testing",
      "Analyze test results and report defects",
      "Create test automation documentation and best practices",
      "Collaborate with development teams to improve software quality",
      "Mentor team members on test automation best practices"
    ]
  },
  {
    id: "performance_tester",
    title: "Performance Test Engineer",
    description: "We're looking for a Performance Test Engineer to ensure our clients' applications meet performance standards.",
    location: "Hybrid (Belgium or Morocco)",
    type: "Full-time",
    requirements: [
      "4+ years of experience in performance testing",
      "Hands-on experience with performance testing tools like JMeter, LoadRunner, or Gatling",
      "Knowledge of application monitoring tools and performance metrics analysis",
      "Experience with database performance testing and SQL optimization",
      "Understanding of web architecture and network protocols",
      "ISTQB certification with performance testing specialization preferred",
      "Strong analytical and problem-solving skills",
      "Bachelor's degree in Computer Science, Information Technology, or related field"
    ],
    responsibilities: [
      "Design and execute performance tests for web and mobile applications",
      "Analyze performance metrics and identify bottlenecks",
      "Create and maintain performance test scripts and scenarios",
      "Collaborate with development teams to improve application performance",
      "Document performance test results and recommendations",
      "Set up monitoring for performance metrics in testing environments",
      "Provide expertise on performance optimization strategies"
    ]
  }
];

// Application form schema
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_FILE_TYPES = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];

const applicationSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  position: z.string().min(1, "Please select a position"),
  experience: z.string().min(1, "Please enter your years of experience"),
  message: z.string().min(10, "Please include a message with your application"),
  resumeFile: z.any()
    .superRefine((file, ctx) => {
      // Check if file is missing
      if (!file || (typeof file === 'string' && file === '')) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "CV/Resume is required"
        });
        return;
      }
      
      // Check file properties if it's a File object
      if (file instanceof File) {
        if (file.size > MAX_FILE_SIZE) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "File size should be less than 5MB"
          });
        }
        
        if (!ACCEPTED_FILE_TYPES.includes(file.type)) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Only PDF and Word documents are accepted"
          });
        }
      }
    })
});

type ApplicationFormValues = z.infer<typeof applicationSchema>;

const Jobs = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  
  // Form
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFileName, setSelectedFileName] = useState<string>("");
  
  const form = useForm<ApplicationFormValues>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      position: "",
      experience: "",
      message: "",
      resumeFile: undefined
    }
  });

  const handleApply = (position: string) => {
    setSelectedPosition(position);
    form.setValue("position", position);
    setOpenDialog(true);
  };

  const onSubmit = async (data: ApplicationFormValues) => {
    setIsSubmitting(true);
    try {
      // In a real implementation, we would use FormData to handle file uploads
      // For now, we'll just include the file name in the JSON payload
      const formData = {
        ...data,
        resumeFileName: data.resumeFile instanceof File ? data.resumeFile.name : ''
      };
      
      const response = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (!response.ok) {
        throw new Error('Failed to submit application');
      }
      
      toast({
        title: t('jobs.form.success_title'),
        description: t('jobs.form.success_message'),
      });
      
      form.reset();
      setSelectedFileName("");
      setOpenDialog(false);
    } catch (error) {
      console.error('Error submitting application:', error);
      toast({
        title: t('jobs.form.error_title'),
        description: t('jobs.form.error_message'),
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>{t('page_titles.jobs')}</title>
        <meta name="description" content="Browse our open QA positions including QA Analyst, Automation Test Engineer, and Performance Test Engineer roles. Join our talented testing team at TECNARIT." />
        <meta name="keywords" content="software testing jobs, QA analyst position, automation test engineer job, performance tester career, quality assurance jobs, test engineer careers" />
        <link rel="canonical" href="https://www.tecnarit.com/jobs" />
        <meta property="og:title" content="Software Testing Jobs | TECNARIT Career Opportunities" />
        <meta property="og:description" content="Browse our open QA positions including QA Analyst, Automation Test Engineer, and Performance Test Engineer roles. Join our talented testing team at TECNARIT." />
        <meta property="og:url" content="https://www.tecnarit.com/jobs" />
        <meta name="twitter:title" content="Software Testing Jobs | TECNARIT Career Opportunities" />
        <meta name="twitter:description" content="Browse our open QA positions including QA Analyst, Automation Test Engineer, and Performance Test Engineer roles. Join our talented testing team at TECNARIT." />
      </Helmet>
      
      <Navbar />
      <main className="flex-grow">

        
        {/* Breadcrumb Navigation */}
        <div className="bg-tecnarit-dark/95 py-2 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <Breadcrumb 
              segments={[
                { name: 'Jobs', href: '/jobs' }
              ]}
            />
          </div>
        </div>

        {/* Hero Section */}
        <section className="pt-14 pb-16 relative overflow-hidden text-white" style={{ background: 'linear-gradient(180deg, #0f1729 0%, #132b23 50%, #183728 100%)' }}>
          {/* Animated background elements */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-tecnarit-green/5 animate-pulse" style={{ animationDuration: '7s' }}></div>
            <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-tecnarit-green/5 animate-pulse" style={{ animationDuration: '6s' }}></div>
            <div className="absolute top-40 right-40 w-20 h-20 rounded-full bg-tecnarit-lime/5 animate-pulse" style={{ animationDuration: '8s' }}></div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-6"
              >
                <span className="inline-block py-1 px-3 rounded-full bg-tecnarit-green/20 text-tecnarit-lime text-sm font-medium">{t('nav.jobs')}</span>
              </motion.div>
              
              <motion.h1 
                className="text-4xl sm:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {t('jobs.title')}
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-300 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {t('jobs.subtitle')}
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="w-20 h-1 mx-auto mt-6 tecnarit-gradient-bg rounded-full"
              ></motion.div>
            </div>
          </div>
        </section>

        {/* Job Listings Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue={jobListings[0].id} className="w-full">
              <TabsList className="mb-8 flex flex-wrap justify-center gap-2">
                {jobListings.map((job) => (
                  <TabsTrigger key={job.id} value={job.id} className="py-2 px-4">
                    {job.title}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {jobListings.map((job) => (
                <TabsContent key={job.id} value={job.id} className="mt-0">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
                    <div className="p-6 sm:p-8">
                      <h2 className="text-2xl sm:text-3xl font-bold text-tecnarit-dark mb-4">{job.title}</h2>
                      <p className="text-gray-600 mb-6">
                        {(() => {
                          try {
                            return t(`jobs.position.${job.id}.description`);
                          } catch (error) {
                            console.log(`Error getting translation for jobs.position.${job.id}.description:`, error);
                            return job.description;
                          }
                        })()}
                      </p>
                      
                      <div className="flex flex-wrap gap-4 mb-6">
                        <div className="flex items-center">
                          <Briefcase className="mr-2 text-tecnarit-green" />
                          <span>{t(`jobs.position.${job.id}.type`)}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="mr-2 text-tecnarit-green" />
                          <span>{t('jobs.immediate_start')}</span>
                        </div>
                        <div className="flex items-center">
                          <Award className="mr-2 text-tecnarit-green" />
                          <span>{t(`jobs.position.${job.id}.location`)}</span>
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div>
                          <h3 className="text-xl font-semibold text-tecnarit-dark mb-4">{t(`jobs.position.${job.id}.requirements_title`)}</h3>
                          <ul className="space-y-2 text-sm sm:text-base">
                            {(() => {
                              try {
                                const requirements = t(`jobs.position.${job.id}.requirements`, { returnObjects: true }) as string[];
                                return requirements.map((req: string, index: number) => (
                                  <li key={index} className="flex items-start">
                                    <CheckCircle className="mr-2 h-5 w-5 text-tecnarit-green shrink-0 mt-0.5" />
                                    <span>{req}</span>
                                  </li>
                                ));
                              } catch (error) {
                                console.log(`Error getting translation for jobs.position.${job.id}.requirements:`, error);
                                return job.requirements.map((req: string, index: number) => (
                                  <li key={index} className="flex items-start">
                                    <CheckCircle className="mr-2 h-5 w-5 text-tecnarit-green shrink-0 mt-0.5" />
                                    <span>{req}</span>
                                  </li>
                                ));
                              }
                            })()}
                          </ul>
                        </div>
                        <div className="mt-6 md:mt-0">
                          <h3 className="text-xl font-semibold text-tecnarit-dark mb-4">{t(`jobs.position.${job.id}.responsibilities_title`)}</h3>
                          <ul className="space-y-2 text-sm sm:text-base">
                            {(() => {
                              try {
                                const responsibilities = t(`jobs.position.${job.id}.responsibilities`, { returnObjects: true }) as string[];
                                return responsibilities.map((resp: string, index: number) => (
                                  <li key={index} className="flex items-start">
                                    <CheckCircle className="mr-2 h-5 w-5 text-tecnarit-green shrink-0 mt-0.5" />
                                    <span>{resp}</span>
                                  </li>
                                ));
                              } catch (error) {
                                console.log(`Error getting translation for jobs.position.${job.id}.responsibilities:`, error);
                                return job.responsibilities.map((resp: string, index: number) => (
                                  <li key={index} className="flex items-start">
                                    <CheckCircle className="mr-2 h-5 w-5 text-tecnarit-green shrink-0 mt-0.5" />
                                    <span>{resp}</span>
                                  </li>
                                ));
                              }
                            })()}
                          </ul>
                        </div>
                      </div>
                      
                      <div className="flex justify-center">
                        <Button 
                          onClick={() => handleApply(job.title)}
                          className="tecnarit-gradient-bg hover:opacity-90 text-white font-semibold px-8 py-2 rounded-md border-none"
                        >
                          {(() => {
                            try {
                              return t(`jobs.position.${job.id}.apply`);
                            } catch (error) {
                              console.log(`Error getting translation for jobs.position.${job.id}.apply:`, error);
                              return 'Apply Now';
                            }
                          })()}
                        </Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Spontaneous Application Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-tecnarit-dark mb-6">{t('jobs.no_fit')}</h2>
              <p className="text-lg text-gray-600">
                {t('jobs.spontaneous')}
              </p>
            </div>
            <div className="flex justify-center">
              <Button 
                onClick={() => {
                  setSelectedPosition("");
                  form.setValue("position", "Spontaneous Application");
                  setOpenDialog(true);
                }}
                className="tecnarit-gradient-bg hover:opacity-90 text-white font-semibold px-8 py-3 rounded-md border-none"
              >
                {t('jobs.submit_spontaneous')}
              </Button>
            </div>
          </div>
        </section>

        {/* Application Dialog */}
        <Dialog open={openDialog} onOpenChange={(open) => {
          setOpenDialog(open);
          if (!open) {
            form.reset();
            setSelectedFileName("");
          }
        }}>
          <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{selectedPosition || t('jobs.form.title')}</DialogTitle>
              <DialogDescription>
                {t('jobs.form.description')}
              </DialogDescription>
            </DialogHeader>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('jobs.form.full_name')}</FormLabel>
                      <FormControl>
                        <Input placeholder={t('jobs.form.name_placeholder')} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('jobs.form.email')}</FormLabel>
                      <FormControl>
                        <Input placeholder={t('jobs.form.email_placeholder')} type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('jobs.form.phone')}</FormLabel>
                      <FormControl>
                        <Input placeholder={t('jobs.form.phone_placeholder')} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="experience"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('jobs.form.experience')}</FormLabel>
                      <FormControl>
                        <Input placeholder={t('jobs.form.experience_placeholder')} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('jobs.form.message')}</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder={t('jobs.form.message_placeholder')} 
                          className="min-h-[120px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="resumeFile"
                  render={({ field: { value, onChange, ...fieldProps } }) => (
                    <FormItem>
                      <FormLabel>{t('jobs.form.cv')}</FormLabel>
                      <FormControl>
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                          <input
                            type="file"
                            accept=".pdf,.doc,.docx"
                            ref={fileInputRef}
                            onChange={(e) => {
                              const file = e.target.files?.[0];
                              if (file) {
                                setSelectedFileName(file.name);
                                onChange(file);
                              }
                            }}
                            hidden
                          />
                          <div className="flex gap-2 items-center">
                            <Button
                              type="button"
                              variant="outline"
                              onClick={() => fileInputRef.current?.click()}
                              className="cursor-pointer"
                            >
                              <FileUp className="mr-2 h-4 w-4" />
                              {t('jobs.form.cv_placeholder')}
                            </Button>
                            {selectedFileName && (
                              <span className="text-sm text-gray-500">
                                {selectedFileName}
                              </span>
                            )}
                          </div>
                        </div>
                      </FormControl>
                      <FormDescription>
                        Accept PDF or Word documents, max 5MB
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="flex justify-end gap-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      setOpenDialog(false);
                      form.reset();
                      setSelectedFileName("");
                    }}
                  >
                    {t('jobs.form.cancel')}
                  </Button>
                  <Button
                    type="submit"
                    className="tecnarit-gradient-bg hover:opacity-90 text-white border-none"
                    disabled={isSubmitting}
                  >
                    {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    {t('jobs.form.submit')}
                  </Button>
                </div>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </main>
      <Footer />
    </div>
  );
};

export default Jobs;