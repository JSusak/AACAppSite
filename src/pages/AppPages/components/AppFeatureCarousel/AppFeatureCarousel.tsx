import {
  Center,
  Heading,
  VStack,
  Text,
  SimpleGrid,
  Button,
} from "@chakra-ui/react";
import { StepType } from "../AppFeatureSection/AppFeatureSection";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react";

//Component containing the logic for the specific carousel tied to an app feature.
//By clicking the two arrows, users can understand how to use a specific feature.
//sectionId needs to be passed in to obtain a reference to the correct image to switch
//as the user clicks on the arrows.
export const AppFeatureCarousel = ({
  steps,
  featureSectionId,
  accentColour,
}: {
  steps: StepType[];
  featureSectionId: string;
  accentColour: string;
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
      <Center>
        <Button
          display={isHidden ? " block" : "none"}
          onClick={() => {
            document.getElementById(`${featureSectionId}Image`)!.style.opacity =
              "0";
            setCurrentIndex(0);
            modifyFeatureImage();
            setIsHidden(false);
          }}
          colorScheme="blackAlpha"
        >
          View Demo
        </Button>
      </Center>
      <Center display={isHidden ? "none" : "block"}>
        <VStack spacing={"2rem"} fontSize={["lg", "lg", "lg", "xl"]}>
          <Heading color={accentColour}>{`Step ${currentIndex + 1}:`}</Heading>
          <Text>{steps[currentIndex].step}</Text>

          <SimpleGrid columns={2} w="100%" spacing="2rem">
            <Button
              aria-label="View Previous step"
              variant={"outline"}
              colorScheme="blackAlpha"
              leftIcon={<FaArrowLeft />}
              isDisabled={currentIndex === 0}
              onClick={decrementIndex}
            >
              Previous step
            </Button>

            <Button
              aria-label="View next step"
              variant="outline"
              colorScheme="blackAlpha"
              rightIcon={<FaArrowRight />}
              isDisabled={currentIndex === steps.length - 1}
              onClick={incrementIndex}
            >
              Next step
            </Button>
          </SimpleGrid>
        </VStack>
      </Center>
    </>
  );
};
