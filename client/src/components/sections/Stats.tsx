import { motion } from "framer-motion";
import { Counter } from "@/components/common/Counter";
import { stats, siteConfig } from "@/data/site";

export function Stats() {
  return (
    <section className="py-16 lg:py-20 bg-black border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-0">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`px-2 sm:px-4 lg:px-8 ${
                index < stats.length - 1 ? "lg:border-r lg:border-white/10" : ""
              }`}
            >
              <Counter
                value={stat.value}
                suffix={stat.suffix}
                decimals={stat.decimals}
                label={stat.label}
                delay={index * 0.1}
              />
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mt-12 sm:mt-16 lg:mt-20 space-y-4 text-center"
        >
          {siteConfig.statsIntro.map((paragraph) => (
            <p key={paragraph} className="type-body text-white/75">
              {paragraph}
            </p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
