export const navContainer = {
  hidden: {},
  visible: {
    transition: {
      delay: 0.3,
      staggerChildren: 0.15, 
    },
  },
};

export const navItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};