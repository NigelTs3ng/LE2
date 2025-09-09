import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CountrySelector = ({ currentCountry, onCountryChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const countries = [
    {
      code: 'bangladesh',
      name: 'Bangladesh',
      flag: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=100&h=60&fit=crop',
      greeting: 'আসসালামু আলাইকুম',
      workers: '847+'
    },
    {
      code: 'india',
      name: 'India',
      flag: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=100&h=60&fit=crop',
      greeting: 'नमस्ते',
      workers: '1,234+'
    },
    {
      code: 'vietnam',
      name: 'Vietnam',
      flag: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=100&h=60&fit=crop',
      greeting: 'Xin chào',
      workers: '456+'
    },
    {
      code: 'malaysia',
      name: 'Malaysia',
      flag: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=100&h=60&fit=crop',
      greeting: 'Selamat datang',
      workers: '623+'
    },
    {
      code: 'china',
      name: 'China',
      flag: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=100&h=60&fit=crop',
      greeting: '你好',
      workers: '687+'
    }
  ];

  const currentCountryData = countries?.find(c => c?.code === currentCountry) || countries?.[0];

  const handleCountrySelect = (countryCode) => {
    onCountryChange(countryCode);
    setIsOpen(false);
  };

  return (
    <div className="fixed top-20 right-6 z-40">
      <div className="relative">
        {/* Current Country Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-3 bg-white/95 backdrop-blur-sm border border-border rounded-lg px-4 py-3 shadow-trust hover:shadow-trust-lg transition-all duration-300"
        >
          <div className="w-8 h-6 rounded overflow-hidden">
            <Image 
              src={currentCountryData?.flag}
              alt={`${currentCountryData?.name} flag`}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-left">
            <div className="font-medium text-text-primary text-sm">{currentCountryData?.name}</div>
            <div className="text-xs text-text-muted">{currentCountryData?.workers} placed</div>
          </div>
          <Icon 
            name={isOpen ? "ChevronUp" : "ChevronDown"} 
            size={16} 
            className="text-text-muted" 
          />
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-full right-0 mt-2 w-72 bg-white border border-border rounded-lg shadow-trust-lg overflow-hidden">
            <div className="p-3 bg-surface border-b border-border">
              <h3 className="font-semibold text-text-primary text-sm">Select Your Country</h3>
              <p className="text-xs text-text-muted">View opportunities specific to your region</p>
            </div>
            
            <div className="max-h-80 overflow-y-auto">
              {countries?.map((country) => (
                <button
                  key={country?.code}
                  onClick={() => handleCountrySelect(country?.code)}
                  className={`w-full flex items-center space-x-4 p-4 hover:bg-surface transition-colors ${
                    currentCountry === country?.code ? 'bg-primary/5 border-r-2 border-primary' : ''
                  }`}
                >
                  <div className="w-12 h-8 rounded overflow-hidden shadow-sm">
                    <Image 
                      src={country?.flag}
                      alt={`${country?.name} flag`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1 text-left">
                    <div className="font-medium text-text-primary">{country?.name}</div>
                    <div className="text-xs text-text-muted">{country?.greeting}</div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-sm font-semibold text-primary">{country?.workers}</div>
                    <div className="text-xs text-text-muted">Workers</div>
                  </div>
                  
                  {currentCountry === country?.code && (
                    <Icon name="Check" size={16} className="text-primary" />
                  )}
                </button>
              ))}
            </div>
            
            <div className="p-3 bg-surface border-t border-border">
              <div className="flex items-center space-x-2 text-xs text-text-muted">
                <Icon name="Info" size={14} />
                <span>Each country page is tailored to your specific needs and opportunities</span>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Overlay to close dropdown */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-30" 
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default CountrySelector;