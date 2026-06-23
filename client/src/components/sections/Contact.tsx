import { Mail, Phone, MapPin, Globe } from "lucide-react";
import { motion } from "framer-motion";
import contactImage from "@assets/images/contact-section.png";
import contactLogo from "@assets/images/contact-logo.png";
import { siteConfig } from "@/data/site";

const contactItems = [
  {
    icon: Phone,
    label: "Phone",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phoneRaw}`,
  },
  {
    icon: MapPin,
    label: "Address",
    value: siteConfig.address,
    href: `https://maps.google.com/?q=${encodeURIComponent(siteConfig.address)}`,
  },
  {
    icon: Globe,
    label: "Website",
    value: siteConfig.website,
    href: `https://${siteConfig.website}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
];

export function Contact() {
  return (
    <section className="relative bg-[#131313] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-primary mb-6 sm:mb-10">Contact us:</h2>

            <div className="space-y-6">
              {contactItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.label === "Address" ? "_blank" : undefined}
                  rel={item.label === "Address" ? "noopener noreferrer" : undefined}
                  className="flex items-start gap-4 group py-2 -my-2"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/30 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-1">
                      {item.label}
                    </div>
                    <div className="type-body text-white/80 whitespace-pre-line break-words">
                      {item.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative overflow-hidden min-h-[280px] sm:min-h-[320px] lg:min-h-[380px]"
          >
            <img
              src={contactImage}
              alt=""
              aria-hidden
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="relative z-10 flex items-center justify-center h-full min-h-[280px] sm:min-h-[320px] lg:min-h-[380px] p-8 sm:p-10">
              <img
                src={contactLogo}
                alt={siteConfig.name}
                className="w-full max-w-[220px] sm:max-w-[260px] lg:max-w-[300px] h-auto object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
