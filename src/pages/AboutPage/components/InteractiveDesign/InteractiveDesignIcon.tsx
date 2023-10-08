import { Image } from "@chakra-ui/image";
import { Box, Center, Heading, Link, Text, VStack } from "@chakra-ui/layout";
import { motion } from "framer-motion";
import { useState } from "react";
import { useColorModeValue } from "@chakra-ui/react";

export const InteractiveDesignIcon = ({
  id,
  width,
  height,
  text,
  imageSRC,
}: {
  id: string;
  width: number;
  height: number;
  text: string;
  imageSRC: string;
}): JSX.Element => {
  const [isHover, setIsHover] = useState(false);

  const overlay = {
    hidden: {
      opacity: 1,
      transition: {
        when: "afterChildren",
      },
    },
    visible: {
      opacity: 1,

      transition: {
        when: "beforeChildren",
        delay: 0.5,

        staggerChildren: 0.5,
      },
    },
  };

  const overlayContent = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,

      transition: {
        duration: 0.3,

        type: "tween",
        damping: 3,
        mass: 0.5,
        stiffness: 50,
      },
    },
  };

  return (
    <motion.div
      drag
      dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      dragElastic={0.01}
      whileDrag={{ scale: 1 }}
      whileHover={{
        scale: 1.1,
        cursor: "pointer",
      }}
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
      transition={{
        type: "spring",
        duration: 0.5,
        delayChildren: 1,
        staggerChildren: 0.5,
      }}
      animate={"visible"}
      initial="hidden"
      variants={overlay}
    >
      <Box
        id={id}
        zIndex={isHover ? 400 : 200}
        backgroundColor={"orange.100"}
        width={`${width.toString()}px`}
        height={`${height.toString()}px`}
        borderRadius={"50px"}
        borderColor={useColorModeValue("blue.100", "whiteAlpha.500")}
        borderWidth={"4px"}
        display={"flex"}
        justifyContent={"center"}
        boxShadow={"2px 12px 20px rgba(0,0,0,0.2);"}
        position={"relative"}
      >
        <Center>
          <Image
            height="100%"
            src={imageSRC}
            borderRadius={"44px"}
            fallbackSrc={`https://via.placeholder.com/${width}x${height}`}
            objectFit="cover"
          />

          <Box
            w={"100%"}
            zIndex={isHover ? 400 : 0}
            backgroundColor={
              isHover
                ? useColorModeValue(
                    "rgba(254, 235, 200,0.6)",
                    "rgba(0, 0, 0, 0.6)"
                  )
                : "transparent"
            }
            h="100%"
            transition="all 0.5s ease-in-out"
            position="absolute"
            borderRadius={"44px"}
          >
            <VStack spacing={["0rem", "0rem", "-0.5rem", "0rem"]}>
              <Center>
                <VStack mt="1rem">
                  <motion.span
                    variants={overlayContent}
                    animate={isHover ? "visible" : "hidden"}
                  >
                    <Heading
                      textAlign={"center"}
                      fontSize={["md", "md", "lg", "xl"]}
                    >
                      {text}
                    </Heading>
                    <Heading
                      textAlign={"center"}
                      fontSize={["sm", "sm", "md", "md"]}
                    >
                      Short description of task...........
                    </Heading>
                  </motion.span>
                  <motion.span
                    variants={overlayContent}
                    animate={isHover ? "visible" : "hidden"}
                  >
                    <Text textAlign={"center"} fontSize={"sm"}>
                      Location of task?
                    </Text>
                  </motion.span>
                  <motion.span
                    variants={overlayContent}
                    animate={isHover ? "visible" : "hidden"}
                  >
                    <Link>See More</Link>
                  </motion.span>
                </VStack>
              </Center>
            </VStack>
          </Box>
        </Center>
      </Box>
    </motion.div>
  );
};
