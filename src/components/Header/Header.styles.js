export const heroContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

export const textVariant = {
  hidden: { x: -80, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export const imageVariant = {
  hidden: { x: 80, opacity: 0, scale: 0.9 },
  show: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: "easeOut"
    }
  }
};
