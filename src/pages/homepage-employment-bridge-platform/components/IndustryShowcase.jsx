import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const IndustryShowcase = () => {
  const industries = [
    {
      id: 1,
      title: "Food & Beverage",
      description: "From kitchen staff to restaurant managers, we connect F&B talent with Singapore's vibrant dining scene.",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop",
      icon: "ChefHat",
      availableWorkers: 234,
      averageSalary: "S$2,200 - S$4,500",
      positions: ["Chef", "Kitchen Helper", "Server", "Manager"],
      growth: "+15%",
      color: "secondary"
    },
    {
      id: 2,
      title: "Construction",
      description: "Skilled construction workers and supervisors for Singapore\'s booming infrastructure projects.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop",
      icon: "HardHat",
      availableWorkers: 189,
      averageSalary: "S$2,800 - S$5,200",
      positions: ["Supervisor", "Skilled Worker", "Safety Officer", "Foreman"],
      growth: "+22%",
      color: "trust"
    },
    {
      id: 3,
      title: "Caregiving",
      description: "Compassionate caregivers for elderly care, healthcare assistance, and family support services.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
      icon: "Heart",
      availableWorkers: 156,
      averageSalary: "S$2,500 - S$4,200",
      positions: ["Caregiver", "Nurse Aide", "Companion", "Therapist"],
      growth: "+18%",
      color: "success"
    },
    {
      id: 4,
      title: "Domestic Services",
      description: "Professional domestic helpers and household management specialists for Singapore families.",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop",
      icon: "Home",
      availableWorkers: 298,
      averageSalary: "S$1,800 - S$3,500",
      positions: ["Domestic Helper", "Housekeeper", "Nanny", "Cook"],
      growth: "+12%",
      color: "primary"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-surface to-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Industry Opportunities
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Explore diverse career paths across Singapore's key industries with real-time worker availability and salary insights.
            </p>
          </div>

          {/* Industries Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {industries?.map((industry) => (
              <div key={industry?.id} className="group">
                <div className="bg-white rounded-2xl overflow-hidden shadow-trust hover:shadow-trust-lg transition-trust hover:-translate-y-1">
                  {/* Image Header */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={industry?.image}
                      alt={industry?.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    
                    {/* Industry Icon */}
                    <div className={`absolute top-4 left-4 w-12 h-12 rounded-lg bg-${industry?.color === 'primary' ? 'primary' : industry?.color === 'secondary' ? 'secondary' : industry?.color === 'trust' ? 'trust' : 'success'}/90 backdrop-blur-sm flex items-center justify-center`}>
                      <Icon 
                        name={industry?.icon} 
                        size={24} 
                        className="text-white" 
                      />
                    </div>

                    {/* Growth Badge */}
                    <div className="absolute top-4 right-4 px-3 py-1 bg-success/90 backdrop-blur-sm rounded-full">
                      <div className="flex items-center space-x-1">
                        <Icon name="TrendingUp" size={14} className="text-white" />
                        <span className="text-xs font-medium text-white">{industry?.growth}</span>
                      </div>
                    </div>

                    {/* Available Workers */}
                    <div className="absolute bottom-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full">
                      <div className="flex items-center space-x-1">
                        <Icon name="Users" size={14} className="text-text-primary" />
                        <span className="text-xs font-medium text-text-primary">
                          {industry?.availableWorkers} Available
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-primary transition-colors">
                      {industry?.title}
                    </h3>
                    <p className="text-text-secondary mb-4 leading-relaxed">
                      {industry?.description}
                    </p>

                    {/* Salary Range */}
                    <div className="flex items-center space-x-2 mb-4">
                      <Icon name="DollarSign" size={16} className="text-success" />
                      <span className="text-sm font-medium text-text-primary">
                        {industry?.averageSalary}
                      </span>
                      <span className="text-xs text-text-muted">per month</span>
                    </div>

                    {/* Popular Positions */}
                    <div className="mb-6">
                      <div className="text-xs font-medium text-text-muted mb-2">Popular Positions:</div>
                      <div className="flex flex-wrap gap-2">
                        {industry?.positions?.map((position, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-surface text-xs font-medium text-text-secondary rounded-md"
                          >
                            {position}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <Link
                      to="/employer-partnership-center"
                      className="flex items-center justify-between w-full p-3 bg-surface rounded-lg hover:bg-primary hover:text-white transition-trust group/cta"
                    >
                      <span className="text-sm font-medium">View Available Workers</span>
                      <Icon 
                        name="ArrowRight" 
                        size={16} 
                        className="group-hover/cta:translate-x-1 transition-transform" 
                      />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Industry Stats */}
          <div className="bg-white rounded-2xl p-8 shadow-trust">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">877</div>
                <div className="text-sm text-text-secondary">Total Available Workers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary mb-2">450+</div>
                <div className="text-sm text-text-secondary">Partner Companies</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-success mb-2">98%</div>
                <div className="text-sm text-text-secondary">Placement Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-trust mb-2">3.2</div>
                <div className="text-sm text-text-secondary">Avg. Months to Placement</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryShowcase;