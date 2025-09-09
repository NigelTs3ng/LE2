import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const FounderCredibility = () => {
  const timeline = [
    {
      year: "2018",
      title: "MOM License Obtained",
      description: "Received official Employment Agency license from Singapore\'s Ministry of Manpower",
      icon: "Award",
      color: "success"
    },
    {
      year: "2019",
      title: "First 100 Placements",
      description: "Successfully placed our first 100 workers across various industries",
      icon: "Users",
      color: "primary"
    },
    {
      year: "2021",
      title: "Multi-Country Expansion",
      description: "Extended services to Bangladesh, India, Vietnam, Malaysia, and China",
      icon: "Globe",
      color: "secondary"
    },
    {
      year: "2023",
      title: "Digital Platform Launch",
      description: "Launched comprehensive online platform for transparent job matching",
      icon: "Smartphone",
      color: "trust"
    },
    {
      year: "2024",
      title: "2,500+ Success Stories",
      description: "Reached milestone of 2,500+ successful employment placements",
      icon: "Trophy",
      color: "warning"
    }
  ];

  const certifications = [
    {
      name: "MOM Employment Agency License",
      number: "EA 24-C0123",
      issuer: "Ministry of Manpower, Singapore",
      icon: "Shield"
    },
    {
      name: "ISO 27001 Certification",
      number: "ISO/IEC 27001:2013",
      issuer: "Information Security Management",
      icon: "Lock"
    },
    {
      name: "Singapore Business Registration",
      number: "UEN: 201812345G",
      issuer: "Accounting and Corporate Regulatory Authority",
      icon: "Building"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Built on Trust & Expertise
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Meet our founder and discover the regulatory compliance journey that makes LeadingEdge Asia your most trusted employment partner.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Founder Profile */}
            <div>
              <div className="bg-surface rounded-2xl p-8 mb-8">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <Image
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face"
                      alt="David Lim - Founder & CEO"
                      className="w-32 h-32 rounded-2xl object-cover"
                    />
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold text-text-primary mb-2">David Lim</h3>
                    <p className="text-lg text-primary font-medium mb-4">Founder & CEO</p>
                    <div className="space-y-2 text-sm text-text-secondary">
                      <div className="flex items-center justify-center md:justify-start space-x-2">
                        <Icon name="GraduationCap" size={16} />
                        <span>MBA, National University of Singapore</span>
                      </div>
                      <div className="flex items-center justify-center md:justify-start space-x-2">
                        <Icon name="Briefcase" size={16} />
                        <span>15+ years in HR & Recruitment</span>
                      </div>
                      <div className="flex items-center justify-center md:justify-start space-x-2">
                        <Icon name="MapPin" size={16} />
                        <span>Singapore Permanent Resident</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <blockquote className="text-text-primary leading-relaxed">
                    "Having worked in Singapore's employment sector for over 15 years, I witnessed too many workers being exploited by unscrupulous agencies. LeadingEdge Asia was born from my commitment to create a transparent, ethical alternative that truly serves both workers and employers.\n\nOur MOM license isn't just a certificate on the wall—it's our promise to maintain the highest standards of integrity in every placement we make."
                  </blockquote>
                  <div className="mt-4 flex items-center space-x-2">
                    <Icon name="Quote" size={16} className="text-primary" />
                    <span className="text-sm font-medium text-text-primary">David Lim, Founder</span>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-text-primary mb-4">Official Certifications</h4>
                {certifications?.map((cert, index) => (
                  <div key={index} className="bg-white border border-border rounded-lg p-4 hover:shadow-trust transition-trust">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name={cert?.icon} size={20} className="text-success" />
                      </div>
                      <div className="flex-1">
                        <h5 className="font-semibold text-text-primary mb-1">{cert?.name}</h5>
                        <p className="text-sm text-primary font-medium mb-1">{cert?.number}</p>
                        <p className="text-xs text-text-secondary">{cert?.issuer}</p>
                      </div>
                      <Icon name="ExternalLink" size={16} className="text-text-muted" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Compliance Timeline */}
            <div>
              <h4 className="text-lg font-bold text-text-primary mb-8">Our Compliance Journey</h4>
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border"></div>

                {timeline?.map((item, index) => (
                  <div key={index} className="relative flex items-start space-x-6 mb-8 last:mb-0">
                    {/* Timeline Dot */}
                    <div className={`w-12 h-12 rounded-full bg-${item?.color === 'success' ? 'success' : item?.color === 'primary' ? 'primary' : item?.color === 'secondary' ? 'secondary' : item?.color === 'trust' ? 'trust' : 'warning'}/10 border-4 border-${item?.color === 'success' ? 'success' : item?.color === 'primary' ? 'primary' : item?.color === 'secondary' ? 'secondary' : item?.color === 'trust' ? 'trust' : 'warning'} flex items-center justify-center bg-white z-10`}>
                      <Icon 
                        name={item?.icon} 
                        size={20} 
                        className={`text-${item?.color === 'success' ? 'success' : item?.color === 'primary' ? 'primary' : item?.color === 'secondary' ? 'secondary' : item?.color === 'trust' ? 'trust' : 'warning'}`} 
                      />
                    </div>

                    {/* Timeline Content */}
                    <div className="flex-1 pb-8">
                      <div className="bg-surface rounded-lg p-4 hover:shadow-trust transition-trust">
                        <div className="flex items-center space-x-3 mb-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-bold bg-${item?.color === 'success' ? 'success' : item?.color === 'primary' ? 'primary' : item?.color === 'secondary' ? 'secondary' : item?.color === 'trust' ? 'trust' : 'warning'}/10 text-${item?.color === 'success' ? 'success' : item?.color === 'primary' ? 'primary' : item?.color === 'secondary' ? 'secondary' : item?.color === 'trust' ? 'trust' : 'warning'}`}>
                            {item?.year}
                          </span>
                        </div>
                        <h5 className="font-semibold text-text-primary mb-2">{item?.title}</h5>
                        <p className="text-sm text-text-secondary leading-relaxed">{item?.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust Metrics */}
              <div className="mt-8 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-6">
                <h5 className="font-bold text-text-primary mb-4 text-center">Trust Metrics</h5>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">6+</div>
                    <div className="text-xs text-text-secondary">Years Licensed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-success mb-1">0</div>
                    <div className="text-xs text-text-secondary">MOM Violations</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary mb-1">100%</div>
                    <div className="text-xs text-text-secondary">Compliance Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-trust mb-1">A+</div>
                    <div className="text-xs text-text-secondary">BBB Rating</div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8">
                <Link
                  to="/about-us-authority-trust-building"
                  className="w-full bg-primary text-white p-4 rounded-lg hover:bg-primary/90 transition-trust flex items-center justify-center space-x-2 font-medium"
                >
                  <span>Learn More About Our Mission</span>
                  <Icon name="ArrowRight" size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderCredibility;