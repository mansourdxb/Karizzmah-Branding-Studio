import { Link } from "wouter";
import { motion } from "framer-motion";

export function CtaBanner() {
  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="type-title text-primary-foreground mb-4 sm:mb-6">
            Ready to elevate your Brand presence and Visibility? Contact us today
          </h2>
          <p className="type-description text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            To create a space in the customer's mind you can only through an
            outstanding brand identity. As the best branding agency in Dubai,
            Karizzmah offers a comprehensive Branding strategy to increase your
            brand presence and visibility within your business landscape — we offer
            a free consultation service.
          </p>
          <Link
            href="/contact"
            className="type-btn w-full sm:w-auto max-w-full px-6 sm:px-8 py-3 sm:py-3.5 text-xs sm:text-sm bg-[#0a0a0a] text-white hover:opacity-90 hover:scale-[1.02] transition-all duration-300"
          >
            Book free consultation!
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
