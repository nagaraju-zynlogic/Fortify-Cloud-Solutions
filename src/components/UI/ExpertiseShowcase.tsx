"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowRight, Link, Zap, Calendar, Code, FileText, User, Building2, Cog, Users, TrendingUp } from "lucide-react";
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";

// Utility function for cn (from shadcn/ui)
function cn(...inputs: (string | undefined | null | false)[]) {
  return inputs.filter(Boolean).join(" ");
}

// shadcn/badge
const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

// shadcn/button
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

// shadcn/card
const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className,
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className,
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

interface TimelineItem {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: React.ElementType;
  relatedIds: number[];
  status: "completed" | "in-progress" | "pending";
  energy: number;
}

interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
}

function RadialOrbitalTimeline({
  timelineData,
}: RadialOrbitalTimelineProps) {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>(
    {}
  );
  const [viewMode, setViewMode] = useState<"orbital">("orbital");
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
  const [centerOffset, setCenterOffset] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
      setAutoRotate(true);
    }
  };

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const newState = { ...prev };
      Object.keys(newState).forEach((key) => {
        if (parseInt(key) !== id) {
          newState[parseInt(key)] = false;
        }
      });

      newState[id] = !prev[id];

      if (!prev[id]) {
        setActiveNodeId(id);
        setAutoRotate(false);

        const relatedItems = getRelatedItems(id);
        const newPulseEffect: Record<number, boolean> = {};
        relatedItems.forEach((relId) => {
          newPulseEffect[relId] = true;
        });
        setPulseEffect(newPulseEffect);

        centerViewOnNode(id);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
        setPulseEffect({});
      }

      return newState;
    });
  };

  useEffect(() => {
    let rotationTimer: ReturnType<typeof setInterval> | undefined;

    if (autoRotate && viewMode === "orbital") {
      rotationTimer = setInterval(() => {
        setRotationAngle((prev) => {
          const newAngle = (prev + 0.3) % 360;
          return Number(newAngle.toFixed(3));
        });
      }, 50);
    }

    return () => {
      if (rotationTimer) {
        clearInterval(rotationTimer);
      }
    };
  }, [autoRotate, viewMode]);

  const centerViewOnNode = (nodeId: number) => {
    if (viewMode !== "orbital" || !nodeRefs.current[nodeId]) return;

    const nodeIndex = timelineData.findIndex((item) => item.id === nodeId);
    const totalNodes = timelineData.length;
    const targetAngle = (nodeIndex / totalNodes) * 360;

    setRotationAngle(270 - targetAngle);
  };

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radius = 200;
    const radian = (angle * Math.PI) / 180;

    const x = radius * Math.cos(radian) + centerOffset.x;
    const y = radius * Math.sin(radian) + centerOffset.y;

    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Math.max(
      0.4,
      Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2))
    );

    return { x, y, angle, zIndex, opacity };
  };

  const getRelatedItems = (itemId: number): number[] => {
    const currentItem = timelineData.find((item) => item.id === itemId);
    return currentItem ? currentItem.relatedIds : [];
  };

  const isRelatedToActive = (itemId: number): boolean => {
    if (!activeNodeId) return false;
    const relatedItems = getRelatedItems(activeNodeId);
    return relatedItems.includes(itemId);
  };

  const getStatusStyles = (status: TimelineItem["status"]): string => {
    switch (status) {
      case "completed":
        return "text-white bg-black border-white";
      case "in-progress":
        return "text-black bg-white border-black";
      case "pending":
        return "text-white bg-black/40 border-white/50";
      default:
        return "text-white bg-black/40 border-white/50";
    }
  };

  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden pt-4"
      ref={containerRef}
      onClick={handleContainerClick}
    >
      <div>
        <h1 className="text-5xl font-bold text-white mb-4 text-center">Our Expertise</h1>
        <p className="text-xl text-blue-200 max-w-2xl mx-auto text-center">
          Comprehensive Enterprise Solutions & Support Services
        </p>
      </div>

      <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
        <div
          className="absolute w-full h-full flex items-center justify-center"
          ref={orbitRef}
          style={{
            perspective: "1000px",
            transform: `translate(${centerOffset.x}px, ${centerOffset.y}px)`,
          }}
        >
          <div className="absolute w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 animate-pulse flex items-center justify-center z-10">
            <div className="absolute w-24 h-24 rounded-full border border-blue-300/30 animate-ping opacity-70"></div>
            <div
              className="absolute w-28 h-28 rounded-full border border-indigo-300/20 animate-ping opacity-50"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center">
              {/* <Building2 size={20} className="text-blue-600" /> */}
              <img src="logo-removebg-preview.png" alt="logo" className="w-10 h-10" />
            </div>
          </div>

          <div className="absolute w-96 h-96 rounded-full border border-white/10"></div>

          {timelineData.map((item, index) => {
            const position = calculateNodePosition(index, timelineData.length);
            const isExpanded = expandedItems[item.id];
            const isRelated = isRelatedToActive(item.id);
            const isPulsing = pulseEffect[item.id];
            const Icon = item.icon;

            const nodeStyle = {
              transform: `translate(${position.x}px, ${position.y}px)`,
              zIndex: isExpanded ? 200 : position.zIndex,
              opacity: isExpanded ? 1 : position.opacity,
            };

            return (
              <div
                key={item.id}
                ref={(el: HTMLDivElement | null) => {
                  nodeRefs.current[item.id] = el;
                }}
                className="absolute transition-all duration-700 cursor-pointer"
                style={nodeStyle}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleItem(item.id);
                }}
              >
                <div
                  className={`absolute rounded-full -inset-1 ${
                    isPulsing ? "animate-pulse duration-1000" : ""
                  }`}
                  style={{
                    background: `radial-gradient(circle, rgba(59,130,246,0.3) 0%, rgba(59,130,246,0) 70%)`,
                    width: `${item.energy * 0.6 + 50}px`,
                    height: `${item.energy * 0.6 + 50}px`,
                    left: `-${(item.energy * 0.6 + 50 - 50) / 2}px`,
                    top: `-${(item.energy * 0.6 + 50 - 50) / 2}px`,
                  }}
                ></div>

                <div
                  className={`
                  w-12 h-12 rounded-full flex items-center justify-center
                  ${
                    isExpanded
                      ? "bg-white text-blue-600"
                      : isRelated
                      ? "bg-blue-400 text-white"
                      : "bg-slate-800 text-blue-200"
                  }
                  border-2 
                  ${
                    isExpanded
                      ? "border-blue-300 shadow-lg shadow-blue-500/30"
                      : isRelated
                      ? "border-blue-300 animate-pulse"
                      : "border-blue-500/40"
                  }
                  transition-all duration-300 transform
                  ${isExpanded ? "scale-150" : ""}
                `}
                >
                  <Icon size={18} />
                </div>

                <div
                  className={`
                  absolute top-14 left-1/2 -translate-x-1/2 whitespace-nowrap
                  text-xs font-semibold tracking-wider text-center
                  transition-all duration-300
                  ${isExpanded ? "text-white scale-125" : "text-blue-200/80"}
                `}
                >
                  {item.title}
                </div>

                {isExpanded && (
                  <Card className="absolute top-24 left-1/2 -translate-x-1/2 w-80 bg-slate-800/95 backdrop-blur-lg border-blue-300/30 shadow-xl shadow-blue-500/20 overflow-visible">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-blue-400/60"></div>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        {/* <Badge className="px-3 py-1 text-xs bg-blue-600 text-white border-blue-400">
                          EXPERTISE AREA
                        </Badge> */}
                        <span className="text-xs font-mono text-blue-600 bg-white border rounded-full px-2 py-1">
                          {item.date}
                        </span>
                      </div>
                      <CardTitle className="text-lg mt-2 pt-4 text-blue-600">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-blue-100">
                      <p>{item.content}</p>

                      {/* <div className="mt-4 pt-3 border-t border-slate-600">
                        <div className="flex justify-between items-center text-sm mb-2">
                          <span className="flex items-center text-blue-200">
                            <TrendingUp size={14} className="mr-2" />
                            Expertise Level
                          </span>
                          <span className="font-semibold text-white">{item.energy}%</span>
                        </div>
                        <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full"
                            style={{ width: `${item.energy}%` }}
                          ></div>
                        </div>
                      </div> */}

                      {item.relatedIds.length > 0 && (
                        <div className="mt-4 pt-3 border-t border-slate-600">
                          <div className="flex items-center mb-2">
                            <Link size={14} className="text-blue-300 mr-2" />
                            <h4 className="text-sm uppercase tracking-wider font-medium text-blue-200">
                              Related Services
                            </h4>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {item.relatedIds.map((relatedId) => {
                              const relatedItem = timelineData.find(
                                (i) => i.id === relatedId
                              );
                              return (
                                <Button
                                  key={relatedId}
                                  variant="outline"
                                  size="sm"
                                  className="flex items-center h-7 px-3 py-0 text-xs rounded-md border-blue-400/30 bg-blue-800/30 hover:bg-blue-700/50 text-blue-100 hover:text-white transition-all"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleItem(relatedId);
                                  }}
                                >
                                  {relatedItem?.title}
                                  <ArrowRight
                                    size={10}
                                    className="ml-1 text-blue-300"
                                  />
                                </Button>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <style jsx global>{`
        /* Animation for the pulsing effect */
        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        /* Animation for the ping effect */
        @keyframes ping {
          75%,
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        /* Custom animations for the orbital timeline */
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .animate-ping {
          animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        /* Transitions */
        .transition-all {
          transition-property: all;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }

        .duration-300 {
          transition-duration: 300ms;
        }

        .duration-700 {
          transition-duration: 700ms;
        }

        .duration-1000 {
          transition-duration: 1000ms;
        }

        /* Backdrop blur */
        .backdrop-blur-lg {
          backdrop-filter: blur(16px);
        }

        /* Custom gradients */
        .bg-gradient-orbital {
          background: linear-gradient(to bottom right, #6366f1, #3b82f6, #14b8a6);
        }

        /* Z-index utilities */
        .z-10 {
          z-index: 10;
        }

        .z-50 {
          z-index: 50;
        }

        /* Custom shadows */
        .shadow-orbital {
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.1);
        }

        /* Custom transforms */
        .scale-125 {
          transform: scale(1.25);
        }

        .scale-150 {
          transform: scale(1.5);
        }

        /* Custom opacity values */
        .opacity-70 {
          opacity: 0.7;
        }

        .opacity-50 {
          opacity: 0.5;
        }

        /* Custom border opacity */
        .border-white\\/10 {
          border-color: rgba(255, 255, 255, 0.1);
        }

        .border-white\\/20 {
          border-color: rgba(255, 255, 255, 0.2);
        }

        .border-white\\/30 {
          border-color: rgba(255, 255, 255, 0.3);
        }

        .border-white\\/40 {
          border-color: rgba(255, 255, 255, 0.4);
        }

        /* Custom background opacity */
        .bg-black\\/90 {
          background-color: rgba(0, 0, 0, 0.9);
        }

        .bg-white\\/50 {
          background-color: rgba(255, 255, 255, 0.5);
        }

        .bg-white\\/80 {
          background-color: rgba(255, 255, 255, 0.8);
        }

        /* Custom text opacity */
        .text-white\\/70 {
          color: rgba(255, 255, 255, 0.7);
        }

        .text-white\\/80 {
          color: rgba(255, 255, 255, 0.8);
        }
      `}</style>
    </div>
  );
}

const expertiseData = [
  {
    id: 1,
    title: "Workday Services",
    date: "HCM • Finance • Payroll",
    content: "Complete Workday implementation, configuration, and optimization. Expert HCM, Finance, and Payroll module deployment with business process alignment.",
    category: "Enterprise Solutions",
    icon: User,
    relatedIds: [2, 5],
    status: "completed" as const,
    energy: 95,
  },
  {
    id: 2,
    title: "SAP Solutions",
    date: "Full-Stack Implementation",
    content: "End-to-end SAP implementation including HCM, Finance, and Payroll modules. Custom workflows and business process optimization.",
    category: "Enterprise Solutions",
    icon: Code,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 3,
    title: "PeopleSoft Expertise",
    date: "Benefits • HCM • Finance",
    content: "Comprehensive PeopleSoft services including Benefits administration, HCM optimization, and Financial management solutions.",
    category: "Enterprise Solutions",
    icon: FileText,
    relatedIds: [2, 4],
    status: "completed" as const,
    energy: 88,
  },
  {
    id: 4,
    title: "Custom Integrations",
    date: "API • Data • Reporting",
    content: "Seamless system integrations, custom API development, and advanced reporting solutions. Data migration and real-time synchronization.",
    category: "Technical Solutions",
    icon: Link,
    relatedIds: [3, 5],
    status: "completed" as const,
    energy: 85,
  },
  {
    id: 5,
    title: "Change Management",
    date: "Training • Support • Optimization",
    content: "Comprehensive change management, user training programs, and continuous improvement strategies for sustained success.",
    category: "Support Services",
    icon: Calendar,
    relatedIds: [1, 4],
    status: "completed" as const,
    energy: 92,
  },
];

export function ExpertiseShowcase() {
  return (
    <>
    
      <RadialOrbitalTimeline timelineData={expertiseData} />
    </>
  );
}

export default ExpertiseShowcase;