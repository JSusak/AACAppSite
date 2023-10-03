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
import { appFeatureColourScheme } from "../../appFeatureColourSchemes";

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
  isOnLeft,
  featureSteps,
  colourScheme,
}: {
  sectionId: string;
  featureName: string;
  featureDescription: string;
  numericFacts: string[];
  isOnLeft: boolean;
  featureSteps: StepType[];
  colourScheme: appFeatureColourScheme;
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
                  ? ["center", "center", "center", "left"]
                  : ["center", "center", "center", "right"]
              }
              m="2rem"
            >
              {featureName}
            </Heading>
          </motion.span>
          <motion.span variants={appFeatureSectionAnim}>
            <Center>
              <Text
                textAlign={["center", "center", "center", "left"]}
                fontSize={"xl"}
                maxW="3xl"
                mb="2rem"
              >
                {featureDescription}
              </Text>
            </Center>
          </motion.span>
          <Divider borderColor={colourScheme.accent} />
          <Center>
            <List fontSize={"2xl"} m="2rem">
              {numericFacts.map((fact, key) => {
                return (
                  <ListItem key={key}>
                    <ListIcon
                      as={FaArrowCircleRight}
                      color={colourScheme.accent}
                    />
                    {fact}
                  </ListItem>
                );
              })}
            </List>
          </Center>
          <Divider borderColor={colourScheme.accent} />

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
            colourScheme={colourScheme}
          />
        </Box>
      </Center>
    </motion.div>
  );
};
