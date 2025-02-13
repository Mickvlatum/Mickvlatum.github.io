import React, { Component } from "react";
import { motion } from "framer-motion";
import { fadeInUp, cardHover } from "../../utils/animations";
import { cardStyles } from "../../styles/common";
import { cn } from "../../utils/cn";
import { useTheme } from "../../contexts/ThemeContext";
interface CardProps {
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
  gradient?: boolean;
  hover?: boolean;
  onClick?: () => void;
}
export const Card = ({
  children,
  className,
  animate = true,
  gradient = false,
  hover = true,
  onClick
}: CardProps) => {
  const {
    theme
  } = useTheme();
  const isDark = theme === "dark";
  const Component = animate ? motion.div : "div";
  return <Component {...animate ? {
    ...fadeInUp,
    ...(hover ? cardHover : {})
  } : {}} onClick={onClick} className={cn(cardStyles.base, isDark ? cardStyles.dark.base : cardStyles.light.base, hover && (isDark ? cardStyles.dark.hover : cardStyles.light.hover), gradient && cardStyles.gradient, "backdrop-blur-sm", onClick && "cursor-pointer", className)}>
      {children}
    </Component>;
};