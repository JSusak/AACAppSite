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
                  Face-to-face interactions.
                </Heading>
              </motion.span>
              <Divider />
              <motion.span
                variants={homePageFadeInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Text
                  fontSize={["xl", "xl", "2xl", "2xl"]}
                  maxW="xl"
                  textAlign={["center", "center", "center", "left"]}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Text>
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
