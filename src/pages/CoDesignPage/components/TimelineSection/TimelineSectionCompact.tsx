import { Grid, Heading, VStack } from "@chakra-ui/react";
import { timelineCardContents } from "./timelineCardContents";
import { TimelineCardCompact } from "./TimelineCardCompact";

export const TimelineSectionCompact = (): JSX.Element => {
  return (
    <Grid minH="93vh" position="relative">
      <VStack mt="2rem">
        <Heading textAlign={"center"}>
          Timeline Compact. A list of card-like embeds in a stack. The embeds
          have to be different that the large version though.
        </Heading>

        {timelineCardContents.map((card, index) => {
          return (
            <TimelineCardCompact
              id={index}
              cardImageURL={card.cardImageURL}
              cardName={card.cardName}
              modalDescription={card.modalDescription}
              activityLocation={card.activityLocation}
              activityDate={card.activityDate}
              taskList={card.activityTasks}
            />
          );
        })}
      </VStack>
    </Grid>
  );
};
