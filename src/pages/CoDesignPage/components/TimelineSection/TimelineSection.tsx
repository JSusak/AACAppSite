import { Box, Center, Container, Heading, Text } from "@chakra-ui/react";
import "./timelinesection.scss";

import { TimelineBeadSection } from "./TimelineBeadSection";

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

          <TimelineBeadSection
            orderInTimeline={1}
            isOnLeft={true}
            cardImageURL={""}
            cardName={"Workshop 1"}
            modalDescription={
              "Modal description for workshop 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }
            activityLocation={"Bush House"}
            activityDate={"Sep. 2022"}
            taskList={["Workshop activity 1", "workshop activity 2"]}
          />
          <TimelineBeadSection
            orderInTimeline={2}
            isOnLeft={false}
            cardImageURL={""}
            cardName={"Workshop 2"}
            modalDescription={
              "Modal description for workshop 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }
            activityLocation={"Bush House"}
            activityDate={"Oct. 2022"}
            taskList={["Workshop activity 1", "workshop activity 2"]}
          />
          <TimelineBeadSection
            orderInTimeline={3}
            isOnLeft={true}
            cardImageURL={""}
            cardName={"Workshop 3"}
            modalDescription={
              "Modal description for workshop 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }
            activityLocation={"Bush House"}
            activityDate={"Dec. 2022"}
            taskList={["Workshop activity 1", "workshop activity 2"]}
          />
          <TimelineBeadSection
            orderInTimeline={4}
            isOnLeft={false}
            cardImageURL={""}
            cardName={"Workshop 4"}
            modalDescription={
              "Modal description for workshop 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }
            activityLocation={"Bush House"}
            activityDate={"Feb. 2023"}
            taskList={["Workshop activity 1", "workshop activity 2"]}
          />
          <Center>
            <div className="circle beadTip"></div>
          </Center>
        </Container>
      </Container>
    </>
  );
};
