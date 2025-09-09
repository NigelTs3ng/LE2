import React from 'react';
import Icon from '../../../components/AppIcon';

const MissionValues = () => {
  const missionData = {
    mission: "To create the most trusted bridge between Southeast Asian talent and Singapore opportunities, eliminating exploitation through transparency, cultural integration, and unwavering commitment to worker dignity.",
    vision: "A world where cross-border employment is built on mutual respect, cultural understanding, and ethical practices that benefit both workers and employers.",
    promises: [
      {
        title: "Complete Transparency",
        description: "No hidden fees, clear processes, and honest communication at every step",
        icon: "Eye"
      },
      {
        title: "Fair Treatment Guarantee",
        description: "Every worker treated with dignity and respect throughout their journey",
        icon: "Heart"
      },
      {
        title: "Cultural Integration Support",
        description: "Comprehensive guidance for successful adaptation to Singapore workplace culture",
        icon: "Users"
      },
      {
        title: "Regulatory Compliance",
        description: "100% adherence to MOM regulations and Singapore employment laws",
        icon: "Shield"
      }
    ]
  };

  const coreValues = [
    {
      title: "Integrity First",
      description: "Every decision guided by ethical principles and worker welfare",
      icon: "Award",
      color: "text-primary"
    },
    {
      title: "Cultural Respect",
      description: "Celebrating diversity while fostering understanding and integration",
      icon: "Globe",
      color: "text-success"
    },
    {
      title: "Transparent Operations",
      description: "Open processes, clear communication, and honest relationships",
      icon: "Eye",
      color: "text-trust"
    },
    {
      title: "Continuous Support",
      description: "Ongoing relationship beyond placement for long-term success",
      icon: "HandHeart",
      color: "text-secondary"
    },
    {
      title: "Innovation Focus",
      description: "Leveraging technology to improve experiences and outcomes",
      icon: "Lightbulb",
      color: "text-warning"
    },
    {
      title: "Community Impact",
      description: "Creating positive change for families and communities across Asia",
      icon: "Home",
      color: "text-accent"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Mission & Vision */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary mb-8">
            Our Mission & Vision
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-surface rounded-2xl p-8">
              <div className="flex items-center justify-center w-16 h-16 bg-primary rounded-full mx-auto mb-6">
                <Icon name="Target" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-text-secondary leading-relaxed">
                {missionData?.mission}
              </p>
            </div>

            <div className="bg-surface rounded-2xl p-8">
              <div className="flex items-center justify-center w-16 h-16 bg-secondary rounded-full mx-auto mb-6">
                <Icon name="Telescope" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-text-secondary leading-relaxed">
                {missionData?.vision}
              </p>
            </div>
          </div>
        </div>

        {/* Our Promises */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary text-center mb-8">
            Our Promises to You
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {missionData?.promises?.map((promise, index) => (
              <div key={index} className="bg-surface rounded-lg p-6 text-center hover:shadow-trust transition-trust">
                <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full mx-auto mb-4 shadow-trust">
                  <Icon name={promise?.icon} size={24} className="text-primary" />
                </div>
                <h4 className="font-semibold text-primary mb-2">
                  {promise?.title}
                </h4>
                <p className="text-sm text-text-secondary">
                  {promise?.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div>
          <h3 className="text-2xl font-bold text-primary text-center mb-8">
            Our Core Values
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues?.map((value, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-xl p-6 shadow-trust hover:shadow-trust-lg transition-trust border">
                  <div className={`flex items-center justify-center w-14 h-14 rounded-lg bg-surface mb-4 ${value?.color}`}>
                    <Icon name={value?.icon} size={28} />
                  </div>
                  <h4 className="text-lg font-semibold text-primary mb-3">
                    {value?.title}
                  </h4>
                  <p className="text-text-secondary leading-relaxed">
                    {value?.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Commitment Statement */}
        <div className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 lg:p-12 text-center">
          <Icon name="Heart" size={48} className="text-white mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-white mb-4">
            Our Commitment to Ethical Employment
          </h3>
          <p className="text-white/90 text-lg leading-relaxed max-w-4xl mx-auto">
            We pledge to maintain the highest standards of ethical employment practices, 
            ensuring every worker's journey is marked by dignity, respect, and genuine opportunity. 
            Your success is our reputation, and your trust is our most valuable asset.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionValues;