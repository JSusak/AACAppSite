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
    },
  },
};
