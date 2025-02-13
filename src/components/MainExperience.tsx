import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavigationHub } from "./NavigationHub";
import { ProjectShowcase } from "./ProjectShowcase";
import { AnimatedBackground } from "./AnimatedBackground";
import { AIGuide } from "./AIGuide";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";
import { ArrowDown, ExternalLink } from "lucide-react";
export const MainExperience = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const {
    theme
  } = useTheme();
  const {
    t
  } = useLanguage();
  const isDark = theme === "dark";
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  if (activeSection) {
    return <ProjectShowcase section={activeSection} onBack={() => setActiveSection(null)} />;
  }
  return <div className="w-full min-h-screen relative bg-background-light dark:bg-background-dark">
      <div className="fixed inset-0 overflow-hidden">
        <AnimatedBackground />
      </div>
      <div className={`fixed inset-0 z-[1] ${isDark ? "bg-black/30" : "bg-white/30"} backdrop-blur-[1px]`} />
      <motion.header initial={{
      y: -20,
      opacity: 0
    }} animate={{
      y: 0,
      opacity: 1
    }} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md" : ""}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div initial={{
          opacity: 0,
          scale: 0.8
        }} animate={{
          opacity: 1,
          scale: 1
        }} className="flex items-center gap-2">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-600">
              MP
            </span>
          </motion.div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm hover:text-purple-500 transition-colors" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </motion.header>
      <section className="relative z-[2] min-h-screen flex flex-col items-center justify-center px-4">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} className="text-center max-w-4xl mx-auto">
          <motion.div initial={{
          height: 0
        }} animate={{
          height: "auto"
        }} className="overflow-hidden mb-6">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              <span className={isDark ? "text-white" : "text-gray-900"}>
                {t("home.crafting.title")}{" "}
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-600">
                {t("home.crafting.highlight")}
              </span>
            </h1>
          </motion.div>
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.2
        }} className={`text-xl md:text-2xl mb-12 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
            {t("home.crafting.description")}
          </motion.p>
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.4
        }} className="flex flex-col items-center gap-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {["projects", "about", "skills", "contact"].map((section, index) => <motion.button key={section} onClick={() => setActiveSection(section)} initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.1 * index
            }} whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} className={`group relative overflow-hidden rounded-2xl border border-purple-500/20 
                    p-6 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-300
                    ${isDark ? "bg-black/20" : "bg-white/20"}`}>
                    <div className="relative z-10">
                      <h3 className={`text-lg font-medium mb-2 ${isDark ? "text-white" : "text-gray-900"} group-hover:text-purple-500 transition-colors`}>
                        {t(`nav.${section}`)}
                      </h3>
                      <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"} group-hover:text-purple-400 transition-colors`}>
                        {t(`nav.${section}_description`)}
                      </p>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </motion.button>)}
            </div>
          </motion.div>
        </motion.div>
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 0.8
      }} className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <motion.div animate={{
          y: [0, 10, 0]
        }} transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}>
            <ArrowDown className="w-6 h-6 text-purple-500" />
          </motion.div>
        </motion.div>
      </section>
      <div className="relative z-[50]">
        <AIGuide />
      </div>
    </div>;
};