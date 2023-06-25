import {
  Heading,
  Text,
  Center,
  SimpleGrid,
  VStack,
  Button,
  Grid,
  Divider,
} from "@chakra-ui/react";
import { ImageCollage } from "../ImageCollab/ImageCollage";
import { Colours } from "../../../../colourScheme";
import { ResponsiveSizes } from "../../../../responsiveSizes";

export const WatchInPreview = (): JSX.Element => {
  return (
    <Grid minH="100vh" position="relative" mt={["4rem", "4rem", "0", "0"]}>
      <Center>
        <SimpleGrid columns={[1, 1, 1, 2]} w="90%">
          <Center>
            <VStack>
              <Heading
                fontSize={ResponsiveSizes.SecondaryHeaderSizes}
                textAlign={"center"}
              >
                Watch In AAC
              </Heading>
              <Heading
                fontSize={["2xl", "2xl", "4xl", "4xl"]}
                color={Colours.lightModeMainCol}
              >
                Private cognitive support.
              </Heading>
              <Divider />
              <Text
                fontSize={["xl", "xl", "2xl", "2xl"]}
                maxW="xl"
                textAlign={["center", "center", "center", "left"]}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Text>
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
        </SimpleGrid>
      </Center>
    </Grid>
  );
};
