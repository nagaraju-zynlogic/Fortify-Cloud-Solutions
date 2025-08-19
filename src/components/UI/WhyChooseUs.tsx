// // import { motion } from "framer-motion";
// // import { FaAward, FaHandsHelping, FaLightbulb } from "react-icons/fa";

// // // Feature Card Component
// // const FeatureCard = ({ icon: Icon, title, description }) => {
// //   return (
// //     <motion.div
// //       whileHover={{ scale: 1.05 }}
// //       className="bg-white rounded-2xl shadow-lg p-6 text-center transition-all duration-300 border border-gray-100 hover:shadow-2xl hover:border-blue-500"
// //     >
// //       <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md">
// //         <Icon size={28} />
// //       </div>
// //       <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
// //       <p className="text-gray-600 leading-relaxed">{description}</p>
// //     </motion.div>
// //   );
// // };

// // // Main WhyChooseUs Component
// // export default function WhyChooseUs() {
// //   const features = [
// //     {
// //       icon: FaAward,
// //       title: "Proven Expertise",
// //       description:
// //         "Our team delivers exceptional results backed by years of experience and industry recognition.",
// //     },
// //     {
// //       icon: FaHandsHelping,
// //       title: "Customer First",
// //       description:
// //         "We prioritize your needs, ensuring a smooth and satisfying experience from start to finish.",
// //     },
// //     {
// //       icon: FaLightbulb,
// //       title: "Innovative Solutions",
// //       description:
// //         "We bring creative ideas to life, offering fresh perspectives to solve your business challenges.",
// //     },
// //   ];

// //   return (
// //     <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         {/* Section Header */}
// //         <div className="text-center mb-16">
// //           <motion.h2
// //             initial={{ opacity: 0, y: 20 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 0.6 }}
// //             className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
// //           >
// //             Why Choose Us?
// //           </motion.h2>
// //           <motion.p
// //             initial={{ opacity: 0 }}
// //             whileInView={{ opacity: 1 }}
// //             viewport={{ once: true }}
// //             transition={{ delay: 0.2, duration: 0.6 }}
// //             className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto"
// //           >
// //             Experience the difference that expertise and dedication make.
// //           </motion.p>
// //         </div>

// //         {/* Feature Cards */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
// //           {features.map((feature, index) => (
// //             <FeatureCard
// //               key={index}
// //               icon={feature.icon}
// //               title={feature.title}
// //               description={feature.description}
// //             />
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }


// import { motion } from "framer-motion";
// import {
//   FaUsers,
//   FaRocket,
//   FaHeadset,
//   FaCogs,
//   FaCheckCircle,
//   FaLightbulb,
// } from "react-icons/fa";

// // Feature Card Component
// const FeatureCard = ({ icon: Icon, title }) => {
//   return (
//     <motion.div
//       whileHover={{ scale: 1.05 }}
//       className="bg-white rounded-2xl shadow-lg p-6 text-center transition-all duration-300 border border-gray-100 hover:shadow-2xl hover:border-blue-500"
//     >
//       <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md">
//         <Icon size={28} />
//       </div>
//       <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
//     </motion.div>
//   );
// };

// // Main WhyChooseUs Component
// export default function WhyChooseUs() {
//   const features = [
//     {
//       icon: FaUsers,
//       title: "Focused team with deep domain expertise in Workday, SAP and PeopleSoft",
//     },
//     {
//       icon: FaRocket,
//       title: "Accelerated, client-specific deployments",
//     },
//     {
//       icon: FaHeadset,
//       title: "24/7 support with global delivery model",
//     },
//     {
//       icon: FaCogs,
//       title: "Flexible support packages tailored to your needs",
//     },
//     {
//       icon: FaCheckCircle,
//       title: "Proven track record of successful Workday transformations",
//     },
//     {
//       icon: FaLightbulb,
//       title: "Commitment to partnership and continuous innovation",
//     },
//   ];

//   return (
//     <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
//           >
//             Why Choose Us?
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2, duration: 0.6 }}
//             className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto"
//           >
//             Experience the difference that expertise and dedication make.
//           </motion.p>
//         </div>

//         {/* Feature Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//           {features.map((feature, index) => (
//             <FeatureCard key={index} icon={feature.icon} title={feature.title} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }




import { ReactNode } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import {
  PersonIcon,
  RocketIcon,
  GlobeIcon,
  ChatBubbleIcon,
  StarIcon,
  LightningBoltIcon,

} from "@radix-ui/react-icons";
import { Cpu } from 'lucide-react'
import { FiCpu } from "react-icons/fi";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
        className,
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
}: {
  name: string;
  className?: string; // Make className optional as it's not always provided in features
  background: ReactNode;
  Icon: React.ElementType; // Use React.ElementType for component props
  description: string;
  href: string;
  cta: string;
}) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
      // light styles
      "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      // dark styles
      "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className,
    )}
  >
    <div style={{ opacity: 0.3 }}>{background}</div>
    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
      <Icon className="h-12 w-12 origin-left transform-gpu text-blue-700 fill-current transition-all duration-300 ease-in-out group-hover:scale-75" />
      {/* <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300">
        {name}
      </h3> */}

      <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
        {name}
      </h3>
      <p className="max-w-lg text-black-500 dark:text-gray-300">{description}</p>
    </div>

    <div
      className={cn(
        "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
      )}
    >
      <Button variant="ghost" asChild size="sm" className="pointer-events-auto">
        <a href={href}>
          {cta}
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </a>
      </Button>
    </div>
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
  </div>
);

// const features = [
//   {
//     Icon: PersonIcon,
//     name: "Deep Domain Expertise",
//     description: "Focused team with deep domain expertise in Workday, SAP and PeopleSoft.",
//     href: "/",
//     cta: "Learn more",
//     background: (
//       <div
//         className="absolute inset-0 bg-cover bg-no-repeat"
//         style={{
//           backgroundImage: `url(https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/338075615/original/c84dbd5dd5b3ec45f88162cb2f7ead9dfcfa1404/develop-custom-machine-learning-and-deep-learning-models-for-you.jpg)`,
//         }}
//       />
//     ),
//     className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
//   },
//   {
//     Icon: RocketIcon,
//     name: "Accelerated Deployments",
//     description: "Accelerated, client-specific deployments tailored to your business needs.",
//     href: "/",
//     cta: "Learn more",
//     background: (
//       <div
//         className="absolute inset-0 bg-cover bg-no-repeat"
//         style={{
//           backgroundImage: 'website-1.png',
//         }}
//       />
//     ),
//     className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
//   },
//   {
//     Icon: GlobeIcon,
//     name: "24/7 Global Support",
//     description: "24/7 support with global delivery model ensuring continuous service.",
//     href: "/",
//     cta: "Learn more",
//     background: (
//       <div
//         className="absolute inset-0 bg-cover bg-no-repeat"
//         style={{
//           backgroundImage: `url(https://document360.com/wp-content/uploads/2022/11/How_to_Provide_247_Customer_Service_with_Tips__Benefits-scaled.jpg)`,
//         }}
//       />
//     ),
//     className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
//   },
//   {
//     Icon: FiCpu,
//     name: "Future-Ready Technology",
//     description: "Cutting-edge tools and platforms to keep you ahead of the competition.",
//     href: "/",
//     cta: "Learn more",
//     background: (
//       <div
//         className="absolute inset-0 bg-cover bg-no-repeat"
//         style={{
//           backgroundImage: `url(https://media.licdn.com/dms/image/v2/D4D22AQHJ8NL0EyD-Kg/feedshare-shrink_2048_1536/B4DZaACkw7G0Ao-/0/1745904881262?e=2147483647&v=beta&t=pPzsJLocj51N4xaPVUSS0LrkxniPFzUJnxiWLAirHAE)`,
//         }}
//       />
//     ),
//     className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
//   },
//   {
//     Icon: StarIcon,
//     name: "Proven Track Record",
//     description: "Proven track record of successful Workday transformations with commitment to partnership and continuous innovation.",
//     href: "/",
//     cta: "Learn more",
//     background: (
//       <div
//         className="absolute inset-0 bg-cover bg-no-repeat"
//         style={{
//           backgroundImage: `url(https://media.licdn.com/dms/image/v2/D4D12AQFeKwhi-fOalQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1694854840393?e=2147483647&v=beta&t=uaF3LRmSHx1pYLqnHLAx5NfHA68KzPLK8vfUcr1BLB4)`,
//         }}
//       />
//     ),
//     className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
//   },
// ];

const features = [
  {
    Icon: PersonIcon,
    name: "Deep Domain Expertise",
    description:
      "Focused team with deep domain expertise in Workday, SAP and PeopleSoft.",
    href: "/",
    cta: "Learn more",
    background: (
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(/Gemini_Generated_Image_wjf8fawjf8fawjf8.png)`, // ✅ from public folder
        }}
      />
    ),
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: RocketIcon,
    name: "Accelerated Deployments",
    description:
      "Accelerated, client-specific deployments tailored to your business needs.",
    href: "/",
    cta: "Learn more",
    background: (
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(/Gemini_Generated_Image_cb9e35cb9e35cb9e.png)`, // ✅ from public folder
        }}
      />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: GlobeIcon,
    name: "24/7 Global Support",
    description:
      "24/7 support with global delivery model ensuring continuous service.",
    href: "/",
    cta: "Learn more",
    background: (
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(/Gemini_Generated_Image_ktsjrlktsjrlktsj.png)`, // ✅ from public folder
        }}
      />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: FiCpu,
    name: "Future-Ready Technology",
    description:
      "Cutting-edge tools and platforms to keep you ahead of the competition.",
    href: "/",
    cta: "Learn more",
    background: (
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(/Gemini_Generated_Image_s2udd6s2udd6s2ud.png)`, // ✅ from public folder
        }}
      />
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: StarIcon,
    name: "Proven Track Record",
    description:
      "Proven track record of successful Workday transformations with commitment to partnership and continuous innovation.",
    href: "/",
    cta: "Learn more",
    background: (
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(/Gemini_Generated_Image_tnuq3etnuq3etnuq.png)`, // ✅ from public folder
        }}
      />
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];




function WhyChooseUs() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-4">
          Why Choose Fortify Cloud Solutions
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Partner with us for enterprise-grade cloud solutions backed by expertise, innovation, and unwavering support.
        </p>
      </div>
      <BentoGrid className="lg:grid-rows-3">
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    </div>
  );
}

export default WhyChooseUs;
