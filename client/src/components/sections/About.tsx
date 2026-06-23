import { Link } from "wouter";
import { motion } from "framer-motion";
import { Eye, Trophy } from "lucide-react";
import aboutImage from "@assets/images/about-image.png";
import aboutBanner from "@assets/images/about-banner.png";
import { aboutPage } from "@/data/site";

function ValueRow({
  icon: Icon,
  title,
  text,
  delay = 0,
}: {
  icon: typeof Eye;
  title: string;
  text: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex gap-5 sm:gap-8 py-8 sm:py-10 border-b border-black/20 last:border-b-0"
    >
      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#4a4a3a] flex items-center justify-center shrink-0">
        <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" strokeWidth={1.75} />
      </div>
      <div className="min-w-0">
        <h3 className="text-lg sm:text-xl font-bold text-black mb-3">{title}</h3>
        <p className="type-body text-black/90">{text}</p>
      </div>
    </motion.div>
  );
}

export function AboutWhoWeAre() {
  return (
    <section className="py-14 sm:py-16 lg:py-24 bg-[#131313]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="type-label mb-4">{aboutPage.whoWeAreLabel}</p>
            <h2 className="type-title text-white mb-4 sm:mb-6">{aboutPage.whoWeAreTitle}</h2>
            <div className="space-y-4 mb-8">
              {aboutPage.whoWeAreParagraphs.map((paragraph) => (
                <p key={paragraph} className="type-body text-white/75">
                  {paragraph}
                </p>
              ))}
            </div>
            <Link
              href="/contact"
              className="type-btn bg-primary text-black px-8 py-3.5 hover:brightness-110 transition-all"
            >
              Get a Quote
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-[#131313] p-4 sm:p-6 flex items-center justify-center"
          >
            <img
              src={aboutImage}
              alt="Karizzmah Advertising"
              className="w-full h-auto max-w-[320px] sm:max-w-[380px] object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function AboutOurValue() {
  return (
    <section className="relative py-14 sm:py-16 lg:py-24 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${aboutBanner})` }}
      />
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-xl lg:max-w-[42%] bg-primary p-6 sm:p-8 lg:p-12"
        >
          <p className="type-label text-black mb-4">{aboutPage.ourValueLabel}</p>
          <hr className="border-black/25 mb-2" />

          <ValueRow
            icon={Eye}
            title={aboutPage.vision.title}
            text={aboutPage.vision.text}
          />
          <ValueRow
            icon={Trophy}
            title={aboutPage.mission.title}
            text={aboutPage.mission.text}
            delay={0.1}
          />
        </motion.div>
      </div>
    </section>
  );
}
