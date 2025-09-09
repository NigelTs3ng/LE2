import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ComplianceSection = () => {
  const complianceFeatures = [
    {
      icon: 'Shield',
      title: 'MOM Registration',
      description: 'Licensed Employment Agency (EA License: 12C6345)',
      status: 'Verified',
      color: 'text-success',
      bgColor: 'bg-success/10'
    },
    {
      icon: 'FileCheck',
      title: 'Worker Verification',
      description: 'Background checks, skill assessments, and document validation',
      status: 'Comprehensive',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: 'Lock',
      title: 'Legal Protection',
      description: 'Full compliance with Employment Act and work permit regulations',
      status: 'Guaranteed',
      color: 'text-warning',
      bgColor: 'bg-warning/10'
    },
    {
      icon: 'Users',
      title: 'Worker Welfare',
      description: 'Fair employment practices and worker rights protection',
      status: 'Assured',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10'
    }
  ];

  const certifications = [
    {
      name: 'MOM Licensed',
      description: 'Ministry of Manpower Employment Agency',
      badge: 'EA12C6345'
    },
    {
      name: 'ISO Certified',
      description: 'Quality Management System',
      badge: 'ISO 9001:2015'
    },
    {
      name: 'SSL Secured',
      description: 'Data Protection & Privacy',
      badge: '256-bit Encryption'
    },
    {
      name: 'ACRA Registered',
      description: 'Singapore Business Registration',
      badge: 'UEN: 202012345G'
    }
  ];

  const verificationProcess = [
    {
      step: 1,
      title: 'Document Verification',
      description: 'Passport, educational certificates, and work experience validation'
    },
    {
      step: 2,
      title: 'Skill Assessment',
      description: 'Practical tests and competency evaluations by industry experts'
    },
    {
      step: 3,
      title: 'Background Check',
      description: 'Criminal record verification and reference checks from previous employers'
    },
    {
      step: 4,
      title: 'Medical Screening',
      description: 'Health examinations and fitness-for-work assessments'
    },
    {
      step: 5,
      title: 'Work Permit Processing',
      description: 'MOM application submission and approval coordination'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Main Compliance Features */}
      <div className="bg-white rounded-xl shadow-trust p-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-text-primary mb-2">
            Full MOM Compliance & Legal Protection
          </h2>
          <p className="text-text-secondary">
            Your peace of mind is our priority - every placement is fully compliant
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {complianceFeatures?.map((feature, index) => (
            <div key={index} className="text-center">
              <div className={`w-16 h-16 ${feature?.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <Icon name={feature?.icon} size={24} className={feature?.color} />
              </div>
              <h3 className="font-semibold text-text-primary mb-2">{feature?.title}</h3>
              <p className="text-sm text-text-secondary mb-3">{feature?.description}</p>
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${feature?.color} ${feature?.bgColor}`}>
                {feature?.status}
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* Certifications */}
      <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-8">
        <h3 className="text-xl font-semibold text-text-primary mb-6 text-center">
          Our Certifications & Licenses
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {certifications?.map((cert, index) => (
            <div key={index} className="bg-white rounded-lg p-4 text-center shadow-trust">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="Award" size={20} className="text-primary" />
              </div>
              <h4 className="font-medium text-text-primary mb-1">{cert?.name}</h4>
              <p className="text-xs text-text-secondary mb-2">{cert?.description}</p>
              <span className="text-xs font-mono bg-surface px-2 py-1 rounded text-text-primary">
                {cert?.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* Verification Process */}
      <div className="bg-white rounded-xl shadow-trust p-8">
        <h3 className="text-xl font-semibold text-text-primary mb-6 text-center">
          Our 5-Step Worker Verification Process
        </h3>
        
        <div className="space-y-6">
          {verificationProcess?.map((process, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-semibold">
                {process.step}
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-text-primary mb-1">{process.title}</h4>
                <p className="text-text-secondary text-sm">{process.description}</p>
              </div>
              {index < verificationProcess?.length - 1 && (
                <div className="absolute left-5 mt-10 w-0.5 h-6 bg-border"></div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Legal Guarantees */}
      <div className="bg-white rounded-xl shadow-trust p-8">
        <h3 className="text-xl font-semibold text-text-primary mb-6 text-center">
          Legal Guarantees & Protection
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <Icon name="CheckCircle" size={20} className="text-success mt-0.5" />
              <div>
                <h4 className="font-medium text-text-primary">Employment Act Compliance</h4>
                <p className="text-sm text-text-secondary">All placements adhere to Singapore's Employment Act requirements</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <Icon name="CheckCircle" size={20} className="text-success mt-0.5" />
              <div>
                <h4 className="font-medium text-text-primary">Work Permit Guarantee</h4>
                <p className="text-sm text-text-secondary">We handle all MOM applications and ensure approval</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <Icon name="CheckCircle" size={20} className="text-success mt-0.5" />
              <div>
                <h4 className="font-medium text-text-primary">Replacement Assurance</h4>
                <p className="text-sm text-text-secondary">Free replacement within 3 months if worker leaves</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <Icon name="CheckCircle" size={20} className="text-success mt-0.5" />
              <div>
                <h4 className="font-medium text-text-primary">Insurance Coverage</h4>
                <p className="text-sm text-text-secondary">Comprehensive insurance for all placed workers</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <Icon name="CheckCircle" size={20} className="text-success mt-0.5" />
              <div>
                <h4 className="font-medium text-text-primary">Legal Support</h4>
                <p className="text-sm text-text-secondary">24/7 legal assistance for employment-related matters</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <Icon name="CheckCircle" size={20} className="text-success mt-0.5" />
              <div>
                <h4 className="font-medium text-text-primary">Dispute Resolution</h4>
                <p className="text-sm text-text-secondary">Mediation services for employer-worker conflicts</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Button variant="outline" className="mr-4">
            <Icon name="Download" size={16} className="mr-2" />
            Download Compliance Certificate
          </Button>
          <Button variant="default">
            <Icon name="Phone" size={16} className="mr-2" />
            Speak to Compliance Officer
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ComplianceSection;