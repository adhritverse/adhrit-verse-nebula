import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlobBackground from "@/components/BlobBackground";

export const metadata: Metadata = {
  title: "Terms of Service | AV Technologies",
  description: "Terms of Service and conditions for using AV Technologies products and services.",
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      <BlobBackground />

      <section className="pt-32 sm:pt-40 pb-10 text-center px-6 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4 text-[10px] sm:text-xs text-slate-400 tracking-widest uppercase">
          <i className="fas fa-file-contract text-primary" />
          Legal Document
        </div>
        <h1 className="font-display text-[26px] sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
          Terms of <span className="text-gradient">Service</span>
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
              Welcome to AV Technologies ("Company", "we", "our", "us"). These Terms of Service ("Terms") govern your use of our website and services, including web development, mobile app development, cybersecurity consulting, and AI/ML solutions. By accessing our website or engaging our services, you agree to comply with and be bound by these Terms.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">2. Services Rendered</h2>
            <p className="mb-6 leading-relaxed">
              AV Technologies provides digital transformation services for startups and enterprises. The specific scope, deliverables, timeline, and pricing of our services will be formulated within a separate Statement of Work (SOW) or Master Services Agreement (MSA) signed by both parties.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">3. Intellectual Property</h2>
            <p className="mb-6 leading-relaxed">
              Unless otherwise agreed upon in writing, all underlying source code, designs, and proprietary methodologies developed by AV Technologies remain our intellectual property until full payment is received. Upon final payment, clients receive a perpetual, non-exclusive license to use the deliverables as intended.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">4. Payment Terms</h2>
            <p className="mb-6 leading-relaxed">
              We operate on a milestone-based payment structure unless stated otherwise. Late payments may result in the suspension of ongoing work. All deposits are non-refundable to cover initial project planning and resource allocation.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">5. Confidentiality</h2>
            <p className="mb-6 leading-relaxed">
              Both parties agree to keep any proprietary information, trade secrets, business models, and technical data strictly confidential. We are happy to sign standard Non-Disclosure Agreements (NDAs) before discussing your project.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">6. Limitation of Liability</h2>
            <p className="mb-6 leading-relaxed">
              AV Technologies shall not be held liable for any indirect, incidental, or consequential damages arising out of the use or inability to use our services or deliverables. Our maximum liability shall not exceed the total fees paid by the client for the specific project in question.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">7. Governing Law</h2>
            <p className="mb-6 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising out of the interpretation or enforcement of these Terms shall be subject to the exclusive jurisdiction of the courts located in Indore, Madhya Pradesh.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">8. Contact Us</h2>
            <p className="leading-relaxed">
              If you have any questions or concerns regarding these Terms of Service, please contact us at:
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
