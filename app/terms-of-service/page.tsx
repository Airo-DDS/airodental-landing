import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | Airodental",
  description: "Airodental's Terms of Service - Understanding your rights and responsibilities when using our AI-powered dental platform.",
};

export default function TermsOfService() {
  return (
    <div className="relative bg-white min-h-screen">
      <Header />
      
      {/* Content */}
      <main className="pt-[140px] pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg max-w-none">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-black mb-4 font-[family-name:var(--font-geist-sans)]">
                Terms of Service
              </h1>
              <p className="text-gray-600 font-[family-name:var(--font-lato)]">
                Last updated: May 27, 2025
              </p>
            </div>

            {/* Content */}
            <div className="space-y-8 text-black font-[family-name:var(--font-lato)] leading-relaxed">
              <section>
                <h2 className="text-2xl font-semibold mb-4 font-[family-name:var(--font-geist-sans)] text-[#C33768]">
                  1. Acceptance of Terms
                </h2>
                <p className="mb-4">
                  By accessing and using Airodental&apos;s AI-powered dental practice management platform 
                  (&quot;Service&quot;), you accept and agree to be bound by the terms and provision of this 
                  agreement. If you do not agree to abide by the terms of this agreement, you are 
                  not authorized to use or access this Service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 font-[family-name:var(--font-geist-sans)] text-[#C33768]">
                  2. Description of Service
                </h2>
                <p className="mb-4">
                  Airodental provides an AI-powered platform designed specifically for dental practices, 
                  including but not limited to:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>AI receptionist and patient communication tools (Laine)</li>
                  <li>Staff training and coaching platform (Saige)</li>
                  <li>Practice management and analytics dashboard</li>
                  <li>Patient engagement and follow-up automation</li>
                  <li>Compliance and documentation assistance</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 font-[family-name:var(--font-geist-sans)] text-[#C33768]">
                  3. User Accounts and Registration
                </h2>
                <p className="mb-4">
                  To access certain features of our Service, you must register for an account. You agree to:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Provide accurate, current, and complete information during registration</li>
                  <li>Maintain and promptly update your account information</li>
                  <li>Maintain the security of your password and account</li>
                  <li>Accept responsibility for all activities under your account</li>
                  <li>Notify us immediately of any unauthorized use of your account</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 font-[family-name:var(--font-geist-sans)] text-[#C33768]">
                  4. Acceptable Use Policy
                </h2>
                <p className="mb-4">
                  You agree not to use the Service to:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Violate any local, state, national, or international law or regulation</li>
                  <li>Transmit any harmful, defamatory, or offensive content</li>
                  <li>Attempt to gain unauthorized access to our systems or user accounts</li>
                  <li>Interfere with or disrupt the integrity or performance of the Service</li>
                  <li>Use the Service for any unlawful or fraudulent purposes</li>
                  <li>Reverse engineer, decompile, or disassemble any part of the Service</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 font-[family-name:var(--font-geist-sans)] text-[#C33768]">
                  5. Healthcare Compliance
                </h2>
                <p className="mb-4">
                  Our Service is designed to support healthcare practices and comply with applicable 
                  healthcare regulations, including HIPAA. You acknowledge that:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>You are responsible for ensuring your use complies with all applicable healthcare laws</li>
                  <li>Patient data must be handled according to HIPAA and other privacy regulations</li>
                  <li>You must have appropriate consents for any patient data processed through our Service</li>
                  <li>We will execute Business Associate Agreements (BAAs) as required</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 font-[family-name:var(--font-geist-sans)] text-[#C33768]">
                  6. Subscription and Payment Terms
                </h2>
                <p className="mb-4">
                  Our Service operates on a subscription basis. Payment terms include:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Subscription fees are billed in advance on a monthly or annual basis</li>
                  <li>All fees are non-refundable except as required by law</li>
                  <li>We may change pricing with 30 days&apos; notice to existing subscribers</li>
                  <li>Late payments may result in service suspension</li>
                  <li>You authorize us to charge your designated payment method</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 font-[family-name:var(--font-geist-sans)] text-[#C33768]">
                  7. Intellectual Property Rights
                </h2>
                <p className="mb-4">
                  The Service and its original content, features, and functionality are and will remain 
                  the exclusive property of Airodental and its licensors. The Service is protected by 
                  copyright, trademark, and other intellectual property laws.
                </p>
                <p className="mb-4">
                  You retain ownership of any data you submit to our Service, but grant us a limited 
                  license to use such data to provide and improve our Service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 font-[family-name:var(--font-geist-sans)] text-[#C33768]">
                  8. Data Security and Privacy
                </h2>
                <p className="mb-4">
                  We implement industry-standard security measures to protect your data. However, 
                  no method of transmission over the Internet is 100% secure. While we strive to 
                  protect your personal information, we cannot guarantee its absolute security.
                </p>
                <p className="mb-4">
                  Please refer to our Privacy Policy for detailed information about how we collect, 
                  use, and protect your information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 font-[family-name:var(--font-geist-sans)] text-[#C33768]">
                  9. Limitation of Liability
                </h2>
                <p className="mb-4">
                  To the maximum extent permitted by applicable law, Airodental shall not be liable 
                  for any indirect, incidental, special, consequential, or punitive damages, or any 
                  loss of profits or revenues, whether incurred directly or indirectly, or any loss 
                  of data, use, goodwill, or other intangible losses.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 font-[family-name:var(--font-geist-sans)] text-[#C33768]">
                  10. Termination
                </h2>
                <p className="mb-4">
                  We may terminate or suspend your account and access to the Service immediately, 
                  without prior notice, for conduct that we believe violates these Terms of Service 
                  or is harmful to other users, us, or third parties.
                </p>
                <p className="mb-4">
                  You may terminate your account at any time by contacting our support team. Upon 
                  termination, your data will be securely deleted according to our data retention policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 font-[family-name:var(--font-geist-sans)] text-[#C33768]">
                  11. Contact Information
                </h2>
                <p className="mb-4">
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="mb-2"><strong>Email:</strong> legal@airodental.com</p>
                  <p className="mb-2"><strong>Address:</strong> Airodental Legal Department</p>
                  <p>7101 NW 150th St, Ste 100 Oklahoma City, OK 73142 United States</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 font-[family-name:var(--font-geist-sans)] text-[#C33768]">
                  12. Changes to Terms
                </h2>
                <p>
                  We reserve the right to modify or replace these Terms of Service at any time. 
                  If a revision is material, we will provide at least 30 days notice prior to any 
                  new terms taking effect. Your continued use of the Service after any changes 
                  constitutes acceptance of the new Terms of Service.
                </p>
              </section>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
} 