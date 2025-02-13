import React from "react";
import { motion } from "framer-motion";
import { Code, Sparkles, GraduationCap, ChevronRight, Lightbulb, Rocket, Target, Layout, Cpu, Youtube, Brush, Brain, Zap, Glasses, LineChart } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import { useTheme } from "../../contexts/ThemeContext";
import { Card } from "../ui/Card";
const skills = [{
  category: "Technical Skills",
  icon: Code,
  items: ["Frontend Development", "Performance Optimization", "SEO Best Practices", "Clean Code Architecture"]
}, {
  category: "Design Skills",
  icon: Brush,
  items: ["UI/UX Design", "Motion Design", "Design Systems", "Prototyping"]
}, {
  category: "AI & Automation",
  icon: Brain,
  items: ["AI Content Generation", "Workflow Automation", "AI Model Training", "Data Analysis"]
}];
const expertise = [{
  key: "developer",
  icon: Lightbulb,
  gradient: "from-amber-500 to-orange-600"
}, {
  key: "designer",
  icon: Brush,
  gradient: "from-purple-500 to-pink-600"
}, {
  key: "ai",
  icon: Brain,
  gradient: "from-blue-500 to-cyan-600"
}];
const timeline = [{
  key: "webdev",
  icon: Code,
  image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop&q=60"
}, {
  key: "uiux",
  icon: Layout,
  image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=800&auto=format&fit=crop&q=60"
}, {
  key: "ai",
  icon: Cpu,
  image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60"
}, {
  key: "fullstack",
  icon: Rocket,
  image: "https://images.unsplash.com/photo-1550439062-609e1531270e?w=800&auto=format&fit=crop&q=60"
}];
export const AboutSection = () => {
  const {
    t
  } = useLanguage();
  const {
    theme
  } = useTheme();
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
              {t("about.title.main")}
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-600">
              {" "}
              {t("about.title.highlight")}
            </span>
          </h2>
          <p className={`text-lg md:text-xl ${isDark ? "text-gray-400" : "text-gray-600"} max-w-3xl mx-auto mb-4 px-4`}>
            {t("about.subtitle")}
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-20">
          {expertise.map((item, index) => <motion.div key={item.key} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: index * 0.1
        }} className="relative group">
              <Card gradient hover className="p-4 md:p-6">
                <div className="relative z-10">
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br ${item.gradient} p-0.5 mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="w-full h-full rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                      <item.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                  </div>
                  <h3 className={`text-lg md:text-xl font-bold mb-2 ${isDark ? "text-white" : "text-gray-900"} group-hover:text-purple-400 transition-colors`}>
                    {t(`about.expertise.${item.key}.title`)}
                  </h3>
                  <p className={`text-sm md:text-base ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                    {t(`about.expertise.${item.key}.description`)}
                  </p>
                </div>
              </Card>
            </motion.div>)}
        </div>
        <div className="relative mb-12 md:mb-20">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/50 via-purple-500/20 to-transparent md:transform md:-translate-x-px" />
          {timeline.map((milestone, index) => <motion.div key={milestone.key} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.2
        }} className="relative mb-8 md:mb-16 last:mb-0">
              <div className={`flex flex-col md:flex-row items-start ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                <div className="pl-12 md:pl-0 w-full md:w-1/2 md:px-8">
                  <Card gradient hover className={`relative overflow-hidden group ${isDark ? "bg-black/40" : "bg-white/40"}`}>
                    <div className="absolute inset-0">
                      <img src={milestone.image} alt={t(`about.timeline.milestones.${milestone.key}.title`)} className="w-full h-full object-cover opacity-50" />
                      <div className={`absolute inset-0 bg-gradient-to-b ${isDark ? "from-black/60 to-black/90" : "from-white/60 to-white/90"}`} />
                    </div>
                    <div className="relative p-4 md:p-6">
                      <div className="flex flex-col md:flex-row items-start gap-3 md:gap-4 mb-4">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-purple-500/20 border border-purple-500/30 backdrop-blur-sm flex items-center justify-center shrink-0">
                          <milestone.icon className="w-5 h-5 md:w-6 md:h-6 text-purple-400" />
                        </div>
                        <div>
                          <div className="text-purple-400 text-lg md:text-xl font-bold mb-1">
                            {t(`about.timeline.milestones.${milestone.key}.year`)}
                          </div>
                          <h3 className={`text-lg md:text-xl font-bold mb-2 ${isDark ? "text-white group-hover:text-purple-400" : "text-gray-900 group-hover:text-purple-600"} transition-colors`}>
                            {t(`about.timeline.milestones.${milestone.key}.title`)}
                          </h3>
                          <p className={`text-sm md:text-base ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                            {t(`about.timeline.milestones.${milestone.key}.description`)}
                          </p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        {t(`about.timeline.milestones.${milestone.key}.achievements`, {
                      returnObjects: true
                    }).map((achievement: string, i: number) => <div key={i} className={`flex items-center gap-2 text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                            <ChevronRight className="w-4 h-4 text-purple-500 shrink-0" />
                            <span>{achievement}</span>
                          </div>)}
                      </div>
                    </div>
                  </Card>
                </div>
                <div className="absolute left-0 md:left-1/2 top-3 md:top-1/2 md:transform md:-translate-y-1/2 md:-translate-x-1/2 flex items-center justify-center">
                  <motion.div whileHover={{
                scale: 1.2
              }} className={`w-8 h-8 md:w-12 md:h-12 rounded-full ${isDark ? "bg-purple-500/20" : "bg-purple-500/10"} border border-purple-500 flex items-center justify-center relative`}>
                    <div className="absolute inset-0 rounded-full bg-purple-500/20 animate-ping" />
                    <milestone.icon className="w-4 h-4 md:w-6 md:h-6 text-purple-500" />
                  </motion.div>
                </div>
              </div>
            </motion.div>)}
        </div>
        <div className="grid grid-cols-1 gap-6 md:gap-8 mb-12 md:mb-20">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }}>
            <Card gradient className="p-4 md:p-6">
              <h3 className={`text-xl md:text-2xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}>
                {t("about.skills.title")}
              </h3>
              <div className="grid grid-cols-1 gap-6">
                {skills.map((category, index) => <div key={index} className="space-y-4">
                    <div className="flex items-center gap-3">
                      <category.icon className="w-5 h-5 text-purple-400" />
                      <h4 className={`font-medium ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                        {category.category}
                      </h4>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {category.items.map((item, i) => <div key={i} className={`flex items-center gap-2 text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                          <ChevronRight className="w-4 h-4 text-purple-500 shrink-0" />
                          <span>{item}</span>
                        </div>)}
                    </div>
                  </div>)}
              </div>
            </Card>
          </motion.div>
        </div>
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="text-center">
          <h3 className={`text-2xl md:text-3xl font-bold mb-4 md:mb-6 ${isDark ? "text-white" : "text-gray-900"}`}>
            {t("about.vision.title")}
          </h3>
          <p className={`text-base md:text-lg max-w-3xl mx-auto mb-6 md:mb-8 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
            {t("about.vision.description")}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {t("about.vision.goals", {
            returnObjects: true
          }).map((goal: string, index: number) => <Card key={index} gradient hover className={`p-4 ${isDark ? "bg-black/40" : "bg-white/40"}`}>
                <div className="flex flex-col items-center gap-3">
                  <Target className="w-5 h-5 md:w-6 md:h-6 text-purple-400" />
                  <p className={isDark ? "text-sm text-gray-400" : "text-sm text-gray-600"}>
                    {goal}
                  </p>
                </div>
              </Card>)}
          </div>
        </motion.div>
      </div>
    </div>;
};