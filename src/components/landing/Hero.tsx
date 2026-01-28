import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import heroBg from '../../assets/images/hero-bg.png';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black" itemScope itemType="https://schema.org/WebPage">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Commercial electric vehicle fleet charging at Trinetra EV charging infrastructure facility in India"
          className="w-full h-full object-cover opacity-60"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight" itemProp="headline">
              Enabling India's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-lime-400">Commercial EV Ecosystem</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed font-medium">
            Fleet enablement, scalable charging infrastructure, and integrated EV support services for India's clean mobility future.
            </p>
            <p className="text-lg text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
              <span className="font-semibold text-white">Trinetra</span> builds the physical and operational backbone required to accelerate the adoption of electric commercial vehicles across India.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#partner-with-us"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('partner-with-us');
                if (element) {
                  const offsetTop = element.offsetTop - 80;
                  window.scrollTo({ top: offsetTop, behavior: 'smooth' });
                }
              }}
            >
              <Button size="lg" className="w-full sm:w-auto group">
                Partner With Us
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a
              href="#solutions"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('solutions');
                if (element) {
                  const offsetTop = element.offsetTop - 80;
                  window.scrollTo({ top: offsetTop, behavior: 'smooth' });
                }
              }}
            >
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Explore Our Solutions
              </Button>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
