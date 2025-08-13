import React from 'react';
import Hero from '../components/UI/Hero';
import FeatureCard from '../components/UI/FeatureCard';
import ProcessStep from '../components/UI/ProcessStep';
import { 
  Users, 
  Zap, 
  Shield, 
  Settings, 
  TrendingUp, 
  HeartHandshake,
  Search,
  Cog,
  Rocket,
  LifeBuoy,
  ArrowRight
} from 'lucide-react';
import WhyChooseUs from '../components/UI/WhyChooseUs';
import StepCard from '../components/UI/StepCard';
import ExpertiseShowcase from '@/components/UI/ExpertiseShowcase';
import WorkTogetherSection from '@/components/UI/WorkTogetherSection';


interface HomeProps {
  onPageChange: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ onPageChange }) => {
  const features = [
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Focused team with deep domain expertise in Workday, SAP and PeopleSoft'
    },
    {
      icon: Zap,
      title: 'Fast Deployment',
      description: 'Accelerated, client-specific deployments tailored to your business needs'
    },
    {
      icon: Shield,
      title: '24/7 Support',
      description: '24/7 support with a global delivery model ensuring continuous assistance'
    },
    {
      icon: Settings,
      title: 'Flexible Solutions',
      description: 'Flexible support packages tailored to your specific requirements'
    },
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: 'Proven track record of successful transformations across industries'
    },
    {
      icon: HeartHandshake,
      title: 'True Partnership',
      description: 'Commitment to partnership and continuous innovation for long-term success'
    }
  ];

  const processSteps = [
    {
      step: 1,
      icon: Search,
      title: 'Discovery & Planning',
      description: 'Understand business needs, define project scope and timeline for optimal results'
    },
    {
      step: 2,
      icon: Cog,
      title: 'Configuration & Testing',
      description: 'Configure to fit your processes, rigorous testing for quality assurance'
    },
    {
      step: 3,
      icon: Rocket,
      title: 'Deployment & Knowledge Transfer',
      description: 'Seamless go-live support with comprehensive training for your team'
    },
    {
      step: 4,
      icon: LifeBuoy,
      title: 'Ongoing Support & Optimization',
      description: 'Continuous monitoring and proactive issue resolution for peak performance'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero onCtaClick={() => onPageChange('contact')} />



      {/* Introduction Section */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              Our fundamental goal is to create added value for clients, not just to exist.
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Fortify Cloud Solutions helps businesses grow by delivering ERP applications that simplify complexity and maximize efficiency. We integrate core operations, provide real-time data insights, and automate workflows so organizations can make smarter decisions faster. Our solutions connect people, processes, and technology — turning challenges into opportunities for sustainable growth.
            </p>
          </div>
        </div>
      </section> */}


      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
  <div className="max-w-6xl mx-auto px-6 lg:px-8">
    <div className="text-center space-y-8">
      {/* Decorative Accent */}
      <div className="flex justify-center">
        {/* <span className="px-4 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-full">
          About Us
        </span> */}
      </div>

      {/* Title */}
      <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
        Our fundamental goal is to create{" "}
        <span className="text-blue-600">added value</span> for clients,  
        not just to exist.
      </h2>

      {/* Description */}
      <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
        Fortify Cloud Solutions helps businesses grow by delivering ERP applications that 
        simplify complexity and maximize efficiency. We integrate core operations, provide 
        real-time data insights, and automate workflows so organizations can make smarter 
        decisions faster. Our solutions connect people, processes, and technology — turning 
        challenges into opportunities for sustainable growth.
      </p>

      {/* Divider Line */}
      <div className="flex justify-center">
        <span className="block w-16 h-1 bg-blue-600 rounded-full"></span>
      </div>
    </div>
  </div>
</section>





      {/* Why Choose Us Section */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
            <p className="text-xl text-gray-600">
              Experience the difference that expertise and dedication make
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section> */}

      {/* Engagement Model Section */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Proven Engagement Model</h2>
            <p className="text-xl text-gray-600">
              A systematic approach to ensure your success at every phase
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
            {processSteps.map((step, index) => (
              <ProcessStep
                key={index}
                step={step.step}
                icon={step.icon}
                title={step.title}
                description={step.description}
                isLast={index === processSteps.length - 1}
              />
            ))}
          </div>
        </div>
      </section> */}

      <ExpertiseShowcase/>

      <StepCard/>


      <WhyChooseUs/>

      <WorkTogetherSection/>

      {/* Final CTA Section */}
      {/* <section className="py-20 bg-[#0A234E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">Let's Work Together</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="space-y-4">
              <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold">Schedule Discovery Call</h3>
              <p className="text-blue-200">Schedule a discovery call to discuss your needs and challenges</p>
            </div>
            
            <div className="space-y-4">
              <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold">Receive Tailored Proposal</h3>
              <p className="text-blue-200">Receive a tailored proposal aligned to your specific goals</p>
            </div>
            
            <div className="space-y-4">
              <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold">Begin Transformation</h3>
              <p className="text-blue-200">Begin your application transformation journey with our experts</p>
            </div>
          </div>

          <button
            onClick={() => onPageChange('contact')}
            className="group bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-semibold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center mx-auto"
          >
            Schedule Your Call
            <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </section> */}

    </div>
  );
};

export default Home;