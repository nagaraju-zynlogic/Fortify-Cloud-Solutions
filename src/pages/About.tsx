// // import React from 'react';
// // import { Target, Eye, Award, Users, Globe, Lightbulb } from 'lucide-react';

// // const About: React.FC = () => {
// //   const values = [
// //     {
// //       icon: Target,
// //       title: 'Client-Focused Excellence',
// //       description: 'Every decision we make is driven by creating measurable value for our clients, not just meeting baseline expectations.'
// //     },
// //     {
// //       icon: Eye,
// //       title: 'Process Integrity',
// //       description: 'We maintain unwavering integrity while focusing on every process step, ensuring quality outcomes through methodical execution.'
// //     },
// //     {
// //       icon: Award,
// //       title: 'Innovation Leadership',
// //       description: 'As a major component of business transformation, we continuously innovate to stay at the forefront of ERP solutions.'
// //     },
// //     {
// //       icon: Users,
// //       title: 'Partnership Approach',
// //       description: 'We build lasting relationships with our clients, serving as trusted advisors throughout their digital transformation journey.'
// //     },
// //     {
// //       icon: Globe,
// //       title: 'Global Expertise',
// //       description: 'Our global delivery model ensures 24/7 support and access to best practices from implementations worldwide.'
// //     },
// //     {
// //       icon: Lightbulb,
// //       title: 'Continuous Learning',
// //       description: 'We invest in ongoing education and certification to ensure our team remains at the cutting edge of ERP technology.'
// //     }
// //   ];

// //   return (
// //     <div className="min-h-screen">
// //       {/* Hero Section */}
// //       <section className="bg-gradient-to-br from-[#0A234E] to-blue-900 text-white py-20">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
// //             <div>
// //               <h1 className="text-5xl lg:text-6xl font-bold mb-8">About Fortify Cloud Solutions</h1>
// //               <p className="text-xl text-blue-100 leading-relaxed">
// //                 Innovate, Implement, Support — that's not just our tagline, it's our commitment to every client partnership.
// //               </p>
// //             </div>
// //             <div className="relative">
// //               <img 
// //                 src="https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg" 
// //                 alt="Professional team meeting"
// //                 className="rounded-2xl shadow-2xl"
// //               />
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Main Content */}
// //       <section className="py-20 bg-white">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
// //             <div className="space-y-8">
// //               <div>
// //                 <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
// //                 <p className="text-lg text-gray-600 leading-relaxed mb-6">
// //                   Our fundamental goal is to create added value for clients, not just to exist. While maintaining integrity, we focus on every process not just on results. Effective governance over information as well as technology is very important to business success, and this new release further strengthens Fortify Cloud Solutions' continuing role as a major forceful component of innovation and business transformation.
// //                 </p>
// //                 <p className="text-lg text-gray-600 leading-relaxed">
// //                   We believe that successful ERP implementations go beyond technology — they require deep understanding of business processes, careful change management, and ongoing partnership to ensure sustainable success.
// //                 </p>
// //               </div>
              
// //               <div className="bg-blue-50 p-8 rounded-xl">
// //                 <h3 className="text-2xl font-bold text-gray-900 mb-4">What Sets Us Apart</h3>
// //                 <ul className="space-y-3">
// //                   <li className="flex items-start">
// //                     <div className="bg-blue-600 w-2 h-2 rounded-full mt-3 mr-3 flex-shrink-0"></div>
// //                     <span className="text-gray-700">Deep domain expertise across Workday, SAP, and PeopleSoft platforms</span>
// //                   </li>
// //                   <li className="flex items-start">
// //                     <div className="bg-blue-600 w-2 h-2 rounded-full mt-3 mr-3 flex-shrink-0"></div>
// //                     <span className="text-gray-700">Proven methodology that reduces implementation risk and accelerates time-to-value</span>
// //                   </li>
// //                   <li className="flex items-start">
// //                     <div className="bg-blue-600 w-2 h-2 rounded-full mt-3 mr-3 flex-shrink-0"></div>
// //                     <span className="text-gray-700">Global delivery model providing 24/7 support and cost-effective solutions</span>
// //                   </li>
// //                   <li className="flex items-start">
// //                     <div className="bg-blue-600 w-2 h-2 rounded-full mt-3 mr-3 flex-shrink-0"></div>
// //                     <span className="text-gray-700">Commitment to long-term partnership beyond initial implementation</span>
// //                   </li>
// //                 </ul>
// //               </div>
// //             </div>

// //             <div className="space-y-8">
// //               <img 
// //                 src="https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg" 
// //                 alt="Team collaboration"
// //                 className="w-full h-64 object-cover rounded-xl shadow-lg"
// //               />
              
// //               <div className="bg-gray-50 p-8 rounded-xl">
// //                 <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Expertise</h3>
// //                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// //                   <div className="bg-white p-4 rounded-lg shadow-sm">
// //                     <h4 className="font-semibold text-gray-900 mb-2">Workday</h4>
// //                     <p className="text-sm text-gray-600">HCM, Payroll, Finance, Planning</p>
// //                   </div>
// //                   <div className="bg-white p-4 rounded-lg shadow-sm">
// //                     <h4 className="font-semibold text-gray-900 mb-2">SAP</h4>
// //                     <p className="text-sm text-gray-600">S/4HANA, SuccessFactors, Ariba</p>
// //                   </div>
// //                   <div className="bg-white p-4 rounded-lg shadow-sm">
// //                     <h4 className="font-semibold text-gray-900 mb-2">PeopleSoft</h4>
// //                     <p className="text-sm text-gray-600">HCM, Financials, Campus Solutions</p>
// //                   </div>
// //                   <div className="bg-white p-4 rounded-lg shadow-sm">
// //                     <h4 className="font-semibold text-gray-900 mb-2">Integration</h4>
// //                     <p className="text-sm text-gray-600">APIs, ETL, Custom Development</p>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Values Section */}
// //       <section className="py-20 bg-gray-50">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="text-center mb-16">
// //             <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
// //             <p className="text-xl text-gray-600">The principles that guide every client interaction and project delivery</p>
// //           </div>

// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //             {values.map((value, index) => (
// //               <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
// //                 <div className="bg-blue-100 p-4 rounded-lg w-fit mb-6">
// //                   <value.icon className="h-8 w-8 text-blue-600" />
// //                 </div>
// //                 <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
// //                 <p className="text-gray-600 leading-relaxed">{value.description}</p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Statistics Section */}
// //       <section className="py-20 bg-[#0A234E] text-white">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
// //             <div>
// //               <div className="text-5xl font-bold text-blue-300 mb-2">500+</div>
// //               <div className="text-blue-200">Successful Implementations</div>
// //             </div>
// //             <div>
// //               <div className="text-5xl font-bold text-blue-300 mb-2">15+</div>
// //               <div className="text-blue-200">Years of Experience</div>
// //             </div>
// //             <div>
// //               <div className="text-5xl font-bold text-blue-300 mb-2">50+</div>
// //               <div className="text-blue-200">Certified Consultants</div>
// //             </div>
// //             <div>
// //               <div className="text-5xl font-bold text-blue-300 mb-2">98%</div>
// //               <div className="text-blue-200">Client Satisfaction Rate</div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // };

// // export default About;









// import React from 'react';
// import { Target, Eye, Award, Users, Globe, Lightbulb, CheckCircle } from 'lucide-react';
// import { motion } from "framer-motion";

// const AboutPage: React.FC = () => {
//   // Data for the "Our Values" section (kept from original design for richness)
//   const values = [
//     {
//       icon: Target,
//       title: 'Client-Focused Excellence',
//       description: 'Every decision we make is driven by creating measurable value for our clients, not just meeting baseline expectations.'
//     },
//     {
//       icon: Eye,
//       title: 'Process Integrity',
//       description: 'We maintain unwavering integrity while focusing on every process step, ensuring quality outcomes through methodical execution.'
//     },
//     {
//       icon: Award,
//       title: 'Innovation Leadership',
//       description: 'As a major component of business transformation, we continuously innovate to stay at the forefront of ERP solutions.'
//     },
//     {
//       icon: Users,
//       title: 'Partnership Approach',
//       description: 'We build lasting relationships with our clients, serving as trusted advisors throughout their digital transformation journey.'
//     },
//     {
//       icon: Globe,
//       title: 'Global Expertise',
//       description: 'Our global delivery model ensures 24/7 support and access to best practices from implementations worldwide.'
//     },
//     {
//       icon: Lightbulb,
//       title: 'Continuous Learning',
//       description: 'We invest in ongoing education and certification to ensure our team remains at the cutting edge of ERP technology.'
//     }
//   ];

//   // YOUR NEW CONTENT INTEGRATED INTO DATA ARRAYS
//   const expertiseItems = [
//     'Comprehensive Workday, SAP and PeopleSoft Services (HCM, Finance, Payroll, Benefits)',
//     'Custom Integrations and Reporting',
//     'System Configuration and Business Process Optimization',
//     'Change Management and User Training',
//     'Post-Deployment Support and Continuous Improvement'
//   ];

//   const whyChooseUsItems = [
//     'Focused team with deep domain expertise in Workday, SAP and PeopleSoft',
//     'Accelerated, client-specific deployments',
//     '24/7 support with global delivery model',
//     'Flexible support packages tailored to your needs',
//     'Proven track record of successful Workday transformations',
//     'Commitment to partnership and continuous innovation'
//   ];

//   const engagementPhases = [
//     {
//       phase: 'Phase 1: Discovery & Planning',
//       details: ['Understand business needs and objectives', 'Define project scope and timeline']
//     },
//     {
//       phase: 'Phase 2: Configuration & Testing',
//       details: ['Configure to fit your processes', 'Rigorous testing to ensure quality and compliance']
//     },
//     {
//       phase: 'Phase 3: Deployment & Knowledge Transfer',
//       details: ['Seamless go-live support', 'Comprehensive training for your team']
//     },
//     {
//       phase: 'Phase 4: Ongoing Support & Optimization',
//       details: ['Continuous monitoring and system enhancements', 'Proactive issue resolution and updates']
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero Section */}
//       {/* <section className="bg-gradient-to-br from-[#0A234E] to-blue-900 text-white py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <h1 className="text-5xl lg:text-6xl font-bold mb-6">Who We Are</h1>
//               <p className="text-xl text-blue-100 leading-relaxed">
//                 Fortify Cloud Solutions is a dedicated Workday, SAP, and PeopleSoft Applications support and maintenance solutions company. Our team combines deep functional and technical expertise with a client-focused approach to ensure seamless transitions and ongoing success.
//               </p>
//             </div>
//             <div className="relative">
//               <img 
//                 src="https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg" 
//                 alt="Professional team collaborating"
//                 className="rounded-2xl shadow-2xl"
//               />
//             </div>
//           </div>
//         </div>
//       </section> */}


      
//           <section className="relative bg-gradient-to-br from-[#0A234E] via-blue-900 to-blue-800 text-white py-20 overflow-hidden">
//       {/* Decorative blurred gradient shapes */}
//       <div className="absolute -top-10 -left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

//       <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
//           {/* Text Section */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
//               Who <span className="text-blue-400">We Are</span>
//             </h1>
//             <p className="text-lg text-blue-100 leading-relaxed mb-4">
//               Fortify Cloud Solutions is a dedicated <b>Workday, SAP</b> and <b>PeopleSoft Applications</b> support and maintenance solutions company.
//             </p>
//             <p className="text-lg text-blue-100 leading-relaxed mb-4">
//               We specialize in delivering tailored <b>Workday, SAP</b> and <b>PeopleSoft Applications</b> solutions that drive business efficiency and transform <b>HRMS</b> and <b>Finance operations</b>.
//             </p>
//             <p className="text-lg text-blue-100 leading-relaxed">
//               Our team combines deep functional and technical expertise with a client-focused approach to ensure seamless transitions and ongoing success.
//             </p>
//           </motion.div>

//           {/* Image Section */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="relative group"
//           >
//             <img
//               src="https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg"
//               alt="Professional team collaborating"
//               className="rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105 group-hover:shadow-blue-500/50"
//             />
//             {/* Subtle overlay on hover */}
//             <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//           </motion.div>

//         </div>
//       </div>
//     </section>
      



//       {/* Main Content: Why Choose Us & Our Expertise */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
//             <div className="space-y-8">
//               <h2 className="text-4xl font-bold text-gray-900">Why Choose Fortify Cloud Solutions</h2>
//               <ul className="space-y-4">
//                 {whyChooseUsItems.map((item, index) => (
//                   <li key={index} className="flex items-start">
//                     <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
//                     <span className="text-lg text-gray-700">{item}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <div className="space-y-8">
//               <h2 className="text-4xl font-bold text-gray-900">Our Expertise</h2>
//               <div className="bg-white p-8 rounded-xl shadow-lg">
//                 <ul className="space-y-4">
//                   {expertiseItems.map((item, index) => (
//                     <li key={index} className="flex items-start">
//                       <div className="bg-blue-600 w-2 h-2 rounded-full mt-2.5 mr-4 flex-shrink-0"></div>
//                       <span className="text-lg text-gray-700">{item}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* NEW SECTION: Our Engagement Model */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Proven Engagement Model</h2>
//             <p className="text-xl text-gray-600">A structured path to guaranteed success and transformation.</p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {engagementPhases.map((item, index) => (
//               <div key={index} className="bg-gray-50 p-8 rounded-xl border border-gray-200 text-left">
//                 <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.phase}</h3>
//                 <ul className="space-y-2">
//                   {item.details.map((detail, i) => (
//                     <li key={i} className="text-gray-600 leading-relaxed">- {detail}</li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Statistics Section (Kept from original for added value) */}
//       <section className="py-20 bg-[#0A234E] text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
//             <div>
//               <div className="text-5xl font-bold text-blue-300 mb-2">500+</div>
//               <div className="text-blue-200">Successful Implementations</div>
//             </div>
//             <div>
//               <div className="text-5xl font-bold text-blue-300 mb-2">15+</div>
//               <div className="text-blue-200">Years of Collective Experience</div>
//             </div>
//             <div>
//               <div className="text-5xl font-bold text-blue-300 mb-2">50+</div>
//               <div className="text-blue-200">Certified Consultants</div>
//             </div>
//             <div>
//               <div className="text-5xl font-bold text-blue-300 mb-2">98%</div>
//               <div className="text-blue-200">Client Satisfaction Rate</div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Values Section (Kept from original for added value) */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
//             <p className="text-xl text-gray-600">The principles that guide every client interaction and project delivery.</p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {values.map((value, index) => (
//               <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
//                 <div className="bg-blue-100 p-4 rounded-lg w-fit mb-6">
//                   <value.icon className="h-8 w-8 text-blue-600" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
//                 <p className="text-gray-600 leading-relaxed">{value.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AboutPage;













import React, { useState } from 'react';
import { 
    Target, Eye, Award, Users, Globe, Lightbulb, 
    CheckCircle, ShieldCheck, Zap, GitCommit, ChevronDown 
} from 'lucide-react';
import { motion } from "framer-motion";

// --- Component 1: Why Choose Us (Card-based UI) ---
const WhyChooseUs = ({ items }) => {
  return (
    <section className="py-20 bg-slate-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600">
            Why Choose Fortify Cloud Solutions?
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            The core advantages that drive success for our partners.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
            >
              <div className="bg-blue-100 text-blue-600 rounded-full h-16 w-16 flex items-center justify-center mb-6">
                <item.icon size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Component 2: Our Expertise (Accordion UI) ---
const ExpertiseAccordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(0); // Default first item to be open

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white w-full">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600">
            Our Expertise
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Specialized solutions to transform your core business operations.
          </p>
        </div>
        <div className="space-y-4">
          {items.map((item, index) => (
            <div key={index} className="border border-slate-200 rounded-xl overflow-hidden shadow-sm">
              <button
                onClick={() => handleToggle(index)}
                className="w-full flex justify-between items-center p-6 text-left bg-white hover:bg-slate-50 transition-colors"
              >
                <span className="text-xl font-medium text-slate-800">{item.title}</span>
                <ChevronDown
                  className={`transform transition-transform duration-300 text-blue-600 ${openIndex === index ? 'rotate-180' : ''}`}
                  size={24}
                />
              </button>
              <div
                className={`grid transition-all duration-500 ease-in-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


// --- Main Page Component ---
const AboutPage: React.FC = () => {
  // Data for the "Our Values" section
  const values = [
    { icon: Target, title: 'Client-Focused Excellence', description: 'Every decision we make is driven by creating measurable value for our clients, not just meeting baseline expectations.' },
    { icon: Eye, title: 'Process Integrity', description: 'We maintain unwavering integrity while focusing on every process step, ensuring quality outcomes through methodical execution.' },
    { icon: Award, title: 'Innovation Leadership', description: 'As a major component of business transformation, we continuously innovate to stay at the forefront of ERP solutions.' },
    { icon: Users, title: 'Partnership Approach', description: 'We build lasting relationships with our clients, serving as trusted advisors throughout their digital transformation journey.' },
    { icon: Globe, title: 'Global Expertise', description: 'Our global delivery model ensures 24/7 support and access to best practices from implementations worldwide.' },
    { icon: Lightbulb, title: 'Continuous Learning', description: 'We invest in ongoing education and certification to ensure our team remains at the cutting edge of ERP technology.' }
  ];

  // Data for the "Why Choose Us" section with icons
  const whyChooseUsItems = [
    { icon: ShieldCheck, title: 'Deep Domain Expertise', description: 'Our focused team possesses unparalleled knowledge in Workday, SAP, and PeopleSoft environments.' },
    { icon: Zap, title: 'Accelerated Deployments', description: 'We utilize client-specific strategies to ensure rapid, efficient, and successful project rollouts.' },
    { icon: Globe, title: '24/7 Global Support', description: 'Our global delivery model provides continuous, around-the-clock support for your critical systems.' },
    { icon: Users, title: 'Flexible Support Packages', description: 'We offer tailored support plans designed to meet your unique business needs and budget.' },
    { icon: Award, title: 'Proven Track Record', description: 'Our history is marked by a series of successful transformations and satisfied clients.' },
    { icon: GitCommit, title: 'Commitment to Innovation', description: 'We are dedicated to a long-term partnership, focusing on continuous improvement and innovation.' }
  ];

  // Data for the "Our Expertise" accordion
  const expertiseItems = [
    { title: 'Comprehensive Platform Services', description: 'We provide end-to-end support for HCM, Finance, Payroll, and Benefits across Workday, SAP, and PeopleSoft, ensuring your core systems run flawlessly.' },
    { title: 'Custom Integrations & Reporting', description: 'Unlock the full potential of your data with bespoke integrations and powerful, insightful reporting solutions tailored to your business needs.' },
    { title: 'System Configuration & Optimization', description: 'We fine-tune your system configuration and optimize business processes to enhance efficiency, reduce manual work, and improve user experience.' },
    { title: 'Change Management & User Training', description: 'We ensure smooth transitions and high user adoption rates through comprehensive change management strategies and effective, hands-on training programs.' },
    { title: 'Post-Deployment & Continuous Improvement', description: 'Our partnership extends beyond go-live with ongoing support, proactive maintenance, and continuous improvement to keep your systems at peak performance.' }
  ];
  
  // Data for the "Engagement Model" section
  const engagementPhases = [
    { phase: 'Discovery & Planning', details: ['Understand business needs and objectives', 'Define project scope and timeline'], phaseNo: 'Phase 1' },
    { phase: 'Configuration & Testing', details: ['Configure to fit your processes', 'Rigorous testing to ensure quality and compliance'], phaseNo: 'Phase 2' },
    { phase: 'Deployment & Knowledge Transfer', details: ['Seamless go-live support', 'Comprehensive training for your team'], phaseNo: 'Phase 3' },
    { phase: 'Ongoing Support & Optimization', details: ['Continuous monitoring and system enhancements', 'Proactive issue resolution and updates'], phaseNo: 'Phase 4' }
  ];

  



  return (
    <div className="min-h-screen bg-white">
      {/* Animated Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0A234E] via-blue-900 to-blue-800 text-white py-20 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">Who <span className="text-blue-400">We Are</span></h1>
              <p className="text-lg text-blue-100 leading-relaxed mb-4">Fortify Cloud Solutions is a dedicated <b>Workday, SAP</b> and <b>PeopleSoft Applications</b> support and maintenance solutions company.</p>
              <p className="text-lg text-blue-100 leading-relaxed mb-4">We specialize in delivering tailored solutions that drive business efficiency and transform <b>HRMS</b> and <b>Finance operations</b>.</p>
              <p className="text-lg text-blue-100 leading-relaxed">Our team combines deep functional and technical expertise with a client-focused approach to ensure seamless transitions and ongoing success.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="relative group">
              <img src="https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg" alt="Professional team collaborating" className="rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105 group-hover:shadow-blue-500/50" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <WhyChooseUs items={whyChooseUsItems} />
      <ExpertiseAccordion items={expertiseItems} />

      {/* Engagement Model Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-600 mb-4">Our Proven Engagement Model</h2>
            <p className="text-xl text-gray-600">A structured path to guaranteed success and transformation.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {engagementPhases.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-xl border border-gray-200 text-left shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-blue-600 mb-2 text-center uppercase">{item.phaseNo}</h3>
                <h4 className="text-lg font-semibold text-gray-800 mb-4 text-center">{item.phase}</h4>
                <ul className="space-y-2">
                  {item.details.map((detail, i) => (
                    <li key={i} className="text-gray-600 leading-relaxed flex items-start"><CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-1 flex-shrink-0" /><span>{detail}</span></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      {/* <section className="py-20 bg-[#0A234E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div><div className="text-5xl font-bold text-blue-300 mb-2">500+</div><div className="text-blue-200">Successful Implementations</div></div>
            <div><div className="text-5xl font-bold text-blue-300 mb-2">15+</div><div className="text-blue-200">Years of Collective Experience</div></div>
            <div><div className="text-5xl font-bold text-blue-300 mb-2">50+</div><div className="text-blue-200">Certified Consultants</div></div>
            <div><div className="text-5xl font-bold text-blue-300 mb-2">98%</div><div className="text-blue-200">Client Satisfaction Rate</div></div>
          </div>
        </div>
      </section> */}

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-600 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide every client interaction and project delivery.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-blue-100 p-4 rounded-lg w-fit mb-6"><value.icon className="h-8 w-8 text-blue-600" /></div>
                <h3 className="text-xl font-semibold text-blue-400 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
