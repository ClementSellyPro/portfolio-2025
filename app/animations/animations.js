// Menu animations ==============================================================

import { scale } from 'framer-motion';

export const navContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15, 
      delay: 0.3,
    },
  },
};

export const navItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

// PORTFOLIO title animations ==============================================================

export const titleContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delay: 0.3
    }
  }
}

export const letter = {
  hidden: { scale: 1 },
  visible: { 
    scale: [1, 1.1, 1], 
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    } 
  }
}