import { cva } from 'class-variance-authority';
export const cardStyles = {
  base: "relative overflow-hidden rounded-2xl border border-purple-500/20 backdrop-blur-sm transition-all duration-300",
  hover: "hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/10",
  gradient: "bg-gradient-to-br from-purple-500/5 via-transparent to-transparent",
  content: "relative z-10",
  dark: {
    base: "bg-black/40",
    hover: "hover:border-purple-500/40 hover:bg-black/50",
    text: "text-white"
  },
  light: {
    base: "bg-white/60",
    hover: "hover:border-purple-500/30 hover:bg-white/70",
    text: "text-gray-900"
  }
};
export const buttonStyles = {
  base: "inline-flex items-center justify-center gap-2 rounded-xl transition-all duration-300",
  variants: {
    primary: "bg-purple-500 hover:bg-purple-600 text-white shadow-sm hover:shadow-md hover:shadow-purple-500/20",
    secondary: "bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 border border-purple-500/20 hover:border-purple-500/40",
    outline: "border border-purple-500/20 hover:border-purple-500/40 hover:bg-purple-500/5",
    ghost: "hover:bg-purple-500/10 text-purple-500"
  },
  sizes: {
    sm: "text-sm px-3.5 py-1.5",
    md: "text-base px-5 py-2.5",
    lg: "text-lg px-7 py-3.5"
  }
};
export const gradients = {
  purple: "from-purple-500/20 via-purple-400/20 to-purple-600/20",
  blue: "from-blue-500/20 via-indigo-400/20 to-indigo-600/20",
  pink: "from-pink-500/20 via-purple-400/20 to-rose-600/20",
  green: "from-emerald-500/20 via-green-400/20 to-teal-600/20"
};
export const textStyles = {
  h1: "text-5xl md:text-7xl font-bold tracking-tight",
  h2: "text-4xl md:text-5xl font-bold tracking-tight",
  h3: "text-2xl md:text-3xl font-bold",
  body: "text-base leading-relaxed text-gray-600 dark:text-gray-400",
  caption: "text-sm text-gray-500 dark:text-gray-500"
};
export const layoutStyles = {
  section: "min-h-screen py-24 px-4 md:px-8",
  container: "max-w-7xl mx-auto",
  grid: "grid grid-cols-1 md:grid-cols-2 gap-8",
  flexCenter: "flex items-center justify-center",
  flexBetween: "flex items-center justify-between"
};
export const layout = {
  maxWidth: "max-w-7xl",
  padding: {
    mobile: "px-4 py-4",
    desktop: "px-6 py-6"
  },
  container: "mx-auto",
  section: {
    spacing: "py-12 md:py-20"
  }
};
export const header = {
  height: {
    mobile: "h-16",
    desktop: "h-20"
  },
  blur: "backdrop-blur-md",
  background: {
    light: "bg-background-light/80",
    dark: "bg-background-dark/80"
  }
};