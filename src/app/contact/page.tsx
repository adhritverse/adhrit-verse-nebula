"use client";

import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlobBackground from "@/components/BlobBackground";
import { useState } from "react";

// Note: metadata must be in a separate server component, but we can set it via generateMetadata or a parent.
// For now, the root layout metadata covers the contact page sufficiently.


export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus("success");
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen relative">
      <Navbar />
      <BlobBackground />

      <section className="pt-24 sm:pt-36 pb-8 sm:pb-16 text-left sm:text-center px-6 relative z-10">
        <div className="max-w-3xl mx-0 sm:mx-auto">
          {/* <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-5 sm:mb-6">
            <i className="fas fa-map-marker-alt text-primary text-[10px] sm:text-xs"></i>
            <span className="text-[10px] sm:text-xs font-medium text-slate-300 tracking-wide uppercase">Vijay Nagar, Indore · MP · India</span>
          </div> */}
          <h1 className="font-display text-[2rem] sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6 leading-[1.1] sm:leading-tight">
            Get a <span className="text-gradient block sm:inline">Free Consultation</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-400 max-w-xl mx-0 sm:mx-auto leading-relaxed px-0">
            Ready to build with AdhritVerse — India&apos;s leading AI-powered tech agency? Tell us about your project — we respond within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-8 sm:py-12 px-6 pb-20 sm:pb-24 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Form */}
          <div className="glass-card p-6 sm:p-10 rounded-3xl border-white/5 group hover:border-primary/20 transition-all duration-500">
            <h2 className="text-xl sm:text-2xl font-bold font-display text-white mb-6 sm:mb-8 flex items-center gap-3">
              <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary text-base sm:text-lg">
                <i className="fas fa-envelope-open-text"></i>
              </span>
              Send us a Message
            </h2>

            {submitStatus === "success" ? (
              <div className="bg-emerald-500/20 border border-emerald-500/50 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center">
                <i className="fas fa-check-circle text-emerald-400 text-4xl sm:text-5xl mb-3 sm:mb-4"></i>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-sm sm:text-base text-emerald-200">Thank you for reaching out. We&apos;ll get back to you shortly.</p>
                <button onClick={() => setSubmitStatus("idle")} className="mt-4 sm:mt-6 px-4 py-2 sm:px-6 sm:py-2 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 rounded-lg transition-colors text-sm sm:text-base">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <InputGroup label="Full Name" name="name" placeholder="John Doe" icon="fas fa-user" required />
                  <InputGroup label="Email Address" name="email" placeholder="john@example.com" icon="fas fa-envelope" type="email" required />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <InputGroup label="Phone Number" name="phone" placeholder="+91 8462802086" icon="fas fa-phone-alt" />
                  <InputGroup label="Subject" name="subject" placeholder="Project Inquiry" icon="fas fa-tag" required />
                </div>
                <div className="flex flex-col gap-1 sm:gap-2">
                  <label className="text-xs sm:text-sm font-semibold text-slate-300 ml-1 sm:ml-2">Message</label>
                  <div className="relative group">
                    <span className="absolute top-3 sm:top-4 left-3 sm:left-4 text-slate-500 group-focus-within:text-primary transition-colors text-xs sm:text-base">
                      <i className="fas fa-comment-alt"></i>
                    </span>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      placeholder="Tell us about your project..."
                      className="w-full bg-slate-900/40 border border-white/10 rounded-xl sm:rounded-2xl px-9 sm:px-12 py-3 sm:py-4 text-sm sm:text-base text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all placeholder:text-slate-600"
                    ></textarea>
                  </div>
                </div>

                {submitStatus === "error" && (
                  <div className="text-red-400 text-xs sm:text-sm bg-red-400/10 p-2 sm:p-3 rounded-lg border border-red-400/20 text-center">
                    Something went wrong. Please try again later.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary py-3 sm:py-4 rounded-xl text-white font-bold tracking-wide text-sm sm:text-lg flex items-center justify-center gap-2 group transform active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed mt-2 sm:mt-0"
                >
                  {isSubmitting ? (
                    <>Sending... <i className="fas fa-spinner fa-spin text-xs sm:text-sm"></i></>
                  ) : (
                    <>Send Message <i className="fas fa-paper-plane text-xs sm:text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"></i></>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4 sm:gap-8">
            <InfoCard
              icon="fas fa-envelope"
              title="Email Us"
              val="contact@adhritverse.in"
              sub="Our team will respond within 24 hours."
              link="mailto:contact@adhritverse.in"
              color="text-primary bg-primary/20"
            />
            <InfoCard
              icon="fas fa-phone-alt"
              title="Call Us"
              val="+91 8462802086"
              sub="Mon-Sat (10:00 AM - 07:00 PM IST)"
              link="tel:+918462802086"
              color="text-emerald-400 bg-emerald-400/20"
            />
            {/* <InfoCard 
              icon="fas fa-map-marker-alt" 
              title="Visit Our Office" 
              val="Vijay Nagar, Indore" 
              sub="Madhya Pradesh 452010, India. Serving startups across India & globally."
              link="https://maps.google.com/?q=Vijay+Nagar+Indore+Madhya+Pradesh"
              color="text-secondary bg-secondary/20"
            /> */}

            {/* Social Connect */}
            <div className="glass-card p-6 sm:p-10 rounded-3xl border-white/5 flex flex-col items-center text-center">
              <h3 className="text-white font-bold font-display text-lg sm:text-xl mb-6">Connect with us on Socials</h3>
              <div className="flex gap-3 sm:gap-4 flex-wrap justify-center">
                <SocialBtn icon="fab fa-linkedin-in" link="https://www.linkedin.com/company/adhritverse" color="hover:bg-blue-600" />
                {/* <SocialBtn icon="fab fa-github" link="https://github.com/adhritverse" color="hover:bg-slate-700" /> */}
                <SocialBtn icon="fab fa-instagram" link="https://www.instagram.com/adhritverse?igsh=MXgwN2swanRvNmZtYQ==" color="hover:bg-pink-600" />
                <SocialBtn icon="fab fa-twitter" link="https://twitter.com/adhritverse" color="hover:bg-cyan-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function InputGroup({ label, name, placeholder, icon, type = "text", required = false }: { label: string; name: string; placeholder: string; icon: string; type?: string; required?: boolean }) {
  return (
    <div className="flex flex-col gap-1 sm:gap-2">
      <label className="text-xs sm:text-sm font-semibold text-slate-300 ml-1 sm:ml-2">{label}</label>
      <div className="relative group">
        <span className="absolute top-1/2 -translate-y-1/2 left-3 sm:left-4 text-slate-500 group-focus-within:text-primary transition-colors text-xs sm:text-base">
          <i className={icon}></i>
        </span>
        <input
          type={type}
          name={name}
          required={required}
          placeholder={placeholder}
          className="w-full bg-slate-900/40 border border-white/10 rounded-xl sm:rounded-2xl px-9 sm:px-12 py-2.5 sm:py-4 text-sm sm:text-base text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all placeholder:text-slate-600"
        />
      </div>
    </div>
  );
}

function InfoCard({ icon, title, val, sub, link, color }: { icon: string; title: string; val: string; sub: string; link: string; color: string }) {
  return (
    <a href={link} className="glass-card p-5 sm:p-8 rounded-3xl border-white/5 group hover:border-primary/10 transition-all duration-500 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 sm:gap-8">
      <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl ${color} flex items-center justify-center text-xl sm:text-2xl shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
        <i className={icon}></i>
      </div>
      <div>
        <h4 className="text-slate-400 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-1">{title}</h4>
        <div className="text-white text-lg sm:text-xl font-bold font-display mb-1 group-hover:text-primary transition-colors text-wrap break-all sm:break-normal">{val}</div>
        <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{sub}</p>
      </div>
    </a>
  );
}

function SocialBtn({ icon, color, link = "#" }: { icon: string; color: string; link?: string }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-slate-400 hover:text-white ${color} hover:border-transparent transition-all duration-300 transform hover:scale-110 shadow-lg`}>
      <i className={`${icon} text-base sm:text-lg`}></i>
    </a>
  );
}
