import { motion } from "framer-motion";
import { IconButton } from "@chakra-ui/react";

const topHam = {
  close: {
    opacity: 1,
    translateY: 0,
  },
  open: {
    opacity: 0,
    translateY: 50,
    rotate: 45,
  },
};

const middleHam = {
  close: {
    opacity: 1,
  },
  open: {
    opacity: 0,
  },
};

const bottomHam = {
  close: {
    opacity: 1,
  },
  open: {
    opacity: 0,
    translateY: -50,
    rotate: -45,
  },
};

export const NavbarHamburgerIcon = ({
  hamburgerRef,
  openAction,
  isNavOpen,
}: {
  hamburgerRef: any;
  openAction: any;
  isNavOpen: any;
}): JSX.Element => {
  return (
    <IconButton
      zIndex={99999}
      color={"current"}
      backgroundColor={"transparent"}
      icon={
        <motion.svg
          viewBox="0 0 100 100"
          width="20"
          height="20"
          overflow={"visible"}
        >
          <motion.line
            x1="0"
            x2="100"
            y1="0"
            y2="0"
            stroke={"#000000"}
            strokeWidth={8}
            animate={isNavOpen ? "open" : "close"}
            variants={topHam}
            transition={{
              type: "tween",
              duration: 0.5,
            }}
          />
          <motion.line
            x1="0"
            x2="100"
            y1="50"
            y2="50"
            stroke={"#000000"}
            strokeWidth={8}
            animate={isNavOpen ? "open" : "close"}
            variants={middleHam}
            transition={{
              type: "tween",
              duration: 0.5,
            }}
          />
          <motion.line
            x1="0"
            x2="100"
            y1="100"
            y2="100"
            stroke={"#000000"}
            strokeWidth={8}
            animate={isNavOpen ? "open" : "close"}
            variants={bottomHam}
            transition={{
              type: "tween",
              duration: 0.5,
            }}
          />
        </motion.svg>
      }
      aria-label={"Open Hamburger"}
      ref={hamburgerRef}
      onClick={openAction}
      borderWidth={"0px"}
      _hover={{
        bg: "none",
      }}
      _focus={{
        boxShadow: "none",
        outline: "none",
        borderColor: "transparent",
      }}
      _active={{ background: "transparent" }}
    />
  );
};
