import React from 'react';
import Icon from '../../../components/AppIcon';

const ProgressIndicator = ({ currentStep, totalSteps }) => {
  const steps = [
    { id: 1, name: 'Personal Details', icon: 'User' },
    { id: 2, name: 'Work Experience', icon: 'Briefcase' },
    { id: 3, name: 'Document Upload', icon: 'Upload' },
    { id: 4, name: 'Payment', icon: 'CreditCard' },
    { id: 5, name: 'Confirmation', icon: 'CheckCircle' }
  ];

  return (
    <div className="w-full bg-white border-b border-border sticky top-16 z-40">
      <div className="max-w-4xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {steps?.map((step, index) => (
            <div key={step?.id} className="flex items-center">
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  step?.id < currentStep 
                    ? 'bg-success text-white' 
                    : step?.id === currentStep 
                    ? 'bg-primary text-white' :'bg-muted text-text-muted'
                }`}>
                  {step?.id < currentStep ? (
                    <Icon name="Check" size={20} />
                  ) : (
                    <Icon name={step?.icon} size={20} />
                  )}
                </div>
                <span className={`text-xs mt-2 font-medium hidden sm:block ${
                  step?.id <= currentStep ? 'text-primary' : 'text-text-muted'
                }`}>
                  {step?.name}
                </span>
              </div>
              {index < steps?.length - 1 && (
                <div className={`w-12 sm:w-20 h-0.5 mx-2 transition-all duration-300 ${
                  step?.id < currentStep ? 'bg-success' : 'bg-muted'
                }`} />
              )}
            </div>
          ))}
        </div>
        
        {/* Mobile step indicator */}
        <div className="sm:hidden mt-3 text-center">
          <span className="text-sm font-medium text-primary">
            Step {currentStep}: {steps?.[currentStep - 1]?.name}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProgressIndicator;