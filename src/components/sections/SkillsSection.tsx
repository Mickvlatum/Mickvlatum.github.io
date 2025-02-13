import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Globe, Database, Cloud, Cpu, Palette, Star, ChevronRight, ArrowRight } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import { useTheme } from "../../contexts/ThemeContext";
import { Card } from "../ui/Card";
const skills = [{
  category: "Web Development",
  icon: Code,
  description: "Building scalable, performant web applications with modern technologies",
  image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop&q=60",
  skills: [{
    name: "React & Next.js",
    level: 95,
    projects: 42
  }, {
    name: "Advanced CSS/SCSS",
    level: 92,
    projects: 56
  }, {
    name: "JavaScript/TypeScript",
    level: 90,
    projects: 48
  }, {
    name: "WordPress Development",
    level: 88,
    projects: 35
  }]
}, {
  category: "UI/UX Design",
  icon: Palette,
  description: "Creating intuitive, accessible, and visually stunning user experiences",
  image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop&q=60",
  skills: [{
    name: "Interaction Design",
    level: 94,
    projects: 38
  }, {
    name: "Motion Design",
    level: 90,
    projects: 29
  }, {
    name: "Responsive Design",
    level: 96,
    projects: 52
  }, {
    name: "Design Systems",
    level: 88,
    projects: 24
  }]
}, {
  category: "AI & Automation",
  icon: Cpu,
  description: "Leveraging AI for enhanced digital experiences and workflow automation",
  image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60",
  skills: [{
    name: "Kling AI Integration",
    level: 92,
    projects: 18
  }, {
    name: "Flux Pro Ultra",
    level: 88,
    projects: 15
  }, {
    name: "API Automation",
    level: 86,
    projects: 28
  }, {
    name: "AI-Driven UX",
    level: 85,
    projects: 12
  }]
}];
export const SkillsSection = () => {
  const {
    t
  } = useLanguage();
  const {
    theme
  } = useTheme();
  const isDark = theme === "dark";
  const [activeCategory, setActiveCategory] = useState<number>(0);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  return <div className="min-h-screen py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} className="text-center mb-16">
          <motion.div initial={{
          width: 0
        }} animate={{
          width: "100%"
        }} transition={{
          delay: 0.5,
          duration: 0.8
        }} className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mb-8" />
          <h2 className="text-6xl md:text-7xl font-bold mb-6">
            <span className={`${theme === "light" ? "text-gray-900" : "text-white"}`}>
              Creative
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-600">
              {" "}
              Arsenal
            </span>
          </h2>
          <p className={`text-xl ${theme === "light" ? "text-gray-600" : "text-gray-400"} max-w-2xl mx-auto`}>
            {t("skills.subtitle")}
          </p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {skills.map((category, index) => <motion.button key={category.category} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: index * 0.1
        }} onClick={() => setActiveCategory(index)} className={`relative group overflow-hidden rounded-2xl border transition-all duration-500
                ${activeCategory === index ? "border-purple-500 ring-2 ring-purple-500/20 ring-offset-2 ring-offset-background-light dark:ring-offset-background-dark" : "border-purple-500/20"}`}>
              <div className="absolute inset-0">
                <img src={category.image} alt={category.category} className="w-full h-full object-cover transition-transform duration-500 
                           group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90" />
              </div>
              <div className="relative p-6 md:p-8">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl backdrop-blur-sm 
                                 border border-purple-500/30 flex items-center justify-center
                                 transition-all duration-300 group-hover:scale-110
                                 ${activeCategory === index ? "bg-purple-500" : "bg-purple-500/20"}`}>
                    <category.icon className={`w-6 h-6 transition-colors duration-300
                      ${activeCategory === index ? "text-white" : "text-purple-400"}`} />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">
                      {category.category}
                    </h3>
                    <p className="text-sm text-gray-400 transition-colors group-hover:text-gray-300">
                      {category.description}
                    </p>
                  </div>
                  <motion.div animate={{
                x: activeCategory === index ? 5 : 0
              }} transition={{
                duration: 0.2
              }}>
                    <ArrowRight className={`w-5 h-5 transition-all duration-300
                      ${activeCategory === index ? "text-purple-400" : "text-purple-500/60"}`} />
                  </motion.div>
                </div>
              </div>
            </motion.button>)}
        </div>
        <AnimatePresence mode="wait">
          <motion.div key={activeCategory} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} exit={{
          opacity: 0,
          y: -20
        }} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills[activeCategory].skills.map((skill, index) => <motion.div key={skill.name} initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            delay: index * 0.1
          }} onHoverStart={() => setHoveredSkill(skill.name)} onHoverEnd={() => setHoveredSkill(null)} className={`relative group overflow-hidden rounded-xl border transition-all duration-300
                  ${isDark ? "bg-black/40" : "bg-white/60"} backdrop-blur-sm
                  ${hoveredSkill === skill.name ? "border-purple-500 transform scale-[1.02]" : "border-purple-500/20"}`}>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent 
                               opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-6">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h4 className={`text-xl font-semibold mb-2 transition-colors duration-300
                        ${isDark ? "text-white group-hover:text-purple-400" : "text-gray-900 group-hover:text-purple-600"}`}>
                        {skill.name}
                      </h4>
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-purple-500" />
                        <span className="text-sm text-purple-400">
                          {skill.projects} {t("skills.projects")}
                        </span>
                      </div>
                    </div>
                    <div className={`text-2xl font-bold transition-colors duration-300
                      ${isDark ? "text-purple-400" : "text-purple-600"}`}>
                      {skill.level}%
                    </div>
                  </div>
                  <div className="relative h-2 bg-purple-500/10 rounded-full overflow-hidden">
                    <motion.div initial={{
                  width: 0
                }} animate={{
                  width: `${skill.level}%`
                }} transition={{
                  duration: 1.5,
                  ease: "easeOut"
                }} className="absolute h-full bg-gradient-to-r from-purple-600 to-purple-400" />
                  </div>
                  <motion.div initial={{
                opacity: 0
              }} animate={{
                opacity: hoveredSkill === skill.name ? 1 : 0
              }} className="absolute bottom-4 right-4">
                    <div className="w-2 h-2 rounded-full bg-purple-500 animate-ping" />
                  </motion.div>
                </div>
              </motion.div>)}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>;
};