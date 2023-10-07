import {
  Box,
  Center,
  Container,
  Heading,
  Text,
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";
import "./timelinesection.scss";

import { TimelineBeadSection } from "./TimelineBeadSection";
import { timelineCardContents } from "./timelineCardContents";
import { Colours } from "../../../../colourScheme";

export const TimelineSection = (): JSX.Element => {
  const [isSmallerThan991] = useMediaQuery("(max-width: 991px)");
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
            <Text maxW="lg" fontSize={"xl"}>
              {" "}
              Take a look at some of the workshops we conducted. Traverse the
              timeline and interact with specific cards to find out more
              information about workshops.
            </Text>
          </Center>
        </Box>

        {/* Actual timeline container */}
        <Container position="relative" minH={"300px"} maxW={"90%"}>
          <Center display={isSmallerThan991 ? "none" : "flex"}>
            <div
              className="line"
              style={{
                backgroundColor: useColorModeValue(
                  "#ffd5a4",
                  Colours.darkModeMainCol
                ),
              }}
            ></div>
          </Center>

          <Center display={isSmallerThan991 ? "none" : "flex"}>
            <div
              className="circle beadTip"
              id="beadstart"
              style={{
                background: useColorModeValue(
                  "#ffd5a4",
                  Colours.darkModeMainCol
                ),
              }}
            ></div>
          </Center>

          {timelineCardContents.map((card, index) => {
            return (
              <TimelineBeadSection
                orderInTimeline={index}
                isOnLeft={index % 2 === 0}
                isCompact={isSmallerThan991}
                cardImageURL={card.cardImageURL}
                cardName={card.cardName}
                modalDescription={card.modalDescription}
                activityImages={card.activityImages}
                activityDate={card.activityDate}
                taskList={card.activityTasks}
              />
            );
          })}

          <Center display={isSmallerThan991 ? "none" : "flex"}>
            <div
              className="circle beadTip"
              style={{
                background: useColorModeValue(
                  "#ffd5a4",
                  Colours.darkModeMainCol
                ),
              }}
            ></div>
          </Center>
        </Container>
      </Container>
    </>
  );
};
