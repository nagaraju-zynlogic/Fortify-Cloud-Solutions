// // // import React, { useState } from 'react';
// // // import { 
// // //   Database, 
// // //   Code, 
// // //   Users, 
// // //   TrendingUp, 
// // //   ChevronDown, 
// // //   ChevronRight,
// // //   Layers,
// // //   Shield,
// // //   Zap,
// // //   BarChart
// // // } from 'lucide-react';
// // // import { motion } from "framer-motion";

// // // const Services: React.FC = () => {
// // //   const [activeService, setActiveService] = useState<number | null>(0);

// // //   const services = [
// // //     {
// // //       icon: Database,
// // //       title: 'Enterprise Resource Planning (ERP)',
// // //       shortDesc: 'Comprehensive ERP solutions that integrate all core business processes',
// // //       fullDesc: `Enterprise Resource Planning (ERP) is a type of software that organizations use to manage and integrate the important parts of their businesses. ERP software can integrate planning, purchasing inventory, sales, marketing, finance, human resources, and more.

// // //       Our ERP solutions provide an integrated view of core business processes, often in real-time, using common databases maintained by a database management system. ERP systems track business resources—cash, raw materials, production capacity—and the status of business commitments: orders, purchase orders, and payroll.

// // //       The applications that make up the system share data across the various departments (manufacturing, purchasing, sales, accounting, etc.) that provide the data. ERP facilitates information flow between all business functions, and manages connections to outside stakeholders.

// // //       Key Benefits:
// // //       • Improved efficiency and productivity through automation
// // //       • Better decision-making with real-time data insights  
// // //       • Enhanced collaboration across departments
// // //       • Reduced operational costs through process optimization
// // //       • Scalable solutions that grow with your business
// // //       • Compliance and risk management capabilities`,
// // //       features: [
// // //         'Financial Management & Accounting',
// // //         'Supply Chain Management',
// // //         'Manufacturing & Production Planning',
// // //         'Customer Relationship Management',
// // //         'Human Resources Management',
// // //         'Business Intelligence & Analytics'
// // //       ]
// // //     },
// // //     {
// // //       icon: Code,
// // //       title: 'Custom Application Development & System Integration',
// // //       shortDesc: 'Tailored development and seamless integration solutions',
// // //       fullDesc: `System Integration involves bringing together sub-systems into one system and ensuring that the subsystems function together as a complete, harmonized system. We specialize in creating immersive applications using cutting-edge technologies.

// // //       Our development expertise spans multiple platforms and technologies:
// // //       • .NET Framework and .NET Core applications
// // //       • Java enterprise applications and microservices
// // //       • Open Source solutions and frameworks
// // //       • Internet of Things (IoT) implementations
// // //       • Big Data processing and analytics platforms

// // //       We excel at integrating disparate systems to create unified, efficient workflows that enhance productivity and reduce operational complexity. Our custom applications are designed to meet your specific business requirements while maintaining scalability and performance.

// // //       Integration Capabilities:
// // //       • API development and management
// // //       • Data transformation and migration
// // //       • Legacy system modernization
// // //       • Cloud migration and hybrid solutions
// // //       • Real-time data synchronization
// // //       • Workflow automation and orchestration`,
// // //       features: [
// // //         'Custom Software Development',
// // //         'API Development & Management',
// // //         'Legacy System Integration',
// // //         'Cloud Migration Services',
// // //         'Microservices Architecture',
// // //         'Data Pipeline Development'
// // //       ]
// // //     },
// // //     {
// // //       icon: Users,
// // //       title: 'IT Resources',
// // //       shortDesc: 'Comprehensive IT staffing and infrastructure solutions',
// // //       fullDesc: `We provide comprehensive IT-related resources, both physical infrastructure and human expertise. Our resource provisioning includes stringent screening methods, a robust recruitment engine, and a commitment to continuing education to ensure our team stays current with evolving technologies.

// // //       Physical Resources:
// // //       • Server infrastructure and cloud computing resources
// // //       • Network architecture and security systems
// // //       • Development and testing environments
// // //       • Backup and disaster recovery solutions
// // //       • Monitoring and performance management tools

// // //       Human Resources:
// // //       • Certified ERP consultants and specialists
// // //       • Software developers and architects
// // //       • Database administrators and analysts
// // //       • Project managers and business analysts
// // //       • Quality assurance and testing professionals
// // //       • Technical support and maintenance teams

// // //       Our recruitment process ensures that every team member possesses:
// // //       • Relevant technical certifications
// // //       • Industry experience and domain knowledge
// // //       • Strong communication and collaboration skills
// // //       • Commitment to continuous learning and improvement`,
// // //       features: [
// // //         'Infrastructure Management',
// // //         'Technical Staffing Solutions',
// // //         'Skills Assessment & Training',
// // //         'Project Team Assembly',
// // //         'Performance Monitoring',
// // //         'Ongoing Support Services'
// // //       ]
// // //     },
// // //     {
// // //       icon: TrendingUp,
// // //       title: 'Value-Added Services',
// // //       shortDesc: 'BI, Optimization, and comprehensive support services',
// // //       fullDesc: `Our value-added services extend beyond implementation to ensure your systems continue to deliver maximum value. We provide comprehensive ongoing support, advanced analytics, and continuous optimization services.

// // //       Business Intelligence & Performance Management:
// // //       Transform your data into actionable insights with our BI solutions. We help you create dashboards, reports, and analytics that drive informed decision-making across all levels of your organization.

// // //       Application Integration Services:
// // //       Seamlessly connect your ERP systems with other business applications, ensuring data flows smoothly across your entire technology ecosystem.

// // //       Business Process Optimization:
// // //       Continuously improve your business processes through analysis, redesign, and automation. Our experts identify bottlenecks and inefficiencies, recommending solutions that enhance productivity and reduce costs.

// // //       Ongoing Support & Operations:
// // //       Our comprehensive support model ensures your systems remain secure, up-to-date, and performing optimally. We provide proactive monitoring, maintenance, and issue resolution to minimize downtime and maximize productivity.`,
// // //       features: [
// // //         'Ongoing Support & Operations',
// // //         'Application Integration',
// // //         'Business Intelligence & Analytics',
// // //         'Performance Management',
// // //         'Process Optimization',
// // //         'Proactive System Monitoring'
// // //       ]
// // //     }
// // //   ];

// // //   return (
// // //     <div className="min-h-screen">


// // //       <section className="relative bg-gradient-to-br from-[#0A234E] via-blue-900 to-blue-800 text-white py-24 overflow-hidden">
      
// // //       {/* Decorative blurred circles */}
// // //       <div className="absolute top-10 left-0 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
// // //       <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

// // //       <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
// // //         {/* Centered Content */}
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 30 }}
// // //           whileInView={{ opacity: 1, y: 0 }}
// // //           transition={{ duration: 0.8 }}
// // //           viewport={{ once: true }}
// // //           className="text-center max-w-4xl mx-auto"
// // //         >
// // //           <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
// // //             Our <span className="text-blue-400">Services</span>
// // //           </h1>
// // //           <p className="text-xl text-blue-100 leading-relaxed mb-8">
// // //             Fortify Cloud Solutions helps to integrate business process best practices with specific client requirements. 
// // //             We provide cost-effective solutions that allow customers to automate their processes and 
// // //             gain greater visibility across their organizations.
// // //           </p>

// // //           {/* Optional CTA Button */}
// // //           <motion.a
// // //             href="#services"
// // //             whileHover={{ scale: 1.05 }}
// // //             whileTap={{ scale: 0.95 }}
// // //             className="inline-block px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full shadow-lg shadow-blue-500/30 transition-colors duration-300"
// // //           >
// // //             Explore Our Services
// // //           </motion.a>
// // //         </motion.div>
// // //       </div>
// // //     </section>


// // //       {/* Services Overview */}
// // //       <section className="py-20 bg-gray-50">
// // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
// // //             {services.map((service, index) => (
// // //               <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
// // //                 <div className="bg-blue-100 p-4 rounded-lg w-fit mx-auto mb-4">
// // //                   <service.icon className="h-8 w-8 text-blue-600" />
// // //                 </div>
// // //                 <h3 className="text-lg font-semibold text-gray-900 mb-3">{service.title}</h3>
// // //                 <p className="text-gray-600 text-sm leading-relaxed">{service.shortDesc}</p>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Detailed Services */}
// // //       <section className="py-20 bg-white">
// // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //           <div className="space-y-8">
// // //             {services.map((service, index) => (
// // //               <div key={index} className="border border-gray-200 rounded-xl overflow-hidden shadow-lg">
// // //                 <button
// // //                   className="w-full p-6 lg:p-8 bg-white hover:bg-gray-50 transition-colors duration-200 text-left"
// // //                   onClick={() => setActiveService(activeService === index ? null : index)}
// // //                 >
// // //                   <div className="flex items-center justify-between">
// // //                     <div className="flex items-center">
// // //                       <div className="bg-blue-100 p-3 rounded-lg mr-6">
// // //                         <service.icon className="h-6 w-6 text-blue-600" />
// // //                       </div>
// // //                       <div>
// // //                         <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
// // //                         <p className="text-gray-600">{service.shortDesc}</p>
// // //                       </div>
// // //                     </div>
// // //                     <div className="ml-4">
// // //                       {activeService === index ? (
// // //                         <ChevronDown className="h-6 w-6 text-gray-400" />
// // //                       ) : (
// // //                         <ChevronRight className="h-6 w-6 text-gray-400" />
// // //                       )}
// // //                     </div>
// // //                   </div>
// // //                 </button>
                
// // //                 {activeService === index && (
// // //                   <div className="px-6 lg:px-8 pb-6 lg:pb-8 bg-gray-50">
// // //                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
// // //                       <div>
// // //                         <div className="prose text-gray-600 leading-relaxed whitespace-pre-line">
// // //                           {service.fullDesc}
// // //                         </div>
// // //                       </div>
// // //                       <div>
// // //                         <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Features & Capabilities</h4>
// // //                         <ul className="space-y-3">
// // //                           {service.features.map((feature, featureIndex) => (
// // //                             <li key={featureIndex} className="flex items-start">
// // //                               <div className="bg-blue-600 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
// // //                               <span className="text-gray-700">{feature}</span>
// // //                             </li>
// // //                           ))}
// // //                         </ul>
// // //                       </div>
// // //                     </div>
// // //                   </div>
// // //                 )}
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Service Benefits */}
// // //       <section className="py-20 bg-blue-50">
// // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //           <div className="text-center mb-16">
// // //             <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Our Services Make a Difference</h2>
// // //             <p className="text-xl text-gray-600">Experience measurable improvements across your organization</p>
// // //           </div>

// // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
// // //             <div className="text-center">
// // //               <div className="bg-blue-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
// // //                 <Layers className="h-8 w-8 text-white" />
// // //               </div>
// // //               <h3 className="text-xl font-semibold text-gray-900 mb-2">Integrated Solutions</h3>
// // //               <p className="text-gray-600">Seamlessly connect all business processes for maximum efficiency</p>
// // //             </div>

// // //             <div className="text-center">
// // //               <div className="bg-blue-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
// // //                 <Shield className="h-8 w-8 text-white" />
// // //               </div>
// // //               <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Security</h3>
// // //               <p className="text-gray-600">Robust security measures protecting your critical business data</p>
// // //             </div>

// // //             <div className="text-center">
// // //               <div className="bg-blue-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
// // //                 <Zap className="h-8 w-8 text-white" />
// // //               </div>
// // //               <h3 className="text-xl font-semibold text-gray-900 mb-2">Rapid Implementation</h3>
// // //               <p className="text-gray-600">Accelerated deployment with minimal disruption to operations</p>
// // //             </div>

// // //             <div className="text-center">
// // //               <div className="bg-blue-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
// // //                 <BarChart className="h-8 w-8 text-white" />
// // //               </div>
// // //               <h3 className="text-xl font-semibold text-gray-900 mb-2">Measurable ROI</h3>
// // //               <p className="text-gray-600">Proven track record of delivering quantifiable business value</p>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>
// // //     </div>
// // //   );
// // // };

// // // export default Services;






// // import React, { useState } from 'react';
// // import {
// //   Database,
// //   Code,
// //   Users,
// //   TrendingUp,
// //   Layers,
// //   Shield,
// //   Zap,
// //   BarChart
// // } from 'lucide-react';
// // import { motion } from "framer-motion";

// // const Services = () => {
// //   const [activeService, setActiveService] = useState<number | null>(null);

// //   const services = [
// //     {
// //       icon: Database,
// //       title: 'Enterprise Resource Planning (ERP)',
// //       shortDesc: 'Comprehensive ERP solutions that integrate all core business processes',
// //       fullDesc: `Enterprise Resource Planning (ERP) is a type of software ...`,
// //       features: [
// //         'Financial Management & Accounting',
// //         'Supply Chain Management',
// //         'Manufacturing & Production Planning',
// //         'Customer Relationship Management',
// //         'Human Resources Management',
// //         'Business Intelligence & Analytics'
// //       ]
// //     },
// //     {
// //       icon: Code,
// //       title: 'Custom Application Development & System Integration',
// //       shortDesc: 'Tailored development and seamless integration solutions',
// //       fullDesc: `System Integration involves bringing together ...`,
// //       features: [
// //         'Custom Software Development',
// //         'API Development & Management',
// //         'Legacy System Integration',
// //         'Cloud Migration Services',
// //         'Microservices Architecture',
// //         'Data Pipeline Development'
// //       ]
// //     },
// //     {
// //       icon: Users,
// //       title: 'IT Resources',
// //       shortDesc: 'Comprehensive IT staffing and infrastructure solutions',
// //       fullDesc: `We provide comprehensive IT-related resources ...`,
// //       features: [
// //         'Infrastructure Management',
// //         'Technical Staffing Solutions',
// //         'Skills Assessment & Training',
// //         'Project Team Assembly',
// //         'Performance Monitoring',
// //         'Ongoing Support Services'
// //       ]
// //     },
// //     {
// //       icon: TrendingUp,
// //       title: 'Value-Added Services',
// //       shortDesc: 'BI, Optimization, and comprehensive support services',
// //       fullDesc: `Our value-added services extend beyond implementation ...`,
// //       features: [
// //         'Ongoing Support & Operations',
// //         'Application Integration',
// //         'Business Intelligence & Analytics',
// //         'Performance Management',
// //         'Process Optimization',
// //         'Proactive System Monitoring'
// //       ]
// //     }
// //   ];

// //   return (
// //     <div className="min-h-screen">

// //       {/* Services Overview */}
// //       <section className="py-20 bg-gray-50">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
// //             {services.map((service, index) => (
// //               <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center relative">
// //                 <button
// //                   className="bg-transparent border-none outline-none w-full"
// //                   onClick={() => setActiveService(activeService === index ? null : index)}
// //                 >
// //                   <div className="bg-blue-100 p-4 rounded-lg w-fit mx-auto mb-4">
// //                     <service.icon className="h-8 w-8 text-blue-600" />
// //                   </div>
// //                   <h3 className="text-lg font-semibold text-gray-900 mb-3">{service.title}</h3>
// //                   <p className="text-gray-600 text-sm leading-relaxed">{service.shortDesc}</p>
// //                 </button>
// //                 {/* Show the details under the card */}
// //                 {activeService === index && (
// //                   <div className="mt-6 p-6 rounded-xl bg-gray-50 text-left shadow border border-blue-100">
// //                     <h4 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h4>
// //                     <div className="text-gray-700 whitespace-pre-line mb-4">{service.fullDesc}</div>
// //                     <h5 className="font-bold mb-2">Key Features & Capabilities</h5>
// //                     <ul className="list-disc pl-5 space-y-1 text-gray-700">
// //                       {service.features.map((feature, fIndex) => (
// //                         <li key={fIndex}>{feature}</li>
// //                       ))}
// //                     </ul>
// //                   </div>
// //                 )}
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Optionally keep the Service Benefits Section as below */}
// //       {/* ...Service Benefits section, as you already wrote... */}

// //     </div>
// //   );
// // };

// // export default Services;








// import React, { useState } from 'react';
// import {
//   Database,
//   Code,
//   Users,
//   TrendingUp,
//   Layers,
//   Shield,
//   Zap,
//   BarChart,
//   CheckCircle2,
//   X
// } from 'lucide-react';
// // import { motion } from "framer-motion";
// import { motion, AnimatePresence } from "framer-motion";

// const Services: React.FC = () => {
//   const [activeService, setActiveService] = useState<number | null>(null);

// //   const services = [
// //     {
// //       icon: Database,
// //       title: 'Enterprise Resource Planning (ERP)',
// //       shortDesc: 'Comprehensive ERP solutions that integrate all core business processes',
// //       fullDesc: `Enterprise Resource Planning (ERP) is a type of software that organizations use to manage and integrate the important parts of their businesses. ERP software can integrate planning, purchasing inventory, sales, marketing, finance, human resources, and more.

// // Our ERP solutions provide an integrated view of core business processes, often in real-time, using common databases maintained by a database management system. ERP systems track business resources—cash, raw materials, production capacity—and the status of business commitments: orders, purchase orders, and payroll.

// // The applications that make up the system share data across the various departments (manufacturing, purchasing, sales, accounting, etc.) that provide the data. ERP facilitates information flow between all business functions, and manages connections to outside stakeholders.

// // Key Benefits:
// // • Improved efficiency and productivity through automation
// // • Better decision-making with real-time data insights
// // • Enhanced collaboration across departments
// // • Reduced operational costs through process optimization
// // • Scalable solutions that grow with your business
// // • Compliance and risk management capabilities`,
// //       features: [
// //         'Financial Management & Accounting',
// //         'Supply Chain Management',
// //         'Manufacturing & Production Planning',
// //         'Customer Relationship Management',
// //         'Human Resources Management',
// //         'Business Intelligence & Analytics'
// //       ]
// //     },
// //     {
// //       icon: Code,
// //       title: 'Custom Application Development & System Integration',
// //       shortDesc: 'Tailored development and seamless integration solutions',
// //       fullDesc: `System Integration involves bringing together sub-systems into one system and ensuring that the subsystems function together as a complete, harmonized system. We specialize in creating immersive applications using cutting-edge technologies.

// // Our development expertise spans multiple platforms and technologies:
// // • .NET Framework and .NET Core applications
// // • Java enterprise applications and microservices
// // • Open Source solutions and frameworks
// // • Internet of Things (IoT) implementations
// // • Big Data processing and analytics platforms

// // We excel at integrating disparate systems to create unified, efficient workflows that enhance productivity and reduce operational complexity.`,
// //       features: [
// //         'Custom Software Development',
// //         'API Development & Management',
// //         'Legacy System Integration',
// //         'Cloud Migration Services',
// //         'Microservices Architecture',
// //         'Data Pipeline Development'
// //       ]
// //     },
// //     {
// //       icon: Users,
// //       title: 'IT Resources',
// //       shortDesc: 'Comprehensive IT staffing and infrastructure solutions',
// //       fullDesc: `We provide comprehensive IT-related resources, both physical infrastructure and human expertise. Our resource provisioning includes stringent screening methods, a robust recruitment engine, and a commitment to continuing education to ensure our team stays current with evolving technologies.`,
// //       features: [
// //         'Infrastructure Management',
// //         'Technical Staffing Solutions',
// //         'Skills Assessment & Training',
// //         'Project Team Assembly',
// //         'Performance Monitoring',
// //         'Ongoing Support Services'
// //       ]
// //     },
// //     {
// //       icon: TrendingUp,
// //       title: 'Value-Added Services',
// //       shortDesc: 'BI, Optimization, and comprehensive support services',
// //       fullDesc: `Our value-added services extend beyond implementation to ensure your systems continue to deliver maximum value. We provide comprehensive ongoing support, advanced analytics, and continuous optimization services.`,
// //       features: [
// //         'Ongoing Support & Operations',
// //         'Application Integration',
// //         'Business Intelligence & Analytics',
// //         'Performance Management',
// //         'Process Optimization',
// //         'Proactive System Monitoring'
// //       ]
// //     }
// //   ];


// const services = [
//   {
//     icon: Database,
//     title: 'Enterprise Resource Planning (ERP)',
//     shortDesc: 'Industry-standard ERP for integrated business management',
//     fullDesc: `Our expertise spans industry-leading ERP platforms such as **Workday**, **SAP**, and **PeopleSoft**.

// Enterprise Resource Planning (ERP) is the integrated management of main business processes, often in real-time, enabled by advanced software and technology. ERP is a category of business management software comprised of integrated applications—empowering organizations to collect, store, manage, and interpret data across business activities.

// ERP systems can be on-premises or cloud-based, with cloud adoption accelerating due to anywhere, anytime access. These systems provide a continuously updated, organization-wide view of core operations using common databases—tracking resources like cash, raw materials, production capacity, and business commitments (orders, POs, payroll).

// ERP applications share data across all departments (manufacturing, purchasing, sales, accounting, etc.), facilitating information flow, cross-functional collaboration, and seamless connections to external stakeholders.

// **Key Benefits:**
// • Streamlined business operations and automation
// • Real-time visibility and decision-making
// • Enhanced interdepartmental collaboration
// • Cost reduction and process optimization
// • Scalable, compliant, and secure solutions
// `,
//     features: [
//       'Workday, SAP, PeopleSoft expertise',
//       'Cloud & on-premises ERP implementation',
//       'End-to-end business process integration',
//       'Data-driven insights across departments',
//       'Financial & Resource Management',
//       'Regulatory compliance & risk controls'
//     ]
//   },
//   {
//     icon: Code,
//     title: 'Custom Application Development & System Integration',
//     shortDesc: 'Integrated solutions with leading technologies',
//     fullDesc: `System integration brings together component subsystems so they function as a unified, coordinated solution.

// **Fortify Cloud Solutions** is adept at engineering and IT integration—linking disparate computing systems and software to act as a cohesive whole. Our approach leverages the best branded development and integration tools, delivering tailored solutions that holistically solve client business challenges and nurture competitive advantage.

// **Our experience includes:**
// • Building robust applications from the ground up with .NET, Java, and open source technologies
// • Implementing integrated solutions with **IoT** and **Big Data** technologies
// • Streamlining business workflows and connecting siloed applications
// • Creating content and document management platforms to empower knowledge-sharing

// We focus on solutions that are scalable, resilient, and fully aligned to your business strategy.
// `,
//     features: [
//       'Ground-up .NET, Java, Open Source development',
//       'IoT & Big Data platform integration',
//       'Workflow automation & business process streamlining',
//       'Content/Document Management Systems',
//       'API and microservices architecture',
//       'Legacy modernization'
//     ]
//   },
//   {
//     icon: Users,
//     title: 'IT Resources',
//     shortDesc: 'Comprehensive IT staffing and infrastructure support',
//     fullDesc: `Our IT resource capabilities encompass both the **physical infrastructure** (networks, databases, software, and cloud) and the **critical human expertise** necessary for organizational success.

// Fortify Cloud Solutions is proud of its extensive recruitment network, rigorous screening processes, and commitment to ongoing education—ensuring clients reliably access the latest and most relevant IT skills. We anticipate client needs, help manage demand fluctuations, and invest in continuous employee skill development to keep your business at the forefront of technology.

// **Our approach ensures:**
// • Access to leading IT experts and managers
// • Robust infrastructure and platform support
// • Adapting swiftly to changing personnel or technical requirements
// • Governance and oversight to maximize business value from IT assets
// `,
//     features: [
//       'IT infrastructure management',
//       'Expert technical staffing',
//       'Skills screening & education',
//       'Flexible project team assembly',
//       'On-demand support',
//       'Systems monitoring & optimization'
//     ]
//   },
//   {
//     icon: TrendingUp,
//     title: 'Value-Added Services',
//     shortDesc: 'Business transformation and technology governance',
//     fullDesc: `Effective information and technology governance is critical for modern business success—and Fortify Cloud Solutions excels as a driver of innovation and business transformation.

// We help clients stay ahead of ever-evolving technology trends, supporting them in upgrading processes, applying the right tools, and maximizing human capital to capture new opportunities. **IT has been the backbone of growth for years**, and remains a key enabler of efficiency and performance.

// Our services empower you to:
// • Acquire, assimilate, and disseminate information seamlessly
// • Continuously update and upgrade your technology stack
// • Maintain best-practice information flow and workflow integration
// • Leverage IT as a competitive differentiator, not merely as a tactical tool
// `,
//     features: [
//       'IT governance and strategic consulting',
//       'Continuous technology upgradation',
//       'Process and workflow optimization',
//       'Performance management',
//       'Change management and training',
//       'Proactive technology scouting'
//     ]
//   }
// ];



//   return (
//     <div className="min-h-screen">
//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-br from-[#0A234E] via-blue-900 to-blue-800 text-white py-24 overflow-hidden">
//         {/* Decorative blurred circles */}
//         <div className="absolute top-10 left-0 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
//         <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

//         <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-center max-w-4xl mx-auto"
//           >
//             <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
//               Our <span className="text-blue-400">Services</span>
//             </h1>
//             <p className="text-xl text-blue-100 leading-relaxed mb-8">
//               Fortify Cloud Solutions helps to integrate business process best practices with specific client requirements.
//               We provide cost-effective solutions that allow customers to automate their processes and
//               gain greater visibility across their organizations.
//             </p>
//             <motion.a
//               href="#services"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="inline-block px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full shadow-lg shadow-blue-500/30 transition-colors duration-300"
//             >
//               Explore Our Services
//             </motion.a>
//           </motion.div>
//         </div>
//       </section>

//       {/* Services Grid */}
//       <section id="services" className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
//             {services.map((service, index) => (
//               <button
//                 key={index}
//                 className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition text-center outline-none border-none"
//                 onClick={() => setActiveService(index)}
//               >
//                 <div className="bg-blue-100 p-4 rounded-lg w-fit mx-auto mb-4">
//                   <service.icon className="h-8 w-8 text-blue-600" />
//                 </div>
//                 <h3 className="text-lg font-semibold text-gray-900 mb-3">{service.title}</h3>
//                 <p className="text-gray-700 text-sm leading-relaxed">{service.shortDesc}</p>
//               </button>
//             ))}
//           </div>




//           {/* --- START: New Creative Detail Card --- */}
// <AnimatePresence>
//   {activeService !== null && (
//     <motion.div
//       key={activeService} // Key is crucial for AnimatePresence
//       initial={{ opacity: 0, y: 50, scale: 0.95 }}
//       animate={{ opacity: 1, y: 0, scale: 1 }}
//       exit={{ opacity: 0, y: 50, scale: 0.95 }}
//       transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
//       className="relative max-w-5xl mx-auto mt-12"
//     >
//       <div className="relative p-1 bg-gradient-to-br from-blue-400 via-indigo-500 to-blue-600 rounded-2xl shadow-2xl shadow-blue-500/20">
//         <div className="relative bg-white rounded-[14px] p-8 md:p-12">
//           {/* Close Button */}
//           <button
//             onClick={() => setActiveService(null)}
//             className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors"
//             aria-label="Close service details"
//           >
//             <X className="h-6 w-6" />
//           </button>

//           {/* Card Content Grid */}
//           <div className="grid grid-cols-1 lg:grid-cols-5 gap-x-12">
//             {/* Left Column: Description */}
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.2, duration: 0.5 }}
//               className="lg:col-span-3"
//             >
//               <div className="flex items-center mb-6">
//                 <div className="bg-blue-100 p-3 rounded-lg mr-4">
//                   {React.createElement(services[activeService].icon, { className: "h-8 w-8 text-blue-600" })}
//                 </div>
//                 <h2 className="text-3xl font-bold text-gray-900">
//                   {services[activeService].title}
//                 </h2>
//               </div>
//               <p className="text-gray-600 leading-relaxed whitespace-pre-line">
//                 {/* Logic to render bold text from **...** syntax */}
//                 {services[activeService].fullDesc.split(/(\*\*.*?\*\*)/).map((part, i) =>
//                   part.startsWith('**') && part.endsWith('**') ?
//                   <strong key={i} className="font-semibold text-gray-800">{part.slice(2, -2)}</strong> :
//                   part
//                 )}
//               </p>
//             </motion.div>

//             {/* Right Column: Features */}
//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.3, duration: 0.5 }}
//               className="lg:col-span-2 mt-8 lg:mt-0 lg:border-l lg:pl-8 border-gray-200"
//             >
//               <h3 className="text-xl font-semibold text-gray-800 mb-5">
//                 Key Capabilities
//               </h3>
//               <ul className="space-y-4">
//                 {services[activeService].features.map((feature, fIdx) => (
//                   <motion.li
//                     key={fIdx}
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.4 + fIdx * 0.1, duration: 0.4 }}
//                     className="flex items-start"
//                   >
//                     <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
//                     <span className="text-gray-700">{feature}</span>
//                   </motion.li>
//                 ))}
//               </ul>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   )}
// </AnimatePresence>
// {/* --- END: New Creative Detail Card --- */}


          
//         </div>
//       </section>

//       {/* Service Benefits */}
//       <section className="py-20 bg-blue-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Our Services Make a Difference</h2>
//             <p className="text-xl text-gray-600">Experience measurable improvements across your organization</p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             <div className="text-center">
//               <div className="bg-blue-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
//                 <Layers className="h-8 w-8 text-white" />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-900 mb-2">Integrated Solutions</h3>
//               <p className="text-gray-600">Seamlessly connect all business processes for maximum efficiency</p>
//             </div>

//             <div className="text-center">
//               <div className="bg-blue-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
//                 <Shield className="h-8 w-8 text-white" />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Security</h3>
//               <p className="text-gray-600">Robust security measures protecting your critical business data</p>
//             </div>

//             <div className="text-center">
//               <div className="bg-blue-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
//                 <Zap className="h-8 w-8 text-white" />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-900 mb-2">Rapid Implementation</h3>
//               <p className="text-gray-600">Accelerated deployment with minimal disruption to operations</p>
//             </div>

//             <div className="text-center">
//               <div className="bg-blue-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
//                 <BarChart className="h-8 w-8 text-white" />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-900 mb-2">Measurable ROI</h3>
//               <p className="text-gray-600">Proven track record of delivering quantifiable business value</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Services;





import React, { useState, useEffect } from 'react';
import {
  Database,
  Code,
  Users,
  TrendingUp,
  Layers,
  Shield,
  Zap,
  BarChart,
  CheckCircle2,
  X,
  Lightbulb
} from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";

// --- START: Custom Hook for Media Queries ---
// This hook detects if the browser window matches a certain media query.
// We use it to switch between the inline view (desktop) and modal view (mobile).
const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  }, [matches, query]);

  return matches;
};
// --- END: Custom Hook for Media Queries ---


const Services: React.FC = () => {
  const [activeService, setActiveService] = useState<number | null>(null);
  const isMobile = useMediaQuery('(max-width: 1023px)');

  // --- START: Body Scroll Lock for Mobile Modal ---
  // When the modal is open on a mobile device, this prevents the page
  // behind it from scrolling, which is a standard UX practice.
  useEffect(() => {
    if (isMobile && activeService !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Cleanup function to restore scrolling when the component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobile, activeService]);
  // --- END: Body Scroll Lock ---

  const services = [
    {
      icon: Database,
      title: 'Enterprise Resource Planning (ERP)',
      shortDesc: 'Industry-standard ERP for integrated business management',
      fullDesc: `Our expertise spans industry-leading ERP platforms such as **Workday**, **SAP**, and **PeopleSoft**.

Enterprise Resource Planning (ERP) is the integrated management of main business processes, often in real-time, enabled by advanced software and technology. ERP is a category of business management software comprised of integrated applications—empowering organizations to collect, store, manage, and interpret data across business activities.

ERP systems can be on-premises or cloud-based, with cloud adoption accelerating due to anywhere, anytime access. These systems provide a continuously updated, organization-wide view of core operations using common databases—tracking resources like cash, raw materials, production capacity, and business commitments (orders, POs, payroll).

ERP applications share data across all departments (manufacturing, purchasing, sales, accounting, etc.), facilitating information flow, cross-functional collaboration, and seamless connections to external stakeholders.

**Key Benefits:**
• Streamlined business operations and automation
• Real-time visibility and decision-making
• Enhanced interdepartmental collaboration
• Cost reduction and process optimization
• Scalable, compliant, and secure solutions
`,
      features: [
        'Workday, SAP, PeopleSoft expertise',
        'Cloud & on-premises ERP implementation',
        'End-to-end business process integration',
        'Data-driven insights across departments',
        'Financial & Resource Management',
        'Regulatory compliance & risk controls'
      ]
    },
    {
      icon: Code,
      title: 'Custom Application Development & System Integration',
      shortDesc: 'Integrated solutions with leading technologies',
      fullDesc: `System integration brings together component subsystems so they function as a unified, coordinated solution.

**Fortify Cloud Solutions** is adept at engineering and IT integration—linking disparate computing systems and software to act as a cohesive whole. Our approach leverages the best branded development and integration tools, delivering tailored solutions that holistically solve client business challenges and nurture competitive advantage.

**Our experience includes:**
• Building robust applications from the ground up with .NET, Java, and open source technologies
• Implementing integrated solutions with **IoT** and **Big Data** technologies
• Streamlining business workflows and connecting siloed applications
• Creating content and document management platforms to empower knowledge-sharing

We focus on solutions that are scalable, resilient, and fully aligned to your business strategy.
`,
      features: [
        'Ground-up .NET, Java, Open Source development',
        'IoT & Big Data platform integration',
        'Workflow automation & business process streamlining',
        'Content/Document Management Systems',
        'API and microservices architecture',
        'Legacy modernization'
      ]
    },
    {
      icon: Users,
      title: 'IT Resources',
      shortDesc: 'Comprehensive IT staffing and infrastructure support',
      fullDesc: `Our IT resource capabilities encompass both the **physical infrastructure** (networks, databases, software, and cloud) and the **critical human expertise** necessary for organizational success.

Fortify Cloud Solutions is proud of its extensive recruitment network, rigorous screening processes, and commitment to ongoing education—ensuring clients reliably access the latest and most relevant IT skills. We anticipate client needs, help manage demand fluctuations, and invest in continuous employee skill development to keep your business at the forefront of technology.

**Our approach ensures:**
• Access to leading IT experts and managers
• Robust infrastructure and platform support
• Adapting swiftly to changing personnel or technical requirements
• Governance and oversight to maximize business value from IT assets
`,
      features: [
        'IT infrastructure management',
        'Expert technical staffing',
        'Skills screening & education',
        'Flexible project team assembly',
        'On-demand support',
        'Systems monitoring & optimization'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Value-Added Services',
      shortDesc: 'Business transformation and technology governance',
      fullDesc: `Effective information and technology governance is critical for modern business success—and Fortify Cloud Solutions excels as a driver of innovation and business transformation.

We help clients stay ahead of ever-evolving technology trends, supporting them in upgrading processes, applying the right tools, and maximizing human capital to capture new opportunities. **IT has been the backbone of growth for years**, and remains a key enabler of efficiency and performance.

Our services empower you to:
• Acquire, assimilate, and disseminate information seamlessly
• Continuously update and upgrade your technology stack
• Maintain best-practice information flow and workflow integration
• Leverage IT as a competitive differentiator, not merely as a tactical tool
`,
      features: [
        'IT governance and strategic consulting',
        'Continuous technology upgradation',
        'Process and workflow optimization',
        'Performance management',
        'Change management and training',
        'Proactive technology scouting'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0A234E] via-blue-900 to-blue-800 text-white py-24 overflow-hidden">
        <div className="absolute top-10 left-0 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Our <span className="text-blue-400">Services</span>
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed mb-8">
              Fortify Cloud Solutions helps to integrate business process best practices with specific client requirements.
              We provide cost-effective solutions that allow customers to automate their processes and
              gain greater visibility across their organizations.
            </p>
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full shadow-lg shadow-blue-500/30 transition-colors duration-300"
            >
              Explore Our Services
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.button
                key={index}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.98 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition text-left outline-none border-none flex flex-col items-center text-center"
                onClick={() => setActiveService(index)}
              >
                <div className="bg-blue-100 p-4 rounded-lg w-fit mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{service.shortDesc}</p>
              </motion.button>
            ))}
          </div>
          
          {/* --- START: Responsive Detail View (Inline for Desktop, Modal for Mobile) --- */}
          <AnimatePresence>
            {activeService !== null && (
              isMobile ? (
                // --- MOBILE MODAL VIEW ---
                <motion.div
                  key="modal"
                  className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setActiveService(null)} // Close on backdrop click
                >
                  <motion.div
                    className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto"
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    onClick={e => e.stopPropagation()} // Prevent closing when clicking panel
                  >
                    <div className="relative p-1 bg-gradient-to-br from-blue-400 via-indigo-500 to-blue-600 rounded-2xl shadow-2xl">
                      <div className="relative bg-white rounded-[14px] p-6 sm:p-8">
                        {/* Content is identical to desktop view, just wrapped in a modal */}
                        <button
                          onClick={() => setActiveService(null)}
                          className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors"
                          aria-label="Close service details"
                        >
                          <X className="h-6 w-6" />
                        </button>
                        <div className="flex items-center mb-6">
                          <div className="bg-blue-100 p-3 rounded-lg mr-4 flex-shrink-0">
                            {React.createElement(services[activeService].icon, { className: "h-8 w-8 text-blue-600" })}
                          </div>
                          <h2 className="text-2xl font-bold text-gray-900">
                            {services[activeService].title}
                          </h2>
                        </div>
                        <div className="space-y-6">
                          <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                            {services[activeService].fullDesc.split(/(\*\*.*?\*\*)/).map((part, i) =>
                              part.startsWith('**') && part.endsWith('**') ?
                              <strong key={i} className="font-semibold text-gray-800">{part.slice(2, -2)}</strong> :
                              part
                            )}
                          </p>
                          <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-4 border-t pt-4 border-gray-200">
                              Key Capabilities
                            </h3>
                            <ul className="space-y-3">
                              {services[activeService].features.map((feature, fIdx) => (
                                <li key={fIdx} className="flex items-start">
                                  <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                                  <span className="text-gray-700">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ) : (
                // --- DESKTOP INLINE VIEW (Original Code) ---
                <motion.div
                  key="inline-card"
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 50, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="relative max-w-5xl mx-auto mt-12"
                >
                  <div className="relative p-1 bg-gradient-to-br from-blue-400 via-indigo-500 to-blue-600 rounded-2xl shadow-2xl shadow-blue-500/20">
                    <div className="relative bg-white rounded-[14px] p-8 md:p-12">
                      <button onClick={() => setActiveService(null)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors" aria-label="Close service details">
                        <X className="h-6 w-6" />
                      </button>
                      <div className="grid grid-cols-1 lg:grid-cols-5 gap-x-12">
                        <div className="lg:col-span-3">
                          <div className="flex items-center mb-6">
                            <div className="bg-blue-100 p-3 rounded-lg mr-4">
                              {React.createElement(services[activeService].icon, { className: "h-8 w-8 text-blue-600" })}
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900">{services[activeService].title}</h2>
                          </div>
                          <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                            {services[activeService].fullDesc.split(/(\*\*.*?\*\*)/).map((part, i) =>
                              part.startsWith('**') && part.endsWith('**') ?
                              <strong key={i} className="font-semibold text-gray-800">{part.slice(2, -2)}</strong> :
                              part
                            )}
                          </p>
                        </div>
                        <div className="lg:col-span-2 mt-8 lg:mt-0 lg:border-l lg:pl-8 border-gray-200">
                          <h3 className="text-xl font-semibold text-gray-800 mb-5">Key Capabilities</h3>
                          <ul className="space-y-4">
                            {services[activeService].features.map((feature, fIdx) => (
                              <motion.li key={fIdx} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + fIdx * 0.1, duration: 0.4 }} className="flex items-start">
                                <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                                <span className="text-gray-700">{feature}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            )}
          </AnimatePresence>
          {/* --- END: Responsive Detail View --- */}
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
            <div className="text-center p-4">
              <div className="bg-blue-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Layers className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Integrated Solutions</h3>
              <p className="text-gray-600">Seamlessly connect all business processes for maximum efficiency</p>
            </div>
            <div className="text-center p-4">
              <div className="bg-blue-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Security</h3>
              <p className="text-gray-600">Robust security measures protecting your critical business data</p>
            </div>
            <div className="text-center p-4">
              <div className="bg-blue-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Rapid Implementation</h3>
              <p className="text-gray-600">Accelerated deployment with minimal disruption to operations</p>
            </div>
            <div className="text-center p-4">
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