import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { buttonStyles } from "../../styles/common";
import { cn } from "../../utils/cn";
import { hoverScale } from "../../utils/animations";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof buttonStyles.variants;
  size?: keyof typeof buttonStyles.sizes;
  isLoading?: boolean;
  icon?: React.ReactNode;
}
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  children,
  variant = "primary",
  size = "md",
  isLoading,
  icon,
  className,
  ...props
}, ref) => {
  return <motion.button ref={ref} {...hoverScale} disabled={isLoading || props.disabled} className={cn(buttonStyles.base, buttonStyles.variants[variant], buttonStyles.sizes[size], props.disabled && "opacity-50 cursor-not-allowed", className)} {...props}>
        {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
        {!isLoading && icon}
        {children}
      </motion.button>;
});
Button.displayName = "Button";