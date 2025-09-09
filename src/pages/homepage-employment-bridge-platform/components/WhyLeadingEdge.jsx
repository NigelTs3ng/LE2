import React from 'react';
import Icon from '../../../components/AppIcon';

const WhyLeadingEdge = () => {
  const features = [
    {
      id: 1,
      icon: "Shield",
      title: "MOM Registered & Compliant",
      description: `Fully licensed by Singapore's Ministry of Manpower with transparent regulatory compliance.\n\nAll our processes meet strict government standards, ensuring your employment journey is completely legitimate and protected by law.`,
      badge: "Licensed EA 24-C0123",
      color: "success"
    },
    {
      id: 2,
      icon: "Eye",
      title: "Transparent Process",
      description: `No hidden fees, no surprise charges, no false promises - complete transparency from start to finish.\n\nYou'll know exactly what to expect at every step, with clear timelines, costs, and requirements upfront.`,
      badge: "100% Transparent",
      color: "trust"
    },
    {
      id: 3,
      icon: "Heart",
      title: "Cultural Integration Support",
      description: `Beyond job placement - we prepare you for Singapore's work culture and lifestyle.\n\nOur comprehensive orientation covers workplace etiquette, cultural norms, and practical living guidance to ensure your success.`,
      badge: "Holistic Support",
      color: "secondary"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Why Choose LeadingEdge Asia?
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              We're not just another recruitment agency. We're your trusted partner in building a legitimate, successful career in Singapore.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {features?.map((feature) => (
              <div key={feature?.id} className="group">
                <div className="bg-surface rounded-2xl p-8 h-full transition-trust hover:shadow-trust-lg hover:-translate-y-1">
                  {/* Icon & Badge */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 rounded-xl bg-${feature?.color}/10 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon 
                        name={feature?.icon} 
                        size={32} 
                        className={`text-${feature?.color === 'success' ? 'success' : feature?.color === 'trust' ? 'trust' : 'secondary'}`} 
                      />
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium bg-${feature?.color === 'success' ? 'success' : feature?.color === 'trust' ? 'trust' : 'secondary'}/10 text-${feature?.color === 'success' ? 'success' : feature?.color === 'trust' ? 'trust' : 'secondary'}`}>
                      {feature?.badge}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-text-primary mb-4 group-hover:text-primary transition-colors">
                    {feature?.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed whitespace-pre-line">
                    {feature?.description}
                  </p>

                  {/* Learn More Link */}
                  <div className="mt-6 pt-6 border-t border-border">
                    <div className="flex items-center space-x-2 text-sm font-medium text-primary group-hover:text-secondary transition-colors">
                      <span>Learn More</span>
                      <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-12 border-t border-border">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-success/10 rounded-full flex items-center justify-center">
                  <Icon name="Award" size={24} className="text-success" />
                </div>
                <div className="text-sm font-medium text-text-primary mb-1">MOM Licensed</div>
                <div className="text-xs text-text-muted">EA License #24-C0123</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-trust/10 rounded-full flex items-center justify-center">
                  <Icon name="Lock" size={24} className="text-trust" />
                </div>
                <div className="text-sm font-medium text-text-primary mb-1">SSL Secured</div>
                <div className="text-xs text-text-muted">256-bit Encryption</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-secondary/10 rounded-full flex items-center justify-center">
                  <Icon name="Users" size={24} className="text-secondary" />
                </div>
                <div className="text-sm font-medium text-text-primary mb-1">Trusted by</div>
                <div className="text-xs text-text-muted">2,847+ Workers</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-warning/10 rounded-full flex items-center justify-center">
                  <Icon name="Star" size={24} className="text-warning" />
                </div>
                <div className="text-sm font-medium text-text-primary mb-1">4.9/5 Rating</div>
                <div className="text-xs text-text-muted">Based on 1,200+ reviews</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyLeadingEdge;