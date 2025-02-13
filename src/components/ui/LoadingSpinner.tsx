import React from "react";
import { cn } from "../../utils/cn";
interface LoadingSpinnerProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}
export const LoadingSpinner = ({
  className,
  size = "md"
}: LoadingSpinnerProps) => {
  const sizes = {
    sm: "w-1.5 h-1.5",
    md: "w-2 h-2",
    lg: "w-3 h-3"
  };
  return <div className={cn("flex gap-2", className)}>
      {[0, 0.2, 0.4].map((delay, index) => <span key={index} className={cn(sizes[size], "bg-purple-500/50 rounded-full animate-bounce", delay && `[animation-delay:${delay}s]`)} />)}
    </div>;
};