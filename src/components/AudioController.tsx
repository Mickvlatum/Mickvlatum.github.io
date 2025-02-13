import React, { useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
export const AudioController = () => {
  const [isMuted, setIsMuted] = useState(true);
  return <button onClick={() => setIsMuted(!isMuted)} className="fixed bottom-4 right-4 p-2 rounded-full bg-purple-500/10 hover:bg-purple-500/20 transition-colors">
      {isMuted ? <VolumeX className="w-6 h-6 text-purple-500" /> : <Volume2 className="w-6 h-6 text-purple-500" />}
    </button>;
};