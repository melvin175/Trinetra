import { motion } from 'framer-motion';
import { Handshake, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import ctaBg from '../../assets/images/cta-bg.png';

const partnerTypes = [
  'Fleet operators',
  'Infrastructure providers',
  'Technology companies',
  'Energy partners',
  'Financial institutions',
  'Government and PSU stakeholders',
];

export const PartnerWithUs = () => {
  return (
    <section id="partner-with-us" className="py-24 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={ctaBg}
          alt="EV charging infrastructure partnership background"
          className="w-full h-full object-cover opacity-20"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-lime-900/60" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <Handshake className="w-16 h-16 text-blue-400 mx-auto mb-4" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-lime-200 bg-clip-text text-transparent">
            Partner With Trinetra
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            We collaborate with organizations across the EV value chain to build scalable and sustainable electric mobility solutions.
          </p>

          <div className="mb-10">
            <h3 className="text-2xl font-semibold mb-6">We welcome partnerships with:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {partnerTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3 bg-white/5 p-4 rounded-lg border border-white/10"
                >
                  <span className="text-blue-400 font-bold">•</span>
                  <span className="text-gray-300">{type}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('contact');
                if (element) {
                  const offsetTop = element.offsetTop - 80;
                  window.scrollTo({ top: offsetTop, behavior: 'smooth' });
                }
              }}
            >
              <Button size="lg" className="w-full sm:w-auto group">
                Become a Partner
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('contact');
                if (element) {
                  const offsetTop = element.offsetTop - 80;
                  window.scrollTo({ top: offsetTop, behavior: 'smooth' });
                }
              }}
            >
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Explore Collaboration
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
