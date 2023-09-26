import {
  Grid,
  Heading,
  VStack,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import { ResponsiveSizes } from "../../../../responsiveSizes";
import { SVGArrow } from "../SVGArrow/SVGArrow";
import "./heroGradient.scss";
import { Colours } from "../../../../colourScheme";

export const TopHero = (): JSX.Element => {
  return (
    <Grid
      minH="93vh"
      position="relative"
      id="homeHero"
      background={useColorModeValue(
        `linear-gradient(135deg, hsla(32, 100%, 82%, 1) 30%, #A4CEFF 100%);`,
        `linear-gradient(135deg,${Colours.darkModeMainCol} 30%, ${Colours.darkModeNavColHighlight} 100%);`
      )}
      transition={"all 0.3s ease-in-out"}
      borderBottom={useColorModeValue("solid black", "solid white")}
    >
      <VStack display={"flex"} justifyContent={"center"} alignItems="center">
        <Heading
          fontSize={ResponsiveSizes.HeroHeaderSizes}
          textAlign={"center"}
          maxW={"90%"}
        >
          Use a smartwatch to support your communication now!
        </Heading>
        <Heading
          fontSize={ResponsiveSizes.SecondaryHeaderSizes}
          textAlign={"center"}
          color={useColorModeValue("blackAlpha.600", "whiteAlpha.600")}
          maxW={"90%"}
        >
          Use AAC freely 'on the go' from your wrist.
        </Heading>
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
