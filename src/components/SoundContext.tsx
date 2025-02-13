import React, { useState, createContext, useContext } from "react";
type SoundContextType = {
  isMuted: boolean;
  toggleMute: () => void;
};
const SoundContext = createContext<SoundContextType | undefined>(undefined);
export const SoundProvider = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const [isMuted, setIsMuted] = useState(true);
  const toggleMute = () => {
    setIsMuted(!isMuted);
  };
  return <SoundContext.Provider value={{
    isMuted,
    toggleMute
  }}>
      {children}
    </SoundContext.Provider>;
};
export const useSound = () => {
  const context = useContext(SoundContext);
  if (context === undefined) {
    throw new Error("useSound must be used within a SoundProvider");
  }
  return context;
};