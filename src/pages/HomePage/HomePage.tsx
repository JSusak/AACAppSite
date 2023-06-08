import {
  Heading,
  Text,
  Center,
  SimpleGrid,
  VStack,
  Button,
  Grid,
  Image,
  Divider,
} from "@chakra-ui/react";
import { TestComponent } from "../../components/TestComponent/TestComponent";
//import { useState } from "react";
//import { Colours } from "../../colourScheme";

export const HomePage: React.FC = (): JSX.Element => {
  return (
    <>
      {/* Top section */}
      <Grid backgroundColor={"red.100"} minH="93vh" position="relative">
        <VStack display={"flex"} justifyContent={"center"} alignItems="center">
          <Heading fontSize={"9xl"}>Watch your language!</Heading>
          <Heading fontSize={"6xl"}>The future of AAC smartwatch apps.</Heading>
          <Heading fontSize={"5xl"}>A project by Mr. Humphrey Curtis.</Heading>
          <TestComponent />
        </VStack>

        <Text
          position="absolute"
          bottom="0"
          justifyContent={"center"}
          left="50%"
          transform="translate(-50%, 0)"
        >
          Down arrow SVG (Scroll down!)
        </Text>
      </Grid>
      {/* Our mission section*/}
      <Grid backgroundColor={"green.100"} minH="100vh" position="relative">
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
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Text>
              <Divider />
              <SimpleGrid columns={3} spacing={"2rem"} mt="4rem">
                <Button colorScheme="teal" size={"lg"}>
                  What is Aphasia?
                </Button>
                <Button colorScheme="teal" size={"lg"}>
                  {" "}
                  Project Description
                </Button>
                <Button colorScheme="teal" size={"lg"}>
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

      {/* Watch out section*/}
      <Grid backgroundColor={"blue.100"} minH="100vh" position="relative">
        <SimpleGrid columns={2}>
          <Center>
            <Text>Image collage goes here</Text>
          </Center>
          <Center>
            <VStack>
              <Heading fontSize={"8xl"}>Watch Out.</Heading>
              <Heading fontSize={"4xl"}>Face-to-face interactions.</Heading>
              <Divider />
              <Text fontSize={"2xl"} maxW="xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Text>
              <Divider />

              <SimpleGrid columns={2} mt="4rem" spacing={"2rem"}>
                <Button size={"lg"} colorScheme="teal">
                  Learn More
                </Button>
                <Button size={"lg"} colorScheme="teal">
                  Install Now
                </Button>
              </SimpleGrid>
            </VStack>
          </Center>
        </SimpleGrid>
      </Grid>

      {/* Watch in section*/}
      <Grid backgroundColor={"yellow.100"} minH="100vh" position="relative">
        <SimpleGrid columns={2}>
          <Center>
            <VStack>
              <Heading fontSize={"8xl"}>Watch In.</Heading>
              <Heading fontSize={"4xl"}>Private cognitive support.</Heading>
              <Divider />
              <Text fontSize={"2xl"} maxW="xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Text>
              <Divider />

              <SimpleGrid columns={2} mt="4rem" spacing={"2rem"}>
                <Button size={"lg"} colorScheme="teal">
                  Learn More
                </Button>
                <Button size={"lg"} colorScheme="teal">
                  Install Now
                </Button>
              </SimpleGrid>
            </VStack>
          </Center>

          <Center>
            <Text>Image collage goes here</Text>
          </Center>
        </SimpleGrid>
      </Grid>

      {/* Watch in section*/}
      <Grid backgroundColor={"pink.100"} minH="100vh" position="relative">
        <VStack mt="6rem">
          <Heading fontSize={"8xl"}>Video Demonstration</Heading>
          <Heading fontSize={"4xl"}>See the apps for yourself!</Heading>

          <Heading mt="4rem">Embedded YT video can go here.</Heading>
        </VStack>
      </Grid>
    </>
  );
};
