import { Grid, Center, SimpleGrid } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Parallax } from "react-scroll-parallax";
import { AppFeature } from "../AppFeature/AppFeature";

export const PhrasesSection = (): JSX.Element => {
  return (
    <Grid minH="100vh" position="relative">
      <SimpleGrid columns={2}>
        <AppFeature
          featureName={"Feature 1"}
          featureDescription={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          }
          numericFacts={["Numeric Fact 1", "Numeric Fact 2", "Numeric Fact 2"]}
          usefulWhen={[
            "Useful situation 1",
            "Useful situation 2",
            "Useful situation 3",
          ]}
          catchyLine={"Catchy line 1"}
          isOnLeft={true}
        />

        <Center>
          <Parallax
            translateX={["-300px", "0px"]}
            easing="easeInOutQuad"
            opacity={[0, 1]}
          >
            <Image
              src="./watchOut/menu.jpg"
              onMouseOver={e => (e.currentTarget.src = "./watchOut/seat.jpg")}
              onMouseOut={e => (e.currentTarget.src = "./watchOut/menu.jpg")}
              width={600}
              height={600}
              fallbackSrc="https://via.placeholder.com/600"
              borderRadius={"20%"}
            />
          </Parallax>
        </Center>
      </SimpleGrid>
    </Grid>
  );
};
