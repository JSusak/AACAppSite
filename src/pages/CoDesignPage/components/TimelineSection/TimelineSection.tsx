import { Box, Center, Container, Heading, Text } from "@chakra-ui/react";
import "./timelinesection.scss";

import { TimelineBeadSection } from "./TimelineBeadSection";
import { timelineCardContents } from "./timelineCardContents";

export const TimelineSection = (): JSX.Element => {
  return (
    <>
      {/*.Wrapper for the whole timeline*/}
      <Container maxW={"95%"} p="2rem" mb="4rem">
        {/* Timeline heading, content before the actual timeline...*/}
        <Box textAlign={"center"} mb="2rem">
          <Center>
            <Heading fontSize={"6xl"}>Project Timeline</Heading>
          </Center>
          <Center>
            <Text maxW="lg">Take a look at some of the activities we did!</Text>
          </Center>
        </Box>

        {/* Actual timeline container */}
        <Container position="relative" minH={"300px"} maxW={"90%"}>
          <Center>
            <div className="line"></div>
          </Center>

          <Center>
            <div className="circle beadTip" id="beadstart"></div>
          </Center>

          {timelineCardContents.map((card, index) => {
            return (
              <TimelineBeadSection
                orderInTimeline={index}
                isOnLeft={index % 2 === 0}
                cardImageURL={card.cardImageURL}
                cardName={card.cardName}
                modalDescription={card.modalDescription}
                activityLocation={card.activityLocation}
                activityDate={card.activityDate}
                taskList={card.activityTasks}
              />
            );
          })}

          <Center>
            <div className="circle beadTip"></div>
          </Center>
        </Container>
      </Container>
    </>
  );
};
