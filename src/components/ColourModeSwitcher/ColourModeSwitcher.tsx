import { IconButton } from "@chakra-ui/button";
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";

import { MoonSVG } from "./MoonSVG";
import { SunSVG } from "./SunSVG";
import { motion } from "framer-motion";

export const ColourModeSwitcher = (): JSX.Element => {
  const { toggleColorMode } = useColorMode();
  return (
    <motion.div whileHover={{ scale: 1.2, rotate: -20 }}>
      <IconButton
        aria-label={"toggle colour theme"}
        variant={"ghost"}
        onClick={toggleColorMode}
        icon={useColorModeValue(<SunSVG />, <MoonSVG />)}
        borderWidth={"0px"}
        _focus={{
          boxShadow: "none",
          outline: "none",
          borderColor: "transparent",
        }}
        _hover={{ background: "transparent" }}
        _active={{ background: "transparent" }}
      />
    </motion.div>
  );
};
