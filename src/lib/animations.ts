import { Variants } from 'framer-motion';

export const fadeIn = (direction: 'up' | 'down' | 'left' | 'right' = 'up', delay = 0.2): Variants => ({
  hidden: {
    y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
    x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
    opacity: 0,
  },
  show: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      duration: 0.8,
      delay,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
});

export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0.1): Variants => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const hoverCard = {
  scale: 1.03,
  boxShadow: '0 0 30px rgba(99, 102, 241, 0.5)',
  transition: {
    type: 'spring',
    stiffness: 300,
    damping: 15,
  },
};

export const pulseGlow = {
  scale: [1, 1.02, 1],
  boxShadow: [
    '0 0 10px rgba(99, 102, 241, 0.3)',
    '0 0 30px rgba(99, 102, 241, 0.5)',
    '0 0 10px rgba(99, 102, 241, 0.3)',
  ],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: 'easeInOut',
  },
};
