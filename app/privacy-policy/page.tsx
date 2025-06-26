import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | AiroDental",
  description: "AiroDental's Privacy Policy - Learn how we protect and handle your personal information.",
};

export default function PrivacyPolicy() {
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
                Privacy Policy
              </h1>
              <p className="text-gray-600 font-[family-name:var(--font-lato)]">
                Last updated: May 26, 2025
              </p>
            </div>

            {/* Content */}
            <div className="space-y-8 text-black font-[family-name:var(--font-lato)] leading-relaxed">
              <section>
                <h2 className="text-2xl font-semibold mb-4 font-[family-name:var(--font-geist-sans)] text-[#C33768]">
                  1. Information We Collect
                </h2>
                <p className="mb-4">
                  At AiroDental, we collect information you provide directly to us, such as when you:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Create an account or subscribe to our services</li>
                  <li>Contact us through our website or support channels</li>
                  <li>Participate in surveys, promotions, or feedback requests</li>
                  <li>Use our AI-powered dental practice management platform</li>
                </ul>
                <p>
                  This may include your name, email address, phone number, practice information, 
                  and any other information you choose to provide.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 font-[family-name:var(--font-geist-sans)] text-[#C33768]">
                  2. How We Use Your Information
                </h2>
                <p className="mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Provide, maintain, and improve our AI dental practice management services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send technical notices, updates, security alerts, and support messages</li>
                  <li>Respond to your comments, questions, and customer service requests</li>
                  <li>Develop new products and services</li>
                  <li>Personalize and improve your experience with our platform</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 font-[family-name:var(--font-geist-sans)] text-[#C33768]">
                  3. Information Sharing and Disclosure
                </h2>
                <p className="mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to outside 
                  parties except as described in this privacy policy. We may share your information in 
                  the following circumstances:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>With your consent or at your direction</li>
                  <li>With third-party service providers who perform services on our behalf</li>
                  <li>To comply with legal obligations or protect our rights</li>
                  <li>In connection with a merger, acquisition, or sale of assets</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 font-[family-name:var(--font-geist-sans)] text-[#C33768]">
                  4. Data Security
                </h2>
                <p className="mb-4">
                  We implement appropriate technical and organizational security measures to protect 
                  your personal information against unauthorized access, alteration, disclosure, or 
                  destruction. These measures include:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security assessments and updates</li>
                  <li>Limited access to personal information on a need-to-know basis</li>
                  <li>Employee training on data protection and privacy</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 font-[family-name:var(--font-geist-sans)] text-[#C33768]">
                  5. Your Rights and Choices
                </h2>
                <p className="mb-4">
                  Depending on your location, you may have certain rights regarding your personal information:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Access and update your personal information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Object to or restrict certain processing activities</li>
                  <li>Data portability rights</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 font-[family-name:var(--font-geist-sans)] text-[#C33768]">
                  6. HIPAA Compliance
                </h2>
                <p className="mb-4">
                  As a healthcare technology provider, AiroDental is committed to HIPAA compliance. 
                  We implement appropriate safeguards to protect protected health information (PHI) 
                  and ensure our platform meets healthcare industry standards for data protection.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 font-[family-name:var(--font-geist-sans)] text-[#C33768]">
                  7. Contact Us
                </h2>
                <p className="mb-4">
                  If you have any questions about this Privacy Policy or our data practices, 
                  please contact us at:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="mb-2"><strong>Email:</strong> privacy@AiroDental.com</p>
                  <p className="mb-2"><strong>Address:</strong> AiroDental Privacy Team</p>
                  <p>7101 NW 150th St, Ste 100 Oklahoma City, OK 73142 United States</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 font-[family-name:var(--font-geist-sans)] text-[#C33768]">
                  8. Changes to This Policy
                </h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any 
                  changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; 
                  date. Your continued use of our services after any changes constitutes acceptance 
                  of the updated policy.
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