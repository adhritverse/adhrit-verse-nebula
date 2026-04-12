import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team | Founders Hritik Jaiswal & Rishabh Kushwah · AV Technologies Indore",
  description:
    "Meet the AV Technologies leadership team — Hritik Jaiswal (Founder & CEO) and Rishabh Kushwah (Co-Founder & CTO). A passionate tech team based in Vijay Nagar, Indore, building AI-powered solutions for startups across India.",
  alternates: { canonical: "https://adhritverse.in/team" },
  openGraph: {
    title: "Our Team – AV Technologies | Hritik Jaiswal & Rishabh Kushwah · Indore",
    description:
      "Meet the founders and engineers behind AV Technologies, Indore's AI-powered tech agency. Hritik Jaiswal (CEO) and Rishabh Kushwah (CTO) lead the team from Vijay Nagar, Indore.",
    url: "https://adhritverse.in/team",
  },
};

export default function TeamLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
