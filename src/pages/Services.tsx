import React, { useState } from 'react';
import { 
  Database, 
  Code, 
  Users, 
  TrendingUp, 
  ChevronDown, 
  ChevronRight,
  Layers,
  Shield,
  Zap,
  BarChart
} from 'lucide-react';

const Services: React.FC = () => {
  const [activeService, setActiveService] = useState<number | null>(0);

  const services = [
    {
      icon: Database,
      title: 'Enterprise Resource Planning (ERP)',
      shortDesc: 'Comprehensive ERP solutions that integrate all core business processes',
      fullDesc: `Enterprise Resource Planning (ERP) is a type of software that organizations use to manage and integrate the important parts of their businesses. ERP software can integrate planning, purchasing inventory, sales, marketing, finance, human resources, and more.

      Our ERP solutions provide an integrated view of core business processes, often in real-time, using common databases maintained by a database management system. ERP systems track business resources—cash, raw materials, production capacity—and the status of business commitments: orders, purchase orders, and payroll.

      The applications that make up the system share data across the various departments (manufacturing, purchasing, sales, accounting, etc.) that provide the data. ERP facilitates information flow between all business functions, and manages connections to outside stakeholders.

      Key Benefits:
      • Improved efficiency and productivity through automation
      • Better decision-making with real-time data insights  
      • Enhanced collaboration across departments
      • Reduced operational costs through process optimization
      • Scalable solutions that grow with your business
      • Compliance and risk management capabilities`,
      features: [
        'Financial Management & Accounting',
        'Supply Chain Management',
        'Manufacturing & Production Planning',
        'Customer Relationship Management',
        'Human Resources Management',
        'Business Intelligence & Analytics'
      ]
    },
    {
      icon: Code,
      title: 'Custom Application Development & System Integration',
      shortDesc: 'Tailored development and seamless integration solutions',
      fullDesc: `System Integration involves bringing together sub-systems into one system and ensuring that the subsystems function together as a complete, harmonized system. We specialize in creating immersive applications using cutting-edge technologies.

      Our development expertise spans multiple platforms and technologies:
      • .NET Framework and .NET Core applications
      • Java enterprise applications and microservices
      • Open Source solutions and frameworks
      • Internet of Things (IoT) implementations
      • Big Data processing and analytics platforms

      We excel at integrating disparate systems to create unified, efficient workflows that enhance productivity and reduce operational complexity. Our custom applications are designed to meet your specific business requirements while maintaining scalability and performance.

      Integration Capabilities:
      • API development and management
      • Data transformation and migration
      • Legacy system modernization
      • Cloud migration and hybrid solutions
      • Real-time data synchronization
      • Workflow automation and orchestration`,
      features: [
        'Custom Software Development',
        'API Development & Management',
        'Legacy System Integration',
        'Cloud Migration Services',
        'Microservices Architecture',
        'Data Pipeline Development'
      ]
    },
    {
      icon: Users,
      title: 'IT Resources',
      shortDesc: 'Comprehensive IT staffing and infrastructure solutions',
      fullDesc: `We provide comprehensive IT-related resources, both physical infrastructure and human expertise. Our resource provisioning includes stringent screening methods, a robust recruitment engine, and a commitment to continuing education to ensure our team stays current with evolving technologies.

      Physical Resources:
      • Server infrastructure and cloud computing resources
      • Network architecture and security systems
      • Development and testing environments
      • Backup and disaster recovery solutions
      • Monitoring and performance management tools

      Human Resources:
      • Certified ERP consultants and specialists
      • Software developers and architects
      • Database administrators and analysts
      • Project managers and business analysts
      • Quality assurance and testing professionals
      • Technical support and maintenance teams

      Our recruitment process ensures that every team member possesses:
      • Relevant technical certifications
      • Industry experience and domain knowledge
      • Strong communication and collaboration skills
      • Commitment to continuous learning and improvement`,
      features: [
        'Infrastructure Management',
        'Technical Staffing Solutions',
        'Skills Assessment & Training',
        'Project Team Assembly',
        'Performance Monitoring',
        'Ongoing Support Services'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Value-Added Services',
      shortDesc: 'BI, Optimization, and comprehensive support services',
      fullDesc: `Our value-added services extend beyond implementation to ensure your systems continue to deliver maximum value. We provide comprehensive ongoing support, advanced analytics, and continuous optimization services.

      Business Intelligence & Performance Management:
      Transform your data into actionable insights with our BI solutions. We help you create dashboards, reports, and analytics that drive informed decision-making across all levels of your organization.

      Application Integration Services:
      Seamlessly connect your ERP systems with other business applications, ensuring data flows smoothly across your entire technology ecosystem.

      Business Process Optimization:
      Continuously improve your business processes through analysis, redesign, and automation. Our experts identify bottlenecks and inefficiencies, recommending solutions that enhance productivity and reduce costs.

      Ongoing Support & Operations:
      Our comprehensive support model ensures your systems remain secure, up-to-date, and performing optimally. We provide proactive monitoring, maintenance, and issue resolution to minimize downtime and maximize productivity.`,
      features: [
        'Ongoing Support & Operations',
        'Application Integration',
        'Business Intelligence & Analytics',
        'Performance Management',
        'Process Optimization',
        'Proactive System Monitoring'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0A234E] to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold mb-8">Our Services</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Fortify Cloud Solutions helps to integrate business process best practices with specific client requirements. We provide cost-effective solutions that permit customers to automate their processes as well as increase visibility across their organizations.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <div className="bg-blue-100 p-4 rounded-lg w-fit mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.shortDesc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {services.map((service, index) => (
              <div key={index} className="border border-gray-200 rounded-xl overflow-hidden shadow-lg">
                <button
                  className="w-full p-6 lg:p-8 bg-white hover:bg-gray-50 transition-colors duration-200 text-left"
                  onClick={() => setActiveService(activeService === index ? null : index)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="bg-blue-100 p-3 rounded-lg mr-6">
                        <service.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                        <p className="text-gray-600">{service.shortDesc}</p>
                      </div>
                    </div>
                    <div className="ml-4">
                      {activeService === index ? (
                        <ChevronDown className="h-6 w-6 text-gray-400" />
                      ) : (
                        <ChevronRight className="h-6 w-6 text-gray-400" />
                      )}
                    </div>
                  </div>
                </button>
                
                {activeService === index && (
                  <div className="px-6 lg:px-8 pb-6 lg:pb-8 bg-gray-50">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <div className="prose text-gray-600 leading-relaxed whitespace-pre-line">
                          {service.fullDesc}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Features & Capabilities</h4>
                        <ul className="space-y-3">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start">
                              <div className="bg-blue-600 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Benefits */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Our Services Make a Difference</h2>
            <p className="text-xl text-gray-600">Experience measurable improvements across your organization</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Layers className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Integrated Solutions</h3>
              <p className="text-gray-600">Seamlessly connect all business processes for maximum efficiency</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Security</h3>
              <p className="text-gray-600">Robust security measures protecting your critical business data</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Rapid Implementation</h3>
              <p className="text-gray-600">Accelerated deployment with minimal disruption to operations</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <BarChart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Measurable ROI</h3>
              <p className="text-gray-600">Proven track record of delivering quantifiable business value</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;