import { Box, Center, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { Colours } from "../../colourScheme";

const verticalDrop = {
  hidden: {
    y: "-100vh",
  },
  visible: {
    y: "0",
  },
  exit: {
    y: "100vh",
  },
};

export const ModalTemplate = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  return (
    <Box
      position={"fixed"}
      as={motion.div}
      display={"inherit"}
      margin={"0 auto"}
      top="0"
      bottom={"0"}
      left="0"
      right="0"
      className="modalBG"
      backgroundColor={"blackAlpha.700"}
      zIndex={99999}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Center>
        <Box
          w={"90%"}
          height="90vh"
          zIndex={10000}
          backgroundColor={useColorModeValue(
            Colours.lightModeBG,
            Colours.darkModeBG
          )}
          borderColor={useColorModeValue(
            Colours.lightModeMainCol,
            Colours.darkModeNavColActive
          )}
          borderWidth={"5px"}
          borderRadius={"10px"}
          overflowY={"auto"}
          p="4rem"
          as={motion.div}
          variants={verticalDrop}
          initial={"hidden"}
          animate={"visible"}
          exit="exit"
          position={"relative"}
          boxShadow={
            "rgba(0, 0, 0, 0.2) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px"
          }
          __css={{
            "&::-webkit-scrollbar": {
              w: "2",
            },
            "&::-webkit-scrollbar-track": {
              w: "4",
            },
            "&::-webkit-scrollbar-thumb": {
              borderRadius: "5",
              bg: useColorModeValue("blackAlpha.700", "whiteAlpha.700"),
            },
            "&::-webkit-scrollbar-thumb:hover": {
              bg: useColorModeValue("blackAlpha.800", "whiteAlpha.800"),
            },
          }}
        >
          {children}
        </Box>
      </Center>
    </Box>
  );
};
