import { motion } from "framer-motion";
import { ReactNode } from "react";

const pageAnim = {
  pageHidden: {
    opacity: 0,
  },
  pageVisible: {
    opacity: 1,
  },
  pageExit: {
    opacity: 0,
  },
};

export const PageTransition = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  return (
    <motion.div
      variants={pageAnim}
      initial="pageHidden"
      animate="pageVisible"
      exit="pageExit"
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};
