import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Rashid Ahmed",
      country: "Bangladesh",
      position: "Restaurant Manager",
      company: "Marina Bay Bistro",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      quote: `LeadingEdge Asia changed my life completely. From a small village in Bangladesh to managing a restaurant in Marina Bay - this journey wouldn't have been possible without their transparent process and genuine support.\n\nThey guided me through every step, from documentation to cultural preparation. Now I'm earning 5 times more than before and supporting my family back home.`,
      rating: 5,
      duration: "Placed in 3 months"
    },
    {
      id: 2,
      name: "Priya Sharma",
      country: "India",
      position: "Senior Caregiver",
      company: "Singapore General Hospital",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      quote: `As a single mother, I was skeptical about overseas employment agencies. But LeadingEdge Asia proved to be different - completely transparent, no hidden fees, and they actually cared about my success.\n\nToday, I'm working as a senior caregiver in SGH, my daughter is in a good school, and we have a bright future ahead. Thank you for believing in me.`,
      rating: 5,
      duration: "Placed in 2 months"
    },
    {
      id: 3,
      name: "Nguyen Van Duc",
      country: "Vietnam",
      position: "Construction Supervisor",
      company: "Keppel Infrastructure",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      quote: `I had bad experiences with other agencies before - they took money and disappeared. LeadingEdge Asia was completely different. Professional, honest, and they delivered exactly what they promised.\n\nNow I'm supervising major construction projects in Singapore. My family has moved here too, and we're building our dream life together.`,
      rating: 5,
      duration: "Placed in 4 months"
    },
    {
      id: 4,
      name: "Siti Nurhaliza",
      country: "Malaysia",
      position: "Executive Housekeeper",
      company: "Raffles Hotel Singapore",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      quote: `Working at Raffles Hotel was always my dream. LeadingEdge Asia not only made it possible but also prepared me for the cultural differences and work expectations.\n\nTheir cultural integration program was invaluable. I felt confident from day one and quickly became part of the team. Now I'm training new staff members!`,
      rating: 5,
      duration: "Placed in 6 weeks"
    },
    {
      id: 5,
      name: "Li Wei Chen",
      country: "China",
      position: "Head Chef",
      company: "Mandarin Oriental",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      quote: `From a small restaurant in Guangzhou to head chef at Mandarin Oriental Singapore - this transformation happened because LeadingEdge Asia understood my potential and connected me with the right opportunity.\n\nTheir employer network is impressive, and they match skills perfectly with requirements. My culinary career has reached new heights here.`,
      rating: 5,
      duration: "Placed in 5 months"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials?.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [testimonials?.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials?.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials?.length) % testimonials?.length);
  };

  const currentTestimonial = testimonials?.[currentIndex];

  return (
    <section className="py-16 bg-surface">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Real Success Stories
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Hear from workers who transformed their lives through our trusted employment bridge platform
            </p>
          </div>

          {/* Testimonial Card */}
          <div className="success-card bg-white rounded-2xl p-8 md:p-12 shadow-trust-lg mb-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Profile Section */}
              <div className="flex-shrink-0 text-center md:text-left">
                <div className="relative mb-4">
                  <Image
                    src={currentTestimonial?.image}
                    alt={currentTestimonial?.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto md:mx-0"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-success rounded-full flex items-center justify-center">
                    <Icon name="Check" size={16} className="text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-1">
                  {currentTestimonial?.name}
                </h3>
                <div className="flex items-center justify-center md:justify-start space-x-2 mb-2">
                  <Icon name="MapPin" size={16} className="text-text-muted" />
                  <span className="text-sm text-text-secondary">{currentTestimonial?.country}</span>
                </div>
                <div className="text-sm font-medium text-primary mb-1">
                  {currentTestimonial?.position}
                </div>
                <div className="text-sm text-text-muted mb-3">
                  {currentTestimonial?.company}
                </div>
                <div className="flex items-center justify-center md:justify-start space-x-1 mb-2">
                  {[...Array(currentTestimonial?.rating)]?.map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-secondary fill-current" />
                  ))}
                </div>
                <div className="text-xs text-success font-medium">
                  {currentTestimonial?.duration}
                </div>
              </div>

              {/* Quote Section */}
              <div className="flex-1">
                <Icon name="Quote" size={32} className="text-primary/20 mb-4" />
                <blockquote className="text-text-primary leading-relaxed mb-6 whitespace-pre-line">
                  {currentTestimonial?.quote}
                </blockquote>
                <div className="flex items-center space-x-2 text-sm text-text-muted">
                  <Icon name="Calendar" size={16} />
                  <span>Success Story - {new Date()?.getFullYear()}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center space-x-4">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-white border border-border flex items-center justify-center hover:bg-surface transition-trust touch-feedback"
              aria-label="Previous testimonial"
            >
              <Icon name="ChevronLeft" size={20} className="text-text-secondary" />
            </button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials?.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-trust ${
                    index === currentIndex 
                      ? 'bg-primary' :'bg-border hover:bg-text-muted'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-white border border-border flex items-center justify-center hover:bg-surface transition-trust touch-feedback"
              aria-label="Next testimonial"
            >
              <Icon name="ChevronRight" size={20} className="text-text-secondary" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;