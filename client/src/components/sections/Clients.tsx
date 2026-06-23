import { motion } from "framer-motion";
import { SectionHeader } from "@/components/common/SectionHeader";
import clientsGrid from "@assets/images/clients-grid.png";

export function Clients() {
  return (
    <section className="py-14 sm:py-20 lg:py-28 bg-[#131313]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Our Clients"
          title="Trusted By Leading Brands"
          description="We have had the pleasure to work with global giants and help build smaller businesses from scratch. Every client becomes a long-term partner."
          dark
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 lg:mt-12 overflow-hidden max-w-full"
        >
          <img
            src={clientsGrid}
            alt="Our Clients - Emirates, Amazon, Pepsi, talabat and more"
            width={2048}
            height={942}
            className="w-full h-auto max-w-full"
            loading="lazy"
            decoding="async"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
        </motion.div>
      </div>
    </section>
  );
}
