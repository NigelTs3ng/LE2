import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import FounderSection from './components/FounderSection';
import CompanyTimeline from './components/CompanyTimeline';
import MissionValues from './components/MissionValues';
import TeamSection from './components/TeamSection';
import ComplianceShowcase from './components/ComplianceShowcase';
import DifferentiatorSection from './components/DifferentiatorSection';
import ImpactMetrics from './components/ImpactMetrics';
import ContactSection from './components/ContactSection';
import Icon from '../../components/AppIcon';

const AboutUsAuthorityTrustBuilding = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>About Us - Authority & Trust Building | LeadingEdge Asia</title>
        <meta name="description" content="Learn about LeadingEdge Asia's mission to eliminate worker exploitation through ethical employment bridging. Meet our MOM-certified team and discover our transparent approach to Singapore employment." />
        <meta name="keywords" content="about leadingedge asia, singapore employment agency, mom certified, ethical recruitment, worker protection, employment bridge" />
        <meta property="og:title" content="About Us - Authority & Trust Building | LeadingEdge Asia" />
        <meta property="og:description" content="Discover how LeadingEdge Asia is transforming cross-border employment through transparency, cultural integration, and unwavering commitment to worker dignity." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/about-us-authority-trust-building" />
      </Helmet>
      <Header />
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary via-primary to-secondary relative overflow-hidden">
        <div className="absolute inset-0 cultural-pattern opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-full">
                <Icon name="Shield" size={32} className="text-white" />
              </div>
              <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-full">
                <Icon name="Heart" size={32} className="text-white" />
              </div>
              <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-full">
                <Icon name="Users" size={32} className="text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Built on Trust,
              <br />
              <span className="text-secondary">Driven by Purpose</span>
            </h1>
            
            <p className="text-xl text-white/90 max-w-4xl mx-auto mb-8 leading-relaxed">
              LeadingEdge Asia was founded to eliminate worker exploitation and create the most trusted 
              bridge between Southeast Asian talent and Singapore opportunities. Every decision we make 
              is guided by transparency, dignity, and genuine care for the communities we serve.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-surface transition-trust shadow-trust">
                Meet Our Team
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-trust">
                View Our Credentials
              </button>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">2,847+</div>
              <div className="text-white/80 text-sm">Workers Placed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">98%</div>
              <div className="text-white/80 text-sm">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">0</div>
              <div className="text-white/80 text-sm">Compliance Violations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">4+</div>
              <div className="text-white/80 text-sm">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>
      {/* Main Content Sections */}
      <FounderSection />
      <CompanyTimeline />
      <MissionValues />
      <TeamSection />
      <ComplianceShowcase />
      <DifferentiatorSection />
      <ImpactMetrics />
      <ContactSection />
      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-secondary">
                  <Icon name="Shield" size={20} className="text-white" />
                </div>
                <div>
                  <div className="font-semibold">LeadingEdge Asia</div>
                  <div className="text-xs text-white/80">Ethical Employment Bridge</div>
                </div>
              </div>
              <p className="text-white/80 text-sm mb-4">
                Transforming cross-border employment through transparency, dignity, and cultural integration.
              </p>
              <div className="flex items-center space-x-2 text-sm">
                <Icon name="Shield" size={16} />
                <span>MOM Licensed EA12345678</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2 text-sm text-white/80">
                <div><a href="/worker-registration-hub" className="hover:text-white transition-colors">Find Work</a></div>
                <div><a href="/employer-partnership-center" className="hover:text-white transition-colors">Hire Workers</a></div>
                <div><a href="/success-stories-gallery" className="hover:text-white transition-colors">Success Stories</a></div>
                <div><a href="/country-landing-pages-localized-entry-points" className="hover:text-white transition-colors">Country Guides</a></div>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold mb-4">Contact Us</h3>
              <div className="space-y-2 text-sm text-white/80">
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>+65 6789 1234</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>hello@leadingedge.asia</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span>Marina Bay Financial Centre</span>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div>
              <h3 className="font-semibold mb-4">Trust & Security</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-sm">
                  <Icon name="Shield" size={16} className="text-success" />
                  <span className="text-white/80">MOM Registered</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Icon name="Lock" size={16} className="text-warning" />
                  <span className="text-white/80">SSL Secured</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Icon name="Award" size={16} className="text-trust" />
                  <span className="text-white/80">Industry Certified</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-white/80 text-sm">
              © {new Date()?.getFullYear()} LeadingEdge Asia. All rights reserved. 
              Committed to ethical employment bridging across Southeast Asia.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUsAuthorityTrustBuilding;