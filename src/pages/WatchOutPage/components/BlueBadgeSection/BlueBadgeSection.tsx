import { Grid, Center, SimpleGrid, useMediaQuery } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Parallax } from "react-scroll-parallax";
import { AppFeature } from "../AppFeature/AppFeature";

export const BlueBadgeSection = (): JSX.Element => {
  const [isLargerThan790] = useMediaQuery("(min-width: 790px)");

  return (
    <Grid minH="100vh" position="relative">
      <SimpleGrid columns={[1, 1, 2, 2]} spacingY="2rem">
        <AppFeature
          featureName={"Feature 3"}
          featureDescription={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          }
          numericFacts={["Numeric Fact 1", "Numeric Fact 2", "Numeric Fact 2"]}
          usefulWhen={[
            "Useful situation 1",
            "Useful situation 2",
            "Useful situation 3",
          ]}
          catchyLine={"Catchy line 3"}
          isOnLeft={true}
        />

        <Center>
          <Parallax
            speed={isLargerThan790 ? 8 : 0}
            easing="easeInOutQuad"
            opacity={[0, 1]}
          >
            <Image
              src="./watchOut/bluebadge.jpg"
              width={[400, 400, 600, 600]}
              height={[400, 400, 600, 600]}
              fallbackSrc="https://via.placeholder.com/600"
              borderRadius={"20%"}
            />
          </Parallax>
        </Center>
      </SimpleGrid>
    </Grid>
  );
};
