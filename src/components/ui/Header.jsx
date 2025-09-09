import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { 
      name: 'Find Work', 
      path: '/worker-registration-hub',
      description: 'Start your Singapore journey'
    },
    { 
      name: 'Hire Workers', 
      path: '/employer-partnership-center',
      description: 'Find qualified talent'
    },
    { 
      name: 'Success Stories', 
      path: '/success-stories-gallery',
      description: 'Real transformation stories'
    },
    { 
      name: 'Country Guides', 
      path: '/country-landing-pages-localized-entry-points',
      description: 'Localized support'
    }
  ];

  const moreMenuItems = [
    { 
      name: 'About Us', 
      path: '/about-us-authority-trust-building',
      description: 'Our mission & credentials'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActivePath = (path) => {
    return location?.pathname === path;
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-morph shadow-trust-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-6 lg:px-8">
          {/* Logo Section */}
          <Link 
            to="/homepage-employment-bridge-platform" 
            className="flex items-center space-x-3 transition-trust hover:opacity-80"
            onClick={closeMobileMenu}
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary">
              <svg 
                viewBox="0 0 24 24" 
                className="w-6 h-6 text-white" 
                fill="currentColor"
              >
                <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-semibold text-primary leading-tight">
                LeadingEdge
              </span>
              <span className="text-xs text-secondary font-medium leading-tight">
                Asia
              </span>
            </div>
          </Link>

          {/* Trust Indicators - Desktop */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="trust-badge-float px-3 py-1.5 flex items-center space-x-2">
              <Icon name="Shield" size={16} className="text-success" />
              <span className="text-xs font-medium text-text-primary">MOM Registered</span>
            </div>
            <div className="trust-badge-float px-3 py-1.5 flex items-center space-x-2">
              <Icon name="Users" size={16} className="text-trust" />
              <span className="text-xs font-medium text-text-primary">2,847+ Placed</span>
            </div>
            <div className="trust-badge-float px-3 py-1.5 flex items-center space-x-2">
              <Icon name="Lock" size={16} className="text-warning" />
              <span className="text-xs font-medium text-text-primary">SSL Secured</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-trust hover:bg-surface group ${
                  isActivePath(item?.path) 
                    ? 'text-primary bg-surface' :'text-text-secondary hover:text-primary'
                }`}
              >
                <div className="flex flex-col items-center">
                  <span>{item?.name}</span>
                  <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-text-muted">
                    {item?.description}
                  </span>
                </div>
              </Link>
            ))}

            {/* More Menu */}
            <div className="relative group">
              <button className="px-4 py-2 rounded-lg text-sm font-medium text-text-secondary hover:text-primary hover:bg-surface transition-trust flex items-center space-x-1">
                <span>More</span>
                <Icon name="ChevronDown" size={16} />
              </button>
              
              <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-lg shadow-trust-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-2">
                  {moreMenuItems?.map((item) => (
                    <Link
                      key={item?.path}
                      to={item?.path}
                      className={`block px-4 py-3 rounded-lg text-sm transition-trust hover:bg-surface ${
                        isActivePath(item?.path) 
                          ? 'text-primary bg-surface' :'text-text-secondary hover:text-primary'
                      }`}
                    >
                      <div className="font-medium">{item?.name}</div>
                      <div className="text-xs text-text-muted mt-1">{item?.description}</div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Button 
              variant="default" 
              size="sm"
              className="hero-cta text-white font-medium"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-lg text-text-secondary hover:text-primary hover:bg-surface transition-trust touch-feedback"
            aria-label="Toggle mobile menu"
          >
            <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-out ${
          isMobileMenuOpen 
            ? 'max-h-screen opacity-100' :'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-6 py-4 bg-white border-t border-border">
            {/* Trust Indicators - Mobile */}
            <div className="flex items-center justify-center space-x-4 mb-6 pb-4 border-b border-border">
              <div className="flex items-center space-x-1">
                <Icon name="Shield" size={14} className="text-success" />
                <span className="text-xs font-medium text-text-primary">MOM Registered</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="Users" size={14} className="text-trust" />
                <span className="text-xs font-medium text-text-primary">2,847+</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="Lock" size={14} className="text-warning" />
                <span className="text-xs font-medium text-text-primary">SSL</span>
              </div>
            </div>

            {/* Mobile Navigation */}
            <nav className="space-y-2">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={closeMobileMenu}
                  className={`block px-4 py-3 rounded-lg transition-trust touch-feedback ${
                    isActivePath(item?.path) 
                      ? 'text-primary bg-surface' :'text-text-secondary hover:text-primary hover:bg-surface'
                  }`}
                >
                  <div className="font-medium">{item?.name}</div>
                  <div className="text-xs text-text-muted mt-1">{item?.description}</div>
                </Link>
              ))}

              {moreMenuItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={closeMobileMenu}
                  className={`block px-4 py-3 rounded-lg transition-trust touch-feedback ${
                    isActivePath(item?.path) 
                      ? 'text-primary bg-surface' :'text-text-secondary hover:text-primary hover:bg-surface'
                  }`}
                >
                  <div className="font-medium">{item?.name}</div>
                  <div className="text-xs text-text-muted mt-1">{item?.description}</div>
                </Link>
              ))}
            </nav>

            {/* Mobile CTA */}
            <div className="mt-6 pt-4 border-t border-border">
              <Button 
                variant="default" 
                fullWidth
                className="hero-cta text-white font-medium touch-feedback"
                onClick={closeMobileMenu}
              >
                Get Started Today
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;