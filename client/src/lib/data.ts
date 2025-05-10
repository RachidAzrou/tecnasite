import { z } from "zod";

// Services
export const serviceItems = [
  {
    title: "Functional Testing",
    description: "Verify your software behaves exactly as expected by testing it against functional requirements and specifications."
  },
  {
    title: "Performance Testing",
    description: "Ensure your applications perform at their best under various load conditions and identify performance bottlenecks."
  },
  {
    title: "Security Testing",
    description: "Protect your software from vulnerabilities with comprehensive security testing to identify and mitigate potential risks."
  },
  {
    title: "Automated Testing",
    description: "Accelerate testing cycles with customized test automation solutions that improve efficiency and test coverage."
  },
  {
    title: "User Experience Testing",
    description: "Evaluate your software from the user's perspective to enhance usability, accessibility, and overall experience."
  },
  {
    title: "QA Consulting",
    description: "Expert guidance on developing and implementing effective quality assurance strategies for your organization."
  }
];

// Why Choose Us Features
export const features = [
  {
    title: "Expert Testing Team",
    description: "Our certified testing professionals bring years of experience across various industries and technologies."
  },
  {
    title: "Efficient Methodologies",
    description: "Our streamlined testing processes ensure thorough coverage while minimizing time-to-market."
  },
  {
    title: "Quality-Focused Approach",
    description: "We prioritize quality at every step of the testing process to deliver exceptional results."
  },
  {
    title: "Flexible Engagement Models",
    description: "We offer customizable service models to match your specific project requirements and timeline."
  }
];

// Case Studies
export const caseStudies = [
  {
    title: "E-Commerce Platform Optimization",
    description: "Comprehensive performance testing helping an e-commerce platform handle 300% more traffic during peak sales periods.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
  },
  {
    title: "Banking Application Security",
    description: "Rigorous security testing identifying and resolving critical vulnerabilities for a major financial institution's mobile app.",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
  },
  {
    title: "Healthcare Software Compliance",
    description: "Implementing automated testing strategy to ensure compliance with healthcare regulations while reducing testing time by 60%.",
    image: "https://images.unsplash.com/photo-1603201667141-5a2d4c673378?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
  }
];

// Testimonials
export const testimonials = [
  {
    quote: "Tecnarit's software testing expertise was instrumental in helping us launch our application with confidence. Their thorough approach identified critical issues that would have significantly impacted our users. Highly recommended for any business serious about software quality.",
    author: "Sarah Johnson",
    position: "CTO, FinTech Solutions"
  },
  {
    quote: "We've worked with several testing companies in the past, but Tecnarit stands out for their attention to detail and commitment to quality. Their automated testing solution has saved us countless hours and helped us maintain consistently high standards.",
    author: "Michael Chen",
    position: "Product Director, E-commerce Platform"
  },
  {
    quote: "As a healthcare software provider, compliance and security are paramount. Tecnarit's testing expertise has been invaluable in ensuring our applications meet rigorous industry standards while delivering exceptional performance to our users.",
    author: "Emily Rodriguez",
    position: "VP of Engineering, Healthcare Solutions Inc."
  }
];

// Contact Form Schema
export const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  company: z.string().min(2, { message: "Company name is required" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" })
});
