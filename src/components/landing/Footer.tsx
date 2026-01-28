import { Logo } from '../ui/Logo';

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black via-zinc-900 to-black text-white pt-20 pb-10" itemScope itemType="https://schema.org/WPFooter">
      <div className="container mx-auto px-6 border-t border-white/10 pt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="mb-6">
              <Logo size="md" showText={true} />
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              Building scalable infrastructure and service platforms for electric commercial mobility.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#solutions" className="hover:text-white transition-colors">Solutions</a></li>
              <li><a href="#industries" className="hover:text-white transition-colors">Industries</a></li>
              <li><a href="#esg-impact" className="hover:text-white transition-colors">ESG</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Connect</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#partner-with-us" className="hover:text-white transition-colors">Partner With Us</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Legal</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Use</a></li>
            </ul>
          </div>
        </div>
        
        <div className="text-center text-gray-500 text-sm pt-8 border-t border-white/10">
          <p>© 2026 Aarambh Green Mobility Private Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
