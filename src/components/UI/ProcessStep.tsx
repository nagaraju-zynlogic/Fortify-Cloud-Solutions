import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ProcessStepProps {
  step: number;
  icon: LucideIcon;
  title: string;
  description: string;
  isLast?: boolean;
}

const ProcessStep: React.FC<ProcessStepProps> = ({
  step,
  icon: Icon,
  title,
  description,
  isLast = false
}) => {
  return (
    <div className="relative flex flex-col items-center text-center">
      {/* Step Circle */}
      <div className="relative z-10 bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-lg mb-4 shadow-lg">
        {step}
      </div>
      
      {/* Icon */}
      <div className="bg-blue-100 p-4 rounded-lg mb-4">
        <Icon className="h-8 w-8 text-blue-600" />
      </div>
      
      {/* Content */}
      <div className="max-w-xs">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 leading-relaxed text-sm">{description}</p>
      </div>
      
      {/* Connector Line */}
      {!isLast && (
        <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-blue-200 transform translate-x-8 -translate-y-0.5"></div>
      )}
    </div>
  );
};

export default ProcessStep;