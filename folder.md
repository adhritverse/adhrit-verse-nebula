# Folder Overview - AV Technologies

This document provides a breakdown of the project structure for the AV Technologies website, a Cybersecurity and Digital Transformation platform.

## 📂 Project Structure

```text
adhrit-verse/
├── public/                 # Static assets (images, icons, svgs)
│   ├── projectimg/         # Screenshots or images for projects
│   ├── logo.png           # Company logo
│   └── *.svg              # Icons and Next.js/Vercel logos
├── src/
│   ├── app/                # Next.js App Router directory
│   │   ├── api/            # API routes (e.g., contact form submissions)
│   │   ├── contact/        # Contact page route
│   │   ├── projects/       # Projects showcase page route
│   │   ├── services/       # Services rendered page route
│   │   ├── team/           # Team overview page route
│   │   ├── favicon.ico     # Browser icon
│   │   ├── globals.css     # Global styling and Tailwind directives
│   │   ├── layout.tsx      # Root layout component
│   │   └── page.tsx        # Homepage
│   └── components/         # Reusable UI components
│       ├── BlobBackground.tsx # Decorative background effect
│       ├── CanvasHero.tsx     # Interactive hero section for the landing page
│       ├── Footer.tsx         # Site-wide footer
│       ├── Navbar.tsx         # Navigation header
│       └── TeamComponents.tsx # Elements for the Team page
├── .env                    # Environment variables (private)
├── .gitignore              # Files to exclude from Git
├── README.md               # Main project documentation
├── adhritverse_SDLC.txt    # Project development lifecycle notes
├── next.config.ts          # Next.js configuration
├── package.json            # Project dependencies and scripts
├── postcss.config.mjs      # PostCSS configuration
├── tsconfig.json           # TypeScript configuration
└── tailwind.config.ts      # Tailwind CSS configuration (if applicable)
```

## 🛠️ Key Directories Detail

### `src/app`
Contains the core routing and page logic using the Next.js App Router. Each subdirectory corresponds to a URL path (e.g., `/contact`, `/projects`).

### `src/components`
Houses modular React components used across multiple pages to maintain consistency and reusability.

### `public`
The destination for all static files that need to be served directly, such as branding assets and project-related imagery.

### `adhritverse_SDLC.txt` & `adhritverse_website_analysis.txt`
Supplemental documentation containing analysis and development lifecycle information specifically for this project.
