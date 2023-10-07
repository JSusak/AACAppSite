import { Button, Center, Heading, Text, VStack, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ModalTemplate } from "../../../../../components/ModalTemplate/ModalTemplate";

import { FaChevronCircleRight } from "react-icons/fa";
import {
  gridStagger,
  horizontalFade,
  verticalFade,
} from "../../../../../Animations";

export const TimelineSectionModal = ({
  sectionName,
  featureImage,
  // sectionImages,
  sectionDate,
  sectionDescription,
  sectionKeyTasks,
  onModalClose,
}: {
  sectionName: string;
  featureImage: string;
  // sectionImages: string[];
  sectionDate: string;
  sectionDescription: string;
  sectionKeyTasks: string[];
  onModalClose: () => void;
}): JSX.Element => {
  return (
    <ModalTemplate>
      <Button
        onClick={onModalClose}
        position={"absolute"}
        top="2rem"
        right="2rem"
        leftIcon={<FaChevronCircleRight />}
        colorScheme="orange"
      >
        Back
      </Button>
      <Center>
        <VStack
          w="80%"
          spacing={"1rem"}
          as={motion.div}
          variants={gridStagger}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={horizontalFade}>
            <Center>
              <Image
                boxShadow={"2px 12px 20px rgba(0,0,0,0.2);"}
                borderRadius={"15px"}
                width={"100%"}
                height={"500px"}
                objectFit={"cover"}
                zIndex={9}
                transition={"all 0.2s ease-in-out"}
                src={featureImage}
                fallbackSrc="https://via.placeholder.com/400"
                m="2rem"
              />
            </Center>
          </motion.div>

          <Heading
            textAlign={"center"}
            fontSize={["4xl", "5xl", "6xl", "7xl"]}
            as={motion.div}
            variants={verticalFade}
            textDecor={"underline"}
          >
            {sectionName}
          </Heading>
          <Text
            textAlign={"center"}
            fontSize={["lg", "xl", "xl", "3xl"]}
            as={motion.div}
            variants={verticalFade}
          >
            {sectionDate}
          </Text>
          <Text
            textAlign={"center"}
            fontSize={["lg", "xl", "xl", "3xl"]}
            as={motion.div}
            variants={verticalFade}
          >
            {sectionDescription}
          </Text>

          {sectionKeyTasks.map((task, index) => {
            return (
              <Text
                fontSize={["lg", "xl", "xl", "3xl"]}
                key={index}
                as={motion.div}
                variants={verticalFade}
              >
                {`• ${task}`}
              </Text>
            );
          })}

          {/**
          * <Heading
            fontSize={["2xl", "3xl", "4xl", "5xl"]}
           as={motion.div}
            variants={verticalFade}
            textAlign={"center"}
            textDecor={"underline"}
          >
            Workshop Gallery
          </Heading>

          {sectionImages.map((image, index) => {
            return (
              <motion.div
                variants={horizontalFade}
                style={{
                  width: "100%",
                  height: "100%",
                  padding: "1rem",
                }}
                key={`${image}${index}`}
              >
                <Image
                  src={image}
                  borderRadius={"20px"}
                  boxShadow={"2px 12px 20px rgba(0,0,0,0.2);"}
                />
              </motion.div>
            );
          })}
          */}
        </VStack>
      </Center>
    </ModalTemplate>
  );
};
