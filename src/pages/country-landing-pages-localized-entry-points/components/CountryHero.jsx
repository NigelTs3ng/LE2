import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CountryHero = ({ country, onGetStarted }) => {
  const countryData = {
    bangladesh: {
      flag: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop",
      landmark: "https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?w=1200&h=600&fit=crop",
      greeting: "আসসালামু আলাইকুম",
      translation: "Peace be upon you",
      heroTitle: "Your Trusted Path to Singapore Employment",
      heroSubtitle: "Join 847+ Bangladeshi professionals who found legitimate opportunities through our MOM-registered platform",
      concern: "Legitimate agencies vs. exploitation risks",
      colors: {
        primary: "from-green-600 to-red-500",
        accent: "text-green-700"
      }
    },
    india: {
      flag: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&h=400&fit=crop",
      landmark: "https://images.pexels.com/photos/1583339/pexels-photo-1583339.jpeg?w=1200&h=600&fit=crop",
      greeting: "नमस्ते",
      translation: "Greetings",
      heroTitle: "Advance Your Career in Singapore",
      heroSubtitle: "1,234+ Indian professionals have accelerated their careers with our comprehensive support system",
      concern: "Career advancement opportunities",
      colors: {
        primary: "from-orange-500 to-green-600",
        accent: "text-orange-600"
      }
    },
    vietnam: {
      flag: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800&h=400&fit=crop",
      landmark: "https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg?w=1200&h=600&fit=crop",
      greeting: "Xin chào",
      translation: "Hello",
      heroTitle: "Bridge Your Dreams to Singapore",
      heroSubtitle: "456+ Vietnamese workers successfully transitioned with our cultural bridge support",
      concern: "Cultural bridge support",
      colors: {
        primary: "from-red-600 to-yellow-500",
        accent: "text-red-600"
      }
    },
    malaysia: {
      flag: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&h=400&fit=crop",
      landmark: "https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?w=1200&h=600&fit=crop",
      greeting: "Selamat datang",
      translation: "Welcome",
      heroTitle: "Your Neighboring Opportunity Awaits",
      heroSubtitle: "623+ Malaysian professionals leveraged proximity and cultural similarity for Singapore success",
      concern: "Proximity and cultural similarity",
      colors: {
        primary: "from-blue-600 to-red-500",
        accent: "text-blue-600"
      }
    },
    china: {
      flag: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&h=400&fit=crop",
      landmark: "https://images.pexels.com/photos/2412603/pexels-photo-2412603.jpeg?w=1200&h=600&fit=crop",
      greeting: "你好",
      translation: "Hello",
      heroTitle: "Professional Development & Family Support",
      heroSubtitle: "687+ Chinese professionals achieved career growth while supporting their families back home",
      concern: "Professional development and family support",
      colors: {
        primary: "from-red-600 to-yellow-500",
        accent: "text-red-700"
      }
    }
  };

  const data = countryData?.[country] || countryData?.bangladesh;

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 cultural-pattern opacity-30"></div>
      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Flag and Greeting */}
            <div className="flex items-center space-x-4">
              <div className="w-16 h-12 rounded-lg overflow-hidden shadow-trust">
                <Image 
                  src={data?.flag}
                  alt={`${country} flag`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className={`text-2xl font-bold ${data?.colors?.accent}`}>
                  {data?.greeting}
                </h2>
                <p className="text-sm text-text-muted italic">
                  {data?.translation}
                </p>
              </div>
            </div>

            {/* Main Hero Text */}
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-text-primary leading-tight">
                {data?.heroTitle}
              </h1>
              <p className="text-xl text-text-secondary leading-relaxed">
                {data?.heroSubtitle}
              </p>
            </div>

            {/* Key Focus */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-border shadow-trust">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Shield" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary mb-2">
                    Our Focus for {country?.charAt(0)?.toUpperCase() + country?.slice(1)}
                  </h3>
                  <p className="text-text-secondary">
                    {data?.concern}
                  </p>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-border">
                <Icon name="Shield" size={16} className="text-success" />
                <span className="text-sm font-medium text-text-primary">MOM Registered</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-border">
                <Icon name="Users" size={16} className="text-trust" />
                <span className="text-sm font-medium text-text-primary">2,847+ Placed</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-border">
                <Icon name="Lock" size={16} className="text-warning" />
                <span className="text-sm font-medium text-text-primary">SSL Secured</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="default" 
                size="lg"
                className="hero-cta text-white font-medium"
                onClick={onGetStarted}
              >
                Start Your Journey
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                View Success Stories
                <Icon name="Users" size={20} className="ml-2" />
              </Button>
            </div>
          </div>

          {/* Right Content - Landmark Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-trust-xl">
              <Image 
                src={data?.landmark}
                alt={`${country} landmark`}
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Success Metric */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-trust-lg border border-border">
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${data?.colors?.primary} rounded-lg flex items-center justify-center`}>
                  <Icon name="TrendingUp" size={24} className="text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-text-primary">
                    {country === 'bangladesh' ? '847+' : 
                     country === 'india' ? '1,234+' :
                     country === 'vietnam' ? '456+' :
                     country === 'malaysia' ? '623+' : '687+'}
                  </div>
                  <div className="text-sm text-text-muted">Successful Placements</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountryHero;