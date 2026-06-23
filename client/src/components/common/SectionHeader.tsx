import { motion } from "framer-motion";

interface SectionHeaderProps {
  label: string;
  title?: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
  titleClassName?: string;
}

export function SectionHeader({
  label,
  title,
  description,
  align = "center",
  dark = false,
  titleClassName,
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const lineAlignClass = align === "center" ? "mx-auto" : "";

  return (
    <div className={`max-w-4xl mb-8 sm:mb-12 lg:mb-16 ${alignClass}`}>
      <span className="type-label inline-block mb-3">{label}</span>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`h-0.5 w-12 bg-primary mb-5 origin-left ${lineAlignClass} ${align === "center" ? "origin-center" : ""}`}
      />
      {title && (
        <h2 className={`type-title ${titleClassName ?? ""} ${dark ? "text-white" : "text-foreground"}`}>
          {title}
        </h2>
      )}
      {description && (
        <p
          className={`type-description ${title ? "mt-4" : "mt-3"} ${
            dark ? "text-white/70" : "text-muted-foreground"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
