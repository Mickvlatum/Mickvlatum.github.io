import React from "react";
export const LoadingSpinner = () => <div className="flex gap-2 px-3 py-2">
    <span className="w-2 h-2 bg-purple-500/50 rounded-full animate-bounce" />
    <span className="w-2 h-2 bg-purple-500/50 rounded-full animate-bounce [animation-delay:0.2s]" />
    <span className="w-2 h-2 bg-purple-500/50 rounded-full animate-bounce [animation-delay:0.4s]" />
  </div>;