import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const StoryCard = ({ story, onShare, onViewDetails }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };

  const handleShare = (platform) => {
    onShare(story, platform);
  };

  const formatSalary = (amount) => {
    return `S$${amount?.toLocaleString()}`;
  };

  const getCountryFlag = (country) => {
    const flags = {
      'Bangladesh': '🇧🇩',
      'India': '🇮🇳',
      'Vietnam': '🇻🇳',
      'Malaysia': '🇲🇾',
      'China': '🇨🇳',
      'Philippines': '🇵🇭'
    };
    return flags?.[country] || '🌏';
  };

  const getIndustryIcon = (industry) => {
    const icons = {
      'Food & Beverage': 'ChefHat',
      'Construction': 'HardHat',
      'Healthcare': 'Heart',
      'Domestic Services': 'Home',
      'Manufacturing': 'Factory',
      'Retail': 'ShoppingBag'
    };
    return icons?.[industry] || 'Briefcase';
  };

  return (
    <div className="bg-white rounded-xl shadow-trust hover:shadow-trust-lg transition-all duration-300 overflow-hidden group">
      {/* Story Header */}
      <div className="relative">
        <div className="aspect-video bg-gradient-to-br from-surface to-muted relative overflow-hidden">
          {story?.videoThumbnail ? (
            <div className="relative w-full h-full">
              <Image
                src={story?.videoThumbnail}
                alt={`${story?.workerName} success story`}
                className="w-full h-full object-cover"
              />
              {!isVideoPlaying && (
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <button
                    onClick={handleVideoPlay}
                    className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors group-hover:scale-110 transform duration-200"
                  >
                    <Icon name="Play" size={24} className="text-primary ml-1" />
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <Image
                src={story?.workerPhoto}
                alt={story?.workerName}
                className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
              />
            </div>
          )}
        </div>

        {/* Country & Industry Badges */}
        <div className="absolute top-4 left-4 flex items-center space-x-2">
          <div className="bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center space-x-2">
            <span className="text-lg">{getCountryFlag(story?.originCountry)}</span>
            <span className="text-xs font-medium text-text-primary">{story?.originCountry}</span>
          </div>
          <div className="bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center space-x-2">
            <Icon name={getIndustryIcon(story?.industry)} size={14} className="text-primary" />
            <span className="text-xs font-medium text-text-primary">{story?.industry}</span>
          </div>
        </div>

        {/* Success Type Badge */}
        <div className="absolute top-4 right-4">
          <div className="bg-success text-white px-3 py-1.5 rounded-full">
            <span className="text-xs font-medium">{story?.successType}</span>
          </div>
        </div>
      </div>
      {/* Story Content */}
      <div className="p-6">
        {/* Headline */}
        <h3 className="text-lg font-semibold text-text-primary mb-3 line-clamp-2 group-hover:text-primary transition-colors">
          {story?.headline}
        </h3>

        {/* Journey Summary */}
        <div className="mb-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex-1">
              <p className="text-text-muted font-medium">From:</p>
              <p className="text-text-secondary">{story?.previousRole}</p>
            </div>
            <Icon name="ArrowRight" size={16} className="text-primary mx-3" />
            <div className="flex-1">
              <p className="text-text-muted font-medium">To:</p>
              <p className="text-text-secondary">{story?.currentRole}</p>
            </div>
          </div>
        </div>

        {/* Salary Progression */}
        <div className="bg-surface rounded-lg p-4 mb-4">
          <div className="flex items-center justify-between">
            <div className="text-center">
              <p className="text-xs text-text-muted font-medium">Previous Salary</p>
              <p className="text-lg font-semibold text-text-secondary">{formatSalary(story?.previousSalary)}</p>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="TrendingUp" size={20} className="text-success" />
              <div className="text-center">
                <p className="text-xs text-success font-medium">
                  +{Math.round(((story?.currentSalary - story?.previousSalary) / story?.previousSalary) * 100)}%
                </p>
              </div>
            </div>
            <div className="text-center">
              <p className="text-xs text-text-muted font-medium">Current Salary</p>
              <p className="text-lg font-semibold text-success">{formatSalary(story?.currentSalary)}</p>
            </div>
          </div>
        </div>

        {/* Key Highlights */}
        <div className="mb-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center space-x-2">
              <Icon name="Calendar" size={14} className="text-primary" />
              <span className="text-xs text-text-secondary">{story?.timeInSingapore}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Users" size={14} className="text-primary" />
              <span className="text-xs text-text-secondary">{story?.familySupported} family members</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Award" size={14} className="text-primary" />
              <span className="text-xs text-text-secondary">{story?.skillsDeveloped} new skills</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Target" size={14} className="text-primary" />
              <span className="text-xs text-text-secondary">{story?.futureGoal}</span>
            </div>
          </div>
        </div>

        {/* Story Preview */}
        <p className="text-sm text-text-secondary mb-4 line-clamp-3">
          {story?.storyPreview}
        </p>

        {/* Action Buttons */}
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onViewDetails(story)}
            className="flex-1 mr-2"
          >
            Read Full Story
          </Button>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={() => handleShare('facebook')}
              className="w-8 h-8 rounded-full bg-surface hover:bg-primary hover:text-white transition-colors flex items-center justify-center"
            >
              <Icon name="Facebook" size={14} />
            </button>
            <button
              onClick={() => handleShare('whatsapp')}
              className="w-8 h-8 rounded-full bg-surface hover:bg-success hover:text-white transition-colors flex items-center justify-center"
            >
              <Icon name="MessageCircle" size={14} />
            </button>
            <button
              onClick={() => handleShare('copy')}
              className="w-8 h-8 rounded-full bg-surface hover:bg-secondary hover:text-white transition-colors flex items-center justify-center"
            >
              <Icon name="Share2" size={14} />
            </button>
          </div>
        </div>
      </div>
      {/* LeadingEdge Attribution */}
      <div className="px-6 pb-4">
        <div className="flex items-center justify-center space-x-2 text-xs text-text-muted">
          <span>Success through</span>
          <span className="font-semibold text-primary">LeadingEdge Asia</span>
          <Icon name="Shield" size={12} className="text-success" />
        </div>
      </div>
    </div>
  );
};

export default StoryCard;