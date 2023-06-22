import { Grid, SimpleGrid, Center } from "@chakra-ui/react";
import { AppFeature } from "../AppFeature/AppFeature";
import { Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

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
  numericFacts,
  catchyLine,
  featureSteps,
  isOnLeft,
  initialFeatureImageURL,
  accentColour,
}: {
  sectionId: string;
  featureName: string;
  featureDescription: string;
  numericFacts: string[];
  featureSteps: StepType[];
  catchyLine: string;
  isOnLeft: boolean;
  initialFeatureImageURL: string;
  accentColour: string;
}): JSX.Element => {
  const Feature = (): JSX.Element => {
    return (
      <AppFeature
        sectionId={sectionId}
        featureName={featureName}
        featureDescription={featureDescription}
        numericFacts={numericFacts}
        catchyLine={catchyLine}
        isOnLeft={isOnLeft}
        accentColour={accentColour}
        featureSteps={featureSteps}
      />
    );
  };

  const FeatureImage = (): JSX.Element => {
    return (
      <Center>
        <motion.div
          variants={imageAnim}
          initial="hidden"
          whileInView={"visible"}
        >
          <Image
            id={`${sectionId}Image`}
            src={initialFeatureImageURL}
            transition={"all 0.3s ease-in-out"}
            width={[400, 400, 600, 600]}
            height={[400, 400, 600, 600]}
            fallbackSrc="https://via.placeholder.com/600"
            borderRadius={"20%"}
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
      <SimpleGrid columns={[1, 1, 2, 2]} spacingY="2rem">
        {isOnLeft ? featureOrder : featureOrder.reverse()}
      </SimpleGrid>
    </Grid>
  );
};
