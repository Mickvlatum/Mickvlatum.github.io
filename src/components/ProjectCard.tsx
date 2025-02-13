import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { cardStyles, buttonStyles } from "../styles/common";
interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    category: string;
    stats: Array<{
      label: string;
      value: string;
    }>;
    link: string;
    github: string;
    featured: boolean;
  };
  isDark: boolean;
}
export const ProjectCard = memo(({
  project,
  isDark
}: ProjectCardProps) => {
  return <motion.article initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} exit={{
    opacity: 0,
    y: -20
  }} className={`${cardStyles.base} ${cardStyles.hover} group`}>
      {/* ... rest of the component implementation */}
    </motion.article>;
});
ProjectCard.displayName = "ProjectCard";