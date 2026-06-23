import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqItems } from "@/data/faq";

function FaqColumn({
  items,
  startIndex,
  openIndex,
  onToggle,
}: {
  items: typeof faqItems;
  startIndex: number;
  openIndex: number | null;
  onToggle: (index: number) => void;
}) {
  return (
    <div>
      {items.map((item, columnIndex) => {
        const index = startIndex + columnIndex;
        const isOpen = openIndex === index;

        return (
          <div key={index} className="border-b border-white/10">
            <button
              type="button"
              onClick={() => onToggle(index)}
              className="w-full text-left py-4 sm:py-5 px-1 sm:pr-4 min-h-11 transition-colors hover:bg-white/[0.02]"
            >
              <span
                className={`type-body font-bold transition-colors ${
                  isOpen ? "text-primary" : "text-white"
                }`}
              >
                {index + 1}. {item.question}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="type-body text-white/80 pb-5 pr-4">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const splitAt = Math.ceil(faqItems.length / 2);
  const leftItems = faqItems.slice(0, splitAt);
  const rightItems = faqItems.slice(splitAt);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-14 sm:py-20 lg:py-28 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="type-title text-white text-center mb-8 sm:mb-12 lg:mb-16">
          Most Popular Questions
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 xl:gap-x-16">
          <FaqColumn
            items={leftItems}
            startIndex={0}
            openIndex={openIndex}
            onToggle={handleToggle}
          />
          <FaqColumn
            items={rightItems}
            startIndex={splitAt}
            openIndex={openIndex}
            onToggle={handleToggle}
          />
        </div>
      </div>
    </section>
  );
}
