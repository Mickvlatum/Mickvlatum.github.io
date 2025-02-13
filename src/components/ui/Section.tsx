import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";
import { layoutStyles } from "../../styles/common";
import { fadeInUp } from "../../utils/animations";
interface SectionProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  gradient?: boolean;
}
export const Section = ({
  children,
  className,
  title,
  subtitle,
  gradient
}: SectionProps) => {
  return <section className={cn(layoutStyles.section, className)}>
      <div className={layoutStyles.container}>
        {(title || subtitle) && <motion.div {...fadeInUp} className="text-center mb-16">
            {gradient && <motion.div initial={{
          width: 0
        }} animate={{
          width: "100%"
        }} transition={{
          delay: 0.5,
          duration: 0.8
        }} className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mb-8" />}
            {title && <h2 className={cn(textStyles.h1, "mb-6")}>{title}</h2>}
            {subtitle && <p className={cn(textStyles.body, "max-w-2xl mx-auto")}>
                {subtitle}
              </p>}
          </motion.div>}
        {children}
      </div>
    </section>;
};