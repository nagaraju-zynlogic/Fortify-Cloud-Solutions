import React, { useState } from 'react';
import { 
  Users, 
  DollarSign, 
  UserCheck, 
  Clock, 
  Calendar, 
  Heart, 
  FileText, 
  Award, 
  TrendingUp, 
  Shield,
  ChevronRight,
  Building2
} from 'lucide-react';

const Solutions: React.FC = () => {
  const [activeSolution, setActiveSolution] = useState<number | null>(null);

  const solutions = [
    {
      icon: Users,
      title: 'Human Capital Management (HCM)',
      description: 'Comprehensive workforce management from hire to retire, including employee lifecycle management, organizational planning, and talent development.',
      benefits: ['Streamlined employee onboarding', 'Talent development tracking', 'Performance analytics', 'Succession planning'],
      features: ['Employee profiles and records', 'Organizational hierarchy management', 'Skills and competency tracking', 'Career development planning']
    },
    {
      icon: DollarSign,
      title: 'Payroll Management',
      description: 'Complete payroll processing solution with automated calculations, compliance management, and integration with HR systems.',
      benefits: ['Automated payroll calculations', 'Tax compliance management', 'Direct deposit processing', 'Payroll reporting'],
      features: ['Multi-country payroll support', 'Tax withholding calculations', 'Benefits deductions', 'Year-end processing']
    },
    {
      icon: UserCheck,
      title: 'Recruitment Management',
      description: 'End-to-end recruitment process management from job requisition to offer acceptance, with candidate tracking and assessment tools.',
      benefits: ['Streamlined hiring process', 'Candidate pipeline management', 'Interview coordination', 'Offer management'],
      features: ['Job requisition workflow', 'Applicant tracking system', 'Interview scheduling', 'Background check integration']
    },
    {
      icon: Clock,
      title: 'Time Tracking',
      description: 'Accurate time and attendance tracking with mobile capabilities, overtime calculation, and project time allocation.',
      benefits: ['Accurate time capture', 'Overtime management', 'Project cost allocation', 'Compliance reporting'],
      features: ['Mobile time entry', 'Biometric integration', 'Project time tracking', 'Exception management']
    },
    {
      icon: Calendar,
      title: 'Time Off and Absence Management',
      description: 'Comprehensive leave management system handling various leave types, approval workflows, and accrual calculations.',
      benefits: ['Automated leave calculations', 'Approval workflow', 'Calendar integration', 'Compliance tracking'],
      features: ['Multiple leave types', 'Accrual management', 'Manager approvals', 'Return-to-work processes']
    },
    {
      icon: Heart,
      title: 'Benefits',
      description: 'Complete benefits administration including enrollment, eligibility management, and integration with insurance providers.',
      benefits: ['Benefits enrollment', 'Eligibility management', 'Cost tracking', 'Provider integration'],
      features: ['Plan management', 'Dependent tracking', 'COBRA administration', 'Benefits statements']
    },
    {
      icon: FileText,
      title: 'Open Enrollment',
      description: 'Automated open enrollment process with employee self-service capabilities and decision support tools.',
      benefits: ['Streamlined enrollment', 'Employee self-service', 'Decision support', 'Compliance reporting'],
      features: ['Enrollment periods', 'Plan comparisons', 'Life event processing', 'Confirmation statements']
    },
    {
      icon: Award,
      title: 'Compensation Management',
      description: 'Strategic compensation planning including salary structures, merit increases, and market analysis.',
      benefits: ['Merit planning', 'Budget management', 'Market analysis', 'Pay equity analysis'],
      features: ['Salary structures', 'Pay grades', 'Merit matrices', 'Compensation statements']
    },
    {
      icon: TrendingUp,
      title: 'Advanced Compensation',
      description: 'Sophisticated compensation management including variable pay, long-term incentives, and executive compensation.',
      benefits: ['Variable pay management', 'Incentive calculations', 'Stock option tracking', 'Executive reporting'],
      features: ['Bonus calculations', 'Commission processing', 'Stock grants', 'Retention programs']
    },
    {
      icon: Award,
      title: 'Performance Management',
      description: 'Comprehensive performance evaluation system with goal tracking, 360-degree feedback, and development planning.',
      benefits: ['Goal alignment', '360-degree feedback', 'Performance analytics', 'Development planning'],
      features: ['Performance reviews', 'Goal setting', 'Feedback collection', 'Calibration processes']
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Enterprise-grade security framework with role-based access control, audit trails, and compliance management.',
      benefits: ['Role-based security', 'Audit compliance', 'Data protection', 'Access monitoring'],
      features: ['User authentication', 'Permission management', 'Audit logging', 'Security reporting']
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0A234E] to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold mb-8">Transform Your Operations</h1>
            <p className="text-xl text-blue-100 leading-relaxed mb-8">
              Our solutions seamlessly connect every facet of your enterprise, from recruiting to financial analytics, creating a unified and efficient operational ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* Process Flow Visualization */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Integrated Enterprise Solutions</h2>
            <p className="text-xl text-gray-600">From recruitment to analytics - one unified platform</p>
          </div>

          {/* Visual Process Flow */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <UserCheck className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Recruit</h3>
                <p className="text-sm text-gray-600 mt-2">Find and hire top talent</p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Manage</h3>
                <p className="text-sm text-gray-600 mt-2">Employee lifecycle management</p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Develop</h3>
                <p className="text-sm text-gray-600 mt-2">Performance and growth</p>
              </div>

              <div className="text-center">
                <div className="bg-orange-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <DollarSign className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Compensate</h3>
                <p className="text-sm text-gray-600 mt-2">Payroll and benefits</p>
              </div>

              <div className="text-center">
                <div className="bg-red-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Analyze</h3>
                <p className="text-sm text-gray-600 mt-2">Insights and reporting</p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 text-lg">
                All modules work together seamlessly to provide a complete view of your enterprise operations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Solution Portfolio</h2>
            <p className="text-xl text-gray-600">Comprehensive modules covering every aspect of your business</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className="bg-blue-100 p-3 rounded-lg mr-4">
                        <solution.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{solution.title}</h3>
                    </div>
                    <button
                      onClick={() => setActiveSolution(activeSolution === index ? null : index)}
                      className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                    >
                      <ChevronRight className={`h-5 w-5 transition-transform duration-200 ${
                        activeSolution === index ? 'rotate-90' : ''
                      }`} />
                    </button>
                  </div>

                  <p className="text-gray-600 mb-4">{solution.description}</p>

                  {activeSolution === index && (
                    <div className="space-y-6 pt-4 border-t border-gray-100">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Key Benefits</h4>
                        <ul className="space-y-2">
                          {solution.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-start">
                              <div className="bg-green-500 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-gray-600 text-sm">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Core Features</h4>
                        <ul className="space-y-2">
                          {solution.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start">
                              <div className="bg-blue-500 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-gray-600 text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Benefits */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Integration Matters</h2>
            <p className="text-xl text-gray-600">Experience the power of unified enterprise solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-blue-100 p-4 rounded-lg w-fit mb-6">
                <Building2 className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Single Source of Truth</h3>
              <p className="text-gray-600">Eliminate data silos and ensure consistency across all business functions with unified data management.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-green-100 p-4 rounded-lg w-fit mb-6">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Improved Efficiency</h3>
              <p className="text-gray-600">Streamline processes and reduce manual work through automated workflows and integrated systems.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-purple-100 p-4 rounded-lg w-fit mb-6">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Enhanced Security</h3>
              <p className="text-gray-600">Centralized security management with role-based access controls and comprehensive audit trails.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;