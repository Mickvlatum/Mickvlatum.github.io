export const fadeInUp = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0
  },
  exit: {
    opacity: 0,
    y: -20
  },
  transition: {
    duration: 0.4,
    ease: [0.23, 1, 0.32, 1]
  }
};
export const fadeIn = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1
  },
  exit: {
    opacity: 0
  },
  transition: {
    duration: 0.3,
    ease: [0.23, 1, 0.32, 1]
  }
};
export const scaleIn = {
  initial: {
    opacity: 0,
    scale: 0.95
  },
  animate: {
    opacity: 1,
    scale: 1
  },
  exit: {
    opacity: 0,
    scale: 0.95
  },
  transition: {
    duration: 0.4,
    ease: [0.23, 1, 0.32, 1]
  }
};
export const slideIn = {
  initial: {
    opacity: 0,
    x: -20
  },
  animate: {
    opacity: 1,
    x: 0
  },
  exit: {
    opacity: 0,
    x: 20
  },
  transition: {
    duration: 0.3
  }
};
export const slideInRight = {
  initial: {
    opacity: 0,
    x: 20
  },
  animate: {
    opacity: 1,
    x: 0
  },
  exit: {
    opacity: 0,
    x: -20
  },
  transition: {
    duration: 0.3
  }
};
export const hoverScale = {
  whileHover: {
    scale: 1.02
  },
  whileTap: {
    scale: 0.98
  }
};
export const pageTransition = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0
  },
  exit: {
    opacity: 0,
    y: -20
  },
  transition: {
    duration: 0.4
  }
};
export const containerAnimation = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1
  },
  transition: {
    duration: 1
  }
};
export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};
export const cardHover = {
  whileHover: {
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: [0.23, 1, 0.32, 1]
    }
  },
  whileTap: {
    scale: 0.98,
    transition: {
      duration: 0.3,
      ease: [0.23, 1, 0.32, 1]
    }
  }
};