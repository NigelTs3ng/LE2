import React, { useState, useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import Header from '../../components/ui/Header';
import StoryCard from './components/StoryCard';
import FilterPanel from './components/FilterPanel';
import StoryModal from './components/StoryModal';
import StatsOverview from './components/StatsOverview';
import FeaturedStory from './components/FeaturedStory';

const SuccessStoriesGallery = () => {
  const [filters, setFilters] = useState({
    country: 'all',
    industry: 'all',
    successType: 'all',
    timeline: 'all'
  });
  const [selectedStory, setSelectedStory] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('en');

  // Mock success stories data
  const successStories = [
    {
      id: 1,
      workerName: "Rahman Ahmed",
      headline: "Bangladeshi Chef Now Manages Singapore Restaurant Kitchen",
      originCountry: "Bangladesh",
      industry: "Food & Beverage",
      successType: "Career Advancement",
      previousRole: "Assistant Cook",
      currentRole: "Head Chef",
      previousSalary: 800,
      currentSalary: 3200,
      timeInSingapore: "3 years",
      familySupported: 5,
      skillsDeveloped: 8,
      futureGoal: "Own restaurant",
      workerPhoto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      videoThumbnail: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
      heroImage: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
      storyPreview: `Rahman's journey from a small village kitchen in Bangladesh to managing a bustling Singapore restaurant is nothing short of inspiring. Through LeadingEdge Asia's comprehensive training program, he mastered international cuisine techniques and kitchen management skills.`,
      fullStory: `Rahman Ahmed's transformation began in a small village in Bangladesh where he worked as an assistant cook earning barely enough to support his family. When he discovered LeadingEdge Asia through a friend's recommendation, he was skeptical but desperate for change.\n\nThe journey wasn't easy. Rahman had to learn new cooking techniques, understand international food safety standards, and adapt to Singapore's fast-paced kitchen environment. But with LeadingEdge's support and his determination, he quickly proved his worth.\n\nToday, Rahman manages a team of 12 chefs in one of Singapore's most popular restaurants. His salary has increased by 300%, and he's been able to send his children to better schools and build a new home for his family in Bangladesh.`,
      achievements: [
        "Promoted to Head Chef within 18 months",
        "Increased kitchen efficiency by 40%",
        "Trained 15+ junior chefs",
        "Developed 3 signature dishes",
        "Earned food safety certification",
        "Built new family home in Bangladesh"
      ],
      careerTimeline: [
        {
          title: "Joined LeadingEdge Program",
          date: "Jan 2021",
          description: "Started with basic cooking skills assessment and Singapore work culture training"
        },
        {
          title: "First Singapore Position",
          date: "Mar 2021",
          description: "Began as line cook at mid-tier restaurant, learning international cuisine"
        },
        {
          title: "Skill Development",
          date: "Sep 2021",
          description: "Completed advanced culinary techniques and kitchen management courses"
        },
        {
          title: "Promotion to Sous Chef",
          date: "Jun 2022",
          description: "Recognized for leadership skills and promoted to assist head chef"
        },
        {
          title: "Head Chef Position",
          date: "Dec 2023",
          description: "Appointed as Head Chef, managing full kitchen operations"
        }
      ],
      familyBefore: "Rahman's family lived in a small rented house in rural Bangladesh. His wife worked in a garment factory, and they struggled to afford their children's education. Medical expenses were a constant worry.",familyAfter: "Now Rahman's family lives in their own two-story home. His wife has started a small business, and all three children attend private school. They have health insurance and savings for the future.",advice: "Don't be afraid to take the leap. LeadingEdge Asia provides genuine opportunities, but you must be willing to work hard and learn continuously. Singapore rewards dedication and skill.",
      tips: [
        "Learn basic English before arriving - it makes everything easier",
        "Be open to feedback and always ask questions",
        "Save money consistently from day one",
        "Build good relationships with colleagues",
        "Never stop learning new skills"
      ],
      featuredDescription: "From earning $800 as an assistant cook in Bangladesh to managing a $3.2M revenue kitchen in Singapore, Rahman's story proves that with the right opportunity and determination, dreams do come true.",
      featuredVideo: {
        thumbnail: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",description: "Watch Rahman share his journey in Bengali with English subtitles"
      },
      familyPhotos: [
        {
          url: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=300&h=300&fit=crop",caption: "Rahman\'s new family home"
        },
        {
          url: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=300&h=300&fit=crop",
          caption: "Children at their new school"
        }
      ]
    },
    {
      id: 2,
      workerName: "Priya Sharma",
      headline: "Vietnamese Caregiver Supports Family While Pursuing Nursing Degree",
      originCountry: "Vietnam",
      industry: "Healthcare",
      successType: "Education Achievement",
      previousRole: "Factory Worker",
      currentRole: "Senior Caregiver",
      previousSalary: 600,
      currentSalary: 2800,
      timeInSingapore: "4 years",
      familySupported: 4,
      skillsDeveloped: 12,
      futureGoal: "Registered Nurse",
      workerPhoto: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
      videoThumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      heroImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
      storyPreview: `Priya's transformation from a factory worker in Vietnam to a respected caregiver pursuing her nursing degree showcases the power of education and determination. LeadingEdge Asia's educational support program made her dreams possible.`,fullStory: `Priya Sharma worked long hours in a textile factory in Ho Chi Minh City, earning barely enough to support her aging parents and younger siblings. Her dream of becoming a nurse seemed impossible until she learned about LeadingEdge Asia's healthcare pathway program.\n\nThe transition wasn't smooth. Priya had to learn medical terminology, understand Singapore's healthcare system, and balance work with part-time studies. But her compassionate nature and dedication to learning made her an exceptional caregiver.\n\nNow in her final year of nursing studies, Priya has become a senior caregiver at a prestigious eldercare facility. She's not only supporting her family financially but also paving the way for her younger sister to join her in Singapore.`,
      achievements: [
        "Completed caregiver certification with distinction",
        "Enrolled in part-time nursing degree program",
        "Promoted to senior caregiver role",
        "Mentored 20+ new caregivers",
        "Achieved 98% patient satisfaction rating",
        "Sponsored sister\'s education in Vietnam"
      ],
      careerTimeline: [
        {
          title: "LeadingEdge Assessment",
          date: "Feb 2020",
          description: "Completed healthcare aptitude test and English proficiency assessment"
        },
        {
          title: "Caregiver Training",
          date: "May 2020",
          description: "Intensive 3-month caregiver certification program in Singapore"
        },
        {
          title: "First Healthcare Role",
          date: "Aug 2020",
          description: "Started as junior caregiver at eldercare facility"
        },
        {
          title: "Nursing Studies Begin",
          date: "Jan 2022",
          description: "Enrolled in part-time nursing degree with employer support"
        },
        {
          title: "Senior Caregiver",
          date: "Jul 2023",
          description: "Promoted to senior role, supervising care teams"
        }
      ],
      familyBefore: "Priya's family struggled in a cramped apartment in Ho Chi Minh City. Her parents had no health insurance, and her siblings couldn't afford higher education. Medical bills were overwhelming.",
      familyAfter: "Her family now lives comfortably with health insurance coverage. Her parents receive regular medical care, and her sister is studying to become a teacher with Priya's financial support.",advice: "Healthcare is more than a job - it's a calling. If you have compassion and willingness to learn, Singapore's healthcare system offers incredible growth opportunities. Education is the key to advancement.",
      tips: [
        "Focus on patient care - everything else follows","Take advantage of continuing education opportunities","Build strong relationships with healthcare teams","Learn medical terminology systematically","Always maintain professional standards"
      ],
      featuredDescription: "Priya's journey from factory floors to healthcare excellence demonstrates how the right opportunity can transform not just careers, but entire family legacies.",
      featuredVideo: {
        thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
        description: "Priya discusses her nursing studies and patient care philosophy"
      },
      familyPhotos: [
        {
          url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=300&h=300&fit=crop",
          caption: "Priya with elderly patients"
        },
        {
          url: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=300&h=300&fit=crop",
          caption: "Family celebration in Vietnam"
        }
      ]
    },
    {
      id: 3,
      workerName: "Li Wei",
      headline: "Chinese Construction Worker Becomes Site Supervisor",
      originCountry: "China",
      industry: "Construction",
      successType: "Career Advancement",
      previousRole: "General Laborer",
      currentRole: "Site Supervisor",
      previousSalary: 1200,
      currentSalary: 4500,
      timeInSingapore: "5 years",
      familySupported: 3,
      skillsDeveloped: 15,
      futureGoal: "Project Manager",
      workerPhoto: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      videoThumbnail: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop",
      heroImage: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop",
      storyPreview: `Li Wei's rise from general laborer to site supervisor showcases how technical skills and leadership development can create extraordinary career growth in Singapore's booming construction industry.`,fullStory: `Li Wei arrived in Singapore with basic construction experience from rural China. Working as a general laborer, he earned modest wages but was determined to advance his career through skill development and hard work.\n\nThrough LeadingEdge Asia's construction pathway program, Li Wei gained certifications in safety management, project coordination, and team leadership. His dedication to learning and natural leadership abilities quickly caught his supervisors' attention.\n\nToday, Li Wei oversees major construction projects worth millions of dollars. He's responsible for coordinating teams of 50+ workers and ensuring projects meet Singapore's strict safety and quality standards.`,
      achievements: [
        "Earned multiple safety certifications",
        "Led 15+ successful project completions",
        "Reduced workplace accidents by 60%",
        "Trained 100+ construction workers",
        "Achieved project manager certification",
        "Purchased apartment in Singapore"
      ],
      careerTimeline: [
        {
          title: "Arrived in Singapore",
          date: "Mar 2019",
          description: "Started as general laborer on residential construction project"
        },
        {
          title: "Safety Certification",
          date: "Aug 2019",
          description: "Completed workplace safety and health officer course"
        },
        {
          title: "Team Leader Role",
          date: "Jan 2021",
          description: "Promoted to team leader overseeing 10-person crew"
        },
        {
          title: "Assistant Supervisor",
          date: "Sep 2022",
          description: "Advanced to assistant supervisor role on major project"
        },
        {
          title: "Site Supervisor",
          date: "Mar 2024",
          description: "Appointed as site supervisor for multi-million dollar development"
        }
      ],
      familyBefore: "Li Wei's family lived in a small village in rural China. His wife worked in agriculture, and they worried about their son's educational opportunities in their remote location.",
      familyAfter: "His family now lives in Singapore, where his son attends an international school. His wife has started her own small business, and they own their apartment.",
      advice: "Construction in Singapore is highly professional and technology-driven. Invest in learning new skills, especially safety and project management. Leadership skills are just as important as technical abilities.",
      tips: [
        "Safety first - never compromise on safety standards",
        "Learn to use construction technology and software",
        "Develop strong communication skills",
        "Build trust with your team through consistency",
        "Stay updated with industry regulations"
      ],
      featuredDescription: "Li Wei's journey from rural China to supervising Singapore's skyline construction proves that with proper training and determination, extraordinary career growth is possible.",
      featuredVideo: {
        thumbnail: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop",
        description: "Li Wei explains construction safety protocols in Mandarin"
      },
      familyPhotos: [
        {
          url: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=300&fit=crop",
          caption: "Li Wei at construction site"
        },
        {
          url: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=300&h=300&fit=crop",
          caption: "Family\'s new Singapore home"
        }
      ]
    },
    {
      id: 4,
      workerName: "Maria Santos",
      headline: "Filipino Domestic Helper Starts Cleaning Business",
      originCountry: "Philippines",
      industry: "Domestic Services",
      successType: "Entrepreneurship",
      previousRole: "Domestic Helper",
      currentRole: "Business Owner",
      previousSalary: 1800,
      currentSalary: 5200,
      timeInSingapore: "6 years",
      familySupported: 6,
      skillsDeveloped: 10,
      futureGoal: "Expand to Malaysia",
      workerPhoto: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      videoThumbnail: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop",
      heroImage: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop",
      storyPreview: `Maria's entrepreneurial journey from domestic helper to successful business owner demonstrates how LeadingEdge Asia's business development program empowers workers to create their own opportunities.`,
      fullStory: `Maria Santos worked as a domestic helper for several families in Singapore, always dreaming of starting her own business. Through LeadingEdge Asia's entrepreneurship program, she learned business planning, financial management, and marketing skills.\n\nStarting with just two clients, Maria gradually built her professional cleaning service. Her attention to detail, reliability, and excellent customer service helped her business grow rapidly through word-of-mouth referrals.\n\nToday, Maria employs 15 people and serves over 200 regular clients across Singapore. Her success has enabled her to bring her entire family to Singapore and invest in property back in the Philippines.`,
      achievements: [
        "Built successful cleaning business from scratch",
        "Employs 15+ staff members",
        "Serves 200+ regular clients",
        "Achieved 95% client retention rate",
        "Purchased commercial property",
        "Brought family to Singapore"
      ],
      careerTimeline: [
        {
          title: "Domestic Helper Role",
          date: "Jan 2018",
          description: "Started working for expatriate families in Singapore"
        },
        {
          title: "Business Training",
          date: "Jun 2020",
          description: "Enrolled in LeadingEdge entrepreneurship development program"
        },
        {
          title: "Business Launch",
          date: "Dec 2020",
          description: "Started cleaning service with 2 part-time clients"
        },
        {
          title: "Team Expansion",
          date: "Aug 2022",
          description: "Hired first employees and expanded service area"
        },
        {
          title: "Business Growth",
          date: "Jan 2024",
          description: "Achieved 200+ clients and opened second office"
        }
      ],
      familyBefore: "Maria's family in the Philippines struggled with irregular income from farming. Her children couldn't afford quality education, and healthcare was limited in their rural area.",
      familyAfter: "Her family now lives in Singapore with permanent residency. All her children attend good schools, and she's invested in a small resort business in the Philippines.",
      advice: "Entrepreneurship requires courage and persistence. Start small, focus on quality service, and always treat your employees well. Success comes from helping others succeed too.",
      tips: [
        "Build strong relationships with your first clients",
        "Invest in proper equipment and training",
        "Always deliver more than promised",
        "Treat employees as family members",
        "Reinvest profits back into the business"
      ],
      featuredDescription: "Maria's transformation from domestic helper to successful entrepreneur shows how business skills and determination can create generational wealth and opportunities.",
      featuredVideo: {
        thumbnail: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop",
        description: "Maria shares business tips in Tagalog with English subtitles"
      },
      familyPhotos: [
        {
          url: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=300&h=300&fit=crop",
          caption: "Maria with her cleaning team"
        },
        {
          url: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=300&h=300&fit=crop",
          caption: "Family business celebration"
        }
      ]
    },
    {
      id: 5,
      workerName: "Rajesh Kumar",
      headline: "Indian IT Support Specialist Advances to Systems Manager",
      originCountry: "India",
      industry: "Manufacturing",
      successType: "Skill Development",
      previousRole: "Factory Technician",
      currentRole: "Systems Manager",
      previousSalary: 1500,
      currentSalary: 6800,
      timeInSingapore: "4 years",
      familySupported: 4,
      skillsDeveloped: 20,
      futureGoal: "IT Director",
      workerPhoto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      videoThumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      heroImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
      storyPreview: `Rajesh's evolution from factory technician to systems manager highlights how continuous learning and technology skills can accelerate career growth in Singapore's advanced manufacturing sector.`,
      fullStory: `Rajesh Kumar worked as a factory technician in Mumbai, maintaining basic machinery with limited growth prospects. When he joined LeadingEdge Asia's advanced manufacturing program, he discovered Singapore's Industry 4.0 initiatives.\n\nThrough intensive training in automation systems, data analytics, and digital manufacturing, Rajesh transformed from a traditional technician to a technology specialist. His ability to bridge technical knowledge with digital systems made him invaluable.\n\nNow as Systems Manager, Rajesh oversees the digital transformation of manufacturing processes, manages IoT systems, and leads a team of engineers. His expertise in smart manufacturing has made him a key player in Singapore's industrial evolution.`,
      achievements: [
        "Mastered 5+ programming languages",
        "Led digital transformation projects",
        "Reduced system downtime by 75%",
        "Trained 30+ engineers in new technologies",
        "Earned advanced certifications in IoT",
        "Published technical papers"
      ],
      careerTimeline: [
        {
          title: "Factory Technician",
          date: "May 2020",
          description: "Started as equipment maintenance technician in Singapore"
        },
        {
          title: "Digital Skills Training",
          date: "Sep 2020",
          description: "Enrolled in Industry 4.0 and IoT certification programs"
        },
        {
          title: "IT Support Specialist",
          date: "Mar 2021",
          description: "Transitioned to IT support role with manufacturing focus"
        },
        {
          title: "Senior Systems Analyst",
          date: "Jan 2023",
          description: "Promoted to analyze and optimize manufacturing systems"
        },
        {
          title: "Systems Manager",
          date: "Aug 2024",
          description: "Appointed to manage digital manufacturing infrastructure"
        }
      ],
      familyBefore: "Rajesh's family lived in a small apartment in Mumbai. His wife worked part-time, and they struggled to save for their children's engineering education dreams.",
      familyAfter: "His family now enjoys a comfortable lifestyle in Singapore. Both children are excelling in STEM programs, and his wife has started her own online tutoring business.",
      advice: "Technology is reshaping manufacturing. Don\'t just learn to use tools - understand how they work and how to improve them. Continuous learning is not optional in today\'s world.",
      tips: [
        "Stay curious about new technologies",
        "Practice coding regularly, even if it's not your main job","Understand both hardware and software aspects","Network with other tech professionals","Document and share your learning journey"
      ],
      featuredDescription: "Rajesh\'s journey from traditional manufacturing to cutting-edge systems management showcases how embracing technology can multiply career opportunities exponentially.",
      featuredVideo: {
        thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
        description: "Rajesh demonstrates smart manufacturing systems in Hindi"
      },
      familyPhotos: [
        {
          url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=300&fit=crop",
          caption: "Rajesh with advanced manufacturing equipment"
        },
        {
          url: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=300&h=300&fit=crop",
          caption: "Family celebrating graduation"
        }
      ]
    },
    {
      id: 6,
      workerName: "Siti Nurhaliza",
      headline: "Malaysian Retail Assistant Becomes Store Manager",
      originCountry: "Malaysia",
      industry: "Retail",
      successType: "Family Support",
      previousRole: "Sales Assistant",
      currentRole: "Store Manager",
      previousSalary: 1100,
      currentSalary: 3800,
      timeInSingapore: "3 years",
      familySupported: 7,
      skillsDeveloped: 12,
      futureGoal: "Regional Manager",
      workerPhoto: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
      videoThumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
      heroImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
      storyPreview: `Siti's advancement from sales assistant to store manager demonstrates how customer service excellence and leadership development can create rapid career progression in Singapore's retail sector.`,
      fullStory: `Siti Nurhaliza worked in a small retail shop in Kuala Lumpur, earning minimal wages with little opportunity for advancement. Through LeadingEdge Asia's retail excellence program, she discovered Singapore's dynamic retail landscape.\n\nHer natural ability to connect with customers, combined with training in inventory management, team leadership, and sales analytics, quickly set her apart. Siti's multilingual skills and cultural sensitivity made her especially valuable in Singapore's diverse market.\n\nAs Store Manager, Siti has increased her store's revenue by 40% and built a loyal customer base. Her success has enabled her to support her extended family and invest in her siblings' education.`,
      achievements: [
        "Increased store revenue by 40%",
        "Achieved highest customer satisfaction scores",
        "Trained 25+ retail staff members",
        "Implemented new inventory systems",
        "Earned retail management certification",
        "Supported 7 family members\' education"
      ],
      careerTimeline: [
        {
          title: "Sales Assistant",
          date: "Jul 2021",
          description: "Started in fashion retail store in Singapore\'s shopping district"
        },
        {
          title: "Customer Service Training",
          date: "Oct 2021",
          description: "Completed advanced customer service and sales techniques course"
        },
        {
          title: "Senior Sales Associate",
          date: "Apr 2022",
          description: "Promoted for exceptional sales performance and customer feedback"
        },
        {
          title: "Assistant Manager",
          date: "Dec 2022",
          description: "Advanced to assist with store operations and staff training"
        },
        {
          title: "Store Manager",
          date: "Jun 2024",
          description: "Appointed as store manager with full operational responsibility"
        }
      ],
      familyBefore: "Siti's large family in Malaysia struggled financially. Her parents couldn't afford to send all their children to university, and medical expenses were a constant burden.",familyAfter: "She now supports her parents\' retirement and has funded university education for three siblings. The family has health insurance and a comfortable home.",advice: "Retail is about people, not just products. Build genuine relationships with customers and colleagues. Success in retail comes from understanding what people need and helping them find it.",
      tips: [
        "Learn about your customers\' preferences and cultures","Always go the extra mile in customer service","Understand your products inside and out","Build strong relationships with your team","Use data to make better business decisions"
      ],
      featuredDescription: "Siti\'s story shows how exceptional customer service skills and cultural understanding can drive both business success and family transformation.",
      featuredVideo: {
        thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",description: "Siti discusses retail excellence in Bahasa Malaysia"
      },
      familyPhotos: [
        {
          url: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=300&fit=crop",caption: "Siti with her retail team"
        },
        {
          url: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=300&h=300&fit=crop",caption: "Family graduation celebration"
        }
      ]
    }
  ];

  // Mock statistics data
  const statsData = {
    totalWorkers: 2847,
    countriesServed: 6,
    industriesCovered: 12,
    averageSalaryIncrease: 185,
    familiesSupported: 8541,
    satisfactionRate: 96
  };

  // Featured story (first story)
  const featuredStory = successStories?.[0];

  // Filter stories based on current filters
  const filteredStories = useMemo(() => {
    return successStories?.filter(story => {
      const countryMatch = filters?.country === 'all' || story?.originCountry?.toLowerCase()?.replace(' ', '-') === filters?.country ||
        story?.originCountry?.toLowerCase() === filters?.country;
      
      const industryMatch = filters?.industry === 'all' || 
        story?.industry?.toLowerCase()?.replace(/[^a-z]/g, '-')?.replace(/-+/g, '-') === filters?.industry ||
        story?.industry?.toLowerCase()?.includes(filters?.industry?.replace('-', ' '));
      
      const successTypeMatch = filters?.successType === 'all'|| story?.successType?.toLowerCase()?.replace(' ', '-') === filters?.successType;
      
      const timelineMatch = filters?.timeline === 'all' || 
        (filters?.timeline === '0-1' && story?.timeInSingapore?.includes('1 year')) ||
        (filters?.timeline === '1-3' && (story?.timeInSingapore?.includes('2 years') || story?.timeInSingapore?.includes('3 years'))) ||
        (filters?.timeline === '3-5' && (story?.timeInSingapore?.includes('4 years') || story?.timeInSingapore?.includes('5 years'))) ||
        (filters?.timeline === '5+' && parseInt(story?.timeInSingapore) > 5);
      
      return countryMatch && industryMatch && successTypeMatch && timelineMatch;
    });
  }, [filters, successStories]);

  // Load language preference on component mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    setCurrentLanguage(savedLanguage);
  }, []);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleClearFilters = () => {
    setFilters({
      country: 'all',
      industry: 'all',
      successType: 'all',
      timeline: 'all'
    });
  };

  const handleViewDetails = (story) => {
    setSelectedStory(story);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedStory(null);
  };

  const handleShare = (story, platform) => {
    const shareUrl = `${window.location?.origin}/success-stories-gallery?story=${story?.id}`;
    const shareText = `Check out ${story?.workerName}'s inspiring success story: ${story?.headline}`;
    
    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`, '_blank');
        break;
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`, '_blank');
        break;
      case 'copy':
        navigator.clipboard?.writeText(shareUrl);
        // You could add a toast notification here
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Helmet>
        <title>Success Stories Gallery - Real Worker Transformations | LeadingEdge Asia</title>
        <meta name="description" content="Discover inspiring success stories of workers from Bangladesh, India, Vietnam, Malaysia, China, and Philippines who transformed their careers through LeadingEdge Asia's legitimate employment opportunities in Singapore." />
        <meta name="keywords" content="success stories, worker transformation, Singapore jobs, career advancement, salary increase, family support, LeadingEdge Asia" />
        <meta property="og:title" content="Success Stories Gallery - Real Worker Transformations" />
        <meta property="og:description" content="Real stories of career transformation and family impact through legitimate Singapore employment opportunities." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={`${window.location?.origin}/success-stories-gallery`} />
      </Helmet>
      <div className="min-h-screen bg-surface">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-24 pb-12 bg-gradient-to-br from-primary to-secondary cultural-pattern">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center text-white">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <Icon name="Star" size={24} className="text-secondary" />
                <span className="text-secondary font-semibold">Real Stories, Real Impact</span>
                <Icon name="Star" size={24} className="text-secondary" />
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Success Stories Gallery
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                Discover inspiring transformations of workers who found legitimate opportunities 
                and built better futures through LeadingEdge Asia
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Link to="/worker-registration-hub">
                  <Button 
                    variant="secondary" 
                    size="lg"
                    className="hero-cta"
                    iconName="ArrowRight"
                    iconPosition="right"
                  >
                    Start Your Journey
                  </Button>
                </Link>
                
                <div className="flex items-center space-x-4 text-white/80">
                  <div className="flex items-center space-x-2">
                    <Icon name="Users" size={20} />
                    <span className="text-sm font-medium">2,847+ Success Stories</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Shield" size={20} />
                    <span className="text-sm font-medium">100% Verified</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          {/* Statistics Overview */}
          <StatsOverview stats={statsData} />

          {/* Featured Story */}
          <FeaturedStory 
            story={featuredStory}
            onViewDetails={handleViewDetails}
            onShare={handleShare}
          />

          {/* Filter Panel */}
          <FilterPanel
            filters={filters}
            onFilterChange={handleFilterChange}
            onClearFilters={handleClearFilters}
            totalStories={successStories?.length}
            filteredCount={filteredStories?.length}
          />

          {/* Stories Grid */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-text-primary">
                All Success Stories
              </h2>
              <div className="text-sm text-text-muted">
                {filteredStories?.length} {filteredStories?.length === 1 ? 'story' : 'stories'} found
              </div>
            </div>

            {filteredStories?.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredStories?.slice(1)?.map((story) => (
                  <StoryCard
                    key={story?.id}
                    story={story}
                    onViewDetails={handleViewDetails}
                    onShare={handleShare}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <Icon name="Search" size={48} className="text-text-muted mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  No stories match your filters
                </h3>
                <p className="text-text-secondary mb-6">
                  Try adjusting your filter criteria to see more success stories
                </p>
                <Button
                  variant="outline"
                  onClick={handleClearFilters}
                  iconName="RotateCcw"
                  iconPosition="left"
                >
                  Clear All Filters
                </Button>
              </div>
            )}
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of workers who have transformed their careers and supported their families through legitimate Singapore employment opportunities.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link to="/worker-registration-hub">
                <Button 
                  variant="secondary" 
                  size="lg"
                  iconName="UserPlus"
                  iconPosition="left"
                >
                  Register as Worker
                </Button>
              </Link>
              
              <Link to="/employer-partnership-center">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-primary"
                  iconName="Building"
                  iconPosition="left"
                >
                  Hire Workers
                </Button>
              </Link>
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/20">
              <div className="flex items-center justify-center space-x-6 text-sm text-white/80">
                <div className="flex items-center space-x-2">
                  <Icon name="Shield" size={16} />
                  <span>MOM Registered</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Lock" size={16} />
                  <span>SSL Secured</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Award" size={16} />
                  <span>96% Success Rate</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Story Detail Modal */}
        <StoryModal
          story={selectedStory}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onShare={handleShare}
        />

        {/* Footer */}
        <footer className="bg-text-primary text-white py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
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
                    <div className="text-sm text-secondary">Trusted Employment Bridge</div>
                  </div>
                </div>
                <p className="text-white/80 mb-4">
                  Connecting Southeast Asian talent with legitimate Singapore opportunities through transparency, trust, and professional excellence.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <Icon name="Shield" size={16} className="text-success" />
                    <span className="text-sm">MOM Registered</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Award" size={16} className="text-secondary" />
                    <span className="text-sm">ISO Certified</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <div className="space-y-2">
                  <Link to="/worker-registration-hub" className="block text-white/80 hover:text-white transition-colors">
                    Find Work
                  </Link>
                  <Link to="/employer-partnership-center" className="block text-white/80 hover:text-white transition-colors">
                    Hire Workers
                  </Link>
                  <Link to="/about-us-authority-trust-building" className="block text-white/80 hover:text-white transition-colors">
                    About Us
                  </Link>
                  <Link to="/country-landing-pages-localized-entry-points" className="block text-white/80 hover:text-white transition-colors">
                    Country Guides
                  </Link>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Contact Info</h4>
                <div className="space-y-2 text-white/80">
                  <div className="flex items-center space-x-2">
                    <Icon name="MapPin" size={16} />
                    <span className="text-sm">Singapore</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Phone" size={16} />
                    <span className="text-sm">+65 6XXX XXXX</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Mail" size={16} />
                    <span className="text-sm">info@leadingedgeasia.com</span>
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
    </>
  );
};

export default SuccessStoriesGallery;