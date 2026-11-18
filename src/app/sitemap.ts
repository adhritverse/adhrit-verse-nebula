import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

const baseUrl = "https://adhritverse.in";

const staticRoutes = [
  "",
  "/services",
  "/projects",
  "/team",
  "/blog",
  "/contact",
  "/faq",
  "/privacy",
  "/terms",
];

// Blog posts currently listed in src/app/blog/page.tsx.
const blogSlugs = [
  "scaling-nextjs-startups",
  "ai-cybersecurity-trends",
  "flutter-vs-react-native",
  "building-ai-agents",
  "startup-security-audit",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));

  const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.id}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...blogPages, ...projectPages];
}
