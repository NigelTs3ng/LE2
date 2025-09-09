import React from 'react';
import Icon from '../../../components/AppIcon';

const SuccessMetrics = () => {
  const metrics = [
    {
      icon: 'Clock',
      value: '7 Days',
      label: 'Average Time-to-Hire',
      description: 'From inquiry to placement',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: 'Star',
      value: '4.8/5',
      label: 'Employer Satisfaction',
      description: 'Based on 847 reviews',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100'
    },
    {
      icon: 'TrendingUp',
      value: '94%',
      label: 'Retention Rate',
      description: 'Workers staying 12+ months',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: 'Shield',
      value: '100%',
      label: 'MOM Compliance',
      description: 'All placements verified',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-trust p-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold text-text-primary mb-2">
          Why Singapore Employers Choose Us
        </h2>
        <p className="text-text-secondary">
          Proven results that speak for themselves
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics?.map((metric, index) => (
          <div key={index} className="text-center">
            <div className={`w-16 h-16 ${metric?.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
              <Icon name={metric?.icon} size={24} className={metric?.color} />
            </div>
            <div className="text-3xl font-bold text-text-primary mb-1">
              {metric?.value}
            </div>
            <div className="font-medium text-text-primary mb-1">
              {metric?.label}
            </div>
            <div className="text-sm text-text-secondary">
              {metric?.description}
            </div>
          </div>
        ))}
      </div>
      {/* Additional Stats */}
      <div className="mt-8 pt-6 border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-2xl font-bold text-primary mb-1">2,847+</div>
            <div className="text-sm text-text-secondary">Successful Placements</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-secondary mb-1">450+</div>
            <div className="text-sm text-text-secondary">Partner Companies</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-success mb-1">6 Countries</div>
            <div className="text-sm text-text-secondary">Talent Sources</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessMetrics;