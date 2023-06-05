import {
  Heading,
  Text,
  Center,
  SimpleGrid,
  VStack,
  Button,
} from "@chakra-ui/react";
import { TestComponent } from "../../components/TestComponent/TestComponent";
//import { useState } from "react";
//import { Colours } from "../../colourScheme";

export const HomePage: React.FC = (): JSX.Element => {
  return (
    <>
      <Center>
        <VStack>
          <Heading fontSize={"9xl"}>Watch your language!</Heading>
          <Heading fontSize={"6xl"}>The future of AAC smartwatch apps.</Heading>
          <Text fontSize={"lg"} maxW={"5xl"}>
            Acting as the first co-designed AAC of its kind, researchers at
            King's College London have collaborated closely with SLTs and
            volunteers with Aphasia to develop 2 revolutionary smartwatch apps,
            assisting in face-to-face interactions and private cognitive
            support.
          </Text>
          <Text fontSize={"lg"} maxW="5xl">
            The project is led by Mr. Humphrey Curtis and supervised by Dr.
            Timothy Neate, alongside a wider team of academic and non-academic
            partners.
          </Text>
        </VStack>
      </Center>

      <TestComponent />

      <Center>
        <SimpleGrid columns={4} spacing={5}>
          <Button>Project Description</Button>
          <Button>What is Aphasia?</Button>
          <Button>View Contributors</Button>
          <Button>Send Feedback</Button>
        </SimpleGrid>
      </Center>

      <SimpleGrid columns={2} spacing={10} mt="2rem" mb="2rem">
        <Button height="40vh">Aphasia Phrases (Watch Out SVG)</Button>
        <Button height="40vh">Aphasia Dialogue (Watch In SVG)</Button>
      </SimpleGrid>
    </>
  );
};
