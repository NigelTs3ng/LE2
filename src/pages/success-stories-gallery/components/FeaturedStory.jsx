import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FeaturedStory = ({ story, onViewDetails, onShare }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

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

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };

  const handleShare = (platform) => {
    onShare(story, platform);
  };

  return (
    <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl overflow-hidden shadow-trust-xl mb-12">
      <div className="relative">
        {/* Featured Badge */}
        <div className="absolute top-6 left-6 z-10">
          <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full flex items-center space-x-2">
            <Icon name="Star" size={16} className="text-white" />
            <span className="text-white font-semibold text-sm">Featured Success Story</span>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-0">
          {/* Left Side - Story Content */}
          <div className="p-8 lg:p-12 text-white">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center space-x-2">
                <span className="text-lg">{getCountryFlag(story?.originCountry)}</span>
                <span className="text-sm font-medium">{story?.originCountry}</span>
              </div>
              <div className="bg-success/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                <span className="text-sm font-medium">{story?.successType}</span>
              </div>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
              {story?.headline}
            </h2>

            <p className="text-white/90 text-lg mb-6 leading-relaxed">
              {story?.featuredDescription}
            </p>

            {/* Journey Summary */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-white/70 text-sm font-medium mb-1">From:</p>
                  <p className="text-white font-semibold">{story?.previousRole}</p>
                  <p className="text-white/90 text-sm">{formatSalary(story?.previousSalary)}/month</p>
                </div>
                <div>
                  <p className="text-white/70 text-sm font-medium mb-1">To:</p>
                  <p className="text-white font-semibold">{story?.currentRole}</p>
                  <p className="text-success font-semibold text-sm">{formatSalary(story?.currentSalary)}/month</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center mt-4 pt-4 border-t border-white/20">
                <div className="flex items-center space-x-2 text-success">
                  <Icon name="TrendingUp" size={20} />
                  <span className="font-bold text-lg">
                    +{Math.round(((story?.currentSalary - story?.previousSalary) / story?.previousSalary) * 100)}% salary increase
                  </span>
                </div>
              </div>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3">
                <Icon name="Calendar" size={16} className="text-white/70" />
                <span className="text-white/90 text-sm">{story?.timeInSingapore} in Singapore</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Users" size={16} className="text-white/70" />
                <span className="text-white/90 text-sm">{story?.familySupported} family members supported</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Award" size={16} className="text-white/70" />
                <span className="text-white/90 text-sm">{story?.skillsDeveloped} new skills gained</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Target" size={16} className="text-white/70" />
                <span className="text-white/90 text-sm">{story?.futureGoal}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="secondary"
                size="lg"
                onClick={() => onViewDetails(story)}
                className="flex-1"
                iconName="BookOpen"
                iconPosition="left"
              >
                Read Full Story
              </Button>
              
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleShare('facebook')}
                  className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <Icon name="Facebook" size={20} className="text-white" />
                </button>
                <button
                  onClick={() => handleShare('whatsapp')}
                  className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <Icon name="MessageCircle" size={20} className="text-white" />
                </button>
                <button
                  onClick={() => handleShare('copy')}
                  className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <Icon name="Share2" size={20} className="text-white" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Media Content */}
          <div className="relative">
            <div className="aspect-square lg:aspect-auto lg:h-full bg-white/10 backdrop-blur-sm relative overflow-hidden">
              {story?.featuredVideo ? (
                <div className="relative w-full h-full">
                  <Image
                    src={story?.featuredVideo?.thumbnail}
                    alt={`${story?.workerName} video testimonial`}
                    className="w-full h-full object-cover"
                  />
                  {!isVideoPlaying && (
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <button
                        onClick={handleVideoPlay}
                        className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors hover:scale-110 transform duration-200"
                      >
                        <Icon name="Play" size={32} className="text-primary ml-1" />
                      </button>
                    </div>
                  )}
                  
                  {/* Video Info Overlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4">
                      <div className="flex items-center space-x-3 mb-2">
                        <Image
                          src={story?.workerPhoto}
                          alt={story?.workerName}
                          className="w-10 h-10 rounded-full object-cover border-2 border-white"
                        />
                        <div>
                          <p className="text-white font-semibold">{story?.workerName}</p>
                          <p className="text-white/80 text-sm">{story?.currentRole}</p>
                        </div>
                      </div>
                      <p className="text-white/90 text-sm">
                        {story?.featuredVideo?.description}
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="w-full h-full flex items-center justify-center p-8">
                  <div className="text-center">
                    <Image
                      src={story?.workerPhoto}
                      alt={story?.workerName}
                      className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-xl mx-auto mb-4"
                    />
                    <h3 className="text-white text-xl font-semibold mb-2">{story?.workerName}</h3>
                    <p className="text-white/80">{story?.currentRole}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* LeadingEdge Attribution */}
        <div className="absolute bottom-6 right-6">
          <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full flex items-center space-x-2">
            <span className="text-white/90 text-sm">Success through</span>
            <span className="text-white font-semibold text-sm">LeadingEdge Asia</span>
            <Icon name="Shield" size={14} className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedStory;