import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const WorldMapVisualization = () => {
  const [activeCountry, setActiveCountry] = useState(null);
  const [animationPhase, setAnimationPhase] = useState(0);

  const countries = [
    {
      id: 'bangladesh',
      name: 'Bangladesh',
      flag: '🇧🇩',
      workers: 847,
      successRate: 96,
      avgSalary: 'S$2,400',
      topSkills: ['Hospitality', 'Construction', 'Manufacturing'],
      position: { x: 72, y: 35 }
    },
    {
      id: 'india',
      name: 'India',
      flag: '🇮🇳',
      workers: 1234,
      successRate: 98,
      avgSalary: 'S$2,800',
      topSkills: ['IT Support', 'Healthcare', 'Engineering'],
      position: { x: 68, y: 42 }
    },
    {
      id: 'vietnam',
      name: 'Vietnam',
      flag: '🇻🇳',
      workers: 623,
      successRate: 94,
      avgSalary: 'S$2,200',
      topSkills: ['Manufacturing', 'F&B', 'Logistics'],
      position: { x: 78, y: 48 }
    },
    {
      id: 'malaysia',
      name: 'Malaysia',
      flag: '🇲🇾',
      workers: 456,
      successRate: 99,
      avgSalary: 'S$2,600',
      topSkills: ['Finance', 'Retail', 'Tourism'],
      position: { x: 76, y: 52 }
    },
    {
      id: 'china',
      name: 'China',
      flag: '🇨🇳',
      workers: 789,
      successRate: 97,
      avgSalary: 'S$3,200',
      topSkills: ['Technology', 'Manufacturing', 'Trade'],
      position: { x: 75, y: 28 }
    }
  ];

  const singapore = { x: 78, y: 54 };

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimationPhase((prev) => (prev + 1) % 3);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5 cultural-pattern">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Connecting Southeast Asia to Singapore
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Our network spans five countries, creating legitimate pathways for skilled workers to build successful careers in Singapore.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Map Visualization */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 shadow-trust-lg">
                <div className="relative w-full h-96 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl overflow-hidden">
                  {/* Simplified World Map Background */}
                  <svg viewBox="0 0 100 60" className="w-full h-full opacity-20">
                    <path d="M15,25 Q20,20 25,25 L30,30 Q35,25 40,30 L45,35 Q50,30 55,35 L60,40 Q65,35 70,40 L75,45 Q80,40 85,45" 
                          stroke="currentColor" strokeWidth="0.5" fill="none" />
                    <path d="M10,35 Q15,30 20,35 L25,40 Q30,35 35,40 L40,45 Q45,40 50,45 L55,50 Q60,45 65,50 L70,55 Q75,50 80,55" 
                          stroke="currentColor" strokeWidth="0.5" fill="none" />
                  </svg>

                  {/* Country Markers */}
                  {countries?.map((country) => (
                    <div key={country?.id}>
                      {/* Country Dot */}
                      <div
                        className={`absolute w-4 h-4 rounded-full cursor-pointer transition-all duration-300 ${
                          activeCountry === country?.id 
                            ? 'bg-secondary scale-150 z-20' :'bg-primary hover:bg-secondary hover:scale-125 z-10'
                        }`}
                        style={{
                          left: `${country?.position?.x}%`,
                          top: `${country?.position?.y}%`,
                          transform: 'translate(-50%, -50%)'
                        }}
                        onClick={() => setActiveCountry(activeCountry === country?.id ? null : country?.id)}
                      >
                        {/* Pulse Animation */}
                        <div className={`absolute inset-0 rounded-full bg-primary/30 animate-ping ${
                          animationPhase === 0 ? 'opacity-100' : 'opacity-0'
                        }`}></div>
                      </div>

                      {/* Connection Line to Singapore */}
                      <svg
                        className="absolute inset-0 w-full h-full pointer-events-none"
                        style={{ zIndex: 1 }}
                      >
                        <defs>
                          <linearGradient id={`gradient-${country?.id}`} x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="var(--color-secondary)" stopOpacity="0.8" />
                          </linearGradient>
                        </defs>
                        <line
                          x1={`${country?.position?.x}%`}
                          y1={`${country?.position?.y}%`}
                          x2={`${singapore?.x}%`}
                          y2={`${singapore?.y}%`}
                          stroke={`url(#gradient-${country?.id})`}
                          strokeWidth="2"
                          strokeDasharray="5,5"
                          className={`transition-opacity duration-500 ${
                            activeCountry === country?.id ? 'opacity-100' : 'opacity-30'
                          }`}
                        >
                          <animate
                            attributeName="stroke-dashoffset"
                            values="0;-10"
                            dur="1s"
                            repeatCount="indefinite"
                          />
                        </line>
                      </svg>

                      {/* Country Label */}
                      <div
                        className={`absolute pointer-events-none transition-all duration-300 ${
                          activeCountry === country?.id ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                        }`}
                        style={{
                          left: `${country?.position?.x}%`,
                          top: `${country?.position?.y - 8}%`,
                          transform: 'translate(-50%, -100%)'
                        }}
                      >
                        <div className="bg-white px-3 py-1 rounded-lg shadow-trust text-xs font-medium text-text-primary whitespace-nowrap">
                          {country?.flag} {country?.name}
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Singapore Marker */}
                  <div
                    className="absolute w-6 h-6 bg-success rounded-full z-20 authority-glow"
                    style={{
                      left: `${singapore?.x}%`,
                      top: `${singapore?.y}%`,
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon name="MapPin" size={16} className="text-white" />
                    </div>
                  </div>

                  {/* Singapore Label */}
                  <div
                    className="absolute pointer-events-none"
                    style={{
                      left: `${singapore?.x}%`,
                      top: `${singapore?.y - 8}%`,
                      transform: 'translate(-50%, -100%)'
                    }}
                  >
                    <div className="bg-success px-3 py-1 rounded-lg shadow-trust text-xs font-medium text-white whitespace-nowrap">
                      🇸🇬 Singapore
                    </div>
                  </div>
                </div>

                {/* Map Legend */}
                <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span className="text-text-secondary">Source Countries</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-success rounded-full"></div>
                    <span className="text-text-secondary">Singapore</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-0.5 bg-gradient-to-r from-primary to-secondary"></div>
                    <span className="text-text-secondary">Employment Bridge</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Country Details Panel */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-6 shadow-trust-lg sticky top-8">
                {activeCountry ? (
                  <div>
                    {(() => {
                      const country = countries?.find(c => c?.id === activeCountry);
                      return (
                        <div>
                          <div className="flex items-center space-x-3 mb-6">
                            <span className="text-3xl">{country?.flag}</span>
                            <div>
                              <h3 className="text-xl font-bold text-text-primary">{country?.name}</h3>
                              <p className="text-sm text-text-secondary">Employment Partner</p>
                            </div>
                          </div>
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-text-secondary">Available Workers</span>
                              <span className="font-semibold text-primary">{country?.workers?.toLocaleString()}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-text-secondary">Success Rate</span>
                              <span className="font-semibold text-success">{country?.successRate}%</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-text-secondary">Avg. Salary</span>
                              <span className="font-semibold text-secondary">{country?.avgSalary}</span>
                            </div>
                          </div>
                          <div className="mt-6">
                            <h4 className="text-sm font-medium text-text-primary mb-3">Top Skills</h4>
                            <div className="flex flex-wrap gap-2">
                              {country?.topSkills?.map((skill, index) => (
                                <span
                                  key={index}
                                  className="px-3 py-1 bg-surface text-xs font-medium text-text-secondary rounded-full"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="mt-6 pt-6 border-t border-border">
                            <button
                              onClick={() => setActiveCountry(null)}
                              className="w-full p-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-trust text-sm font-medium"
                            >
                              View All Countries
                            </button>
                          </div>
                        </div>
                      );
                    })()}
                  </div>
                ) : (
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-surface rounded-full flex items-center justify-center">
                      <Icon name="Globe" size={32} className="text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-text-primary mb-2">
                      Explore Our Network
                    </h3>
                    <p className="text-sm text-text-secondary mb-6">
                      Click on any country marker to see detailed information about our employment partnerships and available opportunities.
                    </p>
                    <div className="space-y-2">
                      {countries?.map((country) => (
                        <button
                          key={country?.id}
                          onClick={() => setActiveCountry(country?.id)}
                          className="w-full p-2 text-left hover:bg-surface rounded-lg transition-trust flex items-center space-x-3"
                        >
                          <span className="text-lg">{country?.flag}</span>
                          <div className="flex-1">
                            <div className="text-sm font-medium text-text-primary">{country?.name}</div>
                            <div className="text-xs text-text-secondary">{country?.workers} workers available</div>
                          </div>
                          <Icon name="ChevronRight" size={16} className="text-text-muted" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorldMapVisualization;