import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroSideImage from "@assets/images/about-image.png";
import { siteConfig } from "@/data/site";

export function HeroWelcome() {
  return (
    <>
      <section className="bg-white overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <p className="type-label mb-5">Welcome to</p>

              <h2 className="type-title text-[#1b1b1b] mb-5">
                {siteConfig.name}
                <br />
                Advertising &amp; Trading
              </h2>

              <h1 className="type-description font-semibold text-[#1b1b1b] mb-6">
                {siteConfig.tagline}
              </h1>

              <p className="type-body text-[#666666] mb-8 max-w-xl">
                Karizzmah is a Dubai-based general trading company specializing in
                advertising, printing, outdoor media, corporate gifting, and custom
                fabrication solutions. We combine creative expertise with advanced
                production and sourcing capabilities to deliver integrated branding
                and promotional services.
              </p>

              <Link
                href="/services"
                className="type-btn gap-3 bg-primary text-black px-8 py-3.5 hover:brightness-110 transition-all shadow-sm"
              >
                Our Services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="order-1 lg:order-2 relative flex justify-center lg:justify-end"
            >
              <div className="absolute top-1/2 left-1/2 lg:left-[55%] -translate-x-1/2 -translate-y-1/2 w-[85%] max-w-md aspect-square bg-primary/10 rounded-full blur-3xl" />
              <div className="relative w-full max-w-[520px]">
                <img
                  src={heroSideImage}
                  alt="Advertising and Digital Marketing Company"
                  className="w-full h-auto object-cover rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.12)]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f7] border-y border-[#ececec] py-7 lg:py-8">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="type-body text-[#666666]">
            As the Best Advertising and Digital Marketing Company in Dubai, the
            success of Karizzmah is intertwined with the achievements of our clients.
          </p>
        </div>
      </section>
    </>
  );
}
