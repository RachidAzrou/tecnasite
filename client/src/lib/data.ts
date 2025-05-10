import { z } from "zod";

// Services
export const serviceItems = [
  {
    key: "functional",
    title: "Functional Testing",
    description: "Verify your software behaves exactly as expected by testing it against functional requirements and specifications."
  },
  {
    key: "nonfunctional",
    title: "Non-Functional Testing",
    description: "Evaluate the performance, security, usability and reliability aspects of your software to ensure it meets quality standards."
  },
  {
    key: "automation",
    title: "Test Automation",
    description: "Accelerate testing cycles with customized test automation solutions that improve efficiency and test coverage."
  }
];

// Why Choose Us Features
export const features = [
  {
    key: "nearshoring",
    title: "Nearshoring Advantage",
    description: "Our talented development team in Morocco combined with our management team in Belgium provides cost-effective solutions without compromising on quality or communication."
  },
  {
    key: "experts",
    title: "Expert Testing Professionals",
    description: "Our certified testing professionals bring years of experience across various industries and technologies."
  },
  {
    key: "methodologies",
    title: "Efficient Methodologies",
    description: "Our streamlined testing processes ensure thorough coverage while minimizing time-to-market."
  },
  {
    key: "flexible",
    title: "Flexible Engagement Models",
    description: "We offer customizable service models to match your specific project requirements and timeline."
  }
];

// About Us Highlights
export const aboutUsHighlights = [
  {
    key: "approach",
    title: "Our Approach",
    description: "We combine Belgian management expertise with skilled Moroccan testing professionals to provide high-quality, cost-effective software testing services."
  },
  {
    key: "team",
    title: "Our Team",
    description: "Our management team in Belgium works closely with our technical team in Morocco to ensure smooth communication and project delivery."
  },
  {
    key: "experience",
    title: "Our Experience",
    description: "With years of experience in software testing, we've helped companies across various industries deliver high-quality applications."
  }
];

// Contact Form Schema
export const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  company: z.string().min(2, { message: "Company name is required" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" })
});
