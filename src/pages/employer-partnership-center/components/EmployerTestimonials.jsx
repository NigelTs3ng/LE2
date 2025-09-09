import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const EmployerTestimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Lim",
      position: "Restaurant Owner",
      company: "Golden Dragon Restaurant",
      industry: "F&B",
      photo: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      testimonial: `LeadingEdge Asia found us an exceptional head chef from Bangladesh within just 5 days. The entire process was transparent, and the worker has been with us for over 18 months now. Their cultural integration support made all the difference.`,
      outcome: "Hired 3 kitchen staff, 18+ months retention",
      timeToHire: "5 days",
      verified: true
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Construction Manager",
      company: "Chen Construction Pte Ltd",
      industry: "Construction",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      testimonial: `We needed skilled workers urgently for a major project. LeadingEdge delivered 8 qualified workers from India and Vietnam. All were properly certified and work permits were handled seamlessly. Outstanding service!`,
      outcome: "8 workers placed, project completed on time",
      timeToHire: "3 days",
      verified: true
    },
    {
      id: 3,
      name: "Dr. Priya Sharma",
      position: "Clinic Director",
      company: "Harmony Healthcare",
      industry: "Caregiving",
      photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      testimonial: `Finding qualified care assistants was always challenging until we partnered with LeadingEdge Asia. They provided us with certified professionals who genuinely care about patient welfare. The screening process is thorough and reliable.`,
      outcome: "4 care assistants hired, excellent patient feedback",
      timeToHire: "7 days",
      verified: true
    },
    {
      id: 4,
      name: "Robert Tan",
      position: "Property Manager",
      company: "Elite Residences",
      industry: "Domestic Services",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      testimonial: `We manage multiple high-end properties and needed reliable domestic staff. LeadingEdge Asia's workers are professional, trustworthy, and well-trained. The background verification gives us complete peace of mind.`,
      outcome: "12 domestic staff across 6 properties",
      timeToHire: "4 days",
      verified: true
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
  };

  const current = testimonials?.[currentTestimonial];

  return (
    <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-text-primary mb-2">
          What Singapore Employers Say
        </h2>
        <p className="text-text-secondary">
          Real experiences from our partner companies
        </p>
      </div>
      <div className="max-w-4xl mx-auto">
        {/* Main Testimonial */}
        <div className="bg-white rounded-xl shadow-trust p-8 mb-6">
          <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-6">
            {/* Employer Photo and Info */}
            <div className="flex-shrink-0 text-center md:text-left">
              <div className="w-20 h-20 rounded-full overflow-hidden mx-auto md:mx-0 mb-4">
                <Image 
                  src={current?.photo}
                  alt={current?.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-center md:justify-start space-x-2">
                  <h3 className="font-semibold text-text-primary">{current?.name}</h3>
                  {current?.verified && (
                    <Icon name="BadgeCheck" size={16} className="text-success" />
                  )}
                </div>
                <p className="text-sm text-text-secondary">{current?.position}</p>
                <p className="text-sm font-medium text-primary">{current?.company}</p>
                <span className="inline-block px-2 py-1 bg-surface text-text-secondary text-xs rounded-full">
                  {current?.industry}
                </span>
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="flex-1">
              {/* Rating */}
              <div className="flex items-center justify-center md:justify-start space-x-1 mb-4">
                {[...Array(current?.rating)]?.map((_, i) => (
                  <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-text-primary text-lg leading-relaxed mb-6 italic">
                "{current?.testimonial}"
              </blockquote>

              {/* Outcome Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-success/10 rounded-lg p-3">
                  <div className="text-sm text-text-secondary">Outcome</div>
                  <div className="font-medium text-success">{current?.outcome}</div>
                </div>
                <div className="bg-primary/10 rounded-lg p-3">
                  <div className="text-sm text-text-secondary">Time to Hire</div>
                  <div className="font-medium text-primary">{current?.timeToHire}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <Button 
            variant="outline" 
            size="sm"
            onClick={prevTestimonial}
          >
            <Icon name="ChevronLeft" size={16} className="mr-1" />
            Previous
          </Button>

          {/* Dots Indicator */}
          <div className="flex space-x-2">
            {testimonials?.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial 
                    ? 'bg-primary' :'bg-border hover:bg-primary/50'
                }`}
              />
            ))}
          </div>

          <Button 
            variant="outline" 
            size="sm"
            onClick={nextTestimonial}
          >
            Next
            <Icon name="ChevronRight" size={16} className="ml-1" />
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 text-center">
          <div className="flex items-center justify-center space-x-6 text-sm text-text-secondary">
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={16} className="text-success" />
              <span>All testimonials verified</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Users" size={16} className="text-primary" />
              <span>450+ partner companies</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Star" size={16} className="text-yellow-500" />
              <span>4.8/5 average rating</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployerTestimonials;