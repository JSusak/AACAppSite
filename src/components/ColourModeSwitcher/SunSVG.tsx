import { FaSun } from "react-icons/fa";
import { motion } from "framer-motion";

const sunAnim = {
  hidden: {
    rotate: 200,
    scale: 0.7,
  },

  visible: {
    rotate: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 100,
    },
  },
};

export const SunSVG = (): JSX.Element => {
  return (
    <motion.svg
      style={{
        width: "25px",
        height: "25px",
      }}
      variants={sunAnim}
      initial={"hidden"}
      animate={"visible"}
    >
      <FaSun size="100%" />
    </motion.svg>
  );
};
