import { Grid, SimpleGrid, Center, useMediaQuery, Box } from "@chakra-ui/react";
import { AppFeature } from "../AppFeature/AppFeature";
import { Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { appFeatureColourScheme } from "../../appFeatureColourSchemes";

const imageAnim = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 3,
      type: "tween",
    },
  },
};

export interface StepType {
  step: string;
  stepImage: string;
}

export const AppFeatureSection = ({
  sectionId,
  featureName,
  featureDescription,

  featureSteps,
  isOnLeft,
  initialFeatureImageURL,
  colourScheme,
}: {
  sectionId: string;
  featureName: string;
  featureDescription: string;

  featureSteps: StepType[];
  isOnLeft: boolean;
  initialFeatureImageURL: string;
  colourScheme: appFeatureColourScheme;
}): JSX.Element => {
  const [isLargerThan991] = useMediaQuery("(min-width: 991px)");
  const Feature = (): JSX.Element => {
    return (
      <Box>
        <AppFeature
          sectionId={sectionId}
          featureName={featureName}
          featureDescription={featureDescription}
          colourScheme={colourScheme}
          featureSteps={featureSteps}
        />
      </Box>
    );
  };

  const FeatureImage = (): JSX.Element => {
    return (
      <Center mt={["1rem", "1rem", "1rem", null]}>
        <motion.div
          variants={imageAnim}
          initial="hidden"
          whileInView={"visible"}
          id={`${sectionId}ImageContainer`}
          style={{ position: "relative" }}
        >
          {/*To achieve a crossfading effect, all images must be initially present.*/}
          {/*Animations cannot be achieved by directly changing the src of an image*/}
          {featureSteps.map((feature, index) => {
            return (
              <Image
                key={`${sectionId}Image${index}`}
                id={`${sectionId}Image${index}`}
                src={feature.stepImage}
                opacity={0}
                position="absolute"
                transition={"all 0.5s ease-in-out"}
                width={[350, 400, 600, 600]}
                height={[350, 400, 600, 600]}
                fallbackSrc="https://via.placeholder.com/600"
                borderRadius={"20%"}
                zIndex={1}
              />
            );
          })}
          <Image
            id={`${sectionId}Image`}
            src={initialFeatureImageURL}
            transition={"all 0.5s ease-in-out"}
            width={[350, 400, 600, 600]}
            opacity={0}
            height={[350, 400, 600, 600]}
            fallbackSrc="https://via.placeholder.com/600"
            borderRadius={"20%"}
            zIndex={2}
            pos="relative"
          />
        </motion.div>
      </Center>
    );
  };

  const featureOrder: JSX.Element[] = [
    <Feature key={"feature"} />,
    <FeatureImage key={"featureImage"} />,
  ];
  return (
    <Grid minH="100vh" position="relative">
      <SimpleGrid columns={[1, 1, 1, 2]} spacingY="2rem">
        {isLargerThan991
          ? isOnLeft
            ? featureOrder
            : featureOrder.reverse()
          : featureOrder}
      </SimpleGrid>
    </Grid>
  );
};
