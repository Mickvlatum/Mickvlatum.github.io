import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
interface LandingIntroProps {
  onComplete: () => void;
}
export const LandingIntro = ({
  onComplete
}: LandingIntroProps) => {
  const [step, setStep] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (step < 3) {
        setStep(step + 1);
      } else {
        onComplete();
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, [step, onComplete]);
  return <div className="fixed inset-0 flex items-center justify-center">
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} exit={{
      opacity: 0
    }} className="text-purple-500 text-4xl font-light">
        {step === 0 && "Welcome"}
        {step === 1 && "to my"}
        {step === 2 && "digital"}
        {step === 3 && "universe"}
      </motion.div>
    </div>;
};