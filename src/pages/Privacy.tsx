
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Privacy = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="page-header">Privacy Policy</h1>
          <p className="text-xl text-stone-600">
            Your privacy is important to us. This policy explains how we collect, 
            use, and protect your information.
          </p>
        </div>

        <Card className="shadow-lg border-stone-200 mb-8">
          <CardHeader>
            <CardTitle className="font-fairy text-2xl gradient-text">
              Information We Collect
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold text-stone-800 mb-2">Personal Information</h3>
              <p className="text-stone-600">
                When you contact us through our contact form, we collect your name, 
                email address, and any information you choose to provide in your message. 
                This information is used solely to respond to your inquiry.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-stone-800 mb-2">Usage Information</h3>
              <p className="text-stone-600">
                We may collect anonymous usage data such as pages visited, time spent 
                on the site, and general geographic location to improve our content 
                and user experience.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg border-stone-200 mb-8">
          <CardHeader>
            <CardTitle className="font-fairy text-2xl gradient-text">
              How We Use Your Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="space-y-3 text-stone-600">
              <li>• <strong>Communication:</strong> To respond to your inquiries and provide customer support</li>
              <li>• <strong>Improvement:</strong> To analyze site usage and improve our content and services</li>
              <li>• <strong>Legal Compliance:</strong> To comply with applicable laws and regulations</li>
              <li>• <strong>Security:</strong> To protect against fraud and unauthorized access</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="shadow-lg border-stone-200 mb-8">
          <CardHeader>
            <CardTitle className="font-fairy text-2xl gradient-text">
              Information Sharing
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-stone-600 mb-4">
              We do not sell, trade, or otherwise transfer your personal information 
              to third parties without your consent, except in the following circumstances:
            </p>
            <ul className="space-y-2 text-stone-600">
              <li>• With your explicit consent</li>
              <li>• To comply with legal obligations</li>
              <li>• To protect our rights and safety</li>
              <li>• With trusted service providers who assist in site operations (under strict confidentiality agreements)</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="shadow-lg border-stone-200 mb-8">
          <CardHeader>
            <CardTitle className="font-fairy text-2xl gradient-text">
              Cookies and Tracking
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-stone-600 mb-4">
              Our website may use cookies and similar tracking technologies to enhance 
              your browsing experience. These may include:
            </p>
            <ul className="space-y-2 text-stone-600">
              <li>• <strong>Essential Cookies:</strong> Required for basic site functionality</li>
              <li>• <strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
              <li>• <strong>Preference Cookies:</strong> Remember your settings and preferences</li>
            </ul>
            <p className="text-stone-600 mt-4">
              You can control cookie settings through your browser preferences.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-lg border-stone-200 mb-8">
          <CardHeader>
            <CardTitle className="font-fairy text-2xl gradient-text">
              Data Security
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-stone-600">
              We implement appropriate security measures to protect your personal 
              information against unauthorized access, alteration, disclosure, or 
              destruction. However, no method of transmission over the internet 
              or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-lg border-stone-200 mb-8">
          <CardHeader>
            <CardTitle className="font-fairy text-2xl gradient-text">
              Your Rights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-stone-600 mb-4">
              Depending on your location, you may have the following rights regarding your personal information:
            </p>
            <ul className="space-y-2 text-stone-600">
              <li>• Right to access your personal data</li>
              <li>• Right to correct inaccurate information</li>
              <li>• Right to delete your personal data</li>
              <li>• Right to restrict processing</li>
              <li>• Right to data portability</li>
              <li>• Right to object to processing</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="shadow-lg border-stone-200 mb-8">
          <CardHeader>
            <CardTitle className="font-fairy text-2xl gradient-text">
              Children's Privacy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-stone-600">
              Our website is designed to be family-friendly, but we do not knowingly 
              collect personal information from children under 13 years of age. 
              If you are a parent or guardian and believe your child has provided 
              us with personal information, please contact us immediately.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-lg border-stone-200 mb-8">
          <CardHeader>
            <CardTitle className="font-fairy text-2xl gradient-text">
              Changes to This Policy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-stone-600">
              We may update this Privacy Policy from time to time. Any changes 
              will be posted on this page with an updated effective date. 
              We encourage you to review this policy periodically to stay 
              informed about how we protect your information.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-lg border-stone-200 bg-gradient-to-br from-enchanted-50 to-golden-50">
          <CardHeader>
            <CardTitle className="font-fairy text-2xl gradient-text">
              Contact Us
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-stone-600 mb-4">
              If you have any questions about this Privacy Policy or our data practices, 
              please contact us through our contact form or reach out to us directly.
            </p>
            <p className="text-sm text-stone-500">
              <strong>Effective Date:</strong> January 1, 2024<br />
              <strong>Last Updated:</strong> January 1, 2024
            </p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Privacy;
