import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import portfolioBranding from "@assets/images/portfolio-branding.png";
import portfolioWeb from "@assets/images/portfolio-web.png";
import portfolioDigital from "@assets/images/portfolio-digital.png";
import portfolioContent from "@assets/images/portfolio-content.png";

const projects = [
  {
    image: portfolioBranding,
    title: "Luxe Properties",
    category: "Brand Identity",
    description: "Complete brand transformation for a premium real estate company",
  },
  {
    image: portfolioWeb,
    title: "TechVenture Hub",
    category: "Web Design",
    description: "Modern website design for a leading tech accelerator",
  },
  {
    image: portfolioDigital,
    title: "FinServe Global",
    category: "Digital Marketing",
    description: "360-degree digital campaign for a financial services firm",
  },
  {
    image: portfolioContent,
    title: "Artisan Studios",
    category: "Content Creation",
    description: "Video production and photography for a creative studio",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider" data-testid="text-portfolio-label">
            Our Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6" data-testid="text-portfolio-heading">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto" data-testid="text-portfolio-description">
            Explore our latest work and see how we help brands achieve remarkable results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Card
                className="overflow-hidden bg-card border-border hover-elevate cursor-pointer group"
                data-testid={`card-portfolio-${index}`}
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500"
                    data-testid={`img-portfolio-${index}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent opacity-60 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <Badge variant="secondary" className="mb-3" data-testid={`badge-portfolio-category-${index}`}>
                    {project.category}
                  </Badge>
                  <h3 className="text-xl font-semibold mb-2 text-foreground" data-testid={`text-portfolio-title-${index}`}>
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground" data-testid={`text-portfolio-desc-${index}`}>
                    {project.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
