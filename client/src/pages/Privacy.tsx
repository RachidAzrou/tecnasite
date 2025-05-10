import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

const Privacy = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Privacy Policy | TECNARIT</title>
        <meta name="description" content="TECNARIT's Privacy Policy - Learn how we protect your personal data" />
      </Helmet>
      
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-tecnarit-dark mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700">
            At TECNARIT VOF, we are committed to protecting and respecting your privacy and personal data. 
            This Privacy Policy explains how we collect, use, store, and safeguard your personal information 
            in accordance with Belgian law and the General Data Protection Regulation (GDPR).
          </p>

          <h2 className="text-2xl font-semibold text-tecnarit-dark mt-8 mb-4">1. Who We Are</h2>
          <p className="text-gray-700">
            TECNARIT VOF<br />
            Address: Cleydaellaan 16/5, 2630 Aartselaar<br />
            Email: info@tecnarit.com<br />
            Phone: +32 71 55 09 46<br />
            Company Number: BE1005.105.090
          </p>

          <h2 className="text-2xl font-semibold text-tecnarit-dark mt-8 mb-4">2. What Data We Collect</h2>
          <p className="text-gray-700">We collect the following types of personal data:</p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li><strong>Identification Data:</strong> Name, email address, phone number, company name, job title, address</li>
            <li><strong>Contact Data:</strong> Email communications, phone notes, and other interactions you share with us</li>
            <li><strong>Technical Data:</strong> IP address, browser information, device details, location data, cookies, and other tracking technologies (as explained in section 6).</li>
          </ul>

          <h2 className="text-2xl font-semibold text-tecnarit-dark mt-8 mb-4">3. Why We Collect Your Data</h2>
          <p className="text-gray-700">We collect personal data for the following purposes:</p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li><strong>To Contact You:</strong> When you reach out to us via our website, email, or phone, we use your data to respond to your inquiries or provide assistance.</li>
            <li><strong>To Deliver Our Services:</strong> We use your data to perform and improve the services we offer (such as software development, UI/UX design, etc.).</li>
            <li><strong>Marketing and Communication:</strong> With your consent, we may inform you about new products, services, or offers that may interest you.</li>
            <li><strong>Legal Compliance:</strong> We may use your data to comply with legal obligations, such as tax laws or contractual requirements.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-tecnarit-dark mt-8 mb-4">4. How We Protect Your Data</h2>
          <p className="text-gray-700">
            We take the protection of your personal data seriously. We have implemented appropriate technical and organizational measures to 
            safeguard your data from loss, misuse, unauthorized access, disclosure, or alteration.
          </p>
          <p className="text-gray-700">
            Although we take reasonable measures to ensure the security of your data, we cannot guarantee the absolute security of data 
            transmitted over the internet.
          </p>

          <h2 className="text-2xl font-semibold text-tecnarit-dark mt-8 mb-4">5. How Long We Retain Your Data</h2>
          <p className="text-gray-700">
            We do not retain your personal data longer than necessary for the purposes for which it was collected, unless we are required 
            to retain it by law. The retention period varies depending on the type of data, but we ensure that data is only kept as long as necessary.
          </p>

          <h2 className="text-2xl font-semibold text-tecnarit-dark mt-8 mb-4">6. Cookies and Tracking Technologies</h2>
          <p className="text-gray-700">
            Our website uses cookies and other tracking technologies to improve your experience. Cookies are small files stored on your 
            device that help us remember your preferences and analyze your usage of our website. You can adjust your browser settings to refuse cookies, 
            but please note that this may affect your experience on our website.
          </p>

          <h2 className="text-2xl font-semibold text-tecnarit-dark mt-8 mb-4">7. Who We Share Your Data With</h2>
          <p className="text-gray-700">We only share your personal data with third parties in the following cases:</p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li><strong>Service Providers:</strong> We may engage external service providers to perform certain functions or services on our behalf (such as hosting, payment processing, customer support). These third parties process your data solely on our instructions and in accordance with our privacy policy.</li>
            <li><strong>Legal Requirements:</strong> We may share your personal data to comply with legal obligations or to protect our rights and property.</li>
          </ul>
          <p className="text-gray-700">We never sell your personal data to third parties.</p>

          <h2 className="text-2xl font-semibold text-tecnarit-dark mt-8 mb-4">8. Your Rights</h2>
          <p className="text-gray-700">You have several rights regarding the personal data we process:</p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li><strong>Right to Access:</strong> You have the right to know what personal data we hold about you.</li>
            <li><strong>Right to Rectification:</strong> You can request the correction of inaccurate or outdated data.</li>
            <li><strong>Right to Erasure:</strong> You can request the deletion of your data, unless there are legal obligations to retain it.</li>
            <li><strong>Right to Object:</strong> You can object to the processing of your data, such as for marketing purposes.</li>
            <li><strong>Right to Data Portability:</strong> You have the right to receive your data in a structured, commonly used, and machine-readable format and to transfer it to another organization.</li>
            <li><strong>Right to Withdraw Consent:</strong> If we have processed your data based on your consent, you can withdraw that consent at any time.</li>
          </ul>
          <p className="text-gray-700">To exercise any of these rights, please contact us using the details provided above.</p>

          <h2 className="text-2xl font-semibold text-tecnarit-dark mt-8 mb-4">9. Third-Party Links</h2>
          <p className="text-gray-700">
            Our website may contain links to third-party websites. We are not responsible for the privacy practices of these sites, 
            and we encourage you to review their privacy policies before sharing any personal data.
          </p>

          <h2 className="text-2xl font-semibold text-tecnarit-dark mt-8 mb-4">10. Changes to This Privacy Policy</h2>
          <p className="text-gray-700">
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated date at the top. 
            We encourage you to review this policy periodically to stay informed about how we protect your information.
          </p>

          <h2 className="text-2xl font-semibold text-tecnarit-dark mt-8 mb-4">11. Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions or concerns about this Privacy Policy or how we handle your personal data, please contact us at:
          </p>
          <p className="text-gray-700">
            TECNARIT VOF<br />
            Cleydaellaan 16/5, 2630 Aartselaar<br />
            Email: info@tecnarit.com<br />
            Phone: +32 71 55 09 46
          </p>
        </div>
      </main>
    </div>
  );
};

export default Privacy;