import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Button from '../../components/ui/Button';
import Icon from '../../components/AppIcon';
import ProgressIndicator from './components/ProgressIndicator';
import CountrySelector from './components/CountrySelector';
import PersonalDetailsForm from './components/PersonalDetailsForm';
import WorkExperienceForm from './components/WorkExperienceForm';
import DocumentUploadForm from './components/DocumentUploadForm';
import PaymentForm from './components/PaymentForm';
import TestimonialSection from './components/TestimonialSection';

const WorkerRegistrationHub = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    selectedCountry: null,
    personalDetails: {},
    workExperiences: [],
    documents: {},
    paymentMethod: 'card',
    cardDetails: {}
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [autoSaveStatus, setAutoSaveStatus] = useState('saved');

  const totalSteps = 5;

  // Auto-save functionality
  useEffect(() => {
    const saveTimer = setTimeout(() => {
      localStorage.setItem('workerRegistrationData', JSON.stringify(formData));
      setAutoSaveStatus('saved');
    }, 2000);

    setAutoSaveStatus('saving');
    return () => clearTimeout(saveTimer);
  }, [formData]);

  // Load saved data on component mount
  useEffect(() => {
    const savedData = localStorage.getItem('workerRegistrationData');
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        setFormData(parsedData);
      } catch (error) {
        console.error('Error loading saved data:', error);
      }
    }
  }, []);

  const handleFormChange = (updatedData) => {
    setFormData(updatedData);
    // Clear errors for changed fields
    const changedFields = Object.keys(updatedData)?.filter(
      key => updatedData?.[key] !== formData?.[key]
    );
    if (changedFields?.length > 0) {
      const updatedErrors = { ...errors };
      changedFields?.forEach(field => {
        delete updatedErrors?.[field];
      });
      setErrors(updatedErrors);
    }
  };

  const validateStep = (step) => {
    const newErrors = {};

    switch (step) {
      case 1:
        if (!formData?.selectedCountry) {
          newErrors.country = 'Please select your country';
        }
        if (!formData?.personalDetails?.fullName) {
          newErrors.fullName = 'Full name is required';
        }
        if (!formData?.personalDetails?.email) {
          newErrors.email = 'Email is required';
        }
        if (!formData?.personalDetails?.phoneNumber) {
          newErrors.phoneNumber = 'Phone number is required';
        }
        if (!formData?.personalDetails?.passportNumber) {
          newErrors.passportNumber = 'Passport number is required';
        }
        break;

      case 2:
        if (!formData?.workExperiences || formData?.workExperiences?.length === 0) {
          newErrors.workExperience = 'At least one work experience is required';
        }
        break;

      case 3:
        const requiredDocs = ['passport', 'resume', 'photo'];
        requiredDocs?.forEach(doc => {
          if (!formData?.documents?.[doc]) {
            newErrors[doc] = `${doc} is required`;
          }
        });
        break;

      case 4:
        if (!formData?.paymentMethod) {
          newErrors.paymentMethod = 'Please select a payment method';
        }
        if (formData?.paymentMethod === 'card') {
          if (!formData?.cardDetails?.number) {
            newErrors.cardNumber = 'Card number is required';
          }
          if (!formData?.cardDetails?.name) {
            newErrors.cardName = 'Cardholder name is required';
          }
          if (!formData?.cardDetails?.expiry) {
            newErrors.cardExpiry = 'Expiry date is required';
          }
          if (!formData?.cardDetails?.cvv) {
            newErrors.cardCvv = 'CVV is required';
          }
        }
        break;

      default:
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleNext = async () => {
    if (validateStep(currentStep)) {
      setIsLoading(true);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (currentStep < totalSteps) {
        setCurrentStep(currentStep + 1);
      }
      setIsLoading(false);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    if (validateStep(currentStep)) {
      setIsLoading(true);
      
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Clear saved data after successful submission
      localStorage.removeItem('workerRegistrationData');
      
      setCurrentStep(5); // Move to confirmation step
      setIsLoading(false);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-8">
            <CountrySelector
              selectedCountry={formData?.selectedCountry}
              onCountrySelect={(country) => handleFormChange({ ...formData, selectedCountry: country })}
            />
            {formData?.selectedCountry && (
              <PersonalDetailsForm
                formData={formData?.personalDetails}
                onFormChange={(data) => handleFormChange({ ...formData, personalDetails: data })}
                errors={errors}
              />
            )}
          </div>
        );

      case 2:
        return (
          <WorkExperienceForm
            formData={formData}
            onFormChange={handleFormChange}
            errors={errors}
          />
        );

      case 3:
        return (
          <DocumentUploadForm
            formData={formData}
            onFormChange={handleFormChange}
            errors={errors}
          />
        );

      case 4:
        return (
          <PaymentForm
            formData={formData}
            onFormChange={handleFormChange}
            errors={errors}
          />
        );

      case 5:
        return (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="CheckCircle" size={40} className="text-success" />
            </div>
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              Registration Successful!
            </h2>
            <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
              Thank you for registering with LeadingEdge Asia. Your application has been received and our team will review your documents within 1-2 business days.
            </p>
            <div className="bg-surface p-6 rounded-lg max-w-md mx-auto mb-8">
              <h3 className="font-semibold text-text-primary mb-4">What happens next?</h3>
              <div className="space-y-3 text-sm text-left">
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={16} className="text-primary" />
                  <span>Confirmation email sent to {formData?.personalDetails?.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="FileCheck" size={16} className="text-primary" />
                  <span>Document verification (1-2 days)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Users" size={16} className="text-primary" />
                  <span>Employer matching begins</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={16} className="text-primary" />
                  <span>Our team will contact you within 48 hours</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <Button
                variant="default"
                size="lg"
                iconName="Download"
                iconPosition="left"
              >
                Download Receipt
              </Button>
              <div>
                <Button
                  variant="outline"
                  onClick={() => window.location.href = '/homepage-employment-bridge-platform'}
                >
                  Return to Homepage
                </Button>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <Helmet>
        <title>Worker Registration Hub - LeadingEdge Asia</title>
        <meta name="description" content="Register with LeadingEdge Asia to find legitimate employment opportunities in Singapore. Secure, transparent, and MOM-compliant registration process." />
        <meta name="keywords" content="Singapore jobs, worker registration, employment, work permit, MOM compliance" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        {currentStep < 5 && <ProgressIndicator currentStep={currentStep} totalSteps={totalSteps} />}

        <main className="pt-16">
          {/* Auto-save indicator */}
          {currentStep < 5 && (
            <div className="fixed top-20 right-6 z-40">
              <div className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                autoSaveStatus === 'saving' ?'bg-warning/10 text-warning border border-warning/20' :'bg-success/10 text-success border border-success/20'
              }`}>
                <div className="flex items-center space-x-1">
                  <Icon 
                    name={autoSaveStatus === 'saving' ? 'Loader2' : 'Check'} 
                    size={12} 
                    className={autoSaveStatus === 'saving' ? 'animate-spin' : ''} 
                  />
                  <span>{autoSaveStatus === 'saving' ? 'Saving...' : 'Saved'}</span>
                </div>
              </div>
            </div>
          )}

          <div className="max-w-4xl mx-auto px-6 py-8">
            {renderStepContent()}

            {/* Navigation Buttons */}
            {currentStep < 5 && (
              <div className="flex justify-between items-center mt-12 pt-8 border-t border-border">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentStep === 1}
                  iconName="ArrowLeft"
                  iconPosition="left"
                >
                  Previous
                </Button>

                <div className="text-center">
                  <p className="text-sm text-text-muted">
                    Step {currentStep} of {totalSteps}
                  </p>
                </div>

                {currentStep < 4 ? (
                  <Button
                    variant="default"
                    onClick={handleNext}
                    loading={isLoading}
                    iconName="ArrowRight"
                    iconPosition="right"
                    disabled={!formData?.selectedCountry && currentStep === 1}
                  >
                    {currentStep === 1 && !formData?.selectedCountry ? 'Select Country First' : 'Continue'}
                  </Button>
                ) : (
                  <Button
                    variant="default"
                    onClick={handleSubmit}
                    loading={isLoading}
                    iconName="CreditCard"
                    iconPosition="left"
                    className="hero-cta text-white"
                  >
                    {isLoading ? 'Processing Payment...' : 'Complete Payment'}
                  </Button>
                )}
              </div>
            )}
          </div>

          {/* Testimonials Section - Show on steps 1-3 */}
          {currentStep <= 3 && <TestimonialSection />}

          {/* Trust Footer */}
          {currentStep < 5 && (
            <div className="bg-surface py-8 border-t border-border">
              <div className="max-w-4xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-2">
                      <Icon name="Shield" size={20} className="text-success" />
                      <span className="text-sm font-medium text-text-primary">MOM Registered</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Lock" size={20} className="text-trust" />
                      <span className="text-sm font-medium text-text-primary">SSL Encrypted</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Users" size={20} className="text-warning" />
                      <span className="text-sm font-medium text-text-primary">2,847+ Placed</span>
                    </div>
                  </div>
                  
                  <div className="text-center md:text-right">
                    <p className="text-sm text-text-secondary">
                      Need help? Call us at{' '}
                      <a href="tel:+6562345678" className="text-primary font-medium hover:underline">
                        +65 6234 5678
                      </a>
                    </p>
                    <p className="text-xs text-text-muted">
                      Available Mon-Fri, 9AM-6PM SGT
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </>
  );
};

export default WorkerRegistrationHub;