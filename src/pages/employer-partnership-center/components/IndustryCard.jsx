import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const IndustryCard = ({ industry, onViewWorkers }) => {
  const getIndustryIcon = (type) => {
    switch (type) {
      case 'F&B': return 'ChefHat';
      case 'Construction': return 'HardHat';
      case 'Caregiving': return 'Heart';
      case 'Domestic Services': return 'Home';
      default: return 'Briefcase';
    }
  };

  const getIndustryGradient = (type) => {
    switch (type) {
      case 'F&B': return 'from-orange-500 to-red-500';
      case 'Construction': return 'from-yellow-500 to-orange-600';
      case 'Caregiving': return 'from-pink-500 to-rose-500';
      case 'Domestic Services': return 'from-blue-500 to-indigo-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-trust hover:shadow-trust-lg transition-all duration-300 overflow-hidden group">
      {/* Header with gradient background */}
      <div className={`bg-gradient-to-r ${getIndustryGradient(industry?.type)} p-6 text-white relative overflow-hidden`}>
        <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
          <Icon name={getIndustryIcon(industry?.type)} size={128} />
        </div>
        <div className="relative z-10">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              <Icon name={getIndustryIcon(industry?.type)} size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold">{industry?.type}</h3>
              <p className="text-white/80 text-sm">{industry?.subtitle}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="bg-white/10 rounded-lg p-3">
              <div className="text-2xl font-bold">{industry?.availableWorkers}</div>
              <div className="text-white/80 text-xs">Available Workers</div>
            </div>
            <div className="bg-white/10 rounded-lg p-3">
              <div className="text-2xl font-bold">{industry?.avgPlacement}</div>
              <div className="text-white/80 text-xs">Avg. Placement</div>
            </div>
          </div>
        </div>
      </div>
      {/* Content */}
      <div className="p-6">
        <div className="space-y-4">
          {/* Job Roles */}
          <div>
            <h4 className="font-medium text-text-primary mb-2">Popular Roles</h4>
            <div className="flex flex-wrap gap-2">
              {industry?.roles?.map((role, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-surface text-text-secondary text-sm rounded-full"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>

          {/* Salary Range */}
          <div className="flex items-center justify-between py-3 border-t border-border">
            <div>
              <div className="text-sm text-text-secondary">Starting Salary</div>
              <div className="font-semibold text-text-primary">{industry?.salaryRange}</div>
            </div>
            <div className="text-right">
              <div className="text-sm text-text-secondary">Success Rate</div>
              <div className="font-semibold text-success">{industry?.successRate}</div>
            </div>
          </div>

          {/* CTA Button */}
          <Button 
            variant="default" 
            fullWidth
            className="mt-4 group-hover:scale-[1.02] transition-transform duration-200"
            onClick={() => onViewWorkers(industry?.type)}
          >
            <Icon name="Users" size={16} className="mr-2" />
            View Available Workers
          </Button>
        </div>
      </div>
    </div>
  );
};

export default IndustryCard;