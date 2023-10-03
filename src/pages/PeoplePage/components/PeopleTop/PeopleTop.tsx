import {
  Grid,
  SimpleGrid,
  VStack,
  Heading,
  Highlight,
  Text,
  Image,
  Center,
  useColorModeValue,
} from "@chakra-ui/react";
import { ResponsiveSizes } from "../../../../responsiveSizes";
import { motion } from "framer-motion";
import { gridStagger, horizontalFade } from "../../../../Animations";

const topHeroImageAnim = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
    },
  },
};

export const PeopleTop = (): JSX.Element => {
  return (
    <Grid minH="43vh" position="relative">
      <SimpleGrid columns={[1, 1, 1, 3]} mt="1rem" spacingY="2rem">
        <Center>
          <motion.div
            variants={topHeroImageAnim}
            initial="hidden"
            animate="visible"
          >
            <Image
              width={"290px"}
              height="290px"
              boxShadow={"2px 12px 20px rgba(0,0,0,0.2);"}
              display={["none", "none", "none", "block"]}
              src="./kclskyline.jpg"
              objectFit={"cover"}
              fallbackSrc="https://via.placeholder.com/300"
              borderRadius={"20px"}
            />
          </motion.div>
        </Center>

        <Center>
          <VStack
            as={motion.div}
            variants={gridStagger}
            initial="hidden"
            animate="visible"
          >
            <Heading
              fontSize={ResponsiveSizes.HeroHeaderSizes}
              as={motion.span}
              variants={horizontalFade}
            >
              People
            </Heading>
            <Text
              fontSize={"xl"}
              maxW="90%"
              textAlign={"center"}
              as={motion.span}
              variants={horizontalFade}
            >
              <Highlight
                query={[
                  "Department of Informatics",
                  "Speech & Language Therapists",
                  "independent charities",
                ]}
                styles={{
                  px: "2",
                  py: "1",
                  rounded: "full",
                  bg: useColorModeValue("blue.100", "whiteAlpha.700"),
                }}
              >
                The team behind both AAC smartwatch apps is led by members of
                the Human Centered Computing Research Group at King's College
                London in partnership with independent national charity Aphasia
                Re-Connect. Aphasia Re-Connect work together in partnership,
                running peer-led groups, training and peer befriending to
                support people with aphasia to re-connect with life.
              </Highlight>
            </Text>
          </VStack>
        </Center>

        <Center>
          <motion.div
            variants={topHeroImageAnim}
            initial="hidden"
            animate="visible"
          >
            <Image
              width={"290px"}
              height="290px"
              boxShadow={"2px 12px 20px rgba(0,0,0,0.2);"}
              display={["none", "none", "none", "block"]}
              src="./bushhouseinside.jpg"
              objectFit={"cover"}
              fallbackSrc="https://via.placeholder.com/300"
              borderRadius={"20px"}
            />
          </motion.div>
        </Center>
      </SimpleGrid>
    </Grid>
  );
};
