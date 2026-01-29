import { Logo } from '../ui/Logo';

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black via-zinc-900 to-black text-white pt-20 pb-10" itemScope itemType="https://schema.org/WPFooter">
      <div className="container mx-auto px-6 max-w-6xl border-t border-white/10 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 mb-12 md:items-start">
          <div>
            <div className="mb-4">
              <Logo size="md" showText={true} />
            </div>
            <p className="text-gray-400 leading-relaxed text-sm max-w-sm">
              Building scalable infrastructure and service platforms for electric commercial mobility.
            </p>
          </div>

          <div className="flex gap-12 md:gap-16">
            <div>
              <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Connect</h4>
              <ul className="space-y-2.5 text-gray-400 text-sm">
                <li><a href="#partner-with-us" className="hover:text-white transition-colors">Partner With Us</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Company</h4>
              <ul className="space-y-2.5 text-gray-400 text-sm">
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#solutions" className="hover:text-white transition-colors">Solutions</a></li>
                <li><a href="#industries" className="hover:text-white transition-colors">Industries</a></li>
                <li><a href="#esg-impact" className="hover:text-white transition-colors">ESG</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center text-gray-500 text-sm pt-8 border-t border-white/10">
          <p>© 2026 Trinetra Private Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
