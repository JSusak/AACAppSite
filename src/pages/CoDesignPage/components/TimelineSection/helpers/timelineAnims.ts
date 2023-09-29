export const timelineBeadAnim = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 2,
      type: "spring",
    },
  },
};

export const timelineArrowAnim = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      duration: 2,
      type: "tween",
      delayChildreN: 0.5,
      staggerChildren: 0.17,
    },
  },
};

export const timelineChildrenAnim = {
  hidden: {
    x: 20,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,

    transition: {
      duration: 1,
      type: "spring",
    },
  },
};

