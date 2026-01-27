import { motion } from 'framer-motion';
import { Leaf, Target, TrendingDown, MapPin, Building2 } from 'lucide-react';

const impactGoals = [
  { icon: TrendingDown, text: 'Reduce commercial fleet emissions' },
  { icon: Target, text: 'Improve energy efficiency in logistics' },
  { icon: MapPin, text: 'Support India&apos;s net-zero roadmap' },
  { icon: Leaf, text: 'Enable responsible EV adoption' },
  { icon: Building2, text: 'Build long-term green infrastructure' },
];

export const ESGImpact = () => {
  return (
    <section id="esg-impact" className="py-24 bg-zinc-900 text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-6"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-lime-400 rounded-2xl flex items-center justify-center mx-auto shadow-xl">
                <Leaf className="w-10 h-10 text-black" />
              </div>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-lime-200 bg-clip-text text-transparent">
              Sustainability & Impact
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Sustainability is embedded into our business model.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-8 text-center">We aim to:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {impactGoals.map((goal, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center gap-4 bg-white/5 p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all group"
                >
                  <goal.icon className="w-8 h-8 text-lime-400 flex-shrink-0" />
                  <span className="text-lg">{goal.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
