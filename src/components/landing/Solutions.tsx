import { motion } from 'framer-motion';
import { Zap, Truck, Wrench, Power } from 'lucide-react';

const solutions = [
  {
    icon: Truck,
    title: 'Fleet Enablement & Transition Support',
    description: 'We support logistics operators and enterprises in transitioning to electric fleets through infrastructure access, service networks, and operational enablement.',
    capabilities: [
      'Charging access programs',
      'Route-based energy planning',
      'Fleet uptime support',
      'Cost modeling & transition advisory',
      'Infrastructure-linked service access',
    ],
  },
  {
    icon: Zap,
    title: 'Commercial EV Charging Infrastructure',
    description: 'We design and deploy scalable charging solutions tailored for electric commercial vehicles, focusing on operational efficiency, uptime reliability, and grid-friendly energy usage.',
    capabilities: [
      'DC fast-charging solutions',
      'Depot-based charging systems',
      'Highway and logistics hub charging',
      'Load balancing & power optimization',
      'Modular infrastructure rollout',
    ],
  },
  {
    icon: Wrench,
    title: 'EV Maintenance & Service Support',
    description: 'We build and manage EV service networks through trained service partners to ensure fleet reliability and operational continuity.',
    capabilities: [
      'Preventive maintenance programs',
      'Battery diagnostics',
      'Motor and power electronics support',
      'Annual maintenance contracts (AMC)',
      'Regional service hubs',
    ],
  },
  {
    icon: Power,
    title: 'Power & Energy Integration',
    description: 'We integrate charging infrastructure with optimized power systems to ensure grid compatibility, cost efficiency, and long-term sustainability.',
    capabilities: [
      'Power infrastructure design',
      'Utility coordination',
      'Energy cost optimization',
      'Renewable energy integration (future phase)',
    ],
  },
];

export const Solutions = () => {
  return (
    <section id="solutions" className="py-24 bg-zinc-900 text-white" itemScope itemType="https://schema.org/Service">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-blue-400 to-lime-400 bg-clip-text text-transparent">
            Our Solutions
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Comprehensive EV infrastructure and services designed for India's commercial mobility needs
          </p>
        </motion.div>

        <div className="space-y-16">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
            >
              <div className="lg:w-1/2">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border-2 border-white/10 shadow-lg hover:shadow-xl hover:border-blue-400/50 transition-all"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-lime-400 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <solution.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
                    {solution.title}
                  </h3>
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    {solution.description}
                  </p>
                </motion.div>
              </div>
              <div className="lg:w-1/2">
                <h4 className="text-xl font-semibold mb-6 text-white">Capabilities</h4>
                <ul className="space-y-4">
                  {solution.capabilities.map((capability, capIndex) => (
                    <motion.li
                      key={capIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: capIndex * 0.1 }}
                      className="flex items-start gap-3 bg-white/5 p-3 rounded-lg border border-white/10 hover:border-blue-400/50 hover:bg-white/10 transition-all"
                    >
                      <span className="text-blue-400 font-bold mt-1 text-lg">✓</span>
                      <span className="text-gray-300 font-medium">{capability}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
