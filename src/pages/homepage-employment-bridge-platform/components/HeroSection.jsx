import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';


const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary/5 via-white to-secondary/5 cultural-pattern overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-10 w-32 h-32 bg-secondary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-primary rounded-full blur-3xl"></div>
      </div>

      {/* Singapore Skyline Silhouette */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary/10 to-transparent">
        <svg viewBox="0 0 1200 200" className="w-full h-full opacity-20">
          <path d="M0,200 L0,120 L50,120 L50,80 L100,80 L100,60 L150,60 L150,100 L200,100 L200,40 L250,40 L250,90 L300,90 L300,70 L350,70 L350,110 L400,110 L400,50 L450,50 L450,85 L500,85 L500,65 L550,65 L550,95 L600,95 L600,45 L650,45 L650,75 L700,75 L700,55 L750,55 L750,105 L800,105 L800,35 L850,35 L850,80 L900,80 L900,60 L950,60 L950,90 L1000,90 L1000,70 L1050,70 L1050,100 L1100,100 L1100,80 L1150,80 L1150,120 L1200,120 L1200,200 Z" fill="currentColor"/>
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-6xl mx-auto">
          {/* Trust Indicators Bar */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <div className="trust-badge-float px-4 py-2 flex items-center space-x-2">
              <Icon name="Shield" size={20} className="text-success" />
              <span className="text-sm font-semibold text-text-primary">MOM Registered</span>
            </div>
            <div className="trust-badge-float px-4 py-2 flex items-center space-x-2">
              <Icon name="Lock" size={20} className="text-warning" />
              <span className="text-sm font-semibold text-text-primary">SSL Secured</span>
            </div>
            <div className="trust-badge-float px-4 py-2 flex items-center space-x-2">
              <Icon name="Users" size={20} className="text-trust" />
              <span className="text-sm font-semibold text-text-primary">2,847+ Placed</span>
            </div>
            <div className="trust-badge-float px-4 py-2 flex items-center space-x-2">
              <Icon name="Star" size={20} className="text-secondary" />
              <span className="text-sm font-semibold text-text-primary">4.9/5 Rating</span>
            </div>
          </div>

          {/* Main Hero Content */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6 leading-tight">
              Your Trusted Bridge to
              <span className="block text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
                Singapore Employment
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary mb-8 max-w-3xl mx-auto leading-relaxed">
              Connecting Southeast Asian talent with legitimate Singapore opportunities through transparency, trust, and cultural integration support.
            </p>
          </div>

          {/* Split Path CTAs */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
            <Link to="/worker-registration-hub" className="group">
              <div className="hero-cta p-8 rounded-2xl text-white text-center transition-trust hover:scale-105 shadow-trust-lg">
                <div className="mb-4">
                  <Icon name="UserPlus" size={48} className="mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">I'm Looking for Work</h3>
                  <p className="text-white/90 mb-4">Start your Singapore career journey with our trusted placement services</p>
                </div>
                <div className="flex items-center justify-center space-x-2 text-sm font-medium">
                  <span>Get Started</span>
                  <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <Link to="/employer-partnership-center" className="group">
              <div className="bg-white border-2 border-primary p-8 rounded-2xl text-center transition-trust hover:scale-105 shadow-trust-lg hover:shadow-trust-xl">
                <div className="mb-4">
                  <Icon name="Building2" size={48} className="mx-auto mb-4 text-primary" />
                  <h3 className="text-2xl font-bold mb-2 text-text-primary">I'm Hiring</h3>
                  <p className="text-text-secondary mb-4">Find qualified, verified workers for your business needs</p>
                </div>
                <div className="flex items-center justify-center space-x-2 text-sm font-medium text-primary">
                  <span>Find Talent</span>
                  <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">2,847+</div>
              <div className="text-sm text-text-secondary">Workers Placed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">450+</div>
              <div className="text-sm text-text-secondary">Partner Companies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-success mb-2">5</div>
              <div className="text-sm text-text-secondary">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-trust mb-2">98%</div>
              <div className="text-sm text-text-secondary">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;