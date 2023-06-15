import { Grid, Heading, VStack, Text } from "@chakra-ui/react";
import { TestComponent } from "../../../../components/TestComponent/TestComponent";

export const TopHero = (): JSX.Element => {
  return (
    <Grid minH="93vh" position="relative">
      <VStack display={"flex"} justifyContent={"center"} alignItems="center">
        <Heading fontSize={"9xl"}>Watch your language!</Heading>
        <Heading fontSize={"6xl"}>The future of AAC smartwatch apps.</Heading>

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
  );
};
