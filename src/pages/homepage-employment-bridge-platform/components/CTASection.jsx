import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';


const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary to-secondary cultural-pattern relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA Content */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Start Your
              <span className="block">Singapore Journey?</span>
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join thousands of successful workers who trusted LeadingEdge Asia to transform their careers. Your legitimate Singapore employment opportunity awaits.
            </p>
          </div>

          {/* Dual Path CTAs */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Link to="/worker-registration-hub" className="group">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center hover:bg-white/20 transition-trust hover:scale-105">
                <Icon name="UserPlus" size={48} className="mx-auto mb-4 text-white" />
                <h3 className="text-xl font-bold text-white mb-3">Find Your Dream Job</h3>
                <p className="text-white/80 mb-6">
                  Register now and get matched with verified Singapore employers looking for your skills.
                </p>
                <div className="flex items-center justify-center space-x-2 text-white font-medium">
                  <span>Start Registration</span>
                  <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <Link to="/employer-partnership-center" className="group">
              <div className="bg-white rounded-2xl p-8 text-center hover:shadow-trust-xl transition-trust hover:scale-105">
                <Icon name="Building2" size={48} className="mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-bold text-text-primary mb-3">Hire Quality Workers</h3>
                <p className="text-text-secondary mb-6">
                  Access our pool of pre-screened, skilled workers ready to contribute to your business.
                </p>
                <div className="flex items-center justify-center space-x-2 text-primary font-medium">
                  <span>Browse Workers</span>
                  <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>

          {/* Trust Reinforcement */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <Icon name="Shield" size={32} className="mx-auto mb-2 text-white" />
                <div className="text-sm font-medium text-white/90">MOM Licensed</div>
                <div className="text-xs text-white/70">EA 24-C0123</div>
              </div>
              <div className="text-center">
                <Icon name="Users" size={32} className="mx-auto mb-2 text-white" />
                <div className="text-sm font-medium text-white/90">2,847+ Placed</div>
                <div className="text-xs text-white/70">Success Stories</div>
              </div>
              <div className="text-center">
                <Icon name="Star" size={32} className="mx-auto mb-2 text-white" />
                <div className="text-sm font-medium text-white/90">4.9/5 Rating</div>
                <div className="text-xs text-white/70">Customer Reviews</div>
              </div>
              <div className="text-center">
                <Icon name="Clock" size={32} className="mx-auto mb-2 text-white" />
                <div className="text-sm font-medium text-white/90">24/7 Support</div>
                <div className="text-xs text-white/70">Always Available</div>
              </div>
            </div>
          </div>

          {/* Secondary Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/success-stories-gallery"
              className="flex items-center space-x-2 text-white/90 hover:text-white transition-colors font-medium"
            >
              <Icon name="PlayCircle" size={20} />
              <span>Watch Success Stories</span>
            </Link>
            <div className="hidden sm:block w-px h-6 bg-white/30"></div>
            <Link
              to="/about-us-authority-trust-building"
              className="flex items-center space-x-2 text-white/90 hover:text-white transition-colors font-medium"
            >
              <Icon name="Info" size={20} />
              <span>Learn About Our Mission</span>
            </Link>
          </div>

          {/* Contact Information */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-white/80 mb-4">
              Have questions? Our team is here to help you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <div className="flex items-center space-x-2 text-white/90">
                <Icon name="Phone" size={16} />
                <span className="text-sm">+65 6123 4567</span>
              </div>
              <div className="flex items-center space-x-2 text-white/90">
                <Icon name="Mail" size={16} />
                <span className="text-sm">hello@leadingedgeasia.com</span>
              </div>
              <div className="flex items-center space-x-2 text-white/90">
                <Icon name="MessageCircle" size={16} />
                <span className="text-sm">Live Chat Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;