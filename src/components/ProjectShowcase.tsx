import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { AboutSection } from "./sections/AboutSection";
import { SkillsSection } from "./sections/SkillsSection";
import { ContactSection } from "./sections/ContactSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { cn } from "../utils/cn";
interface ProjectShowcaseProps {
  section: string;
  onBack: () => void;
}
export const ProjectShowcase = ({
  section,
  onBack
}: ProjectShowcaseProps) => {
  const renderSection = () => {
    switch (section) {
      case "projects":
        return <ProjectsSection />;
      case "about":
        return <AboutSection />;
      case "skills":
        return <SkillsSection />;
      case "contact":
        return <ContactSection />;
      default:
        return null;
    }
  };
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} exit={{
    opacity: 0,
    y: 20
  }} className="absolute inset-0 overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-purple-500/20">
      <button onClick={onBack} className={cn("fixed top-4 md:top-6 left-4 md:left-6", "p-3 rounded-full backdrop-blur-sm", "border border-purple-500/20", "hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10", "transition-all duration-300 group z-50", "dark:bg-black/30 bg-white/80")}>
        <ArrowLeft className="w-5 h-5 text-purple-500 group-hover:text-purple-400 transition-colors" />
      </button>
      {renderSection()}
    </motion.div>;
};