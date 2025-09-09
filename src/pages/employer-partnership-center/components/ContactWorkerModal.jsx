import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ContactWorkerModal = ({ worker, isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    industry: '',
    position: '',
    salaryOffer: '',
    startDate: '',
    message: '',
    urgency: 'normal'
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const industryOptions = [
    { value: '', label: 'Select Industry' },
    { value: 'F&B', label: 'Food & Beverage' },
    { value: 'Construction', label: 'Construction' },
    { value: 'Caregiving', label: 'Caregiving' },
    { value: 'Domestic Services', label: 'Domestic Services' },
    { value: 'Other', label: 'Other' }
  ];

  const urgencyOptions = [
    { value: 'normal', label: 'Normal (2-4 weeks)' },
    { value: 'urgent', label: 'Urgent (Within 2 weeks)' },
    { value: 'immediate', label: 'Immediate (ASAP)' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (errors?.[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData?.companyName?.trim()) {
      newErrors.companyName = 'Company name is required';
    }

    if (!formData?.contactPerson?.trim()) {
      newErrors.contactPerson = 'Contact person name is required';
    }

    if (!formData?.email?.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/?.test(formData?.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData?.phone?.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData?.industry) {
      newErrors.industry = 'Please select your industry';
    }

    if (!formData?.position?.trim()) {
      newErrors.position = 'Position/role is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      await onSubmit({
        ...formData,
        workerId: worker?.id,
        workerName: worker?.name,
        timestamp: new Date()?.toISOString()
      });
      
      // Reset form
      setFormData({
        companyName: '',
        contactPerson: '',
        email: '',
        phone: '',
        industry: '',
        position: '',
        salaryOffer: '',
        startDate: '',
        message: '',
        urgency: 'normal'
      });
      
      onClose();
    } catch (error) {
      console.error('Error submitting contact form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen || !worker) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-trust-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-lg overflow-hidden">
              <Image 
                src={worker?.photo}
                alt={worker?.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-text-primary">Contact {worker?.name}</h2>
              <p className="text-text-secondary">{worker?.role} • {worker?.nationality}</p>
            </div>
          </div>
          <Button 
            variant="ghost" 
            size="sm"
            onClick={onClose}
          >
            <Icon name="X" size={20} />
          </Button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Company Information */}
          <div className="space-y-4">
            <h3 className="font-medium text-text-primary">Company Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Company Name"
                type="text"
                placeholder="Enter your company name"
                value={formData?.companyName}
                onChange={(e) => handleInputChange('companyName', e?.target?.value)}
                error={errors?.companyName}
                required
              />
              
              <Input
                label="Contact Person"
                type="text"
                placeholder="Your full name"
                value={formData?.contactPerson}
                onChange={(e) => handleInputChange('contactPerson', e?.target?.value)}
                error={errors?.contactPerson}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Email Address"
                type="email"
                placeholder="your.email@company.com"
                value={formData?.email}
                onChange={(e) => handleInputChange('email', e?.target?.value)}
                error={errors?.email}
                required
              />
              
              <Input
                label="Phone Number"
                type="tel"
                placeholder="+65 XXXX XXXX"
                value={formData?.phone}
                onChange={(e) => handleInputChange('phone', e?.target?.value)}
                error={errors?.phone}
                required
              />
            </div>
          </div>

          {/* Job Details */}
          <div className="space-y-4">
            <h3 className="font-medium text-text-primary">Job Details</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Select
                label="Industry"
                options={industryOptions}
                value={formData?.industry}
                onChange={(value) => handleInputChange('industry', value)}
                error={errors?.industry}
                required
              />
              
              <Input
                label="Position/Role"
                type="text"
                placeholder="e.g., Senior Chef, Care Assistant"
                value={formData?.position}
                onChange={(e) => handleInputChange('position', e?.target?.value)}
                error={errors?.position}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Salary Offer (SGD)"
                type="text"
                placeholder="e.g., 2,500 - 3,000"
                value={formData?.salaryOffer}
                onChange={(e) => handleInputChange('salaryOffer', e?.target?.value)}
              />
              
              <Input
                label="Preferred Start Date"
                type="date"
                value={formData?.startDate}
                onChange={(e) => handleInputChange('startDate', e?.target?.value)}
              />
            </div>

            <Select
              label="Hiring Urgency"
              options={urgencyOptions}
              value={formData?.urgency}
              onChange={(value) => handleInputChange('urgency', value)}
            />
          </div>

          {/* Additional Message */}
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Additional Message (Optional)
            </label>
            <textarea
              className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
              rows={4}
              placeholder={`Tell ${worker?.name} more about the role, working conditions, or any specific requirements...`}
              value={formData?.message}
              onChange={(e) => handleInputChange('message', e?.target?.value)}
            />
          </div>

          {/* Worker Summary */}
          <div className="bg-surface rounded-lg p-4">
            <h4 className="font-medium text-text-primary mb-2">Worker Summary</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-text-secondary">Experience:</span>
                <span className="ml-2 font-medium">{worker?.experience} years</span>
              </div>
              <div>
                <span className="text-text-secondary">Expected Salary:</span>
                <span className="ml-2 font-medium">{worker?.expectedSalary}</span>
              </div>
              <div>
                <span className="text-text-secondary">Availability:</span>
                <span className="ml-2 font-medium">{worker?.availability}</span>
              </div>
              <div>
                <span className="text-text-secondary">Languages:</span>
                <span className="ml-2 font-medium">{worker?.languages?.join(', ')}</span>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex space-x-3 pt-4">
            <Button 
              type="button"
              variant="outline" 
              fullWidth
              onClick={onClose}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button 
              type="submit"
              variant="default" 
              fullWidth
              loading={isSubmitting}
            >
              <Icon name="Send" size={16} className="mr-2" />
              Send Inquiry
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactWorkerModal;