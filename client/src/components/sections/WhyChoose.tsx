import { motion } from "framer-motion";

import { SectionHeader } from "@/components/common/SectionHeader";

import { whyChooseItems, whyChooseIntro } from "@/data/site";



export function WhyChoose() {

  return (

    <section className="py-14 sm:py-20 lg:py-28 bg-black">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeader

          label="Why Choose Karizzmah"

          description={whyChooseIntro}

          dark

        />



        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {whyChooseItems.map((item, index) => (

            <motion.div

              key={item.title}

              initial={{ opacity: 0, y: 30 }}

              whileInView={{ opacity: 1, y: 0 }}

              viewport={{ once: true }}

              transition={{ duration: 0.5, delay: index * 0.1 }}

              whileHover={{ y: -6 }}

              className="group p-6 sm:p-8 border border-white/15 border-l-2 border-l-primary/30 bg-[#111111] hover:border-primary/40 hover:border-l-primary hover:shadow-[0_12px_40px_rgba(201,162,39,0.1)] transition-all duration-300"

            >

              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">

                <span className="text-primary font-bold text-lg">

                  {String(index + 1).padStart(2, "0")}

                </span>

              </div>

              <h3 className="text-base sm:text-lg font-bold text-white mb-3">{item.title}</h3>

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

