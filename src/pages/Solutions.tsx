// // // // import React, { useState } from 'react';
// // // // import { 
// // // //   Users, 
// // // //   DollarSign, 
// // // //   UserCheck, 
// // // //   Clock, 
// // // //   Calendar, 
// // // //   Heart, 
// // // //   FileText, 
// // // //   Award, 
// // // //   TrendingUp, 
// // // //   Shield,
// // // //   ChevronRight,
// // // //   Building2
// // // // } from 'lucide-react';
// // // // import RotatingServices from '@/components/UI/RotatingServices';

// // // // const Solutions: React.FC = () => {
// // // //   const [activeSolution, setActiveSolution] = useState<number | null>(null);

// // // //   const solutions = [
// // // //     {
// // // //       icon: Users,
// // // //       title: 'Human Capital Management (HCM)',
// // // //       description: 'Comprehensive workforce management from hire to retire, including employee lifecycle management, organizational planning, and talent development.',
// // // //       benefits: ['Streamlined employee onboarding', 'Talent development tracking', 'Performance analytics', 'Succession planning'],
// // // //       features: ['Employee profiles and records', 'Organizational hierarchy management', 'Skills and competency tracking', 'Career development planning']
// // // //     },
// // // //     {
// // // //       icon: DollarSign,
// // // //       title: 'Payroll Management',
// // // //       description: 'Complete payroll processing solution with automated calculations, compliance management, and integration with HR systems.',
// // // //       benefits: ['Automated payroll calculations', 'Tax compliance management', 'Direct deposit processing', 'Payroll reporting'],
// // // //       features: ['Multi-country payroll support', 'Tax withholding calculations', 'Benefits deductions', 'Year-end processing']
// // // //     },
// // // //     {
// // // //       icon: UserCheck,
// // // //       title: 'Recruitment Management',
// // // //       description: 'End-to-end recruitment process management from job requisition to offer acceptance, with candidate tracking and assessment tools.',
// // // //       benefits: ['Streamlined hiring process', 'Candidate pipeline management', 'Interview coordination', 'Offer management'],
// // // //       features: ['Job requisition workflow', 'Applicant tracking system', 'Interview scheduling', 'Background check integration']
// // // //     },
// // // //     {
// // // //       icon: Clock,
// // // //       title: 'Time Tracking',
// // // //       description: 'Accurate time and attendance tracking with mobile capabilities, overtime calculation, and project time allocation.',
// // // //       benefits: ['Accurate time capture', 'Overtime management', 'Project cost allocation', 'Compliance reporting'],
// // // //       features: ['Mobile time entry', 'Biometric integration', 'Project time tracking', 'Exception management']
// // // //     },
// // // //     {
// // // //       icon: Calendar,
// // // //       title: 'Time Off and Absence Management',
// // // //       description: 'Comprehensive leave management system handling various leave types, approval workflows, and accrual calculations.',
// // // //       benefits: ['Automated leave calculations', 'Approval workflow', 'Calendar integration', 'Compliance tracking'],
// // // //       features: ['Multiple leave types', 'Accrual management', 'Manager approvals', 'Return-to-work processes']
// // // //     },
// // // //     {
// // // //       icon: Heart,
// // // //       title: 'Benefits',
// // // //       description: 'Complete benefits administration including enrollment, eligibility management, and integration with insurance providers.',
// // // //       benefits: ['Benefits enrollment', 'Eligibility management', 'Cost tracking', 'Provider integration'],
// // // //       features: ['Plan management', 'Dependent tracking', 'COBRA administration', 'Benefits statements']
// // // //     },
// // // //     {
// // // //       icon: FileText,
// // // //       title: 'Open Enrollment',
// // // //       description: 'Automated open enrollment process with employee self-service capabilities and decision support tools.',
// // // //       benefits: ['Streamlined enrollment', 'Employee self-service', 'Decision support', 'Compliance reporting'],
// // // //       features: ['Enrollment periods', 'Plan comparisons', 'Life event processing', 'Confirmation statements']
// // // //     },
// // // //     {
// // // //       icon: Award,
// // // //       title: 'Compensation Management',
// // // //       description: 'Strategic compensation planning including salary structures, merit increases, and market analysis.',
// // // //       benefits: ['Merit planning', 'Budget management', 'Market analysis', 'Pay equity analysis'],
// // // //       features: ['Salary structures', 'Pay grades', 'Merit matrices', 'Compensation statements']
// // // //     },
// // // //     {
// // // //       icon: TrendingUp,
// // // //       title: 'Advanced Compensation',
// // // //       description: 'Sophisticated compensation management including variable pay, long-term incentives, and executive compensation.',
// // // //       benefits: ['Variable pay management', 'Incentive calculations', 'Stock option tracking', 'Executive reporting'],
// // // //       features: ['Bonus calculations', 'Commission processing', 'Stock grants', 'Retention programs']
// // // //     },
// // // //     {
// // // //       icon: Award,
// // // //       title: 'Performance Management',
// // // //       description: 'Comprehensive performance evaluation system with goal tracking, 360-degree feedback, and development planning.',
// // // //       benefits: ['Goal alignment', '360-degree feedback', 'Performance analytics', 'Development planning'],
// // // //       features: ['Performance reviews', 'Goal setting', 'Feedback collection', 'Calibration processes']
// // // //     },
// // // //     {
// // // //       icon: Shield,
// // // //       title: 'Security',
// // // //       description: 'Enterprise-grade security framework with role-based access control, audit trails, and compliance management.',
// // // //       benefits: ['Role-based security', 'Audit compliance', 'Data protection', 'Access monitoring'],
// // // //       features: ['User authentication', 'Permission management', 'Audit logging', 'Security reporting']
// // // //     }
// // // //   ];

// // // //   return (
// // // //     <div className="min-h-screen">


// // // //       <RotatingServices/>

      

// // // //       {/* Solutions Grid */}
// // // //       <section className="py-20 bg-white">
// // // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // // //           <div className="text-center mb-16">
// // // //             <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Solution Portfolio</h2>
// // // //             <p className="text-xl text-gray-600">Comprehensive modules covering every aspect of your business</p>
// // // //           </div>

// // // //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
// // // //             {solutions.map((solution, index) => (
// // // //               <div key={index} className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
// // // //                 <div className="p-6">
// // // //                   <div className="flex items-start justify-between mb-4">
// // // //                     <div className="flex items-center">
// // // //                       <div className="bg-blue-100 p-3 rounded-lg mr-4">
// // // //                         <solution.icon className="h-6 w-6 text-blue-600" />
// // // //                       </div>
// // // //                       <h3 className="text-xl font-semibold text-gray-900">{solution.title}</h3>
// // // //                     </div>
// // // //                     <button
// // // //                       onClick={() => setActiveSolution(activeSolution === index ? null : index)}
// // // //                       className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
// // // //                     >
// // // //                       <ChevronRight className={`h-5 w-5 transition-transform duration-200 ${
// // // //                         activeSolution === index ? 'rotate-90' : ''
// // // //                       }`} />
// // // //                     </button>
// // // //                   </div>

// // // //                   <p className="text-gray-600 mb-4">{solution.description}</p>

// // // //                   {activeSolution === index && (
// // // //                     <div className="space-y-6 pt-4 border-t border-gray-100">
// // // //                       <div>
// // // //                         <h4 className="font-semibold text-gray-900 mb-3">Key Benefits</h4>
// // // //                         <ul className="space-y-2">
// // // //                           {solution.benefits.map((benefit, benefitIndex) => (
// // // //                             <li key={benefitIndex} className="flex items-start">
// // // //                               <div className="bg-green-500 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
// // // //                               <span className="text-gray-600 text-sm">{benefit}</span>
// // // //                             </li>
// // // //                           ))}
// // // //                         </ul>
// // // //                       </div>

// // // //                       <div>
// // // //                         <h4 className="font-semibold text-gray-900 mb-3">Core Features</h4>
// // // //                         <ul className="space-y-2">
// // // //                           {solution.features.map((feature, featureIndex) => (
// // // //                             <li key={featureIndex} className="flex items-start">
// // // //                               <div className="bg-blue-500 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
// // // //                               <span className="text-gray-600 text-sm">{feature}</span>
// // // //                             </li>
// // // //                           ))}
// // // //                         </ul>
// // // //                       </div>
// // // //                     </div>
// // // //                   )}
// // // //                 </div>
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* Integration Benefits */}
// // // //       <section className="py-20 bg-blue-50">
// // // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // // //           <div className="text-center mb-16">
// // // //             <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Integration Matters</h2>
// // // //             <p className="text-xl text-gray-600">Experience the power of unified enterprise solutions</p>
// // // //           </div>

// // // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// // // //             <div className="bg-white p-8 rounded-xl shadow-lg">
// // // //               <div className="bg-blue-100 p-4 rounded-lg w-fit mb-6">
// // // //                 <Building2 className="h-8 w-8 text-blue-600" />
// // // //               </div>
// // // //               <h3 className="text-xl font-semibold text-gray-900 mb-4">Single Source of Truth</h3>
// // // //               <p className="text-gray-600">Eliminate data silos and ensure consistency across all business functions with unified data management.</p>
// // // //             </div>

// // // //             <div className="bg-white p-8 rounded-xl shadow-lg">
// // // //               <div className="bg-green-100 p-4 rounded-lg w-fit mb-6">
// // // //                 <TrendingUp className="h-8 w-8 text-green-600" />
// // // //               </div>
// // // //               <h3 className="text-xl font-semibold text-gray-900 mb-4">Improved Efficiency</h3>
// // // //               <p className="text-gray-600">Streamline processes and reduce manual work through automated workflows and integrated systems.</p>
// // // //             </div>

// // // //             <div className="bg-white p-8 rounded-xl shadow-lg">
// // // //               <div className="bg-purple-100 p-4 rounded-lg w-fit mb-6">
// // // //                 <Shield className="h-8 w-8 text-purple-600" />
// // // //               </div>
// // // //               <h3 className="text-xl font-semibold text-gray-900 mb-4">Enhanced Security</h3>
// // // //               <p className="text-gray-600">Centralized security management with role-based access controls and comprehensive audit trails.</p>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </section>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Solutions;







// // // import React from 'react';
// // // import { 
// // //   Users, 
// // //   DollarSign, 
// // //   UserCheck, 
// // //   Clock, 
// // //   Calendar, 
// // //   Heart, 
// // //   FileText, 
// // //   Award, 
// // //   TrendingUp, 
// // //   Shield,
// // //   Building2
// // // } from 'lucide-react';
// // // import RotatingServices from '@/components/UI/RotatingServices';

// // // const Solutions: React.FC = () => {

// // //   // Updated solutions data with paragraph content
// // //   const solutions = [
// // //     {
// // //       icon: Users,
// // //       title: 'Human Capital Management (HCM)',
// // //       description: 'Our comprehensive Workday-powered Human Capital Management solution streamlines all aspects of your workforce management—from recruitment and onboarding to payroll and talent development. With an intuitive self-service platform for employees and managers, it simplifies HR operations while ensuring compliance and consistent data across your organization. The solution enables better workforce planning, real-time analytics, and seamless integration across HR, finance, and payroll, empowering you to optimize human capital investments and drive business growth.',
// // //     },
// // //     {
// // //       icon: DollarSign,
// // //       title: 'Payroll Management',
// // //       description: 'Our Workday-powered Payroll Management solution simplifies and automates your entire payroll process, ensuring employees are paid accurately and on time, every time. The solution handles complex payroll calculations, tax compliance, earnings, deductions, and benefits integration with a powerful, continuous calculation engine. Employees gain convenient access to their payroll information through mobile and web self-service portals, enhancing transparency and satisfaction. Managers and payroll administrators benefit from real-time dashboards, flexible auditing, and customizable reporting tools for greater control and compliance with regional regulations. Seamless integration with HR, time tracking, and benefits systems reduces manual tasks, minimizes errors, and streamlines payroll operations. By leveraging Workday’s secure and agile payroll platform, we help you save time, improve accuracy, and boost productivity in your payroll processes.',
// // //     },
// // //     {
// // //       icon: UserCheck,
// // //       title: 'Recruitment Management',
// // //       description: 'Our Recruitment Management solution streamlines and enhances your entire talent acquisition process from job requisition to candidate onboarding. It offers customizable recruiter dashboards for managing priority tasks, automated workflows that reduce manual steps, and AI-driven candidate matching to help identify the best-fit talent quickly. Candidates benefit from an intuitive application experience with real-time status updates and interview scheduling, while hiring teams collaborate seamlessly through integrated communication tools. This unified platform provides detailed analytics and reporting for informed decision-making, ensuring a faster, smarter, and more efficient recruitment process that attracts and retains top talent.',
// // //     },
// // //     {
// // //       icon: Clock,
// // //       title: 'Time Tracking',
// // //       description: 'We offer a robust Time Tracking solution that enables employees to easily record hours from any device through a simple, mobile-friendly interface. The system supports various work schedules, time codes, and rules, automating validations and approvals to ensure accurate payroll integration. Managers gain real-time visibility into team hours, overtime, and attendance trends, facilitating better workforce utilization and compliance with labor regulations.',
// // //     },
// // //     {
// // //       icon: Calendar,
// // //       title: 'Time Off and Absence Management',
// // //       description: 'We offer a comprehensive Time Off and Absence Management solution powered by Workday that streamlines how your organization handles employee leave. This solution enables your employees to effortlessly request time off and view their leave balances through an intuitive, mobile-friendly self-service portal. Behind the scenes, complex policies such as accruals, carryovers, multi-level approvals, and compliance with regional labor laws are fully configurable to fit your unique business needs. Managers benefit from real-time dashboards to track team absences, automate approvals, and forecast workforce availability for better planning. Seamless integration with payroll, time tracking, and HR systems ensures accuracy and reduces administrative burden. By leveraging Workday’s flexible and automated absence management platform, we help you improve productivity, enhance employee satisfaction, and maintain complete clarity and control over workforce time away from work.',
// // //     },
// // //     {
// // //       icon: Heart,
// // //       title: 'Benefits',
// // //       description: 'Leveraging Workday’s Benefits Management technology, we provide a centralized and transparent solution that automates benefit eligibility, enrollment, and plan management. Employees enjoy an easy-to-navigate portal for viewing and selecting benefits with full clarity on their total rewards, while HR gains streamlined control over eligibility rules, regulatory compliance, and real-time data synchronization. This integrated approach reduces administrative burdens and enhances employee engagement through clear, accessible benefits communication.',
// // //     },
// // //     {
// // //       icon: FileText,
// // //       title: 'Open Enrollment',
// // //       description: 'Our Open Enrollment solution simplifies the annual benefits selection process with an intuitive, employee-friendly interface accessible anytime, anywhere. Automated workflows guide employees through plan comparisons and selections, ensuring accuracy and compliance. HR teams benefit from configurable rules, real-time tracking of enrollment progress, and seamless integration with payroll and benefits administration, resulting in an efficient, error-free open enrollment experience for your organization.',
// // //     },
// // //     {
// // //       icon: Award,
// // //       title: 'Compensation Management',
// // //       description: 'Harnessing Compensation module, we help you design, manage, and execute your compensation programs with precision and transparency. The solution supports configurable pay structures, merit and incentive plans, and budgeting controls, empowering HR and leadership to align compensation with business goals. Employees and managers access unified visibility into compensation data, fostering fairness and motivation while simplifying approval workflows and ensuring compliance.',
// // //     },
// // //     {
// // //       icon: TrendingUp,
// // //       title: 'Advanced Compensation',
// // //       description: 'Our Advanced Compensation solution powered by Workday provides sophisticated tools for complex variable pay and bonus management, equity plans, and executive compensation. It integrates seamlessly with performance and talent management, enabling you to reward top performers with custom incentive plans. This automation minimizes manual errors, supports regulatory compliance, and delivers detailed reporting and analytics to optimize compensation strategies that drive business success.',
// // //     },
// // //     {
// // //       icon: Award, // Note: You can change this icon if you want to differentiate it from Compensation Mgmt
// // //       title: 'Performance Management',
// // //       description: 'Our Performance Management solution fosters continuous employee development and alignment with organizational goals. Through flexible goal setting, regular check-ins, 360-degree feedback, and performance reviews, it encourages ongoing dialogue between managers and employees. Integration with learning and compensation modules ensures that performance insights translate into actionable growth plans and reward strategies that enhance employee engagement and productivity.',
// // //     },
// // //     {
// // //       icon: Shield,
// // //       title: 'Security',
// // //       description: "We deliver robust security solutions within the environment to protect your organization's sensitive HR, financial, and operational data while ensuring compliance with industry standards and regulations. Workday's comprehensive security framework includes user, role, and access management to restrict data and feature access based on permissions, multi-factor authentication for secure sign-ins, and continuous monitoring to detect and respond to threats in real-time. Our security services also cover data encryption, audit trails, and regulatory compliance reporting, giving you peace of mind that your workforce and business data are safeguarded against breaches and unauthorized access, supporting a trusted and resilient operational ecosystem.",
// // //     }
// // //   ];

// // //   return (
// // //     <div className="min-h-screen">

// // //       <RotatingServices/>

// // //       {/* Solutions Grid */}
// // //       <section className="py-20 bg-white">
// // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //           <div className="text-center mb-16">
// // //             <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Solution Portfolio</h2>
// // //             <p className="text-xl text-gray-600">Comprehensive modules covering every aspect of your business</p>
// // //           </div>

// // //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
// // //             {solutions.map((solution, index) => (
// // //               <div key={index} className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6">
// // //                 <div className="flex items-center mb-4">
// // //                   <div className="bg-blue-100 p-3 rounded-lg mr-4 flex-shrink-0">
// // //                     <solution.icon className="h-6 w-6 text-blue-600" />
// // //                   </div>
// // //                   <h3 className="text-xl font-semibold text-gray-900">{solution.title}</h3>
// // //                 </div>
// // //                 <p className="text-gray-600 text-sm leading-relaxed">{solution.description}</p>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Integration Benefits */}
// // //       <section className="py-20 bg-blue-50">
// // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //           <div className="text-center mb-16">
// // //             <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Integration Matters</h2>
// // //             <p className="text-xl text-gray-600">Experience the power of unified enterprise solutions</p>
// // //           </div>

// // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// // //             <div className="bg-white p-8 rounded-xl shadow-lg">
// // //               <div className="bg-blue-100 p-4 rounded-lg w-fit mb-6">
// // //                 <Building2 className="h-8 w-8 text-blue-600" />
// // //               </div>
// // //               <h3 className="text-xl font-semibold text-gray-900 mb-4">Single Source of Truth</h3>
// // //               <p className="text-gray-600">Eliminate data silos and ensure consistency across all business functions with unified data management.</p>
// // //             </div>

// // //             <div className="bg-white p-8 rounded-xl shadow-lg">
// // //               <div className="bg-green-100 p-4 rounded-lg w-fit mb-6">
// // //                 <TrendingUp className="h-8 w-8 text-green-600" />
// // //               </div>
// // //               <h3 className="text-xl font-semibold text-gray-900 mb-4">Improved Efficiency</h3>
// // //               <p className="text-gray-600">Streamline processes and reduce manual work through automated workflows and integrated systems.</p>
// // //             </div>

// // //             <div className="bg-white p-8 rounded-xl shadow-lg">
// // //               <div className="bg-purple-100 p-4 rounded-lg w-fit mb-6">
// // //                 <Shield className="h-8 w-8 text-purple-600" />
// // //               </div>
// // //               <h3 className="text-xl font-semibold text-gray-900 mb-4">Enhanced Security</h3>
// // //               <p className="text-gray-600">Centralized security management with role-based access controls and comprehensive audit trails.</p>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>
// // //     </div>
// // //   );
// // // };

// // // export default Solutions;




// // import React, { useState } from 'react';
// // import { 
// //   Users, 
// //   DollarSign, 
// //   UserCheck, 
// //   Clock, 
// //   Calendar, 
// //   Heart, 
// //   FileText, 
// //   Award, 
// //   TrendingUp, 
// //   Shield,
// //   ChevronRight,
// //   Building2
// // } from 'lucide-react';
// // import { motion, AnimatePresence } from 'framer-motion';
// // import RotatingServices from '@/components/UI/RotatingServices';

// // const Solutions: React.FC = () => {
// //   // State to track the currently active solution, defaults to the first one (index 0)
// //   const [activeSolution, setActiveSolution] = useState<number>(0);

// //   const solutions = [
// //     {
// //       icon: Users,
// //       title: 'Human Capital Management (HCM)',
// //       description: 'Our comprehensive Workday-powered Human Capital Management solution streamlines all aspects of your workforce management—from recruitment and onboarding to payroll and talent development. With an intuitive self-service platform for employees and managers, it simplifies HR operations while ensuring compliance and consistent data across your organization. The solution enables better workforce planning, real-time analytics, and seamless integration across HR, finance, and payroll, empowering you to optimize human capital investments and drive business growth.',
// //     },
// //     {
// //       icon: DollarSign,
// //       title: 'Payroll Management',
// //       description: 'Our Workday-powered Payroll Management solution simplifies and automates your entire payroll process, ensuring employees are paid accurately and on time, every time. The solution handles complex payroll calculations, tax compliance, earnings, deductions, and benefits integration with a powerful, continuous calculation engine. Employees gain convenient access to their payroll information through mobile and web self-service portals, enhancing transparency and satisfaction. Managers and payroll administrators benefit from real-time dashboards, flexible auditing, and customizable reporting tools for greater control and compliance with regional regulations. Seamless integration with HR, time tracking, and benefits systems reduces manual tasks, minimizes errors, and streamlines payroll operations. By leveraging Workday’s secure and agile payroll platform, we help you save time, improve accuracy, and boost productivity in your payroll processes.',
// //     },
// //     {
// //       icon: UserCheck,
// //       title: 'Recruitment Management',
// //       description: 'Our Recruitment Management solution streamlines and enhances your entire talent acquisition process from job requisition to candidate onboarding. It offers customizable recruiter dashboards for managing priority tasks, automated workflows that reduce manual steps, and AI-driven candidate matching to help identify the best-fit talent quickly. Candidates benefit from an intuitive application experience with real-time status updates and interview scheduling, while hiring teams collaborate seamlessly through integrated communication tools. This unified platform provides detailed analytics and reporting for informed decision-making, ensuring a faster, smarter, and more efficient recruitment process that attracts and retains top talent.',
// //     },
// //     {
// //       icon: Clock,
// //       title: 'Time Tracking',
// //       description: 'We offer a robust Time Tracking solution that enables employees to easily record hours from any device through a simple, mobile-friendly interface. The system supports various work schedules, time codes, and rules, automating validations and approvals to ensure accurate payroll integration. Managers gain real-time visibility into team hours, overtime, and attendance trends, facilitating better workforce utilization and compliance with labor regulations.',
// //     },
// //     {
// //       icon: Calendar,
// //       title: 'Time Off and Absence Management',
// //       description: 'We offer a comprehensive Time Off and Absence Management solution powered by Workday that streamlines how your organization handles employee leave. This solution enables your employees to effortlessly request time off and view their leave balances through an intuitive, mobile-friendly self-service portal. Behind the scenes, complex policies such as accruals, carryovers, multi-level approvals, and compliance with regional labor laws are fully configurable to fit your unique business needs. Managers benefit from real-time dashboards to track team absences, automate approvals, and forecast workforce availability for better planning. Seamless integration with payroll, time tracking, and HR systems ensures accuracy and reduces administrative burden. By leveraging Workday’s flexible and automated absence management platform, we help you improve productivity, enhance employee satisfaction, and maintain complete clarity and control over workforce time away from work.',
// //     },
// //     {
// //       icon: Heart,
// //       title: 'Benefits',
// //       description: 'Leveraging Workday’s Benefits Management technology, we provide a centralized and transparent solution that automates benefit eligibility, enrollment, and plan management. Employees enjoy an easy-to-navigate portal for viewing and selecting benefits with full clarity on their total rewards, while HR gains streamlined control over eligibility rules, regulatory compliance, and real-time data synchronization. This integrated approach reduces administrative burdens and enhances employee engagement through clear, accessible benefits communication.',
// //     },
// //     {
// //       icon: FileText,
// //       title: 'Open Enrollment',
// //       description: 'Our Open Enrollment solution simplifies the annual benefits selection process with an intuitive, employee-friendly interface accessible anytime, anywhere. Automated workflows guide employees through plan comparisons and selections, ensuring accuracy and compliance. HR teams benefit from configurable rules, real-time tracking of enrollment progress, and seamless integration with payroll and benefits administration, resulting in an efficient, error-free open enrollment experience for your organization.',
// //     },
// //     {
// //       icon: Award,
// //       title: 'Compensation Management',
// //       description: 'Harnessing Compensation module, we help you design, manage, and execute your compensation programs with precision and transparency. The solution supports configurable pay structures, merit and incentive plans, and budgeting controls, empowering HR and leadership to align compensation with business goals. Employees and managers access unified visibility into compensation data, fostering fairness and motivation while simplifying approval workflows and ensuring compliance.',
// //     },
// //     {
// //       icon: TrendingUp,
// //       title: 'Advanced Compensation',
// //       description: 'Our Advanced Compensation solution powered by Workday provides sophisticated tools for complex variable pay and bonus management, equity plans, and executive compensation. It integrates seamlessly with performance and talent management, enabling you to reward top performers with custom incentive plans. This automation minimizes manual errors, supports regulatory compliance, and delivers detailed reporting and analytics to optimize compensation strategies that drive business success.',
// //     },
// //     {
// //       icon: Award, 
// //       title: 'Performance Management',
// //       description: 'Our Performance Management solution fosters continuous employee development and alignment with organizational goals. Through flexible goal setting, regular check-ins, 360-degree feedback, and performance reviews, it encourages ongoing dialogue between managers and employees. Integration with learning and compensation modules ensures that performance insights translate into actionable growth plans and reward strategies that enhance employee engagement and productivity.',
// //     },
// //     {
// //       icon: Shield,
// //       title: 'Security',
// //       description: "We deliver robust security solutions within the environment to protect your organization's sensitive HR, financial, and operational data while ensuring compliance with industry standards and regulations. Workday's comprehensive security framework includes user, role, and access management to restrict data and feature access based on permissions, multi-factor authentication for secure sign-ins, and continuous monitoring to detect and respond to threats in real-time. Our security services also cover data encryption, audit trails, and regulatory compliance reporting, giving you peace of mind that your workforce and business data are safeguarded against breaches and unauthorized access, supporting a trusted and resilient operational ecosystem.",
// //     }
// //   ];

// //   const selectedSolution = solutions[activeSolution];

// //   return (
// //     <div className="min-h-screen">

// //       <RotatingServices/>

// //       {/* Solutions Section - REBUILT */}
// //       <section className="py-20 bg-white">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="text-center mb-16">
// //             <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Solution Portfolio</h2>
// //             <p className="text-xl text-gray-600">Comprehensive modules covering every aspect of your business</p>
// //           </div>

// //           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
            
// //             {/* Left Column: Navigation List */}
// //             <div className="lg:col-span-1 space-y-3 sticky top-24">
// //               {solutions.map((solution, index) => (
// //                 <button
// //                   key={index}
// //                   onClick={() => setActiveSolution(index)}
// //                   className={`w-full text-left p-4 rounded-lg transition-all duration-300 flex justify-between items-center border-2 ${
// //                     activeSolution === index
// //                       ? 'bg-blue-50 border-blue-500 shadow-lg'
// //                       : 'bg-gray-50 border-transparent hover:bg-gray-100 hover:border-gray-200'
// //                   }`}
// //                 >
// //                   <div className="flex items-center">
// //                     <div className={`p-2 rounded-md mr-4 ${activeSolution === index ? 'bg-blue-100' : 'bg-gray-200'}`}>
// //                       <solution.icon className={`h-5 w-5 ${activeSolution === index ? 'text-blue-600' : 'text-gray-600'}`} />
// //                     </div>
// //                     <span className={`font-semibold ${activeSolution === index ? 'text-blue-800' : 'text-gray-800'}`}>{solution.title}</span>
// //                   </div>
// //                   <ChevronRight className={`h-5 w-5 text-blue-500 transition-transform ${activeSolution === index ? 'translate-x-1' : ''}`} />
// //                 </button>
// //               ))}
// //             </div>

// //             {/* Right Column: Content Display */}
// //             <div className="lg:col-span-2">
// //               <AnimatePresence mode="wait">
// //                 <motion.div
// //                   key={activeSolution}
// //                   initial={{ opacity: 0, y: 20 }}
// //                   animate={{ opacity: 1, y: 0 }}
// //                   exit={{ opacity: 0, y: -20 }}
// //                   transition={{ duration: 0.3 }}
// //                   className="bg-white border border-gray-200 rounded-xl shadow-xl p-8"
// //                 >
// //                   {selectedSolution && (
// //                     <>
// //                       <div className="flex items-center mb-6">
// //                         <div className="bg-blue-100 p-4 rounded-lg mr-5">
// //                           <selectedSolution.icon className="h-8 w-8 text-blue-600" />
// //                         </div>
// //                         <h3 className="text-3xl font-bold text-gray-900">{selectedSolution.title}</h3>
// //                       </div>
// //                       <p className="text-gray-600 leading-relaxed">{selectedSolution.description}</p>
// //                     </>
// //                   )}
// //                 </motion.div>
// //               </AnimatePresence>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Integration Benefits */}
// //       <section className="py-20 bg-blue-50">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="text-center mb-16">
// //             <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Integration Matters</h2>
// //             <p className="text-xl text-gray-600">Experience the power of unified enterprise solutions</p>
// //           </div>

// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //             <div className="bg-white p-8 rounded-xl shadow-lg">
// //               <div className="bg-blue-100 p-4 rounded-lg w-fit mb-6">
// //                 <Building2 className="h-8 w-8 text-blue-600" />
// //               </div>
// //               <h3 className="text-xl font-semibold text-gray-900 mb-4">Single Source of Truth</h3>
// //               <p className="text-gray-600">Eliminate data silos and ensure consistency across all business functions with unified data management.</p>
// //             </div>

// //             <div className="bg-white p-8 rounded-xl shadow-lg">
// //               <div className="bg-green-100 p-4 rounded-lg w-fit mb-6">
// //                 <TrendingUp className="h-8 w-8 text-green-600" />
// //               </div>
// //               <h3 className="text-xl font-semibold text-gray-900 mb-4">Improved Efficiency</h3>
// //               <p className="text-gray-600">Streamline processes and reduce manual work through automated workflows and integrated systems.</p>
// //             </div>

// //             <div className="bg-white p-8 rounded-xl shadow-lg">
// //               <div className="bg-purple-100 p-4 rounded-lg w-fit mb-6">
// //                 <Shield className="h-8 w-8 text-purple-600" />
// //               </div>
// //               <h3 className="text-xl font-semibold text-gray-900 mb-4">Enhanced Security</h3>
// //               <p className="text-gray-600">Centralized security management with role-based access controls and comprehensive audit trails.</p>
// //             </div>
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // };

// // export default Solutions;


// import React, { useState } from 'react';
// import {
//   Users,
//   DollarSign,
//   UserCheck,
//   Clock,
//   Calendar,
//   Heart,
//   FileText,
//   Award,
//   TrendingUp,
//   Shield,
//   ChevronRight,
//   Building2
// } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';
// import RotatingServices from '@/components/UI/RotatingServices';

// const Solutions: React.FC = () => {
//   // State to track the currently active solution, defaults to the first one (index 0)
//   const [activeSolution, setActiveSolution] = useState<number>(0);

//   const solutions = [
//     {
//       icon: Users,
//       title: 'Human Capital Management (HCM)',
//       description: 'Our comprehensive Workday-powered Human Capital Management solution streamlines all aspects of your workforce management—from recruitment and onboarding to payroll and talent development. With an intuitive self-service platform for employees and managers, it simplifies HR operations while ensuring compliance and consistent data across your organization. The solution enables better workforce planning, real-time analytics, and seamless integration across HR, finance, and payroll, empowering you to optimize human capital investments and drive business growth.',
//     },
//     {
//       icon: DollarSign,
//       title: 'Payroll Management',
//       description: 'Our Workday-powered Payroll Management solution simplifies and automates your entire payroll process, ensuring employees are paid accurately and on time, every time. The solution handles complex payroll calculations, tax compliance, earnings, deductions, and benefits integration with a powerful, continuous calculation engine. Employees gain convenient access to their payroll information through mobile and web self-service portals, enhancing transparency and satisfaction. Managers and payroll administrators benefit from real-time dashboards, flexible auditing, and customizable reporting tools for greater control and compliance with regional regulations. Seamless integration with HR, time tracking, and benefits systems reduces manual tasks, minimizes errors, and streamlines payroll operations. By leveraging Workday’s secure and agile payroll platform, we help you save time, improve accuracy, and boost productivity in your payroll processes.',
//     },
//     {
//       icon: UserCheck,
//       title: 'Recruitment Management',
//       description: 'Our Recruitment Management solution streamlines and enhances your entire talent acquisition process from job requisition to candidate onboarding. It offers customizable recruiter dashboards for managing priority tasks, automated workflows that reduce manual steps, and AI-driven candidate matching to help identify the best-fit talent quickly. Candidates benefit from an intuitive application experience with real-time status updates and interview scheduling, while hiring teams collaborate seamlessly through integrated communication tools. This unified platform provides detailed analytics and reporting for informed decision-making, ensuring a faster, smarter, and more efficient recruitment process that attracts and retains top talent.',
//     },
//     {
//       icon: Clock,
//       title: 'Time Tracking',
//       description: 'We offer a robust Time Tracking solution that enables employees to easily record hours from any device through a simple, mobile-friendly interface. The system supports various work schedules, time codes, and rules, automating validations and approvals to ensure accurate payroll integration. Managers gain real-time visibility into team hours, overtime, and attendance trends, facilitating better workforce utilization and compliance with labor regulations.',
//     },
//     {
//       icon: Calendar,
//       title: 'Time Off and Absence Management',
//       description: 'We offer a comprehensive Time Off and Absence Management solution powered by Workday that streamlines how your organization handles employee leave. This solution enables your employees to effortlessly request time off and view their leave balances through an intuitive, mobile-friendly self-service portal. Behind the scenes, complex policies such as accruals, carryovers, multi-level approvals, and compliance with regional labor laws are fully configurable to fit your unique business needs. Managers benefit from real-time dashboards to track team absences, automate approvals, and forecast workforce availability for better planning. Seamless integration with payroll, time tracking, and HR systems ensures accuracy and reduces administrative burden. By leveraging Workday’s flexible and automated absence management platform, we help you improve productivity, enhance employee satisfaction, and maintain complete clarity and control over workforce time away from work.',
//     },
//     {
//       icon: Heart,
//       title: 'Benefits',
//       description: 'Leveraging Workday’s Benefits Management technology, we provide a centralized and transparent solution that automates benefit eligibility, enrollment, and plan management. Employees enjoy an easy-to-navigate portal for viewing and selecting benefits with full clarity on their total rewards, while HR gains streamlined control over eligibility rules, regulatory compliance, and real-time data synchronization. This integrated approach reduces administrative burdens and enhances employee engagement through clear, accessible benefits communication.',
//     },
//     {
//       icon: FileText,
//       title: 'Open Enrollment',
//       description: 'Our Open Enrollment solution simplifies the annual benefits selection process with an intuitive, employee-friendly interface accessible anytime, anywhere. Automated workflows guide employees through plan comparisons and selections, ensuring accuracy and compliance. HR teams benefit from configurable rules, real-time tracking of enrollment progress, and seamless integration with payroll and benefits administration, resulting in an efficient, error-free open enrollment experience for your organization.',
//     },
//     {
//       icon: Award,
//       title: 'Compensation Management',
//       description: 'Harnessing Compensation module, we help you design, manage, and execute your compensation programs with precision and transparency. The solution supports configurable pay structures, merit and incentive plans, and budgeting controls, empowering HR and leadership to align compensation with business goals. Employees and managers access unified visibility into compensation data, fostering fairness and motivation while simplifying approval workflows and ensuring compliance.',
//     },
//     {
//       icon: TrendingUp,
//       title: 'Advanced Compensation',
//       description: 'Our Advanced Compensation solution powered by Workday provides sophisticated tools for complex variable pay and bonus management, equity plans, and executive compensation. It integrates seamlessly with performance and talent management, enabling you to reward top performers with custom incentive plans. This automation minimizes manual errors, supports regulatory compliance, and delivers detailed reporting and analytics to optimize compensation strategies that drive business success.',
//     },
//     {
//       icon: Award,
//       title: 'Performance Management',
//       description: 'Our Performance Management solution fosters continuous employee development and alignment with organizational goals. Through flexible goal setting, regular check-ins, 360-degree feedback, and performance reviews, it encourages ongoing dialogue between managers and employees. Integration with learning and compensation modules ensures that performance insights translate into actionable growth plans and reward strategies that enhance employee engagement and productivity.',
//     },
//     {
//       icon: Shield,
//       title: 'Security',
//       description: "We deliver robust security solutions within the environment to protect your organization's sensitive HR, financial, and operational data while ensuring compliance with industry standards and regulations. Workday's comprehensive security framework includes user, role, and access management to restrict data and feature access based on permissions, multi-factor authentication for secure sign-ins, and continuous monitoring to detect and respond to threats in real-time. Our security services also cover data encryption, audit trails, and regulatory compliance reporting, giving you peace of mind that your workforce and business data are safeguarded against breaches and unauthorized access, supporting a trusted and resilient operational ecosystem.",
//     }
//   ];

//   const selectedSolution = solutions[activeSolution];

//   return (
//     <div className="min-h-screen">

//       <RotatingServices />

//       {/* Solutions Section - REBUILT */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Solution Portfolio</h2>
//             <p className="text-xl text-gray-600">Comprehensive modules covering every aspect of your business</p>
//           </div>

//           {/* UPDATED: Changed lg: prefix to md: to make the layout responsive on smaller screens */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start">

//             {/* Left Column: Navigation List */}
//             <div className="md:col-span-1 space-y-3 md:sticky md:top-24">
//               {solutions.map((solution, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setActiveSolution(index)}
//                   className={`w-full text-left p-4 rounded-lg transition-all duration-300 flex justify-between items-center border-2 ${activeSolution === index
//                       ? 'bg-blue-50 border-blue-500 shadow-lg'
//                       : 'bg-gray-50 border-transparent hover:bg-gray-100 hover:border-gray-200'
//                     }`}
//                 >
//                   <div className="flex items-center">
//                     <div className={`p-2 rounded-md mr-4 ${activeSolution === index ? 'bg-blue-100' : 'bg-gray-200'}`}>
//                       <solution.icon className={`h-5 w-5 ${activeSolution === index ? 'text-blue-600' : 'text-gray-600'}`} />
//                     </div>
//                     <span className={`font-semibold ${activeSolution === index ? 'text-blue-800' : 'text-gray-800'}`}>{solution.title}</span>
//                   </div>
//                   <ChevronRight className={`h-5 w-5 text-blue-500 transition-transform ${activeSolution === index ? 'translate-x-1' : ''}`} />
//                 </button>
//               ))}
//             </div>

//             {/* Right Column: Content Display */}
//             <div className="md:col-span-2">
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={activeSolution}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -20 }}
//                   transition={{ duration: 0.3 }}
//                   className="bg-white border border-gray-200 rounded-xl shadow-xl p-8"
//                 >
//                   {selectedSolution && (
//                     <>
//                       <div className="flex items-center mb-6">
//                         <div className="bg-blue-100 p-4 rounded-lg mr-5">
//                           <selectedSolution.icon className="h-8 w-8 text-blue-600" />
//                         </div>
//                         <h3 className="text-3xl font-bold text-gray-900">{selectedSolution.title}</h3>
//                       </div>
//                       <p className="text-gray-600 leading-relaxed">{selectedSolution.description}</p>
//                     </>
//                   )}
//                 </motion.div>
//               </AnimatePresence>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Integration Benefits */}
//       <section className="py-20 bg-blue-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Integration Matters</h2>
//             <p className="text-xl text-gray-600">Experience the power of unified enterprise solutions</p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             <div className="bg-white p-8 rounded-xl shadow-lg">
//               <div className="bg-blue-100 p-4 rounded-lg w-fit mb-6">
//                 <Building2 className="h-8 w-8 text-blue-600" />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-900 mb-4">Single Source of Truth</h3>
//               <p className="text-gray-600">Eliminate data silos and ensure consistency across all business functions with unified data management.</p>
//             </div>

//             <div className="bg-white p-8 rounded-xl shadow-lg">
//               <div className="bg-green-100 p-4 rounded-lg w-fit mb-6">
//                 <TrendingUp className="h-8 w-8 text-green-600" />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-900 mb-4">Improved Efficiency</h3>
//               <p className="text-gray-600">Streamline processes and reduce manual work through automated workflows and integrated systems.</p>
//             </div>

//             <div className="bg-white p-8 rounded-xl shadow-lg">
//               <div className="bg-purple-100 p-4 rounded-lg w-fit mb-6">
//                 <Shield className="h-8 w-8 text-purple-600" />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-900 mb-4">Enhanced Security</h3>
//               <p className="text-gray-600">Centralized security management with role-based access controls and comprehensive audit trails.</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Solutions;





// import React, { useState, useRef } from 'react';
// import {
//   Users,
//   DollarSign,
//   UserCheck,
//   Clock,
//   Calendar,
//   Heart,
//   FileText,
//   Award,
//   TrendingUp,
//   Shield,
//   ChevronRight,
//   Building2
// } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';
// import RotatingServices from '@/components/UI/RotatingServices';

// const Solutions: React.FC = () => {
//   const [activeSolution, setActiveSolution] = useState<number>(0);
//   // Create a ref for the right-side content container
//   const contentContainerRef = useRef<HTMLDivElement>(null);

//   const solutions = [
//     {
//       icon: Users,
//       title: 'Human Capital Management (HCM)',
//       description: 'Our comprehensive Workday-powered Human Capital Management solution streamlines all aspects of your workforce management—from recruitment and onboarding to payroll and talent development. With an intuitive self-service platform for employees and managers, it simplifies HR operations while ensuring compliance and consistent data across your organization. The solution enables better workforce planning, real-time analytics, and seamless integration across HR, finance, and payroll, empowering you to optimize human capital investments and drive business growth.',
//     },
//     {
//       icon: DollarSign,
//       title: 'Payroll Management',
//       description: 'Our Workday-powered Payroll Management solution simplifies and automates your entire payroll process, ensuring employees are paid accurately and on time, every time. The solution handles complex payroll calculations, tax compliance, earnings, deductions, and benefits integration with a powerful, continuous calculation engine. Employees gain convenient access to their payroll information through mobile and web self-service portals, enhancing transparency and satisfaction. Managers and payroll administrators benefit from real-time dashboards, flexible auditing, and customizable reporting tools for greater control and compliance with regional regulations. Seamless integration with HR, time tracking, and benefits systems reduces manual tasks, minimizes errors, and streamlines payroll operations. By leveraging Workday’s secure and agile payroll platform, we help you save time, improve accuracy, and boost productivity in your payroll processes.',
//     },
//     {
//       icon: UserCheck,
//       title: 'Recruitment Management',
//       description: 'Our Recruitment Management solution streamlines and enhances your entire talent acquisition process from job requisition to candidate onboarding. It offers customizable recruiter dashboards for managing priority tasks, automated workflows that reduce manual steps, and AI-driven candidate matching to help identify the best-fit talent quickly. Candidates benefit from an intuitive application experience with real-time status updates and interview scheduling, while hiring teams collaborate seamlessly through integrated communication tools. This unified platform provides detailed analytics and reporting for informed decision-making, ensuring a faster, smarter, and more efficient recruitment process that attracts and retains top talent.',
//     },
//     {
//       icon: Clock,
//       title: 'Time Tracking',
//       description: 'We offer a robust Time Tracking solution that enables employees to easily record hours from any device through a simple, mobile-friendly interface. The system supports various work schedules, time codes, and rules, automating validations and approvals to ensure accurate payroll integration. Managers gain real-time visibility into team hours, overtime, and attendance trends, facilitating better workforce utilization and compliance with labor regulations.',
//     },
//     {
//       icon: Calendar,
//       title: 'Time Off and Absence Management',
//       description: 'We offer a comprehensive Time Off and Absence Management solution powered by Workday that streamlines how your organization handles employee leave. This solution enables your employees to effortlessly request time off and view their leave balances through an intuitive, mobile-friendly self-service portal. Behind the scenes, complex policies such as accruals, carryovers, multi-level approvals, and compliance with regional labor laws are fully configurable to fit your unique business needs. Managers benefit from real-time dashboards to track team absences, automate approvals, and forecast workforce availability for better planning. Seamless integration with payroll, time tracking, and HR systems ensures accuracy and reduces administrative burden. By leveraging Workday’s flexible and automated absence management platform, we help you improve productivity, enhance employee satisfaction, and maintain complete clarity and control over workforce time away from work.',
//     },
//     {
//       icon: Heart,
//       title: 'Benefits',
//       description: 'Leveraging Workday’s Benefits Management technology, we provide a centralized and transparent solution that automates benefit eligibility, enrollment, and plan management. Employees enjoy an easy-to-navigate portal for viewing and selecting benefits with full clarity on their total rewards, while HR gains streamlined control over eligibility rules, regulatory compliance, and real-time data synchronization. This integrated approach reduces administrative burdens and enhances employee engagement through clear, accessible benefits communication.',
//     },
//     {
//       icon: FileText,
//       title: 'Open Enrollment',
//       description: 'Our Open Enrollment solution simplifies the annual benefits selection process with an intuitive, employee-friendly interface accessible anytime, anywhere. Automated workflows guide employees through plan comparisons and selections, ensuring accuracy and compliance. HR teams benefit from configurable rules, real-time tracking of enrollment progress, and seamless integration with payroll and benefits administration, resulting in an efficient, error-free open enrollment experience for your organization.',
//     },
//     {
//       icon: Award,
//       title: 'Compensation Management',
//       description: 'Harnessing Compensation module, we help you design, manage, and execute your compensation programs with precision and transparency. The solution supports configurable pay structures, merit and incentive plans, and budgeting controls, empowering HR and leadership to align compensation with business goals. Employees and managers access unified visibility into compensation data, fostering fairness and motivation while simplifying approval workflows and ensuring compliance.',
//     },
//     {
//       icon: TrendingUp,
//       title: 'Advanced Compensation',
//       description: 'Our Advanced Compensation solution powered by Workday provides sophisticated tools for complex variable pay and bonus management, equity plans, and executive compensation. It integrates seamlessly with performance and talent management, enabling you to reward top performers with custom incentive plans. This automation minimizes manual errors, supports regulatory compliance, and delivers detailed reporting and analytics to optimize compensation strategies that drive business success.',
//     },
//     {
//       icon: Award,
//       title: 'Performance Management',
//       description: 'Our Performance Management solution fosters continuous employee development and alignment with organizational goals. Through flexible goal setting, regular check-ins, 360-degree feedback, and performance reviews, it encourages ongoing dialogue between managers and employees. Integration with learning and compensation modules ensures that performance insights translate into actionable growth plans and reward strategies that enhance employee engagement and productivity.',
//     },
//     {
//       icon: Shield,
//       title: 'Security',
//       description: "We deliver robust security solutions within the environment to protect your organization's sensitive HR, financial, and operational data while ensuring compliance with industry standards and regulations. Workday's comprehensive security framework includes user, role, and access management to restrict data and feature access based on permissions, multi-factor authentication for secure sign-ins, and continuous monitoring to detect and respond to threats in real-time. Our security services also cover data encryption, audit trails, and regulatory compliance reporting, giving you peace of mind that your workforce and business data are safeguarded against breaches and unauthorized access, supporting a trusted and resilient operational ecosystem.",
//     }
//   ];

//   const selectedSolution = solutions[activeSolution];

//   const handleSolutionClick = (index: number) => {
//     setActiveSolution(index);

//     // This is the logic that scrolls the content into view on larger screens.
//     // 768px is the default breakpoint for Tailwind's 'md' screen size.
//     if (window.innerWidth >= 768) {
//       contentContainerRef.current?.scrollIntoView({
//         behavior: 'smooth',
//         block: 'center', // Aligns the card to the center of the screen
//       });
//     }
//   };

//   return (
//     <div className="min-h-screen">

//       <RotatingServices />

//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Solution Portfolio</h2>
//             <p className="text-xl text-gray-600">Comprehensive modules covering every aspect of your business</p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start">

//             {/* Left Column: Navigation List */}
//             <div className="md:col-span-1 space-y-3 md:sticky md:top-24">
//               {solutions.map((solution, index) => (
//                 <button
//                   key={index}
//                   onClick={() => handleSolutionClick(index)}
//                   className={`w-full text-left p-4 rounded-lg transition-all duration-300 flex justify-between items-center border-2 ${activeSolution === index
//                     ? 'bg-blue-50 border-blue-500 shadow-lg'
//                     : 'bg-gray-50 border-transparent hover:bg-gray-100 hover:border-gray-200'
//                     }`}
//                 >
//                   <div className="flex items-center">
//                     <div className={`p-2 rounded-md mr-4 ${activeSolution === index ? 'bg-blue-100' : 'bg-gray-200'}`}>
//                       <solution.icon className={`h-5 w-5 ${activeSolution === index ? 'text-blue-600' : 'text-gray-600'}`} />
//                     </div>
//                     <span className={`font-semibold ${activeSolution === index ? 'text-blue-800' : 'text-gray-800'}`}>{solution.title}</span>
//                   </div>
//                   <ChevronRight className={`h-5 w-5 text-blue-500 transition-transform ${activeSolution === index ? 'translate-x-1' : ''}`} />
//                 </button>
//               ))}
//             </div>

//             {/* Right Column: Content Display -- ATTACHED REF HERE */}
//             <div className="md:col-span-2" ref={contentContainerRef}>
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={activeSolution}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -20 }}
//                   transition={{ duration: 0.3 }}
//                   className="bg-white border border-gray-200 rounded-xl shadow-xl p-8"
//                 >
//                   {selectedSolution && (
//                     <>
//                       <div className="flex items-center mb-6">
//                         <div className="bg-blue-100 p-4 rounded-lg mr-5">
//                           <selectedSolution.icon className="h-8 w-8 text-blue-600" />
//                         </div>
//                         <h3 className="text-3xl font-bold text-gray-900">{selectedSolution.title}</h3>
//                       </div>
//                       <p className="text-gray-600 leading-relaxed">{selectedSolution.description}</p>
//                     </>
//                   )}
//                 </motion.div>
//               </AnimatePresence>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Integration Benefits */}
//       <section className="py-20 bg-blue-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Integration Matters</h2>
//             <p className="text-xl text-gray-600">Experience the power of unified enterprise solutions</p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             <div className="bg-white p-8 rounded-xl shadow-lg">
//               <div className="bg-blue-100 p-4 rounded-lg w-fit mb-6">
//                 <Building2 className="h-8 w-8 text-blue-600" />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-900 mb-4">Single Source of Truth</h3>
//               <p className="text-gray-600">Eliminate data silos and ensure consistency across all business functions with unified data management.</p>
//             </div>

//             <div className="bg-white p-8 rounded-xl shadow-lg">
//               <div className="bg-green-100 p-4 rounded-lg w-fit mb-6">
//                 <TrendingUp className="h-8 w-8 text-green-600" />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-900 mb-4">Improved Efficiency</h3>
//               <p className="text-gray-600">Streamline processes and reduce manual work through automated workflows and integrated systems.</p>
//             </div>

//             <div className="bg-white p-8 rounded-xl shadow-lg">
//               <div className="bg-purple-100 p-4 rounded-lg w-fit mb-6">
//                 <Shield className="h-8 w-8 text-purple-600" />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-900 mb-4">Enhanced Security</h3>
//               <p className="text-gray-600">Centralized security management with role-based access controls and comprehensive audit trails.</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Solutions;





import React, { useState, useRef, useEffect } from 'react';
import {
  Users,
  BarChart3,
  Lock,
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
  Building2,
  ShieldCheck,
  Wallet,
  PiggyBank,
  User,
  
} from 'lucide-react';

import { motion, AnimatePresence } from 'framer-motion';
import RotatingServices from '@/components/UI/RotatingServices';

const Solutions: React.FC = () => {
  // Can be a number (for the active index) or null (if all are closed on mobile)
  const [activeSolution, setActiveSolution] = useState<number | null>(0); 
  // State to determine which layout to render
  const [isDesktop, setIsDesktop] = useState(false);
  const contentContainerRef = useRef<HTMLDivElement>(null);

  // Effect to check screen size and set the view mode
  useEffect(() => {
    const checkScreenSize = () => {
      // 768px is the default 'md' breakpoint
      setIsDesktop(window.innerWidth >= 768);
    };

    checkScreenSize(); // Check on initial render
    window.addEventListener('resize', checkScreenSize);

    // Set a default active solution for desktop view if none is selected
    if (window.innerWidth >= 768 && activeSolution === null) {
      setActiveSolution(0);
    }
    
    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);


  const solutions = [

     {
      icon: Users,
      title: 'Recruitment Management',
      description: 'Our Recruitment Management solution streamlines and enhances your entire talent acquisition process from job requisition to candidate onboarding. It offers customizable recruiter dashboards for managing priority tasks, automated workflows that reduce manual steps, and AI-driven candidate matching to help identify the best-fit talent quickly. Candidates benefit from an intuitive application experience with real-time status updates and interview scheduling, while hiring teams collaborate seamlessly through integrated communication tools. This unified platform provides detailed analytics and reporting for informed decision-making, ensuring a faster, smarter, and more efficient recruitment process that attracts and retains top talent.',
    },

    {
      icon: User,
      title: 'Core HCM',
      description: 'Our comprehensive Workday-powered Human Capital Management solution streamlines all aspects of your workforce management—from recruitment and onboarding to payroll and talent development. With an intuitive self-service platform for employees and managers, it simplifies HR operations while ensuring compliance and consistent data across your organization. The solution enables better workforce planning, real-time analytics, and seamless integration across HR, finance, and payroll, empowering you to optimize human capital investments and drive business growth.',
    },

    {
      icon: ShieldCheck,
      title: 'Benefits',
      description: 'Leveraging Workday’s Benefits Management technology, we provide a centralized and transparent solution that automates benefit eligibility, enrollment, and plan management. Employees enjoy an easy-to-navigate portal for viewing and selecting benefits with full clarity on their total rewards, while HR gains streamlined control over eligibility rules, regulatory compliance, and real-time data synchronization. This integrated approach reduces administrative burdens and enhances employee engagement through clear, accessible benefits communication.',
    },

    {
      icon: FileText,
      title: 'Open Enrollment',
      description: 'Our Open Enrollment solution simplifies the annual benefits selection process with an intuitive, employee-friendly interface accessible anytime, anywhere. Automated workflows guide employees through plan comparisons and selections, ensuring accuracy and compliance. HR teams benefit from configurable rules, real-time tracking of enrollment progress, and seamless integration with payroll and benefits administration, resulting in an efficient, error-free open enrollment experience for your organization.',
    },

     {
      icon: DollarSign,
      title: 'Compensation Management',
      description: 'Harnessing Compensation module, we help you design, manage, and execute your compensation programs with precision and transparency. The solution supports configurable pay structures, merit and incentive plans, and budgeting controls, empowering HR and leadership to align compensation with business goals. Employees and managers access unified visibility into compensation data, fostering fairness and motivation while simplifying approval workflows and ensuring compliance.',
    },

{
      icon: PiggyBank,
      title: 'Advanced Compensation',
      description: 'Our Advanced Compensation solution powered by Workday provides sophisticated tools for complex variable pay and bonus management, equity plans, and executive compensation. It integrates seamlessly with performance and talent management, enabling you to reward top performers with custom incentive plans. This automation minimizes manual errors, supports regulatory compliance, and delivers detailed reporting and analytics to optimize compensation strategies that drive business success.',
    },

    {
      icon: Award,
      title: 'Performance Management',
      description: 'Our Performance Management solution fosters continuous employee development and alignment with organizational goals. Through flexible goal setting, regular check-ins, 360-degree feedback, and performance reviews, it encourages ongoing dialogue between managers and employees. Integration with learning and compensation modules ensures that performance insights translate into actionable growth plans and reward strategies that enhance employee engagement and productivity.',
    },

        {
      icon: Calendar,
      title: 'Time Off and Absence Management',
      description: 'We offer a comprehensive Time Off and Absence Management solution powered by Workday that streamlines how your organization handles employee leave. This solution enables your employees to effortlessly request time off and view their leave balances through an intuitive, mobile-friendly self-service portal. Behind the scenes, complex policies such as accruals, carryovers, multi-level approvals, and compliance with regional labor laws are fully configurable to fit your unique business needs. Managers benefit from real-time dashboards to track team absences, automate approvals, and forecast workforce availability for better planning. Seamless integration with payroll, time tracking, and HR systems ensures accuracy and reduces administrative burden. By leveraging Workday’s flexible and automated absence management platform, we help you improve productivity, enhance employee satisfaction, and maintain complete clarity and control over workforce time away from work.',
    },

        {
      icon: Clock,
      title: 'Time Tracking',
      description: 'We offer a robust Time Tracking solution that enables employees to easily record hours from any device through a simple, mobile-friendly interface. The system supports various work schedules, time codes, and rules, automating validations and approvals to ensure accurate payroll integration. Managers gain real-time visibility into team hours, overtime, and attendance trends, facilitating better workforce utilization and compliance with labor regulations.',
    },

        {
      icon: Wallet,
      title: 'Payroll Management',
      description: 'Our Workday-powered Payroll Management solution simplifies and automates your entire payroll process, ensuring employees are paid accurately and on time, every time. The solution handles complex payroll calculations, tax compliance, earnings, deductions, and benefits integration with a powerful, continuous calculation engine. Employees gain convenient access to their payroll information through mobile and web self-service portals, enhancing transparency and satisfaction. Managers and payroll administrators benefit from real-time dashboards, flexible auditing, and customizable reporting tools for greater control and compliance with regional regulations. Seamless integration with HR, time tracking, and benefits systems reduces manual tasks, minimizes errors, and streamlines payroll operations. By leveraging Workday’s secure and agile payroll platform, we help you save time, improve accuracy, and boost productivity in your payroll processes.',
    },




  ];

  // Click handler for desktop view (with scrolling)
  const handleDesktopClick = (index: number) => {
    setActiveSolution(index);
    contentContainerRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  };

  // Click handler for mobile accordion view
  const handleMobileClick = (index: number) => {
    setActiveSolution(activeSolution === index ? null : index);
  };

  // Memoize the selected solution to prevent recalculation on every render
  const selectedSolution = React.useMemo(() => {
    return activeSolution !== null ? solutions[activeSolution] : null;
  }, [activeSolution]);

  return (
    <div className="min-h-screen">
      <RotatingServices />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Solution Portfolio</h2>
            <p className="text-xl text-gray-600">Comprehensive modules covering every aspect of your business</p>
          </div>

          {/* Conditional Rendering based on screen size */}
          {isDesktop ? (
            // --- DESKTOP: TWO-COLUMN LAYOUT ---
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start">
              <div className="md:col-span-1 space-y-3 md:sticky md:top-24">
                {solutions.map((solution, index) => (
                  <button key={index} onClick={() => handleDesktopClick(index)} className={`w-full text-left p-4 rounded-lg transition-all duration-300 flex justify-between items-center border-2 ${activeSolution === index ? 'bg-blue-50 border-blue-500 shadow-lg' : 'bg-gray-50 border-transparent hover:bg-gray-100 hover:border-gray-200'}`}>
                    <div className="flex items-center">
                      <div className={`p-2 rounded-md mr-4 ${activeSolution === index ? 'bg-blue-100' : 'bg-gray-200'}`}><solution.icon className={`h-5 w-5 ${activeSolution === index ? 'text-blue-600' : 'text-gray-600'}`} /></div>
                      <span className={`font-semibold ${activeSolution === index ? 'text-blue-800' : 'text-gray-800'}`}>{solution.title}</span>
                    </div>
                    <ChevronRight className={`h-5 w-5 text-blue-500 transition-transform ${activeSolution === index ? 'translate-x-1' : ''}`} />
                  </button>
                ))}
              </div>
              <div className="md:col-span-2" ref={contentContainerRef}>
                <AnimatePresence mode="wait">
                  <motion.div key={activeSolution} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="bg-white border border-gray-200 rounded-xl shadow-xl p-8">
                    {selectedSolution && <>
                      <div className="flex items-center mb-6">
                        <div className="bg-blue-100 p-4 rounded-lg mr-5"><selectedSolution.icon className="h-8 w-8 text-blue-600" /></div>
                        <h3 className="text-3xl font-bold text-gray-900">{selectedSolution.title}</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{selectedSolution.description}</p>
                    </>}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          ) : (
            // --- MOBILE: ACCORDION LAYOUT ---
            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                  <button onClick={() => handleMobileClick(index)} className="w-full text-left p-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100">
                    <div className="flex items-center">
                      <div className="p-2 rounded-md mr-4 bg-gray-200"><solution.icon className="h-5 w-5 text-gray-600" /></div>
                      <span className="font-semibold text-gray-800">{solution.title}</span>
                    </div>
                    <ChevronRight className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${activeSolution === index ? 'rotate-90' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {activeSolution === index && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: 'easeInOut' }}>
                        <div className="p-4 border-t border-gray-200">
                          <p className="text-gray-600 leading-relaxed">{solution.description}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Integration Benefits Section */}
      {/* <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Integration Matters</h2>
            <p className="text-xl text-gray-600">Experience the power of unified enterprise solutions</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-blue-100 p-4 rounded-lg w-fit mb-6"><Building2 className="h-8 w-8 text-blue-600" /></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Single Source of Truth</h3>
              <p className="text-gray-600">Eliminate data silos and ensure consistency across all business functions with unified data management.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-green-100 p-4 rounded-lg w-fit mb-6"><TrendingUp className="h-8 w-8 text-green-600" /></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Improved Efficiency</h3>
              <p className="text-gray-600">Streamline processes and reduce manual work through automated workflows and integrated systems.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-purple-100 p-4 rounded-lg w-fit mb-6"><Shield className="h-8 w-8 text-purple-600" /></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Enhanced Security</h3>
              <p className="text-gray-600">Centralized security management with role-based access controls and comprehensive audit trails.</p>
            </div>
          </div>
        </div>
      </section> */}


        <section className="py-20 bg-blue-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        Complete ERP Advantage
      </h2>
      <p className="text-xl text-gray-600">
        Unifying every function of your enterprise under one cloud solution
      </p>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Connected Workforce */}
      <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
        <div className="bg-blue-100 p-4 rounded-lg w-fit mb-6">
          <Users className="h-8 w-8 text-blue-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Connected Workforce
        </h3>
        <p className="text-gray-600">
          Empower employees and HR teams with integrated recruiting, HCM, and payroll solutions.
        </p>
      </div>

      {/* Smarter Decisions */}
      <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
        <div className="bg-green-100 p-4 rounded-lg w-fit mb-6">
          <BarChart3 className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Smarter Decisions
        </h3>
        <p className="text-gray-600">
          Access real-time analytics across finance, HR, and operations to make informed business moves.
        </p>
      </div>

      {/* Seamless Compliance */}
      <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
        <div className="bg-purple-100 p-4 rounded-lg w-fit mb-6">
          <Lock className="h-8 w-8 text-purple-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Seamless Compliance
        </h3>
        <p className="text-gray-600">
          Stay ahead with built-in regulatory compliance, secure payroll, and audit-ready reporting.
        </p>
      </div>
    </div>
  </div>
</section>


    </div>
  );
};

export default Solutions;