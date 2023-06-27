import { Grid, Heading, VStack, Box } from "@chakra-ui/react";
import { TestComponent } from "../../../../components/TestComponent/TestComponent";
import { ResponsiveSizes } from "../../../../responsiveSizes";
import { SVGArrow } from "../SVGArrow/SVGArrow";

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

      <Box
        position="absolute"
        bottom="0"
        justifyContent={"center"}
        left="50%"
        transform="translate(-50%, 0)"
      >
        <SVGArrow iconSize="50px" />
      </Box>
    </Grid>
  );
};
