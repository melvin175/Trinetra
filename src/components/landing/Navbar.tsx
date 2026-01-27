import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';
import { Logo } from '../ui/Logo';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'solutions', 'industries', 'why-trinetra', 'esg-impact', 'partner-with-us', 'contact'];
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-lg py-4 shadow-lg shadow-black/20' : 'bg-transparent py-6'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setActiveSection('home');
          }}
          className="hover:opacity-80 transition-opacity cursor-pointer"
        >
          <Logo size="md" showText={true} />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {[
            { label: 'Home', href: '#home', id: 'home' },
            { label: 'About Us', href: '#about', id: 'about' },
            { label: 'Solutions', href: '#solutions', id: 'solutions' },
            { label: 'Industries', href: '#industries', id: 'industries' },
            { label: 'Why Trinetra', href: '#why-trinetra', id: 'why-trinetra' },
            { label: 'ESG Impact', href: '#esg-impact', id: 'esg-impact' },
            { label: 'Contact', href: '#contact', id: 'contact' },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`relative text-sm font-medium transition-colors ${
                activeSection === item.id
                  ? 'text-white'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-400"
                  initial={false}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a href="#partner-with-us" onClick={(e) => handleNavClick(e, '#partner-with-us')}>
            <Button variant="primary" size="sm">Partner With Us</Button>
          </a>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-t border-white/10 p-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {[
                { label: 'Home', href: '#home', id: 'home' },
                { label: 'About Us', href: '#about', id: 'about' },
                { label: 'Solutions', href: '#solutions', id: 'solutions' },
                { label: 'Industries', href: '#industries', id: 'industries' },
                { label: 'Why Trinetra', href: '#why-trinetra', id: 'why-trinetra' },
                { label: 'ESG Impact', href: '#esg-impact', id: 'esg-impact' },
                { label: 'Contact', href: '#contact', id: 'contact' },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`text-lg font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-white'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <div className="h-px bg-white/10 my-2" />
              <a href="#partner-with-us" onClick={(e) => handleNavClick(e, '#partner-with-us')}>
                <Button variant="primary" className="w-full">Partner With Us</Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
