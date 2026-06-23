import projectGlenmore from "@assets/images/project-glenmore.png";
import projectCorporate from "@assets/images/project-corporate-identity.png";
import projectAdnoc from "@assets/images/project-adnoc.png";
import projectRak from "@assets/images/project-rak-prosecution.png";
import projectDubaiPoliceGifts from "@assets/images/project-dubai-police-gifts.png";
import projectWeb from "@assets/images/portfolio-web.png";
import projectDigital from "@assets/images/portfolio-digital.png";
import portfolioBranding from "@assets/images/portfolio-branding.png";
import billboardImage from "@assets/images/billboard.png";
import portfolioContent from "@assets/images/portfolio-content.png";

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  features: string[];
  image: string;
}

export function getServiceHref(serviceId: string) {
  return `/services#${serviceId}`;
}

export const services: ServiceItem[] = [
  {
    id: "outdoor-signage",
    number: "01",
    title: "Outdoor Signage & Digital Advertising",
    description:
      "High-impact outdoor and digital advertising solutions that maximize brand visibility across the UAE.",
    features: [
      "LED Screens & Digital Signage",
      "3D Signage & Illuminated Letters",
      "Billboards & Outdoor Advertising",
      "Wayfinding & Directional Signage",
      "Building Wraps & Large-Format Displays",
    ],
    image: billboardImage,
  },
  {
    id: "branding",
    number: "02",
    title: "Branding & Creative Design",
    description:
      "We craft compelling branding and creative design concepts that resonate with your target market, fostering brand loyalty and recognition.",
    features: [
      "Brand Identity Development",
      "Logo Design & Brand Guidelines",
      "Marketing Collateral Design",
      "Wall Graphics & Murals",
      "Vehicle Branding & Fleet Graphics",
      "Roll-Ups, Backdrops & Promotional Displays",
    ],
    image: projectGlenmore,
  },
  {
    id: "digital-marketing",
    number: "03",
    title: "Digital Marketing",
    description:
      "Our digital marketing expertise combines SEO, social media, and pay-per-click strategies to boost your online presence and drive measurable results.",
    features: [
      "Social Media Management",
      "Content Creation & Campaign Planning",
      "Paid Advertising (Google & Social Media Ads)",
      "Search Engine Optimization (SEO)",
      "Email Marketing",
      "Performance Analytics & Reporting",
    ],
    image: projectDigital,
  },
  {
    id: "web-development",
    number: "04",
    title: "Website Design & Development",
    description:
      "From responsive websites to feature-rich digital experiences, our development team creates user-friendly solutions tailored to your unique needs.",
    features: [
      "Corporate Websites",
      "Landing Pages",
      "E-Commerce Solutions",
      "Website Maintenance & Support",
      "UI/UX Design",
      "Website Content & Optimization",
    ],
    image: projectWeb,
  },
  {
    id: "media-production",
    number: "05",
    title: "Media Production",
    description:
      "Elevate your brand with our media production services, encompassing video, photography, and content strategies that reach the right audience.",
    features: [
      "Corporate Photography",
      "Commercial Videography",
      "Promotional Videos",
      "Product Photography",
      "Motion Graphics & Animation",
      "Content Production for Digital Platforms",
    ],
    image: portfolioContent,
  },
  {
    id: "corporate-gifts",
    number: "06",
    title: "Corporate Gifts & Promotional Items",
    description:
      "Premium branded corporate gifts and promotional merchandise that leave a lasting impression on your clients and partners.",
    features: [
      "Branded Corporate Gifts",
      "Promotional Merchandise",
      "Custom Packaging & Gift Sets",
      "Corporate Giveaways",
      "Event & Conference Gifts",
    ],
    image: projectDubaiPoliceGifts,
  },
  {
    id: "exhibitions",
    number: "07",
    title: "Exhibitions & Events",
    description:
      "End-to-end exhibition stand design, event branding, and production services that create memorable brand experiences.",
    features: [
      "Exhibition Stand Design & Build",
      "Event Branding & Signage",
      "Custom Display Structures",
      "Event Production & Installation",
      "Promotional Event Materials",
    ],
    image: portfolioBranding,
  },
  {
    id: "printing",
    number: "08",
    title: "Printing & Production",
    description:
      "We offer top-notch printing services and production solutions that leave a lasting impression, from business cards to large-scale banners.",
    features: [
      "Large-Format Printing",
      "Commercial Printing",
      "Marketing Materials & Stationery",
      "UV & High-Resolution Printing",
      "Custom Print Solutions",
    ],
    image: projectCorporate,
  },
  {
    id: "fabrication",
    number: "09",
    title: "Custom Fabrication",
    description:
      "Precision custom fabrication for signage structures, retail displays, and bespoke branding elements built to last.",
    features: [
      "Steel & Metal Fabrication",
      "Custom Sign Structures",
      "Retail Display Solutions",
      "Exhibition Structures",
      "Bespoke Branding Elements",
    ],
    image: projectRak,
  },
  {
    id: "trading",
    number: "10",
    title: "Trading & Sourcing Solutions",
    description:
      "Integrated sourcing, procurement, and supply chain support for promotional products and custom manufacturing coordination.",
    features: [
      "Product Sourcing & Procurement",
      "Promotional Product Supply",
      "Custom Manufacturing Coordination",
      "Supply Chain & Logistics Support",
    ],
    image: projectAdnoc,
  },
];

export const servicesPageIntro =
  "At Karizzmah, we provide end-to-end advertising, branding, marketing, and production solutions that help businesses build strong brand presence, engage audiences, and achieve measurable growth.";

export const footerServices = [
  "Outdoor Signage & Digital Advertising",
  "Branding & Creative Design",
  "Digital Marketing",
  "Website Design & Development",
  "Media Production",
  "Corporate Gifts & Promotional Items",
  "Exhibitions & Events",
  "Printing & Production",
  "Custom Fabrication",
  "Trading & Sourcing Solutions",
];
