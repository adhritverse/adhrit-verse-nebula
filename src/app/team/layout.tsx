import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team | Founders Hritik Jaiswal & Rishabh Kushwah · AdhritVerse Indore",
  description:
    "Meet the AdhritVerse leadership team — Hritik Jaiswal (Founder & CEO) and Rishabh Kushwah (Co-Founder & CTO). A passionate tech team based in Vijay Nagar, Indore, building AI-powered solutions for startups across India.",
  alternates: { canonical: "https://adhritverse.in/team" },
  openGraph: {
    title: "Our Team – AdhritVerse | Hritik Jaiswal & Rishabh Kushwah · Indore",
    description:
      "Meet the founders and engineers behind AdhritVerse, Indore's AI-powered tech agency. Hritik Jaiswal (CEO) and Rishabh Kushwah (CTO) lead the team from Vijay Nagar, Indore.",
    url: "https://adhritverse.in/team",
  },
};

export default function TeamLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
