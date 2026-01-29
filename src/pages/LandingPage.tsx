import { Navbar } from '../components/landing/Navbar';
import { ScrollProgress } from '../components/landing/ScrollProgress';
import { ScrollToTop } from '../components/landing/ScrollToTop';
import { SEO } from '../components/SEO';
import { StructuredData } from '../components/StructuredData';
import { Hero } from '../components/landing/Hero';
import { TrustStrip } from '../components/landing/TrustStrip';
import { AboutUs } from '../components/landing/AboutUs';
import { Solutions } from '../components/landing/Solutions';
import { Industries } from '../components/landing/Industries';
import { WhyTrinetra } from '../components/landing/WhyAarambh';
import { ESGImpact } from '../components/landing/ESGImpact';
import { PartnerWithUs } from '../components/landing/PartnerWithUs';
import { Contact } from '../components/landing/Contact';
import { Footer } from '../components/landing/Footer';

const LandingPage = () => {
  return (
    <>
      <SEO 
        title="Trinetra - Enabling India's Commercial EV Ecosystem | EV Charging Infrastructure"
        description="Trinetra Green Mobility builds scalable EV charging infrastructure and fleet enablement services for India's commercial electric vehicle ecosystem. DPIIT-recognized Startup India company."
        keywords="EV charging infrastructure, electric vehicle charging, commercial EV, fleet electrification, EV charging stations India, electric mobility, sustainable transportation"
      />
      <StructuredData />
      <div className="min-h-screen bg-black text-white selection:bg-blue-500 selection:text-white font-sans">
        <ScrollProgress />
        <Navbar />
        <main>
          <Hero />
          <TrustStrip />
          <AboutUs />
          <Solutions />
          <Industries />
          <WhyTrinetra />
          <ESGImpact />
          <PartnerWithUs />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
};

export default LandingPage;
