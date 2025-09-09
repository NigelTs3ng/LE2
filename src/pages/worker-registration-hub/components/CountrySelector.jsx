import React from 'react';
import Image from '../../../components/AppImage';

const CountrySelector = ({ selectedCountry, onCountrySelect }) => {
  const countries = [
    {
      code: 'BD',
      name: 'Bangladesh',
      flag: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=100&h=60&fit=crop',
      greeting: 'স্বাগতম (Welcome)',
      workers: '847'
    },
    {
      code: 'IN',
      name: 'India',
      flag: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=100&h=60&fit=crop',
      greeting: 'स्वागत है (Welcome)',
      workers: '1,234'
    },
    {
      code: 'VN',
      name: 'Vietnam',
      flag: 'https://images.unsplash.com/photo-1559592413-7cec4d0d2d8f?w=100&h=60&fit=crop',
      greeting: 'Chào mừng (Welcome)',
      workers: '456'
    },
    {
      code: 'MY',
      name: 'Malaysia',
      flag: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=100&h=60&fit=crop',
      greeting: 'Selamat datang (Welcome)',
      workers: '289'
    },
    {
      code: 'CN',
      name: 'China',
      flag: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=100&h=60&fit=crop',
      greeting: '欢迎 (Welcome)',
      workers: '321'
    }
  ];

  return (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold text-text-primary mb-2">
          Select Your Country
        </h2>
        <p className="text-text-secondary">
          Choose your home country to get started with personalized support
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {countries?.map((country) => (
          <button
            key={country?.code}
            onClick={() => onCountrySelect(country)}
            className={`p-4 rounded-lg border-2 transition-all duration-300 text-left hover:shadow-trust ${
              selectedCountry?.code === country?.code
                ? 'border-primary bg-primary/5 shadow-trust'
                : 'border-border hover:border-primary/50'
            }`}
          >
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-12 h-8 rounded overflow-hidden">
                <Image
                  src={country?.flag}
                  alt={`${country?.name} flag`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold text-text-primary">{country?.name}</h3>
                <p className="text-xs text-text-muted">{country?.workers} workers placed</p>
              </div>
            </div>
            <p className="text-sm text-text-secondary italic">
              {country?.greeting}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CountrySelector;