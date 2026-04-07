import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact AdhritVerse | Free Consultation · Vijay Nagar, Indore",
  description:
    "Contact AdhritVerse — Indore's #1 AI-powered tech agency. Get a free consultation for web development, mobile apps, cybersecurity & AI solutions. Based in Vijay Nagar, Indore, MP. Call +91 8462802086.",
  alternates: { canonical: "https://adhritverse.in/contact" },
  openGraph: {
    title: "Contact AdhritVerse | Free Consultation – Tech Agency in Indore",
    description:
      "Reach AdhritVerse for web development, AI/ML, cybersecurity & cloud DevOps. Free consultation available. Vijay Nagar, Indore, MP. +91 8462802086.",
    url: "https://adhritverse.in/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
