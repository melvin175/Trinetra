import { motion } from 'framer-motion';

const stats = [
  { value: "50%", label: "Cost Reduction", color: "text-blue-400" },
  { value: "0", label: "Carbon Emissions", color: "text-lime-400" },
  { value: "100%", label: "Fleet Visibility", color: "text-white" },
  { value: "24/7", label: "Support & Uptime", color: "text-blue-400" },
];

export const Stats = () => {
  return (
    <section className="py-20 bg-zinc-900 border-y border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className={`text-5xl md:text-6xl font-bold mb-2 ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-gray-400 font-medium text-lg uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
