import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ServiceLink } from "@/components/common/ServiceLink";
import { services, servicesPageIntro } from "@/data/services";

export function Services() {
  return (
    <section className="py-14 sm:py-20 lg:py-28 bg-[#151515]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Our Services"
          description={servicesPageIntro}
          dark
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group flex h-full flex-col border border-white/15 bg-[#111111] hover:border-primary/40 hover:shadow-[0_12px_40px_rgba(201,162,39,0.12)] transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-44 sm:h-48 shrink-0 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-4 w-10 h-10 bg-primary/90 flex items-center justify-center">
                  <span className="text-black font-bold text-sm">{service.number}</span>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <h3 className="text-base sm:text-lg font-bold text-white mb-3 leading-snug">{service.title}</h3>
                <p className="type-body text-white/75 mb-6 flex-1">
                  {service.description}
                </p>

                <ServiceLink
                  serviceId={service.id}
                  className="type-btn gap-2 border border-primary text-primary px-5 py-3 hover:bg-primary hover:text-black transition-all duration-300 self-start mt-auto"
                >
                  LEARN MORE
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </ServiceLink>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
