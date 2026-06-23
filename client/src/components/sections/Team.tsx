import { motion } from "framer-motion";
import { SectionHeader } from "@/components/common/SectionHeader";
import teamImage from "@assets/images/team.png";

export function Team() {
  return (
    <section className="py-14 sm:py-20 lg:py-28 bg-[#131313]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Our Team"
          title="Meet the Experts Behind Karizzmah"
          description="Our multidisciplinary team brings together strategy, design, and production expertise to deliver exceptional results for every client."
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
            src={teamImage}
            alt="Karizzmah Team - Karim Fahmy, Mustafa Mohamed, Eng. Michel, Omar Bhaa, Salma Khalil"
            className="w-full h-auto max-w-full"
            loading="lazy"
            decoding="async"
          />
        </motion.div>
      </div>
    </section>
  );
}
