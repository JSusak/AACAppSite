import {
  Center,
  Heading,
  VStack,
  Text,
  IconButton,
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
  const [currentIndex, setCurrentIndex] = useState(steps.length - 1);
  const [isHidden, setIsHidden] = useState(true);

  const decrementIndex = () => {
    setCurrentIndex(currentIndex - 1);
  };

  const incrementIndex = () => {
    setCurrentIndex(currentIndex + 1);
  };

  const modifyFeatureImage = () => {
    document
      .getElementById(`${featureSectionId}Image`)!
      .setAttribute("src", steps[currentIndex].stepImage);
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
            setCurrentIndex(0);
            setIsHidden(false);
          }}
        >
          View Demo
        </Button>
      </Center>
      <Center display={isHidden ? "none" : "block"}>
        <VStack spacing={"2rem"} fontSize={["lg", "lg", "lg", "xl"]}>
          <Heading color={accentColour}>{`Step ${currentIndex + 1}:`}</Heading>
          <Text>{steps[currentIndex].step}</Text>

          <SimpleGrid columns={2}>
            <IconButton
              aria-label="View Previous step"
              variant={"outline"}
              icon={<FaArrowLeft />}
              isDisabled={currentIndex === 0}
              onClick={decrementIndex}
            />
            <IconButton
              aria-label="View next step"
              variant="outline"
              icon={<FaArrowRight />}
              isDisabled={currentIndex === steps.length - 1}
              onClick={incrementIndex}
            />
          </SimpleGrid>
        </VStack>
      </Center>
    </>
  );
};
