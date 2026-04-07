import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CanvasHero from "@/components/CanvasHero";
import BlobBackground from "@/components/BlobBackground";
import Link from "next/link";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "AdhritVerse | Best Tech Agency in Indore | AI-Powered Startup Partner",
  description:
    "AdhritVerse is Indore's #1 AI-powered tech agency in Vijay Nagar. We deliver web development, mobile apps, cybersecurity & AI solutions for startups & enterprises across India. Get a free consultation today.",
  alternates: { canonical: "https://adhritverse.in" },
  openGraph: {
    title: "AdhritVerse | Best Tech Agency in Indore | AI-Powered Startup Partner",
    description:
      "Indore's leading AI-powered tech partner for startups & enterprises. Web development, cybersecurity, AI/ML & cloud DevOps from Vijay Nagar, Indore.",
    url: "https://adhritverse.in",
  },
};

// ── Data ──────────────────────────────────────────────────────────────────────

const SERVICES = [
  {
    icon: "fas fa-code",
    title: "Web Development",
    slug: "web-development",
    desc: "MERN Stack & Next.js specialists. We build SEO-optimized, high-performance web apps that convert visitors into customers — tailored for Indore startups and global SaaS.",
    color: "text-primary",
    bg: "bg-primary/20",
    glow: "rgba(59,130,246,0.15)",
  },
  {
    icon: "fas fa-mobile-alt",
    title: "App Development",
    slug: "app-development",
    desc: "Cross-platform mobile apps using Flutter & React Native. Ship to iOS and Android simultaneously — faster go-to-market for your startup.",
    color: "text-secondary",
    bg: "bg-secondary/20",
    glow: "rgba(37,99,235,0.15)",
  },
  {
    icon: "fas fa-paint-brush",
    title: "UI/UX Design",
    slug: "uiux-design",
    desc: "Premium user-centered design, prototyping & design systems. Interfaces that delight, engage, and drive measurable business results.",
    color: "text-accent",
    bg: "bg-accent/20",
    glow: "rgba(14,165,233,0.15)",
  },
  {
    icon: "fas fa-shield-alt",
    title: "Cybersecurity & Ethical Hacking",
    slug: "cybersecurity",
    desc: "VAPT, penetration testing & security audits. We identify vulnerabilities before attackers do — essential for every modern startup in India.",
    color: "text-red-500",
    bg: "bg-red-500/20",
    glow: "rgba(239,68,68,0.15)",
  },
  {
    icon: "fas fa-brain",
    title: "AI/ML Solutions",
    slug: "ai-ml",
    desc: "Custom AI chatbots, predictive analytics & intelligent automation. Give your product the competitive edge of artificial intelligence.",
    color: "text-emerald-500",
    bg: "bg-emerald-500/20",
    glow: "rgba(16,185,129,0.15)",
  },
  {
    icon: "fas fa-cloud",
    title: "Cloud & DevOps",
    slug: "cloud-devops",
    desc: "AWS / Azure / GCP cloud setup, CI/CD pipelines & Kubernetes. Scale from MVP to enterprise without breaking your infrastructure.",
    color: "text-cyan-500",
    bg: "bg-cyan-500/20",
    glow: "rgba(6,182,212,0.15)",
  },
];

const WHY_US = [
  {
    icon: "fas fa-shield-alt",
    color: "text-red-400",
    bg: "bg-red-500/10",
    border: "border-red-500/20",
    title: "Cybersecurity-First Mindset",
    desc: "Every product we build undergoes security review. We're one of the only agencies in Indore with in-house ethical hackers.",
  },
  {
    icon: "fas fa-brain",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    title: "AI Integrated by Default",
    desc: "We don't bolt on AI as an afterthought — intelligent automation and ML are core to our engineering process.",
  },
  {
    icon: "fas fa-rocket",
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
    title: "Startup Speed, Enterprise Quality",
    desc: "MVPs in 4–8 weeks without sacrificing scalability, performance, or code maintainability.",
  },
  {
    icon: "fas fa-handshake",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    title: "Co-Founder Mentality",
    desc: "We invest in your product's success — not just the sprint. Deep product thinking, not just task execution.",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    icon: "fas fa-comments",
    title: "Discovery & Strategy",
    desc: "Free 30-min consultation. We map your goals, constraints, and competitive landscape to define the right tech roadmap.",
  },
  {
    step: "02",
    icon: "fas fa-drafting-compass",
    title: "Design & Architecture",
    desc: "UI/UX wireframes, system design, database schema, and API contracts — all reviewed with you before a line of code is written.",
  },
  {
    step: "03",
    icon: "fas fa-code-branch",
    title: "Agile Development",
    desc: "2-week sprints with weekly demos. Full transparency via GitHub, Notion, and daily standups.",
  },
  {
    step: "04",
    icon: "fas fa-shield-alt",
    title: "Security & QA",
    desc: "Automated testing, manual QA, and a security audit on every release — before it touches production.",
  },
  {
    step: "05",
    icon: "fas fa-cloud-upload-alt",
    title: "Launch & Scale",
    desc: "Zero-downtime deployment on AWS/GCP, CI/CD pipelines, monitoring dashboards — and ongoing support post-launch.",
  },
];

const TECH_CATEGORIES = [
  {
    label: "Frontend",
    icon: "fas fa-palette",
    color: "text-blue-400",
    techs: [
      { name: "React", img: "https://techstack-generator.vercel.app/react-icon.svg" },
      { name: "Next.js", img: "https://skillicons.dev/icons?i=nextjs" },
      { name: "TypeScript", img: "https://techstack-generator.vercel.app/ts-icon.svg" },
      { name: "JavaScript", img: "https://techstack-generator.vercel.app/js-icon.svg" },
      { name: "HTML5", img: "https://skillicons.dev/icons?i=html" },
      { name: "CSS3", img: "https://skillicons.dev/icons?i=css" },
      { name: "Tailwind", img: "https://skillicons.dev/icons?i=tailwind" },
      { name: "Bootstrap", img: "https://skillicons.dev/icons?i=bootstrap" },
      { name: "Vue.js", img: "https://skillicons.dev/icons?i=vue" },
      { name: "Angular", img: "https://skillicons.dev/icons?i=angular" },
      { name: "Sass", img: "https://skillicons.dev/icons?i=sass" },
      { name: "jQuery", img: "https://skillicons.dev/icons?i=jquery" },
      { name: "Three.js", img: "https://skillicons.dev/icons?i=threejs" },
      { name: "GSAP", img: "https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg" },
      { name: "Figma", img: "https://skillicons.dev/icons?i=figma" },
    ],
  },
  {
    label: "Backend",
    icon: "fas fa-server",
    color: "text-emerald-400",
    techs: [
      { name: "Node.js", img: "https://skillicons.dev/icons?i=nodejs" },
      { name: "Express", img: "https://skillicons.dev/icons?i=express" },
      { name: "Python", img: "https://techstack-generator.vercel.app/python-icon.svg" },
      { name: "Django", img: "https://techstack-generator.vercel.app/django-icon.svg" },
      { name: "FastAPI", img: "https://skillicons.dev/icons?i=fastapi" },
      { name: "PHP", img: "https://skillicons.dev/icons?i=php" },
      { name: "Laravel", img: "https://skillicons.dev/icons?i=laravel" },
      { name: "C#", img: "https://techstack-generator.vercel.app/csharp-icon.svg" },
      { name: "C++", img: "https://techstack-generator.vercel.app/cpp-icon.svg" },
      { name: "GraphQL", img: "https://skillicons.dev/icons?i=graphql" },
      { name: "Webpack", img: "https://techstack-generator.vercel.app/webpack-icon.svg" },
      { name: "WordPress", img: "https://skillicons.dev/icons?i=wordpress" },
      { name: "Rust", img: "https://skillicons.dev/icons?i=rust" },
      { name: "Go", img: "https://skillicons.dev/icons?i=go" },
    ],
  },
  {
    label: "Mobile & AI",
    icon: "fas fa-brain",
    color: "text-pink-400",
    techs: [
      { name: "Flutter", img: "https://skillicons.dev/icons?i=flutter" },
      { name: "React Native", img: "https://techstack-generator.vercel.app/react-icon.svg" },
      { name: "Android", img: "https://skillicons.dev/icons?i=androidstudio" },
      { name: "Swift", img: "https://skillicons.dev/icons?i=swift" },
      { name: "TensorFlow", img: "https://skillicons.dev/icons?i=tensorflow" },
      { name: "PyTorch", img: "https://skillicons.dev/icons?i=pytorch" },
      { name: "OpenAI", img: "https://latestlogo.com/wp-content/uploads/2024/01/openai-icon.png" },
      { name: "Keras", img: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg" },
    ],
  },
  {
    label: "Database & Cloud",
    icon: "fas fa-cloud",
    color: "text-cyan-400",
    techs: [
      { name: "AWS", img: "https://techstack-generator.vercel.app/aws-icon.svg" },
      { name: "GCP", img: "https://skillicons.dev/icons?i=gcp" },
      { name: "Azure", img: "https://skillicons.dev/icons?i=azure" },
      { name: "MySQL", img: "https://techstack-generator.vercel.app/mysql-icon.svg" },
      { name: "MongoDB", img: "https://skillicons.dev/icons?i=mongodb" },
      { name: "PostgreSQL", img: "https://skillicons.dev/icons?i=postgres" },
      { name: "Redis", img: "https://skillicons.dev/icons?i=redis" },
      { name: "Firebase", img: "https://skillicons.dev/icons?i=firebase" },
      { name: "Supabase", img: "https://skillicons.dev/icons?i=supabase" },
      { name: "SQLite", img: "https://skillicons.dev/icons?i=sqlite" },
      { name: "Prisma", img: "https://skillicons.dev/icons?i=prisma" },
    ],
  },
  {
    label: "DevOps & Tools",
    icon: "fas fa-tools",
    color: "text-purple-400",
    techs: [
      { name: "Docker", img: "https://techstack-generator.vercel.app/docker-icon.svg" },
      { name: "Kubernetes", img: "https://skillicons.dev/icons?i=kubernetes" },
      { name: "GitHub", img: "https://techstack-generator.vercel.app/github-icon.svg" },
      { name: "Git", img: "https://user-images.githubusercontent.com/25181517/192108372-f71d70ac-7ae6-4c0d-8395-51d8870c2ef0.png" },
      { name: "GitLab", img: "https://skillicons.dev/icons?i=gitlab" },
      { name: "Linux", img: "https://skillicons.dev/icons?i=linux" },
      { name: "Nginx", img: "https://skillicons.dev/icons?i=nginx" },
      { name: "VS Code", img: "https://skillicons.dev/icons?i=vscode" },
      { name: "Postman", img: "https://skillicons.dev/icons?i=postman" },
      { name: "Vercel", img: "https://skillicons.dev/icons?i=vercel" },
    ],
  },
];


const TESTIMONIALS = [
  {
    name: "Aakash Sharma",
    role: "Founder, FinTech Startup",
    location: "Indore",
    quote:
      "AdhritVerse transformed our MVP into a production-grade AI platform in just 8 weeks. Their cybersecurity audit saved us from a critical vulnerability before launch. Best tech team in Indore — period.",
    rating: 5,
    date: "2024-09",
  },
  {
    name: "Priya Verma",
    role: "CEO, EdTech Company",
    location: "Mumbai",
    quote:
      "We tried 3 agencies before AdhritVerse. The difference is night and day. They actually understand startup growth, not just code. Our app went from 0 to 50K users in 4 months.",
    rating: 5,
    date: "2024-11",
  },
  {
    name: "Rahul Mehta",
    role: "Co-Founder, SaaS Platform",
    location: "Bangalore",
    quote:
      "The AI/ML integration they built for our platform reduced our customer churn by 34%. These guys are not an agency — they're a genuine tech growth partner.",
    rating: 5,
    date: "2025-01",
  },
];

const TRUST_STATS = [
  { value: "40+", label: "Projects Delivered", icon: "fas fa-rocket" },
  { value: "100%", label: "Client Satisfaction", icon: "fas fa-star" },
  { value: "6+", label: "Service Domains", icon: "fas fa-layer-group" },
  { value: "₹50K+", label: "Average Project Value", icon: "fas fa-rupee-sign" },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main
      className="min-h-screen relative"
      itemScope
      itemType="https://schema.org/WebPage"
    >
      <Navbar />
      <BlobBackground />

      {/* ── Hero ── */}
      <CanvasHero />

      {/* ── Trust Bar — commented out ── */}
      {/* <section
        aria-label="AdhritVerse at a glance"
        className="py-8 relative z-10 border-y border-white/5 bg-slate-900/40 backdrop-blur-sm"
        itemScope
        itemType="https://schema.org/Organization"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {TRUST_STATS.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center text-center gap-2 group py-2"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary text-sm group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  <i className={stat.icon} aria-hidden="true" />
                </div>
                <div className="font-display text-2xl font-bold text-white" itemProp="numberOfEmployees">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ── Services ── */}
      <section
        id="services"
        className="py-20 md:py-28 relative z-10"
        aria-labelledby="services-heading"
        itemScope
        itemType="https://schema.org/ItemList"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-5">
              <i className="fas fa-map-marker-alt text-primary text-xs" aria-hidden="true" />
              <span className="text-xs font-medium text-slate-300 uppercase tracking-wide">
                Vijay Nagar, Indore · MP · India
              </span>
            </div>
            <h2
              id="services-heading"
              className="font-display text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4"
            >
              What We <span className="text-gradient">Deliver</span>
            </h2>
            <p className="text-sm md:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
              From AI-powered web apps to enterprise cybersecurity — AdhritVerse is Indore&apos;s
              most comprehensive{" "}
              <strong className="text-slate-200">startup tech partner</strong>, not just another digital
              agency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, idx) => (
              <ServiceCard key={s.title} index={idx + 1} {...s} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="btn-outline px-8 py-3.5 rounded-full text-white font-medium text-sm inline-flex items-center gap-2"
              aria-label="View all services offered by AdhritVerse"
            >
              View All Services <i className="fas fa-arrow-right text-xs" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why AdhritVerse ── */}
      <section
        id="why-us"
        className="py-20 md:py-28 relative z-10 bg-slate-900/40 overflow-hidden"
        aria-labelledby="why-heading"
      >
        {/* bg accent */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-72 h-72 bg-primary/5 rounded-full blur-[100px]" />
          <div className="absolute right-0 top-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left text */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-5">
                <i className="fas fa-trophy text-primary text-xs" aria-hidden="true" />
                <span className="text-xs font-semibold text-primary uppercase tracking-widest">
                  Why Choose Us
                </span>
              </div>
              <h2
                id="why-heading"
                className="font-display text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-5 leading-tight"
              >
                Indore&apos;s Only{" "}
                <span className="text-gradient">Full-Stack</span>{" "}
                Tech Partner
              </h2>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6">
                Most agencies pick one lane — design <em>or</em> development <em>or</em> security.
                AdhritVerse is the only firm in Indore that unites{" "}
                <strong className="text-slate-200">AI engineering</strong>,{" "}
                <strong className="text-slate-200">cybersecurity</strong>, and{" "}
                <strong className="text-slate-200">full-stack product development</strong> under one
                roof — so your startup never needs to juggle multiple vendors.
              </p>
              <Link
                href="/team"
                className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:gap-3 transition-all duration-200"
                aria-label="Meet the AdhritVerse team"
              >
                Meet the team <i className="fas fa-arrow-right text-xs" aria-hidden="true" />
              </Link>
            </div>

            {/* Right cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {WHY_US.map((item) => (
                <article
                  key={item.title}
                  className={`rounded-2xl p-5 border ${item.border} ${item.bg} hover:scale-[1.02] transition-transform duration-300`}
                >
                  <div
                    className={`w-9 h-9 rounded-xl ${item.bg} border ${item.border} flex items-center justify-center mb-3`}
                    aria-hidden="true"
                  >
                    <i className={`${item.icon} ${item.color} text-sm`} />
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-1">{item.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section
        id="process"
        className="py-20 md:py-28 relative z-10"
        aria-labelledby="process-heading"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-5">
              <i className="fas fa-route text-primary text-xs" aria-hidden="true" />
              <span className="text-xs font-medium text-slate-300 uppercase tracking-wide">
                How We Work
              </span>
            </div>
            <h2
              id="process-heading"
              className="font-display text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4"
            >
              From Idea to{" "}
              <span className="text-gradient">Launch</span>
            </h2>
            <p className="text-sm md:text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
              A proven 5-step process that takes your product from concept to production — securely,
              on time, and at startup speed.
            </p>
          </div>

          <div className="relative w-full max-w-5xl mx-auto rounded-3xl overflow-hidden glass-card p-6 md:p-10 border-primary/20 hover:border-primary/40 transition-colors duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 pointer-events-none" aria-hidden="true" />
            <img
              src="/workflow.png"
              alt="AdhritVerse 6-Step Development Workflow: Analysis, Design, Implementation, Quality Assurance, Pre-Launch, Deployment"
              className="w-full h-auto object-contain drop-shadow-2xl"
              loading="lazy"
            />
          </div>

          <div className="text-center mt-10">
            <Link
              href="/contact"
              className="btn-primary px-8 py-3.5 rounded-full text-white font-medium text-sm inline-flex items-center gap-2"
              aria-label="Start your project with AdhritVerse"
            >
              <i className="fas fa-play text-xs" aria-hidden="true" />
              Start Your Project
            </Link>
          </div>
        </div>
      </section>

      {/* ── Tech Stack ── */}
      <section
        id="tech-stack"
        className="py-16 md:py-24 relative z-10 bg-slate-900/40 border-y border-white/5 overflow-hidden"
        aria-labelledby="tech-heading"
        itemScope
        itemType="https://schema.org/ItemList"
      >
        {/* bg glow */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute left-1/4 top-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px]" />
          <div className="absolute right-1/4 bottom-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-5">
              <i className="fas fa-microchip text-primary text-xs" aria-hidden="true" />
              <span className="text-xs font-medium text-slate-300 uppercase tracking-wide">
                Our Tech Arsenal
              </span>
            </div>
            <h2
              id="tech-heading"
              className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4"
            >
              Technologies We{" "}
              <span className="text-gradient">Master</span>
            </h2>
            <p className="text-sm md:text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
              50+ technologies across frontend, backend, mobile, AI/ML, cloud, and DevOps — battle-tested across
              40+ real-world projects for startups and enterprises.
            </p>
          </div>

          {/* Category tabs + grids */}
          <div className="space-y-10">
            {TECH_CATEGORIES.map((cat) => (
              <div key={cat.label}>
                {/* Category label */}
                <div className="flex items-center gap-2 mb-5">
                  <div className="h-px flex-1 bg-white/5" aria-hidden="true" />
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/8">
                    <i className={`${cat.icon} ${cat.color} text-xs`} aria-hidden="true" />
                    <span className={`text-xs font-bold uppercase tracking-widest ${cat.color}`}>
                      {cat.label}
                    </span>
                  </div>
                  <div className="h-px flex-1 bg-white/5" aria-hidden="true" />
                </div>

                {/* Tech icons grid */}
                <div
                  className="flex flex-wrap justify-center gap-3 sm:gap-4"
                  role="list"
                  aria-label={`${cat.label} technologies used by AdhritVerse`}
                >
                  {cat.techs.map((tech) => (
                    <div
                      key={tech.name}
                      role="listitem"
                      itemProp="itemListElement"
                      itemScope
                      itemType="https://schema.org/SoftwareApplication"
                      className="group flex flex-col items-center gap-2 p-3.5 sm:p-4 rounded-2xl bg-slate-800/50 border border-white/6 hover:border-primary/40 hover:bg-slate-700/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] transition-all duration-300 cursor-default w-[80px] sm:w-[90px]"
                      title={`${tech.name} – used by AdhritVerse`}
                    >
                      <meta itemProp="name" content={tech.name} />
                      <meta itemProp="applicationCategory" content={cat.label} />
                      <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300">
                        <img
                          src={tech.img}
                          alt={`${tech.name} logo – technology used by AdhritVerse`}
                          width={48}
                          height={48}
                          className="w-full h-full object-contain drop-shadow-[0_0_6px_rgba(0,0,0,0.5)]"
                          loading="lazy"
                        />
                      </div>
                      <span className="text-[10px] sm:text-xs text-slate-400 group-hover:text-slate-200 font-medium text-center transition-colors duration-200 leading-tight whitespace-nowrap">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom note */}
          <p className="text-center text-xs text-slate-600 mt-10">
            + Next.js, Flutter, Docker, Kubernetes, OpenAI, LangChain &amp; more
          </p>
        </div>
      </section>

      {/* ── Projects ── */}
      <section
        id="projects"
        className="py-20 md:py-28 relative z-10"
        aria-labelledby="projects-heading"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4">
                <i className="fas fa-layer-group text-primary text-xs" aria-hidden="true" />
                <span className="text-xs font-medium text-slate-300 uppercase tracking-wide">
                  Portfolio
                </span>
              </div>
              <h2
                id="projects-heading"
                className="font-display text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-3"
              >
                Innovation in <span className="text-gradient">Action</span>
              </h2>
              <p className="text-sm md:text-base text-slate-400 max-w-xl leading-relaxed">
                A curated portfolio of secure, high-performing applications — built by AdhritVerse for
                clients from Indore to the world.
              </p>
            </div>
            <Link
              href="/projects"
              className="btn-outline px-6 py-3 rounded-full text-white text-sm font-medium w-max shrink-0"
              aria-label="View all AdhritVerse projects"
            >
              View All Projects
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              img="/projectimg/project-1.png"
              title="Deforastration"
              desc="A cutting-edge web experience for environmental awareness — GSAP animations, WebGL, and modern UI engineering."
              href="https://deforastration.vercel.app/"
              tags={["Modern Web", "Innovation"]}
            />
            <ProjectCard
              img="/projectimg/project2.png"
              title="GSAP Creative Portfolio"
              desc="A high-fidelity developer portfolio showcasing advanced animation techniques and premium dark UI design."
              href="https://gsap-portfolio-puce.vercel.app/"
              tags={["GSAP", "Creative"]}
            />
            <ProjectCard
              img="/projectimg/Project-3.png"
              title="Luxe Premium Store"
              desc="A premium luxury e-commerce platform with smooth UX, high-end aesthetics, and performance-first architecture."
              href="https://luxe-vert-eta.vercel.app/"
              tags={["E-Commerce", "Premium"]}
            />
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section
        id="testimonials"
        className="py-20 md:py-28 relative z-10 bg-slate-900/40"
        aria-labelledby="testimonials-heading"
        itemScope
        itemType="https://schema.org/Organization"
      >
        {/* Aggregate rating for schema */}
        <div itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating" className="hidden">
          <meta itemProp="ratingValue" content="5" />
          <meta itemProp="reviewCount" content="3" />
          <meta itemProp="bestRating" content="5" />
          <meta itemProp="worstRating" content="1" />
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 mb-5">
              {[1,2,3,4,5].map(i => (
                <i key={i} className="fas fa-star text-amber-400 text-[10px]" aria-hidden="true" />
              ))}
              <span className="text-xs font-semibold text-amber-300 ml-1">5.0 · 40+ Projects</span>
            </div>
            <h2
              id="testimonials-heading"
              className="font-display text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4"
            >
              Trusted by <span className="text-gradient">Founders</span>
            </h2>
            <p className="text-sm md:text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
              Real results from real clients — startups, enterprises, and funded ventures who chose
              AdhritVerse as their tech partner.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <FAQ />

      {/* ── Final CTA ── */}
      <section
        id="contact"
        className="py-20 md:py-32 relative z-10 flex flex-col items-center justify-center"
        aria-labelledby="cta-heading"
      >
        <div className="max-w-4xl mx-auto px-6 w-full relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl -z-10 rounded-full pointer-events-none" />
          <div
            className="glass-card p-8 sm:p-12 md:p-16 rounded-3xl text-center border-t border-white/20"
            itemScope
            itemType="https://schema.org/LocalBusiness"
          >
            <meta itemProp="name" content="AdhritVerse" />
            <meta itemProp="telephone" content="+91-8462802086" />
            <meta itemProp="email" content="contact@adhritverse.in" />

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
              <span className="text-xs text-emerald-300 font-semibold uppercase tracking-wide">
                Available for New Projects · Indore &amp; Remote
              </span>
            </div>

            <h2
              id="cta-heading"
              className="font-display text-3xl md:text-5xl font-bold text-white mb-4 sm:mb-6"
            >
              Let&apos;s Build Something <span className="text-gradient">Great</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
              Partner with AdhritVerse — Indore&apos;s AI-powered startup tech partner. From MVP to
              scale, we architect your growth.{" "}
              <strong className="text-white">
                Based in Vijay Nagar, Indore, serving India &amp; global startups.
              </strong>
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mb-8">
              <Link
                href="/contact"
                id="cta-free-consultation"
                className="btn-primary px-8 sm:px-10 py-3 sm:py-4 rounded-full text-white font-medium w-full sm:w-auto text-sm sm:text-base whitespace-nowrap flex items-center justify-center gap-2"
                aria-label="Get a free consultation from AdhritVerse Indore"
              >
                <i className="fas fa-calendar-check text-sm" aria-hidden="true" />
                Get Free Consultation in Indore
              </Link>
              <a
                href="tel:+918462802086"
                id="cta-call-now"
                className="btn-outline px-8 sm:px-10 py-3 sm:py-4 rounded-full text-white font-medium w-full sm:w-auto text-sm sm:text-base whitespace-nowrap flex items-center justify-center gap-2"
                aria-label="Call AdhritVerse now"
              >
                <i className="fas fa-phone-alt text-xs sm:text-sm" aria-hidden="true" />
                Book a Strategy Call
              </a>
            </div>

            {/* Location trust strip */}
            <div className="flex flex-wrap justify-center gap-4 text-xs text-slate-500 border-t border-white/5 pt-6">
              <a
                href="https://www.google.com/maps?q=Vijay+Nagar+Indore"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-slate-300 transition-colors duration-200"
                aria-label="AdhritVerse location on Google Maps"
              >
                <i className="fas fa-map-marker-alt text-primary" aria-hidden="true" />
                Vijay Nagar, Indore, MP
              </a>
              <a
                href="mailto:contact@adhritverse.in"
                className="flex items-center gap-1.5 hover:text-slate-300 transition-colors duration-200"
                aria-label="Email AdhritVerse"
              >
                <i className="fas fa-envelope text-primary" aria-hidden="true" />
                contact@adhritverse.in
              </a>
              <a
                href="tel:+918462802086"
                className="flex items-center gap-1.5 hover:text-slate-300 transition-colors duration-200"
                aria-label="Call AdhritVerse"
              >
                <i className="fas fa-phone text-primary" aria-hidden="true" />
                +91 8462802086
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

// ── Components ────────────────────────────────────────────────────────────────

function ServiceCard({
  icon, title, slug, desc, color, bg, glow, index,
}: {
  icon: string; title: string; slug: string; desc: string;
  color: string; bg: string; glow: string; index: number;
}) {
  return (
    <article
      className="glass-card p-7 rounded-3xl group cursor-pointer relative overflow-hidden transition-all duration-500"
      itemScope
      itemType="https://schema.org/Service"
      itemProp="itemListElement"
    >
      <meta itemProp="position" content={String(index)} />
      <div
        className="absolute top-0 right-0 -mr-8 -mt-8 w-36 h-36 rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-700"
        style={{ background: glow }}
        aria-hidden="true"
      />
      <div
        className={`w-13 h-13 w-14 h-14 rounded-2xl ${bg} flex items-center justify-center ${color} text-2xl mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl border border-white/5`}
        aria-hidden="true"
      >
        <i className={icon} />
      </div>
      <h3
        className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300"
        itemProp="name"
      >
        {title}
      </h3>
      <p
        className="text-slate-400 text-sm mb-5 leading-relaxed line-clamp-3 group-hover:text-slate-200 transition-colors duration-300"
        itemProp="description"
      >
        {desc}
      </p>
      <Link
        href={`/services#${slug}`}
        className={`${color} group-hover:translate-x-2 font-semibold text-sm flex items-center gap-2 transition-all duration-300`}
        itemProp="url"
        aria-label={`Learn more about ${title} at AdhritVerse`}
      >
        Explore Service <i className="fas fa-arrow-right text-xs" aria-hidden="true" />
      </Link>
    </article>
  );
}

function ProjectCard({
  img, title, desc, href, tags,
}: {
  img: string; title: string; desc: string; href: string; tags: string[];
}) {
  return (
    <article
      className="project-card group cursor-pointer"
      itemScope
      itemType="https://schema.org/CreativeWork"
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${title} project by AdhritVerse`}
        itemProp="url"
      >
        <div className="h-56 bg-slate-800 relative overflow-hidden rounded-t-[1.5rem]">
          <img
            src={img}
            alt={`${title} – AdhritVerse Project`}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
            loading="lazy"
            itemProp="image"
          />
          <div className="absolute inset-0 bg-darker/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-[2px] z-20">
            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <i className="fas fa-external-link-alt text-white" aria-hidden="true" />
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-darker/90 via-darker/40 to-transparent opacity-80 z-10" />
          <div className="absolute bottom-4 left-4 flex flex-wrap gap-2 pr-4 z-20">
            {tags.map((tag) => (
              <span key={tag} className="tag-pill">{tag}</span>
            ))}
          </div>
        </div>
        <div className="p-6 relative">
          <div className="flex items-center justify-between mb-2">
            <h3
              className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300"
              itemProp="name"
            >
              {title}
            </h3>
            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <i className="fas fa-arrow-right text-[10px] text-primary" aria-hidden="true" />
            </div>
          </div>
          <p
            className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300 line-clamp-2"
            itemProp="description"
          >
            {desc}
          </p>
        </div>
      </a>
    </article>
  );
}

function TestimonialCard({
  name, role, location, quote, rating, date,
}: {
  name: string; role: string; location: string; quote: string; rating: number; date: string;
}) {
  return (
    <article
      className="glass-card p-8 rounded-3xl flex flex-col gap-5 group hover:border-primary/20 transition-all duration-500"
      itemScope
      itemType="https://schema.org/Review"
    >
      {/* Rating */}
      <div
        className="flex gap-1"
        itemProp="reviewRating"
        itemScope
        itemType="https://schema.org/Rating"
      >
        <meta itemProp="ratingValue" content={String(rating)} />
        <meta itemProp="bestRating" content="5" />
        {Array.from({ length: rating }).map((_, i) => (
          <i key={i} className="fas fa-star text-amber-400 text-sm" aria-hidden="true" />
        ))}
        <span className="sr-only">{rating} out of 5 stars</span>
      </div>

      {/* Quote */}
      <blockquote
        className="text-sm text-slate-300 leading-relaxed italic flex-1"
        itemProp="reviewBody"
      >
        &ldquo;{quote}&rdquo;
      </blockquote>

      {/* Author */}
      <div
        className="flex items-center gap-3 mt-auto border-t border-white/5 pt-4"
        itemProp="author"
        itemScope
        itemType="https://schema.org/Person"
      >
        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-base shrink-0" aria-hidden="true">
          {name[0]}
        </div>
        <div>
          <div className="text-white font-semibold text-sm" itemProp="name">{name}</div>
          <div className="text-slate-500 text-xs">
            <span itemProp="jobTitle">{role}</span>
            {" · "}
            <span itemProp="addressLocality">{location}</span>
          </div>
        </div>
        <time
          dateTime={date}
          className="ml-auto text-[10px] text-slate-600 font-mono"
          itemProp="datePublished"
        >
          {date}
        </time>
      </div>
    </article>
  );
}
