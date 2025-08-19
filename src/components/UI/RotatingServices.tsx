// // "use client";

// // import { useState, useEffect, useRef } from "react";
// // import { Users, User, TrendingUp, FileText, Calendar, Code } from "lucide-react";
// // import * as React from "react";

// // // The main component, now named RotatingServices
// // function RotatingServices() {
// //   const [rotationAngle, setRotationAngle] = useState<number>(0);
// //   const containerRef = useRef<HTMLDivElement>(null);

// //   // Simplified data with the six services you requested
// //   const servicesData = [
// //     { id: 1, title: "Recruiting", icon: Users },
// //     { id: 2, title: "HCM", icon: User },
// //     { id: 3, title: "Benefits", icon: TrendingUp },
// //     { id: 4, title: "Compensation", icon: FileText },
// //     { id: 5, title: "Time Off and Absence", icon: Calendar },
// //     { id: 6, title: "Payroll", icon: Code },
// //   ];

// //   // This effect handles the continuous rotation
// //   useEffect(() => {
// //     const rotationTimer = setInterval(() => {
// //       setRotationAngle((prevAngle) => (prevAngle + 0.3) % 360);
// //     }, 50);

// //     return () => {
// //       clearInterval(rotationTimer);
// //     };
// //   }, []); // Empty dependency array ensures this runs only once on mount

// //   // Calculates the position of each icon on the circle
// //   const calculateNodePosition = (index: number, total: number) => {
// //     const angle = ((index / total) * 360 + rotationAngle) % 360;
// //     const radius = 200; // Radius of the orbit
// //     const radian = (angle * Math.PI) / 180;

// //     const x = radius * Math.cos(radian);
// //     const y = radius * Math.sin(radian);

// //     // Fade and shrink icons on the backside of the orbit for a 3D effect
// //     const opacity = Math.max(0.4, (Math.sin(radian) + 1) / 2 * 0.6 + 0.4);
// //     const scale = Math.max(0.7, (Math.sin(radian) + 1) / 2 * 0.5 + 0.7);

// //     return { x, y, opacity, scale };
// //   };

// //   return (
// //     <div
// //       className="w-full h-[700px] flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden py-4"
// //       ref={containerRef}
// //     >
      


// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="text-center max-w-4xl mx-auto">
// //             <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8">Transform Your Operations</h1>
// //             <p className="text-xl text-blue-100 leading-relaxed mb-8">
// //               Our solutions seamlessly connect every facet of your enterprise, from recruiting to financial analytics, creating a unified and efficient operational ecosystem.
// //             </p>
// //           </div>
// //         </div>

// //       <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
// //         <div
// //           className="absolute w-full h-full flex items-center justify-center"
// //           style={{ perspective: "1000px" }}
// //         >
// //           {/* Central Logo */}
// //           <div className="absolute w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center z-10">
// //             <div className="absolute w-24 h-24 rounded-full border border-blue-300/30 animate-ping opacity-70"></div>
// //             <div className="absolute w-28 h-28 rounded-full border border-indigo-300/20 animate-ping opacity-50" style={{ animationDelay: "0.5s" }}></div>
// //             <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center">
// //               <img src="logo-removebg-preview.png" alt="logo" className="w-10 h-10" />
// //             </div>
// //           </div>

// //           {/* Orbital Path */}
// //           <div className="absolute w-96 h-96 rounded-full border border-white/10"></div>

// //           {/* Mapping over services to create rotating icons */}
// //           {servicesData.map((item, index) => {
// //             const position = calculateNodePosition(index, servicesData.length);
// //             const Icon = item.icon;

// //             const nodeStyle = {
// //               transform: `translate(${position.x}px, ${position.y}px) scale(${position.scale})`,
// //               opacity: position.opacity,
// //             };

// //             return (
// //               <div
// //                 key={item.id}
// //                 className="absolute transition-opacity duration-700"
// //                 style={nodeStyle}
// //               >
// //                 {/* Icon Container */}
// //                 <div className="w-12 h-12 rounded-full flex items-center justify-center bg-slate-800 text-blue-200 border-2 border-blue-500/40">
// //                   <Icon size={18} />
// //                 </div>
// //                 {/* Label below Icon */}
// //                 <div className="absolute top-14 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-semibold tracking-wider text-center text-blue-200/80">
// //                   {item.title}
// //                 </div>
// //               </div>
// //             );
// //           })}
// //         </div>
// //       </div>
// //       <style>{`
// //         @keyframes ping {
// //           75%, 100% {
// //             transform: scale(2);
// //             opacity: 0;
// //           }
// //         }
// //         .animate-ping {
// //           animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
// //         }
// //       `}</style>
// //     </div>
// //   );
// // }

// // export default RotatingServices;


// "use client";

// import { useState, useEffect, useRef } from "react";
// import { Users, User, TrendingUp, FileText, Calendar, Code } from "lucide-react";
// import * as React from "react";

// // The main component, now named RotatingServices
// function RotatingServices() {
//   const [rotationAngle, setRotationAngle] = useState<number>(0);
//   const containerRef = useRef<HTMLDivElement>(null);

//   // State to hold responsive sizes
//   const [dynamicSizes, setDynamicSizes] = useState({
//     radius: 220,        // Orbit radius in pixels
//     iconContainer: 64,  // Icon container size (w-16, h-16)
//     iconSize: 28,       // Lucide icon size
//     textSize: "text-sm",// Label text size
//     pathSize: 448,      // Orbital path div size
//   });

//   // Simplified data with the six services you requested
//   const servicesData = [
//     { id: 1, title: "Recruiting", icon: Users },
//     { id: 2, title: "HCM", icon: User },
//     { id: 3, title: "Benefits", icon: TrendingUp },
//     { id: 4, title: "Compensation", icon: FileText },
//     { id: 5, title: "Time Off and Absence", icon: Calendar },
//     { id: 6, title: "Payroll", icon: Code },
//   ];

//   // Effect to handle window resizing for responsiveness
//   useEffect(() => {
//     const handleResize = () => {
//       const width = window.innerWidth;
//       if (width < 768) { // Mobile
//         setDynamicSizes({ radius: 110, iconContainer: 56, iconSize: 24, textSize: "text-xs", pathSize: 220 });
//       } else if (width < 1024) { // Tablet
//         setDynamicSizes({ radius: 180, iconContainer: 60, iconSize: 26, textSize: "text-sm", pathSize: 360 });
//       } else { // Desktop
//         setDynamicSizes({ radius: 220, iconContainer: 64, iconSize: 28, textSize: "text-sm", pathSize: 448 });
//       }
//     };

//     handleResize(); // Set initial size on mount
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // This effect handles the continuous rotation
//   useEffect(() => {
//     const rotationTimer = setInterval(() => {
//       setRotationAngle((prevAngle) => (prevAngle + 0.2) % 360);
//     }, 50);

//     return () => clearInterval(rotationTimer);
//   }, []);

//   // Calculates the position of each icon on the circle
//   const calculateNodePosition = (index: number, total: number, radius: number) => {
//     const angle = ((index / total) * 360 + rotationAngle) % 360;
//     const radian = (angle * Math.PI) / 180;

//     const x = radius * Math.cos(radian);
//     const y = radius * Math.sin(radian);

//     // Fade and shrink icons on the backside of the orbit for a 3D effect
//     const opacity = Math.max(0.4, (Math.sin(radian) + 1) / 2 * 0.6 + 0.4);
//     const scale = Math.max(0.7, (Math.sin(radian) + 1) / 2 * 0.5 + 0.7);

//     return { x, y, opacity, scale };
//   };

//   return (
//     <div
//       className="w-full min-h-[700px] md:min-h-[800px] flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden py-12"
//       ref={containerRef}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center max-w-4xl mx-auto">
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Transform Your Operations</h1>
//           <p className="text-lg md:text-xl text-blue-100 leading-relaxed mb-8">
//             Our solutions seamlessly connect every facet of your enterprise, from recruiting to financial analytics, creating a unified and efficient operational ecosystem.
//           </p>
//         </div>
//       </div>

//       <div className="relative w-full max-w-4xl h-full flex-grow flex items-center justify-center mt-8">
//         <div
//           className="absolute w-full h-full flex items-center justify-center"
//           style={{ perspective: "1000px" }}
//         >
//           {/* Central Logo */}
//           <div className="absolute w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center z-10">
//             <div className="absolute w-24 h-24 rounded-full border border-blue-300/30 animate-ping opacity-70"></div>
//             <div className="absolute w-28 h-28 rounded-full border border-indigo-300/20 animate-ping opacity-50" style={{ animationDelay: "0.5s" }}></div>
//             <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center">
//               <img src="logo-removebg-preview.png" alt="logo" className="w-10 h-10" />
//             </div>
//           </div>

//           {/* Orbital Path (sized dynamically with inline styles) */}
//           <div
//             className="absolute rounded-full border border-white/10"
//             style={{ width: `${dynamicSizes.pathSize}px`, height: `${dynamicSizes.pathSize}px` }}
//           ></div>

//           {/* Mapping over services to create rotating icons */}
//           {servicesData.map((item, index) => {
//             const position = calculateNodePosition(index, servicesData.length, dynamicSizes.radius);
//             const Icon = item.icon;

//             const nodeStyle = {
//               transform: `translate(${position.x}px, ${position.y}px) scale(${position.scale})`,
//               opacity: position.opacity,
//             };

//             return (
//               <div
//                 key={item.id}
//                 className="absolute transition-opacity duration-700"
//                 style={nodeStyle}
//               >
//                 {/* Icon Container (sized with inline styles) */}
//                 <div
//                   className="rounded-full flex items-center justify-center bg-slate-800 text-blue-200 border-2 border-blue-500/40"
//                   style={{
//                     width: `${dynamicSizes.iconContainer}px`,
//                     height: `${dynamicSizes.iconContainer}px`,
//                   }}
//                 >
//                   <Icon size={dynamicSizes.iconSize} />
//                 </div>
//                 {/* Label below Icon (sized with dynamic class) */}
//                 <div className={`absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap font-semibold tracking-wider text-center text-blue-200/80 ${dynamicSizes.textSize}`}>
//                   {item.title}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//       <style>{`
//         @keyframes ping {
//           75%, 100% {
//             transform: scale(2);
//             opacity: 0;
//           }
//         }
//         .animate-ping {
//           animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
//         }
//       `}</style>
//     </div>
//   );
// }

// export default RotatingServices;



"use client";

import { useState, useEffect, useRef } from "react";
import { Users, User, TrendingUp, FileText, Calendar, Code } from "lucide-react";
import * as React from "react";

// The main component, now named RotatingServices
function RotatingServices() {
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // State to hold responsive sizes
  const [dynamicSizes, setDynamicSizes] = useState({
    radius: 220,        // Orbit radius in pixels
    iconContainer: 64,  // Icon container size (w-16, h-16)
    iconSize: 28,       // Lucide icon size
    textSize: "text-sm",// Label text size
    pathSize: 448,      // Orbital path div size
  });

  // Simplified data with the six services you requested
  const servicesData = [
    { id: 1, title: "Recruiting", icon: Users },
    { id: 2, title: "HCM", icon: User },
    { id: 3, title: "Benefits", icon: TrendingUp },
    { id: 4, title: "Compensation", icon: FileText },
    { id: 5, title: "Time Off and Absence", icon: Calendar },
    { id: 6, title: "Payroll", icon: Code },
  ];

  // Effect to handle window resizing for responsiveness
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) { // Mobile
        setDynamicSizes({ radius: 110, iconContainer: 56, iconSize: 30, textSize: "text-xs", pathSize: 220 });
      } else if (width < 1024) { // Tablet
        setDynamicSizes({ radius: 180, iconContainer: 60, iconSize: 32, textSize: "text-sm", pathSize: 360 });
      } else { // Desktop
        setDynamicSizes({ radius: 220, iconContainer: 64, iconSize: 36, textSize: "text-sm", pathSize: 448 });
      }
    };

    handleResize(); // Set initial size on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // This effect handles the continuous rotation
  useEffect(() => {
    const rotationTimer = setInterval(() => {
      setRotationAngle((prevAngle) => (prevAngle + 0.2) % 360);
    }, 50);

    return () => clearInterval(rotationTimer);
  }, []);

  // Calculates the position of each icon on the circle (fixed size, no scaling/fading)
  const calculateNodePosition = (index: number, total: number, radius: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radian = (angle * Math.PI) / 180;

    const x = radius * Math.cos(radian);
    const y = radius * Math.sin(radian);

    return { x, y };
  };

  return (
    <div
      className="w-full min-h-[700px] md:min-h-[800px] flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden py-12"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Transform Your Operations</h1>
          <p className="text-lg md:text-xl text-blue-100 leading-relaxed mb-8">
            Our solutions seamlessly connect every facet of your enterprise, from recruiting to financial analytics, creating a unified and efficient operational ecosystem.
          </p>
        </div>
      </div>

      <div className="relative w-full max-w-4xl h-full flex-grow flex items-center justify-center mt-8">
        <div
          className="absolute w-full h-full flex items-center justify-center"
          style={{ perspective: "1000px" }}
        >
          {/* Central Logo */}
          <div className="absolute w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center z-10">
            <div className="absolute w-24 h-24 rounded-full border border-blue-300/30 animate-ping opacity-70"></div>
            <div className="absolute w-28 h-28 rounded-full border border-indigo-300/20 animate-ping opacity-50" style={{ animationDelay: "0.5s" }}></div>
            <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center">
              <img src="logo-removebg-preview.png" alt="logo" className="w-16 h-16" />
            </div>
          </div>

          {/* Orbital Path (sized dynamically with inline styles) */}
          <div
            className="absolute rounded-full border border-white/10"
            style={{ width: `${dynamicSizes.pathSize}px`, height: `${dynamicSizes.pathSize}px` }}
          ></div>

          {/* Mapping over services to create rotating icons */}
          {servicesData.map((item, index) => {
            const position = calculateNodePosition(index, servicesData.length, dynamicSizes.radius);
            const Icon = item.icon;

            const nodeStyle = {
              transform: `translate(${position.x}px, ${position.y}px)`,
              opacity: 1, // always visible
            };

            return (
              <div
                key={item.id}
                className="absolute transition-transform duration-700"
                style={nodeStyle}
              >
                {/* Icon Container (sized with inline styles) */}
                <div
                  className="rounded-full flex items-center justify-center bg-slate-800 text-blue-200 border-2 border-blue-500/40"
                  style={{
                    width: `${dynamicSizes.iconContainer}px`,
                    height: `${dynamicSizes.iconContainer}px`,
                  }}
                >
                  <Icon size={dynamicSizes.iconSize} />
                </div>
                {/* Label below Icon (sized with dynamic class) */}
                <div className={`absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap font-semibold tracking-wider text-center text-blue-200/80 ${dynamicSizes.textSize}`}>
                  {item.title}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <style>{`
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        .animate-ping {
          animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
}

export default RotatingServices;
