import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ComplianceShowcase = () => {
  const [activeTab, setActiveTab] = useState('license');

  const complianceData = {
    license: {
      title: "MOM Employment Agency License",
      registrationNumber: "EA12345678",
      issueDate: "March 15, 2021",
      renewalDate: "March 15, 2025",
      status: "Active & Compliant",
      description: "Fully licensed by Singapore's Ministry of Manpower to operate as an employment agency, ensuring all operations meet strict regulatory standards.",
      features: [
        "Licensed to place workers in all approved sectors",
        "Security bond deposited with MOM as required",
        "Regular compliance audits and reporting",
        "Worker protection insurance coverage"
      ]
    },
    security: {
      title: "Security & Data Protection",
      certifications: ["SSL Certificate", "PCI DSS Compliant", "ISO 27001 Aligned"],
      description: "Advanced security measures protect your personal information and ensure safe transactions throughout your journey with us.",
      features: [
        "256-bit SSL encryption for all data transmission",
        "Secure document storage with access controls",
        "PCI compliant payment processing",
        "Regular security audits and penetration testing"
      ]
    },
    audits: {
      title: "Compliance Audit Results",
      lastAudit: "September 2024",
      nextAudit: "March 2025",
      score: "100%",
      description: "Regular independent audits verify our adherence to all MOM regulations and employment standards.",
      features: [
        "Zero compliance violations in 4 years",
        "Perfect audit scores since inception",
        "Quarterly internal compliance reviews",
        "Transparent reporting to regulatory bodies"
      ]
    }
  };

  const certifications = [
    {
      name: "MOM Licensed",
      icon: "Shield",
      status: "Active",
      color: "text-success"
    },
    {
      name: "SSL Secured",
      icon: "Lock",
      status: "Verified",
      color: "text-trust"
    },
    {
      name: "PCI Compliant",
      icon: "CreditCard",
      status: "Certified",
      color: "text-warning"
    },
    {
      name: "Worker Protected",
      icon: "Heart",
      status: "Guaranteed",
      color: "text-accent"
    }
  ];

  const tabs = [
    { id: 'license', label: 'MOM License', icon: 'Shield' },
    { id: 'security', label: 'Security', icon: 'Lock' },
    { id: 'audits', label: 'Audit Results', icon: 'CheckCircle' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Regulatory Compliance & Security
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Full transparency in our regulatory compliance, security measures, and audit results. 
            Your trust is built on verified credentials and proven track record.
          </p>
        </div>

        {/* Certification Badges */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {certifications?.map((cert, index) => (
            <div key={index} className="bg-surface rounded-lg p-6 text-center hover:shadow-trust transition-trust">
              <div className={`flex items-center justify-center w-12 h-12 rounded-full bg-white mx-auto mb-3 ${cert?.color}`}>
                <Icon name={cert?.icon} size={24} />
              </div>
              <h3 className="font-semibold text-primary mb-1">{cert?.name}</h3>
              <p className="text-sm text-text-secondary">{cert?.status}</p>
            </div>
          ))}
        </div>

        {/* Detailed Compliance Information */}
        <div className="bg-surface rounded-2xl p-8">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {tabs?.map((tab) => (
              <button
                key={tab?.id}
                onClick={() => setActiveTab(tab?.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-trust ${
                  activeTab === tab?.id
                    ? 'bg-primary text-white shadow-trust'
                    : 'bg-white text-text-secondary hover:bg-primary hover:text-white'
                }`}
              >
                <Icon name={tab?.icon} size={20} />
                <span>{tab?.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-xl p-8 shadow-trust">
            {activeTab === 'license' && (
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-16 h-16 bg-success/10 rounded-full flex-shrink-0">
                    <Icon name="Shield" size={32} className="text-success" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-primary mb-2">
                      {complianceData?.license?.title}
                    </h3>
                    <p className="text-text-secondary mb-4">
                      {complianceData?.license?.description}
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="font-medium text-text-primary">License Number:</span>
                      <span className="text-primary font-bold">{complianceData?.license?.registrationNumber}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="font-medium text-text-primary">Issue Date:</span>
                      <span className="text-text-secondary">{complianceData?.license?.issueDate}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="font-medium text-text-primary">Renewal Date:</span>
                      <span className="text-text-secondary">{complianceData?.license?.renewalDate}</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="font-medium text-text-primary">Status:</span>
                      <span className="text-success font-semibold">{complianceData?.license?.status}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-primary mb-3">License Coverage:</h4>
                    {complianceData?.license?.features?.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <Icon name="CheckCircle" size={16} className="text-success mt-1 flex-shrink-0" />
                        <span className="text-sm text-text-secondary">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'security' && (
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-16 h-16 bg-trust/10 rounded-full flex-shrink-0">
                    <Icon name="Lock" size={32} className="text-trust" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-primary mb-2">
                      {complianceData?.security?.title}
                    </h3>
                    <p className="text-text-secondary mb-4">
                      {complianceData?.security?.description}
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-primary mb-3">Security Certifications:</h4>
                    {complianceData?.security?.certifications?.map((cert, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-surface rounded-lg">
                        <Icon name="Award" size={20} className="text-trust" />
                        <span className="font-medium text-text-primary">{cert}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-primary mb-3">Security Features:</h4>
                    {complianceData?.security?.features?.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <Icon name="CheckCircle" size={16} className="text-success mt-1 flex-shrink-0" />
                        <span className="text-sm text-text-secondary">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'audits' && (
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-16 h-16 bg-warning/10 rounded-full flex-shrink-0">
                    <Icon name="CheckCircle" size={32} className="text-warning" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-primary mb-2">
                      {complianceData?.audits?.title}
                    </h3>
                    <p className="text-text-secondary mb-4">
                      {complianceData?.audits?.description}
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="font-medium text-text-primary">Last Audit:</span>
                      <span className="text-text-secondary">{complianceData?.audits?.lastAudit}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="font-medium text-text-primary">Next Audit:</span>
                      <span className="text-text-secondary">{complianceData?.audits?.nextAudit}</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="font-medium text-text-primary">Compliance Score:</span>
                      <span className="text-success font-bold text-xl">{complianceData?.audits?.score}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-primary mb-3">Audit Highlights:</h4>
                    {complianceData?.audits?.features?.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <Icon name="CheckCircle" size={16} className="text-success mt-1 flex-shrink-0" />
                        <span className="text-sm text-text-secondary">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Verification CTA */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8">
            <Icon name="Shield" size={48} className="text-white mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-4">
              Verify Our Credentials
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              All our licenses and certifications are publicly verifiable. 
              Contact MOM directly or check our credentials through official channels.
            </p>
            <Button variant="outline" className="bg-white text-primary hover:bg-surface">
              Verify with MOM
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceShowcase;