import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/AppIcon';
import Image from '../../components/AppImage';
import Button from '../../components/ui/Button';
import Header from '../../components/ui/Header';

// Import components
import IndustryCard from './components/IndustryCard';
import WorkerProfileCard from './components/WorkerProfileCard';
import FilterPanel from './components/FilterPanel';
import ContactWorkerModal from './components/ContactWorkerModal';
import SuccessMetrics from './components/SuccessMetrics';
import EmployerTestimonials from './components/EmployerTestimonials';
import ComplianceSection from './components/ComplianceSection';

const EmployerPartnershipCenter = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedWorker, setSelectedWorker] = useState(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [currentView, setCurrentView] = useState('industries'); // industries, workers, metrics, testimonials, compliance
  
  const [filters, setFilters] = useState({
    industry: 'all',
    experienceLevel: 'all',
    availability: 'all',
    salaryRange: 'all',
    language: 'all',
    nationality: 'all'
  });

  // Mock data for industries
  const industries = [
    {
      type: 'F&B',
      subtitle: 'Food & Beverage',
      availableWorkers: 234,
      avgPlacement: '5 days',
      salaryRange: 'SGD 2,200 - 3,500',
      successRate: '96%',
      roles: ['Head Chef', 'Sous Chef', 'Kitchen Helper', 'Server', 'Bartender']
    },
    {
      type: 'Construction',
      subtitle: 'Building & Infrastructure',
      availableWorkers: 189,
      avgPlacement: '3 days',
      salaryRange: 'SGD 2,500 - 4,200',
      successRate: '94%',
      roles: ['Site Supervisor', 'Mason', 'Carpenter', 'Electrician', 'Welder']
    },
    {
      type: 'Caregiving',
      subtitle: 'Healthcare & Elderly Care',
      availableWorkers: 156,
      avgPlacement: '7 days',
      salaryRange: 'SGD 2,800 - 4,000',
      successRate: '98%',
      roles: ['Registered Nurse', 'Care Assistant', 'Physiotherapist', 'Companion']
    },
    {
      type: 'Domestic Services',
      subtitle: 'Household & Property',
      availableWorkers: 312,
      avgPlacement: '4 days',
      salaryRange: 'SGD 1,800 - 2,800',
      successRate: '92%',
      roles: ['Housekeeper', 'Driver', 'Gardener', 'Security Guard', 'Cleaner']
    }
  ];

  // Mock data for workers
  const workers = [
    {
      id: 1,
      name: 'Ahmed Rahman',
      role: 'Head Chef',
      nationality: 'Bangladesh',
      age: 32,
      experience: 8,
      experienceLevel: 'Senior',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      availability: 'Immediate',
      expectedSalary: 'SGD 3,200',
      languages: ['English', 'Bengali', 'Hindi'],
      skills: ['Continental Cuisine', 'Team Leadership', 'Menu Planning', 'Cost Control', 'Food Safety'],
      certifications: ['Food Safety Certificate', 'Culinary Arts Diploma'],
      verified: true,
      industry: 'F&B'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      role: 'Registered Nurse',
      nationality: 'India',
      age: 28,
      experience: 5,
      experienceLevel: 'Experienced',
      photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face',
      availability: 'Within 2 weeks',
      expectedSalary: 'SGD 3,800',
      languages: ['English', 'Hindi', 'Tamil'],
      skills: ['Patient Care', 'Medication Management', 'Emergency Response', 'Health Assessment'],
      certifications: ['RN License', 'BLS Certification', 'First Aid'],
      verified: true,
      industry: 'Caregiving'
    },
    {
      id: 3,
      name: 'Nguyen Van Duc',
      role: 'Site Supervisor',
      nationality: 'Vietnam',
      age: 35,
      experience: 12,
      experienceLevel: 'Senior',
      photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      availability: 'Within 1 month',
      expectedSalary: 'SGD 4,000',
      languages: ['English', 'Vietnamese', 'Mandarin'],
      skills: ['Project Management', 'Safety Compliance', 'Team Leadership', 'Quality Control'],
      certifications: ['Safety Officer Certificate', 'Project Management'],
      verified: true,
      industry: 'Construction'
    },
    {
      id: 4,
      name: 'Maria Santos',
      role: 'Housekeeper',
      nationality: 'Philippines',
      age: 29,
      experience: 6,
      experienceLevel: 'Experienced',
      photo: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
      availability: 'Immediate',
      expectedSalary: 'SGD 2,400',
      languages: ['English', 'Filipino', 'Mandarin'],
      skills: ['Deep Cleaning', 'Laundry Care', 'Organization', 'Pet Care', 'Cooking'],
      certifications: ['Housekeeping Certificate'],
      verified: true,
      industry: 'Domestic Services'
    },
    {
      id: 5,
      name: 'Li Wei Ming',
      role: 'Sous Chef',
      nationality: 'China',
      age: 26,
      experience: 4,
      experienceLevel: 'Experienced',
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face',
      availability: 'Within 2 weeks',
      expectedSalary: 'SGD 2,800',
      languages: ['English', 'Mandarin', 'Cantonese'],
      skills: ['Chinese Cuisine', 'Wok Cooking', 'Dim Sum', 'Kitchen Management'],
      certifications: ['Culinary Certificate', 'Food Hygiene'],
      verified: true,
      industry: 'F&B'
    },
    {
      id: 6,
      name: 'Rajesh Kumar',
      role: 'Electrician',
      nationality: 'India',
      age: 31,
      experience: 9,
      experienceLevel: 'Senior',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      availability: 'Immediate',
      expectedSalary: 'SGD 3,500',
      languages: ['English', 'Hindi', 'Tamil'],
      skills: ['Electrical Installation', 'Maintenance', 'Troubleshooting', 'Safety Protocols'],
      certifications: ['Electrical License', 'Safety Certificate'],
      verified: true,
      industry: 'Construction'
    }
  ];

  // Filter workers based on current filters
  const filteredWorkers = workers?.filter(worker => {
    if (filters?.industry !== 'all' && worker?.industry !== filters?.industry) return false;
    if (filters?.experienceLevel !== 'all' && worker?.experienceLevel !== filters?.experienceLevel) return false;
    if (filters?.availability !== 'all' && worker?.availability !== filters?.availability) return false;
    if (filters?.nationality !== 'all' && worker?.nationality !== filters?.nationality) return false;
    if (filters?.language !== 'all' && !worker?.languages?.includes(filters?.language)) return false;
    
    if (filters?.salaryRange !== 'all') {
      const salary = parseInt(worker?.expectedSalary?.replace(/[^\d]/g, ''));
      switch (filters?.salaryRange) {
        case '1500-2000':
          if (salary < 1500 || salary > 2000) return false;
          break;
        case '2000-2500':
          if (salary < 2000 || salary > 2500) return false;
          break;
        case '2500-3000':
          if (salary < 2500 || salary > 3000) return false;
          break;
        case '3000+':
          if (salary < 3000) return false;
          break;
      }
    }
    
    return true;
  });

  const handleViewWorkers = (industry) => {
    setSelectedIndustry(industry);
    setFilters(prev => ({ ...prev, industry: industry }));
    setCurrentView('workers');
  };

  const handleFilterChange = (field, value) => {
    setFilters(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleClearFilters = () => {
    setFilters({
      industry: 'all',
      experienceLevel: 'all',
      availability: 'all',
      salaryRange: 'all',
      language: 'all',
      nationality: 'all'
    });
  };

  const handleContactWorker = (worker) => {
    setSelectedWorker(worker);
    setIsContactModalOpen(true);
  };

  const handleContactSubmit = async (contactData) => {
    // Simulate API call
    console.log('Contact form submitted:', contactData);
    
    // Show success message (in real app, you'd handle this properly)
    alert(`Thank you! Your inquiry for ${contactData?.workerName} has been submitted. We'll contact you within 24 hours.`);
  };

  const renderHeroSection = () => (
    <section className="bg-gradient-to-br from-primary via-primary to-secondary text-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Hassle-free Hiring with Full MOM Compliance
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Connect with pre-verified, skilled workers from across Southeast Asia. 
                Every placement comes with complete regulatory compliance and our satisfaction guarantee.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold">2,847+</div>
                <div className="text-white/80 text-sm">Workers Placed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">450+</div>
                <div className="text-white/80 text-sm">Partner Companies</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">5 Days</div>
                <div className="text-white/80 text-sm">Avg. Placement</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">96%</div>
                <div className="text-white/80 text-sm">Success Rate</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => setCurrentView('workers')}
                className="hero-cta"
              >
                <Icon name="Users" size={20} className="mr-2" />
                View Available Workers
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
                onClick={() => setCurrentView('compliance')}
              >
                <Icon name="Shield" size={20} className="mr-2" />
                View Compliance Details
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-trust-xl">
              <Image 
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=600&fit=crop"
                alt="Singapore business team meeting"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-trust-lg p-6 max-w-xs">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center">
                  <Icon name="TrendingUp" size={24} className="text-success" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-text-primary">94%</div>
                  <div className="text-sm text-text-secondary">12+ Month Retention</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const renderNavigationTabs = () => (
    <div className="bg-white shadow-trust sticky top-16 z-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex space-x-8 overflow-x-auto">
          {[
            { key: 'industries', label: 'Industries', icon: 'Building' },
            { key: 'workers', label: 'Available Workers', icon: 'Users' },
            { key: 'metrics', label: 'Success Metrics', icon: 'BarChart3' },
            { key: 'testimonials', label: 'Testimonials', icon: 'MessageSquare' },
            { key: 'compliance', label: 'Compliance', icon: 'Shield' }
          ]?.map((tab) => (
            <button
              key={tab?.key}
              onClick={() => setCurrentView(tab?.key)}
              className={`flex items-center space-x-2 py-4 px-2 border-b-2 transition-colors whitespace-nowrap ${
                currentView === tab?.key
                  ? 'border-primary text-primary' :'border-transparent text-text-secondary hover:text-primary hover:border-primary/50'
              }`}
            >
              <Icon name={tab?.icon} size={16} />
              <span className="font-medium">{tab?.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const renderIndustriesView = () => (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-text-primary mb-4">
            Find Workers by Industry
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Browse our specialized talent pools across Singapore's key industries. 
            Each worker is pre-verified and ready for immediate placement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries?.map((industry, index) => (
            <IndustryCard 
              key={index}
              industry={industry}
              onViewWorkers={handleViewWorkers}
            />
          ))}
        </div>
      </div>
    </section>
  );

  const renderWorkersView = () => (
    <section className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-text-primary mb-4">
            Available Workers
            {filters?.industry !== 'all' && ` - ${filters?.industry}`}
          </h2>
          <p className="text-text-secondary">
            {filteredWorkers?.length} qualified workers ready for placement
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filter Panel */}
          <div className="lg:col-span-1">
            <FilterPanel 
              filters={filters}
              onFilterChange={handleFilterChange}
              onClearFilters={handleClearFilters}
              isOpen={isFilterOpen}
              onToggle={() => setIsFilterOpen(!isFilterOpen)}
            />
          </div>

          {/* Workers Grid */}
          <div className="lg:col-span-3">
            {filteredWorkers?.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredWorkers?.map((worker) => (
                  <WorkerProfileCard 
                    key={worker?.id}
                    worker={worker}
                    onContactWorker={handleContactWorker}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Icon name="Users" size={48} className="text-text-muted mx-auto mb-4" />
                <h3 className="text-xl font-medium text-text-primary mb-2">No workers found</h3>
                <p className="text-text-secondary mb-6">
                  Try adjusting your filters to see more results
                </p>
                <Button variant="outline" onClick={handleClearFilters}>
                  Clear All Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );

  const renderCurrentView = () => {
    switch (currentView) {
      case 'industries':
        return renderIndustriesView();
      case 'workers':
        return renderWorkersView();
      case 'metrics':
        return (
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <SuccessMetrics />
            </div>
          </section>
        );
      case 'testimonials':
        return (
          <section className="py-16 bg-surface">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <EmployerTestimonials />
            </div>
          </section>
        );
      case 'compliance':
        return (
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <ComplianceSection />
            </div>
          </section>
        );
      default:
        return renderIndustriesView();
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      {renderHeroSection()}
      {/* Navigation Tabs */}
      {renderNavigationTabs()}
      {/* Main Content */}
      {renderCurrentView()}
      {/* Contact Worker Modal */}
      <ContactWorkerModal 
        worker={selectedWorker}
        isOpen={isContactModalOpen}
        onClose={() => {
          setIsContactModalOpen(false);
          setSelectedWorker(null);
        }}
        onSubmit={handleContactSubmit}
      />
      {/* Footer CTA */}
      <section className="bg-gradient-to-r from-primary to-secondary py-16">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Find Your Perfect Workers?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join 450+ Singapore companies who trust LeadingEdge Asia for their hiring needs
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => setCurrentView('workers')}
            >
              <Icon name="Users" size={20} className="mr-2" />
              Browse Workers Now
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              <Icon name="Phone" size={20} className="mr-2" />
              Speak to Our Team
            </Button>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-text-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                    <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                <div>
                  <div className="text-lg font-semibold">LeadingEdge Asia</div>
                  <div className="text-sm text-white/70">Your trusted employment bridge</div>
                </div>
              </div>
              <p className="text-white/80 mb-4">
                Connecting Southeast Asian talent with Singapore opportunities through 
                transparent, compliant, and ethical employment practices.
              </p>
              <div className="flex space-x-4">
                <div className="flex items-center space-x-2">
                  <Icon name="Shield" size={16} className="text-success" />
                  <span className="text-sm">MOM Licensed</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Award" size={16} className="text-warning" />
                  <span className="text-sm">ISO Certified</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">For Employers</h3>
              <ul className="space-y-2 text-white/80">
                <li><Link to="/worker-registration-hub" className="hover:text-white transition-colors">Find Workers</Link></li>
                <li><Link to="/success-stories-gallery" className="hover:text-white transition-colors">Success Stories</Link></li>
                <li><Link to="/about-us-authority-trust-building" className="hover:text-white transition-colors">About Us</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-white/80">
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>+65 6123 4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>employers@leadingedge.asia</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span>Singapore</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p>&copy; {new Date()?.getFullYear()} LeadingEdge Asia. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EmployerPartnershipCenter;