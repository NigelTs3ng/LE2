import React from 'react';
import Icon from '../../../components/AppIcon';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Line, PieChart, Pie, Cell } from 'recharts';

const JobMarketData = ({ country }) => {
  const marketData = {
    bangladesh: {
      salaryComparison: [
        { category: 'Chef/Cook', home: 350, singapore: 3200, difference: '+814%' },
        { category: 'Construction Supervisor', home: 280, singapore: 3500, difference: '+1150%' },
        { category: 'Production Worker', home: 200, singapore: 2800, difference: '+1300%' },
        { category: 'Service Staff', home: 180, singapore: 2400, difference: '+1233%' }
      ],
      visaTimeline: [
        { step: 'Application Submission', days: 1, description: 'Complete online application' },
        { step: 'Document Verification', days: 7, description: 'MOM reviews credentials' },
        { step: 'Employer Matching', days: 14, description: 'Connect with suitable employers' },
        { step: 'Work Permit Processing', days: 21, description: 'Official permit approval' },
        { step: 'Travel Arrangements', days: 28, description: 'Flight booking & departure' }
      ],
      demographics: [
        { name: 'Food Service', value: 35, color: '#1e3a8a' },
        { name: 'Construction', value: 28, color: '#f59e0b' },
        { name: 'Manufacturing', value: 22, color: '#10b981' },
        { name: 'Others', value: 15, color: '#6b7280' }
      ],
      homeCurrency: 'BDT',
      exchangeRate: '1 SGD = 91.5 BDT'
    },
    india: {
      salaryComparison: [
        { category: 'Software Engineer', home: 1200, singapore: 8500, difference: '+608%' },
        { category: 'Project Manager', home: 1800, singapore: 7200, difference: '+300%' },
        { category: 'Financial Analyst', home: 900, singapore: 5500, difference: '+511%' },
        { category: 'Marketing Manager', home: 1100, singapore: 6800, difference: '+518%' }
      ],
      visaTimeline: [
        { step: 'Application Submission', days: 1, description: 'Complete online application' },
        { step: 'Skills Assessment', days: 5, description: 'Technical evaluation process' },
        { step: 'Employer Matching', days: 10, description: 'Connect with tech companies' },
        { step: 'Work Permit Processing', days: 18, description: 'EP/S Pass approval' },
        { step: 'Relocation Support', days: 25, description: 'Housing & family arrangements' }
      ],
      demographics: [
        { name: 'Technology', value: 42, color: '#1e3a8a' },
        { name: 'Finance', value: 25, color: '#f59e0b' },
        { name: 'Engineering', value: 20, color: '#10b981' },
        { name: 'Others', value: 13, color: '#6b7280' }
      ],
      homeCurrency: 'INR',
      exchangeRate: '1 SGD = 61.2 INR'
    },
    vietnam: {
      salaryComparison: [
        { category: 'Manufacturing Supervisor', home: 450, singapore: 3400, difference: '+656%' },
        { category: 'Hotel Manager', home: 380, singapore: 4200, difference: '+1005%' },
        { category: 'Logistics Coordinator', home: 320, singapore: 3000, difference: '+838%' },
        { category: 'Quality Controller', home: 280, singapore: 2800, difference: '+900%' }
      ],
      visaTimeline: [
        { step: 'Application Submission', days: 1, description: 'Complete online application' },
        { step: 'Document Translation', days: 5, description: 'Certify Vietnamese documents' },
        { step: 'Employer Matching', days: 12, description: 'Manufacturing & service roles' },
        { step: 'Work Permit Processing', days: 20, description: 'WP approval process' },
        { step: 'Cultural Orientation', days: 26, description: 'Singapore workplace training' }
      ],
      demographics: [
        { name: 'Manufacturing', value: 38, color: '#1e3a8a' },
        { name: 'Hospitality', value: 26, color: '#f59e0b' },
        { name: 'Logistics', value: 21, color: '#10b981' },
        { name: 'Others', value: 15, color: '#6b7280' }
      ],
      homeCurrency: 'VND',
      exchangeRate: '1 SGD = 18,450 VND'
    },
    malaysia: {
      salaryComparison: [
        { category: 'Bank Officer', home: 1400, singapore: 5500, difference: '+293%' },
        { category: 'Nurse', home: 1200, singapore: 4200, difference: '+250%' },
        { category: 'Teacher', home: 1100, singapore: 4800, difference: '+336%' },
        { category: 'IT Specialist', home: 1600, singapore: 7800, difference: '+388%' }
      ],
      visaTimeline: [
        { step: 'Application Submission', days: 1, description: 'Complete online application' },
        { step: 'Qualification Review', days: 3, description: 'Malaysian credentials verified' },
        { step: 'Employer Matching', days: 8, description: 'Professional role matching' },
        { step: 'Work Permit Processing', days: 15, description: 'Fast-track for Malaysians' },
        { step: 'Relocation Planning', days: 20, description: 'Cross-border arrangements' }
      ],
      demographics: [
        { name: 'Banking/Finance', value: 32, color: '#1e3a8a' },
        { name: 'Healthcare', value: 28, color: '#f59e0b' },
        { name: 'Education', value: 23, color: '#10b981' },
        { name: 'Others', value: 17, color: '#6b7280' }
      ],
      homeCurrency: 'MYR',
      exchangeRate: '1 SGD = 3.45 MYR'
    },
    china: {
      salaryComparison: [
        { category: 'Operations Director', home: 2200, singapore: 9200, difference: '+318%' },
        { category: 'Trade Manager', home: 1800, singapore: 7500, difference: '+317%' },
        { category: 'Tech Lead', home: 2000, singapore: 12000, difference: '+500%' },
        { category: 'Supply Chain Manager', home: 1600, singapore: 6500, difference: '+306%' }
      ],
      visaTimeline: [
        { step: 'Application Submission', days: 1, description: 'Complete online application' },
        { step: 'Executive Assessment', days: 7, description: 'Leadership skills evaluation' },
        { step: 'Employer Matching', days: 12, description: 'Senior role placements' },
        { step: 'Work Permit Processing', days: 21, description: 'EP application process' },
        { step: 'Executive Onboarding', days: 30, description: 'Leadership integration program' }
      ],
      demographics: [
        { name: 'Manufacturing', value: 35, color: '#1e3a8a' },
        { name: 'Trade/Commerce', value: 28, color: '#f59e0b' },
        { name: 'Technology', value: 24, color: '#10b981' },
        { name: 'Others', value: 13, color: '#6b7280' }
      ],
      homeCurrency: 'CNY',
      exchangeRate: '1 SGD = 5.32 CNY'
    }
  };

  const data = marketData?.[country] || marketData?.bangladesh;

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Job Market Insights for {country?.charAt(0)?.toUpperCase() + country?.slice(1)}
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Real data to help you make informed decisions about your Singapore career move
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Salary Comparison Chart */}
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-8 border border-border">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-text-primary">Salary Comparison</h3>
              <div className="text-sm text-text-muted">
                {data?.exchangeRate}
              </div>
            </div>
            
            <div className="h-80 mb-6">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data?.salaryComparison} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis 
                    dataKey="category" 
                    tick={{ fontSize: 12 }}
                    angle={-45}
                    textAnchor="end"
                    height={80}
                  />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip 
                    formatter={(value, name) => [
                      `${name === 'home' ? data?.homeCurrency : 'SGD'} ${value}`,
                      name === 'home' ? `${country?.charAt(0)?.toUpperCase() + country?.slice(1)}` : 'Singapore'
                    ]}
                  />
                  <Bar dataKey="home" fill="#6b7280" name="home" />
                  <Bar dataKey="singapore" fill="#1e3a8a" name="singapore" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {data?.salaryComparison?.map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-4 border border-border">
                  <div className="text-sm font-medium text-text-primary mb-1">{item?.category}</div>
                  <div className="text-lg font-bold text-success">{item?.difference}</div>
                  <div className="text-xs text-text-muted">Salary Increase</div>
                </div>
              ))}
            </div>
          </div>

          {/* Industry Distribution */}
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-8 border border-border">
            <h3 className="text-xl font-bold text-text-primary mb-6">
              Industry Distribution - {country?.charAt(0)?.toUpperCase() + country?.slice(1)} Workers
            </h3>
            
            <div className="h-80 mb-6">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data?.demographics}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {data?.demographics?.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry?.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {data?.demographics?.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div 
                    className="w-4 h-4 rounded-full" 
                    style={{ backgroundColor: item?.color }}
                  ></div>
                  <div>
                    <div className="text-sm font-medium text-text-primary">{item?.name}</div>
                    <div className="text-xs text-text-muted">{item?.value}% of placements</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Visa Process Timeline */}
        <div className="mt-16">
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-8 border border-border">
            <h3 className="text-xl font-bold text-text-primary mb-8 text-center">
              Visa Process Timeline - Typical Journey
            </h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>
              
              <div className="space-y-8">
                {data?.visaTimeline?.map((step, index) => (
                  <div key={index} className="relative flex items-start space-x-6">
                    {/* Timeline Dot */}
                    <div className="relative z-10 w-16 h-16 bg-white border-4 border-primary rounded-full flex items-center justify-center shadow-trust">
                      <span className="text-sm font-bold text-primary">Day {step?.days}</span>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 bg-white rounded-lg p-6 border border-border shadow-trust">
                      <h4 className="font-semibold text-text-primary mb-2">{step?.step}</h4>
                      <p className="text-sm text-text-secondary">{step?.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline Summary */}
            <div className="mt-8 bg-white rounded-lg p-6 border border-border">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-text-primary">Average Processing Time</h4>
                  <p className="text-sm text-text-secondary">From application to departure</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">
                    {data?.visaTimeline?.[data?.visaTimeline?.length - 1]?.days} Days
                  </div>
                  <div className="text-sm text-text-muted">Typical Duration</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Statistics */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-success/10 rounded-xl p-6 text-center border border-success/20">
            <Icon name="TrendingUp" size={32} className="text-success mx-auto mb-4" />
            <div className="text-2xl font-bold text-success mb-2">94.7%</div>
            <div className="text-sm text-text-primary font-medium">Success Rate</div>
            <div className="text-xs text-text-muted mt-1">For {country?.charAt(0)?.toUpperCase() + country?.slice(1)} applicants</div>
          </div>
          
          <div className="bg-trust/10 rounded-xl p-6 text-center border border-trust/20">
            <Icon name="Clock" size={32} className="text-trust mx-auto mb-4" />
            <div className="text-2xl font-bold text-trust mb-2">
              {data?.visaTimeline?.[data?.visaTimeline?.length - 1]?.days} Days
            </div>
            <div className="text-sm text-text-primary font-medium">Average Processing</div>
            <div className="text-xs text-text-muted mt-1">Faster than industry average</div>
          </div>
          
          <div className="bg-secondary/10 rounded-xl p-6 text-center border border-secondary/20">
            <Icon name="Users" size={32} className="text-secondary mx-auto mb-4" />
            <div className="text-2xl font-bold text-secondary mb-2">
              {country === 'bangladesh' ? '847+' : 
               country === 'india' ? '1,234+' :
               country === 'vietnam' ? '456+' :
               country === 'malaysia' ? '623+' : '687+'}
            </div>
            <div className="text-sm text-text-primary font-medium">Workers Placed</div>
            <div className="text-xs text-text-muted mt-1">From {country?.charAt(0)?.toUpperCase() + country?.slice(1)} since 2020</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobMarketData;