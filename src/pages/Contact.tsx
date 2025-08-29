


// import React, { useState } from 'react';
// import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

// const Contact: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     company: '',
//     email: '',
//     phone: '',
//     message: ''
//   });
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     setIsSubmitted(true);

//     setTimeout(() => {
//       setIsSubmitted(false);
//       setFormData({
//         name: '',
//         company: '',
//         email: '',
//         phone: '',
//         message: ''
//       });
//     }, 3000);
//   };

//   if (isSubmitted) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="bg-white p-12 rounded-2xl shadow-xl text-center max-w-md mx-auto">
//           <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
//           <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h2>
//           <p className="text-gray-600 text-lg mb-6">
//             Your message has been received. Our team will get back to you within 24 hours.
//           </p>
//           <div className="animate-pulse">
//             <div className="bg-blue-100 rounded-lg p-4">
//               <p className="text-blue-800 font-medium">Redirecting you back...</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen">
//       {/* Hero Section */}
//       <section className="bg-gradient-to-br from-[#0A234E] to-blue-900 text-white py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h1 className="text-5xl lg:text-6xl font-bold mb-8">Get in Touch</h1>
//           <p className="text-xl text-blue-100 max-w-2xl mx-auto">
//             Ready to start your transformation? Partner with us for ongoing success and innovation.
//           </p>
//         </div>
//       </section>

//       {/* Contact Form and Info */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
//             {/* Contact Form */}
//             <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
//               <h2 className="text-3xl font-bold text-gray-900 mb-8">Send Us a Message</h2>
              
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 {/* Inputs */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div>
//                     <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
//                       Full Name *
//                     </label>
//                     <input
//                       type="text"
//                       id="name"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleInputChange}
//                       required
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
//                       placeholder="Your full name"
//                     />
//                   </div>
                  
//                   <div>
//                     <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
//                       Company
//                     </label>
//                     <input
//                       type="text"
//                       id="company"
//                       name="company"
//                       value={formData.company}
//                       onChange={handleInputChange}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
//                       placeholder="Your company name"
//                     />
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div>
//                     <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
//                       Email Address *
//                     </label>
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleInputChange}
//                       required
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
//                       placeholder="your.email@example.com"
//                     />
//                   </div>
                  
//                   <div>
//                     <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
//                       Phone Number
//                     </label>
//                     <input
//                       type="tel"
//                       id="phone"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleInputChange}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
//                       placeholder="+1 (555) 123-4567"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
//                     Message *
//                   </label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleInputChange}
//                     required
//                     rows={6}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
//                     placeholder="Tell us about your project and how we can help..."
//                   />
//                 </div>

//                 <button
//                   type="submit"
//                   className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center"
//                 >
//                   Send Message
//                   <Send className="ml-2 h-5 w-5" />
//                 </button>
//               </form>
//             </div>

//             {/* Contact Information */}
//             <div className="space-y-8">
//               <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
//                 <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
                
//                 <div className="space-y-6">
//                   <div className="flex items-start">
//                     <div className="bg-blue-100 p-3 rounded-lg mr-4 flex-shrink-0">
//                       <MapPin className="h-6 w-6 text-blue-600" />
//                     </div>
//                     <div>
//                       <h3 className="text-lg font-semibold text-gray-900 mb-2">Office Address</h3>
//                       <p className="text-gray-600">
//                         Sri Sai Krupa, 1st main, 4th Phase, East of Kathriguppe, BSK 3rd Stage, Bangalore-560085
//                       </p>
//                       <a 
//                         href="https://www.google.com/maps/place/Sri+Sai+Krupa,+14,+3rd+Cross+Rd,+7+Block,+Banagirinagara,+Banashankari+3rd+Stage,+Banashankari,+Bengaluru,+Karnataka+560085/@12.926597,77.559265,16z/data=!4m6!3m5!1s0x3bae3e29832700b7:0xefb283b70e43ab56!8m2!3d12.9265974!4d77.5592653!16s%2Fg%2F11w7q307k6?hl=en&entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D" 
//                         target="_blank" 
//                         rel="noopener noreferrer"
//                         className="text-blue-600 hover:text-blue-800 text-sm mt-2 inline-block"
//                       >
//                         View on Google Maps
//                       </a>
//                     </div>
//                   </div>

//                   <div className="flex items-start">
//                     <div className="bg-blue-100 p-3 rounded-lg mr-4 flex-shrink-0">
//                       <Phone className="h-6 w-6 text-blue-600" />
//                     </div>
//                     <div>
//                       <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
//                       <p className="text-gray-600">+91 73537 60071  +91 95383 62440  +91 63034 64241</p>
//                       <p className="text-sm text-gray-500 mt-1">Monday - Friday, 9:00 AM - 6:00 PM IST</p>
//                     </div>
//                   </div>

//                   <div className="flex items-start">
//                     <div className="bg-blue-100 p-3 rounded-lg mr-4 flex-shrink-0">
//                       <Mail className="h-6 w-6 text-blue-600" />
//                     </div>
//                     <div>
//                       <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
//                       <p className="text-gray-600">info@fortifycloudsolutions.com</p>
//                       <p className="text-sm text-gray-500 mt-1">We respond within 24 hours</p>
//                     </div>
//                   </div>

//                   <div className="flex items-start">
//                     <div className="bg-blue-100 p-3 rounded-lg mr-4 flex-shrink-0">
//                       <Clock className="h-6 w-6 text-blue-600" />
//                     </div>
//                     <div>
//                       <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Hours</h3>
//                       <div className="text-gray-600 space-y-1">
//                         <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
//                         <p>Saturday: 10:00 AM - 2:00 PM EST</p>
//                         <p>Sunday: Closed</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* CTA Card */}
//               <div className="bg-[#0A234E] text-white rounded-2xl p-8">
//                 <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
//                 <p className="text-blue-200 mb-6">
//                   Schedule a free discovery call to discuss your ERP transformation needs and explore how we can help your business grow.
//                 </p>
//                 <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
//                   Schedule Discovery Call
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Google Map */}
//       <section className="py-20 bg-gray-200">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="rounded-xl overflow-hidden shadow-lg">
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.706083739221!2d77.5566903747931!3d12.926602615863802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3e29832700b7%3A0xefb283b70e43ab56!2sSri%20Sai%20Krupa%2C%2014%2C%203rd%20Cross%20Rd%2C%207%20Block%2C%20Banagirinagara%2C%20Banashankari%203rd%20Stage%2C%20Banashankari%2C%20Bengaluru%2C%20Karnataka%20560085!5e0!3m2!1sen!2sin!4v1756187837741!5m2!1sen!2sin"
//               width="100%"
//               height="350"
//               style={{ border: 0 }}
//               allowFullScreen={true}
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             ></iframe>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Contact;



import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // --- Configuration ---
    const recipientEmail = 'bethinagaraju04@gmail.com';
    const subject = `Contact Form Submission from ${formData.name}`;
    const body = `
      You have a new message from your website's contact form:
      --------------------------------------------------
      Name: ${formData.name}
      Company: ${formData.company || 'N/A'}
      Email: ${formData.email}
      Phone: ${formData.phone || 'N/A'}
      --------------------------------------------------
      Message:
      ${formData.message}
    `;

    // --- Create and trigger the mailto link ---
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodedSubject}&body=${encodedBody}`;
    
    window.location.href = mailtoLink;

    // Optional: Reset the form after triggering the email client
    setTimeout(() => {
        setFormData({
            name: '',
            company: '',
            email: '',
            phone: '',
            message: ''
          });
    }, 1000);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0A234E] to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-8">Get in Touch</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Ready to start your transformation? Partner with us for ongoing success and innovation.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Tell us about your project and how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center"
                >
                  Send
                  <Send className="ml-2 h-5 w-5" />
                </button>
                {/* <span>This form will redirect to the Gmail.</span> */}
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4 flex-shrink-0">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Office Address</h3>
                      <p className="text-gray-600">
                        Sri Sai Krupa, 1st main, 4th Phase, East of Kathriguppe, BSK 3rd Stage, Bangalore-560085
                      </p>
                      <a 
                        href="https://maps.google.com/?q=Sri+Sai+Krupa,1st+main,4th+Phase,East+of+Kathriguppe,BSK+3rd+Stage,Bangalore-560085"
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 text-sm mt-2 inline-block"
                      >
                        View on Google Maps
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4 flex-shrink-0">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                      <p className="text-gray-600">+91 73537 60071 | +91 95383 62440 | +91 63034 64241</p>
                      <p className="text-sm text-gray-500 mt-1">Monday - Friday, 9:00 AM - 6:00 PM IST</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4 flex-shrink-0">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                      <p className="text-gray-600">info@fortifycloudsolutions.com</p>
                      <p className="text-sm text-gray-500 mt-1">We respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4 flex-shrink-0">
                      <Clock className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Hours</h3>
                      <div className="text-gray-600 space-y-1">
                        <p>Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                        <p>Saturday: 10:00 AM - 2:00 PM IST</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Card */}
              <div className="bg-[#0A234E] text-white rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="text-blue-200 mb-6">
                  Schedule a free discovery call to discuss your ERP transformation needs and explore how we can help your business grow.
                </p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                  Schedule Discovery Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="py-20 bg-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.769996967262!2d77.54591131529683!3d12.922471919249764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3e1cc2601729%3A0x69684949516631b!2sKathriguppe%204th%20Phase%2C%20Banashankari%203rd%20Stage%2C%20Bengaluru%2C%20Karnataka%20560085%2C%20India!5e0!3m2!1sen!2sus!4v1661611111111!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;