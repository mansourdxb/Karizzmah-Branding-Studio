import { MapPin, Mail, Phone, Instagram } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { siteConfig } from "@/data/site";

export function TopBar() {
  return (
    <div className="hidden lg:block bg-[#0a0a0a] border-b border-white/10 text-white/80 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-11">
          <div className="flex items-center gap-6">
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(siteConfig.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
              <span className="truncate max-w-xs">{siteConfig.address}</span>
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-primary shrink-0" />
              {siteConfig.email}
            </a>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-primary shrink-0" />
              {siteConfig.phone}
            </a>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-5">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="TikTok"
              >
                <FaTiktok className="w-4 h-4" />
              </a>
            </div>
            <a
              href="/contact"
              className="ml-2 type-btn px-5 py-1.5 bg-primary text-black hover:opacity-90 transition-opacity"
            >
              Let's talk
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
