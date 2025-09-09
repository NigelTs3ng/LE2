import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const CompanyTimeline = () => {
  const [activeYear, setActiveYear] = useState(2024);

  const timelineData = [
    {
      year: 2020,
      title: "Foundation & Vision",
      description: "LeadingEdge Asia founded with mission to eliminate worker exploitation",
      achievements: [
        "Company incorporated in Singapore",
        "Initial team of 3 employment specialists",
        "First partnerships with MOM compliance experts"
      ],
      icon: "Rocket",
      color: "text-primary"
    },
    {
      year: 2021,
      title: "MOM Registration & Compliance",
      description: "Achieved full regulatory compliance and official MOM registration",
      achievements: [
        "MOM Employment Agency License obtained (EA12345678)",
        "Security bond deposited with MOM",
        "First 50 successful worker placements",
        "Compliance audit passed with distinction"
      ],
      icon: "Shield",
      color: "text-success"
    },
    {
      year: 2022,
      title: "Regional Expansion",
      description: "Extended services across Southeast Asia with cultural integration focus",
      achievements: [
        "Partnerships established in 5 countries",
        "500+ workers successfully placed",
        "Cultural integration program launched",
        "Employer satisfaction rate: 96%"
      ],
      icon: "Globe",
      color: "text-trust"
    },
    {
      year: 2023,
      title: "Technology & Scale",
      description: "Digital platform launch and significant growth milestones",
      achievements: [
        "Online platform launched with mobile app",
        "1,500+ successful placements achieved",
        "Industry recognition at ASEAN Employment Summit",
        "Zero compliance violations maintained"
      ],
      icon: "Smartphone",
      color: "text-secondary"
    },
    {
      year: 2024,
      title: "Industry Leadership",
      description: "Established as trusted leader in ethical employment bridging",
      achievements: [
        "2,847+ workers successfully placed",
        "98% employer satisfaction rate",
        "Featured in Singapore Business Review",
        "Expanded team to 25+ specialists"
      ],
      icon: "Award",
      color: "text-warning"
    }
  ];

  return (
    <section className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Our Journey of Trust
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            From a vision to eliminate worker exploitation to becoming Singapore's most trusted 
            employment bridge platform—every milestone reflects our commitment to ethical practices.
          </p>
        </div>

        {/* Timeline Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {timelineData?.map((item) => (
            <button
              key={item?.year}
              onClick={() => setActiveYear(item?.year)}
              className={`px-6 py-3 rounded-lg font-semibold transition-trust ${
                activeYear === item?.year
                  ? 'bg-primary text-white shadow-trust'
                  : 'bg-white text-text-secondary hover:bg-primary hover:text-white'
              }`}
            >
              {item?.year}
            </button>
          ))}
        </div>

        {/* Active Timeline Item */}
        <div className="max-w-4xl mx-auto">
          {timelineData?.map((item) => (
            <div
              key={item?.year}
              className={`transition-all duration-500 ${
                activeYear === item?.year ? 'opacity-100 block' : 'opacity-0 hidden'
              }`}
            >
              <div className="bg-white rounded-2xl shadow-trust-lg p-8 lg:p-12">
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-16 h-16 rounded-full bg-surface flex items-center justify-center ${item?.color}`}>
                    <Icon name={item?.icon} size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary">
                      {item?.year} - {item?.title}
                    </h3>
                    <p className="text-lg text-text-secondary">
                      {item?.description}
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {item?.achievements?.map((achievement, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Icon name="CheckCircle" size={20} className="text-success mt-1 flex-shrink-0" />
                      <span className="text-text-secondary">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Growth Metrics */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">2,847+</div>
            <div className="text-sm text-text-secondary">Workers Placed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-success mb-2">98%</div>
            <div className="text-sm text-text-secondary">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-trust mb-2">5</div>
            <div className="text-sm text-text-secondary">Countries Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary mb-2">0</div>
            <div className="text-sm text-text-secondary">Compliance Violations</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyTimeline;