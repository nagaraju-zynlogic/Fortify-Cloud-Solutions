import React from 'react';
import { ArrowRight } from 'lucide-react';
import GlobeComponent from './GlobeComponent';

interface HeroProps {
  onCtaClick: () => void;
  onLearnMoreClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick, onLearnMoreClick }) => {
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
          <div className="flex flex-col justify-center space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
                Fortify Cloud Solutions delivers{" "}
                <span className="text-blue-300">ERP applications</span> that simplify operations
              </h1>
              <br/>
              <p className="text-lg lg:text-xl text-white-100/90 leading-relaxed max-w-xl mx-auto lg:mx-0 animate-slide-in-left">
                Fortify Cloud Solutions — Simplifying ERP, amplifying success
              </p>
            </div>

            {/* CTA + Stats (hidden on small, shown on lg) */}
            <div className="hidden lg:block space-y-8">
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={onCtaClick}
                  className="group bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center"
                >
                  Begin Your Transformation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>

                <button 
                  onClick={onLearnMoreClick}
                  className="border-2 border-blue-400 text-blue-200 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
                >
                  Learn More
                </button>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-4 pt-8">
                <div className="text-center p-2 rounded-lg hover:bg-white/10 transition-colors">
                  <div className="text-3xl font-bold text-blue-300">50+</div>
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
          </div>

          {/* Right Content - Globe Component */}
          <div className="relative flex items-center justify-center lg:justify-start w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[500px] lg:h-[500px] mx-auto lg:ml-20">
            <GlobeComponent />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
