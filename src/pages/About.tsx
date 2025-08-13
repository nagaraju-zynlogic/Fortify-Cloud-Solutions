import React from 'react';
import { Target, Eye, Award, Users, Globe, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Client-Focused Excellence',
      description: 'Every decision we make is driven by creating measurable value for our clients, not just meeting baseline expectations.'
    },
    {
      icon: Eye,
      title: 'Process Integrity',
      description: 'We maintain unwavering integrity while focusing on every process step, ensuring quality outcomes through methodical execution.'
    },
    {
      icon: Award,
      title: 'Innovation Leadership',
      description: 'As a major component of business transformation, we continuously innovate to stay at the forefront of ERP solutions.'
    },
    {
      icon: Users,
      title: 'Partnership Approach',
      description: 'We build lasting relationships with our clients, serving as trusted advisors throughout their digital transformation journey.'
    },
    {
      icon: Globe,
      title: 'Global Expertise',
      description: 'Our global delivery model ensures 24/7 support and access to best practices from implementations worldwide.'
    },
    {
      icon: Lightbulb,
      title: 'Continuous Learning',
      description: 'We invest in ongoing education and certification to ensure our team remains at the cutting edge of ERP technology.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0A234E] to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-8">About Fortify Cloud Solutions</h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Innovate, Implement, Support — that's not just our tagline, it's our commitment to every client partnership.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg" 
                alt="Professional team meeting"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Our fundamental goal is to create added value for clients, not just to exist. While maintaining integrity, we focus on every process not just on results. Effective governance over information as well as technology is very important to business success, and this new release further strengthens Fortify Cloud Solutions' continuing role as a major forceful component of innovation and business transformation.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We believe that successful ERP implementations go beyond technology — they require deep understanding of business processes, careful change management, and ongoing partnership to ensure sustainable success.
                </p>
              </div>
              
              <div className="bg-blue-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">What Sets Us Apart</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-blue-600 w-2 h-2 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Deep domain expertise across Workday, SAP, and PeopleSoft platforms</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-600 w-2 h-2 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Proven methodology that reduces implementation risk and accelerates time-to-value</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-600 w-2 h-2 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Global delivery model providing 24/7 support and cost-effective solutions</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-600 w-2 h-2 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Commitment to long-term partnership beyond initial implementation</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <img 
                src="https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg" 
                alt="Team collaboration"
                className="w-full h-64 object-cover rounded-xl shadow-lg"
              />
              
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Expertise</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">Workday</h4>
                    <p className="text-sm text-gray-600">HCM, Payroll, Finance, Planning</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">SAP</h4>
                    <p className="text-sm text-gray-600">S/4HANA, SuccessFactors, Ariba</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">PeopleSoft</h4>
                    <p className="text-sm text-gray-600">HCM, Financials, Campus Solutions</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2">Integration</h4>
                    <p className="text-sm text-gray-600">APIs, ETL, Custom Development</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide every client interaction and project delivery</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-blue-100 p-4 rounded-lg w-fit mb-6">
                  <value.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-[#0A234E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-blue-300 mb-2">500+</div>
              <div className="text-blue-200">Successful Implementations</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-300 mb-2">15+</div>
              <div className="text-blue-200">Years of Experience</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-300 mb-2">50+</div>
              <div className="text-blue-200">Certified Consultants</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-300 mb-2">98%</div>
              <div className="text-blue-200">Client Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;