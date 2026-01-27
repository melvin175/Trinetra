import { motion } from 'framer-motion';
import { Target, Network, Handshake, Leaf } from 'lucide-react';
import trinetraLogo from '../../assets/images/trinetra-logo.svg';

const approaches = [
  { icon: Target, title: 'Strategic infrastructure planning' },
  { icon: Network, title: 'Technology-enabled operations' },
  { icon: Handshake, title: 'Partner-driven service networks' },
  { icon: Leaf, title: 'ESG-aligned growth principles' },
];

export const AboutUs = () => {
  return (
    <section id="about" className="py-24 bg-black text-white" itemScope itemType="https://schema.org/AboutPage">
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
              className="inline-block mb-4"
            >
              <img 
                src={trinetraLogo} 
                alt="Trinetra company logo - EV charging infrastructure and fleet enablement services" 
                className="w-20 h-20 object-contain mx-auto"
                loading="lazy"
              />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-lime-200 bg-clip-text text-transparent">
              About Trinetra
            </h2>
          </div>
          
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed mb-12">
            <p className="text-xl">
              Trinetra is a DPIIT-recognized Startup India company focused on building scalable infrastructure and service platforms for electric commercial mobility.
            </p>
            <p>
              We operate at the intersection of infrastructure development, fleet enablement, and EV ecosystem services to make electric mobility viable for logistics operators, enterprises, and public transport stakeholders.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-6 text-center">Our approach combines:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {approaches.map((approach, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center gap-4 bg-white/5 p-6 rounded-xl border border-white/10"
                >
                  <approach.icon className="w-8 h-8 text-blue-400 flex-shrink-0" />
                  <span className="text-lg">{approach.title}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <p className="text-lg text-gray-300 leading-relaxed text-center">
            We aim to create a commercially sustainable and operationally reliable EV ecosystem for medium and heavy commercial vehicles across India.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
