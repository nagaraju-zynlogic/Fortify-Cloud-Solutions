import { FaCogs, FaExchangeAlt, FaSlidersH, FaUserGraduate, FaLifeRing } from "react-icons/fa";

const expertiseList = [
  {
    icon: <FaCogs className="text-4xl text-blue-500" />,
    title: "Comprehensive Workday, SAP & PeopleSoft Services",
    description: "HCM, Finance, Payroll, and Benefits solutions tailored to your business needs."
  },
  {
    icon: <FaExchangeAlt className="text-4xl text-green-500" />,
    title: "Custom Integrations & Reporting",
    description: "Seamless system integrations with advanced analytics and custom reporting."
  },
  {
    icon: <FaSlidersH className="text-4xl text-purple-500" />,
    title: "System Configuration & Process Optimization",
    description: "Fine-tuning configurations and streamlining workflows for efficiency."
  },
  {
    icon: <FaUserGraduate className="text-4xl text-orange-500" />,
    title: "Change Management & User Training",
    description: "Helping teams adapt to change with effective training programs."
  },
  {
    icon: <FaLifeRing className="text-4xl text-red-500" />,
    title: "Post-Deployment Support & Improvement",
    description: "Ongoing support and enhancements to keep systems running smoothly."
  }
];

export default function OurExpertise() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Our Expertise</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {expertiseList.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
