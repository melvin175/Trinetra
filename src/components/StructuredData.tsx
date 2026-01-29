import { useEffect } from 'react';

export const StructuredData = () => {
  useEffect(() => {
    // Organization Schema
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Trinetra Green Mobility ",
      "alternateName": "Trinetra",
      "url": "https://trinetra.com",
      "logo": "https://trinetra.com/logo.png",
      "description": "Trinetra builds scalable EV charging infrastructure and fleet enablement services for India's commercial electric vehicle ecosystem.",
      "foundingDate": "2024",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN",
        "addressLocality": "India"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "info@trinetra.com",
        "contactType": "Customer Service"
      },
      "sameAs": [
        // Add your social media links here when available
      ]
    };

    // Website Schema
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Trinetra",
      "url": "https://trinetra.com",
      "description": "Enabling India's Commercial EV Ecosystem",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://trinetra.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    };

    // Service Schema
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "EV Charging Infrastructure & Fleet Enablement",
      "provider": {
        "@type": "Organization",
        "name": "Trinetra Green Mobility "
      },
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "description": "Commercial EV charging infrastructure, fleet enablement, and integrated EV support services for India's clean mobility future.",
      "offers": {
        "@type": "Offer",
        "description": "EV Charging Infrastructure Solutions"
      }
    };

    // Add all schemas to page
    const schemas = [organizationSchema, websiteSchema, serviceSchema];
    
    schemas.forEach((schema, index) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = `structured-data-${index}`;
      script.text = JSON.stringify(schema);
      
      // Remove existing script if present
      const existing = document.getElementById(`structured-data-${index}`);
      if (existing) {
        existing.remove();
      }
      
      document.head.appendChild(script);
    });

    return () => {
      // Cleanup on unmount
      schemas.forEach((_, index) => {
        const script = document.getElementById(`structured-data-${index}`);
        if (script) {
          script.remove();
        }
      });
    };
  }, []);

  return null;
};
