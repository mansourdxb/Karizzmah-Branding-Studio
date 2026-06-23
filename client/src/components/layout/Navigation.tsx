import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoImage from "@assets/images/navbar-logo.png";
import { navLinks, siteConfig } from "@/data/site";
import { services } from "@/data/services";
import { ServiceLink } from "@/components/common/ServiceLink";

export function Navigation() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
    setIsMobileServicesOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const isActive = (href: string) => {
    if (href === "/") return location === "/";
    return location.startsWith(href);
  };

  const linkClass = (href: string) =>
    `px-3 py-2 text-base font-bold transition-colors ${
      isActive(href)
        ? "text-primary"
        : "text-white/80 hover:text-primary"
    }`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 bg-[#242424] ${
          isScrolled ? "shadow-lg shadow-black/30" : ""
        }`}
      >
        <div className="w-full px-3 sm:px-5 lg:pl-4 lg:pr-14 xl:pl-6 xl:pr-20">
          <div className="flex items-end h-20 pb-2 lg:pb-2.5">
            <Link href="/" className="flex items-end shrink-0 ml-3 lg:ml-8 translate-y-1 lg:translate-y-1.5">
              <img src={logoImage} alt={siteConfig.name} className="h-12 sm:h-14 lg:h-[4.75rem] w-auto object-contain" />
            </Link>

            <div className="hidden lg:flex items-center gap-3 ml-auto lg:mr-16 xl:mr-24">
              <nav className="flex items-center gap-1 lg:mr-6">
              {navLinks.map((link) =>
                link.label === "Services" ? (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <Link href={link.href} className={`flex items-center gap-1 ${linkClass(link.href)}`}>
                      {link.label}
                      <ChevronDown className="w-4 h-4" />
                    </Link>

                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 w-72 bg-[#2d2d2d] shadow-xl border border-white/10 rounded-md py-2 z-50"
                        >
                          {services.map((service) => (
                            <ServiceLink
                              key={service.id}
                              serviceId={service.id}
                              className="block px-4 py-2.5 text-sm text-white/80 hover:text-primary hover:bg-white/5 transition-colors"
                            >
                              {service.title}
                            </ServiceLink>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link key={link.href} href={link.href} className={linkClass(link.href)}>
                    {link.label}
                  </Link>
                ),
              )}
              </nav>
            </div>

            <button
              type="button"
              className="lg:hidden min-w-11 min-h-11 flex items-center justify-center text-white ml-auto self-center mb-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#242424] pt-24 px-6 pb-8 lg:hidden overflow-y-auto overscroll-contain"
          >
            <nav className="flex flex-col gap-2">              {navLinks.map((link) =>
                link.label === "Services" ? (
                  <div key={link.href}>
                    <div className="flex items-center border-b border-white/10">
                      <Link
                        href={link.href}
                        className={`flex-1 text-base font-bold py-3 ${
                          isActive(link.href) ? "text-primary" : "text-white"
                        }`}
                      >
                        {link.label}
                      </Link>
                      <button
                        type="button"
                        onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                        aria-label="Toggle services submenu"
                        aria-expanded={isMobileServicesOpen}
                        className="min-w-11 min-h-11 flex items-center justify-center text-white shrink-0"
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isMobileServicesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </div>
                    <AnimatePresence initial={false}>
                      {isMobileServicesOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden border-b border-white/10"
                        >
                          <div className="flex flex-col pl-4 py-2 gap-1">
                            {services.map((service) => (
                              <ServiceLink
                                key={service.id}
                                serviceId={service.id}
                                className="text-sm text-white/70 hover:text-primary py-3 transition-colors"
                              >
                                {service.title}
                              </ServiceLink>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-base font-bold py-3 border-b border-white/10 ${
                      isActive(link.href) ? "text-primary" : "text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                ),
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
