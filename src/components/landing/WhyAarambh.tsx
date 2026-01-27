import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const valuePillars = [
  'Commercial-EV-focused infrastructure model',
  'Scalable, modular deployment approach',
  'Fleet-first operational design',
  'ESG-aligned growth strategy',
  'DPIIT-recognized Startup India entity',
  'Partner-driven execution framework',
];

export const WhyTrinetra = () => {
  return (
    <section id="why-trinetra" className="py-24 bg-black text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-blue-400 to-lime-400 bg-clip-text text-transparent">
              Why Trinetra?
            </h2>
            <p className="text-lg text-gray-300">Empowering India's EV revolution with innovative solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {valuePillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-4 bg-white/5 p-6 rounded-xl border border-white/10 shadow-sm hover:shadow-md hover:border-blue-400/50 hover:bg-white/10 transition-all group"
              >
                <CheckCircle2 className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <span className="text-lg text-white">{pillar}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
