import { Link, useLocation } from "wouter";
import {
  Instagram,
  MapPin,
  Mail,
  Phone,
  Globe,
} from "lucide-react";
import footerLogo from "@assets/images/footer-logo.png";
import { siteConfig, navLinks } from "@/data/site";
import { services } from "@/data/services";
import { ServiceLink } from "@/components/common/ServiceLink";
import { FaTiktok } from "react-icons/fa";

function FooterLinkIcon() {
  return (
    <span className="inline-flex items-center justify-center w-4 h-4 bg-primary shrink-0 mt-1">
      <span className="w-0 h-0 border-y-[4px] border-y-transparent border-l-[6px] border-l-black ml-0.5" />
    </span>
  );
}

export function Footer() {
  const [location] = useLocation();
  const isContactPage = location === "/contact";

  return (
    <footer className="bg-[#151515] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div>
            <Link href="/" className="inline-block mb-6">
              <img
                src={footerLogo}
                alt={siteConfig.name}
                className="h-20 sm:h-24 w-auto max-w-[220px] object-contain"
              />
            </Link>
            <p className="text-white/80 text-sm leading-relaxed">
              {siteConfig.fullName} is the best Advertising and Digital Marketing Company in
              Dubai, UAE. We offer a broad range of advertising and marketing solutions that
              are specifically suited for various sectors. We excel in Branding, Creative
              Designing, Video Production, and Digital Marketing — your trusted signage and
              advertising partner in Dubai, UAE.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-5">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <ServiceLink
                    serviceId={service.id}
                    className="flex items-start gap-3 text-sm text-white/75 hover:text-primary transition-colors py-1"
                  >
                    <FooterLinkIcon />
                    <span>{service.title}</span>
                  </ServiceLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-5">Company</h4>
            <ul className="space-y-3">
              {navLinks.filter((l) => l.label !== "Home").map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-start gap-3 text-sm text-white/75 hover:text-primary transition-colors py-1"
                  >
                    <FooterLinkIcon />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-5">Address</h4>
            <ul className="space-y-4 text-sm text-white/75">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span className="break-words">{siteConfig.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-primary transition-colors break-words">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <a href={`tel:${siteConfig.phoneRaw}`} className="hover:text-primary transition-colors">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Globe className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <a
                  href={`https://${siteConfig.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors break-words"
                >
                  {siteConfig.website}
                </a>
              </li>
            </ul>

            <div className="flex items-center gap-5 mt-8">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-[#2a2a2a] flex items-center justify-center hover:bg-primary hover:text-black transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-[#2a2a2a] flex items-center justify-center hover:bg-primary hover:text-black transition-colors"
                aria-label="TikTok"
              >
                <FaTiktok className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-primary/30 text-center">
          <p className="text-sm text-white/60">
            Copyright © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>

      {isContactPage && (
        <div className="border-t border-white/5 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <p className="text-xs sm:text-sm text-white/30 leading-relaxed">
              <a
                href={siteConfig.developerCredit.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#4A7FD4]/60 hover:text-[#4A7FD4]/90 hover:underline transition-colors"
              >
                {siteConfig.developerCredit.name}
              </a>
              {" "}
              © {new Date().getFullYear()}{" "}
              {siteConfig.developerCredit.label}
            </p>
          </div>
        </div>
      )}
    </footer>
  );
}
