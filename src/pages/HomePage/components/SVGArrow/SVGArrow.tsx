import { FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";

export const SVGArrow = ({ iconSize }: { iconSize: string }): JSX.Element => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: -10 }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",

        ease: "easeInOut",
      }}
    >
      <FaArrowDown size={iconSize} />
    </motion.div>
  );
};
