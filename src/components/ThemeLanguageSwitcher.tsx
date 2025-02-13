import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Globe } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";
import { cn } from "../utils/cn";
export const ThemeLanguageSwitcher = () => {
  const {
    theme,
    toggleTheme
  } = useTheme();
  const {
    language,
    setLanguage
  } = useLanguage();
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const isDark = theme === "dark";
  const buttonClasses = cn("p-3 rounded-full backdrop-blur-sm", "border transition-all duration-300", "hover:shadow-lg hover:shadow-purple-500/10", isDark ? "bg-black/30 border-purple-500/20 hover:border-purple-500/50" : "bg-white/80 border-purple-500/20 hover:border-purple-500/50");
  return <div className="fixed top-4 md:top-6 right-4 md:right-6 flex items-center gap-3 z-50">
      <motion.button whileHover={{
      scale: 1.05
    }} whileTap={{
      scale: 0.95
    }} onClick={toggleTheme} className={buttonClasses} aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}>
        {theme === "dark" ? <Sun className="w-5 h-5 text-purple-500" /> : <Moon className="w-5 h-5 text-purple-500" />}
      </motion.button>
      <div className="relative">
        <motion.button whileHover={{
        scale: 1.05
      }} whileTap={{
        scale: 0.95
      }} onClick={() => setIsLangMenuOpen(!isLangMenuOpen)} className={buttonClasses} aria-label="Change language">
          <Globe className="w-5 h-5 text-purple-500" />
        </motion.button>
        <AnimatePresence>
          {isLangMenuOpen && <motion.div initial={{
          opacity: 0,
          y: -10
        }} animate={{
          opacity: 1,
          y: 0
        }} exit={{
          opacity: 0,
          y: -10
        }} className="absolute top-full right-0 mt-2">
              <div className={cn("rounded-lg overflow-hidden p-1 shadow-lg min-w-[120px]", "backdrop-blur-sm border", isDark ? "bg-black/80 border-purple-500/20" : "bg-white/90 border-purple-500/20")}>
                {["en", "nl"].map(lang => <button key={lang} onClick={() => {
              setLanguage(lang as "en" | "nl");
              setIsLangMenuOpen(false);
            }} className={cn("block w-full px-4 py-2 text-sm rounded-md transition-all duration-300", language === lang ? "bg-purple-500 text-white" : isDark ? "text-gray-200 hover:bg-purple-500/10" : "text-gray-800 hover:bg-purple-500/10")}>
                    {lang === "en" ? "English" : "Nederlands"}
                  </button>)}
              </div>
            </motion.div>}
        </AnimatePresence>
      </div>
    </div>;
};