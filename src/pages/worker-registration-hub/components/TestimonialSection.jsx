import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rashid Ahmed",
      country: "Bangladesh",
      role: "Chef",
      company: "Marina Bay Restaurant",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      quote: `LeadingEdge Asia made my dream come true. Within 3 months of registration, I got a job as a chef in Singapore. The process was transparent and they supported me every step of the way.`,
      timeToPlacement: "3 months",
      salary: "SGD 2,800",
      rating: 5
    },
    {
      id: 2,
      name: "Priya Sharma",
      country: "India",
      role: "Healthcare Assistant",
      company: "Singapore General Hospital",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      quote: `I was skeptical at first, but LeadingEdge proved to be genuine. They helped me get my nursing certification recognized and found me a perfect job. My family is so proud!`,
      timeToPlacement: "4 months",
      salary: "SGD 3,200",
      rating: 5
    },
    {
      id: 3,
      name: "Nguyen Van Duc",
      country: "Vietnam",
      role: "Construction Supervisor",
      company: "BuildTech Singapore",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      quote: `Professional service from start to finish. They prepared me well for the Singapore work culture and the employer was exactly as described. Highly recommended!`,
      timeToPlacement: "2 months",
      salary: "SGD 3,500",
      rating: 5
    }
  ];

  const stats = [
    { label: "Average Placement Time", value: "3.2 months", icon: "Clock" },
    { label: "Success Rate", value: "94%", icon: "TrendingUp" },
    { label: "Average Salary", value: "SGD 3,100", icon: "DollarSign" },
    { label: "Employer Satisfaction", value: "4.8/5", icon: "Star" }
  ];

  return (
    <div className="bg-surface py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-text-primary mb-4">
            Success Stories from Recent Registrants
          </h2>
          <p className="text-text-secondary text-lg">
            Real people, real success stories. Join thousands who found their dream jobs in Singapore.
          </p>
        </div>

        {/* Success Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats?.map((stat) => (
            <div key={stat?.label} className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Icon name={stat?.icon} size={24} className="text-primary" />
              </div>
              <div className="text-2xl font-bold text-primary mb-1">{stat?.value}</div>
              <div className="text-sm text-text-secondary">{stat?.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials?.map((testimonial) => (
            <div key={testimonial?.id} className="bg-white rounded-lg p-6 shadow-trust">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial?.image}
                    alt={testimonial?.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary">{testimonial?.name}</h3>
                  <p className="text-sm text-text-secondary">{testimonial?.country}</p>
                </div>
              </div>

              <div className="flex items-center space-x-1 mb-3">
                {[...Array(testimonial?.rating)]?.map((_, i) => (
                  <Icon key={i} name="Star" size={16} className="text-warning fill-current" />
                ))}
              </div>

              <blockquote className="text-text-secondary text-sm mb-4 italic">
                "{testimonial?.quote}"
              </blockquote>

              <div className="space-y-2 text-xs text-text-muted">
                <div className="flex justify-between">
                  <span>Position:</span>
                  <span className="font-medium">{testimonial?.role}</span>
                </div>
                <div className="flex justify-between">
                  <span>Company:</span>
                  <span className="font-medium">{testimonial?.company}</span>
                </div>
                <div className="flex justify-between">
                  <span>Placement Time:</span>
                  <span className="font-medium text-success">{testimonial?.timeToPlacement}</span>
                </div>
                <div className="flex justify-between">
                  <span>Salary:</span>
                  <span className="font-medium text-primary">{testimonial?.salary}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline Estimate */}
        <div className="mt-12 bg-white rounded-lg p-6 border border-border">
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-text-primary mb-2">
              Your Journey Timeline
            </h3>
            <p className="text-text-secondary">
              Estimated timeline from registration to job placement
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {[
              { step: "Registration", time: "Today", icon: "UserPlus" },
              { step: "Document Review", time: "1-2 days", icon: "FileCheck" },
              { step: "Employer Matching", time: "1-2 weeks", icon: "Users" },
              { step: "Interview Process", time: "2-3 weeks", icon: "MessageCircle" },
              { step: "Job Placement", time: "1-3 months", icon: "Briefcase" }
            ]?.map((phase, index) => (
              <div key={phase?.step} className="flex items-center">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Icon name={phase?.icon} size={20} className="text-primary" />
                  </div>
                  <h4 className="font-medium text-text-primary text-sm">{phase?.step}</h4>
                  <p className="text-xs text-text-muted">{phase?.time}</p>
                </div>
                {index < 4 && (
                  <Icon name="ArrowRight" size={20} className="text-text-muted mx-4 hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;