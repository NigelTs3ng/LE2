import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import TestimonialCarousel from './components/TestimonialCarousel';
import WhyLeadingEdge from './components/WhyLeadingEdge';
import IndustryShowcase from './components/IndustryShowcase';
import WorldMapVisualization from './components/WorldMapVisualization';
import FounderCredibility from './components/FounderCredibility';
import CTASection from './components/CTASection';

const Homepage = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>LeadingEdge Asia - Your Trusted Bridge to Singapore Employment</title>
        <meta 
          name="description" 
          content="Connect Southeast Asian talent with legitimate Singapore opportunities through our MOM-licensed employment bridge platform. Transparent, ethical, and culturally integrated job placement services." 
        />
        <meta name="keywords" content="Singapore jobs, employment agency, MOM licensed, Southeast Asia recruitment, legitimate job placement" />
        <meta property="og:title" content="LeadingEdge Asia - Your Trusted Bridge to Singapore Employment" />
        <meta property="og:description" content="Transparent, ethical employment bridge connecting Southeast Asian talent with Singapore opportunities." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/homepage-employment-bridge-platform" />
      </Helmet>
      <Header />
      <main>
        <HeroSection />
        <TestimonialCarousel />
        <WhyLeadingEdge />
        <IndustryShowcase />
        <WorldMapVisualization />
        <FounderCredibility />
        <CTASection />
      </main>
      {/* Footer */}
      <footer className="bg-text-primary text-white py-12">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              {/* Company Info */}
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                      <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" fill="none"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-lg font-semibold">LeadingEdge Asia</div>
                    <div className="text-xs text-white/70">Your Trusted Employment Bridge</div>
                  </div>
                </div>
                <p className="text-white/80 mb-4 leading-relaxed">
                  Connecting Southeast Asian talent with legitimate Singapore opportunities through transparency, trust, and cultural integration support.
                </p>
                <div className="text-sm text-white/70">
                  <div>MOM Licensed EA 24-C0123</div>
                  <div>UEN: 201812345G</div>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-semibold mb-4">Services</h4>
                <ul className="space-y-2 text-sm text-white/80">
                  <li><a href="/worker-registration-hub" className="hover:text-white transition-colors">Worker Registration</a></li>
                  <li><a href="/employer-partnership-center" className="hover:text-white transition-colors">Employer Services</a></li>
                  <li><a href="/success-stories-gallery" className="hover:text-white transition-colors">Success Stories</a></li>
                  <li><a href="/country-landing-pages-localized-entry-points" className="hover:text-white transition-colors">Country Guides</a></li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="font-semibold mb-4">Contact</h4>
                <ul className="space-y-2 text-sm text-white/80">
                  <li>+65 6123 4567</li>
                  <li>hello@leadingedgeasia.com</li>
                  <li>123 Marina Bay Street<br />Singapore 018956</li>
                </ul>
              </div>
            </div>

            <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row items-center justify-between">
              <div className="text-sm text-white/70 mb-4 md:mb-0">
                © {new Date()?.getFullYear()} LeadingEdge Asia. All rights reserved.
              </div>
              <div className="flex space-x-6 text-sm text-white/70">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;