import React from 'react';
import Icon from '../../../components/AppIcon';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';

const FilterPanel = ({ filters, onFilterChange, onClearFilters, isOpen, onToggle }) => {
  const industryOptions = [
    { value: 'all', label: 'All Industries' },
    { value: 'F&B', label: 'Food & Beverage' },
    { value: 'Construction', label: 'Construction' },
    { value: 'Caregiving', label: 'Caregiving' },
    { value: 'Domestic Services', label: 'Domestic Services' }
  ];

  const experienceOptions = [
    { value: 'all', label: 'All Experience Levels' },
    { value: 'Entry Level', label: 'Entry Level (0-2 years)' },
    { value: 'Experienced', label: 'Experienced (3-7 years)' },
    { value: 'Senior', label: 'Senior (8+ years)' }
  ];

  const availabilityOptions = [
    { value: 'all', label: 'All Availability' },
    { value: 'Immediate', label: 'Immediate' },
    { value: 'Within 2 weeks', label: 'Within 2 weeks' },
    { value: 'Within 1 month', label: 'Within 1 month' }
  ];

  const salaryOptions = [
    { value: 'all', label: 'All Salary Ranges' },
    { value: '1500-2000', label: 'SGD 1,500 - 2,000' },
    { value: '2000-2500', label: 'SGD 2,000 - 2,500' },
    { value: '2500-3000', label: 'SGD 2,500 - 3,000' },
    { value: '3000+', label: 'SGD 3,000+' }
  ];

  const languageOptions = [
    { value: 'all', label: 'All Languages' },
    { value: 'English', label: 'English' },
    { value: 'Mandarin', label: 'Mandarin' },
    { value: 'Malay', label: 'Malay' },
    { value: 'Tamil', label: 'Tamil' },
    { value: 'Hindi', label: 'Hindi' },
    { value: 'Bengali', label: 'Bengali' }
  ];

  const nationalityOptions = [
    { value: 'all', label: 'All Nationalities' },
    { value: 'Bangladesh', label: 'Bangladesh' },
    { value: 'India', label: 'India' },
    { value: 'Vietnam', label: 'Vietnam' },
    { value: 'Malaysia', label: 'Malaysia' },
    { value: 'China', label: 'China' },
    { value: 'Philippines', label: 'Philippines' }
  ];

  return (
    <div className="bg-white rounded-xl shadow-trust">
      {/* Filter Header */}
      <div className="flex items-center justify-between p-4 border-b border-border lg:hidden">
        <h3 className="font-semibold text-text-primary">Filters</h3>
        <Button 
          variant="ghost" 
          size="sm"
          onClick={onToggle}
        >
          <Icon name={isOpen ? "X" : "Filter"} size={20} />
        </Button>
      </div>
      {/* Filter Content */}
      <div className={`${isOpen ? 'block' : 'hidden'} lg:block`}>
        <div className="p-4 space-y-4">
          {/* Industry Filter */}
          <Select
            label="Industry"
            options={industryOptions}
            value={filters?.industry}
            onChange={(value) => onFilterChange('industry', value)}
            className="mb-4"
          />

          {/* Experience Level Filter */}
          <Select
            label="Experience Level"
            options={experienceOptions}
            value={filters?.experienceLevel}
            onChange={(value) => onFilterChange('experienceLevel', value)}
            className="mb-4"
          />

          {/* Availability Filter */}
          <Select
            label="Availability"
            options={availabilityOptions}
            value={filters?.availability}
            onChange={(value) => onFilterChange('availability', value)}
            className="mb-4"
          />

          {/* Salary Range Filter */}
          <Select
            label="Salary Range"
            options={salaryOptions}
            value={filters?.salaryRange}
            onChange={(value) => onFilterChange('salaryRange', value)}
            className="mb-4"
          />

          {/* Language Filter */}
          <Select
            label="Language Skills"
            options={languageOptions}
            value={filters?.language}
            onChange={(value) => onFilterChange('language', value)}
            className="mb-4"
          />

          {/* Nationality Filter */}
          <Select
            label="Nationality"
            options={nationalityOptions}
            value={filters?.nationality}
            onChange={(value) => onFilterChange('nationality', value)}
            className="mb-4"
          />

          {/* Clear Filters Button */}
          <Button 
            variant="outline" 
            fullWidth
            onClick={onClearFilters}
            className="mt-6"
          >
            <Icon name="RotateCcw" size={16} className="mr-2" />
            Clear All Filters
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;