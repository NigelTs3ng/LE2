import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const FounderSection = () => {
  const founderData = {
    name: "Sarah Chen",
    title: "Founder & CEO",
    credentials: "MOM Certified Employment Agent | 12+ Years Singapore HR",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    story: `My journey began in 2012 when I witnessed firsthand the exploitation of migrant workers in Singapore's employment sector. As a former MOM compliance officer, I saw talented individuals from across Southeast Asia being treated as commodities rather than valued professionals.\n\nAfter years of working within the system, I realized that real change required building something new—a platform that prioritizes transparency, dignity, and genuine cultural integration. LeadingEdge Asia was born from this mission to bridge not just employment gaps, but cultural understanding and mutual respect.\n\nEvery worker who trusts us with their dreams deserves nothing less than complete transparency, fair treatment, and ongoing support. This isn't just business for me—it's a personal commitment to transform how cross-border employment works in Southeast Asia.`,
    achievements: [
      "MOM Certified Employment Agent (License #EA12345678)",
      "Former Senior Compliance Officer, Ministry of Manpower",
      "12+ years in Singapore employment regulations",
      "Fluent in English, Mandarin, Bahasa Malaysia, and Tamil",
      "Featured speaker at ASEAN Employment Summit 2023"
    ]
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Founder Image & Credentials */}
          <div className="space-y-6">
            <div className="relative">
              <div className="w-80 h-80 mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-trust-lg">
                <Image
                  src={founderData?.image}
                  alt={founderData?.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Trust Badge Overlay */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-trust-lg p-4 border">
                <div className="flex items-center space-x-2">
                  <Icon name="Shield" size={20} className="text-success" />
                  <span className="text-sm font-semibold text-primary">MOM Certified</span>
                </div>
              </div>
            </div>

            {/* Credentials List */}
            <div className="space-y-3">
              {founderData?.achievements?.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={16} className="text-success mt-1 flex-shrink-0" />
                  <span className="text-sm text-text-secondary">{achievement}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Founder Story */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-2">
                Meet Our Founder
              </h2>
              <h3 className="text-xl font-semibold text-text-primary mb-1">
                {founderData?.name}
              </h3>
              <p className="text-secondary font-medium mb-4">
                {founderData?.title}
              </p>
              <p className="text-sm text-text-secondary font-medium">
                {founderData?.credentials}
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              {founderData?.story?.split('\n\n')?.map((paragraph, index) => (
                <p key={index} className="text-text-secondary leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Personal Commitment */}
            <div className="bg-surface rounded-lg p-6 border-l-4 border-primary">
              <div className="flex items-start space-x-3">
                <Icon name="Quote" size={24} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-text-primary font-medium italic">
                    "Every worker who trusts us with their dreams deserves complete transparency, 
                    fair treatment, and ongoing support. This is my personal commitment to you."
                  </p>
                  <p className="text-sm text-text-secondary mt-2 font-medium">
                    — {founderData?.name}, Founder & CEO
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;