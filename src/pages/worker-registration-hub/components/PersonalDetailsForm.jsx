import React, { useState } from 'react';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Icon from '../../../components/AppIcon';

const PersonalDetailsForm = ({ formData, onFormChange, errors }) => {
  const [showTooltip, setShowTooltip] = useState(null);

  const genderOptions = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' }
  ];

  const maritalStatusOptions = [
    { value: 'single', label: 'Single' },
    { value: 'married', label: 'Married' },
    { value: 'divorced', label: 'Divorced' },
    { value: 'widowed', label: 'Widowed' }
  ];

  const educationOptions = [
    { value: 'primary', label: 'Primary School' },
    { value: 'secondary', label: 'Secondary School' },
    { value: 'diploma', label: 'Diploma/Certificate' },
    { value: 'bachelor', label: 'Bachelor\'s Degree' },
    { value: 'master', label: 'Master\'s Degree' },
    { value: 'other', label: 'Other' }
  ];

  const handleInputChange = (field, value) => {
    onFormChange({ ...formData, [field]: value });
  };

  const TooltipWrapper = ({ children, tooltip, field }) => (
    <div className="relative">
      {children}
      <button
        type="button"
        className="absolute right-3 top-9 text-text-muted hover:text-primary transition-colors"
        onMouseEnter={() => setShowTooltip(field)}
        onMouseLeave={() => setShowTooltip(null)}
        onClick={() => setShowTooltip(showTooltip === field ? null : field)}
      >
        <Icon name="HelpCircle" size={16} />
      </button>
      {showTooltip === field && (
        <div className="absolute z-10 right-0 top-full mt-1 w-64 p-3 bg-white border border-border rounded-lg shadow-trust-lg">
          <p className="text-sm text-text-secondary">{tooltip}</p>
        </div>
      )}
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-text-primary mb-2">
          Personal Details
        </h2>
        <p className="text-text-secondary">
          Please provide accurate information as it appears on your official documents
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Full Name (as per passport)"
          type="text"
          placeholder="Enter your full name"
          value={formData?.fullName || ''}
          onChange={(e) => handleInputChange('fullName', e?.target?.value)}
          error={errors?.fullName}
          required
        />

        <TooltipWrapper
          tooltip="Enter your date of birth in DD/MM/YYYY format as shown on your passport"
          field="dateOfBirth"
        >
          <Input
            label="Date of Birth"
            type="date"
            value={formData?.dateOfBirth || ''}
            onChange={(e) => handleInputChange('dateOfBirth', e?.target?.value)}
            error={errors?.dateOfBirth}
            required
          />
        </TooltipWrapper>

        <Select
          label="Gender"
          options={genderOptions}
          value={formData?.gender || ''}
          onChange={(value) => handleInputChange('gender', value)}
          error={errors?.gender}
          required
        />

        <Select
          label="Marital Status"
          options={maritalStatusOptions}
          value={formData?.maritalStatus || ''}
          onChange={(value) => handleInputChange('maritalStatus', value)}
          error={errors?.maritalStatus}
          required
        />

        <TooltipWrapper
          tooltip="Enter your passport number exactly as it appears on your passport"
          field="passportNumber"
        >
          <Input
            label="Passport Number"
            type="text"
            placeholder="Enter passport number"
            value={formData?.passportNumber || ''}
            onChange={(e) => handleInputChange('passportNumber', e?.target?.value)}
            error={errors?.passportNumber}
            required
          />
        </TooltipWrapper>

        <TooltipWrapper
          tooltip="Enter your passport expiry date. Must be valid for at least 6 months from application date"
          field="passportExpiry"
        >
          <Input
            label="Passport Expiry Date"
            type="date"
            value={formData?.passportExpiry || ''}
            onChange={(e) => handleInputChange('passportExpiry', e?.target?.value)}
            error={errors?.passportExpiry}
            required
          />
        </TooltipWrapper>

        <TooltipWrapper
          tooltip="Include country code (e.g., +880 for Bangladesh, +91 for India)"
          field="phoneNumber"
        >
          <Input
            label="Phone Number"
            type="tel"
            placeholder="+XX XXXXXXXXX"
            value={formData?.phoneNumber || ''}
            onChange={(e) => handleInputChange('phoneNumber', e?.target?.value)}
            error={errors?.phoneNumber}
            required
          />
        </TooltipWrapper>

        <Input
          label="Email Address"
          type="email"
          placeholder="your.email@example.com"
          value={formData?.email || ''}
          onChange={(e) => handleInputChange('email', e?.target?.value)}
          error={errors?.email}
          required
        />

        <div className="md:col-span-2">
          <Input
            label="Current Address"
            type="text"
            placeholder="Enter your complete current address"
            value={formData?.currentAddress || ''}
            onChange={(e) => handleInputChange('currentAddress', e?.target?.value)}
            error={errors?.currentAddress}
            required
          />
        </div>

        <Select
          label="Highest Education Level"
          options={educationOptions}
          value={formData?.education || ''}
          onChange={(value) => handleInputChange('education', value)}
          error={errors?.education}
          required
        />

        <TooltipWrapper
          tooltip="Specify your field of study or specialization"
          field="fieldOfStudy"
        >
          <Input
            label="Field of Study"
            type="text"
            placeholder="e.g., Engineering, Business, etc."
            value={formData?.fieldOfStudy || ''}
            onChange={(e) => handleInputChange('fieldOfStudy', e?.target?.value)}
            error={errors?.fieldOfStudy}
          />
        </TooltipWrapper>
      </div>
      <div className="bg-surface p-4 rounded-lg">
        <div className="flex items-start space-x-3">
          <Icon name="Info" size={20} className="text-trust mt-0.5" />
          <div>
            <h4 className="font-medium text-text-primary mb-1">Important Note</h4>
            <p className="text-sm text-text-secondary">
              All information must match your official documents exactly. Any discrepancies may delay your application process. 
              We use this information to ensure MOM compliance and successful work permit applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetailsForm;