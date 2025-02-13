import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
export const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const {
    theme
  } = useTheme();
  const isDark = theme === "dark";
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 1;
      });
    }, 20);
    return () => clearInterval(timer);
  }, []);
  return <div className={`w-full h-screen flex flex-col items-center justify-center transition-colors duration-300 ${isDark ? "bg-[#0a0a0a]" : "bg-background-light"}`}>
      <motion.div initial={{
      opacity: 0,
      scale: 0.8
    }} animate={{
      opacity: 1,
      scale: 1
    }} className="relative mb-12">
        <motion.div animate={{
        rotate: 360
      }} transition={{
        duration: 8,
        repeat: Infinity,
        ease: "linear"
      }} className="absolute -inset-8 rounded-full border-2 border-purple-500/20" />
        <motion.div animate={{
        rotate: -360
      }} transition={{
        duration: 12,
        repeat: Infinity,
        ease: "linear"
      }} className="absolute -inset-16 rounded-full border-2 border-purple-500/10" />
        <div className="relative flex items-center gap-4">
          <Sparkles className="w-8 h-8 text-purple-500" />
          <h1 className={`text-6xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
            Welcome<span className="text-purple-500">.</span>
          </h1>
        </div>
      </motion.div>
      <div className="relative w-64">
        <div className={`h-1 rounded-full overflow-hidden ${isDark ? "bg-gray-800" : "bg-gray-200"}`}>
          <motion.div initial={{
          width: "0%"
        }} animate={{
          width: `${progress}%`
        }} transition={{
          duration: 0.1
        }} className="h-full bg-purple-500" />
        </div>
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 0.5
      }} className="absolute left-0 -bottom-6 text-sm text-purple-500">
          {progress}%
        </motion.div>
      </div>
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 0.5
    }} className="mt-12 flex flex-col items-center gap-2">
        <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
          Initializing digital experience
        </p>
        <div className="flex gap-2">
          <span className="w-2 h-2 bg-purple-500/50 rounded-full animate-bounce" />
          <span className="w-2 h-2 bg-purple-500/50 rounded-full animate-bounce [animation-delay:0.2s]" />
          <span className="w-2 h-2 bg-purple-500/50 rounded-full animate-bounce [animation-delay:0.4s]" />
        </div>
      </motion.div>
    </div>;
};