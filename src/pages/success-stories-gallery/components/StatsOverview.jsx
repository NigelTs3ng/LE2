import React from 'react';
import Icon from '../../../components/AppIcon';

const StatsOverview = ({ stats }) => {
  const statItems = [
    {
      icon: 'Users',
      value: stats?.totalWorkers,
      label: 'Workers Placed',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: 'Globe',
      value: stats?.countriesServed,
      label: 'Countries Served',
      color: 'text-success',
      bgColor: 'bg-success/10'
    },
    {
      icon: 'Building',
      value: stats?.industriesCovered,
      label: 'Industries Covered',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10'
    },
    {
      icon: 'TrendingUp',
      value: `${stats?.averageSalaryIncrease}%`,
      label: 'Avg. Salary Increase',
      color: 'text-success',
      bgColor: 'bg-success/10'
    },
    {
      icon: 'Heart',
      value: stats?.familiesSupported,
      label: 'Families Supported',
      color: 'text-error',
      bgColor: 'bg-error/10'
    },
    {
      icon: 'Award',
      value: `${stats?.satisfactionRate}%`,
      label: 'Satisfaction Rate',
      color: 'text-warning',
      bgColor: 'bg-warning/10'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-trust p-6 mb-8">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-text-primary mb-2">
          Real Success, Real Impact
        </h2>
        <p className="text-text-secondary">
          Every number represents a life transformed through legitimate employment opportunities
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {statItems?.map((item, index) => (
          <div
            key={index}
            className="text-center p-4 rounded-lg hover:shadow-md transition-shadow duration-200"
          >
            <div className={`w-12 h-12 ${item?.bgColor} rounded-full flex items-center justify-center mx-auto mb-3`}>
              <Icon name={item?.icon} size={20} className={item?.color} />
            </div>
            <div className="text-2xl font-bold text-text-primary mb-1">
              {item?.value}
            </div>
            <div className="text-xs text-text-muted font-medium">
              {item?.label}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 pt-6 border-t border-border">
        <div className="flex items-center justify-center space-x-6 text-sm text-text-muted">
          <div className="flex items-center space-x-2">
            <Icon name="Shield" size={16} className="text-success" />
            <span>MOM Registered</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Lock" size={16} className="text-primary" />
            <span>SSL Secured</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="CheckCircle" size={16} className="text-success" />
            <span>Verified Stories</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsOverview;