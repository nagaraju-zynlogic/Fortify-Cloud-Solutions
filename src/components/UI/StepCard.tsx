// import React, { useState, useEffect } from 'react';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Badge } from '@/components/ui/badge';
// import { ChevronRight, Search, Settings, Rocket, HeadphonesIcon } from 'lucide-react';

// interface Step {
//   id: number;
//   title: string;
//   description: string;
//   icon: React.ReactNode;
//   status: 'completed' | 'current' | 'upcoming';
// }

// interface StepCardProps {
//   steps?: Step[];
//   currentStep?: number;
// }

// const StepCard: React.FC<StepCardProps> = ({ 
//   steps = [
//     {
//       id: 1,
//       title: "Discovery & Planning",
//       description: "Understand business needs, define project scope and timeline for optimal results",
//       icon: <Search className="w-6 h-6" />,
//       status: 'completed'
//     },
//     {
//       id: 2,
//       title: "Configuration & Testing",
//       description: "Configure to fit your processes, rigorous testing for quality assurance",
//       icon: <Settings className="w-6 h-6" />,
//       status: 'current'
//     },
//     {
//       id: 3,
//       title: "Deployment & Knowledge Transfer",
//       description: "Seamless go-live support with comprehensive training for your team",
//       icon: <Rocket className="w-6 h-6" />,
//       status: 'upcoming'
//     },
//     {
//       id: 4,
//       title: "Ongoing Support & Optimization",
//       description: "Continuous monitoring and proactive issue resolution for peak performance",
//       icon: <HeadphonesIcon className="w-6 h-6" />,
//       status: 'upcoming'
//     }
//   ],
//   currentStep = 2
// }) => {
//   const [activeStep, setActiveStep] = useState(currentStep);
//   const [hoveredCard, setHoveredCard] = useState<number | null>(null);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setHoveredCard(prev => {
//         if (prev === null) return 1;
//         if (prev >= steps.length) return 1;
//         return prev + 1;
//       });
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [steps.length]);

//   const getStepStatus = (stepId: number): 'completed' | 'current' | 'upcoming' => {
//     if (stepId < activeStep) return 'completed';
//     if (stepId === activeStep) return 'current';
//     return 'upcoming';
//   };

//   const getStatusColor = (status: string) => {
//     switch (status) {
//       case 'completed':
//         return 'bg-green-500/10 text-green-600 border-green-200';
//       case 'current':
//         return 'bg-blue-500/10 text-blue-600 border-blue-200';
//       case 'upcoming':
//         return 'bg-muted text-muted-foreground border-border';
//       default:
//         return 'bg-muted text-muted-foreground border-border';
//     }
//   };

//   const getIconColor = (status: string) => {
//     switch (status) {
//       case 'completed':
//         return 'text-green-600 bg-green-500/10';
//       case 'current':
//         return 'text-blue-600 bg-blue-500/10';
//       case 'upcoming':
//         return 'text-muted-foreground bg-muted';
//       default:
//         return 'text-muted-foreground bg-muted';
//     }
//   };

//   return (
//     <div className="w-full max-w-4xl mx-auto p-6 pt-12 space-y-6">
//       <div className="text-center mb-12">
//         <h1 className="text-5xl font-bold text-blue-500 mb-2">Our Proven Engagement Model</h1>
//         <p className="text-muted-foreground">A systematic approach to ensure your success at every phase</p>
//       </div>

//       <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
//         {steps.map((step, index) => {
//           const status = getStepStatus(step.id);
//           return (
//             <Card 
//               key={step.id}
//               className={`relative transition-all duration-500 cursor-pointer transform ${
//                 hoveredCard === step.id 
//                   ? 'shadow-xl scale-105 ring-2 ring-blue-500/30 bg-blue-50/50' 
//                   : status === 'current' 
//                     ? 'ring-2 ring-blue-500/20 shadow-md' 
//                     : 'hover:shadow-lg'
//               }`}
//               onClick={() => setActiveStep(step.id)}
//             >
//               <CardHeader className="pb-3">
//                 <div className="flex items-center justify-between mb-2">
//                   <div className={`p-2 rounded-lg ${getIconColor(status)}`}>
//                     {step.icon}
//                   </div>
//                   <Badge variant="outline" className={getStatusColor(status)}>
//                     Step {step.id}
//                   </Badge>
//                 </div>
//                 <CardTitle className="text-lg leading-tight">{step.title}</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <CardDescription className="text-sm leading-relaxed">
//                   {step.description}
//                 </CardDescription>
//                 {index < steps.length - 1 && (
//                   <div className="hidden lg:block absolute -right-2 top-1/2 transform -translate-y-1/2 z-10">
//                     <div className="bg-background border border-border rounded-full p-1">
//                       <ChevronRight className="w-4 h-4 text-muted-foreground" />
//                     </div>
//                   </div>
//                 )}
//               </CardContent>
//             </Card>
//           );
//         })}
//       </div>


//     </div>
//   );
// };

// export default StepCard;



import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronRight, Search, Settings, Rocket, HeadphonesIcon } from 'lucide-react';

interface Step {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  status: 'completed' | 'current' | 'upcoming';
}

interface StepCardProps {
  steps?: Step[];
  currentStep?: number;
}

const StepCard: React.FC<StepCardProps> = ({ 
  steps = [
    {
      id: 1,
      title: "Discovery & Planning",
      description: "Understand business needs, define project scope and timeline for optimal results",
      icon: <Search className="w-6 h-6" />,
      status: 'completed'
    },
    {
      id: 2,
      title: "Configuration & Testing",
      description: "Configure to fit your processes, rigorous testing for quality assurance",
      icon: <Settings className="w-6 h-6" />,
      status: 'current'
    },
    {
      id: 3,
      title: "Deployment & Knowledge Transfer",
      description: "Seamless go-live support with comprehensive training for your team",
      icon: <Rocket className="w-6 h-6" />,
      status: 'upcoming'
    },
    {
      id: 4,
      title: "Ongoing Support & Optimization",
      description: "Continuous monitoring and proactive issue resolution for peak performance",
      icon: <HeadphonesIcon className="w-6 h-6" />,
      status: 'upcoming'
    }
  ],
  currentStep = 2
}) => {
  const [activeStep, setActiveStep] = useState(currentStep);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const getStepStatus = (stepId: number): 'completed' | 'current' | 'upcoming' => {
    if (stepId < activeStep) return 'completed';
    if (stepId === activeStep) return 'current';
    return 'upcoming';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500/10 text-green-600 border-green-200';
      case 'current':
        return 'bg-blue-500/10 text-blue-600 border-blue-200';
      case 'upcoming':
        return 'bg-muted text-muted-foreground border-border';
      default:
        return 'bg-muted text-muted-foreground border-border';
    }
  };

  const getIconColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'text-green-600 bg-green-500/10';
      case 'current':
        return 'text-blue-600 bg-blue-500/10';
      case 'upcoming':
        return 'text-muted-foreground bg-muted';
      default:
        return 'text-muted-foreground bg-muted';
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 pt-12 space-y-6">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-blue-500 mb-2">Our Proven Engagement Model</h1>
        <p className="text-muted-foreground">A systematic approach to ensure your success at every phase</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => {
          const status = getStepStatus(step.id);
          return (
            <Card 
              key={step.id}
              className={`relative transition-all duration-300 cursor-pointer transform ${
                hoveredCard === step.id 
                  ? 'shadow-xl scale-105 ring-2 ring-blue-500/30 bg-blue-50/50' 
                  : status === 'current' 
                    ? 'ring-2 ring-blue-500/20 shadow-md' 
                    : 'hover:shadow-lg'
              }`}
              onMouseEnter={() => setHoveredCard(step.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => setActiveStep(step.id)}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <div className={`p-2 rounded-lg ${getIconColor(status)}`}>
                    {step.icon}
                  </div>
                  <Badge variant="outline" className={getStatusColor(status)}>
                    Step {step.id}
                  </Badge>
                </div>
                <CardTitle className="text-lg leading-tight">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  {step.description}
                </CardDescription>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-2 top-1/2 transform -translate-y-1/2 z-10">
                    <div className="bg-background border border-border rounded-full p-1">
                      <ChevronRight className="w-4 h-4 text-muted-foreground" />
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default StepCard;
