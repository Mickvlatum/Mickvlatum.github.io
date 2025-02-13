import React from "react";
import { motion } from "framer-motion";
import { Compass } from "lucide-react";
export const Navigation = () => {
  return <motion.div initial={{
    opacity: 0
  }} animate={{
    opacity: 1
  }} className="fixed inset-0 flex items-center justify-center">
      <div className="relative w-64 h-64">
        <div className="absolute inset-0 rounded-full border-2 border-purple-500/20" />
        <motion.div className="absolute inset-0 flex items-center justify-center cursor-pointer" whileHover={{
        scale: 1.1
      }}>
          <Compass className="w-12 h-12 text-purple-500" />
        </motion.div>
      </div>
    </motion.div>;
};