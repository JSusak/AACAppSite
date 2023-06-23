import { Center, Grid, Heading, VStack, Text } from "@chakra-ui/react";
import { timelineCardContents } from "./timelineCardContents";
import { TimelineCardCompact } from "./TimelineCardCompact";
import Xarrow from "react-xarrows";
import { useState } from "react";
import { Colours } from "../../../../colourScheme";

export const TimelineSectionCompact = (): JSX.Element => {
  const [arrow, setArrow] = useState(false);

  return (
    <Grid minH="93vh" position="relative">
      <VStack mt="2rem" mb="2rem">
        <Heading textAlign={"center"}>Project Timeline</Heading>
        <Heading textAlign={"center"} fontSize={"2xl"}>
          (Compact Version)
        </Heading>
        <Center mb="2rem">
          <Text maxW="lg">Take a look at some of the activities we did!</Text>
        </Center>

        <VStack spacing={"5rem"}>
          {timelineCardContents.map((card, index) => {
            return (
              <>
                {arrow && timelineCardContents.length != index + 1 ? (
                  <Xarrow
                    start={`compactCard${index}`}
                    end={`compactCard${index + 1}`}
                    color={Colours.lightModeMainCol}
                  />
                ) : null}
                <TimelineCardCompact
                  id={`compactCard${index}`}
                  cardImageURL={card.cardImageURL}
                  cardName={card.cardName}
                  modalDescription={card.modalDescription}
                  activityLocation={card.activityLocation}
                  activityDate={card.activityDate}
                  taskList={card.activityTasks}
                  onImageLoad={() => setArrow(true)}
                />
              </>
            );
          })}
        </VStack>
      </VStack>
    </Grid>
  );
};
