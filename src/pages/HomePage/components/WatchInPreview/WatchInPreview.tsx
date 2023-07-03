import {
  Heading,
  Text,
  Center,
  SimpleGrid,
  VStack,
  Button,
  Grid,
  Divider,
  useMediaQuery,
} from "@chakra-ui/react";
import { ImageCollage } from "../ImageCollab/ImageCollage";
import { Colours } from "../../../../colourScheme";
import { motion } from "framer-motion";
import { ResponsiveSizes } from "../../../../responsiveSizes";
import { homePageFadeInRight } from "../homePageAnims";

export const WatchInPreview = (): JSX.Element => {
  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");

  const ImageCollageContainer = (): JSX.Element => {
    return (
      <Center>
        <ImageCollage
          images={[
            "./kcllogo.png",
            "./phrases.png",
            "./images.jpg",
            "./dialogue.png",
          ]}
        />
      </Center>
    );
  };

  const WatchInContainer = (): JSX.Element => {
    return (
      <Center>
        <VStack>
          <motion.span
            variants={homePageFadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Heading
              fontSize={ResponsiveSizes.SecondaryHeaderSizes}
              textAlign={"center"}
            >
              Watch In AAC
            </Heading>
          </motion.span>
          <motion.span
            variants={homePageFadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Heading
              fontSize={["2xl", "2xl", "4xl", "4xl"]}
              color={Colours.lightModeMainCol}
            >
              Private cognitive support.
            </Heading>
          </motion.span>
          <Divider />
          <motion.span
            variants={homePageFadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Text
              fontSize={["xl", "xl", "2xl", "2xl"]}
              maxW="xl"
              textAlign={["center", "center", "center", "left"]}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
          </motion.span>
          <Divider />

          <SimpleGrid columns={2} mt="2rem" spacing={"2rem"}>
            <Button size={"lg"} colorScheme="orange" variant="outline">
              Learn More
            </Button>
            <Button size={"lg"} colorScheme="orange">
              Install Now
            </Button>
          </SimpleGrid>
        </VStack>
      </Center>
    );
  };

  return (
    <Grid minH="100vh" position="relative" mt={["4rem", "4rem", "0", "0"]}>
      <Center>
        <SimpleGrid
          columns={{ base: 1, md: 1, xl: 2 }}
          mt={{ base: "0px", md: "2rem", xl: "0px" }}
          mb={{ base: "0px", sm: "2rem", md: "2rem", xl: "0px" }}
          w="90%"
        >
          {/*To allow the preview to have an opposite layout effect and still have the image on top 
          in small screens, you have to check the screen size and}*/}
          {isLargerThan1280 ? (
            <>
              <WatchInContainer />
              <ImageCollageContainer />
            </>
          ) : (
            <>
              <ImageCollageContainer />
              <WatchInContainer />
            </>
          )}
        </SimpleGrid>
      </Center>
    </Grid>
  );
};
