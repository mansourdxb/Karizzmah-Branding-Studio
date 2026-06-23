import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroSkyline from "@assets/images/hero-skyline-night.png";
import heroBrandCenter from "@assets/images/hero-brand-center.png";
import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <>
      <section className="relative overflow-hidden bg-black lg:min-h-[calc(100vh-5rem)]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroSkyline})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/15 pointer-events-none" />

        <div className="relative z-10 lg:min-h-[calc(100vh-5rem)] flex flex-col lg:flex-row lg:items-stretch">
          {/* Logo — left of card on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center px-4 pt-8 pb-4 sm:pt-10 sm:pb-6 lg:flex-1 lg:justify-start lg:items-center lg:pl-2 xl:pl-4 lg:pr-2 lg:py-0 pointer-events-none"
          >
            <img
              src={heroBrandCenter}
              alt={`${siteConfig.name} - ${siteConfig.subTagline} - ${siteConfig.slogan}`}
              className="w-full max-w-[300px] sm:max-w-[440px] md:max-w-[500px] lg:max-w-[min(54vw,680px)] xl:max-w-[740px] h-auto object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.55)]"
            />
          </motion.div>

          {/* Welcome card — smaller, right edge */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative z-20 w-[calc(100%-2rem)] mx-auto sm:w-[calc(100%-3rem)] lg:mx-0 lg:w-[64%] xl:w-[66%] lg:max-w-none lg:shrink-0 lg:-mt-px lg:-mr-px lg:mb-12"
          >
            <div className="relative overflow-hidden rounded-sm bg-black/25 backdrop-blur-xl backdrop-saturate-150 border border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] pt-10 pb-8 px-5 sm:pt-20 sm:pb-14 sm:pl-12 sm:pr-11 lg:pt-28 lg:pb-12 lg:pl-16 lg:pr-14">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-black/20" />
              <div className="relative z-10">
              <p className="type-label mb-4 sm:mb-6">Welcome to</p>

              <h2 className="type-title text-white mb-4 sm:mb-6">
                {siteConfig.name}
                <br />
                Advertising &amp; Trading
              </h2>

              <h1 className="text-sm sm:text-base md:text-lg font-semibold text-primary mb-5 sm:mb-7">
                {siteConfig.tagline}
              </h1>

              {siteConfig.heroParagraphs.map((paragraph) => (
                <p key={paragraph} className="type-body text-white/75 mb-4 last:mb-6 sm:last:mb-8">
                  {paragraph}
                </p>
              ))}

              <Link
                href="/services"
                className="type-btn gap-3 bg-primary text-black px-6 sm:px-9 py-3.5 sm:py-4 hover:brightness-110 transition-all shadow-md w-full sm:w-auto"
              >
                Our Services
                <ArrowRight className="w-4 h-4" />
              </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#393A3B] py-7 lg:py-8">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="type-body text-white/85">
            As the Best Advertising and Digital Marketing Company in Dubai, the
            success of Karizzmah is intertwined with the achievements of our clients.
          </p>
        </div>
      </section>
    </>
  );
}
