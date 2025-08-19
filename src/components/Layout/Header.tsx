// import React, { useState } from 'react';
// import { Menu, X, ChevronDown } from 'lucide-react';

// interface HeaderProps {
//   currentPage: string;
//   onPageChange: (page: string) => void;
// }

// const Header: React.FC<HeaderProps> = ({ currentPage, onPageChange }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isServicesOpen, setIsServicesOpen] = useState(false);

//   const navigationItems = [
//     { id: 'home', label: 'HOME' },
//     { id: 'about', label: 'ABOUT US' },
//     { 
//       id: 'services', 
//       label: 'SERVICES',
//       hasDropdown: true,
//       subItems: [
//         { id: 'erp', label: 'Enterprise Resource Planning' },
//         { id: 'development', label: 'Custom Development' },
//         { id: 'resources', label: 'IT Resources' },
//         { id: 'support', label: 'Value-Added Services' }
//       ]
//     },
//     { id: 'solutions', label: 'SOLUTIONS' },
//     { id: 'contact', label: 'CONTACT US' }
//   ];

//   const handleNavClick = (pageId: string) => {
//     onPageChange(pageId);
//     setIsMenuOpen(false);
//     setIsServicesOpen(false);
//   };

//   return (
//     <header className="bg-white shadow-md sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16 lg:h-20">
//           {/* Logo */}
//           <div 
//             className="flex items-center cursor-pointer" 
//             onClick={() => handleNavClick('home')}
//           >
//             <img src="logo-removebg-preview.png" alt="Fortify Cloud Solutions Logo" className="h-20 w-auto mr-3" />
           
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden lg:flex items-center space-x-8">
//             {navigationItems.map((item) => (
//               <div key={item.id} className="relative">
//                 {item.hasDropdown ? (
//                   <div
//                     className="relative"
//                     onMouseEnter={() => setIsServicesOpen(true)}
//                     onMouseLeave={() => setIsServicesOpen(false)}
//                   >
//                     <button
//                       className={`flex items-center text-sm font-medium transition-colors duration-200 hover:text-blue-600 ${
//                         currentPage === item.id ? 'text-blue-600' : 'text-gray-700'
//                       }`}
//                       onClick={() => handleNavClick(item.id)}
//                     >
//                       {item.label}
//                       {/* <ChevronDown className="ml-1 h-4 w-4" /> */}
//                     </button>
                    
//                     {/* {isServicesOpen && (
//                       <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-lg border border-gray-200">
//                         <div className="py-2">
//                           {item.subItems?.map((subItem) => (
//                             <button
//                               key={subItem.id}
//                               onClick={() => handleNavClick('services')}
//                               className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200"
//                             >
//                               {subItem.label}
//                             </button>
//                           ))}
//                         </div>
//                       </div>
//                     )} */}

//                   </div>
//                 ) : (
//                   <button
//                     className={`text-sm font-medium transition-colors duration-200 hover:text-blue-600 ${
//                       currentPage === item.id ? 'text-blue-600' : 'text-gray-700'
//                     }`}
//                     onClick={() => handleNavClick(item.id)}
//                   >
//                     {item.label}
//                   </button>
//                 )}
//               </div>
//             ))}
//           </nav>

//           {/* CTA Button */}
//           <div className="hidden lg:block">
//             <button
//               onClick={() => handleNavClick('contact')}
//               className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-md"
//             >
//               Schedule a Discovery Call
//             </button>
//           </div>

//           {/* Mobile menu button */}
//           <div className="lg:hidden">
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
//             >
//               {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         {isMenuOpen && (
//           <div className="lg:hidden border-t border-gray-200 pb-3 pt-3">
//             <div className="flex flex-col space-y-1">
//               {navigationItems.map((item) => (
//                 <button
//                   key={item.id}
//                   className={`text-left px-3 py-2 text-base font-medium transition-colors duration-200 hover:text-blue-600 ${
//                     currentPage === item.id ? 'text-blue-600' : 'text-gray-700'
//                   }`}
//                   onClick={() => handleNavClick(item.id)}
//                 >
//                   {item.label}
//                 </button>
//               ))}
//               <button
//                 onClick={() => handleNavClick('contact')}
//                 className="mt-4 mx-3 bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
//               >
//                 Schedule a Discovery Call
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;









import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onPageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navigationItems = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT US' },
    { 
      id: 'services', 
      label: 'SERVICES',
      hasDropdown: true,
      subItems: [
        { id: 'erp', label: 'Enterprise Resource Planning' },
        { id: 'development', label: 'Custom Development' },
        { id: 'resources', label: 'IT Resources' },
        { id: 'support', label: 'Value-Added Services' }
      ]
    },
    { id: 'solutions', label: 'SOLUTIONS' },
    { id: 'contact', label: 'CONTACT US' }
  ];

  const handleNavClick = (pageId: string) => {
    onPageChange(pageId);
    setIsMenuOpen(false);
    setIsServicesOpen(false);

    // Always scroll to top immediately
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer" 
            onClick={() => handleNavClick('home')}
          >
            <img 
              src="logo-removebg-preview.png" 
              alt="Fortify Cloud Solutions Logo" 
              className="h-20 w-auto mr-3" 
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.id} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <button
                      className={`flex items-center text-sm font-medium transition-colors duration-200 hover:text-blue-600 ${
                        currentPage === item.id ? 'text-blue-600' : 'text-gray-700'
                      }`}
                      onClick={() => handleNavClick(item.id)}
                    >
                      {item.label}
                    </button>
                  </div>
                ) : (
                  <button
                    className={`text-sm font-medium transition-colors duration-200 hover:text-blue-600 ${
                      currentPage === item.id ? 'text-blue-600' : 'text-gray-700'
                    }`}
                    onClick={() => handleNavClick(item.id)}
                  >
                    {item.label}
                  </button>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button
              onClick={() => handleNavClick('contact')}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-md"
            >
              Schedule a Discovery Call
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 pb-3 pt-3">
            <div className="flex flex-col space-y-1">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  className={`text-left px-3 py-2 text-base font-medium transition-colors duration-200 hover:text-blue-600 ${
                    currentPage === item.id ? 'text-blue-600' : 'text-gray-700'
                  }`}
                  onClick={() => handleNavClick(item.id)}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick('contact')}
                className="mt-4 mx-3 bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                Schedule a Discovery Call
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
