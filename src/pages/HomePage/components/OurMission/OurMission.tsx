import { Button } from "@chakra-ui/button";
import {
  SimpleGrid,
  VStack,
  Grid,
  Center,
  Heading,
  Divider,
  Text,
} from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { ResponsiveSizes } from "../../../../responsiveSizes";

export const OurMission = (): JSX.Element => {
  return (
    <Grid minH="100vh" position="relative">
      <VStack
        mt="2rem"
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <VStack>
          <Heading
            fontSize={ResponsiveSizes.HeroHeaderSizes}
            textAlign={"center"}
          >
            Our Mission.
          </Heading>
          <Divider />
          <Text
            fontSize={["xl", "xl", "2xl", "2xl"]}
            w="90%"
            textAlign={["center", "center", "center", "left"]}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <Divider />
          <SimpleGrid columns={2}>
            <Center>
              <Image
                src="gibbresh.png"
                w="80%"
                fallbackSrc="https://via.placeholder.com/400"
                borderRadius={"20%"}
              />
            </Center>
            <Center>
              <Image
                src="gibbresh.png"
                w="80%"
                fallbackSrc="https://via.placeholder.com/400"
                borderRadius={"20%"}
              />
            </Center>
          </SimpleGrid>
          <SimpleGrid columns={1} spacing={"1rem"} mt="2rem" mb="2rem">
            <Button colorScheme="orange" size={"lg"}>
              {" "}
              Project Description
            </Button>
            <Button colorScheme="blue" size={"lg"}>
              What is Aphasia?
            </Button>

            <Button colorScheme="blue" size={"lg"} variant={"outline"}>
              View Contributors
            </Button>
          </SimpleGrid>
        </VStack>
      </VStack>
    </Grid>
  );
};
