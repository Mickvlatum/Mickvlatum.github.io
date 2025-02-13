import React, { useEffect, useState } from "react";
import { LoadingScreen } from "./components/LoadingScreen";
import { MainExperience } from "./components/MainExperience";
import { SoundProvider } from "./components/SoundContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import { ThemeLanguageSwitcher } from "./components/ThemeLanguageSwitcher";
export function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return <ThemeProvider>
      <LanguageProvider>
        <SoundProvider>
          <div className="w-full min-h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark overflow-hidden transition-colors duration-300">
            {isLoading ? <LoadingScreen /> : <MainExperience />}
            <ThemeLanguageSwitcher />
          </div>
        </SoundProvider>
      </LanguageProvider>
    </ThemeProvider>;
}