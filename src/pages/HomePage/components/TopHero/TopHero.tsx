import { Grid, Heading, VStack, Box } from "@chakra-ui/react";
import { TestComponent } from "../../../../components/TestComponent/TestComponent";
import { ResponsiveSizes } from "../../../../responsiveSizes";
import { SVGArrow } from "../SVGArrow/SVGArrow";
import "./heroGradient.scss";

export const TopHero = (): JSX.Element => {
  return (
    <Grid minH="93vh" position="relative" id="homeHero">
      <VStack display={"flex"} justifyContent={"center"} alignItems="center">
        <Heading
          fontSize={ResponsiveSizes.HeroHeaderSizes}
          textAlign={"center"}
          color={"blackAlpha.800"}
        >
          Watch your language!
        </Heading>
        <Heading
          fontSize={ResponsiveSizes.SecondaryHeaderSizes}
          textAlign={"center"}
          color={"blackAlpha.600"}
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
