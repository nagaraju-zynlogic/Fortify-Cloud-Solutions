import React from 'react';
import { Linkedin, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onPageChange: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onPageChange }) => {
  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'solutions', label: 'Solutions' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <footer className="bg-[#0A234E] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo and Tagline */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="bg-white rounded-lg mr-3">
                <img
                  src="/logo-removebg-preview.png"
                  alt="Fortify Cloud Solutions Logo"
                  className="w-12 h-12"
                />
              </div>
              
              <div>
                <h3 className="text-xl font-bold">Fortify Cloud Solutions</h3>
              </div>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed">
              Simplifying ERP, amplifying success.
            </p>
            <p className="text-blue-200 text-sm mt-2">
              Turning business complexity into clarity — and clarity into results.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onPageChange(link.id)}
                    className="text-blue-200 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 text-blue-300 mr-3 flex-shrink-0" />
                <span className="text-blue-200 text-sm">
                  123 Business District<br />
                  Suite 456, City, State 12345
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 text-blue-300 mr-3 flex-shrink-0" />
                <span className="text-blue-200 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 text-blue-300 mr-3 flex-shrink-0" />
                <span className="text-blue-200 text-sm">info@fortifycloudsolutions.com</span>
              </div>
            </div>
          </div>

          {/* Column 4: Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-blue-800 p-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:info@fortifycloudsolutions.com"
                className="bg-blue-800 p-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-blue-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-200 text-sm">
              © 2024 Fortify Cloud Solutions. All rights reserved.
            </p>
            <p className="text-blue-200 text-sm mt-2 md:mt-0">
              Innovate, Implement, Support
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;