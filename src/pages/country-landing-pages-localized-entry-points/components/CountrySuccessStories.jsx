import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CountrySuccessStories = ({ country }) => {
  const successStories = {
    bangladesh: [
      {
        id: 1,
        name: "Mohammad Rahman",
        age: 32,
        previousJob: "Restaurant Cook in Dhaka",
        currentJob: "Head Chef at Marina Bay Restaurant",
        image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?w=400&h=400&fit=crop",
        story: `Mohammad transformed from a local restaurant cook earning BDT 25,000/month to a Head Chef in Singapore earning SGD 3,200/month. He now supports his family of 5 back home and has brought his wife to Singapore.`,
        familyImpact: "Built new home in Dhaka, children now in private school",
        duration: "18 months in Singapore",
        salary: "SGD 3,200/month"
      },
      {
        id: 2,
        name: "Fatima Khatun",
        age: 28,
        previousJob: "Garment Worker in Chittagong",
        currentJob: "Production Supervisor at Electronics Firm",
        image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?w=400&h=400&fit=crop",
        story: `Fatima leveraged her textile experience to become a production supervisor. She completed skills training through our program and now manages a team of 15 workers.`,
        familyImpact: "Supporting parents' medical treatment, sister's university education",
        duration: "2 years in Singapore",
        salary: "SGD 2,800/month"
      },
      {
        id: 3,
        name: "Abdul Karim",
        age: 35,
        previousJob: "Construction Worker in Sylhet",
        currentJob: "Site Supervisor at Major Construction Company",
        image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?w=400&h=400&fit=crop",
        story: `Abdul's construction expertise and leadership skills helped him advance to site supervisor within 14 months. He now oversees major infrastructure projects in Singapore.`,
        familyImpact: "Purchased land in Bangladesh, planning to start construction business",
        duration: "2.5 years in Singapore",
        salary: "SGD 3,500/month"
      }
    ],
    india: [
      {
        id: 1,
        name: "Priya Sharma",
        age: 29,
        previousJob: "Software Developer in Bangalore",
        currentJob: "Senior Tech Lead at FinTech Startup",
        image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?w=400&h=400&fit=crop",
        story: `Priya advanced her tech career by moving to Singapore's thriving startup ecosystem. She now leads a team of 8 developers and has equity in the company.`,
        familyImpact: "Parents relocated to Singapore, brother's MBA funded",
        duration: "3 years in Singapore",
        salary: "SGD 8,500/month"
      },
      {
        id: 2,
        name: "Rajesh Kumar",
        age: 34,
        previousJob: "Mechanical Engineer in Chennai",
        currentJob: "Project Manager at Aerospace Company",
        image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?w=400&h=400&fit=crop",
        story: `Rajesh transitioned from traditional manufacturing to cutting-edge aerospace projects. His expertise in precision engineering made him invaluable to Singapore's aerospace sector.`,
        familyImpact: "Wife joined as dependent, children in international school",
        duration: "4 years in Singapore",
        salary: "SGD 7,200/month"
      },
      {
        id: 3,
        name: "Anita Patel",
        age: 26,
        previousJob: "Marketing Executive in Mumbai",
        currentJob: "Regional Marketing Director",
        image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?w=400&h=400&fit=crop",
        story: `Anita's multilingual skills and cultural understanding helped her become Regional Marketing Director for Southeast Asia within 2 years.`,
        familyImpact: "Supporting family business expansion, sister's medical studies",
        duration: "2.5 years in Singapore",
        salary: "SGD 6,800/month"
      }
    ],
    vietnam: [
      {
        id: 1,
        name: "Nguyen Thi Mai",
        age: 27,
        previousJob: "Factory Worker in Ho Chi Minh City",
        currentJob: "Quality Control Manager at Electronics Plant",
        image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?w=400&h=400&fit=crop",
        story: `Mai's attention to detail and dedication led to rapid promotion. She completed quality management certification and now ensures product standards for international markets.`,
        familyImpact: "Parents' house renovated, younger brother in university",duration: "2 years in Singapore",salary: "SGD 3,400/month"
      },
      {
        id: 2,
        name: "Tran Van Duc",age: 31,previousJob: "Motorcycle Mechanic in Hanoi",currentJob: "Senior Technician at Automotive Service Center",image: "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?w=400&h=400&fit=crop",story: `Duc's mechanical skills translated perfectly to Singapore's automotive industry. He completed advanced training and now specializes in luxury vehicle maintenance.`,familyImpact: "Opened motorcycle repair shop for wife to manage",duration: "3 years in Singapore",salary: "SGD 4,100/month"
      },
      {
        id: 3,
        name: "Le Thi Hoa",age: 24,previousJob: "Hotel Receptionist in Da Nang",currentJob: "Guest Relations Manager at 5-Star Hotel",image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?w=400&h=400&fit=crop",
        story: `Hoa's hospitality experience and language skills made her perfect for Singapore's tourism industry. She now manages VIP guest experiences at a luxury hotel.`,
        familyImpact: "Family\'s small hotel business expanded with her support",
        duration: "18 months in Singapore",
        salary: "SGD 3,800/month"
      }
    ],
    malaysia: [
      {
        id: 1,
        name: "Ahmad Zulkifli",
        age: 30,
        previousJob: "Bank Officer in Kuala Lumpur",
        currentJob: "Senior Financial Analyst at Investment Firm",
        image: "https://images.pexels.com/photos/1043472/pexels-photo-1043472.jpeg?w=400&h=400&fit=crop",
        story: `Ahmad leveraged his banking experience and proximity to Singapore to advance in financial services. His multilingual abilities opened doors to regional clients.`,
        familyImpact: "Wife's business expanded, children's education fund secured",
        duration: "2.5 years in Singapore",
        salary: "SGD 5,500/month"
      },
      {
        id: 2,
        name: "Siti Nurhaliza",
        age: 28,
        previousJob: "Nurse in Johor Bahru",
        currentJob: "Senior Nurse at Private Hospital",
        image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?w=400&h=400&fit=crop",
        story: `Siti's nursing qualifications were recognized in Singapore, allowing her to work in a state-of-the-art private hospital while living close to family.`,
        familyImpact: "Parents receive better healthcare, sister's wedding funded",
        duration: "3 years in Singapore",
        salary: "SGD 4,200/month"
      },
      {
        id: 3,
        name: "Raj Krishnan",
        age: 33,
        previousJob: "IT Support in Penang",
        currentJob: "Cloud Solutions Architect",
        image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?w=400&h=400&fit=crop",
        story: `Raj's IT background and cultural familiarity helped him transition to cloud architecture. He now designs solutions for multinational corporations.`,
        familyImpact: "Family home upgraded, parents' retirement secured",duration: "4 years in Singapore",salary: "SGD 7,800/month"
      }
    ],
    china: [
      {
        id: 1,
        name: "Li Wei",age: 32,previousJob: "Manufacturing Engineer in Shanghai",currentJob: "Operations Director at Tech Manufacturing",image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?w=400&h=400&fit=crop",
        story: `Li Wei's manufacturing expertise and leadership skills led to rapid advancement. He now oversees production for cutting-edge technology products exported globally.`,
        familyImpact: "Parents' medical care covered, daughter in international school",
        duration: "3.5 years in Singapore",
        salary: "SGD 9,200/month"
      },
      {
        id: 2,
        name: "Zhang Mei",
        age: 26,
        previousJob: "English Teacher in Beijing",
        currentJob: "International Education Coordinator",
        image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?w=400&h=400&fit=crop",
        story: `Zhang Mei's teaching background and bilingual skills made her perfect for Singapore's international education sector. She now coordinates programs for Chinese students.`,
        familyImpact: "Family's education center expanded, brother's studies abroad funded",
        duration: "2 years in Singapore",
        salary: "SGD 5,800/month"
      },
      {
        id: 3,
        name: "Wang Jun",
        age: 29,
        previousJob: "Logistics Coordinator in Guangzhou",
        currentJob: "Supply Chain Manager at E-commerce Giant",
        image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?w=400&h=400&fit=crop",
        story: `Wang Jun's logistics expertise became invaluable in Singapore's role as a regional hub. He now manages supply chains across Southeast Asia.`,familyImpact: "Parents' small business modernized, sister's startup funded",duration: "3 years in Singapore",salary: "SGD 6,500/month"
      }
    ]
  };

  const stories = successStories?.[country] || successStories?.bangladesh;

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Success Stories from {country?.charAt(0)?.toUpperCase() + country?.slice(1)}
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Real transformation stories from professionals who took the leap and achieved their Singapore dreams
          </p>
        </div>

        {/* Success Stories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories?.map((story) => (
            <div key={story?.id} className="success-card bg-white rounded-xl border border-border p-6 hover:shadow-trust-lg transition-all duration-300">
              {/* Profile Section */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden shadow-trust">
                  <Image 
                    src={story?.image}
                    alt={story?.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary">{story?.name}</h3>
                  <p className="text-sm text-text-muted">Age {story?.age}</p>
                </div>
              </div>

              {/* Career Progression */}
              <div className="mb-6">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon name="ArrowRight" size={16} className="text-success" />
                  <span className="text-sm font-medium text-text-primary">Career Journey</span>
                </div>
                <div className="bg-surface rounded-lg p-4 space-y-2">
                  <div className="text-sm text-text-muted">From:</div>
                  <div className="font-medium text-text-secondary">{story?.previousJob}</div>
                  <div className="text-sm text-text-muted">To:</div>
                  <div className="font-medium text-primary">{story?.currentJob}</div>
                </div>
              </div>

              {/* Story */}
              <div className="mb-6">
                <p className="text-sm text-text-secondary leading-relaxed">
                  {story?.story}
                </p>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-success/10 rounded-lg p-3 text-center">
                  <div className="font-bold text-success">{story?.salary}</div>
                  <div className="text-xs text-text-muted">Current Salary</div>
                </div>
                <div className="bg-trust/10 rounded-lg p-3 text-center">
                  <div className="font-bold text-trust">{story?.duration}</div>
                  <div className="text-xs text-text-muted">In Singapore</div>
                </div>
              </div>

              {/* Family Impact */}
              <div className="border-t border-border pt-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon name="Heart" size={16} className="text-secondary" />
                  <span className="text-sm font-medium text-text-primary">Family Impact</span>
                </div>
                <p className="text-sm text-text-secondary">
                  {story?.familyImpact}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
              Join thousands of professionals from {country?.charAt(0)?.toUpperCase() + country?.slice(1)} who have transformed their careers in Singapore
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors">
                Start Your Application
              </button>
              <button className="px-8 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-white transition-colors">
                View More Stories
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountrySuccessStories;