import React, { useState } from 'react';
import Input from '../../../components/ui/Input';

import Icon from '../../../components/AppIcon';

const PaymentForm = ({ formData, onFormChange, errors }) => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [showCardDetails, setShowCardDetails] = useState(false);

  const pricingBreakdown = {
    registrationFee: 150,
    processingFee: 25,
    documentVerification: 30,
    total: 205
  };

  const securityBadges = [
    { name: 'SSL Encrypted', icon: 'Lock', color: 'text-success' },
    { name: 'PCI Compliant', icon: 'Shield', color: 'text-trust' },
    { name: 'Secure Payment', icon: 'CreditCard', color: 'text-warning' }
  ];

  const paymentMethods = [
    {
      id: 'card',
      name: 'Credit/Debit Card',
      icon: 'CreditCard',
      description: 'Visa, Mastercard, American Express'
    },
    {
      id: 'bank',
      name: 'Bank Transfer',
      icon: 'Building',
      description: 'Direct bank transfer (2-3 business days)'
    },
    {
      id: 'digital',
      name: 'Digital Wallet',
      icon: 'Smartphone',
      description: 'PayPal, GrabPay, Alipay'
    }
  ];

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
    onFormChange({ ...formData, paymentMethod: method });
  };

  const handleCardInputChange = (field, value) => {
    const updatedCardDetails = {
      ...formData?.cardDetails,
      [field]: value
    };
    onFormChange({ ...formData, cardDetails: updatedCardDetails });
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-text-primary mb-2">
          Secure Payment
        </h2>
        <p className="text-text-secondary">
          Complete your registration with our secure payment system
        </p>
      </div>
      {/* Security Badges */}
      <div className="flex justify-center space-x-6 mb-8">
        {securityBadges?.map((badge) => (
          <div key={badge?.name} className="flex items-center space-x-2">
            <Icon name={badge?.icon} size={20} className={badge?.color} />
            <span className="text-sm font-medium text-text-primary">{badge?.name}</span>
          </div>
        ))}
      </div>
      {/* Pricing Breakdown */}
      <div className="bg-white border border-border rounded-lg p-6 mb-6">
        <h3 className="text-lg font-semibold text-text-primary mb-4">Pricing Breakdown</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-text-secondary">Registration Fee</span>
            <span className="font-medium text-text-primary">SGD ${pricingBreakdown?.registrationFee}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-text-secondary">Processing Fee</span>
            <span className="font-medium text-text-primary">SGD ${pricingBreakdown?.processingFee}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-text-secondary">Document Verification</span>
            <span className="font-medium text-text-primary">SGD ${pricingBreakdown?.documentVerification}</span>
          </div>
          <div className="border-t border-border pt-3">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold text-text-primary">Total Amount</span>
              <span className="text-lg font-bold text-primary">SGD ${pricingBreakdown?.total}</span>
            </div>
          </div>
        </div>
      </div>
      {/* Payment Methods */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-text-primary">Select Payment Method</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {paymentMethods?.map((method) => (
            <button
              key={method?.id}
              onClick={() => handlePaymentMethodChange(method?.id)}
              className={`p-4 rounded-lg border-2 transition-all duration-300 text-left ${
                paymentMethod === method?.id
                  ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50'
              }`}
            >
              <div className="flex items-center space-x-3 mb-2">
                <Icon name={method?.icon} size={24} className="text-primary" />
                <span className="font-medium text-text-primary">{method?.name}</span>
              </div>
              <p className="text-sm text-text-secondary">{method?.description}</p>
            </button>
          ))}
        </div>
      </div>
      {/* Card Payment Form */}
      {paymentMethod === 'card' && (
        <div className="bg-white border border-border rounded-lg p-6">
          <h3 className="text-lg font-semibold text-text-primary mb-4">Card Details</h3>
          <div className="space-y-4">
            <Input
              label="Card Number"
              type="text"
              placeholder="1234 5678 9012 3456"
              value={formData?.cardDetails?.number || ''}
              onChange={(e) => handleCardInputChange('number', e?.target?.value)}
              error={errors?.cardNumber}
              required
            />
            
            <Input
              label="Cardholder Name"
              type="text"
              placeholder="Name as it appears on card"
              value={formData?.cardDetails?.name || ''}
              onChange={(e) => handleCardInputChange('name', e?.target?.value)}
              error={errors?.cardName}
              required
            />

            <div className="grid grid-cols-2 gap-4">
              <Input
                label="Expiry Date"
                type="text"
                placeholder="MM/YY"
                value={formData?.cardDetails?.expiry || ''}
                onChange={(e) => handleCardInputChange('expiry', e?.target?.value)}
                error={errors?.cardExpiry}
                required
              />
              
              <Input
                label="CVV"
                type="text"
                placeholder="123"
                value={formData?.cardDetails?.cvv || ''}
                onChange={(e) => handleCardInputChange('cvv', e?.target?.value)}
                error={errors?.cardCvv}
                required
              />
            </div>
          </div>
        </div>
      )}
      {/* Bank Transfer Details */}
      {paymentMethod === 'bank' && (
        <div className="bg-surface p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-text-primary mb-4">Bank Transfer Details</h3>
          <div className="space-y-3 text-sm">
            <div>
              <span className="font-medium text-text-primary">Bank Name:</span>
              <span className="ml-2 text-text-secondary">DBS Bank Ltd</span>
            </div>
            <div>
              <span className="font-medium text-text-primary">Account Name:</span>
              <span className="ml-2 text-text-secondary">LeadingEdge Asia Pte Ltd</span>
            </div>
            <div>
              <span className="font-medium text-text-primary">Account Number:</span>
              <span className="ml-2 text-text-secondary">123-456789-001</span>
            </div>
            <div>
              <span className="font-medium text-text-primary">Reference:</span>
              <span className="ml-2 text-text-secondary">REG-{Date.now()?.toString()?.slice(-6)}</span>
            </div>
          </div>
          <div className="mt-4 p-3 bg-warning/10 border border-warning/20 rounded-lg">
            <p className="text-sm text-text-secondary">
              Please include the reference number in your transfer and email the receipt to payments@leadingedgeasia.com
            </p>
          </div>
        </div>
      )}
      {/* Digital Wallet Options */}
      {paymentMethod === 'digital' && (
        <div className="bg-white border border-border rounded-lg p-6">
          <h3 className="text-lg font-semibold text-text-primary mb-4">Choose Digital Wallet</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['PayPal', 'GrabPay', 'Alipay', 'WeChat Pay']?.map((wallet) => (
              <button
                key={wallet}
                className="p-4 border border-border rounded-lg hover:border-primary transition-colors text-center"
              >
                <div className="w-8 h-8 bg-muted rounded mx-auto mb-2"></div>
                <span className="text-sm font-medium text-text-primary">{wallet}</span>
              </button>
            ))}
          </div>
        </div>
      )}
      {/* Money-back Guarantee */}
      <div className="bg-success/5 border border-success/20 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <Icon name="Shield" size={20} className="text-success mt-0.5" />
          <div>
            <h4 className="font-medium text-text-primary mb-1">100% Money-Back Guarantee</h4>
            <p className="text-sm text-text-secondary">
              If we cannot find you a suitable job within 6 months, we'll refund your registration fee in full. 
              No questions asked. Your success is our commitment.
            </p>
          </div>
        </div>
      </div>
      {/* Terms and Conditions */}
      <div className="bg-surface p-4 rounded-lg">
        <div className="flex items-start space-x-3">
          <Icon name="FileText" size={20} className="text-text-muted mt-0.5" />
          <div>
            <h4 className="font-medium text-text-primary mb-1">Terms & Conditions</h4>
            <p className="text-sm text-text-secondary">
              By proceeding with payment, you agree to our Terms of Service and Privacy Policy. 
              All payments are processed securely and your data is protected under Singapore's PDPA.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;