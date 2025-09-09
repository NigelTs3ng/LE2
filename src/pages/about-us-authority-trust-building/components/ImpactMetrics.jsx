import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const ImpactMetrics = () => {
  const [animatedValues, setAnimatedValues] = useState({
    workersPlaced: 0,
    employerSatisfaction: 0,
    workerRetention: 0,
    familiesImpacted: 0
  });

  const finalValues = {
    workersPlaced: 2847,
    employerSatisfaction: 98,
    workerRetention: 94,
    familiesImpacted: 8541
  };

  const impactStats = [
    {
      key: 'workersPlaced',
      label: 'Workers Successfully Placed',
      value: finalValues?.workersPlaced,
      suffix: '+',
      icon: 'Users',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      key: 'employerSatisfaction',
      label: 'Employer Satisfaction Rate',
      value: finalValues?.employerSatisfaction,
      suffix: '%',
      icon: 'ThumbsUp',
      color: 'text-success',
      bgColor: 'bg-success/10'
    },
    {
      key: 'workerRetention',
      label: 'Worker Retention Rate',
      value: finalValues?.workerRetention,
      suffix: '%',
      icon: 'Heart',
      color: 'text-trust',
      bgColor: 'bg-trust/10'
    },
    {
      key: 'familiesImpacted',
      label: 'Families Lives Improved',
      value: finalValues?.familiesImpacted,
      suffix: '+',
      icon: 'Home',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10'
    }
  ];

  const successStories = [
    {
      category: "Career Advancement",
      count: 1247,
      description: "Workers promoted within first year",
      icon: "TrendingUp",
      color: "text-success"
    },
    {
      category: "Family Reunification",
      count: 892,
      description: "Families brought to Singapore",
      icon: "Users",
      color: "text-primary"
    },
    {
      category: "Skill Development",
      count: 2156,
      description: "Workers completed training programs",
      icon: "GraduationCap",
      color: "text-trust"
    },
    {
      category: "Community Integration",
      count: 1834,
      description: "Workers active in community programs",
      icon: "Heart",
      color: "text-secondary"
    }
  ];

  const industryBreakdown = [
    { industry: "Food & Beverage", percentage: 35, workers: 996 },
    { industry: "Construction", percentage: 28, workers: 797 },
    { industry: "Caregiving", percentage: 22, workers: 626 },
    { industry: "Domestic Services", percentage: 15, workers: 428 }
  ];

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60; // 60 steps for smooth animation
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setAnimatedValues({
        workersPlaced: Math.floor(finalValues?.workersPlaced * progress),
        employerSatisfaction: Math.floor(finalValues?.employerSatisfaction * progress),
        workerRetention: Math.floor(finalValues?.workerRetention * progress),
        familiesImpacted: Math.floor(finalValues?.familiesImpacted * progress)
      });

      if (currentStep >= steps) {
        clearInterval(interval);
        setAnimatedValues(finalValues);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Real results that demonstrate our commitment to transforming lives through 
            ethical employment bridging. Every number represents a life changed for the better.
          </p>
        </div>

        {/* Main Impact Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {impactStats?.map((stat) => (
            <div key={stat?.key} className="bg-surface rounded-2xl p-6 text-center hover:shadow-trust transition-trust">
              <div className={`flex items-center justify-center w-16 h-16 rounded-full mx-auto mb-4 ${stat?.bgColor}`}>
                <Icon name={stat?.icon} size={32} className={stat?.color} />
              </div>
              <div className={`text-3xl font-bold mb-2 ${stat?.color}`}>
                {animatedValues?.[stat?.key]?.toLocaleString()}{stat?.suffix}
              </div>
              <div className="text-sm text-text-secondary font-medium">
                {stat?.label}
              </div>
            </div>
          ))}
        </div>

        {/* Success Stories Breakdown */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary text-center mb-8">
            Success Stories by Category
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {successStories?.map((story, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-trust hover:shadow-trust-lg transition-trust border">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-lg bg-surface ${story?.color}`}>
                    <Icon name={story?.icon} size={20} />
                  </div>
                  <h4 className="font-semibold text-primary">{story?.category}</h4>
                </div>
                <div className={`text-2xl font-bold mb-2 ${story?.color}`}>
                  {story?.count?.toLocaleString()}
                </div>
                <p className="text-sm text-text-secondary">
                  {story?.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Breakdown */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary text-center mb-8">
            Placement by Industry
          </h3>
          
          <div className="bg-surface rounded-2xl p-8">
            <div className="space-y-6">
              {industryBreakdown?.map((industry, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-text-primary">{industry?.industry}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-text-secondary">{industry?.workers} workers</span>
                      <span className="font-bold text-primary">{industry?.percentage}%</span>
                    </div>
                  </div>
                  <div className="w-full bg-white rounded-full h-3 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000"
                      style={{ width: `${industry?.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Geographic Impact */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary text-center mb-8">
            Geographic Reach
          </h3>
          
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { country: "Bangladesh", workers: 1139, flag: "🇧🇩" },
              { country: "India", workers: 854, flag: "🇮🇳" },
              { country: "Vietnam", workers: 427, flag: "🇻🇳" },
              { country: "Malaysia", workers: 284, flag: "🇲🇾" },
              { country: "China", workers: 143, flag: "🇨🇳" }
            ]?.map((country, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center shadow-trust">
                <div className="text-3xl mb-2">{country?.flag}</div>
                <h4 className="font-semibold text-primary mb-1">{country?.country}</h4>
                <div className="text-lg font-bold text-secondary">{country?.workers}</div>
                <div className="text-xs text-text-secondary">workers placed</div>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Statement */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 lg:p-12 text-center">
          <Icon name="Heart" size={48} className="text-white mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-white mb-4">
            Beyond Numbers: Real Lives Transformed
          </h3>
          <p className="text-white/90 text-lg leading-relaxed max-w-4xl mx-auto mb-6">
            Every statistic represents a family's dreams fulfilled, a worker's dignity preserved, 
            and an employer's trust earned. These numbers tell the story of ethical employment 
            bridging that creates lasting positive impact across Southeast Asia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-surface transition-trust">
              Read Success Stories
            </button>
            <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-trust">
              Join Our Impact
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;