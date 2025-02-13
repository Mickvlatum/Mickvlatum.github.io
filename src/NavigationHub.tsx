import React from "react";
// ... existing imports
import { useLanguage } from "../contexts/LanguageContext";
export const NavigationHub = ({
  onSectionSelect
}: NavigationHubProps) => {
  const {
    t
  } = useLanguage();
  // ... rest of the existing state
  return <motion.div
  // ... existing motion props
  >
      {/* ... existing header content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-6xl mx-auto relative w-full">
        {sections.map((section, index) => <motion.button key={section.id}
      // ... existing motion props
      className="group relative h-[240px] md:h-[280px] bg-card-light dark:bg-card-dark rounded-2xl backdrop-blur-sm 
                     border border-purple-500/20 hover:border-purple-500/50 
                     transition-all duration-500 overflow-hidden
                     hover:shadow-lg hover:shadow-purple-500/10">
            {/* ... existing image and overlay content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center p-6">
              <motion.div
          // ... existing motion props
          >
                {/* ... existing icon content */}
                <h3 className="text-3xl font-bold text-text-light dark:text-text-dark mb-3 
                             group-hover:text-purple-400 transition-colors">
                  {t(`nav.${section.id}`)}
                </h3>
                <p className="text-text-light/70 dark:text-text-dark/70 text-center opacity-0 
                             group-hover:opacity-100 transition-all duration-300 
                             transform translate-y-2 group-hover:translate-y-0">
                  {t(`nav.${section.id}.description`)}
                </p>
              </motion.div>
            </div>
            {/* ... existing effects */}
          </motion.button>)}
      </div>
    </motion.div>;
};