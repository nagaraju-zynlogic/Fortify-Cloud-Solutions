// // // import React from 'react';
// // // import { ArrowRight } from 'lucide-react';

// // // interface HeroProps {
// // //   onCtaClick: () => void;
// // // }

// // // const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
// // //   return (
// // //     <section className="relative bg-gradient-to-br from-[#0A234E] to-blue-900 text-white overflow-hidden">
// // //       {/* Background Pattern */}
// // //       <div className="absolute inset-0 opacity-10">
// // //         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-y-12"></div>
// // //       </div>
      
// // //       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
// // //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
// // //           {/* Left Content */}
// // //           <div className="space-y-8">
// // //             <div className="space-y-4">
// // //               <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
// // //                 Fortify Cloud Solutions delivers 
// // //                 <span className="text-blue-300"> ERP applications</span> that simplify operations
// // //               </h1>
// // //               <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
// // //                 We turn business complexity into clarity — and clarity into results.
// // //               </p>
// // //             </div>

// // //             <div className="flex flex-col sm:flex-row gap-4">
// // //               <button
// // //                 onClick={onCtaClick}
// // //                 className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center"
// // //               >
// // //                 Begin Your Transformation
// // //                 <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
// // //               </button>
              
// // //               <button className="border-2 border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-[#0A234E] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
// // //                 Learn More
// // //               </button>
// // //             </div>

// // //             {/* Stats */}
// // //             <div className="grid grid-cols-3 gap-8 pt-8">
// // //               <div className="text-center">
// // //                 <div className="text-3xl font-bold text-blue-300">500+</div>
// // //                 <div className="text-sm text-blue-200">Successful Projects</div>
// // //               </div>
// // //               <div className="text-center">
// // //                 <div className="text-3xl font-bold text-blue-300">24/7</div>
// // //                 <div className="text-sm text-blue-200">Global Support</div>
// // //               </div>
// // //               <div className="text-center">
// // //                 <div className="text-3xl font-bold text-blue-300">15+</div>
// // //                 <div className="text-sm text-blue-200">Years Experience</div>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           {/* Right Content - Image */}
// // //           <div className="relative">
// // //             <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
// // //               <img 
// // //                 src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg" 
// // //                 alt="Professional team collaborating"
// // //                 className="w-full h-96 lg:h-[500px] object-cover"
// // //               />
// // //             </div>
            
// // //             {/* Decorative elements */}
// // //             <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-400 rounded-full opacity-20 blur-3xl"></div>
// // //             <div className="absolute -bottom-4 -left-4 w-64 h-64 bg-blue-300 rounded-full opacity-20 blur-3xl"></div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default Hero;



// // import React from 'react';
// // import { ArrowRight, Building, Users, Clock } from 'lucide-react';

// // // Main App Component to render the Hero section
// // const App = () => {
// //   const handleCtaClick = () => {
// //     console.log("Begin Your Transformation button clicked!");
// //     // In a real app, this would likely scroll to a contact form or open a modal.
// //   };

// //   return (
// //     <div className="bg-gray-100">
// //       <Hero onCtaClick={handleCtaClick} />
// //       {/* You can add other components of your website here */}
// //     </div>
// //   );
// // };


// // // // The updated Hero Component
// // // interface HeroProps {
// // //   onCtaClick: () => void;
// // // }

// // // const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
// // //   return (
// // //     <section className="relative bg-gradient-to-br from-[#0A234E] to-blue-900 text-white overflow-hidden">
// // //       {/* Background decorative pattern */}
// // //       <div className="absolute inset-0 opacity-5">
// // //         <div 
// // //             className="absolute bottom-0 left-0 -translate-x-1/4 translate-y-1/4 w-96 h-96 rounded-full bg-blue-400/50 blur-3xl"
// // //             aria-hidden="true"
// // //         ></div>
// // //         <div 
// // //             className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 w-96 h-96 rounded-full bg-blue-300/50 blur-3xl"
// // //             aria-hidden="true"
// // //         ></div>
// // //       </div>
      
// // //       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
// // //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
// // //           {/* Left Content Column */}
// // //           <div className="space-y-8 text-center lg:text-left">
// // //             <div className="space-y-4">
// // //               <h1 className="text-4xl lg:text-6xl font-bold leading-tight tracking-tight">
// // //                 Fortify Cloud Solutions delivers 
// // //                 <span className="text-blue-300 block"> ERP applications</span> that simplify operations
// // //               </h1>
// // //               <p className="text-xl lg:text-2xl text-blue-100/90 leading-relaxed max-w-xl mx-auto lg:mx-0">
// // //                 We turn business complexity into clarity — and clarity into results.
// // //               </p>
// // //             </div>

// // //             {/* CTA Buttons */}
// // //             <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
// // //               <button
// // //                 onClick={onCtaClick}
// // //                 className="group bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center"
// // //               >
// // //                 Begin Your Transformation
// // //                 <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
// // //               </button>
              
// // //               <button className="border-2 border-blue-400 text-blue-200 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
// // //                 Learn More
// // //               </button>
// // //             </div>

// // //             {/* Key Stats */}
// // //             <div className="grid grid-cols-3 gap-4 pt-8">
// // //               <div className="text-center p-2 rounded-lg hover:bg-white/10 transition-colors">
// // //                 <div className="text-3xl font-bold text-blue-300">500+</div>
// // //                 <div className="text-sm text-blue-200 mt-1">Successful Projects</div>
// // //               </div>
// // //               <div className="text-center p-2 rounded-lg hover:bg-white/10 transition-colors">
// // //                 <div className="text-3xl font-bold text-blue-300">24/7</div>
// // //                 <div className="text-sm text-blue-200 mt-1">Global Support</div>
// // //               </div>
// // //               <div className="text-center p-2 rounded-lg hover:bg-white/10 transition-colors">
// // //                 <div className="text-3xl font-bold text-blue-300">15+</div>
// // //                 <div className="text-sm text-blue-200 mt-1">Years Experience</div>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           {/* Right Content - Image Composition */}
// // //           <div className="relative flex items-center justify-center mt-12 lg:mt-0">
// // //               <div className="relative w-full max-w-md lg:max-w-lg mx-auto">
// // //                   {/* Main Image */}
// // //                   <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500 ease-in-out">
// // //                       <img 
// // //                           src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
// // //                           alt="Professional team collaborating in a modern office"
// // //                           className="w-full h-auto object-cover"
// // //                           onError={(e) => { 
// // //                               const target = e.target as HTMLImageElement;
// // //                               target.onerror = null; 
// // //                               target.src='https://placehold.co/600x400/0A234E/FFFFFF?text=Team+Meeting'; 
// // //                           }}
// // //                       />
// // //                   </div>

// // //                   {/* Top-left decorative image */}
// // //                   <img 
// // //                       src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
// // //                       alt="Decorative element showing innovation"
// // //                       className="absolute -top-8 -left-8 w-32 h-32 md:w-40 md:h-40 rounded-2xl shadow-lg object-cover z-0 transform -rotate-12 transition-transform duration-500 hover:rotate-0 hover:scale-110"
// // //                       onError={(e) => { 
// // //                           const target = e.target as HTMLImageElement;
// // //                           target.onerror = null; 
// // //                           target.src='https://placehold.co/200x200/FFFFFF/0A234E?text=Image'; 
// // //                       }}
// // //                   />

// // //                   {/* Bottom-right decorative image */}
// // //                   <img 
// // //                       src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
// // //                       alt="Decorative element showing support"
// // //                       className="absolute -bottom-8 -right-8 w-32 h-32 md:w-40 md:h-40 rounded-2xl shadow-lg object-cover z-20 transform rotate-12 transition-transform duration-500 hover:rotate-0 hover:scale-110"
// // //                       onError={(e) => { 
// // //                           const target = e.target as HTMLImageElement;
// // //                           target.onerror = null; 
// // //                           target.src='https://placehold.co/200x200/FFFFFF/0A234E?text=Image'; 
// // //                       }}
// // //                   />
// // //               </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default App;




// // import React from 'react';
// // import { ArrowRight } from 'lucide-react';

// // // Main App Component to render the Hero section
// // const App = () => {
// //   const handleCtaClick = () => {
// //     console.log("Begin Your Transformation button clicked!");
// //     // In a real app, this would likely scroll to a contact form or open a modal.
// //   };

// //   return (
// //     <div className="bg-gray-100 font-sans">
// //       <Hero onCtaClick={handleCtaClick} />
// //       {/* You can add other components of your website here */}
// //     </div>
// //   );
// // };


// // // The updated Hero Component
// // interface HeroProps {
// //   onCtaClick: () => void;
// // }

// // const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
// //   return (
// //     <section className="relative bg-gradient-to-br from-[#0A234E] to-blue-900 text-white overflow-hidden">
// //       {/* Background decorative pattern */}
// //       <div className="absolute inset-0 opacity-5">
// //         <div 
// //             className="absolute bottom-0 left-0 -translate-x-1/4 translate-y-1/4 w-96 h-96 rounded-full bg-blue-400/50 blur-3xl"
// //             aria-hidden="true"
// //         ></div>
// //         <div 
// //             className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 w-96 h-96 rounded-full bg-blue-300/50 blur-3xl"
// //             aria-hidden="true"
// //         ></div>
// //       </div>
      
// //       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
// //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
// //           {/* Left Content Column */}
// //           <div className="space-y-8 text-center lg:text-left">
// //             <div className="space-y-4">
// //               <h1 className="text-4xl lg:text-6xl font-bold leading-tight tracking-tight">
// //                 Fortify Cloud Solutions delivers 
// //                 <span className="text-blue-300 block"> ERP applications</span> that simplify operations
// //               </h1>
// //               <p className="text-xl lg:text-2xl text-blue-100/90 leading-relaxed max-w-xl mx-auto lg:mx-0">
// //                 We turn business complexity into clarity — and clarity into results.
// //               </p>
// //             </div>

// //             {/* CTA Buttons */}
// //             <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
// //               <button
// //                 onClick={onCtaClick}
// //                 className="group bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center"
// //               >
// //                 Begin Your Transformation
// //                 <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
// //               </button>
              
// //               <button className="border-2 border-blue-400 text-blue-200 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
// //                 Learn More
// //               </button>
// //             </div>

// //             {/* Key Stats */}
// //             <div className="grid grid-cols-3 gap-4 pt-8">
// //               <div className="text-center p-2 rounded-lg hover:bg-white/10 transition-colors">
// //                 <div className="text-3xl font-bold text-blue-300">500+</div>
// //                 <div className="text-sm text-blue-200 mt-1">Successful Projects</div>
// //               </div>
// //               <div className="text-center p-2 rounded-lg hover:bg-white/10 transition-colors">
// //                 <div className="text-3xl font-bold text-blue-300">24/7</div>
// //                 <div className="text-sm text-blue-200 mt-1">Global Support</div>
// //               </div>
// //               <div className="text-center p-2 rounded-lg hover:bg-white/10 transition-colors">
// //                 <div className="text-3xl font-bold text-blue-300">15+</div>
// //                 <div className="text-sm text-blue-200 mt-1">Years Experience</div>
// //               </div>
// //             </div>
// //           </div>

// //           Right Content - Image Composition
// //           <div className="relative flex items-center justify-center mt-12 lg:mt-0 h-96 lg:h-[500px]">
// //               <div className="relative w-full h-full max-w-lg lg:max-w-md mx-auto">
// //                   {/* Main Image - decreased size and centered */}
// //                   <div className="absolute inset-0 z-10 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500 ease-in-out">
// //                       <img 
// //                           src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
// //                           alt="Professional team collaborating in a modern office"
// //                           className="w-full h-full object-cover"
// //                           onError={(e) => { 
// //                               const target = e.target as HTMLImageElement;
// //                               target.onerror = null; 
// //                               target.src='https://placehold.co/600x400/0A234E/FFFFFF?text=Team+Meeting'; 
// //                           }}
// //                       />
// //                   </div>

// //                   {/* Top-left decorative image - Overlaid */}
// //                   <div 
// //                       className="absolute top-0 left-0 w-32 h-48 md:w-40 md:h-60 rounded-2xl shadow-lg overflow-hidden z-20 transform -translate-x-1/3 -translate-y-1/3 -rotate-12 transition-transform duration-500 hover:rotate-0 hover:scale-110"
// //                   >
// //                       <img 
// //                           src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600"
// //                           alt="Decorative element showing innovation"
// //                           className="w-full h-full object-cover"
// //                           onError={(e) => { 
// //                               const target = e.target as HTMLImageElement;
// //                               target.onerror = null; 
// //                               target.src='https://placehold.co/300x200/FFFFFF/0A234E?text=Innovate'; 
// //                           }}
// //                       />

// //                   </div>

// //                   {/* Bottom-right decorative image - Overlaid */}
// //                   <div 
// //                       className="absolute bottom-0 right-0 w-40 h-60 md:w-48 md:h-72 rounded-2xl shadow-lg overflow-hidden z-20 transform translate-x-1/3 translate-y-1/3 rotate-12 transition-transform duration-500 hover:rotate-0 hover:scale-110"
// //                   >
// //                       <img 
// //                           src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600"
// //                           alt="Decorative element showing support"
// //                           className="w-full h-full object-cover"
// //                           onError={(e) => { 
// //                               const target = e.target as HTMLImageElement;
// //                               target.onerror = null; 
// //                               target.src='https://placehold.co/300x200/FFFFFF/0A234E?text=Support'; 
// //                           }}
// //                       />
// //                   </div>


// //               </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default App;





// import React from 'react';
// import { ArrowRight } from 'lucide-react';

// // Main App Component to render the Hero section
// const App = () => {
//   const handleCtaClick = () => {
//     console.log("Begin Your Transformation button clicked!");
//     // In a real app, this would likely scroll to a contact form or open a modal.
//   };

//   return (
//     <div className="bg-gray-100 font-sans">
//       <Hero onCtaClick={handleCtaClick} />
//     </div>
//   );
// };

// // The updated Hero Component
// interface HeroProps {
//   onCtaClick: () => void;
// }

// const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
//   return (
//     <section className="relative bg-gradient-to-br from-[#0A234E] to-blue-900 text-white overflow-hidden">
//       {/* Background decorative pattern */}
//       <div className="absolute inset-0 opacity-5">
//         <div
//           className="absolute bottom-0 left-0 -translate-x-1/4 translate-y-1/4 w-96 h-96 rounded-full bg-blue-400/50 blur-3xl"
//           aria-hidden="true"
//         ></div>
//         <div
//           className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 w-96 h-96 rounded-full bg-blue-300/50 blur-3xl"
//           aria-hidden="true"
//         ></div>
//       </div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//           {/* Left Content Column */}
//           <div className="space-y-8 text-center lg:text-left">
//             <div className="space-y-4">
//               <h1 className="text-4xl lg:text-6xl font-bold leading-tight tracking-tight">
//                 Fortify Cloud Solutions delivers
//                 <span className="text-blue-300 block"> ERP applications</span> that simplify operations
//               </h1>
//               <p className="text-xl lg:text-2xl text-blue-100/90 leading-relaxed max-w-xl mx-auto lg:mx-0">
//                 We turn business complexity into clarity — and clarity into results.
//               </p>
//             </div>

//             {/* CTA Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//               <button
//                 onClick={onCtaClick}
//                 className="group bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center"
//               >
//                 Begin Your Transformation
//                 <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
//               </button>

//               <button className="border-2 border-blue-400 text-blue-200 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
//                 Learn More
//               </button>
//             </div>

//             {/* Key Stats */}
//             <div className="grid grid-cols-3 gap-4 pt-8">
//               <div className="text-center p-2 rounded-lg hover:bg-white/10 transition-colors">
//                 <div className="text-3xl font-bold text-blue-300">500+</div>
//                 <div className="text-sm text-blue-200 mt-1">Successful Projects</div>
//               </div>
//               <div className="text-center p-2 rounded-lg hover:bg-white/10 transition-colors">
//                 <div className="text-3xl font-bold text-blue-300">24/7</div>
//                 <div className="text-sm text-blue-200 mt-1">Global Support</div>
//               </div>
//               <div className="text-center p-2 rounded-lg hover:bg-white/10 transition-colors">
//                 <div className="text-3xl font-bold text-blue-300">15+</div>
//                 <div className="text-sm text-blue-200 mt-1">Years Experience</div>
//               </div>
//             </div>
//           </div>

//           {/* Right Content - Image Composition */}
//           <div className="relative flex items-center justify-center mt-12 lg:mt-0 h-96 lg:h-[500px]">
//             <div className="relative w-full h-full max-w-lg lg:max-w-md mx-auto">
//               {/* Main Image */}
//               <div className="absolute inset-0 z-10 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500 ease-in-out">
//                 <img
//                   src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//                   alt="Professional team collaborating in a modern office"
//                   className="w-full h-full object-cover"
//                   onError={(e) => {
//                     const target = e.target as HTMLImageElement;
//                     target.onerror = null;
//                     target.src = 'https://placehold.co/600x400/0A234E/FFFFFF?text=Team+Meeting';
//                   }}
//                 />
//               </div>

//               {/* Top-left Decorative Image */}
//               <div
//                 className="absolute top-0 left-0 max-w-[140px] md:max-w-[180px] aspect-[2/3] rounded-2xl shadow-lg overflow-hidden z-20 transform -translate-x-1/3 -translate-y-1/3 -rotate-12 transition-transform duration-500 hover:rotate-0 hover:scale-110"
//               >
//                 <img
//                   src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600"
//                   alt="Decorative element showing innovation"
//                   className="w-full h-full object-cover"
//                   onError={(e) => {
//                     const target = e.target as HTMLImageElement;
//                     target.onerror = null;
//                     target.src = 'https://placehold.co/300x200/FFFFFF/0A234E?text=Innovate';
//                   }}
//                 />
//               </div>

//               {/* Bottom-right Decorative Image */}
//               <div
//                 className="absolute bottom-0 right-0 max-w-[160px] md:max-w-[200px] aspect-[2/3] rounded-2xl shadow-lg overflow-hidden z-20 transform translate-x-1/3 translate-y-1/3 rotate-12 transition-transform duration-500 hover:rotate-0 hover:scale-110"
//               >
//                 <img
//                   src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600"
//                   alt="Decorative element showing support"
//                   className="w-full h-full object-cover"
//                   onError={(e) => {
//                     const target = e.target as HTMLImageElement;
//                     target.onerror = null;
//                     target.src = 'https://placehold.co/300x200/FFFFFF/0A234E?text=Support';
//                   }}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default App;




import React from 'react';
import { ArrowRight } from 'lucide-react';
import GlobeComponent from './GlobeComponent';

// Main App Component to render the Hero section
const App = () => {
  const handleCtaClick = () => {
    console.log("Begin Your Transformation button clicked!");
  };

  return (
    <div className="bg-gray-100 font-sans">
      <Hero onCtaClick={handleCtaClick} />
    </div>
  );
};

// The updated Hero Component
interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative bg-gradient-to-br from-[#0A234E] to-blue-900 text-white overflow-hidden">
      {/* Background decorative pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute bottom-0 left-0 -translate-x-1/4 translate-y-1/4 w-96 h-96 rounded-full bg-blue-400/50 blur-3xl"
          aria-hidden="true"
        ></div>
        <div
          className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 w-96 h-96 rounded-full bg-blue-300/50 blur-3xl"
          aria-hidden="true"
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content Column */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight tracking-tight">
                Fortify Cloud Solutions delivers
                <span className="text-blue-300 block"> ERP applications</span> that simplify operations
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100/90 leading-relaxed max-w-xl mx-auto lg:mx-0">
                We turn business complexity into clarity — and clarity into results.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={onCtaClick}
                className="group bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center"
              >
                Begin Your Transformation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>

              <button className="border-2 border-blue-400 text-blue-200 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                Learn More
              </button>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="text-center p-2 rounded-lg hover:bg-white/10 transition-colors">
                <div className="text-3xl font-bold text-blue-300">500+</div>
                <div className="text-sm text-blue-200 mt-1">Successful Projects</div>
              </div>
              <div className="text-center p-2 rounded-lg hover:bg-white/10 transition-colors">
                <div className="text-3xl font-bold text-blue-300">24/7</div>
                <div className="text-sm text-blue-200 mt-1">Global Support</div>
              </div>
              <div className="text-center p-2 rounded-lg hover:bg-white/10 transition-colors">
                <div className="text-3xl font-bold text-blue-300">15+</div>
                <div className="text-sm text-blue-200 mt-1">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Content - Globe Component */}
          <div className="relative flex items-center justify-center mt-12 lg:mt-0 h-96 lg:h-[500px]">
            <GlobeComponent />
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;
