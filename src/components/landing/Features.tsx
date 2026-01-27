import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import dashboardImg from '../../assets/images/dashboard.png';
import chargingImg from '../../assets/images/charging.png';

export const Features = () => {
  return (
    <section id="solutions" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Feature 1 */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/20">
              <img src={dashboardImg} alt="Fleet Dashboard" className="w-full h-auto" />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent pointer-events-none" />
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Complete Operational Visibility
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Take control of your logistics with our intelligent fleet management system. 
              Monitor vehicle health, optimize routes in real-time, and track deliveries with precision.
            </p>
            <ul className="space-y-4">
              {[
                "Real-time vehicle tracking & telemetry",
                "AI-powered route optimization",
                "Predictive maintenance alerts",
                "Automated dispatch & scheduling"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-700 font-medium">
                  <CheckCircle2 className="text-blue-600 w-6 h-6 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-lime-900/20">
              <img src={chargingImg} alt="Charging Infrastructure" className="w-full h-auto" />
              <div className="absolute inset-0 bg-gradient-to-bl from-lime-600/20 to-transparent pointer-events-none" />
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Scalable Charging Infrastructure
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Deploy a robust charging network designed for heavy-duty logistics. 
              Our smart charging solutions ensure your fleet is always ready to move.
            </p>
            <ul className="space-y-4">
              {[
                "High-speed DC fast charging stations",
                "Smart load balancing & energy management",
                "Renewable energy integration",
                "24/7 infrastructure monitoring"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-700 font-medium">
                  <CheckCircle2 className="text-lime-600 w-6 h-6 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
