import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
});

const BASE_URL = "https://adhritverse.in";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "AdhritVerse | Best Tech Agency in Indore | AI-Powered Startup Partner",
    template: "%s | AdhritVerse – Tech Agency in Indore",
  },
  description:
    "AdhritVerse (AV Technologies) is Indore's #1 AI-powered tech agency. We build web apps, mobile apps, AI/ML solutions & cybersecurity systems for startups & enterprises. Based in Vijay Nagar, Indore, MP.",
  keywords: [
    "AdhritVerse",
    "AV Technologies",
    "best tech agency in Indore",
    "web development company in Indore",
    "software company in Vijay Nagar Indore",
    "best IT company in Vijay Nagar Indore",
    "tech agency near me Indore",
    "software company Indore MP",
    "web development services in Indore",
    "app development company Indore",
    "cybersecurity services Indore",
    "AI development company India",
    "cloud and DevOps services India",
    "affordable web development company in Indore for startups",
    "best cybersecurity consulting firm in Indore",
    "AI solutions for startups in India",
    "custom software development company Indore",
    "startup tech partner India",
    "ethical hacking Indore",
    "AI ML solutions India",
    "Hritik Jaiswal Indore",
  ],
  authors: [{ name: "Hritik Jaiswal", url: BASE_URL }],
  creator: "AdhritVerse – AV Technologies",
  publisher: "AdhritVerse",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "AdhritVerse",
    title: "AdhritVerse | Best Tech Agency in Indore | AI-Powered Startup Partner",
    description:
      "Indore's leading AI-powered tech agency. Web development, mobile apps, cybersecurity, AI/ML & cloud DevOps for startups and enterprises across India.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AdhritVerse – AI-Powered Tech Agency in Indore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AdhritVerse | Best Tech Agency in Indore",
    description:
      "AI-powered web development, cybersecurity & startup tech partner. Based in Vijay Nagar, Indore, MP, India.",
    images: ["/og-image.png"],
    creator: "@adhritverse",
    site: "@adhritverse",
  },
  alternates: {
    canonical: BASE_URL,
  },
  category: "technology",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

// LocalBusiness + Organization JSON-LD Schema
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${BASE_URL}/#localbusiness`,
      name: "AdhritVerse",
      alternateName: "AV Technologies",
      description:
        "AdhritVerse is Indore's premier AI-powered tech consultancy offering web development, mobile apps, cybersecurity, AI/ML solutions, and cloud DevOps services for startups and enterprises.",
      url: BASE_URL,
      logo: `${BASE_URL}/logo.png`,
      image: `${BASE_URL}/og-image.png`,
      telephone: "+91-8462802086",
      email: "contact@adhritverse.in",
      foundingDate: "2023",
      founders: [
        {
          "@type": "Person",
          name: "Hritik Jaiswal",
          jobTitle: "Founder & CEO",
          url: `${BASE_URL}/team`,
        },
        {
          "@type": "Person",
          name: "Rishabh Kushwah",
          jobTitle: "Co-Founder & CTO",
          url: `${BASE_URL}/team`,
        },
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Vijay Nagar",
        addressLocality: "Indore",
        addressRegion: "Madhya Pradesh",
        postalCode: "452010",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "22.7537",
        longitude: "75.8914",
      },
      areaServed: [
        { "@type": "City", name: "Indore" },
        { "@type": "State", name: "Madhya Pradesh" },
        { "@type": "Country", name: "India" },
      ],
      priceRange: "₹₹₹",
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "10:00",
        closes: "19:00",
      },
      sameAs: [
        "https://www.linkedin.com/company/adhritverse",
        "https://www.instagram.com/adhritverse",
        "https://twitter.com/adhritverse",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Tech & Digital Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Development Services in Indore" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mobile App Development Indore" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cybersecurity & Ethical Hacking Services" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI/ML Solutions for Startups" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cloud & DevOps Services India" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "UI/UX Design Services" } },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "AdhritVerse",
      description: "AI-Powered Tech Agency in Indore, India",
      publisher: { "@id": `${BASE_URL}/#localbusiness` },
      potentialAction: {
        "@type": "SearchAction",
        target: { "@type": "EntryPoint", urlTemplate: `${BASE_URL}/?q={search_term_string}` },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <meta name="geo.region" content="IN-MP" />
        <meta name="geo.placename" content="Indore, Madhya Pradesh, India" />
        <meta name="geo.position" content="22.7537;75.8914" />
        <meta name="ICBM" content="22.7537, 75.8914" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased text-slate-300 selection:bg-primary selection:text-white">
        {children}
      </body>
    </html>
  );
}
