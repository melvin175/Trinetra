import { motion } from 'framer-motion';
import { Award, Zap, Truck, Leaf, MapPin } from 'lucide-react';

const trustItems = [
  { icon: Award, text: 'Recognized under the Startup India initiative by DPIIT, Government of India' },
  { icon: Zap, text: 'Focus: Commercial EV Infrastructure' },
  { icon: Truck, text: 'Focus: Fleet Enablement & Services' },
  { icon: Leaf, text: 'ESG-Aligned Business Model' },
  { icon: MapPin, text: 'India-First Clean Mobility Mission' },
];

export const TrustStrip = () => {
  return (
    <section className="py-12 bg-zinc-900/50 border-y border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-3 text-gray-300"
            >
              <item.icon className="w-5 h-5 text-blue-400 flex-shrink-0" />
              <span className="text-sm md:text-base font-medium">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
