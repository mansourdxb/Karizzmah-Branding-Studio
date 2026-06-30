import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import storeLogo from "@assets/images/about-image.png";
import { siteConfig } from "@/data/site";

export function Stats() {
  const { storeSection } = siteConfig;

  return (
    <section className="py-16 lg:py-20 bg-black border-y border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex justify-center mb-6">
            <span className="flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#131313] border-2 border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.35)] overflow-hidden">
              <img
                src={storeLogo}
                alt=""
                className="w-[135%] max-w-none object-cover object-[center_10%] -mt-0.5"
              />
            </span>
          </div>

          <p className="type-label text-primary mb-3">{storeSection.label}</p>
          <div className="h-0.5 w-12 bg-primary mx-auto mb-5" />

          <h2 className="type-title text-white mb-6 sm:mb-8">{storeSection.title}</h2>

          <div className="space-y-4 mb-8 sm:mb-10">
            {storeSection.paragraphs.map((paragraph) => (
              <p key={paragraph} className="type-body text-white/75">
                {paragraph}
              </p>
            ))}
          </div>

          <a
            href={siteConfig.storeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="type-btn inline-flex items-center gap-2 border-2 border-primary text-primary px-6 py-3 hover:bg-primary hover:text-black transition-colors"
          >
            {storeSection.ctaLabel}
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
