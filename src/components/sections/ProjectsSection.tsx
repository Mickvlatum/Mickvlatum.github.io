import React, { useState, Component } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Star, ChevronRight, ArrowRight } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";
import { useLanguage } from "../../contexts/LanguageContext";
import { Layout } from "../Layout";
import { Card } from "../ui/Card";
import { cn } from "../../utils/cn";
const projects = [{
  id: 1,
  title: "AI-Powered Design System",
  description: "Revolutionary design system leveraging Kling AI for automated component generation and optimization. Reduced design-to-development time by 60%.",
  image: "https://images.unsplash.com/photo-1642427749670-f20e2e76ed8c?w=800&auto=format&fit=crop&q=60",
  technologies: ["React", "Kling AI", "TypeScript", "Framer Motion"],
  category: "AI & Design",
  stats: [{
    label: "Time Saved",
    value: "60%"
  }, {
    label: "Components",
    value: "200+"
  }, {
    label: "Efficiency",
    value: "95%"
  }],
  link: "#",
  github: "#",
  featured: true
}, {
  id: 2,
  title: "E-commerce Platform",
  description: "High-performance e-commerce platform with advanced animations and AI-powered product recommendations",
  image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&auto=format&fit=crop&q=60",
  technologies: ["Next.js", "Flux Pro Ultra", "Stripe", "TailwindCSS"],
  category: "Web Development",
  stats: [{
    label: "Conversion Rate",
    value: "+45%"
  }, {
    label: "Page Speed",
    value: "98/100"
  }, {
    label: "Sales Growth",
    value: "2.5x"
  }],
  link: "#",
  github: "#",
  featured: true
}, {
  id: 3,
  title: "Motion Design System",
  description: "Comprehensive animation library and motion design system for web applications",
  image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=60",
  technologies: ["Framer Motion", "GSAP", "React", "TypeScript"],
  category: "UI/UX Design",
  stats: [{
    label: "Animations",
    value: "150+"
  }, {
    label: "Performance",
    value: "60fps"
  }, {
    label: "Bundle Size",
    value: "12kb"
  }],
  link: "#",
  github: "#",
  featured: true
}];
export const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const {
    theme
  } = useTheme();
  const {
    t
  } = useLanguage();
  const categories = Array.from(new Set(projects.map(p => p.category)));
  const filteredProjects = selectedCategory ? projects.filter(p => p.category === selectedCategory) : projects;
  const isDark = theme === "dark";
  return <div className="min-h-screen py-12 md:py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} className="text-center mb-12 md:mb-16">
          <motion.div initial={{
          width: 0
        }} animate={{
          width: "100%"
        }} transition={{
          delay: 0.5,
          duration: 0.8
        }} className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mb-6 md:mb-8" />
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 px-4">
            <span className={isDark ? "text-white" : "text-gray-900"}>
              {t("projects.title")}
            </span>
          </h2>
          <p className={`text-lg md:text-xl ${isDark ? "text-gray-400" : "text-gray-600"} max-w-3xl mx-auto mb-8 px-4`}>
            {t("projects.subtitle")}
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <FilterButton isSelected={!selectedCategory} onClick={() => setSelectedCategory(null)}>
              {t("projects.view_all")}
            </FilterButton>
            {categories.map(category => <FilterButton key={category} isSelected={selectedCategory === category} onClick={() => setSelectedCategory(category)}>
                {category}
              </FilterButton>)}
          </div>
        </motion.div>
        <div className="grid grid-cols-1 gap-8 mb-12">
          {filteredProjects.filter(p => p.featured).map((project, index) => <motion.div key={project.id} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: index * 0.1
        }}>
                <Card gradient hover className="group overflow-hidden">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative h-64 md:h-full rounded-xl overflow-hidden">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                    <div className="p-6 flex flex-col">
                      <div className="mb-4 flex items-center gap-3">
                        {project.featured && <span className="text-xs px-2 py-1 rounded-full bg-purple-500/10 
                                     text-purple-400 border border-purple-500/20">
                            {t("projects.featured")}
                          </span>}
                        <span className={`text-sm ${isDark ? "text-neutral-400" : "text-neutral-500"}`}>
                          {project.category}
                        </span>
                      </div>
                      <h3 className={`text-2xl font-bold mb-3 ${isDark ? "text-white" : "text-black"} 
                                group-hover:text-purple-400 transition-colors`}>
                        {project.title}
                      </h3>
                      <p className={`text-base mb-6 ${isDark ? "text-neutral-300" : "text-neutral-600"}`}>
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map(tech => <span key={tech} className="px-2 py-1 text-sm rounded-full bg-purple-500/10 
                                   text-purple-400 border border-purple-500/20">
                            {tech}
                          </span>)}
                      </div>
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        {project.stats.map((stat, index) => <div key={index} className="space-y-1">
                            <div className={`text-lg font-semibold ${isDark ? "text-purple-400" : "text-purple-500"}`}>
                              {stat.value}
                            </div>
                            <div className={`text-sm ${isDark ? "text-neutral-400" : "text-neutral-500"}`}>
                              {stat.label}
                            </div>
                          </div>)}
                      </div>
                      <div className="flex items-center gap-4 mt-auto">
                        <ProjectLink href={project.link} icon={ExternalLink}>
                          {t("projects.live_demo")}
                        </ProjectLink>
                        <ProjectLink href={project.github} icon={Github}>
                          {t("projects.source_code")}
                        </ProjectLink>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>)}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.filter(p => !p.featured).map((project, index) => <motion.div key={project.id} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: index * 0.1
        }}>
                <Card gradient hover className="group h-full">
                  <div className="relative h-48 overflow-hidden rounded-t-xl">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="p-6">
                    <div className="mb-4 flex items-center gap-3">
                      <span className={`text-sm ${isDark ? "text-neutral-400" : "text-neutral-500"}`}>
                        {project.category}
                      </span>
                    </div>
                    <h3 className={`text-xl font-bold mb-3 ${isDark ? "text-white" : "text-black"} 
                              group-hover:text-purple-400 transition-colors`}>
                      {project.title}
                    </h3>
                    <p className={`text-sm mb-4 ${isDark ? "text-neutral-300" : "text-neutral-600"}`}>
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map(tech => <span key={tech} className="px-2 py-1 text-xs rounded-full bg-purple-500/10 
                                 text-purple-400 border border-purple-500/20">
                          {tech}
                        </span>)}
                    </div>
                    <div className="flex items-center gap-4 mt-4">
                      <ProjectLink href={project.link} icon={ExternalLink}>
                        {t("projects.live_demo")}
                      </ProjectLink>
                      <ProjectLink href={project.github} icon={Github}>
                        {t("projects.source_code")}
                      </ProjectLink>
                    </div>
                  </div>
                </Card>
              </motion.div>)}
        </div>
      </div>
    </div>;
};
interface FilterButtonProps {
  children: React.ReactNode;
  isSelected: boolean;
  onClick: () => void;
}
const FilterButton = ({
  children,
  isSelected,
  onClick
}: FilterButtonProps) => <button onClick={onClick} className={cn("px-4 py-2 rounded-xl border transition-colors text-sm", isSelected ? "border-purple-500 bg-purple-500/10 text-purple-400" : "border-purple-500/20 hover:border-purple-500/40 text-gray-400 hover:text-purple-400")}>
    {children}
  </button>;
interface ProjectLinkProps {
  href: string;
  icon: React.ElementType;
  children: React.ReactNode;
}
const ProjectLink = ({
  href,
  icon: Icon,
  children
}: ProjectLinkProps) => <a href={href} className="group inline-flex items-center gap-2 text-purple-400 
             hover:text-purple-300 transition-colors">
    <span className="text-sm font-medium">{children}</span>
    <Icon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
  </a>;