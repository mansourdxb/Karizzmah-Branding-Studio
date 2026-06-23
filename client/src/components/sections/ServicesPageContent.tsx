import { Link } from "wouter";
import { motion } from "framer-motion";
import { services } from "@/data/services";

function ServiceBlock({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const imageOnRight = index % 2 === 1;

  const imageBlock = (
    <motion.div
      initial={{ opacity: 0, x: imageOnRight ? 24 : -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`relative min-h-[280px] lg:min-h-full ${imageOnRight ? "lg:order-2" : "lg:order-1"}`}
    >
      <img
        src={service.image}
        alt={service.title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute bottom-4 right-4 bg-black/75 px-3 py-1.5">
        <span className="text-white text-sm font-medium">
          {service.number}. {service.title}
        </span>
      </div>
    </motion.div>
  );

  const textBlock = (
    <motion.div
      initial={{ opacity: 0, x: imageOnRight ? -24 : 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className={`flex flex-col justify-center px-5 sm:px-10 lg:px-14 xl:px-16 py-8 sm:py-12 lg:py-16 ${imageOnRight ? "lg:order-1" : "lg:order-2"}`}
    >
      <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[1.75rem] font-bold text-white mb-4 sm:mb-5 leading-snug">
        {service.number}. {service.title}
      </h3>
      <ul className="space-y-2.5 mb-8">
        {service.features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-3 type-body text-white/80"
          >
            <span className="text-primary font-bold mt-0.5 shrink-0">•</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Link
        href="/contact"
        className="type-btn self-start bg-primary text-black px-8 py-3.5 hover:brightness-110 transition-all"
      >
        Get A Free Quote
      </Link>
    </motion.div>
  );

  return (
    <section
      id={service.id}
      className={`scroll-mt-24 ${index % 2 === 0 ? "bg-black" : "bg-[#292929]"}`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:min-h-[420px]">
        {imageBlock}
        {textBlock}
      </div>
    </section>
  );
}

export function ServicesPageContent() {
  return (
    <>
      {services.map((service, index) => (
        <ServiceBlock key={service.id} service={service} index={index} />
      ))}
    </>
  );
}
