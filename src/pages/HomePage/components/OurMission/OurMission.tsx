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

export const OurMission = (): JSX.Element => {
  return (
    <Grid minH="100vh" position="relative">
      <VStack
        mt="2rem"
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <SimpleGrid columns={3}>
          <Center>
            <Image
              src="gibbresh.png"
              fallbackSrc="https://via.placeholder.com/500"
              borderRadius={"20%"}
            />
          </Center>

          <VStack>
            <Heading fontSize={"8xl"}>Our Mission.</Heading>
            <Divider />
            <Text fontSize={"2xl"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            <Divider />
            <SimpleGrid columns={3} spacing={"2rem"} mt="4rem">
              <Button colorScheme="orange" size={"lg"}>
                {" "}
                Project Description
              </Button>
              <Button colorScheme="blue" size={"lg"}>
                What is Aphasia?
              </Button>

              <Button colorScheme="blue" size={"lg"}>
                View Contributors
              </Button>
            </SimpleGrid>
          </VStack>

          <Center>
            <Image
              src="gibbresh.png"
              fallbackSrc="https://via.placeholder.com/500"
              borderRadius={"20%"}
            />
          </Center>
        </SimpleGrid>
      </VStack>
    </Grid>
  );
};
