import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const WorkerProfileCard = ({ worker, onContactWorker }) => {
  const getExperienceColor = (level) => {
    switch (level) {
      case 'Entry Level': return 'bg-blue-100 text-blue-800';
      case 'Experienced': return 'bg-green-100 text-green-800';
      case 'Senior': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getAvailabilityColor = (status) => {
    switch (status) {
      case 'Immediate': return 'bg-green-100 text-green-800';
      case 'Within 2 weeks': return 'bg-yellow-100 text-yellow-800';
      case 'Within 1 month': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-trust hover:shadow-trust-lg transition-all duration-300 overflow-hidden">
      {/* Header with worker photo and basic info */}
      <div className="relative">
        <div className="h-48 bg-gradient-to-br from-surface to-muted overflow-hidden">
          <Image 
            src={worker?.photo}
            alt={`${worker?.name} - ${worker?.role}`}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Availability badge */}
        <div className="absolute top-3 right-3">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getAvailabilityColor(worker?.availability)}`}>
            {worker?.availability}
          </span>
        </div>

        {/* Verification badge */}
        {worker?.verified && (
          <div className="absolute top-3 left-3">
            <div className="bg-success text-white px-2 py-1 rounded-full flex items-center space-x-1">
              <Icon name="Shield" size={12} />
              <span className="text-xs font-medium">Verified</span>
            </div>
          </div>
        )}
      </div>
      {/* Content */}
      <div className="p-5">
        {/* Name and role */}
        <div className="mb-3">
          <h3 className="font-semibold text-lg text-text-primary">{worker?.name}</h3>
          <p className="text-text-secondary">{worker?.role}</p>
        </div>

        {/* Key details */}
        <div className="space-y-3 mb-4">
          {/* Experience and age */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Calendar" size={16} className="text-text-muted" />
              <span className="text-sm text-text-secondary">{worker?.experience} years exp.</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="User" size={16} className="text-text-muted" />
              <span className="text-sm text-text-secondary">{worker?.age} years old</span>
            </div>
          </div>

          {/* Location and languages */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="MapPin" size={16} className="text-text-muted" />
              <span className="text-sm text-text-secondary">{worker?.nationality}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="MessageCircle" size={16} className="text-text-muted" />
              <span className="text-sm text-text-secondary">{worker?.languages?.join(', ')}</span>
            </div>
          </div>

          {/* Experience level badge */}
          <div className="flex items-center justify-between">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getExperienceColor(worker?.experienceLevel)}`}>
              {worker?.experienceLevel}
            </span>
            <div className="flex items-center space-x-2">
              <Icon name="DollarSign" size={16} className="text-text-muted" />
              <span className="text-sm font-medium text-text-primary">{worker?.expectedSalary}</span>
            </div>
          </div>
        </div>

        {/* Certifications */}
        {worker?.certifications && worker?.certifications?.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-medium text-text-primary mb-2">Certifications</h4>
            <div className="flex flex-wrap gap-1">
              {worker?.certifications?.map((cert, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 bg-trust/10 text-trust text-xs rounded"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Skills */}
        <div className="mb-4">
          <h4 className="text-sm font-medium text-text-primary mb-2">Key Skills</h4>
          <div className="flex flex-wrap gap-1">
            {worker?.skills?.slice(0, 4)?.map((skill, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-surface text-text-secondary text-xs rounded"
              >
                {skill}
              </span>
            ))}
            {worker?.skills?.length > 4 && (
              <span className="px-2 py-1 bg-surface text-text-secondary text-xs rounded">
                +{worker?.skills?.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Contact button */}
        <Button 
          variant="default" 
          fullWidth
          onClick={() => onContactWorker(worker)}
          className="mt-4"
        >
          <Icon name="MessageSquare" size={16} className="mr-2" />
          Contact Now
        </Button>
      </div>
    </div>
  );
};

export default WorkerProfileCard;