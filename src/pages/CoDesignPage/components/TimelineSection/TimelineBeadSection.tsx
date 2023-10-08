import {
  Box,
  Center,
  Heading,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import { TimelineCard } from "./TimelineCard";
//import Xarrow from "react-xarrows";
import { Colours } from "../../../../colourScheme";
import { motion } from "framer-motion";
import { useState } from "react";
import { timelineBeadAnim } from "./helpers/timelineAnims";

export const TimelineBeadSection = ({
  orderInTimeline,
  isOnLeft,
  cardImageURL,
  cardName,
  modalDescription,
  activityDate,
  taskList,
  isCompact,
  activityImages,
}: {
  orderInTimeline: number;
  isOnLeft: boolean;
  cardImageURL: string;
  cardName: string;
  isCompact: boolean;
  modalDescription: string;
  activityImages: string[];
  activityDate: string;
  taskList: string[];
}): JSX.Element => {
  const [arrow, setArrow] = useState(false);

  const SectionCard = (): JSX.Element => {
    return (
      <TimelineCard
        id={`workshop${orderInTimeline.toString()}`}
        imageURL={cardImageURL}
        cardName={cardName}
        modalDescription={modalDescription}
        activityDate={activityDate}
        taskList={taskList}
        activityImages={activityImages}
        onImageLoad={isCompact ? () => setArrow(false) : () => setArrow(true)}
      />
    );
  };
  return (
    <Box className="timelineSection" zIndex={15}>
      {/**{arrow ? (
        <motion.div className="arrow">
          <Xarrow
            start={
              isCompact
                ? `workshop${orderInTimeline.toString()}`
                : `bead${orderInTimeline.toString()}`
            }
            end={`workshop${orderInTimeline.toString()}`}
            path="smooth"
            curveness={1}
            color={useColorModeValue(
              Colours.lightModeMainCol,
              Colours.darkModeMainCol
            )}
          />
        </motion.div>
      ) : null} */}
      <SimpleGrid columns={isCompact ? 1 : 3}>
        {isOnLeft ? <SectionCard /> : <Box></Box>}
        <Center>
          <motion.div
            variants={timelineBeadAnim}
            initial="hidden"
            whileInView="visible"
            className="circle bead"
            style={{
              background: useColorModeValue("#ffd5a4", Colours.darkModeMainCol),
              display: isCompact ? "none" : "flex",
            }}
            id={`bead${orderInTimeline.toString()}`}
          >
            <Heading
              size="sm"
              zIndex={90}
              maxW={"100%"}
              textAlign={"center"}
              position={"absolute"}
              top="50%"
              transform={"translate(0,-50%)"}
            >
              {activityDate}
            </Heading>
          </motion.div>
        </Center>
        {isOnLeft ? <Box></Box> : <SectionCard />}
      </SimpleGrid>
    </Box>
  );
};
