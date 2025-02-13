import React, { useState } from "react";
import { motion } from "framer-motion";
import { Palette, Eye, Sparkles, Send, Lightbulb } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";
interface NavigationHubProps {
  onSectionSelect: (section: string) => void;
}
const sections = [{
  id: "projects",
  icon: Eye,
  color: "purple",
  gradient: "from-purple-500/20 via-purple-400/20 to-purple-600/20",
  image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=800&auto=format&fit=crop&q=60"
}, {
  id: "about",
  icon: Lightbulb,
  color: "blue",
  gradient: "from-blue-500/20 via-indigo-400/20 to-indigo-600/20",
  image: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?w=800&auto=format&fit=crop&q=60"
}, {
  id: "skills",
  icon: Palette,
  color: "pink",
  gradient: "from-pink-500/20 via-purple-400/20 to-rose-600/20",
  image: "https://images.unsplash.com/photo-1550439062-609e1531270e?w=800&auto=format&fit=crop&q=60"
}, {
  id: "contact",
  icon: Send,
  color: "green",
  gradient: "from-emerald-500/20 via-green-400/20 to-teal-600/20",
  image: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?w=800&auto=format&fit=crop&q=60"
}];
export const NavigationHub = ({
  onSectionSelect
}: NavigationHubProps) => {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const {
    t
  } = useLanguage();
  const {
    theme
  } = useTheme();
  return <div className="absolute inset-0 flex flex-col items-center px-4 md:px-8 overflow-y-auto">
      <motion.div initial={{
      opacity: 0,
      y: -20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      delay: 0.2
    }} className="relative py-8 md:py-12 text-center">
        <motion.div animate={{
        rotate: 360,
        scale: [1, 1.1, 1]
      }} transition={{
        rotate: {
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        },
        scale: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }} className="absolute -inset-8 rounded-full border border-purple-500/20" />
        <div className="relative">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className={theme === "light" ? "text-gray-900" : "text-white"}>
              Mick
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-600">
              .
            </span>
          </h1>
          <motion.div initial={{
          width: 0
        }} animate={{
          width: "100%"
        }} transition={{
          delay: 0.5,
          duration: 0.8
        }} className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mb-4" />
          <p className={`text-lg md:text-xl font-light ${theme === "light" ? "text-gray-600" : "text-gray-300"} max-w-xl mx-auto`}>
            {t("home.subtitle")}
          </p>
        </div>
      </motion.div>
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {sections.map((section, index) => <motion.button key={section.id} initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: index * 0.1 + 0.5
      }} onHoverStart={() => setHoveredSection(section.id)} onHoverEnd={() => setHoveredSection(null)} onClick={() => onSectionSelect(section.id)} className="group relative h-[200px] overflow-hidden rounded-2xl border border-purple-500/20">
            <div className="absolute inset-0">
              <motion.img src={section.image} alt="" className="w-full h-full object-cover" animate={{
            scale: hoveredSection === section.id ? 1.1 : 1
          }} transition={{
            duration: 0.4
          }} />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black/90" />
            </div>
            <div className="relative z-10 h-full flex flex-col items-center justify-end p-6">
              <motion.div animate={{
            y: hoveredSection === section.id ? -5 : 0
          }} transition={{
            duration: 0.4
          }} className="flex flex-col items-center">
                <div className="relative mb-3">
                  <section.icon className="w-8 h-8 text-white" />
                  <motion.div animate={{
                opacity: hoveredSection === section.id ? 1 : 0,
                scale: hoveredSection === section.id ? 1.2 : 0.8
              }} transition={{
                duration: 0.3
              }} className="absolute -inset-2 rounded-full border border-white/20" />
                </div>
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">
                  {t(`nav.${section.id}`)}
                </h3>
                <p className="text-sm text-gray-300 text-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  {t(`nav.${section.id}_description`)}
                </p>
              </motion.div>
            </div>
            <motion.div className="absolute inset-0 pointer-events-none" animate={{
          opacity: hoveredSection === section.id ? 1 : 0
        }} transition={{
          duration: 0.3
        }}>
              <div className={`absolute inset-0 bg-gradient-to-br ${section.gradient} opacity-30`} />
              <Sparkles className="absolute bottom-4 right-4 w-5 h-5 text-white/40" />
            </motion.div>
          </motion.button>)}
      </div>
    </div>;
};