import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Breadcrumb } from "@/components/ui/breadcrumb";

const Privacy = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-neutral-lightest min-h-screen flex flex-col">
      <Helmet>
        <title>Privacy Policy | TECNARIT Software Testing Services</title>
        <meta name="description" content="TECNARIT's Privacy Policy explains how we protect and process your personal data when you use our software testing, QA and test automation services." />
        <meta name="keywords" content="TECNARIT privacy policy, GDPR compliance, software testing privacy, data protection, secure testing services, QA services privacy" />
        <link rel="canonical" href="https://www.tecnarit.com/privacy" />
        <meta property="og:title" content="Privacy Policy | TECNARIT Software Testing Services" />
        <meta property="og:description" content="Learn how TECNARIT protects and respects your privacy and personal data while providing professional software testing services." />
        <meta property="og:url" content="https://www.tecnarit.com/privacy" />
        <meta name="twitter:title" content="Privacy Policy | TECNARIT" />
        <meta name="twitter:description" content="TECNARIT's commitment to protecting your personal data while delivering high-quality software testing services." />
      </Helmet>
      
      <Navbar />
      <main className="flex-grow">
        <div className="h-2 w-full bg-gradient-to-r from-tecnarit-dark via-tecnarit-dark/90 to-tecnarit-dark"></div>
        
        {/* Breadcrumb Navigation - Good for SEO and user navigation */}
        <div className="bg-tecnarit-dark/95 py-2 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <Breadcrumb 
              segments={[
                { name: 'Privacy', href: '/privacy' }
              ]}
            />
          </div>
        </div>
        {/* Hero Section */}
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
              <span className="inline-block py-1 px-3 rounded-full bg-tecnarit-green/20 text-tecnarit-lime text-sm font-medium mb-3">Privacy</span>
              <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl">
                Privacy Policy
              </h1>
              <p className="mt-4 text-xl text-neutral-light max-w-3xl mx-auto">
                How we protect and respect your privacy and personal data
              </p>
              <div className="w-20 h-1 mx-auto mt-6 bg-gradient-to-r from-tecnarit-green to-tecnarit-lime rounded-full"></div>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                At TECNARIT VOF, we are committed to protecting and respecting your privacy and personal data. 
                This Privacy Policy explains how we collect, use, store, and safeguard your personal information 
                in accordance with Belgian law and the General Data Protection Regulation (GDPR).
              </p>

              <h2 className="text-2xl font-semibold text-tecnarit-dark mt-8 mb-4">1. Who We Are</h2>
              <p>
                TECNARIT VOF<br />
                Address: Cleydaellaan 16/5, 2630 Aartselaar<br />
                Email: info@tecnarit.com<br />
                Phone: +32 71 55 09 46<br />
                Company Number: BE1005.105.090
              </p>

              <h2 className="text-2xl font-semibold text-tecnarit-dark mt-8 mb-4">2. What Data We Collect</h2>
              <p>We collect the following types of personal data:</p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Identification Data:</strong> Name, email address, phone number, company name, job title, address</li>
                <li><strong>Contact Data:</strong> Email communications, phone notes, and other interactions you share with us</li>
                <li><strong>Technical Data:</strong> IP address, browser information, device details, location data, cookies, and other tracking technologies (as explained in section 6).</li>
              </ul>

              <h2 className="text-2xl font-semibold text-tecnarit-dark mt-8 mb-4">3. Why We Collect Your Data</h2>
              <p>We collect personal data for the following purposes:</p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>To Contact You:</strong> When you reach out to us via our website, email, or phone, we use your data to respond to your inquiries or provide assistance.</li>
                <li><strong>To Deliver Our Services:</strong> We use your data to perform and improve the services we offer (such as software development, UI/UX design, etc.).</li>
                <li><strong>Marketing and Communication:</strong> With your consent, we may inform you about new products, services, or offers that may interest you.</li>
                <li><strong>Legal Compliance:</strong> We may use your data to comply with legal obligations, such as tax laws or contractual requirements.</li>
              </ul>

              <h2 className="text-2xl font-semibold text-tecnarit-dark mt-8 mb-4">4. How We Protect Your Data</h2>
              <p>
                We take the protection of your personal data seriously. We have implemented appropriate technical and organizational measures to 
                safeguard your data from loss, misuse, unauthorized access, disclosure, or alteration.
              </p>
              <p>
                Although we take reasonable measures to ensure the security of your data, we cannot guarantee the absolute security of data 
                transmitted over the internet.
              </p>

              <h2 className="text-2xl font-semibold text-tecnarit-dark mt-8 mb-4">5. How Long We Retain Your Data</h2>
              <p>
                We do not retain your personal data longer than necessary for the purposes for which it was collected, unless we are required 
                to retain it by law. The retention period varies depending on the type of data, but we ensure that data is only kept as long as necessary.
              </p>

              <h2 className="text-2xl font-semibold text-tecnarit-dark mt-8 mb-4">6. Cookies and Tracking Technologies</h2>
              <p>
                Our website uses cookies and other tracking technologies to improve your experience. Cookies are small files stored on your 
                device that help us remember your preferences and analyze your usage of our website. You can adjust your browser settings to refuse cookies, 
                but please note that this may affect your experience on our website.
              </p>

              <h2 className="text-2xl font-semibold text-tecnarit-dark mt-8 mb-4">7. Who We Share Your Data With</h2>
              <p>We only share your personal data with third parties in the following cases:</p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Service Providers:</strong> We may engage external service providers to perform certain functions or services on our behalf (such as hosting, payment processing, customer support). These third parties process your data solely on our instructions and in accordance with our privacy policy.</li>
                <li><strong>Legal Requirements:</strong> We may share your personal data to comply with legal obligations or to protect our rights and property.</li>
              </ul>
              <p>We never sell your personal data to third parties.</p>

              <h2 className="text-2xl font-semibold text-tecnarit-dark mt-8 mb-4">8. Your Rights</h2>
              <p>You have several rights regarding the personal data we process:</p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Right to Access:</strong> You have the right to know what personal data we hold about you.</li>
                <li><strong>Right to Rectification:</strong> You can request the correction of inaccurate or outdated data.</li>
                <li><strong>Right to Erasure:</strong> You can request the deletion of your data, unless there are legal obligations to retain it.</li>
                <li><strong>Right to Object:</strong> You can object to the processing of your data, such as for marketing purposes.</li>
                <li><strong>Right to Data Portability:</strong> You have the right to receive your data in a structured, commonly used, and machine-readable format and to transfer it to another organization.</li>
                <li><strong>Right to Withdraw Consent:</strong> If we have processed your data based on your consent, you can withdraw that consent at any time.</li>
              </ul>
              <p>To exercise any of these rights, please contact us using the details provided above.</p>

              <h2 className="text-2xl font-semibold text-tecnarit-dark mt-8 mb-4">9. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these sites, 
                and we encourage you to review their privacy policies before sharing any personal data.
              </p>

              <h2 className="text-2xl font-semibold text-tecnarit-dark mt-8 mb-4">10. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated date at the top. 
                We encourage you to review this policy periodically to stay informed about how we protect your information.
              </p>

              <h2 className="text-2xl font-semibold text-tecnarit-dark mt-8 mb-4">11. Contact Us</h2>
              <p>
                If you have any questions or concerns about this Privacy Policy or how we handle your personal data, please contact us at:
              </p>
              <p>
                TECNARIT VOF<br />
                Cleydaellaan 16/5, 2630 Aartselaar<br />
                Email: info@tecnarit.com<br />
                Phone: +32 71 55 09 46
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Privacy;