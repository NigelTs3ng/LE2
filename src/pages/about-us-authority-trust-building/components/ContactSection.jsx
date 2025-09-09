import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      type: "Singapore Office",
      address: "123 Marina Bay Financial Centre\nTower 2, Level 15\nSingapore 018983",
      phone: "+65 6789 1234",
      email: "hello@leadingedge.asia",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM SGT",
      icon: "Building"
    },
    {
      type: "Emergency Support",
      address: "24/7 Worker Support Hotline\nAvailable in multiple languages",
      phone: "+65 9876 5432",
      email: "support@leadingedge.asia",
      hours: "Available 24/7",
      icon: "Phone"
    }
  ];

  const founderContact = {
    name: "Sarah Chen",
    title: "Founder & CEO",
    email: "sarah.chen@leadingedge.asia",
    phone: "+65 9123 4567",
    linkedin: "linkedin.com/in/sarahchen-leadingedge",
    message: "I personally review every inquiry and am committed to addressing your concerns directly.",
    availability: "Available for direct consultation by appointment"
  };

  const handleInputChange = (e) => {
    const { name, value } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you for your message. We will respond within 24 hours.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  return (
    <section className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Have questions about our services or want to learn more about ethical employment bridging? 
            We're here to help with transparent, honest answers.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Office Locations */}
            <div className="space-y-6">
              {contactInfo?.map((info, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-trust">
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full flex-shrink-0">
                      <Icon name={info?.icon} size={24} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-primary mb-2">
                        {info?.type}
                      </h3>
                      <div className="space-y-2 text-sm text-text-secondary">
                        <div className="flex items-start space-x-2">
                          <Icon name="MapPin" size={16} className="mt-1 flex-shrink-0" />
                          <span className="whitespace-pre-line">{info?.address}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Icon name="Phone" size={16} className="flex-shrink-0" />
                          <span>{info?.phone}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Icon name="Mail" size={16} className="flex-shrink-0" />
                          <span>{info?.email}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Icon name="Clock" size={16} className="flex-shrink-0" />
                          <span>{info?.hours}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Founder Direct Contact */}
            <div className="bg-gradient-to-br from-primary to-secondary rounded-xl p-6 text-white">
              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-full flex-shrink-0">
                  <Icon name="User" size={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-1">
                    Direct Access to Leadership
                  </h3>
                  <p className="text-white/90 text-sm mb-4">
                    {founderContact?.message}
                  </p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Icon name="User" size={16} className="flex-shrink-0" />
                      <span>{founderContact?.name}, {founderContact?.title}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Mail" size={16} className="flex-shrink-0" />
                      <span>{founderContact?.email}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Phone" size={16} className="flex-shrink-0" />
                      <span>{founderContact?.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Calendar" size={16} className="flex-shrink-0" />
                      <span>{founderContact?.availability}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Options */}
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center space-x-2 p-4 bg-white rounded-lg shadow-trust hover:shadow-trust-lg transition-trust">
                <Icon name="MessageCircle" size={20} className="text-success" />
                <span className="font-medium text-text-primary">WhatsApp</span>
              </button>
              <button className="flex items-center justify-center space-x-2 p-4 bg-white rounded-lg shadow-trust hover:shadow-trust-lg transition-trust">
                <Icon name="Video" size={20} className="text-trust" />
                <span className="font-medium text-text-primary">Video Call</span>
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl p-8 shadow-trust">
            <h3 className="text-xl font-semibold text-primary mb-6">
              Send Us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  label="Full Name"
                  type="text"
                  name="name"
                  value={formData?.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  required
                />
                <Input
                  label="Email Address"
                  type="email"
                  name="email"
                  value={formData?.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
              
              <Input
                label="Subject"
                type="text"
                name="subject"
                value={formData?.subject}
                onChange={handleInputChange}
                placeholder="What is this regarding?"
                required
              />
              
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData?.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  placeholder="Please provide details about your inquiry..."
                  required
                ></textarea>
              </div>
              
              <Button
                type="submit"
                variant="default"
                fullWidth
                loading={isSubmitting}
                className="hero-cta text-white font-medium"
              >
                {isSubmitting ? 'Sending Message...' : 'Send Message'}
              </Button>
            </form>

            {/* Response Time Promise */}
            <div className="mt-6 p-4 bg-surface rounded-lg">
              <div className="flex items-center space-x-2 text-sm text-text-secondary">
                <Icon name="Clock" size={16} className="text-success" />
                <span>
                  <strong className="text-text-primary">Response Guarantee:</strong> 
                  We respond to all inquiries within 24 hours during business days.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-primary text-center mb-6">
            Visit Our Singapore Office
          </h3>
          <div className="bg-white rounded-xl shadow-trust overflow-hidden">
            <div className="h-64 lg:h-96">
              <iframe
                width="100%"
                height="100%"
                loading="lazy"
                title="LeadingEdge Asia Singapore Office"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=1.2838,103.8607&z=16&output=embed"
                className="border-0"
              ></iframe>
            </div>
            <div className="p-6">
              <div className="flex items-center space-x-3">
                <Icon name="MapPin" size={20} className="text-primary" />
                <div>
                  <p className="font-medium text-text-primary">Marina Bay Financial Centre</p>
                  <p className="text-sm text-text-secondary">Easy access via MRT and bus connections</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;