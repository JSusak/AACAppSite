import { Image } from "@chakra-ui/image";
import { Box, Center, Heading, Link, Text, VStack } from "@chakra-ui/layout";
import { motion } from "framer-motion";
import { useState } from "react";

export const InteractiveDesignIcon = ({
  id,
  width,
  height,
  text,
}: {
  id: string;
  width: number;
  height: number;
  text: string;
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
      whileHover={{
        scale: 1.8,
      }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
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
        borderColor="blue.100"
        borderWidth={"4px"}
        display={"flex"}
        justifyContent={"center"}
        boxShadow={"2px 12px 20px rgba(0,0,0,0.2);"}
        position={"relative"}
      >
        <Center>
          <Image
            src="./kcl.png"
            borderRadius={"50px"}
            fallbackSrc={`https://via.placeholder.com/${width}x${height}`}
          />

          <Box
            w={"100%"}
            zIndex={isHover ? 400 : 0}
            backgroundColor={isHover ? "rgba(192,192,192,0.8)" : "transparent"}
            h="100%"
            transition="all 0.5s ease-in-out"
            position="absolute"
            borderRadius={"50px"}
          >
            <Center>
              <VStack>
                <Heading textAlign={"center"} fontSize={"2xl"} mt="1rem">
                  {text}
                </Heading>

                <motion.span
                  variants={overlayContent}
                  animate={isHover ? "visible" : "hidden"}
                >
                  <Heading textAlign={"center"} fontSize={"md"}>
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
                  <Link>Learn More</Link>
                </motion.span>
              </VStack>
            </Center>
          </Box>
        </Center>
      </Box>
    </motion.div>
  );
};
