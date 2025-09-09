import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const IndustryOpportunities = ({ country }) => {
  const industryData = {
    bangladesh: {
      title: "Culinary Excellence Opportunities",
      subtitle: "Leverage Bangladesh\'s rich culinary heritage in Singapore\'s diverse food scene",
      industries: [
        {
          id: 1,
          name: "Restaurant & Hotel Kitchens",
          icon: "ChefHat",
          image: "https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?w=600&h=400&fit=crop",
          demand: "High",
          avgSalary: "SGD 2,800 - 4,200",
          positions: ["Head Chef", "Sous Chef", "Kitchen Supervisor", "Specialty Cook"],
          description: "Singapore\'s hospitality industry values authentic Bangladeshi cuisine expertise",
          growth: "+15% annually"
        },
        {
          id: 2,
          name: "Food Production & Processing",
          icon: "Factory",
          image: "https://images.pexels.com/photos/5591663/pexels-photo-5591663.jpeg?w=600&h=400&fit=crop",
          demand: "Very High",
          avgSalary: "SGD 2,400 - 3,600",
          positions: ["Production Supervisor", "Quality Controller", "Food Safety Officer", "Line Leader"],
          description: "Growing halal food industry needs experienced production professionals",
          growth: "+22% annually"
        },
        {
          id: 3,
          name: "Construction & Infrastructure",
          icon: "HardHat",
          image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?w=600&h=400&fit=crop",
          demand: "High",
          avgSalary: "SGD 2,600 - 4,000",
          positions: ["Site Supervisor", "Skilled Tradesman", "Safety Officer", "Project Coordinator"],
          description: "Singapore\'s infrastructure development requires skilled construction professionals",
          growth: "+18% annually"
        }
      ]
    },
    india: {
      title: "Technical Skills & Innovation",
      subtitle: "Capitalize on India\'s technical expertise in Singapore\'s innovation economy",
      industries: [
        {
          id: 1,
          name: "Information Technology",
          icon: "Code",
          image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?w=600&h=400&fit=crop",
          demand: "Very High",
          avgSalary: "SGD 5,500 - 12,000",
          positions: ["Software Engineer", "Data Scientist", "Cloud Architect", "DevOps Engineer"],
          description: "Singapore\'s tech hub offers unlimited growth for Indian IT professionals",
          growth: "+28% annually"
        },
        {
          id: 2,
          name: "Engineering & Manufacturing",
          icon: "Cog",
          image: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?w=600&h=400&fit=crop",
          demand: "High",
          avgSalary: "SGD 4,200 - 8,500",
          positions: ["Project Manager", "Design Engineer", "Quality Engineer", "Operations Manager"],
          description: "Advanced manufacturing sector values Indian engineering excellence",
          growth: "+20% annually"
        },
        {
          id: 3,
          name: "Financial Services",
          icon: "TrendingUp",
          image: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?w=600&h=400&fit=crop",
          demand: "High",
          avgSalary: "SGD 4,800 - 10,000",
          positions: ["Financial Analyst", "Risk Manager", "Investment Advisor", "Compliance Officer"],
          description: "Singapore\'s financial center seeks Indian expertise in fintech and banking",
          growth: "+16% annually"
        }
      ]
    },
    vietnam: {
      title: "Manufacturing & Service Excellence",
      subtitle: "Vietnam\'s manufacturing expertise meets Singapore\'s precision standards",
      industries: [
        {
          id: 1,
          name: "Electronics Manufacturing",
          icon: "Cpu",
          image: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?w=600&h=400&fit=crop",
          demand: "Very High",
          avgSalary: "SGD 2,800 - 4,500",
          positions: ["Production Manager", "Quality Control Specialist", "Assembly Supervisor", "Technical Operator"],
          description: "Singapore\'s electronics hub values Vietnamese manufacturing precision",
          growth: "+25% annually"
        },
        {
          id: 2,
          name: "Hospitality & Tourism",
          icon: "Building",
          image: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?w=600&h=400&fit=crop",
          demand: "High",
          avgSalary: "SGD 2,400 - 4,200",
          positions: ["Guest Relations Manager", "Event Coordinator", "F&B Supervisor", "Concierge"],
          description: "Tourism industry appreciates Vietnamese hospitality and service excellence",
          growth: "+19% annually"
        },
        {
          id: 3,
          name: "Logistics & Supply Chain",
          icon: "Truck",
          image: "https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?w=600&h=400&fit=crop",
          demand: "High",
          avgSalary: "SGD 3,000 - 5,200",
          positions: ["Supply Chain Manager", "Warehouse Supervisor", "Logistics Coordinator", "Operations Analyst"],
          description: "Singapore\'s trade hub needs Vietnamese logistics expertise",
          growth: "+21% annually"
        }
      ]
    },
    malaysia: {
      title: "Multilingual Advantage",
      subtitle: "Malaysia\'s cultural diversity and proximity create unique opportunities",
      industries: [
        {
          id: 1,
          name: "Banking & Finance",
          icon: "Building2",
          image: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?w=600&h=400&fit=crop",
          demand: "High",
          avgSalary: "SGD 4,000 - 8,500",
          positions: ["Relationship Manager", "Credit Analyst", "Investment Consultant", "Branch Manager"],
          description: "Malaysian professionals excel in Singapore\'s Islamic banking sector",
          growth: "+17% annually"
        },
        {
          id: 2,
          name: "Healthcare Services",
          icon: "Heart",
          image: "https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?w=600&h=400&fit=crop",
          demand: "Very High",
          avgSalary: "SGD 3,500 - 6,800",
          positions: ["Registered Nurse", "Medical Technologist", "Healthcare Administrator", "Therapist"],
          description: "Singapore\'s healthcare expansion needs Malaysian medical professionals",
          growth: "+24% annually"
        },
        {
          id: 3,
          name: "Education & Training",
          icon: "GraduationCap",
          image: "https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?w=600&h=400&fit=crop",
          demand: "High",
          avgSalary: "SGD 3,200 - 6,200",
          positions: ["International School Teacher", "Training Specialist", "Curriculum Developer", "Education Coordinator"],
          description: "Multilingual Malaysian educators are highly valued in international schools",
          growth: "+14% annually"
        }
      ]
    },
    china: {
      title: "Specialized Skills & Leadership",
      subtitle: "China\'s industrial expertise and business acumen drive Singapore growth",
      industries: [
        {
          id: 1,
          name: "Advanced Manufacturing",
          icon: "Factory",
          image: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?w=600&h=400&fit=crop",
          demand: "Very High",
          avgSalary: "SGD 5,200 - 11,000",
          positions: ["Operations Director", "Plant Manager", "Process Engineer", "Automation Specialist"],
          description: "Singapore\'s Industry 4.0 initiatives need Chinese manufacturing leadership",
          growth: "+26% annually"
        },
        {
          id: 2,
          name: "International Trade",
          icon: "Globe",
          image: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?w=600&h=400&fit=crop",
          demand: "High",
          avgSalary: "SGD 4,500 - 9,500",
          positions: ["Trade Manager", "Business Development Director", "Market Analyst", "Regional Sales Manager"],
          description: "China-Singapore trade corridor offers immense opportunities",
          growth: "+23% annually"
        },
        {
          id: 3,
          name: "Technology & Innovation",
          icon: "Lightbulb",
          image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?w=600&h=400&fit=crop",
          demand: "Very High",
          avgSalary: "SGD 6,000 - 15,000",
          positions: ["AI Specialist", "Blockchain Developer", "IoT Engineer", "Tech Product Manager"],
          description: "Singapore\'s smart nation vision aligns with Chinese tech innovation",
          growth: "+32% annually"
        }
      ]
    }
  };

  const data = industryData?.[country] || industryData?.bangladesh;

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            {data?.title}
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            {data?.subtitle}
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {data?.industries?.map((industry) => (
            <div key={industry?.id} className="bg-white rounded-xl border border-border shadow-trust hover:shadow-trust-lg transition-all duration-300 overflow-hidden">
              {/* Industry Image */}
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src={industry?.image}
                  alt={industry?.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                  <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
                    <Icon name={industry?.icon} size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">{industry?.name}</h3>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        industry?.demand === 'Very High' ? 'bg-success text-white' : 'bg-warning text-white'
                      }`}>
                        {industry?.demand} Demand
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Industry Content */}
              <div className="p-6">
                {/* Salary & Growth */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-success/10 rounded-lg p-3 text-center">
                    <div className="font-bold text-success text-sm">{industry?.avgSalary}</div>
                    <div className="text-xs text-text-muted">Average Salary</div>
                  </div>
                  <div className="bg-trust/10 rounded-lg p-3 text-center">
                    <div className="font-bold text-trust text-sm">{industry?.growth}</div>
                    <div className="text-xs text-text-muted">Job Growth</div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-text-secondary mb-6 leading-relaxed">
                  {industry?.description}
                </p>

                {/* Available Positions */}
                <div className="mb-6">
                  <h4 className="font-semibold text-text-primary mb-3 flex items-center">
                    <Icon name="Briefcase" size={16} className="mr-2" />
                    Available Positions
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {industry?.positions?.map((position, index) => (
                      <div key={index} className="bg-surface rounded-lg px-3 py-2">
                        <span className="text-xs font-medium text-text-secondary">{position}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <button className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center space-x-2">
                  <span>Explore Opportunities</span>
                  <Icon name="ArrowRight" size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-xl border border-border p-8 shadow-trust">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Ready to Explore Your Industry?
            </h3>
            <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
              Our industry specialists will help match your skills with the perfect Singapore opportunity
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center space-x-2">
                <Icon name="MessageCircle" size={18} />
                <span>Speak with Industry Expert</span>
              </button>
              <button className="px-8 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-white transition-colors flex items-center justify-center space-x-2">
                <Icon name="FileText" size={18} />
                <span>Download Industry Guide</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryOpportunities;