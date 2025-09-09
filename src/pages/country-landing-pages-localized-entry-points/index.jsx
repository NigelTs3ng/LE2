import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import CountryHero from './components/CountryHero';
import CountrySuccessStories from './components/CountrySuccessStories';
import IndustryOpportunities from './components/IndustryOpportunities';
import JobMarketData from './components/JobMarketData';
import CulturalSupport from './components/CulturalSupport';
import CountrySelector from './components/CountrySelector';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const CountryLandingPages = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentCountry, setCurrentCountry] = useState('bangladesh');
  const [isLoading, setIsLoading] = useState(false);

  // Extract country from URL parameters or default to bangladesh
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const countryParam = urlParams?.get('country');
    
    if (countryParam && ['bangladesh', 'india', 'vietnam', 'malaysia', 'china']?.includes(countryParam)) {
      setCurrentCountry(countryParam);
    }
  }, [location?.search]);

  // Update URL when country changes
  const handleCountryChange = (country) => {
    setIsLoading(true);
    setCurrentCountry(country);
    
    // Update URL without page reload
    const newUrl = `${location?.pathname}?country=${country}`;
    window.history?.pushState({ path: newUrl }, '', newUrl);
    
    // Simulate loading for smooth transition
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  };

  const handleGetStarted = () => {
    navigate('/worker-registration-hub');
  };

  const countryNames = {
    bangladesh: 'Bangladesh',
    india: 'India', 
    vietnam: 'Vietnam',
    malaysia: 'Malaysia',
    china: 'China'
  };

  const countryMetaData = {
    bangladesh: {
      title: 'Bangladesh Workers - Singapore Employment Opportunities | LeadingEdge Asia',
      description: 'Legitimate Singapore job opportunities for Bangladeshi professionals. MOM-registered agency with 847+ successful placements. Culinary, construction, and manufacturing roles available.',
      keywords: 'Bangladesh Singapore jobs, Bangladeshi workers Singapore, Singapore employment Bangladesh, MOM registered agency'
    },
    india: {
      title: 'India Professionals - Singapore Career Opportunities | LeadingEdge Asia', 
      description: 'Advance your career in Singapore. 1,234+ Indian professionals placed in tech, finance, and engineering roles. EP and S Pass visa support available.',
      keywords: 'India Singapore jobs, Indian professionals Singapore, Singapore IT jobs India, EP visa Singapore'
    },
    vietnam: {
      title: 'Vietnam Workers - Singapore Manufacturing & Service Jobs | LeadingEdge Asia',
      description: 'Manufacturing and hospitality opportunities in Singapore for Vietnamese workers. 456+ successful placements with cultural bridge support.',
      keywords: 'Vietnam Singapore jobs, Vietnamese workers Singapore, Singapore manufacturing jobs Vietnam'
    },
    malaysia: {
      title: 'Malaysia Professionals - Singapore Cross-Border Opportunities | LeadingEdge Asia',
      description: 'Leverage proximity advantage for Singapore career growth. 623+ Malaysian professionals in banking, healthcare, and education sectors.',
      keywords: 'Malaysia Singapore jobs, Malaysian professionals Singapore, Singapore banking jobs Malaysia'
    },
    china: {
      title: 'China Executives - Singapore Business Leadership Roles | LeadingEdge Asia',
      description: 'Executive and senior management opportunities in Singapore for Chinese professionals. 687+ placements in manufacturing, trade, and technology.',
      keywords: 'China Singapore jobs, Chinese executives Singapore, Singapore management jobs China'
    }
  };

  const currentMeta = countryMetaData?.[currentCountry];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-text-secondary">Loading {countryNames?.[currentCountry]} opportunities...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{currentMeta?.title}</title>
        <meta name="description" content={currentMeta?.description} />
        <meta name="keywords" content={currentMeta?.keywords} />
        <meta property="og:title" content={currentMeta?.title} />
        <meta property="og:description" content={currentMeta?.description} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={currentMeta?.title} />
        <meta name="twitter:description" content={currentMeta?.description} />
        <link rel="canonical" href={`https://leadingedgeasia.com/country-landing-pages-localized-entry-points?country=${currentCountry}`} />
      </Helmet>
      <div className="min-h-screen bg-white">
        <Header />
        
        {/* Country Selector */}
        <CountrySelector 
          currentCountry={currentCountry}
          onCountryChange={handleCountryChange}
        />

        {/* Hero Section */}
        <CountryHero 
          country={currentCountry}
          onGetStarted={handleGetStarted}
        />

        {/* Success Stories Section */}
        <CountrySuccessStories country={currentCountry} />

        {/* Industry Opportunities Section */}
        <IndustryOpportunities country={currentCountry} />

        {/* Job Market Data Section */}
        <JobMarketData country={currentCountry} />

        {/* Cultural Support Section */}
        <CulturalSupport country={currentCountry} />

        {/* Final CTA Section */}
        <section className="py-16 bg-gradient-to-br from-primary to-secondary">
          <div className="container mx-auto px-6 lg:px-8 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Start Your Singapore Journey from {countryNames?.[currentCountry]}?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Join thousands of professionals who have transformed their careers with our trusted platform
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button 
                  variant="secondary"
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 font-semibold"
                  onClick={handleGetStarted}
                >
                  Start Your Application
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                
                <button 
                  onClick={() => navigate('/success-stories-gallery')}
                  className="px-8 py-3 border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-primary transition-colors flex items-center space-x-2"
                >
                  <Icon name="Users" size={20} />
                  <span>View More Success Stories</span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t border-white/20">
                <div className="flex items-center space-x-2 text-white/90">
                  <Icon name="Shield" size={20} />
                  <span className="text-sm font-medium">MOM Registered Agency</span>
                </div>
                <div className="flex items-center space-x-2 text-white/90">
                  <Icon name="Users" size={20} />
                  <span className="text-sm font-medium">2,847+ Workers Placed</span>
                </div>
                <div className="flex items-center space-x-2 text-white/90">
                  <Icon name="Star" size={20} />
                  <span className="text-sm font-medium">94.7% Success Rate</span>
                </div>
                <div className="flex items-center space-x-2 text-white/90">
                  <Icon name="Lock" size={20} />
                  <span className="text-sm font-medium">SSL Secured Platform</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                      <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" fill="none"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold">LeadingEdge Asia</div>
                    <div className="text-xs text-gray-400">Trusted Employment Bridge</div>
                  </div>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Connecting Southeast Asian talent with Singapore opportunities through transparency, trust, and cultural understanding.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  <li><button onClick={() => navigate('/worker-registration-hub')} className="text-gray-400 hover:text-white transition-colors">Find Work</button></li>
                  <li><button onClick={() => navigate('/employer-partnership-center')} className="text-gray-400 hover:text-white transition-colors">Hire Workers</button></li>
                  <li><button onClick={() => navigate('/success-stories-gallery')} className="text-gray-400 hover:text-white transition-colors">Success Stories</button></li>
                  <li><button onClick={() => navigate('/about-us-authority-trust-building')} className="text-gray-400 hover:text-white transition-colors">About Us</button></li>
                </ul>
              </div>

              {/* Countries */}
              <div>
                <h4 className="font-semibold mb-4">Countries We Serve</h4>
                <ul className="space-y-2 text-sm">
                  <li><button onClick={() => handleCountryChange('bangladesh')} className="text-gray-400 hover:text-white transition-colors">Bangladesh</button></li>
                  <li><button onClick={() => handleCountryChange('india')} className="text-gray-400 hover:text-white transition-colors">India</button></li>
                  <li><button onClick={() => handleCountryChange('vietnam')} className="text-gray-400 hover:text-white transition-colors">Vietnam</button></li>
                  <li><button onClick={() => handleCountryChange('malaysia')} className="text-gray-400 hover:text-white transition-colors">Malaysia</button></li>
                  <li><button onClick={() => handleCountryChange('china')} className="text-gray-400 hover:text-white transition-colors">China</button></li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="font-semibold mb-4">Contact Us</h4>
                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Icon name="MapPin" size={16} />
                    <span>Singapore Business District</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Phone" size={16} />
                    <span>+65 6123 4567</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Mail" size={16} />
                    <span>hello@leadingedgeasia.com</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
              <div className="text-sm text-gray-400">
                © {new Date()?.getFullYear()} LeadingEdge Asia. All rights reserved.
              </div>
              <div className="flex items-center space-x-4 mt-4 md:mt-0">
                <span className="text-xs text-gray-500">MOM License: EA12345678</span>
                <div className="flex items-center space-x-1">
                  <Icon name="Shield" size={14} className="text-green-500" />
                  <span className="text-xs text-gray-500">SSL Secured</span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default CountryLandingPages;