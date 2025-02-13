import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, ChevronRight, Sparkles } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
const INTRO_MESSAGES = ["Welcome to this immersive portfolio experience.", "I'm your AI guide, here to help you explore this digital universe.", "Would you like to take a guided tour, or explore on your own?"];
export const AIGuide = () => {
  const {
    t
  } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);
  const [currentIntroIndex, setCurrentIntroIndex] = useState(0);
  const [showOptions, setShowOptions] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  useEffect(() => {
    if (isOpen && currentIntroIndex < INTRO_MESSAGES.length) {
      setIsTyping(true);
      const timer = setTimeout(() => {
        setMessages(prev => [...prev, t(`ai_guide.${INTRO_MESSAGES[currentIntroIndex]}`)]);
        setIsTyping(false);
        if (currentIntroIndex === INTRO_MESSAGES.length - 1) {
          setShowOptions(true);
        } else {
          setCurrentIntroIndex(prev => prev + 1);
        }
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [currentIntroIndex, isOpen, t]);
  return <>
      <motion.button whileHover={{
      scale: 1.1
    }} whileTap={{
      scale: 0.9
    }} onClick={() => {
      setIsOpen(true);
      setMessages([]);
      setCurrentIntroIndex(0);
      setShowOptions(false);
    }} className="fixed bottom-4 left-4 p-3 rounded-full bg-purple-500/10 
                   hover:bg-purple-500/20 transition-colors z-50 group">
        <MessageSquare className="w-6 h-6 text-purple-500 group-hover:text-purple-400" />
      </motion.button>
      <AnimatePresence>
        {isOpen && <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} exit={{
        opacity: 0,
        y: 20
      }} className="fixed bottom-20 left-4 w-96 bg-black/90 rounded-lg 
                     border border-purple-500/20 backdrop-blur-lg z-50 overflow-hidden">
            <div className="h-96 flex flex-col">
              <div className="p-4 border-b border-purple-500/20 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-purple-500" />
                  <span className="text-purple-500 font-semibold">
                    AI Guide
                  </span>
                </div>
                <button onClick={() => setIsOpen(false)} className="p-1 rounded-full hover:bg-purple-500/10 transition-colors">
                  <X className="w-4 h-4 text-purple-500" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 10
            }} animate={{
              opacity: 1,
              y: 0
            }} className="bg-purple-500/5 rounded-lg p-3">
                    <p className="text-sm text-gray-300">{message}</p>
                  </motion.div>)}
                {isTyping && <div className="flex gap-2 px-3 py-2">
                    <span className="w-2 h-2 bg-purple-500/50 rounded-full animate-bounce" />
                    <span className="w-2 h-2 bg-purple-500/50 rounded-full animate-bounce [animation-delay:0.2s]" />
                    <span className="w-2 h-2 bg-purple-500/50 rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>}
              </div>
              {showOptions && <motion.div initial={{
            opacity: 0,
            y: 10
          }} animate={{
            opacity: 1,
            y: 0
          }} className="p-4 border-t border-purple-500/20 space-y-2">
                  <button className="w-full p-3 bg-purple-500/10 rounded-lg 
                                   hover:bg-purple-500/20 transition-colors flex items-center justify-between
                                   text-sm text-gray-300 hover:text-white group">
                    {t("ai_guide.guided_tour")}
                    <ChevronRight className="w-4 h-4 text-purple-500 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="w-full p-3 bg-purple-500/10 rounded-lg 
                                   hover:bg-purple-500/20 transition-colors flex items-center justify-between
                                   text-sm text-gray-300 hover:text-white group">
                    {t("ai_guide.explore")}
                    <ChevronRight className="w-4 h-4 text-purple-500 group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>}
            </div>
          </motion.div>}
      </AnimatePresence>
    </>;
};