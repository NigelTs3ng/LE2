import React from 'react';
import Icon from '../../../components/AppIcon';

const DifferentiatorSection = () => {
  const comparisons = [
    {
      category: "Pricing Transparency",
      leadingEdge: {
        title: "Complete Transparency",
        description: "All fees clearly stated upfront with detailed breakdown",
        features: ["No hidden charges", "Written fee structure", "Money-back guarantee"],
        icon: "Eye"
      },
      typical: {
        title: "Hidden Fees",
        description: "Surprise charges appear throughout the process",
        features: ["Undisclosed costs", "Changing fee structure", "No refund policy"],
        icon: "EyeOff"
      }
    },
    {
      category: "Worker Support",
      leadingEdge: {
        title: "Comprehensive Cultural Support",
        description: "Ongoing guidance for successful Singapore integration",
        features: ["Pre-arrival training", "Cultural orientation", "Ongoing mentorship"],
        icon: "Users"
      },
      typical: {
        title: "Transactional Placement",
        description: "Basic placement service with minimal ongoing support",
        features: ["One-time placement", "Limited guidance", "No follow-up support"],
        icon: "UserX"
      }
    },
    {
      category: "Relationship Approach",
      leadingEdge: {
        title: "Long-term Partnership",
        description: "Building lasting relationships for career growth",
        features: ["Career development", "Family support", "Community building"],
        icon: "Heart"
      },
      typical: {
        title: "One-time Service",
        description: "Transaction ends after initial placement",
        features: ["Single placement", "No career growth", "Isolated experience"],
        icon: "Clock"
      }
    },
    {
      category: "Compliance Standards",
      leadingEdge: {
        title: "Exceeds Regulations",
        description: "Going beyond minimum requirements for worker protection",
        features: ["MOM certified", "Regular audits", "Worker insurance"],
        icon: "Shield"
      },
      typical: {
        title: "Minimum Compliance",
        description: "Meets basic requirements without additional protections",
        features: ["Basic licensing", "Irregular reporting", "Limited protection"],
        icon: "AlertTriangle"
      }
    }
  ];

  const uniqueAdvantages = [
    {
      title: "Cultural Bridge Expertise",
      description: "Deep understanding of both Singapore workplace culture and worker home countries",
      icon: "Globe",
      color: "text-primary"
    },
    {
      title: "Technology-Enabled Transparency",
      description: "Real-time tracking, secure communications, and transparent process visibility",
      icon: "Smartphone",
      color: "text-trust"
    },
    {
      title: "Regulatory Excellence",
      description: "Perfect compliance record with proactive regulatory relationship management",
      icon: "Award",
      color: "text-success"
    },
    {
      title: "Community-Centric Approach",
      description: "Building supportive networks that extend beyond individual placements",
      icon: "Users",
      color: "text-secondary"
    }
  ];

  return (
    <section className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Why We're Different
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            We've reimagined employment bridging by putting worker dignity and long-term success 
            at the center of everything we do. Here's how we compare to typical agencies.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="space-y-12 mb-16">
          {comparisons?.map((comparison, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-trust p-8">
              <h3 className="text-xl font-bold text-primary text-center mb-8">
                {comparison?.category}
              </h3>
              
              <div className="grid lg:grid-cols-2 gap-8">
                {/* LeadingEdge Approach */}
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-success rounded-full flex items-center justify-center">
                    <Icon name="Check" size={20} className="text-white" />
                  </div>
                  
                  <div className="border-2 border-success rounded-xl p-6 h-full">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-success/10 rounded-full">
                        <Icon name={comparison?.leadingEdge?.icon} size={24} className="text-success" />
                      </div>
                      <div>
                        <h4 className="font-bold text-primary">LeadingEdge Asia</h4>
                        <p className="text-success font-semibold">{comparison?.leadingEdge?.title}</p>
                      </div>
                    </div>
                    
                    <p className="text-text-secondary mb-4">
                      {comparison?.leadingEdge?.description}
                    </p>
                    
                    <div className="space-y-2">
                      {comparison?.leadingEdge?.features?.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <Icon name="CheckCircle" size={16} className="text-success flex-shrink-0" />
                          <span className="text-sm text-text-secondary">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Typical Agency Approach */}
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-destructive rounded-full flex items-center justify-center">
                    <Icon name="X" size={20} className="text-white" />
                  </div>
                  
                  <div className="border-2 border-destructive/30 rounded-xl p-6 h-full bg-gray-50">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-destructive/10 rounded-full">
                        <Icon name={comparison?.typical?.icon} size={24} className="text-destructive" />
                      </div>
                      <div>
                        <h4 className="font-bold text-text-primary">Typical Agencies</h4>
                        <p className="text-destructive font-semibold">{comparison?.typical?.title}</p>
                      </div>
                    </div>
                    
                    <p className="text-text-secondary mb-4">
                      {comparison?.typical?.description}
                    </p>
                    
                    <div className="space-y-2">
                      {comparison?.typical?.features?.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <Icon name="XCircle" size={16} className="text-destructive flex-shrink-0" />
                          <span className="text-sm text-text-secondary">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Unique Advantages */}
        <div>
          <h3 className="text-2xl font-bold text-primary text-center mb-8">
            Our Unique Advantages
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {uniqueAdvantages?.map((advantage, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-trust hover:shadow-trust-lg transition-trust">
                <div className="flex items-start space-x-4">
                  <div className={`flex items-center justify-center w-12 h-12 rounded-lg bg-surface ${advantage?.color}`}>
                    <Icon name={advantage?.icon} size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-primary mb-2">
                      {advantage?.title}
                    </h4>
                    <p className="text-text-secondary">
                      {advantage?.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-center">
          <Icon name="Star" size={48} className="text-white mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-4">
            Experience the LeadingEdge Difference
          </h3>
          <p className="text-white/90 text-lg mb-6 max-w-3xl mx-auto">
            Join thousands of workers who have experienced ethical, transparent, 
            and supportive employment bridging. Your success story starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-surface transition-trust">
              Start Your Journey
            </button>
            <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-trust">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentiatorSection;