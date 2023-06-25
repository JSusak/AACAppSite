import { Grid, Heading, VStack, Text } from "@chakra-ui/react";
import { TestComponent } from "../../../../components/TestComponent/TestComponent";
import { ResponsiveSizes } from "../../../../responsiveSizes";

export const TopHero = (): JSX.Element => {
  return (
    <Grid minH="93vh" position="relative">
      <VStack display={"flex"} justifyContent={"center"} alignItems="center">
        <Heading
          fontSize={ResponsiveSizes.HeroHeaderSizes}
          textAlign={"center"}
        >
          Watch your language!
        </Heading>
        <Heading
          fontSize={ResponsiveSizes.SecondaryHeaderSizes}
          textAlign={"center"}
        >
          The future of AAC smartwatch apps.
        </Heading>

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
