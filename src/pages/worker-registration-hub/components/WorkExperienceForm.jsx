import React, { useState } from 'react';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const WorkExperienceForm = ({ formData, onFormChange, errors }) => {
  const [experiences, setExperiences] = useState(formData?.workExperiences || []);

  const industryOptions = [
    { value: 'fnb', label: 'Food & Beverage' },
    { value: 'construction', label: 'Construction' },
    { value: 'caregiving', label: 'Caregiving' },
    { value: 'domestic', label: 'Domestic Services' },
    { value: 'other', label: 'Other' }
  ];

  const roleOptions = {
    fnb: [
      { value: 'chef', label: 'Chef' },
      { value: 'cook', label: 'Cook' },
      { value: 'server', label: 'Server/Waiter' },
      { value: 'kitchen_assistant', label: 'Kitchen Assistant' },
      { value: 'bartender', label: 'Bartender' },
      { value: 'cashier', label: 'Cashier' }
    ],
    construction: [
      { value: 'skilled_worker', label: 'Skilled Worker' },
      { value: 'supervisor', label: 'Supervisor' },
      { value: 'technician', label: 'Technician' },
      { value: 'electrician', label: 'Electrician' },
      { value: 'plumber', label: 'Plumber' },
      { value: 'carpenter', label: 'Carpenter' }
    ],
    caregiving: [
      { value: 'nurse', label: 'Nurse' },
      { value: 'elderly_care', label: 'Elderly Care' },
      { value: 'therapy_assistant', label: 'Therapy Assistant' },
      { value: 'healthcare_assistant', label: 'Healthcare Assistant' },
      { value: 'physiotherapist', label: 'Physiotherapist' }
    ],
    domestic: [
      { value: 'housekeeper', label: 'Housekeeper' },
      { value: 'nanny', label: 'Nanny/Childcare' },
      { value: 'driver', label: 'Driver' },
      { value: 'gardener', label: 'Gardener' },
      { value: 'cleaner', label: 'Cleaner' }
    ],
    other: [
      { value: 'retail', label: 'Retail' },
      { value: 'manufacturing', label: 'Manufacturing' },
      { value: 'logistics', label: 'Logistics' },
      { value: 'security', label: 'Security' }
    ]
  };

  const addExperience = () => {
    const newExperience = {
      id: Date.now(),
      industry: '',
      role: '',
      company: '',
      duration: '',
      description: '',
      startDate: '',
      endDate: ''
    };
    const updatedExperiences = [...experiences, newExperience];
    setExperiences(updatedExperiences);
    onFormChange({ ...formData, workExperiences: updatedExperiences });
  };

  const removeExperience = (id) => {
    const updatedExperiences = experiences?.filter(exp => exp?.id !== id);
    setExperiences(updatedExperiences);
    onFormChange({ ...formData, workExperiences: updatedExperiences });
  };

  const updateExperience = (id, field, value) => {
    const updatedExperiences = experiences?.map(exp => 
      exp?.id === id ? { ...exp, [field]: value } : exp
    );
    setExperiences(updatedExperiences);
    onFormChange({ ...formData, workExperiences: updatedExperiences });
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-text-primary mb-2">
          Work Experience
        </h2>
        <p className="text-text-secondary">
          Add your relevant work experience to help employers find you
        </p>
      </div>
      {experiences?.length === 0 && (
        <div className="text-center py-8 bg-surface rounded-lg">
          <Icon name="Briefcase" size={48} className="text-text-muted mx-auto mb-4" />
          <h3 className="text-lg font-medium text-text-primary mb-2">No Experience Added</h3>
          <p className="text-text-secondary mb-4">
            Start by adding your first work experience
          </p>
          <Button onClick={addExperience} iconName="Plus" iconPosition="left">
            Add Work Experience
          </Button>
        </div>
      )}
      {experiences?.map((experience, index) => (
        <div key={experience?.id} className="bg-white border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-text-primary">
              Experience #{index + 1}
            </h3>
            {experiences?.length > 1 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeExperience(experience?.id)}
                iconName="Trash2"
                className="text-destructive hover:text-destructive"
              >
                Remove
              </Button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Select
              label="Industry"
              options={industryOptions}
              value={experience?.industry}
              onChange={(value) => {
                updateExperience(experience?.id, 'industry', value);
                updateExperience(experience?.id, 'role', ''); // Reset role when industry changes
              }}
              required
            />

            <Select
              label="Role/Position"
              options={experience?.industry ? roleOptions?.[experience?.industry] || [] : []}
              value={experience?.role}
              onChange={(value) => updateExperience(experience?.id, 'role', value)}
              disabled={!experience?.industry}
              placeholder={experience?.industry ? "Select role" : "Select industry first"}
              required
            />

            <Input
              label="Company Name"
              type="text"
              placeholder="Enter company name"
              value={experience?.company}
              onChange={(e) => updateExperience(experience?.id, 'company', e?.target?.value)}
              required
            />

            <Input
              label="Duration (Years)"
              type="number"
              placeholder="e.g., 2.5"
              value={experience?.duration}
              onChange={(e) => updateExperience(experience?.id, 'duration', e?.target?.value)}
              min="0"
              step="0.1"
              required
            />

            <Input
              label="Start Date"
              type="date"
              value={experience?.startDate}
              onChange={(e) => updateExperience(experience?.id, 'startDate', e?.target?.value)}
              required
            />

            <Input
              label="End Date"
              type="date"
              value={experience?.endDate}
              onChange={(e) => updateExperience(experience?.id, 'endDate', e?.target?.value)}
              description="Leave empty if currently working"
            />

            <div className="md:col-span-2">
              <Input
                label="Job Description"
                type="text"
                placeholder="Describe your key responsibilities and achievements"
                value={experience?.description}
                onChange={(e) => updateExperience(experience?.id, 'description', e?.target?.value)}
                required
              />
            </div>
          </div>
        </div>
      ))}
      {experiences?.length > 0 && (
        <div className="text-center">
          <Button
            variant="outline"
            onClick={addExperience}
            iconName="Plus"
            iconPosition="left"
          >
            Add Another Experience
          </Button>
        </div>
      )}
      <div className="bg-surface p-4 rounded-lg">
        <div className="flex items-start space-x-3">
          <Icon name="Lightbulb" size={20} className="text-warning mt-0.5" />
          <div>
            <h4 className="font-medium text-text-primary mb-1">Pro Tip</h4>
            <p className="text-sm text-text-secondary">
              Include all relevant experience, even part-time or informal work. 
              Singapore employers value diverse experience and practical skills. 
              Be specific about your achievements and responsibilities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperienceForm;