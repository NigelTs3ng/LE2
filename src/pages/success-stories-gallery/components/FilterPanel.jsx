import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FilterPanel = ({ 
  filters, 
  onFilterChange, 
  onClearFilters, 
  totalStories, 
  filteredCount 
}) => {
  const countries = [
    { code: 'all', name: 'All Countries', flag: '🌏' },
    { code: 'bangladesh', name: 'Bangladesh', flag: '🇧🇩' },
    { code: 'india', name: 'India', flag: '🇮🇳' },
    { code: 'vietnam', name: 'Vietnam', flag: '🇻🇳' },
    { code: 'malaysia', name: 'Malaysia', flag: '🇲🇾' },
    { code: 'china', name: 'China', flag: '🇨🇳' },
    { code: 'philippines', name: 'Philippines', flag: '🇵🇭' }
  ];

  const industries = [
    { code: 'all', name: 'All Industries', icon: 'Briefcase' },
    { code: 'food-beverage', name: 'Food & Beverage', icon: 'ChefHat' },
    { code: 'construction', name: 'Construction', icon: 'HardHat' },
    { code: 'healthcare', name: 'Healthcare', icon: 'Heart' },
    { code: 'domestic', name: 'Domestic Services', icon: 'Home' },
    { code: 'manufacturing', name: 'Manufacturing', icon: 'Factory' },
    { code: 'retail', name: 'Retail', icon: 'ShoppingBag' }
  ];

  const successTypes = [
    { code: 'all', name: 'All Success Types', icon: 'Star' },
    { code: 'career-advancement', name: 'Career Advancement', icon: 'TrendingUp' },
    { code: 'family-support', name: 'Family Support', icon: 'Users' },
    { code: 'education', name: 'Education Achievement', icon: 'GraduationCap' },
    { code: 'skill-development', name: 'Skill Development', icon: 'Award' },
    { code: 'entrepreneurship', name: 'Entrepreneurship', icon: 'Lightbulb' }
  ];

  const timelines = [
    { code: 'all', name: 'All Timelines', icon: 'Clock' },
    { code: '0-1', name: '0-1 Years', icon: 'Clock' },
    { code: '1-3', name: '1-3 Years', icon: 'Clock' },
    { code: '3-5', name: '3-5 Years', icon: 'Clock' },
    { code: '5+', name: '5+ Years', icon: 'Clock' }
  ];

  const handleFilterChange = (category, value) => {
    onFilterChange({
      ...filters,
      [category]: value
    });
  };

  const hasActiveFilters = Object.values(filters)?.some(filter => filter !== 'all');

  return (
    <div className="bg-white rounded-xl shadow-trust p-6 mb-8">
      {/* Filter Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Icon name="Filter" size={20} className="text-primary" />
          <h3 className="text-lg font-semibold text-text-primary">Filter Success Stories</h3>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-sm text-text-secondary">
            Showing <span className="font-semibold text-primary">{filteredCount}</span> of {totalStories} stories
          </div>
          {hasActiveFilters && (
            <Button
              variant="outline"
              size="sm"
              onClick={onClearFilters}
              iconName="X"
              iconPosition="left"
              iconSize={14}
            >
              Clear All
            </Button>
          )}
        </div>
      </div>
      {/* Filter Categories */}
      <div className="space-y-6">
        {/* Country Filter */}
        <div>
          <h4 className="text-sm font-medium text-text-primary mb-3 flex items-center space-x-2">
            <Icon name="Globe" size={16} className="text-primary" />
            <span>Country of Origin</span>
          </h4>
          <div className="flex flex-wrap gap-2">
            {countries?.map((country) => (
              <button
                key={country?.code}
                onClick={() => handleFilterChange('country', country?.code)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center space-x-2 ${
                  filters?.country === country?.code
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-surface text-text-secondary hover:bg-primary/10 hover:text-primary'
                }`}
              >
                <span className="text-base">{country?.flag}</span>
                <span>{country?.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Industry Filter */}
        <div>
          <h4 className="text-sm font-medium text-text-primary mb-3 flex items-center space-x-2">
            <Icon name="Building" size={16} className="text-primary" />
            <span>Industry</span>
          </h4>
          <div className="flex flex-wrap gap-2">
            {industries?.map((industry) => (
              <button
                key={industry?.code}
                onClick={() => handleFilterChange('industry', industry?.code)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center space-x-2 ${
                  filters?.industry === industry?.code
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-surface text-text-secondary hover:bg-primary/10 hover:text-primary'
                }`}
              >
                <Icon name={industry?.icon} size={14} />
                <span>{industry?.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Success Type Filter */}
        <div>
          <h4 className="text-sm font-medium text-text-primary mb-3 flex items-center space-x-2">
            <Icon name="Trophy" size={16} className="text-primary" />
            <span>Success Type</span>
          </h4>
          <div className="flex flex-wrap gap-2">
            {successTypes?.map((type) => (
              <button
                key={type?.code}
                onClick={() => handleFilterChange('successType', type?.code)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center space-x-2 ${
                  filters?.successType === type?.code
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-surface text-text-secondary hover:bg-primary/10 hover:text-primary'
                }`}
              >
                <Icon name={type?.icon} size={14} />
                <span>{type?.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Filter */}
        <div>
          <h4 className="text-sm font-medium text-text-primary mb-3 flex items-center space-x-2">
            <Icon name="Calendar" size={16} className="text-primary" />
            <span>Time in Singapore</span>
          </h4>
          <div className="flex flex-wrap gap-2">
            {timelines?.map((timeline) => (
              <button
                key={timeline?.code}
                onClick={() => handleFilterChange('timeline', timeline?.code)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center space-x-2 ${
                  filters?.timeline === timeline?.code
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-surface text-text-secondary hover:bg-primary/10 hover:text-primary'
                }`}
              >
                <Icon name={timeline?.icon} size={14} />
                <span>{timeline?.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;