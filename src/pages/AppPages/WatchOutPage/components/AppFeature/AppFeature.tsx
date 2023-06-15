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
import { Colours } from "../../../../../colourScheme";
import { motion } from "framer-motion";
import { ResponsiveSizes } from "../../../../../responsiveSizes";
import { FaArrowCircleRight } from "react-icons/fa";

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
  featureName,
  featureDescription,
  numericFacts,
  usefulWhen,
  catchyLine,
  isOnLeft,
}: {
  featureName: string;
  featureDescription: string;
  numericFacts: string[];
  usefulWhen: string[];
  catchyLine: string;
  isOnLeft: boolean;
}): JSX.Element => {
  return (
    <motion.div
      variants={appFeatureAnim}
      initial="hidden"
      whileInView="visible"
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
          <Divider borderColor={Colours.lightModeHeader} />
          <Center>
            <List fontSize={"2xl"} m="2rem">
              {numericFacts.map((fact, key) => {
                return (
                  <ListItem key={key}>
                    <ListIcon
                      as={FaArrowCircleRight}
                      color={Colours.lightModeWatchOutAccent}
                    />
                    {fact}
                  </ListItem>
                );
              })}
            </List>
          </Center>
          <Divider borderColor={Colours.lightModeHeader} />

          <Heading
            fontSize={ResponsiveSizes.SecondaryHeaderSizes}
            m="2rem"
            textAlign={"center"}
          >
            Useful when...
          </Heading>

          <Center>
            <List fontSize={"2xl"}>
              {usefulWhen.map((useful, key) => {
                return (
                  <ListItem key={key}>
                    <ListIcon
                      as={FaArrowCircleRight}
                      color={Colours.lightModeWatchOutAccent}
                    />
                    {useful}
                  </ListItem>
                );
              })}
            </List>
          </Center>

          <Heading
            fontSize={"xl"}
            mt="2rem"
            textAlign={isOnLeft ? "left" : "right"}
            color={Colours.lightModeWatchOutAccent}
          >
            {catchyLine}
          </Heading>
          <Divider borderColor={Colours.lightModeHeader} />
        </Box>
      </Center>
    </motion.div>
  );
};
