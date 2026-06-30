import { motion } from "framer-motion";
import { SectionHeader } from "@/components/common/SectionHeader";
import projectImage from "@assets/images/project-trophies-acrylic.png";
import { siteConfig } from "@/data/site";

export function TrophiesAcrylic() {
  const { trophiesAcrylic } = siteConfig;

  return (
    <section className="py-14 sm:py-20 lg:py-28 bg-[#111111]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Our Projects"
          title={trophiesAcrylic.title}
          description={trophiesAcrylic.brief}
          dark
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto overflow-hidden border border-white/10 bg-[#151515] shadow-[0_12px_40px_rgba(0,0,0,0.35)]"
        >
          <div className="aspect-[4/3] sm:aspect-[16/10] overflow-hidden">
            <img
              src={projectImage}
              alt={trophiesAcrylic.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="px-5 sm:px-6 py-4 sm:py-5 border-t border-white/10">
            <span className="inline-block px-3 py-1 bg-primary text-black text-xs font-semibold uppercase tracking-wider">
              {trophiesAcrylic.category}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
