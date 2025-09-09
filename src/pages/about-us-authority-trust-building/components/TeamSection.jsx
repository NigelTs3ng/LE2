import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Chen",
      title: "Founder & CEO",
      credentials: "MOM Certified | Former MOM Compliance Officer",
      languages: ["English", "Mandarin", "Bahasa Malaysia", "Tamil"],
      background: "12+ years in Singapore employment regulations and worker advocacy",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      specialization: "Regulatory Compliance & Strategic Leadership"
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      title: "Head of Worker Relations",
      credentials: "Certified HR Professional | Cultural Integration Specialist",
      languages: ["English", "Hindi", "Bengali", "Tamil", "Punjabi"],
      background: "8 years supporting South Asian workers in Singapore employment transitions",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      specialization: "Cultural Bridge Building & Worker Support"
    },
    {
      id: 3,
      name: "Linh Nguyen",
      title: "Southeast Asia Operations Manager",
      credentials: "International Relations Graduate | Employment Law Specialist",
      languages: ["English", "Vietnamese", "Thai", "Khmer"],
      background: "6 years in cross-border employment and cultural adaptation programs",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      specialization: "Regional Partnerships & Process Optimization"
    },
    {
      id: 4,
      name: "Ahmad Hassan",
      title: "Employer Partnership Director",
      credentials: "Business Development Expert | Industry Relations Specialist",
      languages: ["English", "Bahasa Malaysia", "Arabic", "Mandarin"],
      background: "10 years building employer relationships across Singapore\'s key industries",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      specialization: "Employer Relations & Industry Partnerships"
    },
    {
      id: 5,
      name: "Priya Sharma",
      title: "Compliance & Legal Affairs Manager",
      credentials: "Legal Advisor | MOM Regulations Expert",
      languages: ["English", "Hindi", "Gujarati", "Marathi"],
      background: "7 years ensuring full regulatory compliance and worker protection",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face",
      specialization: "Legal Compliance & Worker Rights Protection"
    },
    {
      id: 6,
      name: "David Lim",
      title: "Technology & Innovation Lead",
      credentials: "Software Engineer | Digital Platform Architect",
      languages: ["English", "Mandarin", "Hokkien"],
      background: "5 years developing secure, user-friendly employment platforms",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face",
      specialization: "Platform Development & Security Systems"
    }
  ];

  return (
    <section className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Meet Our Expert Team
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Our diverse team combines deep Singapore employment expertise with cultural understanding 
            of the communities we serve. Every team member is committed to your success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers?.map((member) => (
            <div key={member?.id} className="bg-white rounded-2xl shadow-trust hover:shadow-trust-lg transition-trust overflow-hidden">
              {/* Member Photo */}
              <div className="relative">
                <div className="w-full h-64 overflow-hidden">
                  <Image
                    src={member?.image}
                    alt={member?.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Member Info */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-primary mb-1">
                    {member?.name}
                  </h3>
                  <p className="text-secondary font-semibold mb-2">
                    {member?.title}
                  </p>
                  <p className="text-sm text-text-secondary font-medium">
                    {member?.credentials}
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Specialization */}
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Icon name="Star" size={16} className="text-warning" />
                      <span className="text-sm font-medium text-text-primary">Specialization</span>
                    </div>
                    <p className="text-sm text-text-secondary pl-6">
                      {member?.specialization}
                    </p>
                  </div>

                  {/* Background */}
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Icon name="Briefcase" size={16} className="text-trust" />
                      <span className="text-sm font-medium text-text-primary">Experience</span>
                    </div>
                    <p className="text-sm text-text-secondary pl-6">
                      {member?.background}
                    </p>
                  </div>

                  {/* Languages */}
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Icon name="Languages" size={16} className="text-success" />
                      <span className="text-sm font-medium text-text-primary">Languages</span>
                    </div>
                    <div className="flex flex-wrap gap-2 pl-6">
                      {member?.languages?.map((language, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-surface text-xs font-medium text-text-secondary rounded-full"
                        >
                          {language}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="mt-16 bg-white rounded-2xl shadow-trust p-8">
          <h3 className="text-xl font-bold text-primary text-center mb-8">
            Our Team's Collective Expertise
          </h3>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-full mx-auto mb-3">
                <Icon name="GraduationCap" size={24} className="text-white" />
              </div>
              <div className="text-2xl font-bold text-primary mb-1">50+</div>
              <div className="text-sm text-text-secondary">Years Combined Experience</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-success rounded-full mx-auto mb-3">
                <Icon name="Languages" size={24} className="text-white" />
              </div>
              <div className="text-2xl font-bold text-success mb-1">12</div>
              <div className="text-sm text-text-secondary">Languages Spoken</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-trust rounded-full mx-auto mb-3">
                <Icon name="Award" size={24} className="text-white" />
              </div>
              <div className="text-2xl font-bold text-trust mb-1">15+</div>
              <div className="text-sm text-text-secondary">Professional Certifications</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-secondary rounded-full mx-auto mb-3">
                <Icon name="Globe" size={24} className="text-white" />
              </div>
              <div className="text-2xl font-bold text-secondary mb-1">8</div>
              <div className="text-sm text-text-secondary">Countries Represented</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;