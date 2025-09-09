import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CulturalSupport = ({ country }) => {
  const culturalData = {
    bangladesh: {
      colors: {
        primary: "from-green-600 to-red-500",
        accent: "text-green-700",
        bg: "bg-green-50"
      },
      culturalValues: [
        {
          icon: "Users",
          title: "Community Support",
          description: "Connect with 800+ Bangladeshi professionals already working in Singapore through our community network"
        },
        {
          icon: "Mosque",
          title: "Religious Facilities",
          description: "Access to 70+ mosques and halal food options throughout Singapore for comfortable religious practice"
        },
        {
          icon: "Heart",
          title: "Family Values",
          description: "Support for family reunification and maintaining strong connections with loved ones back home"
        },
        {
          icon: "Globe",
          title: "Language Bridge",
          description: "Bengali-speaking support staff and cultural orientation programs to ease your transition"
        }
      ],
      supportServices: [
        {
          title: "Cultural Orientation Program",
          description: "3-day comprehensive program covering Singapore workplace culture, social norms, and practical living tips",
          duration: "3 days",
          included: ["Workplace etiquette", "Public transport guide", "Banking setup", "Healthcare registration"]
        },
        {
          title: "Community Integration",
          description: "Connect with established Bangladeshi community groups, cultural associations, and professional networks",
          duration: "Ongoing",
          included: ["Community events", "Professional meetups", "Cultural celebrations", "Mentorship programs"]
        },
        {
          title: "Family Support Services",
          description: "Assistance with dependent visa applications, school enrollment, and family accommodation arrangements",
          duration: "As needed",
          included: ["Visa guidance", "School applications", "Housing assistance", "Healthcare enrollment"]
        }
      ],
      testimonial: {
        name: "Rashid Ahmed",
        role: "Restaurant Manager",
        image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?w=400&h=400&fit=crop",
        quote: "The cultural support made all the difference. I felt at home in Singapore within weeks, not months."
      }
    },
    india: {
      colors: {
        primary: "from-orange-500 to-green-600",
        accent: "text-orange-600",
        bg: "bg-orange-50"
      },
      culturalValues: [
        {
          icon: "Users",
          title: "Professional Networks",
          description: "Join 1,200+ Indian professionals in Singapore's thriving business and tech communities"
        },
        {
          icon: "GraduationCap",
          title: "Educational Excellence",
          description: "Access to top-tier international schools and universities for your children\'s bright future"
        },
        {
          icon: "Heart",
          title: "Cultural Diversity",
          description: "Singapore's multicultural environment celebrates Indian festivals, cuisine, and traditions"
        },
        {
          icon: "Globe",
          title: "Language Advantage",
          description: "English proficiency gives Indian professionals a significant advantage in Singapore's global business environment"
        }
      ],
      supportServices: [
        {
          title: "Professional Development Program",
          description: "Career advancement workshops, leadership training, and industry-specific skill development sessions",
          duration: "6 months",
          included: ["Leadership training", "Industry certifications", "Networking events", "Career coaching"]
        },
        {
          title: "Family Integration Support",
          description: "Comprehensive support for spouse employment, children's education, and cultural adaptation",
          duration: "12 months",
          included: ["Spouse job placement", "School admissions", "Cultural activities", "Community connections"]
        },
        {
          title: "Business Networking",
          description: "Access to Indian business associations, professional groups, and entrepreneurship support networks",
          duration: "Ongoing",
          included: ["Business meetups", "Industry conferences", "Startup support", "Investment guidance"]
        }
      ],
      testimonial: {
        name: "Priya Nair",
        role: "Tech Lead",
        image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?w=400&h=400&fit=crop",
        quote: "Singapore\'s tech ecosystem welcomed my Indian expertise. The professional networks here are incredible."
      }
    },
    vietnam: {
      colors: {
        primary: "from-red-600 to-yellow-500",
        accent: "text-red-600",
        bg: "bg-red-50"
      },
      culturalValues: [
        {
          icon: "Users",
          title: "Vietnamese Community",
          description: "Connect with 450+ Vietnamese workers who have successfully integrated into Singapore society"
        },
        {
          icon: "Utensils",
          title: "Familiar Cuisine",
          description: "Access to authentic Vietnamese restaurants and ingredients to maintain your culinary traditions"
        },
        {
          icon: "Heart",
          title: "Work-Life Balance",
          description: "Singapore\'s structured work environment aligns well with Vietnamese values of dedication and family"
        },
        {
          icon: "Globe",
          title: "Cultural Bridge",
          description: "Vietnamese-speaking coordinators and cultural adaptation programs for smooth transition"
        }
      ],
      supportServices: [
        {
          title: "Cultural Adaptation Program",
          description: "Specialized program addressing Vietnamese cultural concerns and workplace integration strategies",
          duration: "4 weeks",
          included: ["Cultural workshops", "Language support", "Workplace training", "Social integration"]
        },
        {
          title: "Skills Enhancement",
          description: "Technical and soft skills training to maximize career advancement opportunities in Singapore",
          duration: "3 months",
          included: ["Technical training", "English improvement", "Leadership skills", "Industry certifications"]
        },
        {
          title: "Community Building",
          description: "Regular Vietnamese community events, cultural celebrations, and professional networking opportunities",
          duration: "Ongoing",
          included: ["Cultural festivals", "Professional meetups", "Family events", "Mentorship programs"]
        }
      ],
      testimonial: {
        name: "Nguyen Van Minh",
        role: "Production Supervisor",
        image: "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?w=400&h=400&fit=crop",
        quote: "The cultural bridge support helped me understand Singapore's work culture while staying true to my Vietnamese values."
      }
    },
    malaysia: {
      colors: {
        primary: "from-blue-600 to-red-500",
        accent: "text-blue-600",
        bg: "bg-blue-50"
      },
      culturalValues: [
        {
          icon: "Users",
          title: "Familiar Environment",
          description: "Singapore\'s multicultural society feels familiar to Malaysian professionals with shared cultural elements"
        },
        {
          icon: "MapPin",
          title: "Proximity Advantage",
          description: "Easy travel back home for family visits and maintaining strong connections with Malaysia"
        },
        {
          icon: "Heart",
          title: "Cultural Similarity",
          description: "Shared food culture, languages, and social norms make adaptation seamless for Malaysians"
        },
        {
          icon: "Globe",
          title: "Multilingual Skills",
          description: "Malaysian multilingual abilities (English, Malay, Chinese, Tamil) are highly valued in Singapore"
        }
      ],
      supportServices: [
        {
          title: "Fast-Track Integration",
          description: "Accelerated onboarding program leveraging cultural similarities between Malaysia and Singapore",
          duration: "2 weeks",
          included: ["Quick orientation", "Banking setup", "Transport guide", "Professional networking"]
        },
        {
          title: "Cross-Border Support",
          description: "Assistance with maintaining Malaysian connections while building Singapore professional networks",
          duration: "6 months",
          included: ["Travel planning", "Tax guidance", "Family visits", "Professional development"]
        },
        {
          title: "Career Advancement",
          description: "Specialized career coaching for Malaysian professionals to maximize Singapore opportunities",
          duration: "12 months",
          included: ["Career planning", "Skill development", "Leadership training", "Industry connections"]
        }
      ],
      testimonial: {
        name: "Lim Wei Ming",
        role: "Financial Analyst",
        image: "https://images.pexels.com/photos/1043472/pexels-photo-1043472.jpeg?w=400&h=400&fit=crop",
        quote: "Moving from KL to Singapore felt natural. The cultural similarities made the transition incredibly smooth."
      }
    },
    china: {
      colors: {
        primary: "from-red-600 to-yellow-500",
        accent: "text-red-700",
        bg: "bg-red-50"
      },
      culturalValues: [
        {
          icon: "Users",
          title: "Chinese Community",
          description: "Join 680+ Chinese professionals in Singapore's established Chinese business and cultural community"
        },
        {
          icon: "Building",
          title: "Business Opportunities",
          description: "Singapore\'s role as China-ASEAN business hub creates unique opportunities for Chinese professionals"
        },
        {
          icon: "Heart",
          title: "Cultural Preservation",
          description: "Maintain Chinese traditions and values while embracing Singapore's international business culture"
        },
        {
          icon: "Globe",
          title: "Language Bridge",
          description: "Mandarin-speaking environment in business and daily life eases communication and cultural adaptation"
        }
      ],
      supportServices: [
        {
          title: "Executive Integration Program",
          description: "Specialized program for Chinese executives and senior professionals entering Singapore\'s business landscape",
          duration: "8 weeks",
          included: ["Executive coaching", "Business culture", "Regulatory compliance", "Network building"]
        },
        {
          title: "Family Relocation Support",
          description: "Comprehensive assistance for executive families including education, housing, and lifestyle adaptation",
          duration: "6 months",
          included: ["International schools", "Premium housing", "Healthcare", "Cultural activities"]
        },
        {
          title: "Business Development",
          description: "Support for Chinese professionals looking to expand business connections between China and Singapore",
          duration: "Ongoing",
          included: ["Trade missions", "Business forums", "Investment guidance", "Partnership facilitation"]
        }
      ],
      testimonial: {
        name: "Chen Li Hua",
        role: "Operations Director",
        image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?w=400&h=400&fit=crop",
        quote: "Singapore\'s Chinese business community welcomed me immediately. The professional opportunities here are exceptional."
      }
    }
  };

  const data = culturalData?.[country] || culturalData?.bangladesh;

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Cultural Support & Integration
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            We understand your cultural values and provide comprehensive support for a smooth transition to Singapore
          </p>
        </div>

        {/* Cultural Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {data?.culturalValues?.map((value, index) => (
            <div key={index} className="bg-white rounded-xl p-6 border border-border shadow-trust hover:shadow-trust-lg transition-all duration-300">
              <div className={`w-12 h-12 bg-gradient-to-br ${data?.colors?.primary} rounded-lg flex items-center justify-center mb-4`}>
                <Icon name={value?.icon} size={24} className="text-white" />
              </div>
              <h3 className="font-semibold text-text-primary mb-3">{value?.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{value?.description}</p>
            </div>
          ))}
        </div>

        {/* Support Services */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-text-primary text-center mb-12">
            Comprehensive Support Services
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {data?.supportServices?.map((service, index) => (
              <div key={index} className="bg-white rounded-xl border border-border shadow-trust overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${data?.colors?.primary}`}></div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-text-primary">{service?.title}</h4>
                    <span className="px-3 py-1 bg-surface rounded-full text-xs font-medium text-text-secondary">
                      {service?.duration}
                    </span>
                  </div>
                  
                  <p className="text-sm text-text-secondary mb-6 leading-relaxed">
                    {service?.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h5 className="text-sm font-medium text-text-primary">Included Services:</h5>
                    <div className="grid grid-cols-2 gap-2">
                      {service?.included?.map((item, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <Icon name="Check" size={14} className="text-success flex-shrink-0" />
                          <span className="text-xs text-text-secondary">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="bg-white rounded-xl border border-border shadow-trust-lg p-8 mb-16">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 rounded-full overflow-hidden shadow-trust flex-shrink-0">
                  <Image 
                    src={data?.testimonial?.image}
                    alt={data?.testimonial?.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <blockquote className="text-lg text-text-primary italic mb-4">
                    "{data?.testimonial?.quote}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-text-primary">{data?.testimonial?.name}</div>
                    <div className="text-sm text-text-muted">{data?.testimonial?.role}</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center lg:text-right">
              <div className={`inline-flex items-center space-x-2 px-4 py-2 ${data?.colors?.bg} rounded-lg`}>
                <Icon name="Star" size={20} className={data?.colors?.accent} />
                <span className={`font-semibold ${data?.colors?.accent}`}>Cultural Success Story</span>
              </div>
            </div>
          </div>
        </div>

        {/* Cultural Guarantee */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 border border-border">
            <div className="flex items-center justify-center mb-6">
              <div className={`w-16 h-16 bg-gradient-to-br ${data?.colors?.primary} rounded-full flex items-center justify-center`}>
                <Icon name="Shield" size={32} className="text-white" />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Our Cultural Integration Guarantee
            </h3>
            <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
              We guarantee comprehensive cultural support throughout your Singapore journey. If you're not satisfied with our cultural integration services within the first 30 days, we'll provide additional support at no extra cost.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center space-x-2">
                <Icon name="MessageCircle" size={18} />
                <span>Speak with Cultural Advisor</span>
              </button>
              <button className="px-8 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-white transition-colors flex items-center justify-center space-x-2">
                <Icon name="FileText" size={18} />
                <span>Download Cultural Guide</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CulturalSupport;