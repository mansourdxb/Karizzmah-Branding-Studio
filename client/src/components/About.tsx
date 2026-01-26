import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";

const highlights = [
  "Award-winning creative team with 10+ years of experience",
  "Deep understanding of the UAE and MENA markets",
  "End-to-end solutions from strategy to execution",
  "Dedicated account management for every client",
  "Proven track record with global and regional brands",
  "Agile methodology for faster time-to-market",
];

export function About() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-wider" data-testid="text-about-label">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6" data-testid="text-about-heading">
              We Are Karizzmah
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed" data-testid="text-about-description-1">
              We are not just any creative agency – we are your strategic partner in
              building brands that leave lasting impressions. Based in Dubai, we combine
              global perspectives with local market expertise.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed" data-testid="text-about-description-2">
              Our multidisciplinary team of strategists, designers, developers, and
              marketers work together to deliver integrated solutions that drive real
              business results. We believe in building long-term partnerships based on
              trust, transparency, and measurable success.
            </p>
            <Button
              onClick={scrollToContact}
              data-testid="button-about-contact"
            >
              Work With Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-card border border-border rounded-lg p-8" data-testid="card-why-choose">
              <h3 className="text-xl font-semibold mb-6 text-foreground" data-testid="text-why-choose-heading">
                Why Choose Karizzmah?
              </h3>
              <div className="space-y-4">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-3"
                    data-testid={`item-highlight-${index}`}
                  >
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
