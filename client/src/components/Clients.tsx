import { motion } from "framer-motion";

const clients = [
  "Canon",
  "Movenpick",
  "Dubai Properties",
  "Al Naboodah",
  "Servier",
  "Tamleek",
  "Oro24",
  "Dubai Financial Market",
];

export function Clients() {
  return (
    <section id="clients" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider" data-testid="text-clients-label">
            Our Clients
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6" data-testid="text-clients-heading">
            Trusted By Leading Brands
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto" data-testid="text-clients-description">
            We have had the pleasure to work with global giants and help build
            smaller businesses from scratch. Every client becomes a long-term partner.
          </p>
        </motion.div>

        <div className="relative overflow-hidden py-8">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{
              duration: 30,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
            className="flex gap-12 items-center"
          >
            {[...clients, ...clients].map((client, index) => (
              <div
                key={`${client}-${index}`}
                className="flex-shrink-0 px-8 py-6 bg-card/50 border border-border rounded-lg min-w-[200px]"
                data-testid={`client-item-${index}`}
              >
                <span className="text-xl font-semibold text-muted-foreground whitespace-nowrap">
                  {client}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 p-6 bg-card border border-border rounded-lg" data-testid="card-client-stats">
            <div className="text-center sm:text-left" data-testid="stat-active-clients">
              <div className="text-4xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Active Clients</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-border" />
            <div className="text-center sm:text-left" data-testid="stat-projects-completed">
              <div className="text-4xl font-bold text-secondary">200+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-border" />
            <div className="text-center sm:text-left" data-testid="stat-satisfaction">
              <div className="text-4xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
