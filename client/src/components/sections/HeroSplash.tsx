import { motion } from "framer-motion";
import heroSkyline from "@assets/images/hero-skyline.png";
import heroBrandCenter from "@assets/images/hero-brand-center.png";
import { siteConfig } from "@/data/site";

export function HeroSplash() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroSkyline})` }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 w-full min-h-screen pb-[12vh] sm:pb-[14vh]"
      >
        <img
          src={heroBrandCenter}
          alt={`${siteConfig.name} - ${siteConfig.subTagline} - ${siteConfig.slogan}`}
          className="w-full max-w-[520px] sm:max-w-[620px] md:max-w-[720px] lg:max-w-[820px] h-auto object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
        />
      </motion.div>
    </section>
  );
}
