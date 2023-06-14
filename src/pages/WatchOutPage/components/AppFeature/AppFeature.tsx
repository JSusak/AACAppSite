import { Box, Center, Divider, Heading } from "@chakra-ui/layout";

import { Text } from "@chakra-ui/layout";
import { ListItem, UnorderedList } from "@chakra-ui/react";
import { Colours } from "../../../../colourScheme";
import { useEffect } from "react";
import { motion } from "framer-motion";

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
  let numericFactConcat = "";
  //Appending all numeric facts into a single string before render.
  useEffect(() => {
    numericFacts.forEach((fact, index, arr) =>
      index === arr.length - 1
        ? numericFactConcat.concat(`${fact}`)
        : numericFactConcat.concat(`${fact} | `)
    );
  });
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
              fontSize={"6xl"}
              textAlign={isOnLeft ? "left" : "right"}
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
            <Heading fontSize={"2xl"} m="2rem">
              Numeric Fact{" "}
              <Heading
                as="span"
                color={Colours.lightModeWatchOutAccent}
                fontSize={"2xl"}
              >
                1
              </Heading>{" "}
              | Numeric Fact{" "}
              <Heading
                as="span"
                color={Colours.lightModeWatchOutAccent}
                fontSize={"2xl"}
              >
                2
              </Heading>{" "}
              | Numeric Fact{" "}
              <Heading
                as="span"
                color={Colours.lightModeWatchOutAccent}
                fontSize={"2xl"}
              >
                3
              </Heading>{" "}
            </Heading>
          </Center>
          <Divider borderColor={Colours.lightModeHeader} />

          <Heading fontSize={"5xl"} m="2rem" textAlign={"center"}>
            Useful when...
          </Heading>

          <Center>
            <UnorderedList fontSize={"xl"}>
              {usefulWhen.map((useful, key) => {
                return <ListItem key={key}>{useful}</ListItem>;
              })}
            </UnorderedList>
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
