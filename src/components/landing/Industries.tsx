import { motion } from 'framer-motion';
import { Package, ShoppingCart, Factory, Warehouse, Building2, Store, Bus, Building, Ship } from 'lucide-react';

const industries = [
  {
    icon: Package,
    title: 'Logistics & Supply Chain',
    description: 'End‑to‑end EV infrastructure and fleet enablement for line‑haul, hub‑and‑spoke, and last‑mile logistics operators.',
    useCases: [
      'Inter‑city freight',
      'Hub operations',
      'Distribution center fleets',
      '3PL & logistics aggregators',
    ],
  },
  {
    icon: ShoppingCart,
    title: 'E‑commerce & Last‑Mile Delivery',
    description: 'Charging and service solutions for high‑frequency delivery fleets operating in urban and peri‑urban zones.',
    useCases: [
      'Last‑mile delivery fleets',
      'Dark stores',
      'Hyperlocal logistics',
      'Quick‑commerce operators',
    ],
  },
  {
    icon: Factory,
    title: 'Manufacturing',
    description: 'EV infrastructure and fleet support for internal logistics, employee transport, and outbound freight operations.',
    useCases: [
      'Factory logistics fleets',
      'Material handling vehicles',
      'Vendor transport fleets',
      'Corporate mobility',
    ],
  },
  {
    icon: Warehouse,
    title: 'Warehousing & Industrial Parks',
    description: 'On‑site charging and fleet enablement for logistics parks, industrial clusters, and large warehousing hubs.',
    useCases: [
      'Logistics parks',
      'SEZs',
      'Industrial corridors',
      'Multi‑tenant warehouses',
    ],
  },
  {
    icon: Building2,
    title: 'Cement Industry',
    description: 'EV charging and fleet support for heavy‑duty and medium‑duty commercial vehicles used in cement logistics and material transport.',
    useCases: [
      'Bulk cement transport',
      'Clinker and raw material movement',
      'Inter‑plant logistics',
      'Regional distribution fleets',
    ],
  },
  {
    icon: Store,
    title: 'FMCG & Consumer Goods',
    description: 'Fleet electrification enablement for FMCG and consumer goods distribution networks operating large regional and urban delivery fleets.',
    useCases: [
      'Primary and secondary distribution',
      'Regional depots',
      'Distributor fleets',
      'Urban replenishment routes',
    ],
  },
  {
    icon: Bus,
    title: 'Public Transport Operators',
    description: 'Charging and fleet support infrastructure for electric buses and public transport fleets.',
    useCases: [
      'City bus depots',
      'Inter‑city transport',
      'Government transport fleets',
    ],
  },
  {
    icon: Building,
    title: 'Municipal Fleets',
    description: 'EV enablement for municipal and utility fleets used for sanitation, water, and civic services.',
    useCases: [
      'Garbage collection vehicles',
      'Water tankers',
      'Utility service vehicles',
      'City operations fleets',
    ],
  },
  {
    icon: Ship,
    title: 'Ports & SEZs',
    description: 'EV charging and service infrastructure for ports, logistics zones, and export‑import hubs.',
    useCases: [
      'Container movement',
      'Yard tractors',
      'Internal logistics',
      'Last‑mile port connectivity',
    ],
  },
];

export const Industries = () => {
  return (
    <section id="industries" className="py-24 bg-zinc-900 text-white" itemScope itemType="https://schema.org/ItemList">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Industries We Serve</h2>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Trinetra supports electric mobility adoption across high‑utilization, logistics‑intensive, and fleet‑driven industries where operational efficiency, uptime, and cost optimization are critical.
          </p>
          <p className="text-base text-gray-400 max-w-4xl mx-auto mt-4">
            Our infrastructure‑first and fleet‑enablement model is designed to serve sectors with large commercial vehicle demand and long‑term EV transition potential.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-all"
            >
              <industry.icon className="w-10 h-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">{industry.title}</h3>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">{industry.description}</p>
              <div>
                <h4 className="text-sm font-semibold text-blue-400 mb-2">Use Cases:</h4>
                <ul className="space-y-1">
                  {industry.useCases.map((useCase, ucIndex) => (
                    <li key={ucIndex} className="text-xs text-gray-400 flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>{useCase}</span>
                    </li>
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
