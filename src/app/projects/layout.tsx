import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects & Portfolio | Web Apps, AI & Cybersecurity · AV Technologies Indore",
  description:
    "Explore AV Technologies's project portfolio — custom web apps, AI-powered platforms, e-commerce solutions & cybersecurity tools built for startups across India. Based in Vijay Nagar, Indore, MP.",
  alternates: { canonical: "https://adhritverse.in/projects" },
  openGraph: {
    title: "Portfolio | AV Technologies Projects – Web, AI & Cybersecurity · Indore",
    description:
      "See the work from Indore's top AI-powered tech agency. Web development, mobile apps, e-commerce & AI/ML projects by AV Technologies.",
    url: "https://adhritverse.in/projects",
  },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
