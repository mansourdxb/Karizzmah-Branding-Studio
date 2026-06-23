import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import aboutImage from "@assets/images/about-image.png";
import { aboutPage } from "@/data/site";

export function AboutPreview() {
  return (
    <section className="bg-[#111111] py-14 sm:py-16 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <p className="type-label mb-3">WHO WE ARE</p>
            <div className="h-0.5 w-12 bg-primary mb-4" />
            <h2 className="type-title text-white mb-4 sm:mb-6">
              {aboutPage.whoWeAreTitle}
            </h2>
            <div className="space-y-4 mb-8">
              {aboutPage.whoWeAreParagraphs.map((paragraph) => (
                <p key={paragraph} className="type-body text-white/70">
                  {paragraph}
                </p>
              ))}
            </div>
            <Link
              href="/about"
              className="type-btn gap-2 border-2 border-primary text-primary px-6 py-3 hover:bg-primary hover:text-black transition-colors"
            >
              MORE ABOUT US
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="order-1 lg:order-2 overflow-hidden bg-[#131313] p-4 sm:p-6 flex items-center justify-center"
          >
            <img
              src={aboutImage}
              alt="Karizzmah Advertising"
              className="w-full h-auto max-w-[320px] sm:max-w-[380px] object-contain transition-transform duration-700 hover:scale-[1.03]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
