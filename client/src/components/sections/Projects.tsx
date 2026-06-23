import { motion } from "framer-motion";
import { SectionHeader } from "@/components/common/SectionHeader";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section className="py-14 sm:py-20 lg:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Our Projects"
          title="Featured Work & Case Studies"
          description="Explore our portfolio of branding, signage, corporate gifts, and exhibition projects delivered for leading organizations across the UAE."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white border border-border overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-wider mb-2">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-1">
                  For: {project.client}
                </p>
                <h3 className="text-lg font-bold text-foreground">{project.title}</h3>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
