import { FaMoon } from "react-icons/fa";
import { motion } from "framer-motion";

const moonAnim = {
  hidden: {
    rotate: 100,
    scale: 0.8,
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

export const MoonSVG = (): JSX.Element => {
  return (
    <motion.svg
      style={{
        width: "25px",
        height: "25px",
      }}
      variants={moonAnim}
      initial={"hidden"}
      animate={"visible"}
    >
      <FaMoon size="100%" />
    </motion.svg>
  );
};
