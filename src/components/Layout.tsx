import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { ArrowLeft } from "lucide-react";
import { AnimatedBackground } from "./AnimatedBackground";
import { cn } from "../utils/cn";
interface LayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  onBack?: () => void;
  actions?: React.ReactNode;
}
export const Layout = ({
  children,
  title,
  subtitle,
  onBack,
  actions
}: LayoutProps) => {
  const {
    theme
  } = useTheme();
  const isDark = theme === "dark";
  return <div className="min-h-screen relative">
      <div className="fixed inset-0 z-0">
        <AnimatedBackground />
      </div>
      <div className={cn("fixed inset-0 z-[1] backdrop-blur-[1px]", isDark ? "bg-black/30" : "bg-white/30")} />
      <div className="relative z-[2]">
        <div className={cn("sticky top-0 z-[40] border-b transition-colors duration-300", "backdrop-blur-md", isDark ? "bg-background-dark/80 border-purple-500/20" : "bg-background-light/80 border-purple-500/20")}>
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-6">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                {onBack && <button onClick={onBack} className={cn("p-2 rounded-full backdrop-blur-sm", "border transition-all duration-300", "hover:shadow-lg group", isDark ? "bg-black/30 border-purple-500/20 hover:border-purple-500/50 hover:shadow-purple-500/10" : "bg-white/10 border-purple-500/20 hover:border-purple-500/50 hover:shadow-purple-500/10")}>
                    <ArrowLeft className="w-5 h-5 text-purple-500 group-hover:text-purple-400 transition-colors" />
                  </button>}
                <div>
                  <h1 className={cn("text-xl md:text-2xl font-medium", isDark ? "text-white" : "text-black")}>
                    {title}
                  </h1>
                  {subtitle && <p className={cn("text-sm mt-1", isDark ? "text-neutral-400" : "text-neutral-500")}>
                      {subtitle}
                    </p>}
                </div>
              </div>
              {actions && <div className="flex items-center gap-4 overflow-x-auto pb-2 md:pb-0">
                  {actions}
                </div>}
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-8">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }}>
            {children}
          </motion.div>
        </div>
      </div>
    </div>;
};