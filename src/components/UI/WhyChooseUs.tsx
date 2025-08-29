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
  onClick,
}: {
  name: string;
  className?: string; // Make className optional as it's not always provided in features
  background: ReactNode;
  Icon: React.ElementType; // Use React.ElementType for component props
  description: string;
  href: string;
  cta: string;
  onClick?: () => void;
}) => (
  <div
    key={name}
    onClick={onClick}
    role="button"
    tabIndex={0}
    onKeyPress={(e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        onClick && onClick();
      }
    }}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl cursor-pointer select-none",
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
    </div>
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
  </div>
);

const features = [
  {
    Icon: PersonIcon,
    name: "Deep Domain Expertise",
    description:
      "Our focused team possesses unparalleled knowledge in Workday, SAP, and PeopleSoft environments.",
    href: "/",
    cta: "Learn more",
    background: (
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(/Gemini_Generated_Image_wjf8fawjf8fawjf8.png)`,
        }}
      />
    ),
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: RocketIcon,
    name: "Accelerated Deployments",
    description:
      "We utilize client-specific strategies to ensure rapid, efficient, and successful project rollouts.",
    href: "/",
    cta: "Learn more",
    background: (
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(/Gemini_Generated_Image_cb9e35cb9e35cb9e.png)`,
        }}
      />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: GlobeIcon,
    name: "24/7 Global Support",
    description:
      "Our global delivery model provides continuous, around-the-clock support for your critical systems.",
    href: "/",
    cta: "Learn more",
    background: (
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(/Gemini_Generated_Image_ktsjrlktsjrlktsj.png)`,
        }}
      />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: Cpu,
    name: "Commitment to Innovation",
    description:
      "We are dedicated to a long-term partnership, focusing on continuous improvement and innovation.",
    href: "/",
    cta: "Learn more",
    background: (
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(/Gemini_Generated_Image_s2udd6s2udd6s2ud.png)`,
        }}
      />
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: StarIcon,
    name: "Proven Track Record",
    description:
      "Our history is marked by a series of successful transformations and satisfied clients.",
    href: "/",
    cta: "Learn more",
    background: (
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(/Gemini_Generated_Image_tnuq3etnuq3etnuq.png)`,
        }}
      />
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

interface WhyChooseUsProps {
  onPageChange: (page: string) => void;
}

function WhyChooseUs({ onPageChange }: WhyChooseUsProps) {
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
          <BentoCard
            key={feature.name}
            {...feature}
            onClick={() => {
              onPageChange("contact");
              window.scrollTo({ top: 0, behavior: 'smooth' });
              
            }}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

export default WhyChooseUs;

