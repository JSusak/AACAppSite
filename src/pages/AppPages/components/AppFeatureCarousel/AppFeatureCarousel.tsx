import {
  Center,
  Heading,
  VStack,
  Text,
  SimpleGrid,
  Button,
  Box,
  useMediaQuery,
} from "@chakra-ui/react";
import { StepType } from "../AppFeatureSection/AppFeatureSection";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import { appFeatureColourScheme } from "../../appFeatureColourSchemes";

//Component containing the logic for the specific carousel tied to an app feature.
//By clicking the two arrows, users can understand how to use a specific feature.
//sectionId needs to be passed in to obtain a reference to the correct image to switch
//as the user clicks on the arrows.
export const AppFeatureCarousel = ({
  steps,
  featureSectionId,
  colourScheme,
}: {
  steps: StepType[];
  featureSectionId: string;
  colourScheme: appFeatureColourScheme;
}): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLargerThan991] = useMediaQuery("(min-width: 991px)");

  const decrementIndex = () => {
    setCurrentIndex(currentIndex - 1);
  };

  const incrementIndex = () => {
    setCurrentIndex(currentIndex + 1);
  };

  //Modify all image opacities. The current index's image should be visible, an opacity of 1,
  //while the rest are 0.
  const modifyFeatureImage = () => {
    for (let i = 0; i < steps.length; i++) {
      if (i != currentIndex) {
        document.getElementById(`${featureSectionId}Image${i}`)!.style.opacity =
          "0";
        document.getElementById(
          `${featureSectionId}Image${i}Step`
        )!.style.opacity = "0";
      } else {
        document.getElementById(`${featureSectionId}Image${i}`)!.style.opacity =
          "1";
        document.getElementById(
          `${featureSectionId}Image${i}Step`
        )!.style.opacity = "1";
      }
    }
  };

  useEffect(() => {
    modifyFeatureImage();
  }, [currentIndex]);
  return (
    <>
      <Box
        width={"100%"}
        //borderColor={isHidden ? "transparent" : colourScheme.accent}
        transition={"all 0.3s ease-in-out"}
        pointerEvents={"all"}
        wordBreak={"break-word"}
      >
        <Center opacity={1} transition={"all 0.5s ease-in-out"} p="0.5rem">
          <VStack spacing={"0.5rem"} fontSize={["lg", "lg", "lg", "xl"]}>
            <Heading
              color={colourScheme.accent}
              textAlign={"center"}
              fontSize={"5xl"}
            >{`Step ${currentIndex + 1}:`}</Heading>
            <SimpleGrid columns={2} spacing="2rem">
              <Button
                aria-label="View Previous step"
                variant={"outline"}
                size={"lg"}
                colorScheme={colourScheme.buttonColour}
                leftIcon={<FaArrowLeft />}
                isDisabled={currentIndex === 0}
                onClick={decrementIndex}
                pointerEvents={"all"}
              >
                Previous
              </Button>

              <Button
                aria-label="View next step"
                variant="outline"
                size={"lg"}
                colorScheme={colourScheme.buttonColour}
                rightIcon={<FaArrowRight />}
                isDisabled={currentIndex === steps.length - 1}
                onClick={incrementIndex}
                pointerEvents={"all"}
              >
                Next
              </Button>
            </SimpleGrid>
            <Text
              textAlign={"center"}
              fontSize={["xl", "2xl", "3xl", "3xl"]}
              p="2rem"
              display={isLargerThan991 ? "inherit" : "none"}
            >
              {steps[currentIndex].step}
            </Text>
          </VStack>
        </Center>
      </Box>
    </>
  );
};
