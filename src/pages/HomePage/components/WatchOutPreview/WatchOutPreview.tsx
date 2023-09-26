import {
  Heading,
  Text,
  Center,
  SimpleGrid,
  VStack,
  Button,
  Grid,
  Divider,
  useColorModeValue,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { ImageCollage } from "../ImageCollab/ImageCollage";
import { ResponsiveSizes } from "../../../../responsiveSizes";
import { motion } from "framer-motion";
import { homePageFadeInLeft } from "../homePageAnims";
import { Colours } from "../../../../colourScheme";

export const WatchOutPreview = (): JSX.Element => {
  return (
    <Grid minH="100vh" position="relative">
      <Center>
        <SimpleGrid
          columns={{ base: 1, md: 1, xl: 2 }}
          mb={{ base: "0px", sm: "2rem", md: "2rem", xl: "0px" }}
          w="90%"
        >
          <Center>
            <ImageCollage
              images={[
                "./kcllogo.png",
                "./dialogue.png",
                "./images.jpg",
                "./phrases.png",
              ]}
            />
          </Center>
          <Center>
            <VStack>
              <motion.span
                variants={homePageFadeInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Heading
                  fontSize={ResponsiveSizes.SecondaryHeaderSizes}
                  textAlign={"center"}
                >
                  Watch Out AAC
                </Heading>
              </motion.span>
              <motion.span
                variants={homePageFadeInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Heading
                  fontSize={["2xl", "2xl", "4xl", "4xl"]}
                  color={useColorModeValue(
                    Colours.lightModeWatchOutAccent,
                    Colours.darkModeWatchOutAccent
                  )}
                >
                  Face-to-face communication.
                </Heading>
              </motion.span>
              <Divider />
              <motion.span
                variants={homePageFadeInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <VStack maxW="xl">
                  <Text
                    fontSize={["xl", "xl", "2xl", "2xl"]}
                    textAlign={["center", "center", "center", "left"]}
                  >
                    Our first app, Watch Out supports public face-to-face
                    communication. Simply, pass messages to onlookers via the
                    smartwatch display. Have the freedom to pass custom messages
                    silently or with accompanied body gestures.
                  </Text>
                  <UnorderedList fontSize={["lg", "lg", "xl", "xl"]}>
                    <ListItem>
                      Tap to have the phrase read aloud, tap for a buzzer, tap
                      for recognisable blue accessibility badge and to reverse
                      display to show more easily.
                    </ListItem>
                    <ListItem>
                      Save messages for quick access on your smartwatch on the
                      go.
                    </ListItem>
                    <ListItem>Quick navigation with swipe interface.</ListItem>
                  </UnorderedList>
                </VStack>
              </motion.span>
              <Divider />

              <SimpleGrid columns={2} mt="2rem" spacing={"2rem"}>
                <Button size={"lg"} colorScheme="blue" variant="outline">
                  Learn More
                </Button>
                <Button size={"lg"} colorScheme="blue">
                  Install Now
                </Button>
              </SimpleGrid>
            </VStack>
          </Center>
        </SimpleGrid>
      </Center>
    </Grid>
  );
};
