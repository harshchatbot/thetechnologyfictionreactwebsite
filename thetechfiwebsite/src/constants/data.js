import { Map, BookOpen, Users, Terminal, Code, Cpu } from 'lucide-react';

export const SITE_CONFIG = {
  company: {
    name: "The Technology Fiction", // BRAND PIVOT
    initials: "TTF",
    email: "hello@thetechnologyfiction.com", // Professional Email
    location: "Jaipur, India",
    // Ensure this image is in your /public folder
    logo: "/tech_fi_logo_512x512_image.jpeg" 
  },
  navigation: {
    menuItems: ['home', 'roadmaps', 'resources', 'mentorship'],
    ctaButton: {
      text: "Join Inner Circle",
      action: () => window.location.href = "#newsletter"
    }
  }
};

// REPLACED "SERVICES" WITH "GUIDES"
export const FEATURED_GUIDES = [
  {
    icon: Terminal,
    category: "Architecture",
    title: "Salesforce Trigger Frameworks",
    description: "Stop writing spaghetti code. Learn the handler pattern used in enterprise orgs.",
    link: "/blog/trigger-frameworks"
  },
  {
    icon: Code,
    category: "LWC Development",
    title: "Mastering Shadow DOM",
    description: "Why your styles aren't working and how to communicate between components effectively.",
    link: "/blog/lwc-shadow-dom"
  },
  {
    icon: Cpu,
    category: "AI & Data",
    title: "Building AI Agents for Salesforce",
    description: "How to integrate OpenAI with Apex using named credentials and zero middleware.",
    link: "/blog/ai-salesforce"
  }
];

// REPLACED "AGENCY STATS" WITH "AUTHORITY STATS"
export const AUTHORITY_STATS = [
  { number: "11+", label: "Years Experience" },
  { number: "3x", label: "Salesforce Certified" },
  { number: "20+", label: "Developers Mentored" },
  { number: "50+", label: "Technical Articles" }
];

export const CONTACT_INFO = {
  email: SITE_CONFIG.company.email,
  location: SITE_CONFIG.company.location
};

// SIMPLIFIED FOOTER (No Services)
export const FOOTER_DATA = {
  explore: [
    { name: "Latest Deep Dives", href: "#" },
    { name: "Architect Roadmaps", href: "#" },
    { name: "Mentorship Program", href: "/salesforce-coaching-ajmer" }, // The SEO Link
    { name: "Privacy Policy", href: "/privacy" }
  ],
  socialLinks: [
    { name: "LinkedIn", icon: "linkedin", href: "https://www.linkedin.com/company/the-technology-fiction/" },
    { name: "Twitter", icon: "twitter", href: "#" }
  ]
};