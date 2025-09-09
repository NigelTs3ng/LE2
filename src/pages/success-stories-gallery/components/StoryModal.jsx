import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';


const StoryModal = ({ story, isOpen, onClose, onShare }) => {
  const [activeTab, setActiveTab] = useState('story');

  if (!isOpen || !story) return null;

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

  const handleShare = (platform) => {
    onShare(story, platform);
  };

  const tabs = [
    { id: 'story', name: 'Full Story', icon: 'BookOpen' },
    { id: 'journey', name: 'Career Journey', icon: 'TrendingUp' },
    { id: 'family', name: 'Family Impact', icon: 'Users' },
    { id: 'advice', name: 'Advice', icon: 'MessageSquare' }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        {/* Background overlay */}
        <div 
          className="fixed inset-0 transition-opacity bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal panel */}
        <div className="inline-block w-full max-w-4xl my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
          {/* Modal Header */}
          <div className="relative">
            <div className="aspect-video bg-gradient-to-br from-primary to-secondary relative overflow-hidden">
              {story?.heroImage && (
                <Image
                  src={story?.heroImage}
                  alt={`${story?.workerName} success story`}
                  className="w-full h-full object-cover"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <Icon name="X" size={20} className="text-white" />
              </button>

              {/* Story title overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center space-x-2">
                    <span className="text-lg">{getCountryFlag(story?.originCountry)}</span>
                    <span className="text-sm font-medium text-white">{story?.originCountry}</span>
                  </div>
                  <div className="bg-success/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    <span className="text-sm font-medium text-white">{story?.successType}</span>
                  </div>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {story?.headline}
                </h2>
                <p className="text-white/90 text-lg">
                  {story?.workerName} • {story?.currentRole}
                </p>
              </div>
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-6">
            {/* Tab Navigation */}
            <div className="flex items-center space-x-1 mb-6 bg-surface rounded-lg p-1">
              {tabs?.map((tab) => (
                <button
                  key={tab?.id}
                  onClick={() => setActiveTab(tab?.id)}
                  className={`flex-1 flex items-center justify-center space-x-2 px-4 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
                    activeTab === tab?.id
                      ? 'bg-white text-primary shadow-sm'
                      : 'text-text-secondary hover:text-primary'
                  }`}
                >
                  <Icon name={tab?.icon} size={16} />
                  <span>{tab?.name}</span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="min-h-[400px]">
              {activeTab === 'story' && (
                <div className="space-y-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-2 space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold text-text-primary mb-3">The Journey</h3>
                        <div className="prose prose-sm max-w-none text-text-secondary">
                          <p>{story?.fullStory}</p>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-text-primary mb-3">Key Achievements</h3>
                        <div className="grid grid-cols-2 gap-4">
                          {story?.achievements?.map((achievement, index) => (
                            <div key={index} className="flex items-start space-x-3 p-3 bg-surface rounded-lg">
                              <Icon name="CheckCircle" size={16} className="text-success mt-0.5" />
                              <span className="text-sm text-text-secondary">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-surface rounded-lg p-4">
                        <h4 className="font-semibold text-text-primary mb-3">Quick Facts</h4>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-text-muted">Time in Singapore</span>
                            <span className="text-sm font-medium text-text-primary">{story?.timeInSingapore}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-text-muted">Family Supported</span>
                            <span className="text-sm font-medium text-text-primary">{story?.familySupported} members</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-text-muted">Skills Gained</span>
                            <span className="text-sm font-medium text-text-primary">{story?.skillsDeveloped}</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-success/10 to-primary/10 rounded-lg p-4">
                        <h4 className="font-semibold text-text-primary mb-3">Salary Growth</h4>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-text-muted">Before</span>
                            <span className="text-sm font-medium text-text-secondary">{formatSalary(story?.previousSalary)}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-text-muted">Current</span>
                            <span className="text-lg font-bold text-success">{formatSalary(story?.currentSalary)}</span>
                          </div>
                          <div className="flex items-center justify-center pt-2">
                            <div className="flex items-center space-x-2 text-success">
                              <Icon name="TrendingUp" size={16} />
                              <span className="text-sm font-semibold">
                                +{Math.round(((story?.currentSalary - story?.previousSalary) / story?.previousSalary) * 100)}% increase
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'journey' && (
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-text-primary">Career Timeline</h3>
                  <div className="space-y-4">
                    {story?.careerTimeline?.map((milestone, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                          <span className="text-white font-semibold text-sm">{index + 1}</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h4 className="font-semibold text-text-primary">{milestone?.title}</h4>
                            <span className="text-sm text-text-muted">{milestone?.date}</span>
                          </div>
                          <p className="text-sm text-text-secondary">{milestone?.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'family' && (
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-text-primary">Family Impact</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-text-primary mb-3">Before LeadingEdge</h4>
                      <div className="bg-surface rounded-lg p-4">
                        <p className="text-sm text-text-secondary">{story?.familyBefore}</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-3">After Success</h4>
                      <div className="bg-gradient-to-br from-success/10 to-primary/10 rounded-lg p-4">
                        <p className="text-sm text-text-secondary">{story?.familyAfter}</p>
                      </div>
                    </div>
                  </div>
                  
                  {story?.familyPhotos && (
                    <div>
                      <h4 className="font-semibold text-text-primary mb-3">Family Photos</h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {story?.familyPhotos?.map((photo, index) => (
                          <div key={index} className="aspect-square rounded-lg overflow-hidden">
                            <Image
                              src={photo?.url}
                              alt={photo?.caption}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'advice' && (
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-text-primary">Advice for Others</h3>
                  <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <Image
                          src={story?.workerPhoto}
                          alt={story?.workerName}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <blockquote className="text-text-secondary italic text-lg leading-relaxed">
                          "{story?.advice}"
                        </blockquote>
                        <cite className="text-sm text-text-muted mt-3 block">
                          — {story?.workerName}, {story?.currentRole}
                        </cite>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-text-primary mb-3">Key Tips</h4>
                    <div className="space-y-3">
                      {story?.tips?.map((tip, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <Icon name="Lightbulb" size={16} className="text-secondary mt-0.5" />
                          <span className="text-sm text-text-secondary">{tip}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between pt-6 border-t border-border">
              <div className="flex items-center space-x-2 text-sm text-text-muted">
                <span>Success through</span>
                <span className="font-semibold text-primary">LeadingEdge Asia</span>
                <Icon name="Shield" size={14} className="text-success" />
              </div>
              
              <div className="flex items-center space-x-3">
                <span className="text-sm text-text-muted">Share this story:</span>
                <button
                  onClick={() => handleShare('facebook')}
                  className="w-10 h-10 rounded-full bg-surface hover:bg-primary hover:text-white transition-colors flex items-center justify-center"
                >
                  <Icon name="Facebook" size={16} />
                </button>
                <button
                  onClick={() => handleShare('whatsapp')}
                  className="w-10 h-10 rounded-full bg-surface hover:bg-success hover:text-white transition-colors flex items-center justify-center"
                >
                  <Icon name="MessageCircle" size={16} />
                </button>
                <button
                  onClick={() => handleShare('copy')}
                  className="w-10 h-10 rounded-full bg-surface hover:bg-secondary hover:text-white transition-colors flex items-center justify-center"
                >
                  <Icon name="Share2" size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryModal;