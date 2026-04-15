import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlobBackground from "@/components/BlobBackground";

export const metadata: Metadata = {
  title: "Privacy Policy | AV Technologies",
  description: "Privacy Policy detailing how AV Technologies collects, uses, and protects your data.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      <BlobBackground />

      <section className="pt-32 sm:pt-40 pb-10 text-center px-6 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4 text-[10px] sm:text-xs text-slate-400 tracking-widest uppercase">
          <i className="fas fa-user-shield text-primary" />
          Data Security
        </div>
        <h1 className="font-display text-[26px] sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
          Privacy <span className="text-gradient">Policy</span>
        </h1>
        <p className="text-xs sm:text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
          Last updated: [Insert Date]
        </p>
      </section>

      <section className="relative z-10 max-w-4xl mx-auto px-6 pb-20 md:pb-28">
        <div className="prose prose-invert prose-slate max-w-none text-slate-300">
          <div className="glass-card p-8 sm:p-12 rounded-3xl border border-white/5">
            <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
            <p className="mb-6 leading-relaxed">
              At AV Technologies ("we", "our", "us"), we are committed to protecting your privacy and ensuring the security of your personal and business data. This Privacy Policy outlines how we collect, use, process, and safeguard the information you provide to us when you visit our website, use our services, or communicate with our team.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
            <p className="mb-6 leading-relaxed">
              We may collect the following types of information:
              <br /><br />
              <strong>Personal Information:</strong> Includes your name, email address, phone number, company name, and any other details you provide when submitting a contact form or requesting a quote.
              <br /><br />
              <strong>Project & Technical Data:</strong> Information relevant to your digital project, such as technical specifications, architectural requirements, or existing source code provided for audits or development.
              <br /><br />
              <strong>Usage Data:</strong> We may collect non-personally identifiable information automatically, such as IP addresses, browser types, interaction tracking, and device information to improve our website experience.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
            <p className="mb-6 leading-relaxed">
              We use the collected information for the following purposes:
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>To provide, operate, and maintain our digital services.</li>
                <li>To evaluate project requirements and issue accurate proposals.</li>
                <li>To communicate with you regarding project updates, invoices, and support.</li>
                <li>To improve the functionality and performance of our website.</li>
                <li>To fulfill our legal and regulatory obligations.</li>
              </ul>
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">4. Data Sharing and Disclosure</h2>
            <p className="mb-6 leading-relaxed">
              We highly value your privacy. We <strong>do not</strong> sell or rent your personal information to third parties. We may only share your data in the following scenarios:
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>With trusted service providers (e.g., cloud hosting, payment processors) necessary to deliver our services.</li>
                <li>When explicitly authorized by you.</li>
                <li>To comply with legal obligations, court orders, or governmental requests.</li>
              </ul>
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">5. Data Security</h2>
            <p className="mb-6 leading-relaxed">
              As a tech agency possessing cybersecurity expertise, we implement industry-standard encryption, firewalls, and access control measures to protect your personal information and intellectual property from unauthorized access, alteration, or disclosure.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">6. Your Rights</h2>
            <p className="mb-6 leading-relaxed">
              You possess the right to access, update, or request the deletion of your personal information held by us. If you wish to exercise any of these privacy rights, please reach out to us using the contact details provided below.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">7. Contact Us</h2>
            <p className="leading-relaxed">
              If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us at:
              <br /><br />
              <strong>Email:</strong> contact@adhritverse.in<br />
              <strong>Phone:</strong> +91 84628 02086<br />
              <strong>Address:</strong> Vijay Nagar, Indore, Madhya Pradesh 452010
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
