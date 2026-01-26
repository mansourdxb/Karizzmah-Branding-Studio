import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Palette, Globe, TrendingUp, Video, Megaphone, PenTool } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Brand Identity",
    description:
      "We create distinctive brand identities that capture your essence and resonate with your target audience. From logos to complete visual systems.",
    color: "text-primary",
  },
  {
    icon: Globe,
    title: "Web Design & Development",
    description:
      "Stunning, responsive websites built for performance. We combine beautiful design with seamless functionality to deliver exceptional user experiences.",
    color: "text-secondary",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description:
      "Strategic digital campaigns that drive results. SEO, social media, PPC, and content marketing to grow your online presence.",
    color: "text-primary",
  },
  {
    icon: Video,
    title: "Content Creation",
    description:
      "Compelling visual content that tells your story. Video production, photography, animations, and graphics that captivate audiences.",
    color: "text-secondary",
  },
  {
    icon: Megaphone,
    title: "Advertising Campaigns",
    description:
      "Creative advertising solutions across all platforms. We craft campaigns that break through the noise and deliver measurable impact.",
    color: "text-primary",
  },
  {
    icon: PenTool,
    title: "Graphic Design",
    description:
      "Professional design services for print and digital. Brochures, packaging, social media graphics, and everything in between.",
    color: "text-secondary",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider" data-testid="text-services-label">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6" data-testid="text-services-heading">
            Comprehensive Creative Solutions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto" data-testid="text-services-description">
            From brand strategy to digital execution, we offer end-to-end creative
            services that transform your vision into reality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className="p-8 h-full bg-card border-border hover-elevate cursor-pointer group"
                data-testid={`card-service-${index}`}
              >
                <div
                  className={`w-14 h-14 rounded-lg bg-card border border-border flex items-center justify-center mb-6 transition-transform duration-300 ${service.color}`}
                >
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground" data-testid={`text-service-title-${index}`}>
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed" data-testid={`text-service-description-${index}`}>
                  {service.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
