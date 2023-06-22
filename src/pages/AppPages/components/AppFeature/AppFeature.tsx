import {
  Box,
  Center,
  Divider,
  Heading,
  List,
  ListIcon,
} from "@chakra-ui/layout";

import { Text } from "@chakra-ui/layout";
import { ListItem } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ResponsiveSizes } from "../../../../responsiveSizes";
import { FaArrowCircleRight } from "react-icons/fa";
import { StepType } from "../AppFeatureSection/AppFeatureSection";
import { AppFeatureCarousel } from "../AppFeatureCarousel/AppFeatureCarousel";

const appFeatureAnim = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,

    transition: {
      staggerChildren: 0.2,
      duration: 2,
    },
  },
};

const appFeatureSectionAnim = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

export const AppFeature = ({
  sectionId,
  featureName,
  featureDescription,
  numericFacts,
  catchyLine,
  isOnLeft,
  featureSteps,
  accentColour,
}: {
  sectionId: string;
  featureName: string;
  featureDescription: string;
  numericFacts: string[];
  catchyLine: string;
  isOnLeft: boolean;
  featureSteps: StepType[];
  accentColour: string;
}): JSX.Element => {
  return (
    <motion.div
      variants={appFeatureAnim}
      initial="hidden"
      whileInView="visible"
      id={sectionId}
    >
      <Center>
        <Box w="90%">
          <motion.span variants={appFeatureSectionAnim}>
            <Heading
              fontSize={ResponsiveSizes.SecondaryHeaderSizes}
              textAlign={
                isOnLeft
                  ? ["center", "center", "left", "left"]
                  : ["center", "center", "right", "right"]
              }
              m="2rem"
            >
              {featureName}
            </Heading>
          </motion.span>
          <motion.span variants={appFeatureSectionAnim}>
            <Center>
              <Text textAlign={"left"} fontSize={"xl"} maxW="3xl" mb="2rem">
                {featureDescription}
              </Text>
            </Center>
          </motion.span>
          <Divider borderColor={accentColour} />
          <Center>
            <List fontSize={"2xl"} m="2rem">
              {numericFacts.map((fact, key) => {
                return (
                  <ListItem key={key}>
                    <ListIcon as={FaArrowCircleRight} color={accentColour} />
                    {fact}
                  </ListItem>
                );
              })}
            </List>
          </Center>
          <Divider borderColor={accentColour} />

          <Heading
            fontSize={ResponsiveSizes.SecondaryHeaderSizes}
            mt="2rem"
            textAlign={"center"}
          >
            How to use:
          </Heading>

          <AppFeatureCarousel
            steps={featureSteps}
            featureSectionId={sectionId}
            accentColour={accentColour}
          />

          <Heading
            fontSize={"xl"}
            mt="2rem"
            textAlign={isOnLeft ? "left" : "right"}
            color={accentColour}
          >
            {catchyLine}
          </Heading>
          <Divider borderColor={accentColour} />
        </Box>
      </Center>
    </motion.div>
  );
};
