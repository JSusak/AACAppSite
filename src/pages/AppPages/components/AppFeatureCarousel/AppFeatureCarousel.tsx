import {
  Center,
  Heading,
  VStack,
  Text,
  SimpleGrid,
  Button,
  Box,
} from "@chakra-ui/react";
import { StepType } from "../AppFeatureSection/AppFeatureSection";
import { FaArrowLeft, FaArrowRight, FaPlay } from "react-icons/fa";
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
  const [isHidden, setIsHidden] = useState(true);

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
      } else {
        document.getElementById(`${featureSectionId}Image${i}`)!.style.opacity =
          "1";
      }
    }
  };

  useEffect(() => {
    modifyFeatureImage();
  }, [currentIndex]);
  return (
    <>
      <Box
        w="100%"
        minH="100%"
        borderWidth={isHidden ? "0px" : "0.5px"}
        borderRadius={"10px"}
        position={"relative"}
        borderColor={colourScheme.accent}
      >
        <Box>
          <Center>
            <Button
              zIndex={100}
              pos={"absolute"}
              top="50%"
              size={"lg"}
              transform={"translate(0,-50%)"}
              display={isHidden ? " flex" : "none"}
              onClick={() => {
                document.getElementById(
                  `${featureSectionId}Image`
                )!.style.opacity = "0";
                setCurrentIndex(0);
                modifyFeatureImage();
                setIsHidden(false);
              }}
              leftIcon={<FaPlay />}
              variant={"outline"}
              colorScheme={colourScheme.buttonColour}
            >
              Play Demo
            </Button>
          </Center>
        </Box>
        <Center
          opacity={isHidden ? "0" : "1"}
          transition={"all 0.5s ease-in-out"}
          p="0.5rem"
        >
          <VStack spacing={"1rem"} fontSize={["lg", "lg", "lg", "xl"]}>
            <Heading color={colourScheme.accent} textAlign={"center"}>{`Step ${
              currentIndex + 1
            }:`}</Heading>
            <Text textAlign={"center"}>{steps[currentIndex].step}</Text>

            <SimpleGrid columns={2} w="100%" spacing="2rem">
              <Button
                aria-label="View Previous step"
                variant={"outline"}
                colorScheme={colourScheme.buttonColour}
                leftIcon={<FaArrowLeft />}
                isDisabled={currentIndex === 0}
                onClick={decrementIndex}
              >
                Previous
              </Button>

              <Button
                aria-label="View next step"
                variant="outline"
                colorScheme={colourScheme.buttonColour}
                rightIcon={<FaArrowRight />}
                isDisabled={currentIndex === steps.length - 1}
                onClick={incrementIndex}
              >
                Next
              </Button>
            </SimpleGrid>
          </VStack>
        </Center>
      </Box>
    </>
  );
};
