import { motion } from "framer-motion";

import { SectionHeader } from "@/components/common/SectionHeader";

import { coreValues } from "@/data/site";



export function CoreValues() {

  return (

    <section className="py-14 sm:py-20 lg:py-28 bg-[#151515]">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeader

          label="Core Values"

          title="What drives everything we do"

          description="Our values guide every project, partnership, and creative decision we make."

          dark

        />



        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {coreValues.map((item, index) => (

            <motion.div

              key={item.title}

              initial={{ opacity: 0, y: 30 }}

              whileInView={{ opacity: 1, y: 0 }}

              viewport={{ once: true }}

              transition={{ duration: 0.5, delay: index * 0.1 }}

              className="p-6 sm:p-8 border border-white/15 bg-[#111111] hover:border-primary/40 transition-all duration-300"

            >

              <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>

              <p className="type-body text-white/75">

                {item.description}

              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  );

}

